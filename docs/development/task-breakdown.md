# Task Breakdown — Detail per Sprint

## Konvensi

- **Estimasi**: S (< 2 jam), M (2-4 jam), L (4-8 jam), XL (> 8 jam)
- **Priority**: P0 (must-have launch), P1 (should-have), P2 (nice-to-have)
- **Deps**: task yang harus selesai duluan

---

## Sprint 1 — Foundation & Design System

### TASK-001: Project Init
| Field | Value |
|-------|-------|
| Priority | P0 |
| Size | M |
| Deps | — |

**Subtasks:**
- [x] ~~`npx create-next-app@14`~~ → manual setup (npm naming restriction workaround)
- [x] Install dependencies: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`
- [x] Setup `next.config.js` → `output: 'export'`, `images: { unoptimized: true }`, `trailingSlash: false`
- [x] Setup `firebase.json` (dengan `cleanUrls: true`) + `.firebaserc`
- [x] Setup `.env.local` template → `.env.example`
- [x] Setup `.gitignore` (tambah `/out`, `.firebase`)
- [x] Buat branch `develop` dari `main`
- [x] Buat branch `feature/setup-project` dari `develop`
- [x] Verify: `npm run build` berhasil ✅

### TASK-002: Tailwind Config — Design Tokens
| Field | Value |
|-------|-------|
| Priority | P0 |
| Size | M |
| Deps | TASK-001 |

**Subtasks:**
- [x] `tailwind.config.ts` — extend colors: navy, accent, border
- [x] Extend fontFamily: `heading: 'Plus Jakarta Sans'`, `body: 'Inter'`
- [x] `globals.css`: custom utilities (`.glass-card`, `.gradient-text`, `.glow-border`)
- [x] Setup Google Fonts di `layout.tsx` via `next/font/google`
- [x] Dark body background: `bg-navy text-white`
- [x] Verify: semua token bisa dipakai di Tailwind classes ✅

### TASK-003: Base UI Components
| Field | Value |
|-------|-------|
| Priority | P0 |
| Size | L |
| Deps | TASK-002 |

**Subtasks:**
- [x] `Button.tsx` — variant: primary (accent), secondary (outline), ghost, whatsapp (green)
- [x] `Card.tsx` — glassmorphism card (bg-navy-lighter/80 backdrop-blur border-border)
- [x] `Badge.tsx` — label produk (PDAM, ERP, Consulting, dll)
- [x] `SectionHeading.tsx` — label + H2 + subtitle, centered or left
- [x] `Counter.tsx` — animated count-up on scroll (useInView + animate)
- [x] `ClientLogo.tsx` — grayscale → color on hover
- [x] `TestimonialCard.tsx` — avatar, nama, role, company, kutipan
- [x] `ScrollReveal.tsx` — Framer Motion wrapper (fade-up, stagger children)
- [x] `GradientBlob.tsx` — decorative blur circle (accent color)
- [x] Verify: build pass, props typed ✅
- [x] Bonus: `motion.ts` — animation presets (fadeUp, fadeIn, stagger, scaleIn, slideInLeft)
- [x] Bonus: barrel export `components/ui/index.ts`

---

## Sprint 2 — Layout & Homepage

### TASK-004: Navbar
| Field | Value |
|-------|-------|
| Priority | P0 |
| Size | M |
| Deps | TASK-003 |

**Subtasks:**
- [ ] Logo kiri, nav links tengah, CTA button kanan
- [ ] Links: Beranda, Tentang, Produk (dropdown), Portfolio & Klien, Blog, Kontak
- [ ] Produk dropdown: PDAM Suite, HELIOS (IoT), ERP, Software House, Konsultasi (5 items)
- [ ] Scroll behavior: transparent → blur bg on scroll (glassmorphism)
- [ ] Active link indicator (accent underline)
- [ ] Mobile: hamburger → slide-in menu (`MobileMenu.tsx`)
- [ ] Verify: responsive 320px–1920px, keyboard navigable

### TASK-005: Footer
| Field | Value |
|-------|-------|
| Priority | P0 |
| Size | S |
| Deps | TASK-003 |

**Subtasks:**
- [ ] 4-column grid: About (logo + deskripsi), Produk, Perusahaan, Kontak
- [ ] Kontak: alamat, email, phone, WhatsApp link
- [ ] Social media icons (LinkedIn, Instagram — jika ada)
- [ ] Copyright: © 2026 PT Comon Cipta Inovasi
- [ ] Responsive: stack ke 1-2 columns di mobile

### TASK-006: Root Layout
| Field | Value |
|-------|-------|
| Priority | P0 |
| Size | S |
| Deps | TASK-004, TASK-005 |

**Subtasks:**
- [ ] `layout.tsx`: wrap Navbar + `{children}` + Footer
- [ ] Global metadata: title template, description, OG defaults
- [ ] Font loading: Plus Jakarta Sans (600, 700, 800) + Inter (400, 500)
- [ ] WhatsApp FAB (floating bottom-right, selalu tampil)
- [ ] Smooth scroll behavior

### TASK-007: Homepage
| Field | Value |
|-------|-------|
| Priority | P0 |
| Size | XL |
| Deps | TASK-006 |

**Subtasks:**
- [ ] **HeroSection**: dark gradient bg, headline, subtitle, 2 CTA buttons (Hubungi Kami = primary filled, Lihat Produk = secondary outline), decorative blobs
- [ ] **StatsCounter**: 3 items (12+ Tahun, 50+ Klien, 100+ Proyek) — animate on scroll. ⚠️ Angka perlu verifikasi sebelum launch
- [ ] **AboutPreview**: company intro text + image/illustration + "Selengkapnya" link
- [ ] **ProductsGrid**: 4 cards (PDAM Suite, ERP, Software House, Consulting) → link ke detail
- [ ] **ClientLogos**: logo grid grayscale → color hover, "Lihat Semua" link
- [ ] **TestimonialSlider**: 1-3 testimonial cards, auto-slide
- [ ] **CTASection**: "Siap Memulai Transformasi Digital?" + WhatsApp button + Contact button
- [ ] Page transitions: Framer Motion `AnimatePresence`
- [ ] Verify: responsive, semua link benar, scroll animations smooth

---

## Sprint 3 — Inner Pages (P0)

### TASK-008: About Page
| Field | Value |
|-------|-------|
| Priority | P0 |
| Size | L |
| Deps | TASK-006 |

**Subtasks:**
- [ ] Page hero (compact)
- [ ] Company story (2-column: text + image)
- [ ] Visi & Misi section
- [ ] Values grid (5 cards: Integritas, Inovasi, Kolaborasi, Komitmen, Kompetensi)
- [ ] Timeline — animated vertical (2012, 2018, 2019, 2023, 2026)
- [ ] Team grid (foto, nama, role) — data dari constants
- [ ] Entity info: CCI (lisensi) → DMI (operasional PDAM) → Devetek (brand)
- [ ] CTA section

### TASK-009: Products — PDAM Suite
| Field | Value |
|-------|-------|
| Priority | P0 |
| Size | L |
| Deps | TASK-006 |

**Subtasks:**
- [ ] Page hero: PDAM Suite — Solusi Digital Terintegrasi untuk PDAM
- [ ] D-IBS section: deskripsi + 6 modul (Billing, Penagihan, HR, Keuangan, Aset, Pelanggan) + screenshot
- [ ] D-ASSET section: WebGIS + fitur-fitur + screenshot
- [ ] HELIOS section: Platform IoT + hardware specs (Type A: Universal Logger, Type B: Pipeline Logger, Type C: Custom Solution)
- [ ] Integration diagram: D-IBS ↔ D-ASSET ↔ HELIOS
- [ ] CTA: hubungi untuk demo

### TASK-010: Products — ERP, Software House, Consulting
| Field | Value |
|-------|-------|
| Priority | P0 |
| Size | L |
| Deps | TASK-006 |

**Subtasks:**
- [ ] ERP page: deskripsi + modul (Inventory, Finance, Procurement, HR, Production)
- [ ] Software House page: layanan custom dev + tech stack + proses kerja
- [ ] Consulting page: jasa konsultasi IT + scope layanan
- [ ] Masing-masing punya hero, feature list, CTA

### TASK-011: Contact Page
| Field | Value |
|-------|-------|
| Priority | P0 |
| Size | M |
| Deps | TASK-006 |

**Subtasks:**
- [ ] 2-column: form kiri, info kanan
- [ ] Form fields: Nama Lengkap, Email, No. HP, Kategori Kebutuhan (dropdown: PDAM/ERP/Software House/Konsultasi/Lainnya), Pesan
- [ ] Form submit → Formspree (atau WhatsApp redirect)
- [ ] Info: alamat (Cibinong + Tangerang), email, phone, WA
- [ ] Google Maps embed (opsional, bisa placeholder dulu)
- [ ] CTA: WhatsApp langsung

---

## Sprint 4 — Inner Pages (P1) & Polish

### TASK-012: Clients & Portfolio Page
| Field | Value |
|-------|-------|
| Priority | P1 |
| Size | M |
| Deps | TASK-006 |

**Subtasks:**
- [ ] Logo grid semua klien (filter: PDAM, ERP, Government, Private)
- [ ] Partner logos (PT Bakti Air Indonesia, dll)
- [ ] Portfolio/project cards (migrate dari persiapan-v2.md)
- [ ] Testimonial section
- [ ] Peta coverage Indonesia (SVG atau image)

### TASK-013: Blog Setup
| Field | Value |
|-------|-------|
| Priority | P2 |
| Size | L |
| Deps | TASK-006 |

**Subtasks:**
- [ ] MDX loader setup (`@next/mdx` atau `next-mdx-remote`. **Jangan** pakai `contentlayer` — deprecated)
- [ ] Blog listing page (card grid, tanggal, kategori)
- [ ] Blog detail page (MDX render, share buttons)
- [ ] Minimal 3 dummy articles sebagai template (sesuai sitemap roadmap)

### TASK-014: SEO & Analytics
| Field | Value |
|-------|-------|
| Priority | P1 |
| Size | M |
| Deps | TASK-007 |

**Subtasks:**
- [ ] Per-page metadata (title, description, OG image)
- [ ] `sitemap.xml` generation via `next-sitemap` package
- [ ] `robots.txt` (lihat architecture.md)
- [ ] Structured data (Organization, WebSite)
- [ ] Google Analytics 4 integration
- [ ] Favicon set (16, 32, 180, 512)

### TASK-015: Animations & Polish
| Field | Value |
|-------|-------|
| Priority | P1 |
| Size | L |
| Deps | all P0 tasks |

**Subtasks:**
- [ ] Scroll reveal semua section (stagger, fade-up)
- [ ] Page transition animations
- [ ] Navbar scroll effect smooth
- [ ] Counter animation timing
- [ ] Hover effects: cards lift, glow border
- [ ] Loading state / skeleton (jika perlu)
- [ ] Responsive QA: 320px, 375px, 768px, 1024px, 1280px, 1920px
- [ ] Cross-browser: Chrome, Safari, Firefox, Edge
- [ ] Performance audit → Lighthouse > 95

### TASK-016: Privacy & Terms
| Field | Value |
|-------|-------|
| Priority | P2 |
| Size | S |
| Deps | TASK-006 |

**Subtasks:**
- [ ] Privacy policy page (template standar, sesuaikan nama perusahaan)
- [ ] Terms of service page

---

## Sprint 5 — Deploy

### TASK-017: Firebase Deploy
| Field | Value |
|-------|-------|
| Priority | P0 |
| Size | M |
| Deps | all P0 tasks |

**Subtasks:**
- [ ] `firebase init hosting` — project setup
- [ ] Domain pointing: devetek.com → Firebase Hosting
- [ ] SSL certificate (otomatis dari Firebase)
- [ ] `npm run build && firebase deploy` — verify live
- [ ] Test semua halaman di production
- [ ] Redirect www → non-www (atau sebaliknya)
- [ ] 404 page custom

---

## Sprint Summary

| Sprint | Tasks | Focus | Estimasi |
|--------|-------|-------|----------|
| Sprint 1 | TASK 001-003 | Foundation + Design System | 1 minggu |
| Sprint 2 | TASK 004-007 | Layout + Homepage | 1 minggu |
| Sprint 3 | TASK 008-011 | Inner Pages P0 | 1 minggu |
| Sprint 4 | TASK 012-016 | P1/P2 Pages + Polish | 1 minggu |
| Sprint 5 | TASK 017 | Deploy | 2-3 hari |

**Total estimasi: ~4-5 minggu** (1 developer full-time)

---

## Dependency Graph

```
TASK-001 (Init)
  └── TASK-002 (Tailwind Config)
        └── TASK-003 (UI Components)
              ├── TASK-004 (Navbar)
              ├── TASK-005 (Footer)
              │     └── TASK-006 (Layout)
              │           ├── TASK-007 (Homepage) ← CRITICAL PATH
              │           ├── TASK-008 (About)
              │           ├── TASK-009 (PDAM Suite + HELIOS)
              │           ├── TASK-010 (ERP/SH/Consult) ← P0
              │           ├── TASK-011 (Contact)
              │           ├── TASK-012 (Clients & Portfolio)
              │           ├── TASK-013 (Blog)
              │           └── TASK-016 (Privacy/Terms)
              │
              └── TASK-014 (SEO) ← setelah Homepage
                    └── TASK-015 (Polish) ← setelah semua P0
                          └── TASK-017 (Deploy) ← final
```
