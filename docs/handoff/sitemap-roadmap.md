# Sitemap & Roadmap — Company Profile Devetek

> Status: WORKING DRAFT
> Fungsi: dokumen kerja gabungan untuk struktur halaman, prioritas launch, dan roadmap delivery.
> Catatan: roadmap dan tech stack di bawah adalah rekomendasi implementasi, bukan scope final, kecuali item yang sudah ditetapkan sebagai `P0`.

## Prioritas Phase 1

| Priority | Halaman / Item |
|----------|----------------|
| P0 | Home, About, Products, detail produk inti, Contact, legal minimum |
| P1 | Portfolio, Clients, logo grid tambahan, testimonial tambahan, coverage map |
| P2 | Blog, CMS/MDX, multi-bahasa, chatbot, career page, enhancement lanjutan |

## Interpretasi Scope

1. Semua item P0 dianggap kandidat launch batch pertama.
2. Item P1 boleh masuk jika waktu, budget, dan approval konten memadai.
3. Item P2 tidak diasumsikan masuk fase launch kecuali disetujui terpisah.

## Prinsip Arsitektur Produk

Untuk website ini, struktur produk sebaiknya tidak murni `satu produk = satu halaman brosur`. Ada dua jenis offering yang berbeda dan harus diperlakukan berbeda:

1. Produk / solusi utama yang punya positioning jelas dan butuh halaman sendiri.
2. Implementasi, modul, dokumentasi lapangan, dan case studies yang berfungsi sebagai bukti, bukan sebagai menu utama semua.

Implikasinya:

- PDAM tidak cukup dipresentasikan sebagai satu produk kecil; lebih tepat sebagai solution cluster.
- ERP custom tidak ideal jika ditampilkan seperti produk template; lebih tepat sebagai solution page dengan daftar modul dan contoh implementasi.
- Bukti implementasi seperti foto kegiatan, rollout ke PDAM, dan perusahaan pengguna sebaiknya masuk ke section `implementation proof` atau `selected case studies`, bukan memecah nav menjadi terlalu banyak item.

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
├── /products ................... PRODUCTS & SOLUTIONS (Overview / Hub)
│   ├── /products/pdam-suite ... Solusi Digital untuk PDAM
│   │   ├── #overview .......... Ringkasan value proposition PDAM
│   │   ├── #solutions ......... D-IBS, D-ASSET, HELIOS
│   │   ├── #modules ........... Billing, Penagihan, Baca Meter, HR, Keuangan, dll
│   │   ├── #implementation .... Implementasi & rollout ke PDAM
│   │   ├── #gallery ........... Foto kegiatan, training, instalasi, go-live
│   │   ├── #clients ........... Daftar PDAM pengguna (approved only)
│   │   └── #cta ............... Demo / Hubungi kami
│   │
│   ├── /products/erp .......... ERP Custom untuk Operasional Bisnis
│   │   ├── #overview .......... Positioning ERP custom
│   │   ├── #modules ........... Finance, HR, inventory, procurement, approval, dll
│   │   ├── #use-cases ......... Contoh kebutuhan perusahaan yang dilayani
│   │   ├── #implementation .... Perusahaan pengguna terpilih
│   │   └── #cta ............... Konsultasi kebutuhan ERP
│   │
│   ├── /products/helios ....... DEVETEK HELIOS (IoT Platform + Hardware)
│   │   ├── #platform .......... Cloud platform
│   │   ├── #hardware .......... Sensor dan device
│   │   ├── #industries ........ Industri / use cases
│   │   ├── #implementation .... Bukti implementasi lapangan
│   │   └── #cta ............... Demo / external product link
│   │
│   ├── /products/software-house  Custom Software Development
│   │   ├── #overview
│   │   ├── #capabilities ...... Web app, mobile app, GIS, system integration
│   │   ├── #selected-work ..... Proyek representatif
│   │   └── #cta
│   │
│   └── /products/consulting .... Konsultasi & Pengadaan
│       ├── #it-consulting
│       ├── #procurement
│       ├── #maintenance
│       └── #cta
│
├── /portfolio .................. PORTFOLIO / PROJECTS
│   ├── ?filter=pdam ........... Filter: PDAM
│   ├── ?filter=erp ............ Filter: ERP / Enterprise Systems
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
                                  ├── Solusi PDAM
                                  ├── ERP Custom
                                  ├── HELIOS (IoT)
                                  ├── Software House
                                  └── Konsultasi & Pengadaan
```

### Catatan Navigasi Produk

- `D-IBS` dan `D-ASSET` tetap tampil di halaman `Solusi PDAM`, tetapi tidak wajib menjadi item menu utama terpisah.
- Jika nanti dibutuhkan landing page mandiri untuk SEO atau campaign, keduanya bisa dibuat sebagai child page atau anchor deep link dari `Solusi PDAM`.
- Daftar 10 PDAM pengguna lebih tepat masuk ke section `clients` atau `implementation`, bukan jadi 10 halaman produk terpisah.
- Untuk ERP custom, yang dijual adalah kemampuan solusi dan rentang modul, bukan satu paket produk kaku.

### Footer
```
[ Logo + Deskripsi ]    [ Produk ]          [ Perusahaan ]     [ Kontak ]
                        Solusi PDAM         About Us           Office: Bogor
                        ERP Custom          Portfolio           Workshop: Tangerang
                        HELIOS              Clients            Phone
                        ERP Custom          Blog               Email
                        Software House      Contact            WhatsApp
                        Konsultasi          Privacy Policy

[ Social Media Icons ]                     © 2026 PT Comon Cipta Inovasi
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
| Products overview | Hub solusi dengan grouping yang lebih jelas | `/products` |
| Products: Solusi PDAM | Overview solusi + modul + implementasi PDAM | `/products/pdam-suite` |
| Products: HELIOS | Overview + bukti implementasi + link eksternal | `/products/helios` |
| Products: ERP | Modul + use cases + perusahaan pengguna terpilih | `/products/erp` |
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
| Deployment | Deploy ke Firebase Hosting (static export) | LIVE |

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
| Konten teks | ✅ | Sudah disusun di `docs/reference/persiapan-v2.md` |
| Domain & DNS | ⏳ | devetek.com — perlu akses |
| Hosting | ⏳ | Belum ditentukan |

---

## TECH STACK (Rekomendasi)

| Layer | Teknologi | Alasan |
|-------|-----------|--------|
| Framework | Next.js 14+ (App Router) | SSG/SSR, SEO, performa |
| Styling | Tailwind CSS | Utility-first, mudah menjaga design token dan konsistensi UI |
| Animasi | Framer Motion | Smooth, declarative |
| Icons | Lucide / Heroicons | Clean, consistent |
| Blog/CMS | MDX (local) atau Contentful | Simple, scalable |
| Form | React Hook Form + API route | Validasi + email send |
| Maps | Google Maps Embed / Leaflet | 2 lokasi kantor |
| Deployment | Vercel (rec) / VPS | Zero config untuk Next.js |
| Analytics | Google Analytics 4 | Standard |
| Image | Next/Image + sharp | Optimized, lazy load |
