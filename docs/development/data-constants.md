# Data Constants Spec

> Dokumen ini berisi semua data yang masuk ke `src/lib/constants.ts` dan `src/lib/metadata.ts`.
> Developer tinggal copy-paste struktur ini ke TypeScript.
> Source of truth: `docs/handoff/copy-deck.md` (copy) + `docs/handoff/asset-inventory.md` (files)

---

## 1. Company Info

```ts
export const COMPANY = {
  name: 'PT Comon Cipta Inovasi',
  brand: 'Devetek',
  tagline: 'Digitalisasi Tanpa Batas — Dari Sensor Hingga Sistem',
  description: 'Perusahaan teknologi yang berfokus pada pengembangan solusi perangkat lunak dan sistem sensor untuk digitalisasi sektor publik dan swasta.',
  founded: 2012,
  incorporated: 2018, // PT CCI resmi
  copyright: `© ${new Date().getFullYear()} PT Comon Cipta Inovasi. Seluruh hak dilindungi undang-undang.`,
  entities: {
    cci: { name: 'PT Comon Cipta Inovasi', role: 'Induk perusahaan (lisensi)' },
    dmi: { name: 'PT Devetek Marapi Inovasi', role: 'Rekanan fokus pasar PDAM' },
    devetek: { name: 'Devetek', role: 'Brand utama' },
  },
} as const
```

---

## 2. Contact Info

```ts
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
    urlWithText: 'https://wa.me/628562302229?text=Halo%20Devetek%2C%20saya%20tertarik%20dengan%20layanan%20Anda.',
  },
  address: {
    office: {
      label: 'Office',
      street: 'Mutiara Karadenan No. 7C',
      city: 'Cibinong, Kab. Bogor',
      province: 'Jawa Barat',
      full: 'Mutiara Karadenan No. 7C, Cibinong, Kab. Bogor, Jawa Barat',
    },
    workshop: {
      label: 'Workshop',
      street: 'Citra Raya, Pesona Atlantis M23/37',
      city: 'Kab. Tangerang',
      province: 'Banten',
      full: 'Citra Raya, Pesona Atlantis M23/37, Kab. Tangerang, Banten',
    },
  },
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#',  // TODO: konfirmasi URL
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#', // TODO: konfirmasi URL
  },
} as const
```

---

## 3. Navigation

```ts
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
```

---

## 4. Footer Links

```ts
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
  ],
} as const
```

---

## 5. Stats / Counter

```ts
// ⚠️ Angka perlu verifikasi sebelum launch
export const STATS = [
  { value: 12, suffix: '+', label: 'Tahun', sublabel: 'Pengalaman' },
  { value: 50, suffix: '+', label: 'Klien', sublabel: 'Terpercaya' },
  { value: 100, suffix: '+', label: 'Proyek', sublabel: 'Diselesaikan' },
] as const
```

---

## 6. Timeline

```ts
export const TIMELINE = [
  { year: 2012, title: 'Devetek Didirikan', description: 'Berdiri sebagai startup teknologi' },
  { year: 2018, title: 'PT CCI Resmi', description: 'Resmi menjadi PT Comon Cipta Inovasi' },
  { year: 2019, title: 'Fokus PDAM', description: 'Fokus pada SaaS & IoT untuk sektor PDAM' },
  { year: 2023, title: 'Ekspansi Layanan', description: 'Ekspansi layanan ERP & Konsultasi' },
  { year: 2026, title: 'Milestone', description: '50+ klien aktif, 100+ proyek selesai' },
] as const
```

---

## 7. Values

```ts
export const VALUES = [
  { name: 'Integritas', description: 'Bekerja dengan kejujuran, transparansi, dan tanggung jawab penuh', icon: 'Shield' },
  { name: 'Inovasi', description: 'Selalu mencari cara baru dan solusi kreatif untuk setiap tantangan', icon: 'Lightbulb' },
  { name: 'Kolaborasi', description: 'Tumbuh bersama klien dan mitra sebagai satu tim', icon: 'Users' },
  { name: 'Komitmen', description: 'Dedikasi penuh terhadap kualitas dan kepuasan pelanggan', icon: 'Target' },
  { name: 'Kompetensi', description: 'Didukung tim ahli yang berpengalaman dan terus berkembang', icon: 'Award' },
] as const
```

---

## 8. Team

```ts
export const TEAM = [
  { name: 'Muhammad Arifin', role: 'Founder', photo: '/images/team/arifin.jpg', source: 'arifin-1.png' },
  { name: 'Nedya Amrih Prakasa', role: 'Co-Founder', photo: '/images/team/raka.jpg', source: 'raka-1.png' },
  { name: 'Kusuma Indra Putra', role: 'Co-Founder', photo: '/images/team/kusuma.jpg', source: 'kusuma-1.png' },
  { name: 'Yasdiq Lubis', role: 'Project Manager', photo: '/images/team/yasdiq.jpg', source: 'Yash-scaled.jpg' },
  { name: 'Fahmi Zulhasymi', role: 'Solution Architect', photo: '/images/team/fahmi.jpg', source: 'fahmi.jpg' },
  { name: 'Muhammad Ilham C.', role: 'Developer', photo: '/images/team/ilham.jpg', source: 'WhatsApp-...-9.06.09-PM.jpeg' },
  { name: 'Muhammad Arifan', role: 'Developer', photo: '/images/team/arifan.jpg', source: '20180510_145342-scaled.jpg' },
  { name: 'Randi Maizul', role: 'Developer', photo: '/images/team/randi.jpg', source: 'WhatsApp-...-9.28.04-PM.jpeg' }, // ⚠️ role perlu konfirmasi
  { name: 'Robinaldi', role: 'Design', photo: '/images/team/robinaldi.jpg', source: 'Screenshot-2023-08-02-at-18.02.24.png' },
  { name: 'Rully Culit', role: 'Digital Creative', photo: '/images/team/rully.jpg', source: 'IMG_2207-scaled.jpg' },
] as const

// Note: `source` = nama file asli di wp-content backup
// `photo` = path tujuan setelah di-rename dan copy ke public/images/team/
```

---

## 9. Products (Home Cards — 4 grouped)

```ts
export const PRODUCTS = [
  {
    slug: 'pdam-suite',
    title: 'Solusi PDAM',
    subtitle: 'D-IBS + D-ASSET + HELIOS',
    description: 'Billing, baca meter, penagihan, keuangan, HR hingga dashboard eksekutif — dalam satu platform terpadu untuk PDAM.',
    icon: 'Droplets',
    href: '/products/pdam-suite',
    badge: 'Unggulan',
  },
  {
    slug: 'erp',
    title: 'DEVETEK ERP',
    subtitle: 'ERP Modular',
    description: 'Sistem ERP modular dengan dynamic approval, microservice architecture, dan integrasi payment gateway.',
    icon: 'Settings',
    href: '/products/erp',
  },
  {
    slug: 'software-house',
    title: 'Custom Software',
    subtitle: 'Development',
    description: 'Web app, mobile app, Web GIS, dan solusi digital custom untuk kebutuhan spesifik bisnis Anda.',
    icon: 'Code',
    href: '/products/software-house',
  },
  {
    slug: 'consulting',
    title: 'Konsultasi & Pengadaan',
    subtitle: 'IT Services',
    description: 'IT consulting, pengadaan barang IT & elektronik, maintenance, dan instalasi untuk sektor publik & swasta.',
    icon: 'Handshake',
    href: '/products/consulting',
  },
] as const
```

---

## 10. Product Detail Pages — Hero Copy

```ts
export const PRODUCT_PAGES = {
  'pdam-suite': {
    label: 'SOLUSI PDAM',
    h1: 'Sistem PDAM Terintegrasi',
    description: 'Pendekatan total: Teknologi + SDM + Tata Kelola. Membuat tata kelola PDAM kecil setara dengan yang besar secara teknologi.',
    sections: ['D-IBS', 'D-ASSET'],
    externalLinks: {
      dibs: null, // tidak ada link eksternal
      dasset: 'https://webgis-pdam.devetek.app/',
    },
  },
  helios: {
    label: 'DEVETEK HELIOS',
    h1: 'Monitor. Analisa. Kendalikan.',
    description: 'Platform IoT end-to-end untuk infrastruktur kritis. Cloud platform cerdas + hardware sensor tangguh — visibilitas penuh atas seluruh operasi Anda.',
    externalLink: 'https://iot.devetek.app/',
    hardware: [
      { type: 'Type A', name: 'Universal Logger', description: 'Multi-sensor data logger untuk monitoring debit, tekanan, dan kualitas air' },
      { type: 'Type B', name: 'Pipeline Logger', description: 'Logger khusus pipeline untuk deteksi kebocoran dan monitoring tekanan distribusi' },
      { type: 'Type C', name: 'Custom Solution', description: 'Solusi sensor custom sesuai kebutuhan spesifik infrastruktur klien' },
    ],
  },
  erp: {
    label: 'DEVETEK ERP',
    h1: 'ERP Modular untuk Bisnis Modern',
    description: 'Sistem ERP yang fleksibel dan scalable. Dynamic multi-level approval, arsitektur microservice, dan integrasi payment gateway.',
    modules: ['Inventory', 'Finance', 'Procurement', 'HR', 'Production'],
  },
  'software-house': {
    label: 'CUSTOM DEVELOPMENT',
    h1: 'Kami Bangun Solusi Digital Anda',
    description: 'Dari ide hingga produksi — tim kami merancang, mengembangkan, dan mendukung aplikasi custom sesuai kebutuhan bisnis Anda.',
    techStack: ['React / Next.js', 'Angular', 'Go / Node.js', 'Flutter', 'PostgreSQL', 'Docker / K8s'],
  },
  consulting: {
    label: 'KONSULTASI & PENGADAAN',
    h1: 'Mitra Terpercaya untuk Pengadaan & Layanan IT',
    description: 'Berpengalaman dalam pengadaan barang dan jasa untuk sektor swasta dan pemerintahan. Harga terbaik tanpa mengorbankan kualitas.',
  },
} as const
```

---

## 11. Testimonials

```ts
export const TESTIMONIALS = [
  {
    quote: 'Setelah implementasi Devetek Helios di 5 DMA dengan 200+ node, waktu deteksi kebocoran berkurang drastis dari hitungan hari menjadi hitungan menit.',
    name: 'Tim Teknis',
    role: 'Rekanan Resmi Produk PDAM',
    company: 'PT Bakti Air Indonesia',
    avatar: null, // belum ada foto
  },
  // TODO: tambah 1-2 testimonial lagi jika tersedia
] as const
```

---

## 12. Clients & Partners

```ts
export const CLIENTS = {
  pdam: [
    { name: 'PDAM Tirta Pakuan', city: 'Bogor', logo: '/images/clients/tirta-pakuan.png', status: 'pending' },
    { name: 'PDAM Tirtanadi', city: 'Medan', logo: '/images/clients/tirtanadi.png', status: 'pending' },
    { name: 'PDAM Tirta Kahuripan', city: 'Bogor', logo: '/images/clients/tirta-kahuripan.png', status: 'pending' },
    { name: 'PDAM Tanah Datar', city: 'Sumatera Barat', logo: '/images/clients/pdam-tanah-datar.png', status: 'ready', source: 'PDAM-tanah-datar-1.png' },
    // ⚠️ 8 PDAM lainnya perlu dikonfirmasi nama & logo
  ],
  partners: [
    { name: 'PT Bakti Air Indonesia', role: 'Rekanan resmi produk PDAM', logo: null },
  ],
  government: [
    { name: 'Kementerian KKP', logo: null },
    { name: 'Kementerian DLH', logo: null },
    { name: 'Kementerian HAM', logo: null },
    { name: 'BPBD', logo: null },
    { name: 'Pemkab Bogor', logo: null },
    { name: 'LPPM IPB', logo: null },
  ],
  private: [
    { name: 'PT RPN', logo: '/images/clients/rpn.png', status: 'ready', source: 'rpn-1.png' },
    { name: 'PT BMT Asia', logo: null },
    { name: 'PT Adfin', logo: null },
    { name: 'PT Meganesia', logo: null },
    { name: 'PT Valensi', logo: null },
  ],
} as const

// Note: `logo: null` = file belum tersedia, gunakan placeholder atau text-only
// `status: 'ready'` = file sudah ada di wp-content backup
// `status: 'pending'` = perlu dari klien
```

---

## 13. Contact Form Config

```ts
export const CONTACT_FORM = {
  fields: [
    { name: 'name', label: 'Nama Lengkap', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'No. HP', type: 'tel', required: false },
    {
      name: 'category',
      label: 'Kategori Kebutuhan',
      type: 'select',
      required: false,
      options: [
        { value: 'pdam', label: 'Sistem PDAM (D-IBS)' },
        { value: 'webgis', label: 'WebGIS (D-ASSET)' },
        { value: 'iot', label: 'IoT (HELIOS)' },
        { value: 'erp', label: 'ERP' },
        { value: 'custom', label: 'Custom Software' },
        { value: 'consulting', label: 'Konsultasi & Pengadaan' },
        { value: 'other', label: 'Lainnya' },
      ],
    },
    { name: 'message', label: 'Pesan', type: 'textarea', required: true },
  ],
  submitLabel: 'Kirim Pesan',
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID || '',
} as const
```

---

## 14. SEO Metadata per Page

```ts
export const SEO = {
  siteName: 'Devetek',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://devetek.com',
  defaultOgImage: '/og-image.jpg',
  pages: {
    home: {
      title: 'Devetek — Digitalisasi Tanpa Batas',
      description: 'Solusi teknologi end-to-end untuk PDAM, Pemerintahan, BUMN & Swasta. Berpengalaman lebih dari satu dekade membangun sistem yang benar-benar bekerja.',
    },
    about: {
      title: 'Tentang Kami — Devetek',
      description: 'Lebih dari satu dekade membangun solusi digital. PT Comon Cipta Inovasi — partner teknologi untuk PDAM, pemerintah, dan swasta.',
    },
    products: {
      title: 'Produk & Layanan — Devetek',
      description: 'Dari sensor di lapangan hingga laporan eksekutif — semua dalam ekosistem Devetek.',
    },
    pdamSuite: {
      title: 'Solusi PDAM (D-IBS + D-ASSET) — Devetek',
      description: 'Sistem PDAM terintegrasi: billing, baca meter, WebGIS aset, hingga dashboard eksekutif dalam satu platform.',
    },
    helios: {
      title: 'HELIOS — Platform IoT Monitoring — Devetek',
      description: 'Platform IoT end-to-end untuk infrastruktur kritis. Cloud platform + hardware sensor untuk monitoring 24/7.',
    },
    erp: {
      title: 'ERP Modular — Devetek',
      description: 'Sistem ERP fleksibel dengan dynamic approval, microservice architecture, dan integrasi payment gateway.',
    },
    softwareHouse: {
      title: 'Custom Software Development — Devetek',
      description: 'Web app, mobile app, WebGIS, dan solusi digital custom untuk kebutuhan spesifik bisnis Anda.',
    },
    consulting: {
      title: 'Konsultasi & Pengadaan IT — Devetek',
      description: 'IT consulting, pengadaan barang, maintenance, dan instalasi untuk sektor publik & swasta.',
    },
    clients: {
      title: 'Portfolio & Klien — Devetek',
      description: 'Dipercaya oleh PDAM, kementerian, dan perusahaan swasta di seluruh Indonesia.',
    },
    blog: {
      title: 'Blog & Insight — Devetek',
      description: 'Artikel, update, dan studi kasus seputar teknologi, digitalisasi, dan solusi industri.',
    },
    contact: {
      title: 'Kontak — Devetek',
      description: 'Hubungi tim Devetek untuk konsultasi gratis. WhatsApp, email, atau kunjungi kantor kami.',
    },
  },
} as const
```

---

## 15. CTA Variations

```ts
// Canonical CTA text — gunakan konsisten
export const CTA = {
  hero: {
    primary: { label: 'Hubungi Kami', href: '/contact' },
    secondary: { label: 'Lihat Produk', href: '/products' },
  },
  section: {
    heading: 'Siap Memulai Transformasi Digital?',
    subtitle: 'Konsultasikan kebutuhan Anda dengan tim kami — gratis, tanpa komitmen.',
    primary: { label: 'WhatsApp Langsung', href: CONTACT.whatsapp.urlWithText },
    secondary: { label: 'Hubungi Kami', href: '/contact' },
  },
  product: {
    label: 'Hubungi untuk Demo',
    href: '/contact',
  },
  productLink: {
    label: 'Selengkapnya →',
  },
} as const
```

---

## 16. Visi & Misi

```ts
export const VISI = 'Menjadi perusahaan teknologi terdepan yang mendorong transformasi digital di Indonesia melalui solusi inovatif dan terpercaya.'

export const MISI = [
  'Menyediakan solusi teknologi terintegrasi yang menyelesaikan masalah nyata',
  'Mendukung digitalisasi sektor publik dan swasta secara menyeluruh',
  'Memberikan layanan berkualitas tinggi dengan pendekatan kolaboratif dan berkelanjutan',
] as const
```

---

## Asset Mapping Summary

> Developer: rename semua file dari wp-content ke nama bersih di `public/images/`

| Kategori | Source | Target Path | Status |
|----------|--------|-------------|--------|
| Logo | DEVETEK-LOGO.png | /images/logo/devetek.svg | 🎨 Perlu konversi ke SVG |
| Team (10 foto) | Various .png/.jpg | /images/team/{nama}.jpg | ✅ Rename & optimize |
| PDAM screenshots | Various .png | /images/products/d-ibs-*.png | ⏳ Placeholder |
| D-ASSET | — | /images/products/d-asset-*.png | ⏳ Placeholder |
| HELIOS (10 mockups) | mockup-*.jpg | /images/products/helios-*.jpg | ✅ Dari iot.devetek.app |
| ERP | devetek-erp-2-1.png, akun.png, etc | /images/products/erp-*.png | ✅ Ready |
| Custom Dev | amims-1.png, vms-1.png, etc | /images/products/custom-*.png | ✅ Ready |
| Client logos | rpn-1.png, PDAM-tanah-datar-1.png | /images/clients/{slug}.png | Sebagian ready |
| OG Image | — | /og-image.jpg | 🎨 Perlu dibuat |
| Favicon | 9aec1558-...-DEVETEK-f.png | /favicon.ico | ✅ Perlu convert |
