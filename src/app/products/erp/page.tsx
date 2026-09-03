'use client'

import {
  ArrowRight,
  Bell,
  ClipboardText,
  CurrencyDollar,
  GearSix,
  GlobeSimple,
  Handshake,
  MegaphoneSimple,
  Package,
  PresentationChart,
  SealCheck,
  ShieldCheck,
  Sparkle,
  TrendUp,
  Truck,
  Users,
  Wallet,
} from '@phosphor-icons/react'
import {
  Badge,
  Button,
  Card,
  FeatureCard,
  PageHero,
  ProcessCard,
  Reveal,
  Section,
  SectionHeading,
} from '@/components/ui'
import CTASection from '@/components/sections/CTASection'

/** Sepuluh grup modul. Modul diaktifkan sesuai kebutuhan, tidak sekaligus. */
const MODULE_GROUPS = [
  {
    icon: GearSix,
    title: 'Generals',
    subtitle: 'Tools & Resource Management',
    submodules: ['Notifikasi approval & ticketing', 'Helpdesk & ticketing', 'Tutorial', 'Monitoring API'],
  },
  {
    icon: Users,
    title: 'HRGA',
    subtitle: 'Human Resource & General Affair',
    submodules: ['Kelola organisasi & perusahaan', 'HR Dashboard & rekapitulasi', 'Data pegawai', 'Absensi, cuti & izin'],
  },
  {
    icon: Package,
    title: 'EQS & Inventory',
    subtitle: 'EQS, Asset & Stock Management',
    submodules: ['Stok & gudang produksi', 'Manajemen asset', 'Audit & stok opname', 'Penerimaan barang', 'Jadwal & jadwal maintenance', 'Master konfigurasi'],
  },
  {
    icon: Handshake,
    title: 'CRM',
    subtitle: 'Customer Relationship Management',
    submodules: ['Data kontak customer care', 'Data pelanggan', 'Rencana & realisasi kontak', 'Data vendor', 'Data mitra klaim'],
  },
  {
    icon: MegaphoneSimple,
    title: 'Sales & Marketing',
    subtitle: 'Sales & Marketing Management',
    submodules: ['Prospek & kontak', 'Monitoring incoming call', 'Data penawaran', 'Monitoring aktivitas AE', 'Pengaturan harga & kelompok', 'Manajemen kontrak'],
  },
  {
    icon: ClipboardText,
    title: 'Operasional',
    subtitle: 'Pekerjaan & Quality Control',
    submodules: ['Data lokasi kontrak', 'Jadwal rencana kerja', 'Kehadiran operator onsite', 'Laporan work order', 'QC inspeksi', 'Manajemen keluhan pelanggan'],
  },
  {
    icon: Truck,
    title: 'Purchasing',
    subtitle: 'Pembelian & Pengadaan Barang',
    submodules: ['Purchase Order (PO)', 'Work Order (WO)', 'Cash Advance (CA)', 'Return & PI', 'Vendor management'],
  },
  {
    icon: Wallet,
    title: 'Keuangan',
    subtitle: 'Pemasukan & Pengeluaran',
    submodules: ['Accounting & cash advance', 'PPh23', 'Cash management (IN/OUT)', 'Rencana anggaran', 'Invoice & faktur', 'Verifikasi & validasi tagihan', 'Distribusi & penagihan', 'Validasi pembayaran masuk'],
  },
  {
    icon: GlobeSimple,
    title: 'Website',
    subtitle: 'Company Profile & E-Commerce',
    submodules: ['Builder admin website', 'Manajemen produk katalog'],
  },
  {
    icon: PresentationChart,
    title: 'Management Report',
    subtitle: 'Laporan untuk Manajemen',
    submodules: ['Laporan penjualan', 'Laporan omset & pemasukan', 'Laporan tagihan'],
  },
]

const ADVANTAGES = [
  { icon: Sparkle, title: 'Modular sepenuhnya', desc: 'Aktifkan hanya modul yang dibutuhkan — tidak membayar fitur yang tidak dipakai.' },
  { icon: SealCheck, title: 'Approval bertingkat dinamis', desc: 'Alur persetujuan mengikuti hierarki organisasi Anda, bukan template bawaan.' },
  { icon: ShieldCheck, title: 'Hak akses terperinci', desc: 'Kontrol akses per pengguna, per divisi, dan per menu, sehingga data sensitif tetap terjaga.' },
  { icon: Bell, title: 'Notifikasi multi-kanal', desc: 'Email, WhatsApp, dan SMS otomatis untuk persetujuan, peringatan, serta pengingat.' },
  { icon: GearSix, title: 'Arsitektur microservice', desc: 'Setiap modul berdiri sendiri, sehingga penambahan kapasitas tidak mengganggu modul lain.' },
  { icon: TrendUp, title: 'Integrasi payment gateway', desc: 'Terhubung ke sistem pembayaran dan bank untuk rekonsiliasi otomatis.' },
]

const COMPARISON = [
  {
    title: 'Tidak membayar fitur yang tidak dipakai',
    desc: 'Mulai dari dua atau tiga modul, lalu tambah seiring pertumbuhan bisnis.',
  },
  {
    title: 'Approval mengikuti struktur Anda',
    desc: 'Alur persetujuan bertingkat dikonfigurasi sesuai hierarki organisasi yang sebenarnya.',
  },
  {
    title: 'Menyambung ke sistem yang sudah ada',
    desc: 'Terkoneksi ke sistem billing, payment gateway, atau perkakas lain tanpa mengganggu operasi berjalan.',
  },
]

const IMPLEMENTATION = [
  { num: '01', title: 'Analisis kebutuhan', desc: 'Kami mempelajari alur bisnis, struktur organisasi, dan kebutuhan spesifik Anda.', icon: ClipboardText },
  { num: '02', title: 'Desain & konfigurasi', desc: 'Modul dikonfigurasi: alur persetujuan, peran pengguna, notifikasi, dan integrasi.', icon: GearSix },
  { num: '03', title: 'Pelatihan & UAT', desc: 'Pelatihan tim pengguna, pengujian penerimaan, dan penyesuaian akhir sebelum rilis.', icon: Users },
  { num: '04', title: 'Go-live & dukungan', desc: 'Pendampingan intensif saat rilis dan dukungan teknis berkelanjutan setelahnya.', icon: TrendUp },
]

/**
 * DEVETEK ERP — blueprint §18.
 *
 * CATATAN: hero versi sebelumnya berlabel "DEVETEK ERP V2" sementara blok
 * angka menyebut "v4.0 Versi Saat Ini". Karena tidak ada rujukan yang bisa
 * dipakai untuk memastikan mana yang benar, nomor versi dilepas dari hero.
 * Tetapkan satu versi resmi sebelum halaman ini dipublikasikan.
 */
export default function ERPPage() {
  return (
    <>
      <PageHero
        eyebrow="Devetek ERP"
        title="ERP modular untuk bisnis yang sudah berjalan"
        description="Aktifkan modul sesuai kebutuhan — HR, keuangan, operasional, CRM, hingga laporan manajemen — dalam satu platform yang saling terhubung."
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Produk', href: '/products' },
          { label: 'ERP' },
        ]}
        actions={
          <>
            <Button href="/contact">
              Konsultasi Gratis
              <ArrowRight size={16} weight="bold" />
            </Button>
            <Button href="/products" variant="secondary">
              Produk Lain
            </Button>
          </>
        }
        media={
          <ul className="flex flex-wrap gap-2">
            {['10 grup modul', '50+ sub-menu', 'Dynamic approval', 'Microservice'].map((b) => (
              <li key={b}>
                <Badge variant="inverse">{b}</Badge>
              </li>
            ))}
          </ul>
        }
      />

      <Section tone="white">
        <Reveal>
          <SectionHeading
            label="Kenapa Bukan Template"
            title="ERP template memaksa bisnis menyesuaikan diri"
            subtitle="Devetek ERP dibangun mengikuti proses yang sudah berjalan di tempat Anda, bukan sebaliknya."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {COMPARISON.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <Card padding="lg" accent="orange" interactive={false} className="h-full">
                <h3 className="font-heading text-h3 font-semibold text-text-primary">{c.title}</h3>
                <p className="mt-2 font-body text-body-sm leading-relaxed text-text-secondary">
                  {c.desc}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <Reveal>
          <SectionHeading
            label="Modul"
            title="Sepuluh grup modul, lebih dari 50 sub-menu"
            subtitle="Dari HR sampai keuangan, operasional sampai laporan eksekutif — semuanya membaca basis data yang sama."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {MODULE_GROUPS.map((m, i) => {
            const ModuleIcon = m.icon
            return (
              <Reveal key={m.title} delay={Math.min(i, 6) * 0.06}>
                <Card padding="lg" interactive={false} className="h-full">
                  <div className="flex items-center gap-3.5">
                    <span
                      aria-hidden
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent-light text-brand-blue-strong"
                    >
                      <ModuleIcon size={21} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-heading text-h4 font-semibold text-text-primary">{m.title}</h3>
                      <p className="truncate font-body text-body-sm text-text-muted">{m.subtitle}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {m.submodules.map((sub) => (
                      <li key={sub} className="flex items-start gap-2">
                        <span aria-hidden className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-orange" />
                        <span className="font-body text-body-sm text-text-secondary">{sub}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section tone="dark" pattern="grid">
        <Reveal>
          <SectionHeading
            label="Kapabilitas"
            title="Dibangun untuk tumbuh bersama bisnis Anda"
            subtitle="Arsitektur modern yang memungkinkan kustomisasi penuh tanpa mengorbankan kestabilan."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((a, i) => {
            const AdvIcon = a.icon
            return (
              <Reveal key={a.title} delay={i * 0.07}>
                <FeatureCard
                  tone="dark-soft"
                  icon={<AdvIcon size={21} />}
                  title={a.title}
                  description={a.desc}
                  className="h-full"
                />
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            label="Implementasi"
            title="Dari konsultasi sampai go-live"
            subtitle="Tahapannya disusun agar operasi yang sedang berjalan tidak terganggu."
          />
        </Reveal>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {IMPLEMENTATION.map((s, i) => {
            const StepIcon = s.icon
            return (
              <li key={s.num}>
                <Reveal delay={i * 0.07}>
                  <ProcessCard
                    step={s.num}
                    title={s.title}
                    description={s.desc}
                    icon={<StepIcon size={24} />}
                    last={i === IMPLEMENTATION.length - 1}
                  />
                </Reveal>
              </li>
            )
          })}
        </ol>
      </Section>

      <CTASection />
    </>
  )
}
