# Wireframe & Layout Specification — Company Profile Devetek

> Status: WORKING DRAFT
> Fungsi: panduan struktur section per halaman untuk design dan development.
> Aturan pakai: wireframe ini tidak berarti semua section wajib dibangun pada fase launch. Gunakan prioritas `P0`, `P1`, dan `P2` sebagai penentu scope.

## Prioritas Halaman

| Halaman | Priority | Catatan |
|---------|----------|---------|
| Home | P0 | Halaman paling penting untuk launch |
| About | P0 | Wajib untuk trust-building |
| Products overview | P0 | Wajib untuk menjelaskan penawaran |
| Product detail utama | P0 | Fokus pada D-IBS, D-ASSET, HELIOS, ERP, Software House, Consulting |
| Contact | P0 | Jalur konversi utama |
| Portfolio | P1 | Bisa disederhanakan jika konten belum siap |
| Clients | P1 | Tampilkan hanya jika logo/izin sudah clear |
| Blog | P2 | Jangan memblokir launch |

## Prioritas Section Umum

- P0 default: header, hero, product/service explanation, CTA, contact path, footer
- P1 default: testimonial carousel, filter lanjutan, peta coverage, timeline animatif kompleks
- P2 default: blog system, CMS, animasi dekoratif non-esensial

---

## Konvensi Layout

```
[ FULL ]    = Full width (edge-to-edge)
[ CONTAINER ] = Max-width container (1280px), centered
[ GRID-2 ]  = 2 kolom grid
[ GRID-3 ]  = 3 kolom grid
[ GRID-4 ]  = 4 kolom grid
```

---

## 1. HOME (`/`)

```
┌─────────────────────────────────────────────────────┐
│ [HEADER - sticky]                                   │
│ Logo | Home About Products▼ Portfolio Clients Blog  │
│ Contact                              [ Hubungi Kami ]│
├─────────────────────────────────────────────────────┤
│                                                     │
│ [HERO - FULL - dark gradient bg]                   │
│                                                     │
│    (kecil) PT Comon Cipta Inovasi                   │
│    (H1)  Digitalisasi Tanpa Batas                   │
│           — Dari Sensor Hingga Sistem               │
│    (p)   Solusi teknologi end-to-end untuk PDAM,    │
│          Pemerintahan, BUMN & Swasta                │
│                                                     │
│    [ Lihat Produk ]  [ Hubungi Kami ]               │
│                                                     │
│    (subtle particles / grid animation background)   │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [COUNTER - CONTAINER - GRID-3]                      │
│                                                     │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐       │
│  │   12+     │  │   50+     │  │   100+    │       │
│  │   Tahun   │  │   Klien   │  │   Proyek  │       │
│  │ Pengalaman│  │   Aktif   │  │  Selesai  │       │
│  └───────────┘  └───────────┘  └───────────┘       │
│  (counter animation on scroll)                      │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [PRODUCTS OVERVIEW - CONTAINER]                     │
│                                                     │
│  (label) PRODUK & LAYANAN                           │
│  (H2) Solusi Lengkap untuk Kebutuhan Digital Anda   │
│                                                     │
│  [GRID-3]                                           │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐│
│  │ 🏢 icon     │ │ 🗺️ icon     │ │ 📡 icon     ││
│  │ D-IBS       │ │ D-ASSET      │ │ HELIOS       ││
│  │ Sistem PDAM │ │ WebGIS PDAM  │ │ IoT Platform ││
│  │ Terintegrasi│ │              │ │              ││
│  │ (desc 2ln)  │ │ (desc 2ln)   │ │ (desc 2ln)   ││
│  │ [Selengkap→]│ │ [Selengkap→] │ │ [Selengkap→] ││
│  └──────────────┘ └──────────────┘ └──────────────┘│
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐│
│  │ ⚙️ icon     │ │ 💻 icon     │ │ 🤝 icon     ││
│  │ ERP         │ │ Software     │ │ Konsultasi   ││
│  │             │ │ House        │ │ & Pengadaan  ││
│  │ (desc 2ln)  │ │ (desc 2ln)   │ │ (desc 2ln)   ││
│  │ [Selengkap→]│ │ [Selengkap→] │ │ [Selengkap→] ││
│  └──────────────┘ └──────────────┘ └──────────────┘│
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [EKOSISTEM - FULL - slightly lighter bg]            │
│                                                     │
│  (label) EKOSISTEM DEVETEK                          │
│  (H2) Satu Ekosistem, Semua Terintegrasi            │
│                                                     │
│  ┌────────┐    ┌────────┐    ┌────────┐             │
│  │ D-IBS  │←──→│D-ASSET │←──→│HELIOS  │             │
│  │Billing │    │ WebGIS │    │  IoT   │             │
│  └────────┘    └────────┘    └────────┘             │
│       ↕             ↕             ↕                 │
│  ┌──────────────────────────────────────┐           │
│  │       DATABASE TERPUSAT              │           │
│  └──────────────────────────────────────┘           │
│  (animated diagram / illustration)                  │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [CLIENTS LOGO - CONTAINER]                          │
│                                                     │
│  (label) DIPERCAYA OLEH                             │
│  (H2) Klien & Mitra Kami                            │
│                                                     │
│  [ logo ] [ logo ] [ logo ] [ logo ] [ logo ]       │
│  [ logo ] [ logo ] [ logo ] [ logo ] [ logo ]       │
│  (auto-scroll carousel, grayscale → color on hover) │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [TESTIMONIAL - CONTAINER]                           │
│                                                     │
│  (icon quote)                                       │
│  "Setelah implementasi Devetek Helios di 5 DMA..."  │
│  — Tim Teknis, PT Bakti Air Indonesia               │
│  (carousel if multiple)                             │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [CTA - FULL - gradient accent bg]                   │
│                                                     │
│  (H2) Siap Transformasi Digital?                    │
│  (p)  Konsultasi gratis dengan tim kami              │
│                                                     │
│  [ Hubungi Kami ]  [ WhatsApp ]                     │
│                                                     │
├─────────────────────────────────────────────────────┤
│ [FOOTER]                                            │
└─────────────────────────────────────────────────────┘
```

---

## 2. ABOUT US (`/about`)

```
┌─────────────────────────────────────────────────────┐
│ [HEADER]                                            │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [PAGE HERO - compact]                               │
│  (label) TENTANG KAMI                               │
│  (H1) Lebih dari Satu Dekade                        │
│       Membangun Solusi Digital                      │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [STORY - GRID-2]                                    │
│                                                     │
│  ┌─────────────────┐  ┌─────────────────┐          │
│  │  (H2) Tentang   │  │                 │          │
│  │  Devetek        │  │  [ Foto/Ilust ] │          │
│  │                 │  │                 │          │
│  │  (paragraf      │  │                 │          │
│  │   company story)│  │                 │          │
│  │                 │  │                 │          │
│  │  CCI = induk    │  │                 │          │
│  │  DMI = rekanan  │  │                 │          │
│  └─────────────────┘  └─────────────────┘          │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [TIMELINE - CONTAINER]                              │
│                                                     │
│  (H2) Perjalanan Kami                               │
│                                                     │
│  2012 ──●── Devetek didirikan                       │
│         │                                           │
│  2018 ──●── PT Comon Cipta Inovasi resmi            │
│         │                                           │
│  2019 ──●── Fokus SaaS & IoT untuk PDAM             │
│         │                                           │
│  2022 ──●── Ekspansi ke Eropa                       │
│         │                                           │
│  2026 ──●── 50+ klien, 100+ proyek                  │
│                                                     │
│  (vertical animated timeline)                       │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [VISI MISI - GRID-2]                                │
│                                                     │
│  ┌─────────────────┐  ┌─────────────────┐          │
│  │  (H3) Visi      │  │  (H3) Misi      │          │
│  │  Menjadi mitra  │  │  • Solusi        │          │
│  │  strategis...   │  │    terintegrasi  │          │
│  │                 │  │  • Digitalisasi  │          │
│  │                 │  │  • Kualitas      │          │
│  └─────────────────┘  └─────────────────┘          │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [VALUES - CONTAINER - GRID-5]                       │
│                                                     │
│  (H2) Nilai-Nilai Kami                              │
│                                                     │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐               │
│  │icon│ │icon│ │icon│ │icon│ │icon│               │
│  │Inte│ │Ino │ │Kola│ │Komi│ │Komp│               │
│  │grit│ │vasi│ │bora│ │tmen│ │eten│               │
│  │as  │ │    │ │si  │ │    │ │si  │               │
│  │desc│ │desc│ │desc│ │desc│ │desc│               │
│  └────┘ └────┘ └────┘ └────┘ └────┘               │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [TIM - CONTAINER]                                   │
│                                                     │
│  (H2) Tim Kami                                      │
│  (p) Didukung oleh profesional berpengalaman        │
│                                                     │
│  [GRID-4 or GRID-5]                                 │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐              │
│  │[foto]│ │[foto]│ │[foto]│ │[foto]│              │
│  │ Nama │ │ Nama │ │ Nama │ │ Nama │              │
│  │ Role │ │ Role │ │ Role │ │ Role │              │
│  └──────┘ └──────┘ └──────┘ └──────┘              │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐              │
│  │[foto]│ │[foto]│ │[foto]│ │[foto]│              │
│  │ Nama │ │ Nama │ │ Nama │ │ Nama │              │
│  │ Role │ │ Role │ │ Role │ │ Role │              │
│  └──────┘ └──────┘ └──────┘ └──────┘              │
│  (hover: slight zoom + social links)                │
│                                                     │
├─────────────────────────────────────────────────────┤
│ [CTA SECTION]                                       │
├─────────────────────────────────────────────────────┤
│ [FOOTER]                                            │
└─────────────────────────────────────────────────────┘
```

---

## 3. PRODUCTS OVERVIEW (`/products`)

```
┌─────────────────────────────────────────────────────┐
│ [HEADER]                                            │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [PAGE HERO]                                         │
│  (label) PRODUK & LAYANAN                           │
│  (H1) Solusi Digital End-to-End                     │
│  (p) Dari sensor di lapangan hingga laporan         │
│      eksekutif — semua dalam ekosistem Devetek      │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [PRODUCT CARDS - GRID-2 or GRID-3]                  │
│                                                     │
│  Setiap card:                                       │
│  ┌─────────────────────────────────────┐            │
│  │  [thumbnail/icon]                   │            │
│  │  (badge) PDAM / Software / IoT      │            │
│  │  (H3) Nama Produk                   │            │
│  │  (p) Deskripsi 2-3 baris            │            │
│  │  • Fitur highlight 1                │            │
│  │  • Fitur highlight 2                │            │
│  │  • Fitur highlight 3                │            │
│  │  [ Selengkapnya → ]                 │            │
│  └─────────────────────────────────────┘            │
│                                                     │
│  Card yang disarankan:                              │
│  1. Solusi PDAM                                     │
│  2. ERP Custom                                      │
│  3. HELIOS IoT                                      │
│  4. Software House                                  │
│  5. Konsultasi & Pengadaan                          │
│                                                     │
│  Catatan: D-IBS dan D-ASSET tidak harus menjadi     │
│  card utama terpisah; keduanya bisa tampil sebagai  │
│  bagian dari Solusi PDAM.                           │
│                                                     │
├─────────────────────────────────────────────────────┤
│ [TRUST / IMPLEMENTATION SNAPSHOT]                   │
│  “Dipakai oleh 10+ PDAM dan berbagai perusahaan”    │
│  [logo ringkas] [foto lapangan] [link ke portfolio] │
├─────────────────────────────────────────────────────┤
│ [CTA SECTION]                                       │
├─────────────────────────────────────────────────────┤
│ [FOOTER]                                            │
└─────────────────────────────────────────────────────┘
```

---

## 4. PRODUCT DETAIL — PDAM Suite / D-IBS (`/products/pdam-suite`)

> Catatan: Halaman ini menampilkan D-IBS sebagai bagian dari solusi PDAM.
> D-ASSET dan HELIOS juga ditampilkan di sini sebagai bagian ekosistem,
> dengan link ke halaman/website masing-masing.

Catatan revisi arsitektur:
Untuk handoff final, halaman ini lebih aman digabung sebagai bagian dari halaman `Solusi PDAM` daripada berdiri sendiri sebagai top-level product page. Jika tetap dipisah, pastikan ia tetap terhubung kuat dengan D-ASSET dan HELIOS.

```
┌─────────────────────────────────────────────────────┐
│ [HEADER]                                            │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [HERO - dengan screenshot mockup]                   │
│  (label) D-IBS                                      │
│  (H1) Sistem PDAM Terintegrasi                      │
│  (p) Teknologi + SDM + Tata Kelola                  │
│  [ Minta Demo ] [ Hubungi Kami ]                    │
│  (right: laptop/tablet mockup screenshot)           │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [MASALAH - GRID-3]                                  │
│  (H2) Tantangan PDAM yang Kami Selesaikan            │
│  Card 1: Efisiensi rendah                           │
│  Card 2: Data tidak akurat                          │
│  Card 3: NRW tinggi                                 │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [MODUL - tabs atau accordion]                       │
│  (H2) 7 Modul Terintegrasi                          │
│                                                     │
│  [ Billing ] [ Penagihan ] [ Baca Meter ] [ Non-Air]│
│  [ Pengaduan ] [ Keuangan ] [ HR ]                  │
│                                                     │
│  ┌─────────────────────────────────────────┐        │
│  │  (kiri)              (kanan)            │        │
│  │  H3: Billing & Loket  [ Screenshot ]    │        │
│  │  • Dashboard pendapatan                 │        │
│  │  • Manajemen pelanggan                  │        │
│  │  • Tagihan air & non-air                │        │
│  │  • Laporan DRD/LPP                      │        │
│  │  • Cicilan tagihan                      │        │
│  └─────────────────────────────────────────┘        │
│  (alternating left-right per modul)                 │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [KEUNGGULAN - GRID-3]                               │
│  Efisiensi 70% | Data Terpusat | Real-time          │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [IMPLEMENTATION PROOF]                              │
│  (H2) Sudah Diimplementasikan di Berbagai PDAM      │
│  - Logo atau nama PDAM yang approved                │
│  - Jumlah rollout / lokasi                          │
│  - Highlight training, pendampingan, go-live        │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [GALERI DOKUMENTASI]                                │
│  Foto kegiatan, implementasi lapangan,              │
│  meeting, training, commissioning                   │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [SELECTED CASES]                                    │
│  2-4 case cards pendek                              │
│  [Nama PDAM] [Masalah] [Solusi] [Output]            │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [EKOSISTEM LINK]                                    │
│  Lihat juga: D-ASSET (WebGIS) | HELIOS (IoT)       │
│                                                     │
├─────────────────────────────────────────────────────┤
│ [CTA SECTION]                                       │
├─────────────────────────────────────────────────────┤
│ [FOOTER]                                            │
└─────────────────────────────────────────────────────┘
```

---

## 5. PRODUCT DETAIL — D-ASSET (`/products/pdam-suite#d-asset` atau link ke webgis-pdam.devetek.app)

```
Layout mirip D-IBS, tapi lebih ringkas karena link ke
webgis-pdam.devetek.app untuk detail penuh.

Sections:
1. Hero + screenshot WebGIS
2. Tantangan (data tersebar, tracking sulit, laporan manual)
3. 7 Fitur utama (grid cards)
4. Keamanan data (4 poin)
5. Integrasi QGIS (diagram)
6. Foto implementasi / survey lapangan
7. CTA: link ke webgis-pdam.devetek.app + hubungi kami
```

---

## 6. PRODUCT DETAIL — HELIOS (`/products/helios` atau link ke iot.devetek.app)

```
Layout mirip D-ASSET, ringkas + link ke iot.devetek.app.

Sections:
1. Hero + tagline "Monitor. Analisa. Kendalikan."
2. Dua Pilar: Cloud Platform + Hardware (2 cards)
3. Fitur unggulan (6 cards: Dashboard, WebGIS, Alert, Laporan, ML, Device)
4. Hardware 3 varian (comparison table)
5. Solusi industri (PDAM aktif, 3 segera hadir)
6. Performa (angka: <500ms, 10K+/detik, 99.9%)
7. CTA: link ke iot.devetek.app + minta demo
```

---

## 6A. PRODUCT DETAIL — ERP CUSTOM (`/products/erp`)

```
Sections yang disarankan:
1. Hero: ERP custom, bukan ERP template
2. Masalah bisnis yang diselesaikan
3. Modul-modul inti (Finance, HR, Inventory, Procurement, Approval, dll)
4. Cara kerja custom implementation
5. Selected companies / implementation proof
6. Screenshot modul prioritas
7. CTA konsultasi kebutuhan ERP
```

Catatan:
- Jangan menjual ERP hanya sebagai daftar fitur.
- Tunjukkan bahwa sistem ini fleksibel, modular, dan pernah diimplementasikan di beberapa perusahaan.
- Jika nama perusahaan sensitif, gunakan versi `selected industries` atau `selected implementations`.

---

## 7. PORTFOLIO (`/portfolio`)

```
┌─────────────────────────────────────────────────────┐
│ [HEADER]                                            │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [PAGE HERO]                                         │
│  (H1) Portfolio & Proyek                            │
│  (p) Bukti nyata hasil kerja kami                    │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [FILTER BAR]                                        │
│  [ Semua ] [ PDAM ] [ Pemerintah ] [ Swasta ]       │
│                                                     │
│ [PROJECT GRID - GRID-3]                             │
│  ┌──────────────────┐                               │
│  │  [ Screenshot ]   │                              │
│  │  (badge) PDAM     │                              │
│  │  (H3) D-IBS       │                              │
│  │  PDAM Tanah Datar │                              │
│  │  (tech tags)      │                              │
│  │  Billing, IoT,    │                              │
│  │  WebGIS           │                              │
│  └──────────────────┘                               │
│  (repeat for each project)                          │
│  (hover: overlay with "Lihat Detail")               │
│                                                     │
├─────────────────────────────────────────────────────┤
│ [CTA SECTION]                                       │
├─────────────────────────────────────────────────────┤
│ [FOOTER]                                            │
└─────────────────────────────────────────────────────┘
```

---

## 8. CLIENTS & PARTNERS (`/clients`)

```
Sections:
1. Page hero
2. Logo grid — semua klien (grayscale, color on hover)
3. Partner logos (PT Bakti Air Indonesia, dll)
4. Testimonial carousel
5. Peta coverage (Indonesia + Eropa — bisa SVG map atau embed)
6. CTA
```

---

## 9. BLOG (`/blog`)

```
Sections:
1. Page hero
2. Featured article (large card, top)
3. Article grid (GRID-3) — thumbnail, title, excerpt, date, category tag
4. Pagination / Load more
5. Sidebar (opsional): kategori, search

/blog/[slug]:
1. Article header (title, date, author, category, reading time)
2. Featured image (full-width)
3. Article body (prose/markdown)
4. Share buttons
5. Related articles (3 cards)
```

---

## 10. CONTACT (`/contact`)

```
┌─────────────────────────────────────────────────────┐
│ [HEADER]                                            │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [PAGE HERO]                                         │
│  (H1) Hubungi Kami                                  │
│  (p) Tim kami siap membantu Anda                    │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [CONTACT - GRID-2]                                  │
│                                                     │
│  ┌──────────────────┐  ┌──────────────────┐        │
│  │  FORM             │  │  INFO KONTAK     │        │
│  │                   │  │                  │        │
│  │  Nama *           │  │  📧 Email        │        │
│  │  [___________]    │  │  info@devetek.com│        │
│  │                   │  │  marketing@...   │        │
│  │  Email *          │  │                  │        │
│  │  [___________]    │  │  📞 Telepon      │        │
│  │                   │  │  0856 230 2229   │        │
│  │  No. HP           │  │                  │        │
│  │  [___________]    │  │  🏢 Office       │        │
│  │                   │  │  Mutiara         │        │
│  │  Kategori         │  │  Karadenan 7C    │        │
│  │  [▼ Pilih___]     │  │  Cibinong, Bogor │        │
│  │  - PDAM           │  │                  │        │
│  │  - Custom Software│  │  🔧 Workshop     │        │
│  │  - Konsultasi     │  │  Citra Raya,     │        │
│  │  - Pengadaan      │  │  Tangerang       │        │
│  │  - Lainnya        │  │                  │        │
│  │                   │  │  [ Chat WA  ]    │        │
│  │  Pesan *          │  │                  │        │
│  │  [___________]    │  │                  │        │
│  │  [___________]    │  │                  │        │
│  │                   │  │                  │        │
│  │  [ Kirim Pesan ]  │  │                  │        │
│  └──────────────────┘  └──────────────────┘        │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [MAPS - FULL WIDTH]                                 │
│  Google Maps embed — 2 pin (Office + Workshop)      │
│                                                     │
├─────────────────────────────────────────────────────┤
│ [FOOTER]                                            │
└─────────────────────────────────────────────────────┘
```
