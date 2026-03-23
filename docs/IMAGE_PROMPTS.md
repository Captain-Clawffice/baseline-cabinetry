# IMAGE_PROMPTS.md — Baseline Cabinetry ComfyUI Generation Prompts

Use these prompts to generate custom AI images to replace the stock photo placeholders.
All prompts are tuned for photorealistic output. Recommended sampler: DPM++ 2M Karras, 30–40 steps, CFG 7.

---

## 1. Hero Banner
**Target file:** `static/images/hero.jpg`
**Resolution:** 1920×800

```
professional photo of a modern custom kitchen with shaker-style white cabinets, quartz countertops, warm LED under-cabinet lighting, natural window light, wide angle, interior photography, 8k, photorealistic
```

**Negative:** cartoon, illustration, oversaturated, distorted, ugly cabinets, blurry

---

## 2. Kitchen Cabinets (Services / Gallery)
**Target file:** `static/images/kitchen-cabinets.jpg`
**Resolution:** 800×600

```
close-up of custom kitchen cabinetry with soft-close hinges open, solid maple wood, dovetail joints visible, warm studio lighting, product photography, photorealistic, 4k
```

**Negative:** cheap cabinets, laminate, cartoon, illustration

---

## 3. Bathroom Vanity
**Target file:** `static/images/bathroom-vanity.jpg`
**Resolution:** 800×600

```
modern floating bathroom vanity cabinet, walnut wood, white marble countertop, brass fixtures, spa-like atmosphere, soft diffused lighting, interior design photography, photorealistic
```

**Negative:** dated, plastic, laminate, cartoon, illustration

---

## 4. Workshop / Craftsman
**Target file:** `static/images/workshop.jpg`
**Resolution:** 800×600

```
experienced craftsman working in a clean woodworking workshop, hand planing a cabinet door, sawdust, warm overhead lighting, wood shavings, professional workshop, documentary photography style
```

**Negative:** cartoon, illustration, unsafe conditions, messy/dirty

---

## 5. Built-in Shelving
**Target file:** `static/images/builtins.jpg`
**Resolution:** 800×600

```
custom built-in bookshelf and window seat in a living room, painted white with adjustable shelves, styled with books and decor, natural light from large window, interior photography
```

**Negative:** cartoon, illustration, poor construction, laminate

---

## 6. Wood Grain Texture (Background)
**Target file:** `static/images/wood-texture.jpg`
**Resolution:** 1920×400

```
seamless oak wood grain texture, close-up, warm honey tone, sanded smooth finish, natural patterns, studio lighting, tileable, high resolution
```

**Negative:** cartoon, damaged wood, splinters, dark/muddy tones

---

## 7. About Page Hero
**Target file:** `static/images/about-hero.jpg`
**Resolution:** 1920×600

```
wide shot of a professional cabinetry workshop, organized tools on pegboard wall, cabinet carcasses in progress on workbenches, natural light from clerestory windows, warm tones, documentary photography
```

**Negative:** cartoon, messy, abandoned, dark

---

## 8. Gallery Placeholder 1
**Target file:** `static/images/gallery-1.jpg`
**Resolution:** 600×400

```
completed custom white shaker kitchen with island, pendant lights, stainless appliances, hardwood floor, evening golden hour light through windows, real estate photography style
```

**Negative:** cartoon, illustration, dated appliances, dark

---

## 9. Gallery Placeholder 2
**Target file:** `static/images/gallery-2.jpg`
**Resolution:** 600×400

```
custom entertainment center built-in with walnut shelving flanking a mounted TV, cable management hidden, LED accent lighting, modern living room, interior photography
```

**Negative:** cartoon, illustration, cluttered, dated

---

## 10. Contact Page
**Target file:** `static/images/contact-hero.jpg`
**Resolution:** 1200×400

```
overhead view of a craftsman's workbench with cabinet blueprints, measuring tape, pencil, wood samples fanned out, shallow depth of field, warm lighting, lifestyle photography
```

**Negative:** cartoon, illustration, cluttered, dark, blurry blueprints

---

## Notes

- All images should feel warm, professional, and inviting.
- Avoid overly modern/minimalist aesthetics — Baseline Cabinetry is warm craftsmanship, not cold industrial.
- The brand palette is navy (#1e3a5f) and warm wood accent (#b8860b) — images should complement, not clash.
- After generation, run images through a WebP converter for performance (target: <200KB for hero, <80KB for cards).
