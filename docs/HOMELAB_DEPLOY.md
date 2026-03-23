# Homelab Deployment Guide

## Overview

Baseline Cabinetry is a SvelteKit application deployed as a Docker container on the LED Baseline VPS, fronted by Traefik as a reverse proxy with Authentik providing SSO for protected routes.

## Prerequisites

- Docker + Docker Compose
- Traefik v3 running as a network proxy
- Authentik configured for SSO (admin routes only)
- A working SMTP relay (e.g., Postfix, Mailgun SMTP, Fastmail SMTP)

## Environment Variables

Create a `.env` file (see `.env.example`) with the following:

| Variable | Description | Example |
|---|---|---|
| `SMTP_HOST` | SMTP server hostname | `smtp.fastmail.com` |
| `SMTP_PORT` | SMTP port (587 = STARTTLS, 465 = SSL) | `587` |
| `SMTP_USER` | SMTP auth username | `contact@baselinecabinetry.com` |
| `SMTP_PASS` | SMTP auth password / app password | `hunter2` |
| `CONTACT_EMAIL` | Recipient email for quote requests | `info@baselinecabinetry.com` |

## Docker Compose

```yaml
services:
  baseline-cabinetry:
    image: ghcr.io/your-org/baseline-cabinetry:latest
    restart: unless-stopped
    env_file: .env
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.baseline.rule=Host(`baselinecabinetry.com`)"
      - "traefik.http.routers.baseline.entrypoints=websecure"
      - "traefik.http.routers.baseline.tls.certresolver=letsencrypt"
    networks:
      - traefik

networks:
  traefik:
    external: true
```

## Building

```bash
docker build -t baseline-cabinetry .
```

## Deploying

```bash
docker compose pull
docker compose up -d
```

## Logs

```bash
docker compose logs -f baseline-cabinetry
```
