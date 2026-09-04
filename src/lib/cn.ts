import { extendTailwindMerge } from 'tailwind-merge'

/**
 * tailwind-merge yang mengenal token khusus project ini.
 *
 * MASALAH YANG DIPERBAIKI — tailwind-merge menebak kelompok sebuah kelas dari
 * namanya. Skala tipografi di sini memakai nama sendiri (`text-body-sm`,
 * `text-h2`, `text-display`, …), dan tailwind-merge tidak mengenalinya sebagai
 * ukuran font — ia menganggapnya WARNA teks. Akibatnya, setiap kali satu
 * pemanggilan `twMerge` memuat ukuran dan warna sekaligus, salah satunya
 * dibuang diam-diam:
 *
 *   twMerge('bg-brand-orange text-white', 'text-body-sm')
 *     → 'bg-brand-orange text-body-sm'      ← `text-white` HILANG
 *
 * Itu persis yang terjadi pada tombol primary: labelnya tidak pernah benar-
 * benar putih, hanya mewarisi warna teks di sekitarnya. Badge kena kebalikannya
 * — `text-body-sm` yang dibuang, sehingga ukurannya ikut induknya.
 *
 * Keduanya tidak terlihat di kode maupun di TypeScript, karena kelasnya memang
 * tertulis benar; yang menghapusnya terjadi saat runtime.
 *
 * Token `max-w-container` punya masalah yang sama terhadap `max-w-*` bawaan.
 *
 * Aturan: JANGAN mengimpor `tailwind-merge` langsung di komponen. Selalu lewat
 * berkas ini, supaya seluruh situs memakai konfigurasi yang sama. Skrip audit
 * memeriksanya.
 */
export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // Skala tipografi dari tailwind.config.ts → theme.extend.fontSize
      'font-size': [
        {
          text: [
            'display',
            'h1',
            'h2',
            'h3',
            'h4',
            'body-lg',
            'body',
            'body-sm',
            'label',
          ],
        },
      ],
      // Lebar container dari theme.extend.maxWidth
      'max-w': [{ 'max-w': ['container'] }],
    },
  },
})
