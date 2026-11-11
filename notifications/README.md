# Portfolio notification backend

Render Python service. Build: `pip install -r notifications/requirements.txt`. Start: `gunicorn --chdir notifications app:app --bind 0.0.0.0:$PORT --workers 1`.

Environment: `RESEND_API_KEY`, `NOTIFY_TO`, `RESEND_FROM`, `ALLOWED_ORIGINS` (comma-separated exact HTTPS origins). Resend test sender onboarding@resend.dev may only deliver to the Resend account's verified email; use a verified domain sender for general delivery. Never commit API keys. Notifications are client-reported, rate-limited and not unique-visitor analytics.
