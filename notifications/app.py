import os, time, threading
from collections import defaultdict, deque
from flask import Flask, request, jsonify
import requests

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 2048
EMAIL = os.getenv("NOTIFY_TO", "")
API_KEY = os.getenv("RESEND_API_KEY", "")
FROM = os.getenv("RESEND_FROM", "Portfolio Notifications <onboarding@resend.dev>")
ALLOWED = set(filter(None, os.getenv("ALLOWED_ORIGINS", "").split(",")))
EVENTS = {"page_view", "project_open", "cv_view", "cv_download", "recognition_open", "video_play"}
hits = defaultdict(deque)
lock = threading.Lock()

@app.after_request
def cors(response):
    origin = request.headers.get("Origin", "")
    if origin in ALLOWED:
        response.headers["Access-Control-Allow-Origin"] = origin
        response.headers["Vary"] = "Origin"
        response.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    response.headers["Cache-Control"] = "no-store"
    return response

@app.get("/health")
def health():
    return jsonify(status="ok", configured=bool(EMAIL and API_KEY and ALLOWED))

@app.route("/event", methods=["OPTIONS", "POST"])
def event():
    origin = request.headers.get("Origin", "")
    if origin not in ALLOWED:
        return jsonify(error="origin not allowed"), 403
    if request.method == "OPTIONS":
        return "", 204
    data = request.get_json(silent=True)
    if not isinstance(data, dict) or data.get("event") not in EVENTS:
        return jsonify(error="invalid event"), 400
    event_name = data["event"]
    # Privacy: no visitor IP, cookies, name, email, full URL, or fingerprint is stored or emailed.
    # A modest per-IP limit is used transiently only to prevent notification flooding.
    ip = request.headers.get("CF-Connecting-IP") or request.remote_addr or "unknown"
    now = time.monotonic()
    with lock:
        q = hits[ip]
        while q and now - q[0] > 3600:
            q.popleft()
        if len(q) >= 20:
            return jsonify(error="rate limited"), 429
        q.append(now)
    if not EMAIL or not API_KEY:
        return jsonify(error="email not configured"), 503
    payload = {
        "from": FROM, "to": [EMAIL],
        "subject": "PORTFOLIO | " + event_name.replace("_", " ").title(),
        "text": "Portfolio event: " + event_name + "\nOrigin: " + origin + "\nTime (UTC): " + time.strftime("%Y-%m-%d %H:%M:%S UTC", time.gmtime()) + "\nClient-reported event; not proof of a unique human visitor."
    }
    try:
        r = requests.post("https://api.resend.com/emails", headers={"Authorization": "Bearer " + API_KEY}, json=payload, timeout=8)
        if r.status_code not in (200, 201):
            app.logger.warning("Resend rejected notification: status=%s", r.status_code)
            return jsonify(error="delivery provider rejected request"), 502
    except requests.RequestException:
        return jsonify(error="delivery provider unavailable"), 502
    return jsonify(status="accepted"), 202
