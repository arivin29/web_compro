# Aturan Konten

Halaman yang rapi secara visual masih bisa buruk kalau isinya berulang.
Kesalahan paling sering terjadi saat menambah section: mengatakan hal yang
sama dua kali dengan bungkus berbeda.

`scripts/page_check.py` mendeteksi sebagian kasus ini otomatis, tapi tidak
semuanya — parafrase lolos dari deteksi. Aturan di bawah tetap harus dibaca.

---

## Satu fakta, satu tempat

| Fakta | Rumahnya | Jangan diulang di |
|---|---|---|
| Angka pencapaian `12+/50+/100+` | `TrustBarSection` | Hero, section lain |
| Deskripsi produk (D-IBS, D-ASSET, HELIOS) | `ProductsSection` | Ekosistem, "implementasi nyata" |
| Alamat kantor | Footer (ringkas) + halaman Contact (lengkap) | Blok CTA, section lokasi tersendiri |
| Klaim "real-time", "tanpa data silo" | `ProblemSection` | Kartu ringkasan di section lain |
| Deskripsi singkat perusahaan | Footer (`COMPANY.description`) | Paragraf pembuka halaman About |

Section lain boleh **menyebut** sebuah produk sebagai referensi — misalnya
tag sistem pada `EcosystemSection` — tapi tidak mendeskripsikannya ulang.

---

## Jebakan yang pernah terjadi di repo ini

Semuanya temuan nyata, bukan contoh karangan:

- **Angka pencapaian tampil dua kali.** Hero memuat `12+/50+/100+` dan
  `TrustBarSection` mengulang persis, hanya berjarak satu section.
- **"Implementasi nyata" berisi produk, bukan proyek.** Section itu
  menampilkan D-IBS/D-ASSET/HELIOS untuk ketiga kalinya, memakai screenshot
  yang sama dengan hero. Bukti implementasi harus memakai proyek
  (`FEATURED_PROJECTS`), bukan mengulang katalog produk.
- **Kartu ringkasan mendaur ulang klaim.** Penutup section ekosistem memuat
  tiga klaim yang seluruhnya sudah disampaikan section sebelumnya.
- **Paragraf menceritakan ulang kartu di sebelahnya.** Di halaman About,
  paragraf ketiga menjelaskan struktur entitas yang sudah tampil sebagai
  kartu tepat di kolom kanan.
- **Halaman menggemakan footer.** Paragraf pembuka About memakai kalimat
  yang sama persis dengan `COMPANY.description` di footer.
- **Eyebrow mengulang breadcrumb.** `eyebrow="Tentang Kami"` di atas
  breadcrumb yang ujungnya juga "Tentang Kami".
- **Frasa yang sama di `<h1>` dan body.** "lebih dari satu dekade" muncul di
  judul hero dan di paragraf pertama.

---

## Daftar periksa sebelum menambah section

1. Fakta ini sudah disampaikan di section lain? Kalau ya, jangan diulang —
   rujuk saja.
2. Gambar ini sudah dipakai di halaman yang sama? Satu screenshot, satu tempat.
3. Section ini menambah alasan baru untuk percaya, atau cuma mengganti bungkus?
4. Eyebrow/label section sudah berbeda dari breadcrumb dan judul di atasnya?
5. Kalau section ini dihapus, ada informasi yang benar-benar hilang?
   Kalau tidak — hapus.

---

## Sumber data

Data yang dipakai lebih dari satu halaman **wajib** ada di
`src/lib/constants.ts`, bukan di-hardcode dalam file halaman.

Sudah tersedia:

| Konstanta | Isi |
|---|---|
| `COMPANY` | Nama, tagline, tahun berdiri, entitas, copyright |
| `CONTACT` | Email, telepon, WhatsApp, alamat, social |
| `NAV_ITEMS`, `FOOTER_LINKS` | Navigasi |
| `STATS` | Angka pencapaian |
| `TIMELINE`, `VALUES`, `VISI`, `MISI`, `TEAM` | Halaman About |
| `PRODUCTS` | Katalog produk |
| `CLIENTS`, `CLIENT_CATEGORIES` | Daftar klien + kategori filter |
| `PROJECTS`, `FEATURED_PROJECTS` | Portofolio; `featured: true` yang tampil di beranda |
| `TESTIMONIALS` | Testimoni |

`FEATURED_PROJECTS` sengaja berisi satu proyek per sektor (PDAM,
Pemerintahan, Swasta) supaya cakupan Devetek terlihat — bukan hanya sektor
air minum.

---

## Penulisan

- Bahasa Indonesia, sapaan "Anda" untuk calon klien, "kami" untuk Devetek.
- Judul section berupa kalimat yang menyatakan sesuatu, bukan label kosong.
  "Sistem yang tidak terhubung membuat operasional berjalan lambat"
  lebih baik daripada "Permasalahan".
- Deskripsi card maksimal tiga baris.
- Badge maksimal dua kata.
- Heading maksimal tiga baris di desktop.
- Paragraf 65–75 karakter per baris — pakai `.measure`.
- Tagline resmi selalu ditulis utuh: **Let Technology Help You.**

### Klaim

- Angka yang bersifat publik harus punya konteks atau sumber
  (`StatCard` punya prop `note`).
- Nama klien hanya dicantumkan bila sudah ada izin publikasi.
- Testimoni tidak memakai nama atau jabatan placeholder di produksi.
- Jangan memakai rating bintang kalau tidak berasal dari sistem penilaian nyata.
