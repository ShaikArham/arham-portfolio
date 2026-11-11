import html
import ipaddress
import os
import re
import threading
import time
from collections import defaultdict, deque
from datetime import datetime
from zoneinfo import ZoneInfo

import requests
from flask import Flask, jsonify, request

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 8192
EMAIL = os.getenv("NOTIFY_TO", "")
API_KEY = os.getenv("RESEND_API_KEY", "")
FROM = os.getenv("RESEND_FROM", "Portfolio Notifications <onboarding@resend.dev>")
ALLOWED = set(filter(None, os.getenv("ALLOWED_ORIGINS", "").split(",")))
lock = threading.Lock()
hits = defaultdict(deque)
sent_sessions = {}
SAFE = re.compile(r"^[a-zA-Z0-9 _.,:/#()&+\\-]{0,100}$")

def device_info(ua, mobile_hint=False):
    u = ua.lower()
    browser = ("Edge" if "edg/" in u or "edgios/" in u else
               "Opera" if "opr/" in u or "opios/" in u else
               "Firefox" if "firefox/" in u or "fxios/" in u else
               "Chrome" if "chrome/" in u or "crios/" in u else
               "Safari" if "safari/" in u else "Unknown")
    os_name = ("Android" if "android" in u else "iOS" if "iphone" in u or "ipad" in u else
               "Windows" if "windows" in u else "macOS" if "mac os" in u or "macintosh" in u else
               "Linux" if "linux" in u else "Unknown")
    device = ("Tablet" if "ipad" in u or "tablet" in u else
              "Mobile" if mobile_hint or "iphone" in u or "mobile" in u else
              "Desktop / other" if any(x in u for x in ("windows", "macintosh", "linux", "x11")) else "Unknown")
    return browser, os_name, device

def public_ip():
    # Render's proxy sets X-Forwarded-For. Only use it on Render, not arbitrary hosts.
    value = request.headers.get("X-Forwarded-For", "") if os.getenv("RENDER") else ""
    candidate = value.split(",")[0].strip() if value else request.remote_addr
    try:
        address = ipaddress.ip_address(candidate)
        return str(address) if address.is_global else None
    except ValueError:
        return None

def approximate_location(ip):
    if not ip:
        return "Unavailable"
    try:
        response = requests.get("https://ipwho.is/" + ip, timeout=2)
        data = response.json() if response.ok else {}
        if data.get("success"):
            return ", ".join(filter(None, (data.get("city"), data.get("country"))))[:100] or "Unavailable"
    except (requests.RequestException, ValueError, TypeError):
        pass
    return "Unavailable"

def esc(value):
    return html.escape(str(value), quote=True)

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
    if not isinstance(data, dict) or data.get("event") != "session_summary":
        return jsonify(error="unsupported event"), 400
    session = data.get("session")
    events = data.get("events")
    if not isinstance(session, str) or not re.fullmatch(r"[a-f0-9]{12}", session):
        return jsonify(error="invalid session"), 400
    if not isinstance(events, list) or not 1 <= len(events) <= 30:
        return jsonify(error="invalid activity"), 400
    for item in events:
        if not isinstance(item, dict) or any(not isinstance(item.get(k), str) or not SAFE.fullmatch(item[k]) for k in ("type", "detail", "section")):
            return jsonify(error="invalid activity detail"), 400
        if not isinstance(item.get("seconds"), int) or not 0 <= item["seconds"] <= 86400:
            return jsonify(error="invalid event time"), 400
    duration = data.get("duration_seconds", 0)
    if not isinstance(duration, int) or not 0 <= duration <= 86400:
        return jsonify(error="invalid duration"), 400
    browser_info = data.get("browser_info") or {}
    if not isinstance(browser_info, dict):
        return jsonify(error="invalid browser info"), 400
    ua = browser_info.get("user_agent", "")
    if not isinstance(ua, str) or len(ua) > 300:
        return jsonify(error="invalid user agent"), 400
    ua = ua or request.headers.get("User-Agent", "")
    browser, os_name, device = device_info(ua, browser_info.get("mobile") is True)
    ip = public_ip()
    now = time.monotonic()
    with lock:
        for key in list(sent_sessions):
            if now - sent_sessions[key] > 86400:
                del sent_sessions[key]
        if session in sent_sessions:
            return jsonify(status="already_reported"), 200
        q = hits[ip or "unknown"]
        while q and now - q[0] > 3600:
            q.popleft()
        if len(q) >= 30:
            return jsonify(error="rate limited"), 429
        q.append(now)
    if not EMAIL or not API_KEY:
        return jsonify(error="email not configured"), 503
    location = approximate_location(ip)
    local_time = datetime.now(ZoneInfo("Europe/Dublin")).strftime("%d %b %Y, %H:%M %Z")
    labels = {"cv_view": "Viewed CV link", "project_interaction": "Explored project",
              "certificate_interaction": "Explored certificates", "video_interaction": "Interacted with intro video",
              "external_link": "Opened external link", "linkedin_click": "Opened LinkedIn",
              "contact_click": "Clicked email", "contact_submit": "Submitted contact form"}
    rows = []
    plain = []
    summary_counts = {}
    for i, item in enumerate(events, 1):
        action = labels.get(item["type"], item["type"].replace("_", " ").title())
        detail = item["detail"] or "No details"
        summary_counts[action] = summary_counts.get(action, 0) + 1
        plain.append(f'{i}. +{item["seconds"]}s | {action} | {detail} | {item["section"]}')
        rows.append(f'<tr><td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#64748b">+{item["seconds"]}s</td>'
                    f'<td style="padding:12px;border-bottom:1px solid #e5e7eb"><strong>{esc(action)}</strong><br>'
                    f'<span style="color:#64748b">{esc(detail)} · {esc(item["section"])}</span></td></tr>')
    metadata = [("Approx. location", location), ("Browser", browser), ("Device", device),
                ("Operating system", os_name), ("Session length", f'{duration} seconds'),
                ("Reported at", local_time), ("Session", session)]
    meta_html = "".join(f'<tr><td style="padding:7px 12px;color:#64748b">{esc(k)}</td><td style="padding:7px 12px">{esc(v)}</td></tr>' for k, v in metadata)
    overview = " · ".join(f"{count} {action.lower()}" for action, count in summary_counts.items())
    overview_html = esc(overview)
    html_body = ('<div style="font-family:Arial,sans-serif;max-width:660px;margin:auto;color:#0f172a">'
                 '<div style="background:#0f172a;color:white;padding:24px;border-radius:12px 12px 0 0">'
                 '<div style="font-size:12px;letter-spacing:2px;color:#a5b4fc">ARHAM PORTFOLIO</div>'
                 '<h2 style="margin:10px 0 0">Visitor activity summary</h2></div>'
                 '<div style="padding:24px;border:1px solid #e5e7eb;border-radius:0 0 12px 12px">'
                 f'<p style="font-size:16px;font-weight:bold;color:#334155">{overview_html}</p>'
                 f'<p style="color:#475569">{len(events)} recorded interaction(s) in one browser tab. '
                 'This is client-reported activity, not proof of reading or unique identity.</p>'
                 f'<table style="border-collapse:collapse;width:100%">{meta_html}</table>'
                 '<h3 style="margin-top:28px">Activity timeline</h3>'
                 f'<table style="border-collapse:collapse;width:100%">{ "".join(rows) }</table>'
                 '<p style="font-size:12px;color:#64748b;margin-top:24px">Location is an approximate IP-based estimate '
                 'and may be unavailable or inaccurate. Browser and device are inferred. No GPS or visitor identity is collected.</p>'
                 '</div></div>')
    text_body = ("PORTFOLIO VISITOR ACTIVITY\n\n" +
                 "\n".join(f"{k}: {v}" for k, v in metadata) +
                 "\n\nACTIVITY TIMELINE\n" + "\n".join(plain) +
                 "\n\nClient-reported interactions; location and device estimates may be inaccurate.")
    payload = {"from": FROM, "to": [EMAIL], "subject": f"PORTFOLIO | {len(events)} interactions | {device}",
               "html": html_body, "text": text_body}
    try:
        response = requests.post("https://api.resend.com/emails",
                                 headers={"Authorization": "Bearer " + API_KEY}, json=payload, timeout=10)
        if response.status_code not in (200, 201):
            app.logger.warning("Resend rejected activity summary: status=%s", response.status_code)
            return jsonify(error="delivery provider rejected request"), 502
    except requests.RequestException:
        return jsonify(error="delivery provider unavailable"), 502
    with lock:
        sent_sessions[session] = now
    return jsonify(status="accepted"), 202
