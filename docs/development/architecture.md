# Architecture & Tech Stack

## Stack Decision

| Layer | Teknologi | Alasan |
|-------|-----------|--------|
| Framework | Next.js 14 (App Router) | SSG/ISR, SEO-friendly, modern React |
| Styling | Tailwind CSS 3.4 | Utility-first, dark theme tokens, responsive |
| Animation | Framer Motion | Scroll reveal, page transitions, micro-interactions |
| Icons | Lucide React | Konsisten, ringan, tree-shakeable |
| Font | Google Fonts (Plus Jakarta Sans + Inter) | Gratis, CDN cepat |
| Hosting | Firebase Hosting | Static export, CDN global, SSL gratis |
| Analytics | Google Analytics 4 | Gratis, terintegrasi Firebase |
| Form | Firebase Functions (opsional) / Formspree | Contact form handler |
| Blog | MDX (local) | Markdown + komponen React |

## Deployment Strategy — Firebase Hosting (Static Export)

```
next.config.js → output: 'export'
↓
npm run build → menghasilkan folder /out (HTML statis)
↓
firebase deploy → upload /out ke Firebase Hosting CDN
```

### Kenapa Static Export?
- Company profile = konten jarang berubah
- Tidak perlu server (Cloud Functions) = **hemat biaya**
- Load time sangat cepat (pure HTML/CSS/JS dari CDN)
- Firebase Hosting free tier: 10 GB storage, 360 MB/day transfer

### firebase.json
```json
{
  "hosting": {
    "public": "out",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      { "source": "**", "destination": "/404.html" }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|avif)",
        "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
      },
      {
        "source": "**/*.@(js|css)",
        "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
      }
    ]
  }
}
```

### Contact Form Options (tanpa backend)
1. **Formspree** — gratis 50 submission/bulan, cukup untuk compro
2. **Firebase Functions** — jika mau kontrol penuh, kirim email via Nodemailer
3. **WhatsApp redirect** — `wa.me/628562302229?text=...` (sudah ada)

Rekomendasi: WhatsApp sebagai CTA utama + Formspree sebagai fallback form.

---

## Folder Structure

```
compro/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   │   └── devetek.svg             # Logo utama (putih/light, untuk dark bg)
│   │   ├── team/
│   │   │   ├── arifin.jpg
│   │   │   ├── raka.jpg
│   │   │   └── ...
│   │   ├── products/
│   │   │   ├── d-ibs-billing.png       # Screenshot / placeholder
│   │   │   ├── d-ibs-penagihan.png
│   │   │   ├── d-asset-webgis.png
│   │   │   ├── helios-platform.png
│   │   │   └── ...
│   │   ├── clients/
│   │   │   ├── tirta-pakuan.png
│   │   │   ├── tirtanadi.png
│   │   │   └── ...
│   │   ├── hero/
│   │   │   └── hero-bg.jpg             # Background hero (atau gradient pure CSS)
│   │   └── og-image.jpg                # 1200x630 untuk social share
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout (font, metadata, Navbar, Footer)
│   │   ├── page.tsx                    # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx                # Products overview
│   │   │   ├── pdam-suite/
│   │   │   │   └── page.tsx            # D-IBS + D-ASSET + HELIOS
│   │   │   ├── erp/
│   │   │   │   └── page.tsx
│   │   │   ├── software-house/
│   │   │   │   └── page.tsx
│   │   │   └── consulting/
│   │   │       └── page.tsx
│   │   ├── clients/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx                # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx            # Blog detail
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── privacy-policy/
│   │   │   └── page.tsx
│   │   └── terms/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── PageHero.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Counter.tsx             # Animated number counter
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   └── ClientLogo.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutPreview.tsx
│   │   │   ├── ProductsGrid.tsx
│   │   │   ├── StatsCounter.tsx
│   │   │   ├── TestimonialSlider.tsx
│   │   │   ├── ClientLogos.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── TeamGrid.tsx
│   │   │   └── ContactForm.tsx
│   │   └── shared/
│   │       ├── ScrollReveal.tsx        # Framer Motion wrapper
│   │       ├── GradientBlob.tsx        # Decorative bg element
│   │       └── WhatsAppFAB.tsx         # Floating WA button
│   │
│   ├── lib/
│   │   ├── constants.ts               # Company info, WA number, email, address
│   │   ├── metadata.ts                # SEO metadata per page
│   │   └── blog.ts                    # MDX blog loader
│   │
│   ├── styles/
│   │   └── globals.css                # Tailwind directives + custom utilities
│   │
│   ├── content/
│   │   └── blog/                      # MDX files
│   │       └── .gitkeep
│   │
│   └── types/
│       └── index.ts                   # TypeScript types
│
├── docs/                              # (existing) handoff docs
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── firebase.json
├── .firebaserc
├── .gitignore
├── package.json
└── README.md
```

---

## Git Branching Strategy

```
main ─────────────────────────────────── production (Firebase deploy)
  │
  ├── develop ────────────────────────── integration branch
  │     │
  │     ├── feature/setup-project ───── Init Next.js, Tailwind, config
  │     ├── feature/design-system ───── Tokens, fonts, base components
  │     ├── feature/layout ──────────── Navbar, Footer, page layouts
  │     ├── feature/homepage ────────── Hero, stats, preview sections
  │     ├── feature/about ───────────── About page
  │     ├── feature/products ────────── Products pages (all 4)
  │     ├── feature/clients ─────────── Clients page
  │     ├── feature/contact ─────────── Contact page + form
  │     ├── feature/blog ────────────── Blog listing + detail
  │     ├── feature/seo-analytics ───── Meta, OG, sitemap, GA4
  │     └── feature/polish ──────────── Animations, responsive QA
  │
  └── hotfix/* ──────────────────────── Urgent fixes langsung ke main
```

### Workflow
1. Buat branch `develop` dari `main`
2. Setiap fitur: buat branch `feature/*` dari `develop`
3. Selesai → merge ke `develop`
4. Semua fitur selesai → merge `develop` ke `main`
5. `main` = yang di-deploy ke Firebase

---

## Performance Targets

| Metric | Target | Cara Achieve |
|--------|--------|-------------|
| Lighthouse Performance | > 95 | Static export, optimized images |
| Lighthouse SEO | 100 | Meta tags, sitemap.xml, structured data |
| Lighthouse Accessibility | > 90 | Semantic HTML, ARIA, contrast ratio |
| First Contentful Paint | < 1.5s | Font preload, above-fold CSS |
| Largest Contentful Paint | < 2.5s | next/image, WebP/AVIF |
| Total Bundle Size | < 200KB (gzipped) | Tree-shake, dynamic imports |
| CLS | < 0.1 | Fixed dimensions, font-display: swap |

---

## Environment Variables

```env
# .env.local (tidak di-commit)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FORMSPREE_ID=xyzabc
NEXT_PUBLIC_WA_NUMBER=628562302229
NEXT_PUBLIC_SITE_URL=https://devetek.com
```
