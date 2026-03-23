# Architecture

## Deployment

Baseline Cabinetry is self-hosted on the **LED Baseline VPS** as a Docker container.

### Stack

| Layer | Technology |
|---|---|
| App | SvelteKit (Node adapter) |
| Container | Docker / Docker Compose |
| Reverse Proxy | Traefik v3 (TLS via Let's Encrypt) |
| Auth (admin) | Authentik SSO (forward auth) |
| Email | Server-side SMTP via Nodemailer |

### Request Flow

```
Internet → Traefik (TLS termination) → baseline-cabinetry container
                                     ↘ /admin/* → Authentik forward auth check
```

### Email Flow

Contact form submissions POST to `/api/contact` (SvelteKit server route). The server sends email via SMTP using Nodemailer. SMTP credentials are provided as environment variables — no third-party form services required.

### Environment

See `.env.example` and `docs/HOMELAB_DEPLOY.md` for required environment variables.

### Dockerfile

A `Dockerfile` is included in the repo root. Build with:

```bash
docker build -t baseline-cabinetry .
```

See `docs/HOMELAB_DEPLOY.md` for full deployment instructions.
