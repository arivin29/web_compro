# Sitemap & Roadmap — Company Profile Devetek

---

## SITEMAP (Struktur URL & Hierarki Halaman)

```
devetek.com/
│
├── / ............................ HOME (Landing Page)
│
├── /about ...................... ABOUT US
│   └── #tim ................... Section: Tim Leadership
│   └── #timeline .............. Section: Timeline Perusahaan
│   └── #values ................ Section: Visi, Misi, Values
│
├── /products ................... PRODUCTS & SERVICES (Overview)
│   ├── /products/d-ibs ........ D-IBS Sistem PDAM Terintegrasi
│   │   ├── #billing ........... Billing & Loket
│   │   ├── #penagihan ......... Penagihan Mobile
│   │   ├── #baca-meter ........ Baca Meter Mobile
│   │   ├── #non-air ........... Non-Air
│   │   ├── #pengaduan ......... Hubungan Langganan & Pengaduan
│   │   ├── #keuangan .......... Akuntansi & Keuangan
│   │   └── #hr ................ HR & Absensi
│   │
│   ├── /products/d-asset ....... D-ASSET (WebGIS PDAM)
│   │   → link ke: webgis-pdam.devetek.app
│   │
│   ├── /products/helios ........ DEVETEK HELIOS (IoT Platform + Hardware)
│   │   → link ke: iot.devetek.app
│   │
│   ├── /products/erp ........... DEVETEK ERP
│   │
│   ├── /products/software-house  Custom Software Development
│   │   ├── #web-app
│   │   ├── #mobile-app
│   │   ├── #web-gis
│   │   └── #specialized (AMIMS, EDUTECH, HOMPES, Perkebunan)
│   │
│   └── /products/consulting .... Konsultasi & Pengadaan
│       ├── #it-consulting
│       ├── #procurement
│       └── #maintenance
│
├── /portfolio .................. PORTFOLIO / PROJECTS
│   ├── ?filter=pdam ........... Filter: PDAM
│   ├── ?filter=government ..... Filter: Pemerintah
│   └── ?filter=private ........ Filter: Swasta
│
├── /clients .................... CLIENTS & PARTNERS
│
├── /blog ....................... BLOG / NEWS
│   └── /blog/[slug] ........... Detail Artikel
│
├── /contact .................... CONTACT US
│
├── /privacy-policy ............. Kebijakan Privasi
├── /terms ...................... Syarat & Ketentuan
│
└── (External Links)
    ├── iot.devetek.app ......... DEVETEK HELIOS (IoT)
    ├── webgis-pdam.devetek.app . D-ASSET (WebGIS)
    └── devetek-iot.web.app ..... DEVETEK Hardware
```

---

## NAVIGASI

### Header Menu (Desktop)
```
[ Logo ] Home | About | Products ▼ | Portfolio | Clients | Blog | Contact [ Hubungi Kami ]
                                  |
                                  ├── D-IBS (Sistem PDAM)
                                  ├── D-ASSET (WebGIS)
                                  ├── HELIOS (IoT)
                                  ├── ERP
                                  ├── Software House
                                  └── Konsultasi & Pengadaan
```

### Footer
```
[ Logo + Deskripsi ]    [ Produk ]          [ Perusahaan ]     [ Kontak ]
                        D-IBS               About Us           Office: Bogor
                        D-ASSET             Portfolio           Workshop: Tangerang
                        HELIOS              Clients            Phone
                        ERP                 Blog               Email
                        Software House      Contact            WhatsApp
                        Konsultasi          Privacy Policy

[ Social Media Icons ]                     © 2025 PT Comon Cipta Inovasi
```

---

## ROADMAP DEVELOPMENT

### Phase 1 — Foundation (Minggu 1-2)
> Setup project, design system, layout dasar

| Task | Detail | Deliverable |
|------|--------|-------------|
| Tech stack setup | Next.js 14+ / App Router, Tailwind CSS, Framer Motion | Repo + boilerplate |
| Design system | Warna, typography, spacing, komponen dasar | Tailwind config + components |
| Layout global | Header (sticky), Footer, Mobile nav | Layout component |
| Home page | Hero, counter, product cards, logo carousel, CTA | `/` |
| Responsive | Mobile-first semua komponen | Semua breakpoint |

### Phase 2 — Core Pages (Minggu 2-3)
> Halaman utama dengan konten real

| Task | Detail | Deliverable |
|------|--------|-------------|
| About Us | Story, timeline, values, tim leadership | `/about` |
| Products overview | Landing produk dengan 6 cards | `/products` |
| Products: D-IBS | Detail 7 modul billing/HR/keuangan | `/products/d-ibs` |
| Products: D-ASSET | Overview + link ke webgis-pdam.devetek.app | `/products/d-asset` |
| Products: HELIOS | Overview + link ke iot.devetek.app | `/products/helios` |
| Products: ERP | Feature list + screenshot | `/products/erp` |
| Products: Software House | Layanan custom dev | `/products/software-house` |
| Products: Consulting | Konsultasi & pengadaan | `/products/consulting` |
| Contact page | Form + maps + WhatsApp CTA | `/contact` |

### Phase 3 — Social Proof & Content (Minggu 3-4)
> Portfolio, klien, blog

| Task | Detail | Deliverable |
|------|--------|-------------|
| Portfolio | Grid/list with filter (PDAM/Gov/Private) | `/portfolio` |
| Clients & Partners | Logo grid, testimonial, peta coverage | `/clients` |
| Blog setup | MDX/CMS, list page, detail page | `/blog`, `/blog/[slug]` |
| Blog: 3 artikel awal | Dummy content untuk launch | 3 posts |

### Phase 4 — Polish & Launch (Minggu 4-5)
> Animasi, SEO, testing, deployment

| Task | Detail | Deliverable |
|------|--------|-------------|
| Animasi & transitions | Scroll reveal, counter, page transitions | Framer Motion |
| SEO | Meta tags, OG image, structured data, sitemap.xml | All pages |
| Performance | Image optimization, lazy load, lighthouse audit | Score 90+ |
| Analytics | Google Analytics / Plausible setup | Tracking |
| Legal pages | Privacy policy, terms | `/privacy-policy`, `/terms` |
| Final QA | Cross-browser, responsive, content review | Checklist |
| Deployment | Deploy ke hosting (Vercel/VPS) | LIVE |

### Phase 5 — Post-Launch (Ongoing)
> Iterasi berdasarkan feedback

| Task | Detail |
|------|--------|
| Konten blog regular | 2-4 artikel/bulan |
| Update portfolio | Tambah proyek baru |
| A/B testing | CTA, hero copy |
| Fitur tambahan | Multi-bahasa (EN), chatbot, career page |

---

## TIMELINE RINGKAS

```
Minggu 1  ████████  Foundation: setup, design system, layout
Minggu 2  ████████  Home page + mulai core pages
Minggu 3  ████████  Semua product pages + contact
Minggu 4  ████████  Portfolio, clients, blog
Minggu 5  ████████  Polish, SEO, testing, LAUNCH 🚀
```

**Total estimasi: 4-5 minggu** (asumsi konten & aset dari klien sudah siap)

---

## DEPENDENSI & BLOCKER

| Item | Status | Keterangan |
|------|--------|------------|
| Logo final | ⏳ | Dari klien |
| Foto tim terbaru | ⏳ | Dari klien (bisa pakai backup wp-content dulu) |
| Logo 8 PDAM | ⏳ | Dari klien |
| Detail klien kementerian | ⏳ | Dari klien |
| Screenshot produk | ✅ | Ada di wp-content + website IoT/WebGIS |
| Konten teks | ✅ | Sudah disusun di persiapan v2.md |
| Domain & DNS | ⏳ | devetek.com — perlu akses |
| Hosting | ⏳ | Belum ditentukan |

---

## TECH STACK (Rekomendasi)

| Layer | Teknologi | Alasan |
|-------|-----------|--------|
| Framework | Next.js 14+ (App Router) | SSG/SSR, SEO, performa |
| Styling | Tailwind CSS | Utility-first, dark theme mudah |
| Animasi | Framer Motion | Smooth, declarative |
| Icons | Lucide / Heroicons | Clean, consistent |
| Blog/CMS | MDX (local) atau Contentful | Simple, scalable |
| Form | React Hook Form + API route | Validasi + email send |
| Maps | Google Maps Embed / Leaflet | 2 lokasi kantor |
| Deployment | Vercel (rec) / VPS | Zero config untuk Next.js |
| Analytics | Google Analytics 4 | Standard |
| Image | Next/Image + sharp | Optimized, lazy load |
