export const COMPANY = {
  name: 'PT Comon Cipta Inovasi',
  brand: 'Devetek',
  tagline: 'Digitalisasi Tanpa Batas — Dari Sensor Hingga Sistem',
  description:
    'Perusahaan teknologi yang berfokus pada pengembangan solusi perangkat lunak dan sistem sensor untuk digitalisasi sektor publik dan swasta.',
  founded: 2012,
  incorporated: 2018,
  copyright: `© ${new Date().getFullYear()} PT Comon Cipta Inovasi. Seluruh hak dilindungi undang-undang.`,
  entities: {
    cci: { name: 'PT Comon Cipta Inovasi', role: 'Induk perusahaan (lisensi)' },
    dmi: { name: 'PT Devetek Marapi Inovasi', role: 'Rekanan fokus pasar PDAM' },
    devetek: { name: 'Devetek', role: 'Brand utama' },
  },
} as const

export const CONTACT = {
  email: {
    general: 'info@devetek.com',
    marketing: 'marketing@devetek.com',
  },
  phone: '0856 230 2229',
  whatsapp: {
    number: '628562302229',
    display: '+62 856-2302-229',
    url: 'https://wa.me/628562302229',
    urlWithText:
      'https://wa.me/628562302229?text=Halo%20Devetek%2C%20saya%20tertarik%20dengan%20layanan%20Anda.',
  },
  address: {
    office: {
      label: 'Kantor',
      full: 'Komplek Meranti No. 3, RT.01/RW.02, Pasir Jaya, Bogor Barat, Kota Bogor, Jawa Barat 16119',
    },
  },
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#',
  },
} as const

export const NAV_ITEMS = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/about' },
  {
    label: 'Produk',
    href: '/products',
    children: [
      { label: 'Solusi PDAM', href: '/products/pdam-suite', icon: 'Droplets' },
      { label: 'HELIOS (IoT)', href: '/products/helios', icon: 'Satellite' },
      { label: 'ERP', href: '/products/erp', icon: 'Settings' },
      { label: 'Software House', href: '/products/software-house', icon: 'Code' },
      { label: 'Konsultasi', href: '/products/consulting', icon: 'Handshake' },
    ],
  },
  { label: 'Portfolio & Klien', href: '/clients' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontak', href: '/contact' },
] as const

export const FOOTER_LINKS = {
  produk: [
    { label: 'Solusi PDAM', href: '/products/pdam-suite' },
    { label: 'ERP Custom', href: '/products/erp' },
    { label: 'HELIOS', href: '/products/helios' },
    { label: 'Software House', href: '/products/software-house' },
    { label: 'Konsultasi', href: '/products/consulting' },
  ],
  perusahaan: [
    { label: 'Tentang Kami', href: '/about' },
    { label: 'Portfolio & Klien', href: '/clients' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontak', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Syarat & Ketentuan', href: '/terms' },
  ],
} as const

// ⚠️ Angka perlu verifikasi sebelum launch
export const STATS = [
  { value: 12, suffix: '+', label: 'Tahun', sublabel: 'Pengalaman' },
  { value: 50, suffix: '+', label: 'Klien', sublabel: 'Terpercaya' },
  { value: 100, suffix: '+', label: 'Proyek', sublabel: 'Diselesaikan' },
] as const

export const TIMELINE = [
  { year: 2012, title: 'Devetek Didirikan', description: 'Berdiri sebagai startup teknologi' },
  { year: 2018, title: 'PT CCI Resmi', description: 'Resmi menjadi PT Comon Cipta Inovasi' },
  { year: 2019, title: 'Fokus PDAM', description: 'Fokus pada SaaS & IoT untuk sektor PDAM' },
  { year: 2023, title: 'Ekspansi Layanan', description: 'Ekspansi layanan ERP & Konsultasi' },
  { year: 2026, title: 'Milestone', description: '50+ klien aktif, 100+ proyek selesai' },
] as const

export const VALUES = [
  { name: 'Integritas', description: 'Bekerja dengan kejujuran, transparansi, dan tanggung jawab penuh', icon: 'Shield' },
  { name: 'Inovasi', description: 'Selalu mencari cara baru dan solusi kreatif untuk setiap tantangan', icon: 'Lightbulb' },
  { name: 'Kolaborasi', description: 'Tumbuh bersama klien dan mitra sebagai satu tim', icon: 'Users' },
  { name: 'Komitmen', description: 'Dedikasi penuh terhadap kualitas dan kepuasan pelanggan', icon: 'Target' },
  { name: 'Kompetensi', description: 'Didukung tim ahli yang berpengalaman dan terus berkembang', icon: 'Award' },
] as const

export const TEAM = [
  { name: 'Muhammad Arifin', role: 'Founder', photo: '/images/team/arifin.jpg' },
  { name: 'Nedya Amrih Prakasa', role: 'Co-Founder', photo: '/images/team/raka.jpg' },
  { name: 'Kusuma Indra Putra', role: 'Co-Founder', photo: '/images/team/kusuma.jpg' },
  { name: 'Yasdiq Lubis', role: 'Project Manager', photo: '/images/team/yasdiq.jpg' },
  { name: 'Fahmi Zulhasymi', role: 'Solution Architect', photo: '/images/team/fahmi.jpg' },
  { name: 'Muhammad Ilham C.', role: 'Developer', photo: '/images/team/ilham.jpg' },
  { name: 'Muhammad Arifan', role: 'Developer', photo: '/images/team/arifan.jpg' },
  { name: 'Randi Maizul', role: 'Developer', photo: '/images/team/randi.jpg' },
  { name: 'Robinaldi', role: 'Design', photo: '/images/team/robinaldi.jpg' },
  { name: 'Rully Culit', role: 'Digital Creative', photo: '/images/team/rully.jpg' },
] as const

export const PRODUCTS = [
  {
    slug: 'pdam-suite',
    title: 'Solusi PDAM',
    subtitle: 'D-IBS + D-ASSET + HELIOS',
    description:
      'Billing, baca meter, penagihan, keuangan, HR hingga dashboard eksekutif — dalam satu platform terpadu untuk PDAM.',
    icon: 'Droplets',
    href: '/products/pdam-suite',
    badge: 'Unggulan',
  },
  {
    slug: 'erp',
    title: 'DEVETEK ERP',
    subtitle: 'ERP Modular',
    description:
      'Sistem ERP modular dengan dynamic approval, microservice architecture, dan integrasi payment gateway.',
    icon: 'Settings',
    href: '/products/erp',
  },
  {
    slug: 'software-house',
    title: 'Custom Software',
    subtitle: 'Development',
    description:
      'Web app, mobile app, Web GIS, dan solusi digital custom untuk kebutuhan spesifik bisnis Anda.',
    icon: 'Code',
    href: '/products/software-house',
  },
  {
    slug: 'consulting',
    title: 'Konsultasi & Pengadaan',
    subtitle: 'IT Services',
    description:
      'IT consulting, pengadaan barang IT & elektronik, maintenance, dan instalasi untuk sektor publik & swasta.',
    icon: 'Handshake',
    href: '/products/consulting',
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      'Setelah implementasi Devetek Helios di 5 DMA dengan 200+ node, waktu deteksi kebocoran berkurang drastis dari hitungan hari menjadi hitungan menit.',
    name: 'Tim Teknis',
    role: 'Rekanan Resmi Produk PDAM',
    company: 'PT Bakti Air Indonesia',
    avatar: null,
  },
] as const

export const VISI =
  'Menjadi perusahaan teknologi terdepan yang mendorong transformasi digital di Indonesia melalui solusi inovatif dan terpercaya.'

export const MISI = [
  'Menyediakan solusi teknologi terintegrasi yang menyelesaikan masalah nyata',
  'Mendukung digitalisasi sektor publik dan swasta secara menyeluruh',
  'Memberikan layanan berkualitas tinggi dengan pendekatan kolaboratif dan berkelanjutan',
] as const
