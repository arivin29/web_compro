# Cara mengganti foto di website

Tiap folder di sini adalah **satu posisi gambar** di website.

1. Buka folder posisi yang ingin diganti.
2. Hapus file yang ada di dalamnya.
3. Taruh file baru. **Namanya bebas** — boleh pakai spasi, huruf besar,
   nama hasil screenshot, apa pun.
4. Selesai. Tidak ada yang perlu diubah di kode.

Format yang dikenali: `.png` `.jpg` `.jpeg` `.webp` `.avif` `.gif` `.svg`

## Kalau foldernya dikosongkan

Website menampilkan gambar placeholder bertuliskan "Foto belum diunggah".
Halaman tetap normal — hanya fotonya yang belum ada.

Khusus folder `tim_*`, yang muncul bukan placeholder melainkan inisial
nama anggota tim.

## Kalau isinya lebih dari satu file

Yang dipakai file pertama menurut urutan nama. Sisanya diabaikan, dan
akan muncul peringatan saat `npm run dev` atau `npm run build` dijalankan.

## Kapan perubahan terlihat

- Saat `npm run dev` berjalan: langsung, tanpa restart.
- Untuk versi yang di-online-kan: saat `npm run build` berikutnya.

Website ini di-export jadi HTML statis, jadi isi folder dibaca sekali saat
build — bukan setiap kali halaman dibuka. Ini alasan perubahan foto baru
tampil di situs online setelah build ulang.

## Menambah posisi gambar baru

Daftar posisi ada di `scripts/image-slots.config.mjs`. Tambahkan entri di
sana, jalankan `npm run images:sync`, dan foldernya akan dibuatkan.
