# Future Enhancements

This document tracks planned features that are intentionally deferred. Do not implement these until explicitly scoped.

---

## Phase 2: Admin UI for Content Editing

### Overview

An authenticated admin interface allowing the site owner to edit copy, update images, and manage site content without code changes.

### Goals

- Edit page text (headings, paragraphs, CTAs) via a WYSIWYG or simple form interface
- Upload/replace hero and gallery images
- Manage project showcase entries (add, reorder, remove)

### Tech Plan

- Protected by **Authentik SSO** (forward auth via Traefik middleware)
- Admin routes under `/admin/*` — Traefik forwards auth to Authentik before serving
- Content stored in a lightweight backend (e.g., SQLite via Drizzle, or flat JSON files in a volume)
- SvelteKit form actions for all mutations

### Authentik Integration Notes

- Traefik `forwardAuth` middleware pointing to Authentik's forward auth URL
- Authentik application configured for `baselinecabinetry.com/admin`
- Group-based access: only users in `baseline-admin` group can access

### Not Included

- Public-facing user accounts
- E-commerce or payment flows
- CMS platform (Contentful, Sanity, etc.) — keep it self-hosted

---

## Phase 3: Gallery / Portfolio Page

Full project gallery with filterable categories (kitchens, bathrooms, custom furniture). Lightbox support for full-size images.

---

## Phase 4: Testimonials

Display customer testimonials. Admin UI (Phase 2) would allow adding/editing these without a deploy.
