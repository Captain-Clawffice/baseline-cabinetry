# Homelab Deployment Guide — Baseline Cabinetry

Give this document to your homelab agent to configure Traefik routing.

## Service Details

| Property | Value |
|----------|-------|
| **Service Name** | baseline-cabinetry |
| **Internal URL** | `http://<container-ip>:3000` |
| **External Domain** | `baselinecabinetry.compewtertutor.com` |
| **Protocol** | HTTP (Traefik handles TLS) |

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

## Network Requirements

- Container/host must be on Traefik's docker network OR reachable via internal IP
- Port 3000 must be exposed internally
- DNS: `baselinecabinetry.compewtertutor.com` → your Traefik host

## Verification

After configuration:
1. `curl http://localhost:3000` from inside the network
2. `curl https://baselinecabinetry.compewtertutor.com` from outside
3. Check Traefik dashboard for the new router

## Notes

- If using Docker, ensure the container is on the same network as Traefik
- If running on host, use the host's internal IP in the load balancer config
- TLS is handled by Traefik via Let's Encrypt

---

**For the homelab agent:** This follows the same pattern as ledbaseline-leads. Adjust IPs/ports as needed for your setup.
