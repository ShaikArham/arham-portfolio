import os, time, threading, re
from collections import defaultdict, deque
from datetime import datetime, timezone
from flask import Flask, request, jsonify
import requests

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 4096
EMAIL = os.getenv("NOTIFY_TO", "")
API_KEY = os.getenv("RESEND_API_KEY", "")
FROM = os.getenv("RESEND_FROM", "Portfolio Notifications <onboarding@resend.dev>")
ALLOWED = set(filter(None, os.getenv("ALLOWED_ORIGINS", "").split(",")))
EVENTS = {"page_view", "section_view", "project_open", "external_project_click", "cv_view", "recognition_open", "certificate_view", "video_open", "video_chapter", "contact_click", "contact_form_submit", "linkedin_click"}
hits = defaultdict(deque)
lock = threading.Lock()
SAFE = re.compile(r"^[a-zA-Z0-9 _.,:/#()&+\-]{0,90}$")

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
    session = data.get("session", "")
    detail = data.get("detail", "")
    section = data.get("section", "")
    if not isinstance(session, str) or not re.fullmatch(r"[a-f0-9]{12}", session):
        return jsonify(error="invalid session"), 400
    if not isinstance(detail, str) or not SAFE.fullmatch(detail):
        return jsonify(error="invalid detail"), 400
    if not isinstance(section, str) or not SAFE.fullmatch(section):
        return jsonify(error="invalid section"), 400
    # IP used in memory for rate limiting only, never stored or sent by email.
    ip = request.remote_addr or "unknown"
    now = time.monotonic()
    with lock:
        q = hits[ip]
        while q and now - q[0] > 3600:
            q.popleft()
        if len(q) >= 100:
            return jsonify(error="rate limited"), 429
        q.append(now)
    if not EMAIL or not API_KEY:
        return jsonify(error="email not configured"), 503
    lines = [
        "Portfolio activity (client-reported)",
        "Action: " + event_name.replace("_", " ").title(),
        "Detail: " + (detail or "Not specified"),
        "Section: " + (section or "Not specified"),
        "Session: " + session,
        "Origin: " + origin,
        "Time (UTC): " + datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC"),
        "",
        "Session ID is temporary and anonymous; it groups activity from one open browser tab.",
        "Events are not proof of unique visitors, attention, or successful PDF reading."
    ]
    payload = {
        "from": FROM, "to": [EMAIL],
        "subject": "PORTFOLIO | " + event_name.replace("_", " ").title() + (" | " + detail[:40] if detail else ""),
        "text": "\n".join(lines)
    }
    try:
        r = requests.post("https://api.resend.com/emails", headers={"Authorization": "Bearer " + API_KEY}, json=payload, timeout=8)
        if r.status_code not in (200, 201):
            app.logger.warning("Resend rejected notification: status=%s", r.status_code)
            return jsonify(error="delivery provider rejected request"), 502
    except requests.RequestException:
        return jsonify(error="delivery provider unavailable"), 502
    return jsonify(status="accepted"), 202
