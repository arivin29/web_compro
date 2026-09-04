import type { Metadata } from 'next'

/**
 * Domain kanonis situs ini.
 *
 * PENTING: nilainya harus domain yang benar-benar dipakai publik, bukan
 * alamat bawaan Firebase. Situs ini dilayani di dua host sekaligus —
 * devetek.com dan devetek-compro.web.app — dan sebelumnya seluruh canonical,
 * og:url, sitemap, serta JSON-LD menunjuk ke yang kedua. Akibatnya mesin
 * pencari diberi tahu bahwa halaman di devetek.com hanyalah salinan.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devetek.com'

/** Gambar pratinjau tautan — 1200x630, dihasilkan scripts/make-social-assets.py */
export const ogImage = {
  url: '/images/og-cover.png',
  width: 1200,
  height: 630,
  alt: 'Devetek — Let Technology Help You.',
}

type PageSeo = { path: string; title: string; description: string }

/**
 * Sumber tunggal SEO per halaman.
 *
 * `path` dipakai untuk MENURUNKAN canonical dan og:url sekaligus, sehingga
 * keduanya tidak mungkin menyimpang. Sebelumnya hanya og:url yang diisi per
 * halaman, sedangkan canonical diwarisi dari root layout — nilainya '/' —
 * sehingga SETIAP halaman mengaku sebagai duplikat beranda.
 */
const PAGES: Record<string, PageSeo> = {
  home: {
    path: '/',
    title: 'Devetek — Digitalisasi Tanpa Batas',
    description:
      'Solusi teknologi end-to-end untuk PDAM, Pemerintahan, BUMN & Swasta. Berpengalaman lebih dari satu dekade membangun sistem yang benar-benar bekerja.',
  },
  about: {
    path: '/about',
    title: 'Tentang Kami',
    description:
      'Lebih dari satu dekade membangun solusi digital. Devetek — partner teknologi untuk PDAM, pemerintah, dan swasta.',
  },
  products: {
    path: '/products',
    title: 'Produk',
    description:
      'Sistem yang sudah berjalan harian di PDAM dan perusahaan — solusi PDAM terintegrasi, platform IoT HELIOS, dan ERP modular.',
  },
  services: {
    path: '/services',
    title: 'Layanan',
    description:
      'Software house dan pengadaan IT dalam satu tim: kami bangun sistemnya, kami adakan perangkatnya, kami rawat setelah terpasang.',
  },
  pdamSuite: {
    path: '/products/pdam-suite',
    title: 'Solusi PDAM (D-IBS + D-ASSET)',
    description:
      'Sistem PDAM terintegrasi: billing, baca meter, WebGIS aset, hingga dashboard eksekutif dalam satu platform.',
  },
  pdamAkuntansi: {
    path: '/products/pdam-suite/akuntansi',
    title: 'Akuntansi & Keuangan PDAM — Standar SAK EP',
    description:
      'Modul akuntansi PDAM berstandar SAK EP: transaksi mengalir sendiri dari billing, kas, dan gudang, diperiksa sebelum masuk buku besar, dan menghasilkan delapan laporan keuangan lengkap dengan PDF dan Excel.',
  },
  helios: {
    path: '/products/helios',
    title: 'HELIOS — Platform IoT Monitoring',
    description:
      'Platform IoT end-to-end untuk infrastruktur kritis. Cloud platform + hardware sensor untuk monitoring 24/7.',
  },
  erp: {
    path: '/products/erp',
    title: 'ERP Modular',
    description:
      'Sistem ERP fleksibel dengan dynamic approval, microservice architecture, dan integrasi payment gateway.',
  },
  softwareHouse: {
    path: '/services/software-house',
    title: 'Software House',
    description:
      'Web app, mobile app, WebGIS, dan integrasi sistem yang dibangun mengikuti proses bisnis Anda.',
  },
  consulting: {
    path: '/services/consulting',
    title: 'Konsultasi & Pengadaan IT',
    description:
      'IT consulting, pengadaan barang, maintenance, dan instalasi untuk sektor publik & swasta.',
  },
  clients: {
    path: '/clients',
    title: 'Klien',
    description:
      'PDAM, kementerian, dan perusahaan swasta yang sistemnya kami bangun dan dampingi — disebut dengan nama.',
  },
  blog: {
    path: '/blog',
    title: 'Blog & Insight',
    description:
      'Artikel, update, dan studi kasus seputar teknologi, digitalisasi, dan solusi industri.',
  },
  contact: {
    path: '/contact',
    title: 'Kontak',
    description:
      'Hubungi tim Devetek untuk konsultasi gratis. WhatsApp, email, atau kunjungi kantor kami.',
  },
  privacy: {
    path: '/privacy-policy',
    title: 'Kebijakan Privasi',
    description:
      'Bagaimana Devetek mengumpulkan, memakai, dan melindungi data yang Anda kirimkan lewat situs ini.',
  },
  terms: {
    path: '/terms',
    title: 'Syarat & Ketentuan',
    description: 'Ketentuan penggunaan situs dan layanan Devetek.',
  },
}

export const seoConfig: Record<string, Metadata> = Object.fromEntries(
  Object.entries(PAGES).map(([key, p]) => [
    key,
    {
      title: p.title,
      description: p.description,
      alternates: { canonical: p.path },
      openGraph: { url: p.path, title: p.title, description: p.description },
      twitter: { title: p.title, description: p.description },
    } satisfies Metadata,
  ]),
)
