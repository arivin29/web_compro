# Asset Inventory & Checklist

> Status: WORKING DRAFT
> Fungsi: daftar ketersediaan aset untuk design dan development.
> Aturan pakai: aset yang belum `Ready` atau belum jelas izin publiknya tidak boleh diasumsikan aman untuk launch.

## Status Legend

| Label | Arti |
|-------|------|
| Ready | File sudah ada dan bisa dipakai |
| Pending | File belum tersedia atau masih menunggu dari klien/internal |
| Replace | File ada tapi perlu versi baru / kualitas lebih baik |
| Optional | Tidak wajib untuk launch |

## Metadata Minimum Sebelum Handoff Final

Setiap aset prioritas P0 idealnya punya informasi berikut sebelum dikirim ke agency:

- Source file atau lokasi final
- Usage: dipakai di halaman apa
- Public clearance: boleh / jangan tampilkan publik
- Catatan kualitas: crop, resize, retouch, atau replace

---

## Sumber Aset

| Sumber | Lokasi |
|--------|--------|
| Backup WordPress | `/Users/arivin29macmini/Downloads/wp-content/uploads/` |
| Website IoT | https://iot.devetek.app/img/ |
| Website WebGIS | https://webgis-pdam.devetek.app/ |
| Hardware site | https://devetek-iot.web.app/ |

---

## A. BRAND & LOGO

| Asset | File | Status | Lokasi |
|-------|------|--------|--------|
| Logo utama Devetek | DEVETEK-LOGO.png | ✅ | wp-content/uploads/2023/08/ |
| Favicon | 9aec1558-...-DEVETEK-f.png (176x168) | ✅ | wp-content/uploads/2023/08/ |
| Logo CCI | comon-cipta-inovasi-1.png | ✅ | wp-content/uploads/2023/08/ |
| Logo DMI | logo-dmi.png | ✅ | wp-content/uploads/2025/02/ |
| Logo versi gelap (dark bg) | — | 🎨 | Perlu buat versi putih/light |
| OG Image (social share) | — | 🎨 | 1200x630px untuk SEO |

---

## B. FOTO TIM

| Nama | File | Status | Lokasi |
|------|------|--------|--------|
| Muhammad Arifin | arifin-1.png | ✅ | wp-content/uploads/2023/08/ |
| Nedya Amrih Prakasa | raka-1.png | ✅ | wp-content/uploads/2023/08/ |
| Kusuma Indra Putra | kusuma-1.png | ✅ | wp-content/uploads/2023/08/ |
| Yasdiq Lubis | Yash-scaled.jpg | ✅ | wp-content/uploads/2024/01/ |
| Muhammad Ilham C. | WhatsApp-Image-...-9.06.09-PM.jpeg | ✅ | wp-content/uploads/2023/08/ |
| Muhammad Arifan | 20180510_145342-scaled.jpg | ✅ | wp-content/uploads/2023/08/ |
| Randi Maizul | WhatsApp-Image-...-9.28.04-PM.jpeg | ✅ | wp-content/uploads/2023/08/ |
| Fahmi Zulhasymi | fahmi.jpg | ✅ | wp-content/uploads/2023/08/ |
| Robinaldi | Screenshot-2023-08-02-at-18.02.24.png | ✅ | wp-content/uploads/2023/08/ |
| Rully Culit | IMG_2207-scaled.jpg | ✅ | wp-content/uploads/2023/12/ |

**Catatan:** Semua foto perlu di-crop konsisten (1:1 square, min 400x400px). Pertimbangkan foto baru jika sudah outdated.

---

## C. ASET PRODUK

Untuk kategori produk, format yang lebih aman adalah `per produk`, bukan satu list panjang campur semua screenshot. Dengan begitu agency bisa langsung lihat: produk mana yang masuk launch, aset minimumnya apa, dan mana yang masih kosong.

### C1. Ringkasan Per Produk

| Produk | Priority | Halaman | Minimum asset untuk launch | Status | Catatan |
|--------|----------|---------|----------------------------|--------|---------|
| D-IBS | P0 | Detail product | 1 hero overview, 3-4 screenshot modul utama | Partial | Screenshot Billing, Penagihan, HR, Keuangan **gunakan placeholder** dulu |
| D-ASSET | P0 | Detail product | 1 hero WebGIS preview, 2-3 screenshot fitur inti | Partial | **Gunakan placeholder** dulu, screenshot menyusul |
| HELIOS | P0 | Detail product | 1 hero dashboard, 3-5 screenshot fitur inti, foto instalasi hardware | Ready | Aset paling lengkap dan siap dipakai |
| ERP | P0 | Detail product | 1 hero overview, 2-4 screenshot modul inti | Ready | Sudah cukup untuk launch page |
| Software House | P0 | Service page | 3-5 contoh proyek representatif lintas kategori | Partial | Pilih hanya case yang approved untuk publik |
| Konsultasi & Pengadaan | P0 | Service page | Visual pendukung layanan, bukan banyak screenshot aplikasi | Pending | Bisa pakai icon, foto implementasi, atau foto perangkat |
| Portfolio showcase | P1 | Portfolio | 1 thumbnail per case yang disetujui | Partial | Kurasi hanya proyek yang aman dipublish |

### C2. Detail Asset Inventory Per Produk

#### D-IBS

| Asset | File | Status | Usage | Lokasi / Notes |
|-------|------|--------|-------|----------------|
| Hero overview PDAM | pdam-1.png, pdam.png | Ready | Hero / overview section | wp-content/uploads/2023/08/ |
| Baca Meter | baca-meter.png, baca-meter.jpg, meteran-1.jpg | Ready | Modul / feature highlight | wp-content/uploads/2023/08/ |
| Billing | — | Placeholder | Modul / feature highlight | Gunakan placeholder mockup, screenshot menyusul |
| Penagihan | — | Placeholder | Modul / feature highlight | Gunakan placeholder mockup, screenshot menyusul |
| HR | — | Placeholder | Modul / feature highlight | Gunakan placeholder mockup, screenshot menyusul |
| Keuangan | — | Placeholder | Modul / feature highlight | Gunakan placeholder mockup, screenshot menyusul |

#### D-ASSET

| Asset | File | Status | Usage | Lokasi / Notes |
|-------|------|--------|-------|----------------|
| WebGIS preview | — | Placeholder | Hero / feature overview | Gunakan placeholder mockup, screenshot menyusul |

#### HELIOS

| Asset | File | Status | Usage | Lokasi / Notes |
|-------|------|--------|-------|----------------|
| Dashboard | mockup-1.jpg | Ready | Hero / main showcase | iot.devetek.app/img/screenshots/ |
| WebGIS | mockup-4.jpg | Ready | Feature highlight | iot.devetek.app/img/screenshots/ |
| Widget Builder | mockup-3.jpg | Ready | Feature highlight | iot.devetek.app/img/screenshots/ |
| Report | mockup-7.jpg | Ready | Feature highlight | iot.devetek.app/img/screenshots/ |
| Alert | mockup-6.jpg | Ready | Feature highlight | iot.devetek.app/img/screenshots/ |
| Telemetry | mockup-2.jpg | Ready | Feature highlight | iot.devetek.app/img/screenshots/ |
| Node Management | mockup-8.jpg | Ready | Feature highlight | iot.devetek.app/img/screenshots/ |
| Relay | mockup-9.jpg | Ready | Feature highlight | iot.devetek.app/img/screenshots/ |
| Machine Learning | mockup-11.jpg | Ready | Feature highlight | iot.devetek.app/img/screenshots/ |
| Workspace | mockup-12.jpg | Ready | Feature highlight | iot.devetek.app/img/screenshots/ |
| Smart Water Journey | smart-water-journey-pdam.png | Ready | Diagram / ecosystem support | iot.devetek.app/ |
| Hardware installation gallery | terpasang-1/2/3.jpg, rakit-tiang-1/2.jpg, pasang-tiang-1/2.jpg | Ready | Field implementation / proof | iot.devetek.app/images/gallery/ |

#### ERP

| Asset | File | Status | Usage | Lokasi / Notes |
|-------|------|--------|-------|----------------|
| Overview | devetek-erp-2-1.png | Ready | Hero / overview section | wp-content/uploads/2023/08/ |
| Modul akun | akun.png | Ready | Feature highlight | wp-content/uploads/2023/08/ |
| Modul jurnal | jurnal.png | Ready | Feature highlight | wp-content/uploads/2023/08/ |
| Modul laporan | laporan.png | Ready | Feature highlight | wp-content/uploads/2023/08/ |
| Approval | approval.jpg | Ready | Workflow / process section | wp-content/uploads/2023/08/ |

#### Software House / Custom Development

| Asset | File | Status | Usage | Lokasi / Notes |
|-------|------|--------|-------|----------------|
| AMIMS | amims-1.png | Ready | Representative case | wp-content/uploads/2023/08/ |
| VMS | vms-1.png | Ready | Representative case | wp-content/uploads/2023/08/ |
| BPBD | bpbd-1.png | Ready | Representative case | wp-content/uploads/2023/08/ |
| SDKP | sdkp-app-1.png | Ready | Representative case | wp-content/uploads/2023/08/ |
| Perizinan (Optimis) | optimis-1.png | Ready | Representative case | wp-content/uploads/2023/08/ |
| EDUTECH | edutech-logo.png | Ready | Representative case | wp-content/uploads/2023/08/ |

#### Konsultasi & Pengadaan

| Asset | File | Status | Usage | Lokasi / Notes |
|-------|------|--------|-------|----------------|
| Foto perangkat / implementasi | — | Pending | Service proof / support visual | Belum ada daftar khusus di repo ini |
| Icon layanan | — | Optional | Section cards / overview | Bisa dibuat dari icon set |

### C3. Dokumentasi Implementasi Produk

Untuk produk seperti `Solusi PDAM` dan `ERP Custom`, yang dibutuhkan bukan hanya screenshot UI. Agency juga butuh aset bukti implementasi agar halaman produk terasa kredibel dan tidak seperti brosur kosong.

| Kategori | Contoh isi | Dipakai di | Status | Notes |
|----------|------------|------------|--------|-------|
| Foto kickoff / meeting | Foto presentasi, workshop, koordinasi | Product detail, portfolio | Pending | Pilih yang profesional dan aman publik |
| Foto training / onboarding | Training operator, admin, atau user | Product detail, case study | Pending | Sangat kuat untuk PDAM |
| Foto implementasi lapangan | Instalasi, survey, commissioning | Product detail, clients | Pending | Cocok untuk PDAM dan HELIOS |
| Foto go-live / serah terima | Dokumentasi seremoni atau milestone | Portfolio, clients | Pending | Gunakan jika ada izin publik |
| Logo / nama instansi pengguna | PDAM atau perusahaan pengguna | Implementation proof | Pending | Wajib approval sebelum publish |
| Ringkasan case per klien | Masalah, solusi, modul, output | Portfolio, product detail | Pending | Bisa tanpa angka sensitif |

#### Checklist Dokumentasi Solusi PDAM

| Item | Minimum kebutuhan |
|------|-------------------|
| Daftar PDAM pengguna | 5-10 nama yang approved tampil publik |
| Foto implementasi | 1-3 foto representatif per batch atau per klien terpilih |
| Modul yang dipakai | Billing, penagihan, HR, keuangan, dll |
| Bukti aktivitas | Training, monitoring, rollout, pendampingan |

#### Checklist Dokumentasi ERP Custom

| Item | Minimum kebutuhan |
|------|-------------------|
| Perusahaan pengguna | 2-5 nama yang approved atau industri penggantinya |
| Modul yang pernah diimplementasikan | Finance, HR, procurement, inventory, approval, dll |
| Screenshot modul | 3-5 modul inti |
| Ringkasan use case | Tantangan bisnis dan solusi yang dibangun |

---

## D. LOGO KLIEN

| Klien | File | Status | Lokasi |
|-------|------|--------|--------|
| PT RPN | rpn-1.png | ✅ | wp-content/uploads/2023/08/ |
| PDAM Tanah Datar | PDAM-tanah-datar-1.png | ✅ | wp-content/uploads/2023/08/ |
| Unknown (KK) | kk-1.png | ✅ | wp-content/uploads/2023/08/ |
| Unknown (B) | b-1.gif | ✅ | wp-content/uploads/2023/08/ |
| PT Bakti Air Indonesia | — | ⏳ | Perlu dari klien |
| Kementerian KKP | — | ⏳ | Cari logo resmi |
| Kementerian DLH | — | ⏳ | Cari logo resmi |
| Kementerian HAM | — | ⏳ | Cari logo resmi |
| BPBD | — | ⏳ | Cari logo resmi |
| Pemkab Bogor | — | ⏳ | Cari logo resmi |
| PDAM (8 lainnya) | — | ⏳ | Perlu dari klien |
| PT BMT Asia | — | ⏳ | Perlu dari klien |
| PT Adfin | — | ⏳ | Perlu dari klien |
| PT Meganesia | — | ⏳ | Perlu dari klien |
| PT Valensi | — | ⏳ | Perlu dari klien |
| LPPM IPB | — | ⏳ | Cari logo resmi |

---

## E. ILUSTRASI & GRAFIS (PERLU DIBUAT)

| Asset | Dipakai di | Catatan |
|-------|------------|---------|
| Hero background (pattern/particles) | Home hero | Animated dark pattern |
| Ekosistem diagram | Home, About | D-IBS ↔ D-ASSET ↔ HELIOS diagram |
| Peta coverage Indonesia + Eropa | Clients | SVG map dengan pin |
| Product category icons (6) | Products overview | Consistent icon set |
| Values icons (5) | About | Integritas, Inovasi, dll |
| Process/workflow illustration | Software House | 4 step process |
| Mockup devices (laptop+tablet+phone) | Product heroes | Untuk screenshot wrap |

---

## F. ORGANISASI FILE (Rekomendasi untuk Developer)

```
public/
├── images/
│   ├── brand/
│   │   ├── logo.png
│   │   ├── logo-white.png
│   │   ├── logo-cci.png
│   │   ├── logo-dmi.png
│   │   ├── favicon.ico
│   │   └── og-image.jpg
│   │
│   ├── team/
│   │   ├── arifin.jpg
│   │   ├── nedya.jpg
│   │   ├── kusuma.jpg
│   │   └── ... (renamed, cropped 400x400)
│   │
│   ├── products/
│   │   ├── d-ibs/
│   │   │   ├── billing.jpg
│   │   │   ├── penagihan.jpg
│   │   │   ├── baca-meter.jpg
│   │   │   └── ...
│   │   ├── d-asset/
│   │   │   └── webgis-preview.jpg
│   │   ├── helios/
│   │   │   ├── dashboard.jpg
│   │   │   ├── webgis.jpg
│   │   │   ├── alert.jpg
│   │   │   └── ...
│   │   ├── erp/
│   │   │   ├── overview.jpg
│   │   │   └── ...
│   │   └── hardware/
│   │       ├── type-a.jpg
│   │       ├── type-b.jpg
│   │       ├── instalasi-1.jpg
│   │       └── ...
│   │
│   ├── portfolio/
│   │   ├── pdam-tanah-datar.jpg
│   │   ├── salmontrack.jpg
│   │   ├── vms.jpg
│   │   └── ...
│   │
│   ├── clients/
│   │   ├── rpn.png
│   │   ├── pdam-tanah-datar.png
│   │   ├── kkp.png
│   │   └── ...
│   │
│   └── misc/
│       ├── hero-bg.jpg
│       ├── pattern.svg
│       └── map-coverage.svg
│
├── fonts/
│   ├── Inter-Variable.woff2
│   └── PlusJakartaSans-Variable.woff2
```

---

## G. RINGKASAN STATUS

Catatan: ringkasan di bawah belum memasukkan aset dokumentasi implementasi karena jumlah file finalnya masih belum dikurasi.

| Kategori | Total | ✅ Ada | ⏳ Perlu | 🎨 Buat |
|----------|-------|--------|----------|---------|
| Brand/Logo | 6 | 4 | 0 | 2 |
| Foto Tim | 10 | 10 | 0 | 0 |
| Aset Produk | 30 | 25 | 5 | 0 |
| Logo Klien | 16 | 4 | 12 | 0 |
| Ilustrasi/Grafis | 7 | 0 | 0 | 7 |
| **TOTAL** | **69** | **43** | **17** | **9** |
