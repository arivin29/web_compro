# Component Design Spec — Visual Blueprint per Komponen

> Referensi: `docs/handoff/design-spec.md` untuk color tokens & typography

---

## 1. Navbar

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]    Beranda  Tentang  Produk▾  Klien  Blog  Kontak  [CTA] │
└─────────────────────────────────────────────────────────────────┘
```

| Properti | Value |
|----------|-------|
| Height | 72px desktop, 64px mobile |
| Background (top) | transparent |
| Background (scroll) | bg-navy/80 backdrop-blur-xl border-b border-border |
| Logo | height 32px, `devetek.svg` (putih/light untuk dark bg) |
| Nav links | Inter 500, text-sm, text-gray-300, hover:text-white |
| Active link | text-white + accent underline (2px bottom) |
| CTA button | "Hubungi Kami" — accent bg, rounded-full, px-6 py-2 |
| Produk dropdown | bg-navy-lighter border-border, 4 items, icon + label |
| Mobile trigger | Hamburger icon → X, lucide Menu/X |
| Mobile menu | Full-screen overlay bg-navy, centered links, stagger animation |
| Transition | scroll detection via `useScroll()`, opacity/blur transition 300ms |

---

## 2. Footer

```
┌──────────────────────────────────────────────────────────────┐
│  [Logo]              Produk          Perusahaan    Kontak     │
│  Deskripsi singkat   PDAM Suite      Tentang       Alamat     │
│  perusahaan          ERP             Klien         Email      │
│                      Software House  Blog          Phone      │
│                      Konsultasi      Kontak        WhatsApp   │
│──────────────────────────────────────────────────────────────│
│  [Social Icons]                     © 2026 PT CCI            │
└──────────────────────────────────────────────────────────────┘
```

| Properti | Value |
|----------|-------|
| Background | bg-navy-light (#161B22) |
| Border top | 1px border-border |
| Grid | 4 columns desktop, 2 columns tablet, 1 column mobile |
| Heading | Plus Jakarta Sans 600, text-sm uppercase, text-accent |
| Links | Inter 400, text-sm, text-gray-400, hover:text-white |
| Copyright | text-xs, text-gray-500, centered di mobile |
| Padding | py-16 px-6 (content), py-6 px-6 (copyright bar) |

---

## 3. HeroSection (Homepage)

```
┌─────────────────────────────────────────────────────────────┐
│                    ○ decorative blob (accent, blur-3xl)     │
│                                                             │
│     (label) SOLUSI DIGITAL TERINTEGRASI                     │
│                                                             │
│     (H1) Membangun Masa Depan                               │
│          Digital Indonesia                                   │
│                                                             │
│     (subtitle) paragraph max-w-2xl                          │
│                                                             │
│     [ Hubungi Kami ]  [ Lihat Produk → ]                    │
│                                                             │
│                    ○ decorative blob (navy-lighter, blur)    │
└─────────────────────────────────────────────────────────────┘
```

| Properti | Value |
|----------|-------|
| Min-height | 100vh (atau min-h-screen) |
| Background | gradient from navy to navy-light, radial accent glow |
| Label | text-accent, text-sm, uppercase, tracking-widest, font-medium |
| H1 | Plus Jakarta Sans 800, text-5xl md:text-6xl lg:text-7xl, text-white |
| Subtitle | Inter 400, text-lg, text-gray-400, max-w-2xl |
| CTA Primary | Button accent, rounded-full, px-8 py-3, glow shadow |
| CTA Secondary | Button ghost (border-border), rounded-full |
| Blobs | absolute, w-96 h-96, rounded-full, bg-accent/10, blur-3xl |
| Animation | H1: fade-up 0.6s, subtitle: fade-up 0.8s, CTAs: fade-up 1.0s |

---

## 4. Card (Glassmorphism)

```
┌─────────────────────────────┐
│  [Icon]                      │
│                              │
│  (H3) Card Title             │
│  (p) Description text here   │
│                              │
│  [ Learn More → ]            │
└─────────────────────────────┘
```

| Properti | Value |
|----------|-------|
| Background | bg-navy-lighter/80 (atau bg-[#1E293B]/80) |
| Backdrop | backdrop-blur-sm |
| Border | 1px border-border (#30363D) |
| Border-radius | rounded-2xl |
| Padding | p-6 md:p-8 |
| Hover | border-accent/50, translateY(-4px), shadow-lg shadow-accent/10 |
| Transition | transition-all duration-300 |
| Icon | lucide icon, w-10 h-10, text-accent |
| H3 | Plus Jakarta Sans 600, text-xl, text-white |
| Description | Inter 400, text-sm, text-gray-400, line-clamp-3 |
| Link | text-accent, text-sm, hover:underline, flex items-center gap-1 |

---

## 5. Button

### Variants

| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| primary | bg-accent | text-navy (dark) | none | bg-accent/90, shadow-glow |
| secondary | transparent | text-white | border-border | border-accent/50, bg-accent/10 |
| ghost | transparent | text-gray-300 | none | text-white, bg-white/5 |
| whatsapp | bg-green-500 | text-white | none | bg-green-600 |

| Properti | Value |
|----------|-------|
| Padding | px-6 py-2.5 (default), px-8 py-3 (large) |
| Border-radius | rounded-full |
| Font | Inter 500, text-sm |
| Transition | transition-all duration-200 |
| Disabled | opacity-50, cursor-not-allowed |

---

## 6. StatsCounter

```
┌─────────────────────────────────────────────────────┐
│   12+          50+           100+                    │
│   Tahun        Klien         Proyek                  │
│   Pengalaman   Terpercaya    Diselesaikan            │
└─────────────────────────────────────────────────────┘
```

| Properti | Value |
|----------|-------|
| Layout | flex justify-around, max-w-4xl mx-auto |
| Number | Plus Jakarta Sans 800, text-4xl md:text-5xl, text-accent |
| Suffix (+) | same style as number |
| Label | Inter 500, text-sm, text-white |
| Sublabel | Inter 400, text-xs, text-gray-500 |
| Animation | count from 0 → target, duration 2s, easeOut, trigger on scroll |
| Divider | border-r border-border (antara items, hide di mobile) |

---

## 7. TestimonialCard

```
┌─────────────────────────────────────┐
│  " Kutipan testimonial yang         │
│    cukup panjang di sini... "       │
│                                     │
│  ┌──┐                               │
│  │📷│  Nama Lengkap                 │
│  └──┘  Jabatan — PT Perusahaan      │
└─────────────────────────────────────┘
```

| Properti | Value |
|----------|-------|
| Background | bg-navy-lighter border-border |
| Quote icon | text-accent/30, lucide Quote, absolute top-4 right-4 |
| Quote text | Inter 400, text-base, text-gray-300, italic |
| Avatar | w-12 h-12, rounded-full, object-cover |
| Name | Plus Jakarta Sans 600, text-sm, text-white |
| Role | Inter 400, text-xs, text-gray-500 |
| Padding | p-8 |
| Slider | auto-scroll, dots indicator, swipe on mobile |

---

## 8. Timeline (About Page)

```
    2012 ──●── Devetek didirikan
             │
    2018 ──●── PT CCI resmi berdiri
             │
    2019 ──●── Fokus SaaS & IoT untuk PDAM
             │
    2023 ──●── Ekspansi layanan ERP & Konsultasi
             │
    2026 ──●── 50+ klien, 100+ proyek
```

| Properti | Value |
|----------|-------|
| Line | w-0.5, bg-border, vertical center |
| Dot | w-4 h-4, rounded-full, bg-accent, border-4 border-navy |
| Year | Plus Jakarta Sans 700, text-lg, text-accent |
| Description | Inter 400, text-sm, text-gray-400 |
| Animation | stagger reveal per item on scroll, 0.2s delay each |
| Layout | alternate left-right on desktop, all-left on mobile |

---

## 9. SectionHeading

```
    ── PRODUK KAMI ──
    Solusi Lengkap untuk
    Transformasi Digital
    (subtitle opsional)
```

| Properti | Value |
|----------|-------|
| Label | text-accent, text-sm, uppercase, tracking-widest, font-medium, flex items-center gap-3 |
| Label dashes | w-8 h-px bg-accent |
| H2 | Plus Jakarta Sans 700, text-3xl md:text-4xl, text-white |
| Subtitle | Inter 400, text-base, text-gray-400, max-w-xl |
| Alignment | center (default) or left |
| Spacing | label mb-4, h2 mb-4, subtitle mb-0 |

---

## 10. WhatsApp FAB (Floating Action Button)

```
                        ┌─────┐
                        │ 💬  │  ← bottom-right corner
                        └─────┘
```

| Properti | Value |
|----------|-------|
| Position | fixed bottom-6 right-6, z-50 |
| Size | w-14 h-14 |
| Background | bg-green-500 |
| Icon | WhatsApp icon (SVG custom), w-7 h-7, text-white |
| Border-radius | rounded-full |
| Shadow | shadow-lg shadow-green-500/30 |
| Hover | scale-110, shadow-xl |
| Animation | pulse subtle (atau bounce on first load) |
| Link | `https://wa.me/628562302229?text=Halo%20Devetek` |
| Tooltip | "Chat via WhatsApp" on hover (opsional) |

---

## 11. PageHero (Inner Pages)

```
┌─────────────────────────────────────────────────────┐
│  (label) TENTANG KAMI                                │
│  (H1) Lebih dari Satu Dekade                         │
│       Membangun Solusi Digital                       │
│  (breadcrumb) Beranda → Tentang                      │
└─────────────────────────────────────────────────────┘
```

| Properti | Value |
|----------|-------|
| Height | ~40vh or py-24 |
| Background | bg-navy + subtle gradient overlay |
| Label | same as SectionHeading label style |
| H1 | Plus Jakarta Sans 800, text-4xl md:text-5xl, text-white |
| Breadcrumb | text-sm, text-gray-500, accent for current page |
| Animation | fade-up stagger |

---

## 12. ContactForm

| Properti | Value |
|----------|-------|
| Background | Card style (glassmorphism) |
| Input bg | bg-navy/50 |
| Input border | border-border, focus:border-accent |
| Input text | text-white, placeholder:text-gray-600 |
| Label | Inter 500, text-sm, text-gray-300 |
| Textarea | min-h-[120px] |
| Submit button | Button primary (accent), full-width |
| Success state | Green check + "Pesan terkirim!" |
| Error state | Red text di bawah field |
| Padding | p-8 inside card |

---

## Responsive Breakpoints

| Breakpoint | Tailwind | Target |
|------------|----------|--------|
| Mobile | default (< 640px) | iPhone SE, Android |
| Mobile L | `sm:` (640px) | iPhone 14, Galaxy S |
| Tablet | `md:` (768px) | iPad Mini, tablets |
| Laptop | `lg:` (1024px) | iPad Pro, laptop |
| Desktop | `xl:` (1280px) | Desktop monitors |
| Wide | `2xl:` (1536px) | Large screens |

### Key responsive behaviors:
- Navbar: horizontal → hamburger at `md:`
- Grid: 1 col → 2 col at `md:` → 3-4 col at `lg:`
- Hero H1: text-3xl → text-5xl → text-7xl
- Section padding: py-12 → py-20 → py-24
- Cards: full-width → grid

---

## Animation Library (Framer Motion Presets)

```typescript
// ScrollReveal presets
export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
}

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
}

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}
```

### Per-section animation mapping:

| Section | Animation | Trigger |
|---------|-----------|---------|
| Hero title | fadeUp, delay 0 | Page load |
| Hero subtitle | fadeUp, delay 0.2 | Page load |
| Hero CTAs | fadeUp, delay 0.4 | Page load |
| Stats counter | Count-up + fadeUp | Scroll into view |
| Product cards | stagger fadeUp | Scroll into view |
| Timeline items | stagger fadeUp | Scroll into view |
| Team grid | stagger scaleIn | Scroll into view |
| Testimonials | fadeIn (auto-slide) | Scroll into view |
| Section headings | fadeUp | Scroll into view |
