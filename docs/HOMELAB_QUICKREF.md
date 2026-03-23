# Quick Reference — New Service Traefik Setup

## Template for any new service

```yaml
# Docker Compose labels
- "traefik.enable=true"
- "traefik.http.routers.<SERVICE_NAME>.rule=Host(`<DOMAIN>`)"
- "traefik.http.routers.<SERVICE_NAME>.entrypoints=websecure"
- "traefik.http.routers.<SERVICE_NAME>.tls=true"
- "traefik.http.routers.<SERVICE_NAME>.tls.certresolver=letsencrypt"
- "traefik.http.services.<SERVICE_NAME>.loadbalancer.server.port=<PORT>"
```

## Current Services

| Service | Domain | Port | Status |
|---------|--------|------|--------|
| LED Baseline Leads | ledbaseline-leads.compewtertutor.com | 3333 | ✅ Live |
| Baseline Cabinetry | baselinecabinetry.compewtertutor.com | 3000 | 🚧 Pending |

## Steps to add a new service

1. **Start the service** on an internal port
2. **Add Traefik config** (labels or file)
3. **Add DNS** record pointing to Traefik
4. **Verify** with curl from outside

That's it. Traefik handles TLS automatically via Let's Encrypt.
