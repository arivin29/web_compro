# Devetek Website Style Reconstruction Blueprint

> Status: PROPOSED FOR APPROVAL  
> Scope: penyegaran identitas visual dan standardisasi UI website Devetek  
> Referensi logo utama: `public/images/logo/devetek-logo.png`  
> Konsep: **Devetek Forward — Let Technology Help You**

## 1. Tujuan Rekonstruksi

Rekonstruksi ini bertujuan mengubah tampilan website dari gaya generik hasil code builder menjadi website perusahaan teknologi yang memiliki identitas visual Devetek secara konsisten.

Hasil yang ingin dicapai:

- Devetek langsung dikenali melalui warna, bentuk, tipografi, dan pola visualnya.
- Tampilan terasa modern, terpercaya, teknis, dan cocok untuk klien enterprise maupun institusi.
- Produk utama mudah dipahami tanpa membuat halaman terasa padat.
- Seluruh halaman menggunakan aturan komponen yang sama.
- Desain tetap ringan, responsif, mudah diakses, dan mudah dikembangkan.
- CTA konsultasi, demo, dan WhatsApp terlihat jelas tanpa terasa agresif.

Rekonstruksi ini bukan perubahan logo dan bukan perubahan total isi website. Fokusnya adalah membangun sistem visual yang menyatukan seluruh halaman.

---

## 2. Fondasi Merek

### 2.1 Kepribadian merek

Devetek harus terasa:

- Modern, tetapi tidak mengikuti tren secara berlebihan.
- Teknis, tetapi tetap mudah dipahami pengguna nonteknis.
- Enterprise, tetapi tidak kaku.
- Terpercaya, berpengalaman, dan dekat dengan kebutuhan operasional.
- Berorientasi pada solusi dan implementasi nyata.

### 2.2 Ide visual utama

Ikon Devetek terdiri dari tiga bentuk segitiga transparan yang saling bertumpuk dan mengarah ke depan. Bentuk ini menjadi sumber identitas seluruh website.

Makna visual:

- Segitiga mengarah ke depan: progres dan transformasi.
- Tiga lapisan: sistem, integrasi, dan kolaborasi.
- Transparansi antarlapisan: keterhubungan data dan layanan.
- Biru: teknologi dan kepercayaan.
- Oranye: energi dan tindakan.
- Merah: keberanian dan dampak.

Nama pola visual: **Forward Layers**.

### 2.3 Penggunaan Forward Layers

Pola dapat digunakan pada:

- Dekorasi hero.
- Penanda section.
- Sudut card unggulan.
- Nomor tahapan proses.
- Divider antar-section.
- Background CTA.
- Loading state atau indikator progress.

Pola tidak boleh digunakan terlalu besar pada semua section. Maksimal satu elemen Forward Layers yang dominan dalam satu viewport.

---

## 3. Sistem Warna

### 3.1 Warna merek utama

Warna berikut diambil dari referensi identitas Devetek dan menjadi palette inti.

| Token | Nilai | Fungsi utama |
|---|---:|---|
| `brand-red` | `#E53935` | Aksen dampak, bagian gradient, indikator penting |
| `brand-orange` | `#FF8A00` | CTA utama, highlight, active state |
| `brand-blue` | `#2F6DB5` | Link, ikon, data, produk, informasi |
| `brand-navy` | `#0B1625` | Header, footer, hero, section gelap |
| `brand-navy-soft` | `#14263B` | Card dan panel pada background gelap |

> Nilai RGB final sebaiknya diverifikasi kembali dari file logo master SVG ketika tersedia.

### 3.2 Warna permukaan

| Token | Nilai | Penggunaan |
|---|---:|---|
| `surface-page` | `#F6F8FB` | Background halaman utama |
| `surface-white` | `#FFFFFF` | Card dan section terang |
| `surface-soft` | `#EEF3F8` | Section alternatif dan input |
| `surface-dark` | `#0B1625` | Hero, footer, CTA gelap |
| `surface-dark-soft` | `#14263B` | Panel di atas surface gelap |

### 3.3 Warna teks

| Token | Nilai | Penggunaan |
|---|---:|---|
| `text-primary` | `#0B1625` | Heading dan informasi utama |
| `text-secondary` | `#526276` | Body text |
| `text-muted` | `#7D8B9C` | Caption dan metadata |
| `text-inverse` | `#FFFFFF` | Teks utama pada background gelap |
| `text-inverse-muted` | `#AAB7C6` | Body text pada background gelap |

### 3.4 Warna garis dan status

| Token | Nilai |
|---|---:|
| `border-default` | `#DCE4EC` |
| `border-dark` | `rgba(255,255,255,0.12)` |
| `success` | `#1F9D62` |
| `warning` | `#D97706` |
| `error` | `#D9363E` |
| `info` | `#2F6DB5` |

### 3.5 Aturan penggunaan warna

- Navy menjadi fondasi area gelap, bukan biru terang.
- Biru digunakan untuk informasi, teknologi, navigasi, dan produk.
- Oranye menjadi warna aksi utama.
- Merah hanya digunakan sebagai aksen pendamping dan status kritis.
- Gradient merah–oranye digunakan untuk CTA utama atau elemen bermakna tinggi.
- Gradient biru–merah–oranye hanya digunakan pada hero, CTA besar, atau materi promosi khusus.
- Jangan memakai semua warna merek dengan intensitas tinggi dalam satu komponen kecil.
- Rasio visual yang disarankan: 70% warna netral, 20% biru/navy, 10% oranye/merah.

### 3.6 Gradient resmi antarmuka

```text
Primary CTA  : linear-gradient(135deg, #FF8A00 0%, #E53935 100%)
Brand Hero   : linear-gradient(125deg, #0B1625 0%, #14263B 58%, #184E7A 100%)
Brand Feature: linear-gradient(120deg, #2F6DB5 0%, #7D5A9E 48%, #E53935 100%)
```

`Brand Feature` tidak digunakan sebagai background default. Penggunaannya dibatasi untuk banner atau CTA unggulan.

---

## 4. Tipografi

### 4.1 Font utama

| Peran | Font | Weight |
|---|---|---|
| Display dan heading | Space Grotesk | 600, 700 |
| Body dan UI | Inter | 400, 500, 600 |
| Data teknis opsional | JetBrains Mono | 500 |

Space Grotesk dipilih karena selaras dengan bentuk wordmark Devetek: geometris, modern, bersih, tetapi masih mudah didekati.

Jika pergantian font belum disetujui, Plus Jakarta Sans dapat dipertahankan sementara sebagai fallback heading.

### 4.2 Skala tipografi

| Style | Desktop | Mobile | Weight | Line height |
|---|---:|---:|---:|---:|
| Display/Hero | 64px | 38px | 700 | 1.05 |
| H1 page | 52px | 34px | 700 | 1.10 |
| H2 section | 40px | 28px | 700 | 1.15 |
| H3 card | 22px | 19px | 600 | 1.30 |
| H4/widget | 17px | 16px | 600 | 1.35 |
| Body large | 18px | 16px | 400 | 1.70 |
| Body | 16px | 15px | 400 | 1.70 |
| Body small | 14px | 13px | 400 | 1.60 |
| Label | 12px | 11px | 600 | 1.30 |

### 4.3 Aturan tipografi

- Heading menggunakan letter spacing `-0.025em` sampai `-0.04em`.
- Body text tidak menggunakan negative tracking.
- Label section menggunakan uppercase dengan tracking `0.12em–0.18em`.
- Panjang paragraf maksimal sekitar 65–75 karakter per baris.
- Hindari heading dengan lebih dari tiga baris pada desktop.
- Gunakan bold untuk hierarchy, bukan untuk seluruh isi card.
- Tagline resmi selalu ditulis: **Let Technology Help You.**

---

## 5. Layout dan Spacing

### 5.1 Grid utama

- Container maksimum: `1280px`.
- Padding desktop: `32px`.
- Padding tablet: `24px`.
- Padding mobile: `20px`.
- Grid desktop: 12 kolom.
- Grid tablet: 8 kolom.
- Grid mobile: 4 kolom.
- Gap utama: `24px`; mobile `16px`.

### 5.2 Skala spacing

Gunakan basis 4px:

```text
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120
```

### 5.3 Jarak section

- Desktop: `96px` vertikal.
- Tablet: `80px` vertikal.
- Mobile: `64px` vertikal.
- Hero boleh menggunakan tinggi minimum `calc(100vh - header)`.
- Jarak heading ke isi section: `40–56px`.

### 5.4 Ritme background

Gunakan urutan bergantian:

1. Hero gelap.
2. Trust bar putih.
3. Section utama surface soft.
4. Section pendukung putih.
5. Proof/counter gelap.
6. Section berikutnya putih atau surface soft.

Tujuannya memberi ritme tanpa membuat setiap section terasa seperti halaman terpisah.

---

## 6. Bentuk, Border, dan Shadow

### 6.1 Radius

| Token | Nilai | Penggunaan |
|---|---:|---|
| `radius-xs` | 2px | Garis aksen dan elemen dekoratif kecil |
| `radius-sm` | 4px | Badge, tag, dan status |
| `radius-md` | 6px | Button, input, card, dan widget |
| `radius-lg` | 8px | Hero panel, dropdown, dan CTA besar |
| `radius-full` | 9999px | Avatar dan dot status |

Karakter bentuk Devetek harus tegas, geometris, dan minimal. `radius-md` 6px menjadi radius default mayoritas komponen. `radius-lg` 8px adalah batas radius normal dan hanya digunakan pada panel berukuran besar.

Aturan penggunaan:

- Jangan menggunakan radius 12px, 16px, 20px, atau 24px pada card standar.
- Jangan membuat button berbentuk pill.
- Badge dan filter menggunakan radius 4px, bukan pill.
- `radius-full` hanya untuk avatar, dot status, indikator, dan tombol ikon berbentuk lingkaran.
- Komponen yang saling berdampingan harus memakai radius yang sama.
- Card unggulan dibedakan melalui warna, garis aksen, atau komposisi, bukan radius lebih besar.

### 6.2 Border

- Card terang: `1px solid #DCE4EC`.
- Card gelap: `1px solid rgba(255,255,255,0.12)`.
- Focus state: ring biru 2px dengan offset 2px.
- Card unggulan boleh memiliki garis gradient setinggi 3–4px di sisi atas.

### 6.3 Shadow

```text
Card default : 0 12px 36px -24px rgba(11,22,37,0.28)
Card hover   : 0 24px 50px -28px rgba(11,22,37,0.42)
Dropdown     : 0 20px 50px -20px rgba(0,0,0,0.50)
CTA glow     : 0 14px 34px -16px rgba(229,57,53,0.70)
```

Shadow berfungsi membentuk hierarchy. Jangan menggunakan shadow kuat pada semua card.

---

## 7. Pola Komponen Dasar

### 7.1 Button

#### Primary

- Background gradient oranye ke merah.
- Teks putih, weight 600.
- Radius 6px.
- Digunakan untuk aksi utama: konsultasi, demo, dan kirim pesan.
- Maksimal satu primary button per kelompok aksi.

#### Secondary

- Background putih atau transparan.
- Border biru 30–50%.
- Teks navy atau putih menyesuaikan background.
- Digunakan untuk “Lihat Produk”, “Pelajari”, atau navigasi pendamping.

#### Ghost

- Tanpa background default.
- Digunakan untuk navigasi atau aksi tersier.
- Hover menggunakan background biru/navy transparan.

#### WhatsApp

- Hijau WhatsApp hanya untuk aksi yang benar-benar membuka WhatsApp.
- Tidak menggantikan warna CTA utama Devetek.

#### Ukuran

| Ukuran | Tinggi minimum | Padding horizontal |
|---|---:|---:|
| Small | 36px | 14px |
| Default | 44px | 20px |
| Large | 52px | 28px |

Semua button harus memiliki loading, disabled, hover, active, dan focus state.

### 7.2 Badge

Jenis badge:

- Brand: background biru muda, teks biru.
- Featured: background oranye muda, teks merah tua.
- Success: background hijau muda, teks hijau tua.
- Neutral: background abu muda, teks secondary.

Badge tidak menggunakan lebih dari dua kata jika memungkinkan.

### 7.3 Section heading

Struktur standar:

1. Diamond/segitiga kecil berwarna oranye.
2. Label uppercase.
3. Judul section.
4. Deskripsi opsional.

Alignment default adalah kiri. Alignment center hanya untuk section yang benar-benar simetris seperti testimonial atau client logo.

### 7.4 Link

- Link inline: brand blue dan underline saat hover.
- Link card: teks biru dengan ikon arrow.
- External link: gunakan ikon `ArrowUpRight`.
- Seluruh card tidak otomatis clickable jika di dalamnya terdapat lebih dari satu aksi.

---

## 8. Sistem Card

Card tidak boleh menggunakan satu template untuk semua jenis informasi.

### 8.1 Base card

- Surface putih.
- Border tipis.
- Radius 6px.
- Padding 24px; desktop besar dapat menggunakan 32px.
- Garis aksen pendek pada sisi atas kiri.
- Hover: naik maksimal 4px dan border berubah biru.

### 8.2 Product card

Isi:

- Ikon produk.
- Kategori atau badge.
- Nama produk.
- Deskripsi manfaat maksimal tiga baris.
- Daftar modul ringkas bila diperlukan.
- Link “Lihat solusi”.

Produk unggulan menggunakan ukuran lebih besar dan boleh memakai background navy.

### 8.3 Project/case-study card

Isi:

- Screenshot atau foto implementasi dominan.
- Nama proyek.
- Kategori solusi.
- Nama klien jika sudah mendapat izin publikasi.
- Dampak atau hasil yang dapat diverifikasi.

Rasio gambar disarankan `16:10`. Jangan memakai gambar dashboard sebagai dekorasi kecil yang sulit dibaca.

### 8.4 Proof/stat card

- Angka menjadi elemen paling dominan.
- Label pendek dan konkret.
- Ikon hanya pendukung.
- Sumber atau konteks angka harus tersedia jika klaim bersifat publik.

### 8.5 Process card

- Nomor tahap tampil besar.
- Ikon dan judul singkat.
- Deskripsi maksimal 2–3 kalimat.
- Antar-card dihubungkan oleh garis atau arah Forward Layers.

### 8.6 Testimonial card

- Kutipan menjadi fokus.
- Identitas pemberi testimoni jelas.
- Logo atau avatar hanya jika tersedia.
- Hindari rating bintang jika bukan berasal dari sistem penilaian nyata.
- Jangan menggunakan nama atau jabatan placeholder pada versi produksi.

### 8.7 Contact card

- Satu informasi utama per baris: alamat, email, telepon.
- Ikon konsisten.
- Seluruh baris clickable untuk email atau telepon.
- Alamat panjang tidak boleh bersaing dengan CTA utama.

---

## 9. Widget dan Elemen Data

### 9.1 Counter widget

- Angka: Space Grotesk 700.
- Label: Inter 500.
- Gunakan satu warna aksen per angka.
- Animasi berjalan sekali ketika masuk viewport.
- Durasi 1.2–1.8 detik.
- Hormati `prefers-reduced-motion`.

### 9.2 Ecosystem widget

Berfungsi menjelaskan hubungan D-IBS, D-ASSET, HELIOS, dan ERP.

- Background navy.
- Setiap produk berupa row atau node yang jelas.
- Status dan hubungan sistem ditampilkan sebagai data, bukan ornamen palsu.
- Interaksi hover memperjelas produk yang dipilih.
- Pada mobile berubah menjadi daftar vertikal.

### 9.3 Client/logo grid

- Logo berada dalam container dengan ukuran visual setara.
- Default dapat dibuat grayscale 70%, lalu kembali berwarna saat hover.
- Jangan mengubah proporsi logo.
- Nama klien tetap tersedia sebagai teks atau `alt`.

### 9.4 Timeline

- Desktop dapat menggunakan alternating layout.
- Mobile selalu satu kolom.
- Dot timeline menggunakan tiga warna merek secara berurutan.
- Tahun harus lebih dominan daripada dekorasi.

### 9.5 Map/location widget

- Peta diperlakukan sebagai konten pendukung.
- Gunakan radius dan border yang sama dengan card.
- Berikan fallback alamat teks jika iframe gagal dimuat.

### 9.6 WhatsApp FAB

- Ukuran 52–56px.
- Posisi kanan bawah dengan safe margin mobile.
- Gunakan hijau resmi WhatsApp.
- Tambahkan tooltip pada desktop.
- Jangan menutupi CTA, cookie notice, atau navigasi mobile.

---

## 10. Header dan Navigasi

### 10.1 Desktop

- Tinggi: 72–76px.
- Di atas hero: transparan atau navy transparan.
- Setelah scroll: navy solid dengan blur ringan.
- Logo versi gelap/putih dipilih berdasarkan background.
- Menu utama maksimal 6–7 item.
- Active state menggunakan garis atau diamond oranye kecil.
- CTA kanan: “Mulai Diskusi” atau “Hubungi Kami”.

### 10.2 Dropdown produk

- Background navy.
- Setiap item memiliki ikon, nama, dan deskripsi pendek.
- Radius 8px.
- Tidak menggunakan dropdown terlalu lebar.
- Dapat dibuka dengan mouse dan keyboard.

### 10.3 Mobile

- Tinggi header: 64–68px.
- Logo tetap terbaca pada lebar 320px.
- Menu menggunakan drawer atau overlay navy.
- Produk dapat menggunakan accordion.
- CTA diletakkan setelah seluruh menu.
- Body scroll dikunci saat drawer terbuka.

---

## 11. Hero

### 11.1 Homepage hero

Layout desktop dua kolom:

- Kiri: label, headline, deskripsi, CTA, dan proof points.
- Kanan: ekosistem produk, screenshot dashboard, atau visual implementasi nyata.

Aturan visual:

- Background brand navy.
- Grid teknis sangat halus.
- Forward Layers ditempatkan pada satu sisi.
- Gradient warna merek digunakan dengan opacity rendah.
- CTA utama oranye–merah.
- Tidak menggunakan blob bulat generik sebagai elemen utama.

Contoh arah headline:

> Teknologi yang Membuat Operasional Bergerak Lebih Baik

### 11.2 Inner-page hero

- Tinggi lebih ringkas: 360–480px.
- Breadcrumb opsional.
- Satu H1 dan satu paragraf pembuka.
- Visual menyesuaikan konteks produk.
- Semua product page menggunakan struktur hero yang konsisten.

---

## 12. Footer

Footer menggunakan background navy dan terdiri dari:

1. Pre-footer CTA.
2. Logo dan deskripsi singkat.
3. Navigasi produk.
4. Navigasi perusahaan.
5. Kontak.
6. Legal links dan copyright.

Aturan:

- Heading kolom menggunakan label uppercase kecil.
- Link berwarna putih redup dan menjadi putih saat hover.
- Gunakan logo versi background gelap.
- Tambahkan garis tipis tiga warna sebagai signature visual.
- Hindari menampilkan social link yang masih bernilai `#`.

---

## 13. Form dan Input

- Tinggi input minimum 44px.
- Radius 6px.
- Label selalu terlihat; placeholder bukan pengganti label.
- Background input menggunakan putih atau surface soft.
- Focus menggunakan border biru dan ring transparan.
- Error menggunakan pesan di bawah field, bukan warna saja.
- Submit button memiliki loading state.
- Success state tetap menyediakan langkah berikutnya.
- Form contact harus nyaman digunakan dengan keyboard dan perangkat mobile.

---

## 14. Ikon dan Ilustrasi

- Pilih satu keluarga ikon utama. Phosphor disarankan karena tersedia dan fleksibel.
- Gunakan stroke/weight yang konsisten dalam satu section.
- Ukuran ikon umum: 16, 20, 24, dan 32px.
- Hindari mencampur Lucide dan Phosphor dalam satu komponen.
- Ilustrasi generik AI tidak menjadi visual utama jika tersedia screenshot atau foto proyek nyata.
- Screenshot produk diberi framing sederhana seperti browser/app window.
- Forward Layers dapat menjadi fallback visual ketika aset produk belum tersedia.

---

## 15. Motion dan Interaksi

Prinsip motion: membantu memahami arah dan hierarchy, bukan sekadar dekorasi.

### Motion yang diperbolehkan

- Fade-up: 16–24px, 400–600ms.
- Stagger card: 60–100ms.
- Hover card: translate Y maksimal 4px.
- Arrow/link: translate X maksimal 4px.
- Counter: maksimal 1.8 detik.
- Page transition: opacity dengan pergeseran sangat kecil.

### Motion yang dihindari

- Parallax berat.
- Animasi loop pada banyak elemen.
- Glow berkedip.
- Scale card berlebihan.
- Animasi yang menunda akses ke konten.

Semua animasi non-esensial harus dinonaktifkan ketika pengguna memilih `prefers-reduced-motion`.

---

## 16. Responsive dan Accessibility

### Breakpoint referensi

| Mode | Lebar |
|---|---:|
| Mobile | 320–639px |
| Tablet | 640–1023px |
| Desktop | 1024–1439px |
| Wide | 1440px ke atas |

### Persyaratan minimum

- Tidak ada horizontal scroll pada viewport 320px.
- Target sentuh minimum 44×44px.
- Kontras teks mengikuti WCAG AA.
- Focus indicator selalu terlihat.
- Urutan heading semantik tidak dilompati.
- Gambar memiliki `alt` yang bermakna.
- Informasi tidak disampaikan hanya melalui warna.
- Navbar, dropdown, drawer, form, dan carousel dapat digunakan dengan keyboard.
- Layout tetap terbaca pada zoom browser 200%.

---

## 17. Arah Struktur Homepage

Urutan yang direkomendasikan:

1. Hero dan positioning Devetek.
2. Trust bar: pengalaman, proyek, dan klien.
3. Masalah bisnis yang diselesaikan.
4. Produk unggulan PDAM Suite.
5. ERP, HELIOS, Custom Software, dan Consulting.
6. Diagram ekosistem terintegrasi.
7. Proyek atau studi kasus nyata.
8. Proses kerja Devetek.
9. Logo klien dan partner.
10. Testimoni terverifikasi.
11. CTA konsultasi.
12. Footer.

Lokasi kantor tidak harus menjadi section besar di homepage. Informasi ini dapat diringkas pada footer dan ditampilkan lengkap di halaman Contact.

---

## 18. Arah Halaman Lain

### About

- Company story.
- Visi, misi, dan nilai.
- Timeline.
- Struktur entitas jika relevan bagi calon klien.
- Tim hanya menampilkan data dan foto yang sudah disetujui.

### Products overview

- Satu card unggulan PDAM Suite.
- Kelompok produk berdasarkan masalah yang diselesaikan.
- CTA konsultasi pada akhir halaman.

### Product detail

- Hero produk.
- Masalah pengguna.
- Cara solusi bekerja.
- Modul atau kapabilitas.
- Screenshot nyata.
- Integrasi.
- Bukti implementasi.
- FAQ.
- CTA demo.

### Clients/portfolio

- Filter berdasarkan sektor atau solusi.
- Logo klien.
- Project cards.
- Case study unggulan.
- CTA untuk membahas kebutuhan serupa.

### Contact

- Form menjadi fokus utama.
- WhatsApp sebagai alternatif cepat.
- Informasi email, telepon, dan alamat.
- Peta berada setelah informasi utama atau di samping form pada desktop.

---

## 19. Design Tokens yang Disarankan

Penamaan berikut menjadi target ketika implementasi dimulai:

```text
color.brand.red
color.brand.orange
color.brand.blue
color.brand.navy
color.surface.page
color.surface.white
color.surface.soft
color.text.primary
color.text.secondary
color.text.muted
color.border.default

font.display
font.body
font.mono

radius.sm
radius.md
radius.lg
radius.full

shadow.card
shadow.cardHover
shadow.dropdown
shadow.cta

space.1 ... space.24
```

Komponen tidak boleh menggunakan hex color baru secara langsung kecuali untuk visual khusus yang sudah didokumentasikan.

---

## 20. Strategi Rekonstruksi

### Tahap 1 — Fondasi

- Finalisasi aset logo terang, gelap, dan ikon.
- Tambahkan font resmi.
- Susun design tokens.
- Standarkan container, spacing, heading, button, badge, card, dan form.

### Tahap 2 — Global shell

- Rekonstruksi navbar desktop/mobile.
- Rekonstruksi footer.
- Standarkan page hero.
- Standarkan CTA section dan WhatsApp FAB.

### Tahap 3 — Homepage

- Susun ulang hierarchy hero.
- Standarkan product cards dan proof widgets.
- Rapikan ecosystem, process, client, testimonial, dan CTA.
- Kurangi section yang berulang atau tidak mendukung conversion.

### Tahap 4 — Inner pages

- About.
- Products overview.
- Product detail pages.
- Clients/portfolio.
- Contact.
- Blog dan legal pages.

### Tahap 5 — Quality gate

- Responsive review pada seluruh breakpoint.
- Accessibility review.
- Pemeriksaan copy dan klaim.
- Optimasi gambar dan performa.
- Cross-browser testing.

---

## 21. Definition of Done

Rekonstruksi visual dianggap selesai ketika:

- Seluruh halaman memakai palette dan token yang sama.
- Tidak ada variasi button/card baru tanpa alasan yang terdokumentasi.
- Card, widget, input, dan button menggunakan radius maksimal 8px sesuai sistem radius minimal.
- Tidak ada button atau badge berbentuk pill kecuali elemen lingkaran yang memang membutuhkan `radius-full`.
- Header dan footer konsisten di seluruh route.
- Logo memiliki versi yang tepat untuk background terang dan gelap.
- Homepage memiliki hierarchy konten yang jelas.
- CTA utama dapat ditemukan tanpa mendominasi seluruh halaman.
- Produk utama dan hubungan ekosistem dapat dipahami dengan cepat.
- Tidak ada placeholder atau klaim yang belum diverifikasi.
- Tidak ada horizontal overflow pada viewport mobile.
- Navigasi dan form dapat digunakan dengan keyboard.
- Kontras memenuhi WCAG AA.
- Build production, lint, dan type checking berhasil.

---

## 22. Keputusan yang Perlu Disetujui Sebelum Implementasi

1. Apakah Space Grotesk disetujui sebagai font heading resmi?
2. Apakah CTA utama menggunakan gradient oranye–merah atau solid orange?
3. Apakah homepage menggunakan komposisi dominan terang dengan hero/footer gelap?
4. Apakah tagline `Let Technology Help You.` tetap menjadi tagline resmi?
5. Apakah tersedia logo master SVG untuk versi terang, gelap, dan icon-only?
6. Data statistik, daftar klien, dan testimonial mana yang sudah boleh dipublikasikan?

Dokumen ini menjadi acuan desain setelah enam keputusan tersebut disetujui. Implementasi tidak dimulai sebelum arah utama mendapatkan persetujuan.

---

## 23. Catatan Keputusan (3 September 2026)

Enam keputusan pada §22 sudah diambil. Dokumen ini berstatus **DISETUJUI**
dan menjadi acuan implementasi. Panduan kerjanya ada di
`.claude/skills/devetek-ui/SKILL.md`.

| No | Pertanyaan §22 | Keputusan |
|---|---|---|
| 1 | Font heading resmi | **Outfit**, bukan Space Grotesk. Wordmark pada logo master berkarakter geometris; Space Grotesk adalah grotesque sehingga tidak sekeluarga |
| 2 | CTA utama | **Solid orange `#F0701F`**, bukan gradient. Gradient `gradient-cta` tetap tersedia untuk banner/materi promosi khusus |
| 3 | Komposisi homepage | **Dominan terang**, dengan hero, section ekosistem, CTA, dan footer bertema navy |
| 4 | Tagline resmi | **Tetap** `Let Technology Help You.` |
| 5 | Logo master SVG | **Tidak tersedia.** Ikon diekstrak menjadi PNG transparan (`devetek-mark.png`), wordmark diketik ulang memakai Outfit lewat komponen `<Logo />`, sehingga versi terang/gelap cukup dibedakan lewat warna teks |
| 6 | Data yang boleh dipublikasi | Statistik, daftar klien, dan testimonial existing **dinyatakan terverifikasi** dan dipakai apa adanya |

### Penyimpangan yang disengaja dari draf awal

**Nilai warna merek.** §3.1 mensyaratkan verifikasi ulang RGB dari logo master.
Verifikasi sudah dilakukan dan nilainya berbeda dari draf:

| Token | Draf §3.1 | Final (dari logo) |
|---|---|---|
| `brand-red` | `#E53935` | `#E5301E` |
| `brand-orange` | `#FF8A00` | `#F0701F` |
| `brand-blue` | `#2F6DB5` | `#4479B3` |
| `brand-navy` | `#0B1625` | `#101A28` |

**Label CTA berwarna putih (revisi 3 Sep 2026).** Awalnya tombol primary
memakai label navy karena teks putih di atas oranye merek hanya mencapai
kontras 2.98:1 dan gagal WCAG AA. Keputusan merek menetapkan label putih
bersih, sehingga §21 poin "kontras memenuhi WCAG AA" **tidak berlaku untuk
tombol primary**. Batasan penyertanya: tombol primary tidak dipakai pada
ukuran `sm` untuk aksi penting, bobot tidak diturunkan dari semibold, dan
kombinasi oranye + putih tidak dipakai untuk teks biasa di luar tombol.
Bila AA perlu dipulihkan, permukaan tombol digelapkan ke `#B9540E`
(putih = 4.84:1) tanpa perubahan lain.

**Dua varian biru.** `brand-blue` (`#4479B3`) hanya untuk fill, ikon, dan
dekorasi. Untuk teks dan link ditambahkan `brand-blue-strong` (`#356399`) di
permukaan terang dan `brand-blue-soft` (`#7FB0E6`) di permukaan gelap, karena
biru logo saja tidak lolos AA di atas `surface-soft`.

**Warna WhatsApp.** §9.6 menyebut "hijau resmi WhatsApp". Varian terang
`#25D366` tidak memenuhi kontras non-teks 3:1 terhadap latar terang, sehingga
FAB memakai `#128C7E` dan tombol WhatsApp memakai `#075E54` — keduanya masih
warna resmi WhatsApp.

### Ruang lingkup yang sudah dikerjakan

Tahap 1 (fondasi), Tahap 2 (global shell), dan Tahap 3 (homepage) selesai.
Tahap 4 (halaman dalam) dan Tahap 5 (quality gate menyeluruh) belum dikerjakan;
status per halaman tercatat pada §8 di file skill.


---

## 24. Pembersihan Konten Beranda (3 September 2026)

Audit setelah Tahap 3 menemukan pengulangan berikut, semuanya sudah dihapus:

| Temuan | Tindakan |
|---|---|
| Angka `12+/50+/100+` tampil di hero **dan** trust bar, berjarak satu section | Proof points di hero dihapus; angka hanya di `TrustBarSection` |
| Section "Implementasi Nyata" berisi D-IBS/D-ASSET/HELIOS — produk yang sama untuk ketiga kalinya, memakai screenshot yang sama dengan hero | Diganti tiga proyek nyata lintas sektor dari `FEATURED_PROJECTS` |
| Kartu penutup ekosistem memuat tiga klaim yang sudah disampaikan di section masalah dan di card produk unggulan | Kartu dihapus |
| Alamat kantor tampil di blok CTA lalu diulang footer tepat di bawahnya | Baris alamat dihapus dari CTA; email dan telepon tetap |
| Data klien dan proyek di-hardcode di `src/app/clients/page.tsx` sehingga tidak bisa dipakai ulang | Dipindah ke `CLIENTS` / `PROJECTS` / `FEATURED_PROJECTS` di `src/lib/constants.ts`, dipakai bersama oleh beranda dan halaman /clients |

Catatan yang tidak diubah: `EcosystemSection` dan `ProcessSection` sama-sama
berbentuk deret bernomor horizontal dan letaknya berdekatan. Isinya berbeda
(alur data vs alur kerja proyek) dan warna latarnya berselang, jadi tidak
dihitung sebagai duplikasi — tetapi bila ke depan ada section bernomor lain,
sebaiknya salah satunya diberi bentuk berbeda.


---

## 25. Penyelesaian Tahap 4 & 5 (3 September 2026)

Seluruh halaman sudah memakai design system: beranda, About, Blog, Klien,
Kontak, Produk (ikhtisar dan lima halaman detail), serta dua halaman legal.
Shim kompatibilitas dihapus, sehingga tidak ada lagi jalur lama yang tersisa.

### Temuan yang diperbaiki selama migrasi

| Halaman | Temuan |
|---|---|
| `/blog` | Tiga artikel fiktif lengkap dengan tanggal, estimasi waktu baca, dan tautan "Baca selengkapnya" yang tidak menuju ke mana pun — halaman artikelnya memang belum ada. Salah satu ringkasan mengklaim "mengurangi NRW hingga 30%" sebagai studi kasus. Diganti keadaan kosong yang jujur plus daftar topik yang sedang disiapkan |
| `/products/consulting` | Mockup "procurement dashboard" berlabel **LIVE** berisi daftar pengadaan fiktif, dan menyebut **"PT Devetek Digital Indonesia"** — entitas yang tidak ada. Dihapus |
| `/products/erp` | Hero menulis "DEVETEK ERP V2" sementara blok angka menyebut "v4.0". Nomor versi dilepas sampai ada kepastian |
| `/products/pdam-suite` | Klaim "Efisiensi 70%" tanpa sumber. Diganti pernyataan kualitatif |
| `/products/helios` | Angka respons API, throughput, dan uptime dibingkai ulang sebagai target rancangan, bukan hasil pengukuran |
| `/products/pdam-suite/akuntansi` | `STEPS` dirender dua kali sehingga empat kalimat terduplikasi; ringkasan hero kini hanya menampilkan judul tahap |
| Halaman legal | Memakai `text-text-body` (token tidak ada, tidak menghasilkan CSS) dan `prose prose-slate` dari plugin typography yang tidak terpasang. Diganti utilitas `.prose-devetek` |
| `/clients` | Testimoni ditulis ulang secara hardcoded, padahal sudah ada di `TESTIMONIALS` |
| `/products` | Punya salinan katalog `PRODUCTS` sendiri yang kehilangan HELIOS. Disatukan ke `constants.ts` |
| `/contact` | Label form tidak terhubung ke input, tanpa pesan kesalahan, dan tanpa langkah lanjutan pada keadaan sukses |
| Beberapa komponen | Label statistik ditulis dua kali — sekali di `<dt class="sr-only">` dan sekali lagi terlihat di `<dd>`. Diperbaiki jadi daftar deskripsi yang benar |

### Yang masih menunggu keputusan

1. Nomor versi resmi Devetek ERP.
2. Angka pengukuran nyata untuk menggantikan klaim yang sudah dilepas
   (efisiensi PDAM, performa platform HELIOS).
3. Persetujuan pencantuman nama dan foto tim sebelum `TeamSection` dipasang.
4. Artikel blog pertama.


---

## 26. Pemisahan Produk dan Layanan (4 September 2026)

### Masalahnya

Dropdown `Produk` memuat lima item, dua di antaranya bukan produk:

| Item | Sebenarnya |
|---|---|
| Solusi PDAM | Produk — sudah jadi, tinggal dipasang |
| HELIOS (IoT) | Produk |
| Devetek ERP | Produk |
| Software House | **Jasa** — lingkupnya disusun bersama klien |
| Konsultasi & Pengadaan | **Jasa** |

Akibatnya pembaca harus menebak sendiri mana yang bisa dibeli dan mana yang
harus dibicarakan dulu. Halaman `/products` pun ikut rancu: judulnya "Produk
& Layanan", tetapi seluruh isinya diperlakukan sebagai katalog.

### Yang diubah

1. **Menu dipecah menjadi dua dropdown.** Susunan sekarang:
   `Beranda · Produk ▾ · Layanan ▾ · Klien · Tentang · Blog · Kontak` —
   tujuh item, masih dalam batas §10.1.

2. **Pemisahan ikut berlaku di URL.** `/products/software-house` dan
   `/products/consulting` pindah ke `/services/…`, dan lahir hub baru
   `/services`. `public/sitemap.xml` menyesuaikan.

3. **`PRODUCTS` di `constants.ts` dipecah** menjadi `PRODUCTS` (tiga produk)
   dan `SERVICES` (dua layanan). `FOOTER_LINKS` mendapat kolom `layanan`.

4. **Navbar mendukung lebih dari satu dropdown.** State-nya kini menyimpan
   label menu yang terbuka, bukan boolean per menu, sehingga membuka satu
   dropdown otomatis menutup yang lain.

5. **Beranda mendapat section "Tiga cara bekerja bersama kami"**
   (`EngagementSection`, setelah `ProblemSection`): pakai produk kami · kami
   bangunkan · kami adakan dan rawat. Penutupnya menyatakan ketiganya
   dikerjakan tim yang sama — inti argumen integrasi vertikal, dan alasan
   satu vendor lebih mudah dipertanggungjawabkan daripada empat.

6. **`/clients` berhenti menjadi galeri portofolio.** Sepuluh kartu proyek
   dengan filter diganti bukti sektor: nama tiap institusi per sektor
   berikut jumlahnya, dua rujukan lengkap dengan angkanya, dan pernyataan
   terbuka bahwa calon klien bisa dipertemukan dengan pengguna sistem yang
   sejenis. Daftar proyek lintas sektor pindah ke `/services/software-house`,
   tempat keluasan justru menjadi nilai jual alih-alih pengaburan.

### Temuan sampingan

`ClientsSection` di beranda menyalin daftar klien secara manual dan sudah
menyimpang dari `CLIENTS`: memuat "Kementerian PUPR" yang tidak ada di data,
dan menempatkan PT Bakti Air Indonesia di kelompok pemerintahan padahal
perusahaan swasta. Sekarang diturunkan langsung dari `constants.ts`.

### Yang masih menunggu jawaban

1. **Apakah pengadaan, instalasi, dan perawatan perangkat keras benar-benar
   dikerjakan tim internal Devetek?** Halaman `/services/consulting` menulis
   "tim teknis in-house bersertifikat, bukan outsource". Bila akurat, kalimat
   itu layak menjadi klaim utama integrasi vertikal; bila sebagian
   disubkontrakkan, kata-katanya harus dilunakkan supaya tidak runtuh saat
   aanwijzing. Halaman `/services` sengaja ditulis dengan "satu kontrak dan
   satu penanggung jawab" — pernyataan yang tetap benar dalam kedua keadaan.
2. **Nama dua PDAM yang belum tercatat.** `CLIENTS` memuat tujuh PDAM,
   sementara jumlah yang disebut adalah sembilan. Semua angka di situs
   dihitung dari `CLIENTS`, jadi begitu dua nama itu ditambahkan, seluruh
   halaman ikut menyesuaikan sendiri.


---

## 27. Slot gambar (4 September 2026)

### Masalahnya

Setiap gambar dirujuk dengan nama filenya persis — `d-ibs-dashboard.png`,
`helios-dashboard.jpg`, `yashdiq.png`. Mengganti satu screenshot berarti
mengganti nama file agar cocok dengan kode, atau mengubah kodenya. Dua-duanya
menuntut orang yang mengganti foto untuk menyentuh repo, dan itu sumber
kesalahan: sembilan dari sepuluh path foto tim ternyata salah dan tidak ada
yang menyadarinya karena komponennya hanya menampilkan inisial.

### Kenapa bukan endpoint

Situs ini `output: 'export'`. Yang di-deploy ke Firebase Hosting adalah HTML
statis; tidak ada proses yang hidup untuk membaca isi folder ketika halaman
dibuka, sehingga route handler Next tidak bisa dipakai.

Pembacaan folder dipindahkan ke waktu build, dan hasilnya ditulis sebagai
modul. Bagi pengisi konten hasilnya tidak berbeda dari endpoint — taruh file,
gambar berganti — hanya waktunya yang bergeser.

### Bentuknya

| Bagian | Peran |
|---|---|
| `public/images/slots/<slot>/` | Satu folder per posisi gambar. Nama file di dalamnya bebas |
| `scripts/image-slots.config.mjs` | Daftar slot beserta keterangannya |
| `scripts/sync-image-slots.mjs` | Membaca folder, menulis modul. `--watch` untuk dev |
| `src/lib/image-slots.generated.ts` | Hasil — dihasilkan otomatis, jangan diedit |
| `src/lib/images.ts` | `slotImage()` dan `slotImageOrNull()` |
| `public/images/placeholder.svg` | Dipakai bila folder slotnya kosong |

`npm run dev` menjalankan watcher-nya, jadi menaruh file langsung terlihat
tanpa restart. `npm run build` menyinkronkan sekali sebelum build.

Nama file di-`encodeURIComponent` per segmen, sehingga nama seperti
`Foto Kantor (baru).png` tetap menghasilkan URL yang sah.

Bila satu folder berisi lebih dari satu gambar, yang dipakai file pertama
menurut urutan nama dan sinkronisasi memberi peringatan. Ini disengaja: lebih
baik memberitahu daripada diam-diam memilih.

25 slot dibuat pada tahap ini — hero beranda, tiga gambar halaman Solusi
PDAM, foto kantor, sepuluh proyek, dan sepuluh anggota tim.

### Yang belum dikerjakan

Gambar lama di `public/images/projects/`, `products/`, dan `clients/` masih
ada dan kini terduplikasi di dalam folder slot (sekitar 8 MB). File itu tidak
lagi dirujuk kode mana pun, tetapi tidak dihapus karena sebagian tidak punya
salinan di slot. Pembersihannya perlu keputusan pemilik aset.
