# Baseline Cabinetry — Website Architecture Plan

> **Project:** Baseline Cabinetry (DBA of LED Baseline)
> **Owner:** Geoff
> **Type:** Informational brochure site with quote request functionality
> **Date:** 2026-03-23

---

## 1. Framework Decision: SvelteKit

**Recommendation: SvelteKit** over TanStack Start.

| Criteria | SvelteKit | TanStack Start |
|---|---|---|
| Maturity | Stable since 2023, large ecosystem | Still maturing, smaller community |
| SSR | First-class, zero-config | Supported but newer |
| Learning curve | Low — HTML-like syntax | Higher — React mental model required |
| Bundle size | Tiny — compiles away the framework | Larger — ships React runtime |
| Community/plugins | Rich adapter ecosystem | Growing but limited |
| Deployment | Adapters for Vercel, Netlify, Node, static | Fewer deployment targets |
| Content sites | Ideal — built for this exact use case | Overkill for brochure sites |

**Rationale:** For a 5-page informational site, SvelteKit delivers the smallest bundles, fastest load times, and simplest developer experience. TanStack Start shines for complex data-heavy apps — not needed here.

---

## 2. Site Structure

```
/                       → Home
/about                  → About Us
/services               → Services & Products
/services/[slug]        → Individual service detail (optional phase 2)
/gallery                → Project Gallery
/contact                → Contact / Request a Quote
```

### 2.1 Home Page
- **Hero:** Full-width image with tagline — *"Custom Cabinetry, Built to Last. 20+ Years of Craftsmanship."*
- **Value props:** 3-column grid (Quality Materials • Custom Design • Expert Craftsmanship)
- **Featured services:** Card grid linking to /services
- **Testimonial area:** Placeholder for future customer quotes
- **CTA:** "Request a Free Quote" button → /contact

### 2.2 About Us
- Company story — Geoff's 20+ years of experience
- Mission/values section
- Workshop photo(s)
- Connection to LED Baseline lineage (optional)

### 2.3 Services / Products
- Overview grid of all cabinet types with photos and descriptions
- Each card links to either an anchor or a dedicated detail page (phase 2)

### 2.4 Gallery
- Masonry or grid layout with lightbox
- Categorized by project type (kitchen, bath, built-in, etc.)
- Placeholder images initially; replaced with real project photos over time

### 2.5 Contact / Request a Quote
- Quote request form:
  - Name, Email, Phone
  - Project type (dropdown: Kitchen, Bathroom, Built-in, Closet, Entertainment Center, Other)
  - Description (textarea)
  - Preferred timeline (dropdown)
  - File upload for reference images (optional, phase 2)
- Business hours, phone, email
- Embedded map (optional)
- Form submissions → email via Resend, Formspree, or Netlify Forms

---

## 3. Cabinet Offerings

Full list of services to feature on the site:

| Category | Description |
|---|---|
| **Kitchen Cabinets** | Full kitchen builds — base, wall, pantry, island cabinets. Face-frame and frameless styles. |
| **Bathroom Vanities** | Single and double vanities, floating and freestanding, custom sizing. |
| **Custom Built-ins** | Bookshelves, window seats, mudroom cubbies, home office desks. |
| **Closet Systems** | Walk-in and reach-in closet organizers, wardrobe cabinets. |
| **Entertainment Centers** | Media walls, TV surrounds, integrated shelving and cable management. |
| **Laundry Room Cabinets** | Upper/lower cabinets, sorting stations, countertop workspace. |
| **Garage Storage** | Heavy-duty wall cabinets, workbench systems, tool storage. |
| **Fireplace Surrounds** | Mantels and built-in shelving flanking fireplaces. |
| **Butler's Pantries** | Transitional storage between kitchen and dining with display shelving. |
| **Cabinet Refacing & Refinishing** | Update existing cabinets with new doors, drawer fronts, and finishes. |

---

## 4. Image Strategy

### 4.1 Placeholder Stock Photos

| # | Slot | Stock Photo URL | Resolution Target |
|---|---|---|---|
| 1 | **Hero banner** | https://unsplash.com/photos/white-wooden-kitchen-cabinet-mp3Ri6bMwms | 1920×800 |
| 2 | **Kitchen cabinets** | https://unsplash.com/photos/modern-kitchen-with-wooden-cabinets-and-island-XU_ODlSO9ac | 800×600 |
| 3 | **Bathroom vanity** | https://unsplash.com/photos/white-ceramic-sink-with-stainless-steel-faucet-U3hmgnIeJOY | 800×600 |
| 4 | **Workshop / craftsman** | https://www.pexels.com/photo/carpenter-working-in-a-busy-workshop-28513061/ | 800×600 |
| 5 | **Built-in shelving** | https://unsplash.com/photos/white-wooden-shelf-beside-white-wall-FV3GConVSss | 800×600 |
| 6 | **Wood grain texture** (background) | https://unsplash.com/photos/brown-wooden-surface-wG923J9naFQ | 1920×400 |
| 7 | **About page hero** | https://unsplash.com/photos/man-building-structure-during-daytime-c4XoMGxfsVU | 1920×600 |
| 8 | **Gallery placeholder 1** | https://unsplash.com/photos/white-and-brown-kitchen-counter-sFLVTqNzG2I | 600×400 |
| 9 | **Gallery placeholder 2** | https://unsplash.com/photos/white-wooden-kitchen-island-jDGkiud2MFk | 600×400 |
| 10 | **Contact page** | https://unsplash.com/photos/blue-ballpoint-pen-on-white-notebook-OQMZwNd3ThU | 1200×400 |

### 4.2 ComfyUI Replacement Prompts

When ready to generate custom images, use these prompts:

| # | Slot | ComfyUI Prompt | Resolution |
|---|---|---|---|
| 1 | Hero banner | `professional photo of a modern custom kitchen with shaker-style white cabinets, quartz countertops, warm LED under-cabinet lighting, natural window light, wide angle, interior photography, 8k, photorealistic` | 1920×800 |
| 2 | Kitchen cabinets | `close-up of custom kitchen cabinetry with soft-close hinges open, solid maple wood, dovetail joints visible, warm studio lighting, product photography, photorealistic, 4k` | 800×600 |
| 3 | Bathroom vanity | `modern floating bathroom vanity cabinet, walnut wood, white marble countertop, brass fixtures, spa-like atmosphere, soft diffused lighting, interior design photography, photorealistic` | 800×600 |
| 4 | Workshop | `experienced craftsman working in a clean woodworking workshop, hand planing a cabinet door, sawdust, warm overhead lighting, wood shavings, professional workshop, documentary photography style` | 800×600 |
| 5 | Built-in shelving | `custom built-in bookshelf and window seat in a living room, painted white with adjustable shelves, styled with books and decor, natural light from large window, interior photography` | 800×600 |
| 6 | Wood texture | `seamless oak wood grain texture, close-up, warm honey tone, sanded smooth finish, natural patterns, studio lighting, tileable, high resolution` | 1920×400 |
| 7 | About hero | `wide shot of a professional cabinetry workshop, organized tools on pegboard wall, cabinet carcasses in progress on workbenches, natural light from clerestory windows, warm tones, documentary photography` | 1920×600 |
| 8 | Gallery 1 | `completed custom white shaker kitchen with island, pendant lights, stainless appliances, hardwood floor, evening golden hour light through windows, real estate photography style` | 600×400 |
| 9 | Gallery 2 | `custom entertainment center built-in with walnut shelving flanking a mounted TV, cable management hidden, LED accent lighting, modern living room, interior photography` | 600×400 |
| 10 | Contact page | `overhead view of a craftsman's workbench with cabinet blueprints, measuring tape, pencil, wood samples fanned out, shallow depth of field, warm lighting, lifestyle photography` | 1200×400 |

---

## 5. Tech Stack

### 5.1 Core

| Layer | Choice | Rationale |
|---|---|---|
| **Framework** | SvelteKit 2.x | SSR, tiny bundles, file-based routing |
| **Language** | TypeScript | Type safety, IDE support |
| **Styling** | Tailwind CSS 4 | Utility-first, fast iteration, tiny output with purge |
| **Icons** | Lucide Svelte | Lightweight, tree-shakable icon set |
| **Fonts** | Inter (body) + Playfair Display (headings) via Fontsource | Self-hosted for performance, no FOUT |

### 5.2 SEO Strategy

- **Per-page meta tags** via `<svelte:head>`:
  - `title`, `description`, `og:title`, `og:description`, `og:image`, `og:type`
  - Twitter card meta
  - Canonical URLs
- **Structured data (JSON-LD):**
  - `LocalBusiness` schema on every page (name, address, phone, hours)
  - `Service` schema on services page
  - `ImageGallery` schema on gallery page
  - `BreadcrumbList` on all inner pages
- **Sitemap:** Auto-generated via `@sveltejs/sitemap` or a custom endpoint
- **robots.txt:** Allow all, reference sitemap
- **Performance = SEO:** Core Web Vitals optimization (see 5.4)

### 5.3 Form Handling

**Option A (Simple):** Formspree or Netlify Forms — zero backend, email delivery included.
**Option B (Custom):** SvelteKit form action → Resend API for email delivery. More control, still serverless.

**Recommendation:** Start with Option A for speed, migrate to B if needed.

### 5.4 Performance Optimizations

- **Image format:** WebP with AVIF fallback via `<picture>` elements or `@sveltejs/enhanced-img`
- **Lazy loading:** All below-fold images use `loading="lazy"`
- **Preloading:** Hero image and critical fonts preloaded in `<head>`
- **Code splitting:** Automatic via SvelteKit route-based splitting
- **CSS:** Tailwind purges unused styles — expect <10KB CSS total
- **Prerendering:** All pages can be prerendered at build time (`export const prerender = true`)
- **Asset hashing:** Built-in via Vite for aggressive caching
- **Target:** Lighthouse 95+ across all categories

### 5.5 Deployment

**Recommendation: Vercel** (free tier is more than sufficient)

| Option | Pros | Cons |
|---|---|---|
| **Vercel** | SvelteKit adapter, auto preview deploys, analytics, fast CDN | Vendor lock-in (minimal for static) |
| **Netlify** | Similar to Vercel, built-in forms | Slightly slower builds |
| **Cloudflare Pages** | Fastest CDN, generous free tier | Adapter less mature |

**Domain:** Register or point `baselinecabinetry.com` (or similar) via DNS.

---

## 6. Project Structure

```
baseline-cabinetry/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Header.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── Hero.svelte
│   │   │   ├── ServiceCard.svelte
│   │   │   ├── GalleryGrid.svelte
│   │   │   ├── QuoteForm.svelte
│   │   │   ├── Testimonial.svelte
│   │   │   └── SEO.svelte          # Reusable meta tag component
│   │   ├── data/
│   │   │   ├── services.ts          # Cabinet types, descriptions, images
│   │   │   └── gallery.ts           # Gallery image data
│   │   └── utils/
│   │       └── seo.ts               # JSON-LD generators
│   ├── routes/
│   │   ├── +layout.svelte           # Global nav/footer, fonts
│   │   ├── +page.svelte             # Home
│   │   ├── about/+page.svelte
│   │   ├── services/+page.svelte
│   │   ├── gallery/+page.svelte
│   │   └── contact/+page.svelte
│   ├── app.css                      # Tailwind imports + custom properties
│   └── app.html                     # Shell template
├── static/
│   ├── images/                      # Optimized images
│   ├── favicon.ico
│   └── robots.txt
├── svelte.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── ARCHITECTURE.md                  # This file
```

---

## 7. Color Palette (Suggested)

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#2C3E50` | Dark navy — headers, nav |
| `primary-light` | `#34495E` | Hover states |
| `accent` | `#C8915F` | Warm wood/copper — CTAs, accents |
| `accent-light` | `#D4A574` | Hover states |
| `neutral-50` | `#FAFAF9` | Page background |
| `neutral-100` | `#F5F5F4` | Card backgrounds |
| `neutral-800` | `#292524` | Body text |
| `white` | `#FFFFFF` | Cards, sections |

Conveys: professionalism, warmth, craftsmanship. The wood-toned accent ties to the cabinet trade.

---

## 8. Implementation Phases

### Phase 1 — MVP (Target: 1-2 days)
- [ ] SvelteKit project scaffold with Tailwind
- [ ] Global layout (header, footer, responsive nav)
- [ ] Home page with hero, value props, service cards, CTA
- [ ] About page
- [ ] Services page with all cabinet types
- [ ] Contact page with working form (Formspree)
- [ ] Gallery page with placeholder grid
- [ ] SEO meta on all pages
- [ ] Deploy to Vercel

### Phase 2 — Polish
- [ ] Replace stock photos with ComfyUI-generated images or real project photos
- [ ] Add JSON-LD structured data
- [ ] Add testimonials section (real quotes from customers)
- [ ] Individual service detail pages
- [ ] Contact form file upload
- [ ] Google Analytics / Plausible integration

### Phase 3 — Growth
- [ ] Blog section for SEO content marketing
- [ ] Before/after project showcases
- [ ] Video walkthroughs of workshop
- [ ] Google Business Profile integration

---

## 9. Open Questions for Geoff

1. Does Baseline Cabinetry have an existing logo, or do we need to create one?
2. Physical address to display on site (for LocalBusiness schema + Google Maps)?
3. Business phone number and email for contact page?
4. Any specific cabinet styles or wood species to highlight as specialties?
5. Does he have any project photos ready to go, or are we starting with all placeholders?
6. Domain preference? (baselinecabinetry.com, baselinecabinets.com, etc.)
7. Any relationship to LED Baseline that should be mentioned on site?
