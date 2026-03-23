# Homelab Deployment Guide — Baseline Cabinetry

Give this document to your homelab agent to configure Traefik routing.

## Service Details

| Property | Value |
|----------|-------|
| **Service Name** | baseline-cabinetry |
| **Internal URL** | `http://<container-ip>:3000` |
| **External Domain** | `baselinecabinetry.compewtertutor.com` |
| **Protocol** | HTTP (Traefik handles TLS) |

## Environment Variables

Create a `.env` file (see `.env.example`) alongside your `docker-compose.yml`:

| Variable | Description | Example |
|---|---|---|
| `SMTP_HOST` | SMTP server hostname | `smtp.fastmail.com` |
| `SMTP_PORT` | SMTP port (587 = STARTTLS, 465 = SSL) | `587` |
| `SMTP_USER` | SMTP auth username | `contact@baselinecabinetry.com` |
| `SMTP_PASS` | SMTP auth password / app password | `hunter2` |
| `CONTACT_EMAIL` | Recipient for quote request emails | `info@baselinecabinetry.com` |

## Traefik Configuration

Add this to your Traefik dynamic configuration (docker-compose labels, file, or whichever method you use):

### Docker Compose Labels (if containerized)

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.baseline-cabinetry.rule=Host(`baselinecabinetry.compewtertutor.com`)"
  - "traefik.http.routers.baseline-cabinetry.entrypoints=websecure"
  - "traefik.http.routers.baseline-cabinetry.tls=true"
  - "traefik.http.routers.baseline-cabinetry.tls.certresolver=letsencrypt"
  - "traefik.http.services.baseline-cabinetry.loadbalancer.server.port=3000"
```

### File-based Dynamic Config (traefik/dynamic/baseline-cabinetry.yml)

```yaml
http:
  routers:
    baseline-cabinetry:
      rule: "Host(`baselinecabinetry.compewtertutor.com`)"
      entryPoints:
        - websecure
      tls:
        certResolver: letsencrypt
      service: baseline-cabinetry
  
  services:
    baseline-cabinetry:
      loadBalancer:
        servers:
          - url: "http://<container-ip>:3000"
```

## Building & Running

### Build the Docker image

```bash
docker build -t baseline-cabinetry .
```

### Run with Docker Compose

```yaml
services:
  baseline-cabinetry:
    image: baseline-cabinetry:latest
    restart: unless-stopped
    env_file: .env
    ports:
      - "3000:3000"
    labels:
      - "traefik.enable=true"
      # ... (see labels above)
    networks:
      - traefik

networks:
  traefik:
    external: true
```

```bash
docker compose up -d
```

## Network Requirements

- Container/host must be on Traefik's docker network OR reachable via internal IP
- Port 3000 must be exposed internally
- DNS: `baselinecabinetry.compewtertutor.com` → your Traefik host

## Verification

After configuration:
1. `curl http://localhost:3000` from inside the network
2. `curl https://baselinecabinetry.compewtertutor.com` from outside
3. Check Traefik dashboard for the new router
4. Submit the contact form and verify an email arrives at `CONTACT_EMAIL`

## Notes

- If using Docker, ensure the container is on the same network as Traefik
- If running on host, use the host's internal IP in the load balancer config
- TLS is handled by Traefik via Let's Encrypt
- SMTP credentials should be kept in `.env` (not committed to git — `.env` is gitignored)

---

**For the homelab agent:** This follows the same pattern as ledbaseline-leads. Adjust IPs/ports as needed for your setup.
