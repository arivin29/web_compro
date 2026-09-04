'use client'

import {
  ArrowRight,
  Buildings,
  CheckCircle,
  ClipboardText,
  ComputerTower,
  CurrencyCircleDollar,
  Desktop,
  Handshake,
  HardDrives,
  Lightning,
  MagnifyingGlass,
  ShieldCheck,
  Toolbox,
  Truck,
  UsersThree,
  VideoCameraSlash,
  Warehouse,
  WifiHigh,
  ThumbsUp,
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

const SERVICES = [
  {
    icon: Desktop,
    title: 'IT Consulting',
    desc: 'Analisis kebutuhan teknologi, rekomendasi arsitektur, dan roadmap transformasi digital.',
    tags: ['Assessment', 'Roadmap', 'Arsitektur IT'],
  },
  {
    icon: ComputerTower,
    title: 'Server & Data Center',
    desc: 'Server rack/tower, storage, UPS online, precision AC, raised floor, dan perlengkapan data center.',
    tags: ['Server', 'UPS', 'PAC', 'Storage'],
  },
  {
    icon: WifiHigh,
    title: 'Jaringan & Infrastruktur',
    desc: 'Switch managed, router, access point, fiber optic, serta instalasi LAN/WAN skala enterprise.',
    tags: ['Switch', 'Router', 'Fiber Optic', 'Wi-Fi'],
  },
  {
    icon: VideoCameraSlash,
    title: 'CCTV & Keamanan',
    desc: 'IP camera, NVR/DVR, access control, dan sistem keamanan terintegrasi untuk gedung dan area publik.',
    tags: ['IP Camera', 'NVR', 'Access Control'],
  },
  {
    icon: HardDrives,
    title: 'Perangkat Kerja Harian',
    desc: 'Desktop, laptop, printer multifungsi, scanner, monitor, dan perangkat endpoint lainnya.',
    tags: ['PC', 'Laptop', 'Printer', 'Monitor'],
  },
  {
    icon: Lightning,
    title: 'Genset & Kelistrikan',
    desc: 'Generator set untuk daya cadangan, instalasi panel listrik, grounding, dan kelistrikan gedung.',
    tags: ['Genset', 'Panel Listrik', 'Grounding'],
  },
]

const CATEGORIES = [
  {
    cat: 'Data Center',
    icon: ComputerTower,
    items: ['Server HP/Dell/Lenovo', 'Storage NAS/SAN', 'UPS APC/Vertiv', 'Precision AC', 'Rack & aksesori'],
  },
  { cat: 'Networking', icon: WifiHigh, items: ['Cisco', 'MikroTik', 'Aruba', 'Ubiquiti', 'Fiber optic'] },
  { cat: 'Endpoint', icon: Desktop, items: ['HP', 'Lenovo', 'Dell', 'Epson', 'Canon'] },
  { cat: 'Security', icon: VideoCameraSlash, items: ['Hikvision', 'Dahua', 'ZKTeco', 'Suprema', 'Honeywell'] },
]

const DIFFERENTIATORS = [
  {
    icon: Handshake,
    title: 'Paham dua jenis regulasi',
    desc: 'Terbiasa dengan pengadaan pemerintah (e-purchasing, tender) maupun procurement swasta dengan SLA ketat.',
  },
  {
    icon: ShieldCheck,
    title: 'Produk resmi bergaransi',
    desc: 'Seluruh produk yang kami suplai berasal dari principal atau distributor resmi, lengkap dengan garansi.',
  },
  {
    icon: CurrencyCircleDollar,
    title: 'Penawaran transparan',
    desc: 'Rincian harga dijabarkan per item sejak awal, sehingga tidak ada biaya yang muncul di tengah proyek.',
  },
  {
    icon: UsersThree,
    title: 'Tim teknis in-house',
    desc: 'Instalasi, konfigurasi, dan maintenance dikerjakan tim internal bersertifikat — bukan dialihkan ke pihak lain.',
  },
]

const PROCESS = [
  { num: '01', title: 'Konsultasi', desc: 'Identifikasi kebutuhan, survei lokasi, dan pemetaan spesifikasi teknis bersama tim Anda.', icon: MagnifyingGlass },
  { num: '02', title: 'Penawaran', desc: 'RAB rinci dengan opsi produk, perbandingan harga, dan lini masa pengerjaan yang realistis.', icon: ClipboardText },
  { num: '03', title: 'Pengadaan', desc: 'Procurement dari distributor resmi, pemeriksaan kualitas, dan pengiriman ke lokasi Anda.', icon: Truck },
  { num: '04', title: 'Instalasi & dukungan', desc: 'Pemasangan, konfigurasi, pengujian, pelatihan pengguna, dan dukungan teknis setelahnya.', icon: ThumbsUp },
]

const SECTORS = [
  { icon: Buildings, title: 'Pemerintahan', desc: 'Kementerian, dinas, BUMN/BUMD, dan instansi publik di berbagai daerah.' },
  { icon: Warehouse, title: 'Korporasi', desc: 'Perusahaan swasta, perbankan, telekomunikasi, dan industri manufaktur.' },
  { icon: Toolbox, title: 'UMKM & startup', desc: 'Bisnis skala kecil-menengah yang butuh infrastruktur IT andal dengan anggaran efisien.' },
]

const COMMITMENTS = [
  'Produk original dengan garansi resmi',
  'Penawaran transparan dan terperinci',
  'Tim teknis bersertifikat untuk instalasi',
  'Dukungan purnajual dan maintenance berkala',
  'Pengiriman terjadwal dengan pelacakan',
  'Pengalaman pengadaan pemerintah dan swasta',
]

/**
 * Konsultasi & Pengadaan IT — blueprint §18.
 *
 * CATATAN: hero versi sebelumnya memuat mockup "procurement dashboard"
 * berlabel LIVE dengan daftar pengadaan fiktif (Server Dell R750, UPS
 * Vertiv, dsb.) dan menyebut "PT Devetek Digital Indonesia" — entitas yang
 * tidak ada; nama resminya PT Comon Cipta Inovasi. Blueprint §9.2 melarang
 * menampilkan status sebagai ornamen palsu dan §21 melarang klaim yang belum
 * terverifikasi, jadi mockup itu dihapus.
 */
export default function ConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="Konsultasi & Pengadaan"
        title="Mitra pengadaan dan layanan IT"
        description="Berpengalaman mengadakan barang dan jasa IT untuk sektor pemerintahan maupun swasta — produk resmi bergaransi, dipasang dan didukung tim internal kami."
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Layanan', href: '/services' },
          { label: 'Konsultasi & Pengadaan' },
        ]}
        actions={
          <>
            <Button href="/contact">
              Minta Penawaran
              <ArrowRight size={16} weight="bold" />
            </Button>
            <Button href="/services/software-house" variant="secondary">
              Layanan Lain
            </Button>
          </>
        }
        media={
          <ul className="flex flex-wrap gap-2">
            {['Server & Data Center', 'Networking', 'CCTV', 'Perangkat Kantor', 'Genset'].map((b) => (
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
            label="Kenapa Devetek"
            title="Bukan sekadar penyedia barang"
            subtitle="Kami ikut memahami kebutuhan teknisnya, lalu mendampingi dari konsultasi sampai purnajual."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIATORS.map((d, i) => {
            const DiffIcon = d.icon
            return (
              <Reveal key={d.title} delay={i * 0.08}>
                <FeatureCard
                  icon={<DiffIcon size={21} />}
                  title={d.title}
                  description={d.desc}
                  className="h-full"
                />
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section tone="soft">
        <Reveal>
          <SectionHeading
            label="Layanan Kami"
            title="Cakupan infrastruktur IT yang kami tangani"
            subtitle="Dari perencanaan sampai maintenance, dalam satu siklus pengadaan."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const ServiceIcon = s.icon
            return (
              <Reveal key={s.title} delay={i * 0.07}>
                <FeatureCard
                  icon={<ServiceIcon size={21} />}
                  title={s.title}
                  description={s.desc}
                  className="h-full"
                >
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <li key={t}>
                        <Badge variant="neutral">{t}</Badge>
                      </li>
                    ))}
                  </ul>
                </FeatureCard>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            label="Brand & Produk"
            title="Bermitra dengan distributor resmi"
            subtitle="Pengadaan dilakukan lewat principal atau distributor resmi agar kualitas dan garansi terjamin."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {CATEGORIES.map((g, i) => {
            const CatIcon = g.icon
            return (
              <Reveal key={g.cat} delay={i * 0.08}>
                <Card padding="lg" interactive={false} className="h-full">
                  <div className="flex items-center gap-3.5">
                    <span
                      aria-hidden
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent-light text-brand-blue-strong"
                    >
                      <CatIcon size={22} />
                    </span>
                    <div>
                      <h3 className="font-heading text-h3 font-semibold text-text-primary">{g.cat}</h3>
                      <p className="font-body text-body-sm text-text-muted">
                        {g.items.length} brand tersedia
                      </p>
                    </div>
                  </div>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 rounded-md border border-border bg-surface-soft px-3 py-2"
                      >
                        <CheckCircle size={14} weight="fill" aria-hidden className="shrink-0 text-brand-blue" />
                        <span className="truncate font-body text-body-sm text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section tone="soft">
        <Reveal>
          <SectionHeading
            label="Cara Kerja"
            title="Empat tahap dari permintaan sampai terpasang"
          />
        </Reveal>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {PROCESS.map((s, i) => {
            const StepIcon = s.icon
            return (
              <li key={s.num}>
                <Reveal delay={i * 0.07}>
                  <ProcessCard
                    step={s.num}
                    title={s.title}
                    description={s.desc}
                    icon={<StepIcon size={24} />}
                    last={i === PROCESS.length - 1}
                  />
                </Reveal>
              </li>
            )
          })}
        </ol>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <div>
              <SectionHeading label="Sektor yang Dilayani" title="Skala dan regulasi yang berbeda-beda" />
              <ul className="mt-8 space-y-3">
                {SECTORS.map((s) => {
                  const SectorIcon = s.icon
                  return (
                    <li key={s.title}>
                      <Card padding="sm" interactive={false}>
                        <div className="flex items-start gap-3.5">
                          <span
                            aria-hidden
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-light text-brand-blue-strong"
                          >
                            <SectorIcon size={19} />
                          </span>
                          <span>
                            <span className="block font-heading text-h4 font-semibold text-text-primary">
                              {s.title}
                            </span>
                            <span className="mt-1 block font-body text-body-sm leading-relaxed text-text-secondary">
                              {s.desc}
                            </span>
                          </span>
                        </div>
                      </Card>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <SectionHeading label="Komitmen Kami" title="Yang Anda dapatkan" as="h2" />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {COMMITMENTS.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2.5 rounded-md border border-border bg-surface-soft px-4 py-3.5"
                  >
                    <CheckCircle size={17} weight="fill" aria-hidden className="mt-0.5 shrink-0 text-brand-blue" />
                    <span className="font-body text-body-sm text-text-secondary">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection />
    </>
  )
}
