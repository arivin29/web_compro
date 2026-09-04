import { slotImage, slotImageOrNull } from './images'

export const COMPANY = {
  name: 'PT Comon Cipta Inovasi',
  brand: 'Devetek',
  tagline: 'Let Technology Help You.',
  taglineLong: 'Digitalisasi Tanpa Batas — Dari Sensor Hingga Sistem',
  description:
    'Perusahaan teknologi yang berfokus pada pengembangan solusi perangkat lunak dan sistem sensor untuk digitalisasi sektor publik dan swasta.',
  founded: 2012,
  incorporated: 2018,
  copyright: `© ${new Date().getFullYear()} Devetek. Seluruh hak dilindungi undang-undang.`,
  entities: {
    cci: { name: 'PT Comon Cipta Inovasi', role: 'Holding & Legal Entity', desc: 'Badan hukum utama yang menaungi seluruh lini bisnis Devetek' },
    dmi: { name: 'PT Devetek Marapi Inovasi', role: 'PDAM Partner', desc: 'Unit bisnis khusus solusi air minum dan utilitas publik' },
    devetek: { name: 'Devetek', role: 'Technology Brand', desc: 'Brand produk teknologi yang dikenal oleh klien dan mitra' },
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

/**
 * Menu utama — maksimal tujuh item (blueprint §10.1).
 *
 * Produk dan Layanan sengaja dipisah menjadi dua dropdown. Sebelumnya
 * keduanya dicampur di bawah satu label "Produk", sehingga Software House
 * dan Konsultasi & Pengadaan — yang sebenarnya jasa dengan lingkup dan cara
 * membeli yang sama sekali berbeda — terbaca seolah lisensi siap pakai.
 * Pemisahan ini ikut berlaku di URL: produk di `/products`, jasa di
 * `/services`.
 */
export const NAV_ITEMS = [
  { label: 'Beranda', href: '/' },
  {
    label: 'Produk',
    href: '/products',
    hubLabel: 'Lihat semua produk',
    children: [
      {
        label: 'Solusi PDAM',
        href: '/products/pdam-suite',
        icon: 'Drop',
        desc: 'Billing, aset, dan monitoring dalam satu ekosistem',
      },
      {
        label: 'HELIOS (IoT)',
        href: '/products/helios',
        icon: 'WifiHigh',
        desc: 'Sensor lapangan dan monitoring 24/7',
      },
      {
        label: 'Devetek ERP',
        href: '/products/erp',
        icon: 'GearSix',
        desc: 'Sistem ERP modular untuk operasional enterprise',
      },
    ],
  },
  {
    label: 'Layanan',
    href: '/services',
    hubLabel: 'Lihat semua layanan',
    children: [
      {
        label: 'Software House',
        href: '/services/software-house',
        icon: 'Code',
        desc: 'Web app, mobile app, dan Web GIS yang dibangun khusus',
      },
      {
        label: 'Konsultasi & Pengadaan',
        href: '/services/consulting',
        icon: 'Handshake',
        desc: 'Perangkat, instalasi, dan perawatan setelah terpasang',
      },
    ],
  },
  { label: 'Klien', href: '/clients' },
  { label: 'Tentang', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontak', href: '/contact' },
] as const

export const FOOTER_LINKS = {
  produk: [
    { label: 'Solusi PDAM', href: '/products/pdam-suite' },
    { label: 'HELIOS (IoT)', href: '/products/helios' },
    { label: 'Devetek ERP', href: '/products/erp' },
  ],
  layanan: [
    { label: 'Software House', href: '/services/software-house' },
    { label: 'Konsultasi & Pengadaan', href: '/services/consulting' },
  ],
  perusahaan: [
    { label: 'Tentang Kami', href: '/about' },
    { label: 'Klien', href: '/clients' },
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

/**
 * Tim Devetek.
 *
 * Foto diambil dari folder slot `public/images/slots/tim_<nama>/`, jadi
 * nama filenya tidak lagi perlu cocok dengan apa pun di kode. Slot yang
 * foldernya masih kosong menghasilkan `null`, dan komponen tim menampilkan
 * inisial nama sebagai gantinya — bukan placeholder.
 *
 * Sebelum sistem slot ada, sembilan dari sepuluh path di sini salah
 * ekstensi atau tidak punya file sama sekali. Kesalahan itu tidak terlihat
 * karena komponennya memang hanya menampilkan inisial.
 */
export const TEAM = [
  { name: 'Muhammad Arifin', role: 'Founder', photo: slotImageOrNull('tim_muhammad_arifin') },
  { name: 'Nedya Amrih Prakasa', role: 'Co-Founder', photo: slotImageOrNull('tim_nedya_amrih_prakasa') },
  { name: 'Kusuma Indra Putra', role: 'Co-Founder', photo: slotImageOrNull('tim_kusuma_indra_putra') },
  { name: 'Yasdiq Lubis', role: 'Project Manager', photo: slotImageOrNull('tim_yasdiq_lubis') },
  { name: 'Fahmi Zulhasymi', role: 'Solution Architect', photo: slotImageOrNull('tim_fahmi_zulhasymi') },
  { name: 'Muhammad Ilham C.', role: 'Developer', photo: slotImageOrNull('tim_muhammad_ilham') },
  { name: 'Muhammad Arifan', role: 'Developer', photo: slotImageOrNull('tim_muhammad_arifan') },
  { name: 'Randi Maizul', role: 'Developer', photo: slotImageOrNull('tim_randi_maizul') },
  { name: 'Robinaldi', role: 'Design', photo: slotImageOrNull('tim_robinaldi') },
  { name: 'Rully Culit', role: 'Digital Creative', photo: slotImageOrNull('tim_rully_culit') },
] as const

/**
 * Katalog produk — barang jadi yang sudah berjalan di klien lain dan bisa
 * dipasang lagi. Sumber tunggal untuk halaman /products, dropdown navbar,
 * dan tautan di footer.
 *
 * Jasa TIDAK ada di sini; lihat `SERVICES` di bawah. Sebelumnya keduanya
 * bercampur dalam satu array sehingga "Software House" tampil sebagai
 * produk yang bisa dibeli seperti lisensi.
 *
 * `icon` memakai nama komponen Phosphor; petakan lewat Record dengan
 * fallback, jangan diindeks langsung.
 */
export const PRODUCTS = [
  {
    slug: 'pdam-suite',
    title: 'Solusi PDAM Terintegrasi',
    subtitle: 'D-IBS + D-ASSET + HELIOS',
    description:
      'Billing, baca meter, penagihan, keuangan, hingga dashboard eksekutif dalam satu platform terpadu untuk PDAM.',
    icon: 'Drop',
    href: '/products/pdam-suite',
    badge: 'Unggulan',
  },
  {
    slug: 'helios',
    title: 'DEVETEK HELIOS',
    subtitle: 'Platform IoT',
    description:
      'Pemantauan infrastruktur kritis 24/7 — perangkat sensor di lapangan dan platform cloud untuk membacanya.',
    icon: 'WifiHigh',
    href: '/products/helios',
  },
  {
    slug: 'erp',
    title: 'DEVETEK ERP',
    subtitle: 'ERP Modular',
    description:
      'Sistem ERP modular dengan dynamic approval, arsitektur microservice, dan integrasi payment gateway.',
    icon: 'GearSix',
    href: '/products/erp',
  },
] as const

/**
 * Katalog layanan — dikerjakan per proyek, lingkupnya ditentukan bersama
 * klien, dan harganya tidak bisa dipasang di katalog seperti produk.
 */
export const SERVICES = [
  {
    slug: 'software-house',
    title: 'Software House',
    subtitle: 'Pengembangan Custom',
    description:
      'Web app, mobile app, Web GIS, dan integrasi sistem yang dibangun mengikuti proses bisnis Anda — oleh tim yang juga membangun produk kami sendiri.',
    icon: 'Code',
    href: '/services/software-house',
  },
  {
    slug: 'consulting',
    title: 'Konsultasi & Pengadaan IT',
    subtitle: 'Perangkat sampai Perawatan',
    description:
      'Pengadaan perangkat IT dan elektronik, instalasi di lokasi, serta perawatan berkala untuk sektor pemerintahan maupun swasta.',
    icon: 'Handshake',
    href: '/services/consulting',
  },
] as const

/**
 * Daftar klien dan proyek yang sudah dikerjakan.
 *
 * Sumber tunggal untuk halaman /clients DAN untuk section "Implementasi
 * Nyata" di beranda. Sebelumnya data ini di-hardcode di dalam
 * src/app/clients/page.tsx sehingga tidak bisa dipakai ulang.
 *
 * Gambar tiap proyek diambil dari folder slot masing-masing, sehingga
 * mengganti screenshot cukup dengan menaruh file baru di foldernya —
 * lihat scripts/image-slots.config.mjs.
 *
 * `featured: true` menandai proyek yang tampil di beranda — dipilih satu
 * per sektor (PDAM, Pemerintahan, Swasta) agar cakupan Devetek terlihat,
 * bukan hanya sektor air minum.
 */
export const CLIENT_CATEGORIES = ['Semua', 'PDAM', 'Pemerintahan', 'Swasta'] as const

export type ClientCategory = (typeof CLIENT_CATEGORIES)[number]

export const CLIENTS = [
  { name: 'Perumda Merangin', category: 'PDAM' },
  { name: 'Perumda Tebo', category: 'PDAM' },
  { name: 'Perumda Rengat', category: 'PDAM' },
  { name: 'Perumda Batu Sangkar', category: 'PDAM' },
  { name: 'PDAM Pasaman Barat', category: 'PDAM' },
  { name: 'PDAM Bab Solok', category: 'PDAM' },
  { name: 'PDAM Agam', category: 'PDAM' },
  { name: 'Kementerian Hukum & HAM', category: 'Pemerintahan' },
  { name: 'KKP (Kementerian Kelautan & Perikanan)', category: 'Pemerintahan' },
  { name: 'BPBD', category: 'Pemerintahan' },
  { name: 'Pemkab Bogor', category: 'Pemerintahan' },
  { name: 'PT RPN (Rajawali Parama Nusantara)', category: 'Swasta' },
  { name: 'PT Bakti Air Indonesia', category: 'Swasta' },
  { name: 'PT Derazona Air Service', category: 'Swasta' },
  { name: 'PT Best Agro', category: 'Swasta' },
  { name: 'PT BMT Asia Indonesia', category: 'Swasta' },
] as const

export const PROJECTS = [
  { title: 'Sistem PDAM Terintegrasi (D-IBS)', client: 'Perumda Batu Sangkar & Multiple PDAM', category: 'PDAM', desc: 'Integrated Billing System — billing, baca meter, penagihan, akuntansi SKETAP, dan pelaporan terintegrasi.', tech: ['D-IBS', 'D-ASSET', 'HELIOS'], image: slotImage('proyek_pdam_ibs'), featured: true },
  { title: 'IoT Monitoring & DMA (HELIOS)', client: 'PT Bakti Air Indonesia', category: 'PDAM', desc: 'Deployment 200+ node sensor IoT untuk deteksi kebocoran real-time di 5 DMA.', tech: ['HELIOS', 'IoT', 'Cloud'], image: slotImage('proyek_helios_dma') },
  { title: 'Mobile Baca Meter PDAM', client: 'Multiple PDAM', category: 'PDAM', desc: 'Aplikasi Android baca meter semi-offline dengan GPS tracking, foto meter, dan sinkronisasi data.', tech: ['Mobile', 'GPS', 'Offline-first'], image: slotImage('proyek_baca_meter') },
  { title: 'AMIMS — Aircraft Maintenance', client: 'PT Derazona Air Service', category: 'Swasta', desc: 'Management Part Helicopter: Purchase Request/Order, stock management, life-time part, cycle hour calculation, component tracking.', tech: ['Web App', 'Inventory', 'Reporting'], image: slotImage('proyek_amims'), featured: true },
  { title: 'VMS — Vessel Monitoring System', client: 'Kementerian Kelautan & Perikanan', category: 'Pemerintahan', desc: 'WebGIS tracking kapal perikanan, vessel alert, pemantauan illegal fishing berbasis satelit.', tech: ['WebGIS', 'Satellite', 'Real-time'], image: slotImage('proyek_vms'), featured: true },
  { title: 'SDKP & SalmonTrack Mobile', client: 'Kementerian Kelautan & Perikanan', category: 'Pemerintahan', desc: 'Pelaporan pelanggaran SDKP berbasis masyarakat + mobile tracking posisi kapal dari smartphone.', tech: ['Mobile', 'Chatbot', 'SMS Gateway'], image: slotImage('proyek_sdkp') },
  { title: 'BPBD — Sistem Informasi Kebencanaan', client: 'BPBD (Multi-Kabupaten)', category: 'Pemerintahan', desc: 'Penyajian & penyebarluasan informasi kebencanaan berbasis peta digital interaktif untuk Kutai Timur, Barito Utara, Murung Raya.', tech: ['WebGIS', 'Real-time', 'Dashboard'], image: slotImage('proyek_bpbd') },
  { title: 'OPTIMIS — Perizinan Online', client: 'Pemkab Bogor (DPMPTSP)', category: 'Pemerintahan', desc: 'Badan Perizinan Satu Pintu — registrasi online, tracking izin, disposition, multi-level approval, arsip SK.', tech: ['Web App', 'Workflow', 'E-Gov'], image: slotImage('proyek_optimis') },
  { title: 'ERP Custom Modular', client: 'PT RPN (Rajawali Parama Nusantara)', category: 'Swasta', desc: 'Sistem ERP modular dengan multi-level approval, integrasi payment, purchasing, dan reporting.', tech: ['ERP', 'Microservice', 'React'], image: slotImage('proyek_erp_rpn') },
  { title: 'LAP-APP (Sertifikasi Lab)', client: 'PT BMT Asia Indonesia', category: 'Swasta', desc: 'Manajemen data sample hingga sertifikat — approval dinamik, WebGIS lokasi sample, output sertifikat otomatis.', tech: ['Web App', 'WebGIS', 'Workflow'], image: slotImage('proyek_lap_app') },
] as const

export const FEATURED_PROJECTS = PROJECTS.filter((p) => 'featured' in p && p.featured)

export const TESTIMONIALS = [
  {
    quote:
      'Setelah implementasi Devetek Helios di 5 DMA dengan 200+ node, waktu deteksi kebocoran berkurang drastis dari hitungan hari menjadi hitungan menit.',
    name: 'Tim Teknis',
    role: 'Rekanan Resmi Produk PDAM',
    company: 'PT Bakti Air Indonesia',
    avatar: null,
  },
  {
    quote:
      'Sistem billing D-IBS sangat membantu operasional PDAM kami. Proses penagihan yang dulunya manual dan memakan waktu, kini bisa selesai dalam hitungan jam dengan akurasi tinggi.',
    name: 'Direktur Teknik',
    role: 'Manajemen PDAM',
    company: 'Perumda Merangin',
    avatar: null,
  },
  {
    quote:
      'Devetek bukan hanya vendor, mereka benar-benar menjadi mitra yang memahami tantangan kami. Support pasca-implementasi sangat responsif dan solutif.',
    name: 'Project Manager',
    role: 'IT Division',
    company: 'PT Derazona Air Service',
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
