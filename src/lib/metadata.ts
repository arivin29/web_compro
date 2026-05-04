import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devetek.com'

export const seoConfig: Record<string, Metadata> = {
  home: {
    title: 'Devetek — Digitalisasi Tanpa Batas',
    description:
      'Solusi teknologi end-to-end untuk PDAM, Pemerintahan, BUMN & Swasta. Berpengalaman lebih dari satu dekade membangun sistem yang benar-benar bekerja.',
    openGraph: { url: siteUrl },
  },
  about: {
    title: 'Tentang Kami',
    description:
      'Lebih dari satu dekade membangun solusi digital. PT Comon Cipta Inovasi — partner teknologi untuk PDAM, pemerintah, dan swasta.',
    openGraph: { url: `${siteUrl}/about` },
  },
  products: {
    title: 'Produk & Layanan',
    description:
      'Dari sensor di lapangan hingga laporan eksekutif — semua dalam ekosistem Devetek.',
    openGraph: { url: `${siteUrl}/products` },
  },
  pdamSuite: {
    title: 'Solusi PDAM (D-IBS + D-ASSET)',
    description:
      'Sistem PDAM terintegrasi: billing, baca meter, WebGIS aset, hingga dashboard eksekutif dalam satu platform.',
    openGraph: { url: `${siteUrl}/products/pdam-suite` },
  },
  helios: {
    title: 'HELIOS — Platform IoT Monitoring',
    description:
      'Platform IoT end-to-end untuk infrastruktur kritis. Cloud platform + hardware sensor untuk monitoring 24/7.',
    openGraph: { url: `${siteUrl}/products/helios` },
  },
  erp: {
    title: 'ERP Modular',
    description:
      'Sistem ERP fleksibel dengan dynamic approval, microservice architecture, dan integrasi payment gateway.',
    openGraph: { url: `${siteUrl}/products/erp` },
  },
  softwareHouse: {
    title: 'Custom Software Development',
    description:
      'Web app, mobile app, WebGIS, dan solusi digital custom untuk kebutuhan spesifik bisnis Anda.',
    openGraph: { url: `${siteUrl}/products/software-house` },
  },
  consulting: {
    title: 'Konsultasi & Pengadaan IT',
    description:
      'IT consulting, pengadaan barang, maintenance, dan instalasi untuk sektor publik & swasta.',
    openGraph: { url: `${siteUrl}/products/consulting` },
  },
  clients: {
    title: 'Portfolio & Klien',
    description:
      'Dipercaya oleh PDAM, kementerian, dan perusahaan swasta di seluruh Indonesia.',
    openGraph: { url: `${siteUrl}/clients` },
  },
  blog: {
    title: 'Blog & Insight',
    description:
      'Artikel, update, dan studi kasus seputar teknologi, digitalisasi, dan solusi industri.',
    openGraph: { url: `${siteUrl}/blog` },
  },
  contact: {
    title: 'Kontak',
    description:
      'Hubungi tim Devetek untuk konsultasi gratis. WhatsApp, email, atau kunjungi kantor kami.',
    openGraph: { url: `${siteUrl}/contact` },
  },
}
