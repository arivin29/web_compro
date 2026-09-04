---
name: devetek-ui
description: "Design system dan playbook UI/UX website company profile Devetek (Next.js + Tailwind). WAJIB dipakai sebelum membuat, memigrasi, atau mengubah halaman, section, card, tombol, badge, form, ikon, animasi, atau warna apa pun di repo ini. Berisi prosedur langkah demi langkah, template per jenis halaman, API komponen di src/components/ui, pola interaksi (dropdown, drawer, accordion, filter, form), aturan token/kontras/radius, dan skrip audit otomatis."
---

# Devetek UI

Playbook untuk mengerjakan halaman di repo ini. Blueprint desain lengkap ada
di `docs/handoff/style-reconstruction-blueprint.md`; dokumen ini versi
kerjanya.

**Aturan nomor satu: jangan menyusun ulang struktur yang sudah ada.**
Sebelum menulis `div` + border + padding sendiri, cek katalog komponen.
Kalau sudah ada, pakai. Kalau belum ada dan akan dipakai lebih dari sekali,
tambahkan ke `src/components/ui/` lalu daftarkan di `index.ts` — bukan
menaruhnya lokal di satu halaman.

---

## Prosedur

### A. Membuat halaman baru

1. Buka `references/page-templates.md`, ambil arketipe terdekat
   (detail produk · daftar/portofolio · kontak · legal · hub).
2. Salin kerangkanya. Ganti isinya saja.
3. Data yang dipakai lebih dari satu halaman ditaruh di `src/lib/constants.ts`,
   bukan di dalam file halaman.
4. Cek `references/content-rules.md` sebelum menambah section.
5. Jalankan audit (langkah D).

### B. Memigrasi halaman lama

Halaman yang belum dimigrasi masih memakai Lucide, `max-w-7xl mx-auto px-6`,
dan markup section manual. Urutan kerjanya:

1. **Baca dulu seluruh halaman.** Catat section apa saja yang ada dan apa
   maksud masing-masing.
2. **Buang hero lokal**, ganti `<PageHero>` dari `@/components/ui` dengan
   breadcrumb.
3. **Bungkus tiap section** dengan `<Section tone=…>`; hapus
   `max-w-7xl mx-auto px-6`, wrapper `bg-*` manual, dan pola dot inline.
4. **Ganti heading manual** dengan `<SectionHeading>`; turunkan ke `as="h3"`
   untuk sub-bagian agar urutan heading tidak melompat.
5. **Ganti card manual** dengan `Card` / `FeatureCard` / `ProjectCard` /
   `StatCard` / `TestimonialCard`.
6. **Ganti ikon Lucide** dengan Phosphor.
7. **Ganti `ScrollReveal`** dengan `Reveal`.
8. **Atur ritme background** (lihat di bawah).
9. **Audit isi**, bukan cuma tampilan — lihat `references/content-rules.md`.
   Migrasi adalah saat terbaik membuang konten berulang.
10. Jalankan audit (langkah D).

### C. Mengubah komponen bersama

Perubahan di `src/components/ui/` mempengaruhi seluruh situs. Wajib:

1. Cek pemakaian dulu: `grep -rn "NamaKomponen" src/`.
2. Tambah prop baru dengan default yang mempertahankan perilaku lama.
3. Perbarui `references/component-api.md` di skill ini.
4. Jalankan audit penuh, bukan `--fast`.

### D. Audit — wajib sebelum menyatakan selesai

```bash
bash .claude/skills/devetek-ui/scripts/audit.sh
```

Memeriksa: sisa markup lama, hex mentah, badge/tombol pill, konflik lebar
container, pelanggaran kontras, `tsc`, `lint`, `build`, lalu setiap route
yang ter-render (jumlah `<h1>`, urutan heading, `alt` gambar, gambar ganda,
kalimat yang berulang di dalam konten).

Tidak butuh persiapan apa pun. Project ini memakai `output: 'export'`, jadi
`next build` menghasilkan HTML statis di `out/` dan pemeriksaan render
membacanya langsung — tanpa menyalakan server.

- `--fast` melewati build saat iterasi cepat. Pemeriksaan render hanya ikut
  berjalan bila kebetulan ada dev server.
- `--url http://localhost:3000` bila dev server memakai port lain.
- Bila dev server sedang jalan, build dilewati dan render diperiksa lewat
  URL — `next build` dan `next dev` berbagi direktori `.next` dan akan saling
  menimpa. Untuk mengaudit build juga, hentikan dev server dulu.

Untuk satu halaman saja — menerima URL maupun file hasil build:

```bash
python3 .claude/skills/devetek-ui/scripts/page_check.py http://localhost:3000/about
python3 .claude/skills/devetek-ui/scripts/page_check.py out/about.html
```

Exit code 0 berarti bersih. **Jangan menyatakan pekerjaan selesai selama
audit masih merah pada halaman yang sedang dikerjakan.**

---

## Kerangka halaman

```tsx
<PageHero eyebrow="…" title="…" description="…" breadcrumb={[…]} />
<Section tone="white">…</Section>
<Section tone="soft">…</Section>
<Section tone="dark" pattern="grid">…</Section>
<CTASection />
```

Wajib:

1. **Tepat satu `<PageHero>`** di atas — beranda pengecualian, punya
   `HeroSection` sendiri yang lebih tinggi.
2. Isi dibungkus `<Section>`, bukan `<section>` mentah.
3. **`<CTASection />` sebagai penutup** — kecuali halaman kontak (CTA-nya
   form itu sendiri) dan halaman legal (tidak pantas menjual di sana).
4. Satu `<h1>` per halaman, sudah dirender `PageHero`.

### Ritme background

Selang-seling supaya halaman punya irama:

```
dark (hero) → white → soft → white → dark → white → soft → dark (CTA)
```

Jangan dua `soft` berturut-turut, jangan seluruh halaman `white`.

### Lebar container

Pakai prop `width` pada `Section` (`default` · `narrow` · `prose`), **bukan**
`containerClassName="max-w-…"`. Pilihannya terbatas dan bernama, sehingga
lebar halaman tidak berubah diam-diam lewat angka acak di tengah markup.

### tailwind-merge

Impor `twMerge` dari **`@/lib/cn`**, jangan langsung dari `tailwind-merge`.

tailwind-merge menebak kelompok sebuah kelas dari namanya, dan skala
tipografi di sini memakai nama sendiri (`text-body-sm`, `text-h2`, …) yang
ia kira warna teks. Tanpa konfigurasi, satu pemanggilan yang memuat ukuran
dan warna sekaligus akan kehilangan salah satunya — diam-diam, saat runtime:

```
twMerge('bg-brand-orange text-white', 'text-body-sm')
  → 'bg-brand-orange text-body-sm'      ← text-white hilang
```

Itu yang membuat label tombol primary tidak pernah benar-benar putih sampai
4 September 2026. Audit memeriksa impor langsung.

---

## Token

Didefinisikan di `tailwind.config.ts`. **Jangan menulis hex baru di komponen.**
Butuh warna yang belum ada? Tambahkan tokennya dulu.

### Warna merek — diekstrak dari logo master

| Token | Hex | Untuk apa |
|---|---|---|
| `brand-orange` | `#F0701F` | CTA utama, highlight, active state |
| `brand-orange-ink` | `#A8490B` | **Teks/label oranye di permukaan terang** (5.80:1) |
| `brand-orange-pale` | `#FDF4EC` | Permukaan oranye pucat yang **opak** |
| `brand-red` | `#E5301E` | Aksen dampak, dekorasi. Bukan warna aksi |
| `brand-blue` | `#4479B3` | Fill, ikon, dekorasi |
| `brand-blue-strong` | `#356399` | **Teks & link di permukaan terang** |
| `brand-blue-soft` | `#7FB0E6` | **Teks & link di permukaan gelap** |
| `brand-navy` | `#101A28` | Header, footer, hero, section gelap |
| `brand-navy-soft` | `#17273A` | Panel di atas permukaan navy |

Permukaan: `surface-page` `surface-white` `surface-soft` `surface-dark` `surface-dark-soft`
Teks: `text-primary` `text-secondary` `text-muted` `text-inverse` `text-inverse-muted`
Status: `state-success` `state-warning` `state-error` `state-info` (+ varian `-soft`)

Rasio yang disarankan: **70% netral, 20% biru/navy, 10% oranye/merah.**

### ⚠️ Aturan kontras

Angka di bawah dari perhitungan WCAG, bukan perkiraan.

**Setiap permukaan `bg-brand-orange` yang memuat teks memakai putih bersih** —
keputusan merek (3 Sep 2026, diperluas ke seluruh permukaan 4 Sep 2026).
Kontrasnya 2.98:1 dan tidak memenuhi AA, sehingga berlaku batasan:

- Jangan memakai `size="sm"` untuk aksi penting.
- Jangan menurunkan bobot dari `font-semibold`.
- Jangan memakai oranye + putih untuk **teks biasa** di luar tombol.
  Di permukaan terang pakai `brand-blue-strong`; oranye di atas navy sudah
  aman (5.87:1).
- Bila AA perlu dipulihkan, cukup gelapkan permukaan tombol ke `#B9540E`
  (putih = 4.84:1). Tidak ada perubahan lain yang dibutuhkan.
- **Teks oranye di atas permukaan terang** pakai `brand-orange-ink`, bukan
  `brand-orange` — yang terakhir hanya 2.98:1 di atas putih. `brand-orange`
  tetap benar untuk ikon, garis aksen, dan angka dekoratif.
- Latar bernada pakai token opak (`brand-orange-pale`, `accent-light`), bukan
  `bg-brand-orange/[0.04]`. Warna transparan membuat elemen dekoratif di
  belakang kartu — garis penghubung, pola titik — terlihat menembusnya.

Sisanya mengikat:

- Link biru di permukaan terang pakai `brand-blue-strong`, bukan `brand-blue`
  (`brand-blue` di atas `surface-soft` hanya 4.06:1).
- Di permukaan gelap pakai `brand-blue-soft`.
- Teks putih di atas `brand-red` hanya 4.4:1 — pakai `brand-red-strong`.
- Nomor tahap `ProcessCard` juga putih di atas oranye. Ukurannya 11px,
  jadi ini titik paling rawan dari aturan di atas — jangan mengecilkannya
  lagi, dan pertahankan `font-bold`.

Kombinasi warna baru wajib dihitung ulang, bukan dikira-kira.

### Tipografi

| Peran | Font | Class |
|---|---|---|
| Display & heading | **Outfit** | `font-heading` |
| Body & UI | **Inter** | `font-body` |
| Data teknis | **JetBrains Mono** | `font-mono` |

Skala responsif memakai `clamp()` — tidak perlu breakpoint manual:
`text-display` `text-h1` `text-h2` `text-h3` `text-h4`
`text-body-lg` `text-body` `text-body-sm` `text-label`

Utilitas: `.measure` (68ch) · `.measure-tight` (54ch) · `.label-section`
· `.tabular` (angka) · `.tap-target` (44×44px) · `.link-inline`

### Radius

Bentuk Devetek tegas dan geometris. **Radius normal maksimal 8px.**

| Class | Nilai | Untuk |
|---|---|---|
| `rounded-sm` | 4px | Badge, tag, filter, chip |
| `rounded-md` | 6px | Button, input, card, widget (default) |
| `rounded-lg` | 8px | Panel besar, dropdown, hero card |
| `rounded-full` | ∞ | **Hanya** avatar, dot status, tombol ikon lingkaran |

Skala Tailwind sudah di-clamp: `rounded-xl`/`2xl`/`3xl` semuanya jadi 8px,
jadi kode lama otomatis ikut sistem.

**Dilarang:** button pill, badge pill, dan card unggulan yang dibedakan lewat
radius lebih besar — bedakan lewat `tone`, `accent`, atau komposisi.

### Shadow

`shadow-card` → `shadow-card-hover` (hover) · `shadow-dropdown` · `shadow-cta`.
Jangan memberi shadow kuat ke semua card; shadow membentuk hierarki.

---

## Katalog komponen

Semua dari `@/components/ui`. Props lengkap: `references/component-api.md`.

**Struktur** — `Container` · `Section` · `SectionHeading` · `PageHero` · `CTABand`
**Aksi** — `Button` (`primary`/`secondary`/`ghost`/`whatsapp`) · `Badge`
**Card** — `Card` · `FeatureCard` · `ProjectCard` · `ProcessCard` · `StatCard` · `TestimonialCard` · `ContactRow`
**Form** — `Field` · `Input` · `Textarea`
**Identitas** — `Logo` · `ForwardLayers` · `BrowserFrame`
**Motion** — `Reveal` · `Counter` · `PageTransition`

Maksimal **satu tombol `primary`** per kelompok aksi.
Maksimal **satu `ForwardLayers` dominan** per viewport.

---

## Gambar

**Jangan pernah menulis path gambar konten langsung** (`src="/images/..."`).
Semua screenshot, foto, dan ilustrasi diambil lewat slot:

```tsx
import { slotImage, slotImageOrNull } from '@/lib/images'

<Image src={slotImage('pdam_ibs_dashboard')} alt="…" fill />
```

Satu slot = satu posisi gambar = satu folder di
`public/images/slots/<slot>/`. Pengisi konten menaruh file dengan nama
bebas ke folder itu; `scripts/sync-image-slots.mjs` membaca isinya saat
dev dan saat build, lalu menulis `src/lib/image-slots.generated.ts`.
File itu **dihasilkan otomatis — jangan diedit tangan.**

- Folder kosong → `slotImage` mengembalikan `/images/placeholder.svg`.
- `slotImageOrNull` mengembalikan `null`, untuk tempat yang punya
  pengganti lebih baik daripada placeholder (mis. inisial nama di foto tim).
- Nama slot bertipe union, jadi salah ketik tertangkap `tsc`.

Menambah posisi gambar baru: tambahkan entri di
`scripts/image-slots.config.mjs`, jalankan `npm run images:sync`.

Pengecualian yang tetap memakai path langsung: logo dan favicon
(`public/images/logo/`, `public/images/devetek-icon.png`) — itu aset
identitas, bukan konten yang diganti-ganti.

---

## Struktur informasi

Produk dan layanan **tidak boleh dicampur** dalam satu daftar, satu menu,
atau satu halaman. Keduanya dibeli dengan cara yang berbeda:

| | Produk | Layanan |
|---|---|---|
| Sumber data | `PRODUCTS` | `SERVICES` |
| Route | `/products/…` | `/services/…` |
| Sifat | Sudah jadi, tinggal disesuaikan | Lingkupnya disusun bersama klien |
| Isi | Solusi PDAM · HELIOS · ERP | Software House · Konsultasi & Pengadaan |

Menu utama memakai dua dropdown terpisah (`Produk ▾`, `Layanan ▾`) yang
keduanya berasal dari `NAV_ITEMS`. Menambah dropdown ketiga tidak perlu
mengubah `Navbar.tsx` — cukup tambahkan entri ber-`children` beserta
`hubLabel`-nya.

Daftar proyek lintas sektor tinggal di `/services/software-house`, bukan di
`/clients`. Halaman `/clients` berisi bukti sektor — nama institusi, jumlah
per sektor, dan rujukan yang bisa dihubungi — bukan galeri portofolio.
Alasannya di blueprint §26.

---

## Ikon dan interaksi

Satu keluarga ikon: **Phosphor**, ukuran 16/20/24/32. Server Component
mengimpor dari `@phosphor-icons/react/dist/ssr`.

Pola dropdown, drawer mobile, accordion/FAQ, filter kategori, validasi form,
dan animasi: `references/interaction-patterns.md`. Salin polanya — terutama
bagian keyboard dan ARIA-nya.

Motion yang diizinkan: fade-up 16–24px selama 400–600ms, stagger 60–100ms,
hover card naik maksimal 4px, arrow bergeser maksimal 4px, counter maksimal
1.8 detik. Dihindari: parallax berat, animasi loop, glow berkedip, scale
berlebihan, animasi yang menunda akses ke konten.

`prefers-reduced-motion` sudah ditangani global di `globals.css` dan di dalam
`Reveal`/`Counter`/`PageTransition`. Animasi Framer Motion baru **wajib**
memanggil `useReducedMotion()`.

---

## Aksesibilitas

- Tidak ada horizontal scroll pada viewport 320px.
- Target sentuh minimum 44×44px (`.tap-target`).
- Kontras mengikuti aturan di atas.
- Focus indicator selalu terlihat — sudah global, jangan `outline: none`.
- Urutan heading tidak melompat, satu `h1` per halaman.
- Gambar bermakna punya `alt` deskriptif; gambar dekoratif `alt=""` + `aria-hidden`.
- Informasi tidak disampaikan hanya lewat warna.
- Navbar, dropdown, drawer, accordion, filter, dan form bisa dioperasikan
  dengan keyboard.
- Layout tetap terbaca pada zoom browser 200%.

---

## Status migrasi

**Seluruh halaman sudah memakai design system.** Tidak ada lagi pengecualian
di `LEGACY_OK` pada `scripts/audit.sh`, dan seluruh shim kompatibilitas sudah
dihapus: `.glass-card`, `ScrollReveal.tsx`, serta alias warna/gradient/shadow
lama di `tailwind.config.ts`.

Artinya setiap pelanggaran yang ditemukan audit sekarang adalah pelanggaran
sungguhan — jangan menambahkan pengecualian baru untuk meloloskannya.

Dua hal yang masih menunggu keputusan, bukan pekerjaan teknis:

- `src/app/about/components/TeamSection.tsx` sudah dimigrasi tetapi **belum
  dipasang**. Pencantuman nama dan foto tim perlu persetujuan tiap anggota;
  lima dari sepuluh anggota belum punya file foto dan memakai inisial.
- `/blog` belum punya artikel. Halamannya menampilkan keadaan kosong yang
  jujur dan daftar topik yang sedang disiapkan — bukan artikel fiktif.

## Berkas rujukan

| File | Isi |
|---|---|
| `references/page-templates.md` | Lima kerangka halaman siap salin |
| `references/component-api.md` | Props lengkap seluruh komponen |
| `references/interaction-patterns.md` | Dropdown, drawer, accordion, filter, form, motion, ikon |
| `references/content-rules.md` | Aturan anti-duplikasi konten dan penulisan |
| `scripts/audit.sh` | Audit Definition of Done otomatis |
| `scripts/page_check.py` | Pemeriksa satu halaman ter-render |
