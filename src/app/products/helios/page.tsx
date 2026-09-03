'use client'

import Image from 'next/image'
import {
  ArrowRight,
  ArrowsClockwise,
  ArrowSquareOut,
  Bell,
  Brain,
  Broadcast,
  ChartLine,
  CloudArrowUp,
  Drop,
  Factory,
  FileText,
  HardDrives,
  Lightning,
  MapPin,
  Plant,
  PlugsConnected,
  Robot,
  WifiHigh,
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

const PLATFORM_FEATURES = [
  {
    icon: ChartLine,
    title: 'Dashboard & Widget Builder',
    desc: 'Bangun dashboard sesuai kebutuhan operasi. 6+ tipe widget, SQL editor, dual data source (PostgreSQL + ClickHouse).',
    href: 'https://iot.devetek.app/features.html#dashboard',
  },
  {
    icon: MapPin,
    title: 'WebGIS & Pemetaan Spasial',
    desc: 'Aset Anda di peta, secara real-time. Upload SHP, GeoJSON, KML. DMA boundary & live sensor data di peta.',
    href: 'https://iot.devetek.app/features.html#webgis',
  },
  {
    icon: Bell,
    title: 'Smart Alert & Monitoring',
    desc: 'Configurable threshold rules, severity levels, real-time detection, dan device command trigger otomatis.',
    href: 'https://iot.devetek.app/features.html#alerts',
  },
  {
    icon: FileText,
    title: 'Laporan & Ekspor',
    desc: 'Filter hierarkis, multi-sheet XLSX export, chart preview, dan template laporan reusable.',
    href: 'https://iot.devetek.app/features.html#reports',
  },
  {
    icon: Robot,
    title: 'ML & AI Analitik',
    desc: 'Anomaly detection, forecasting, ML dashboard, notifikasi otomatis, daily summary. AI untuk operasi prediktif.',
    href: 'https://iot.devetek.app/features.html#ml',
  },
  {
    icon: HardDrives,
    title: 'Manajemen Device & Sensor',
    desc: 'Full CRUD nodes, auto-discovery, pairing workspace, relay control, multi-protocol (MQTT + TCP Teltonika).',
    href: 'https://iot.devetek.app/features.html#devices',
  },
]

const HARDWARE = [
  {
    type: 'Type A',
    name: 'Universal Logger',
    desc: 'Multi-sensor untuk flow, pressure, dan level monitoring. Cocok untuk DMA dan titik kritis.',
    specs: ['Baterai LiFePO4 jangka panjang', 'Solar powered 20WP', 'IP65 weatherproof', 'RS485 Modbus RTU + 4-20mA'],
  },
  {
    type: 'Type B',
    name: 'Pipeline Logger',
    desc: 'Khusus monitoring tekanan dan aliran pipa distribusi. Deteksi kebocoran realtime.',
    specs: ['GSM 4G / 2G + BLE 5.0', 'SD Card offline 32GB', 'Auto-calibration', 'Pressure transducer'],
  },
  {
    type: 'Type C',
    name: 'Custom Solution',
    desc: 'Disesuaikan kebutuhan spesifik: water quality, pump monitoring, atau telemetri custom.',
    specs: ['Modular design', 'Custom firmware', 'Flexible I/O', 'Multi-protocol support'],
  },
]

const PIPELINE_STEPS = [
  { num: '1', icon: PlugsConnected, title: 'Hubungkan', desc: 'Hubungkan device apapun — ESP32, Arduino, PLC, Raspberry Pi — via MQTT, TCP, atau HTTP. Auto-discovery bawaan.' },
  { num: '2', icon: ArrowsClockwise, title: 'Transform', desc: 'Data dari device otomatis di-parsing, validasi, dan di-transform ke format database. Zero manual config.' },
  { num: '3', icon: Brain, title: 'Analisa', desc: 'Dashboard, alert rule, ML anomaly & forecast memproses data. Webhook & DB sync ke server Anda.' },
  { num: '4', icon: Broadcast, title: 'Bertindak', desc: 'Terima notifikasi, kirim command, export laporan, kontrol relay — dari mana saja.' },
]

const CONNECTIVITY = [
  {
    icon: WifiHigh,
    proto: 'MQTT',
    desc: 'Protokol IoT standar. Publish/subscribe real-time dengan QoS. Ideal untuk sensor yang mengirim data periodik.',
    tags: ['ESP32', 'Arduino', 'Raspberry Pi'],
  },
  {
    icon: PlugsConnected,
    proto: 'TCP / IP',
    desc: 'Koneksi raw TCP untuk device seperti Teltonika FM, PLC, dan perangkat industrial. Auto-parsing bawaan.',
    tags: ['Teltonika FM', 'PLC', 'Modbus RTU'],
  },
  {
    icon: CloudArrowUp,
    proto: 'HTTP / HTTPS',
    desc: 'REST API endpoint. Kirim data via HTTP POST dari device manapun yang punya koneksi internet. Webhook-friendly.',
    tags: ['REST API', 'Webhook', 'Any Device'],
  },
]

const INDUSTRIES = [
  {
    icon: Drop,
    title: 'PDAM / Utilitas Air',
    desc: 'Monitoring DMA, deteksi kebocoran, tekanan & debit real-time, webhook sync ke server PDAM, visualisasi jaringan pipa.',
    active: true,
    href: 'https://iot.devetek.app/solutions/pdam.html',
  },
  {
    icon: Lightning,
    title: 'Energi & Kelistrikan',
    desc: 'Monitoring VSD, konsumsi daya, prediktif maintenance, monitoring grid distribusi.',
    active: false,
  },
  {
    icon: Factory,
    title: 'IoT Industri',
    desc: 'Monitoring pabrik, telemetri produksi, kontrol kualitas, prediktif maintenance.',
    active: false,
  },
  {
    icon: Plant,
    title: 'Pertanian Cerdas',
    desc: 'Kelembaban tanah, stasiun cuaca, kontrol irigasi otomatis, monitoring tanaman.',
    active: false,
  },
]

const STATS = [
  { value: '< 500ms', label: 'Rata-rata Respons API' },
  { value: '10K+', label: 'Data Point / Detik' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Monitoring Real-time' },
]

const COMPATIBILITY = [
  'ESP32', 'Arduino', 'Raspberry Pi', 'PLC', 'Teltonika FM',
  'MQTT', 'TCP/IP', 'HTTP/HTTPS', 'Webhook', 'REST API',
  'PostgreSQL', 'MySQL', 'ClickHouse', 'Firebase', 'Modbus RTU',
  '4G / 2G Cellular', 'LoRa', 'RS485', 'Analog 4-20mA',
  'SHP / GeoJSON', 'XLSX Export', 'OpenLayers', 'ECharts',
]

const SCREENSHOTS = [
  { src: 'https://iot.devetek.app/img/screenshots/mockup-1-thumb.jpg', label: 'IoT Overview Dashboard' },
  { src: 'https://iot.devetek.app/img/screenshots/mockup-4-thumb.jpg', label: 'WebGIS Map View' },
  { src: 'https://iot.devetek.app/img/screenshots/mockup-3-thumb.jpg', label: 'Widget Builder' },
  { src: 'https://iot.devetek.app/img/screenshots/mockup-7-thumb.jpg', label: 'Report Preview & Export' },
]

/**
 * DEVETEK HELIOS — blueprint §18.
 *
 * CATATAN: angka pada bagian "Spesifikasi platform" (respons API, throughput,
 * uptime) adalah target rancangan, bukan hasil pengukuran yang dipublikasikan.
 * Penyebutannya sengaja dibingkai sebagai spesifikasi, sesuai blueprint §8.4
 * yang mensyaratkan konteks untuk angka yang bersifat publik. Ganti dengan
 * hasil pengukuran begitu tersedia.
 */
export default function HeliosPage() {
  return (
    <>
      <PageHero
        eyebrow="Devetek Helios"
        title="Pantau, analisa, kendalikan dari satu layar"
        description="Perangkat sensor tangguh di lapangan dipasangkan dengan platform cloud — sehingga kondisi infrastruktur terbaca terus-menerus, bukan hanya saat ada laporan."
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Produk', href: '/products' },
          { label: 'HELIOS' },
        ]}
        actions={
          <>
            <Button href="/contact">
              Minta Demo
              <ArrowRight size={16} weight="bold" />
            </Button>
            <Button href="https://iot.devetek.app" variant="secondary" target="_blank" rel="noopener noreferrer">
              Situs Produk
              <ArrowSquareOut size={15} weight="bold" />
            </Button>
          </>
        }
        media={
          <ul className="flex flex-wrap gap-2">
            {['MQTT', 'TCP/IP', 'HTTP', 'WebGIS', 'ML Analitik'].map((b) => (
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
            label="Dua Pilar"
            title="Perangkat keras di lapangan, platform di cloud"
            subtitle="Keduanya dirancang bersama, sehingga data sensor tidak perlu diterjemahkan lagi sebelum bisa dipakai."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PLATFORM_FEATURES.map((f, i) => {
            const FeatIcon = f.icon
            return (
              <Reveal key={f.title} delay={i * 0.07}>
                <FeatureCard
                  icon={<FeatIcon size={21} />}
                  title={f.title}
                  description={f.desc}
                  href={f.href}
                  linkLabel="Detail fitur"
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
            label="Alur Data"
            title="Dari sensor ke tindakan dalam empat langkah"
          />
        </Reveal>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {PIPELINE_STEPS.map((s, i) => {
            const StepIcon = s.icon
            return (
              <li key={s.num}>
                <Reveal delay={i * 0.07}>
                  <ProcessCard
                    step={`0${s.num}`}
                    title={s.title}
                    description={s.desc}
                    icon={<StepIcon size={24} />}
                    last={i === PIPELINE_STEPS.length - 1}
                  />
                </Reveal>
              </li>
            )
          })}
        </ol>
      </Section>

      <Section tone="dark" pattern="grid">
        <Reveal>
          <SectionHeading
            label="Konektivitas"
            title="Tidak terkunci pada satu vendor"
            subtitle="Selama perangkat Anda mendukung HTTP, TCP, atau MQTT, HELIOS bisa menerimanya."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {CONNECTIVITY.map((c, i) => {
            const ConnIcon = c.icon
            return (
              <Reveal key={c.proto} delay={i * 0.08}>
                <Card tone="dark-soft" padding="lg" interactive={false} className="h-full">
                  <span
                    aria-hidden
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-brand-blue-soft"
                  >
                    <ConnIcon size={21} />
                  </span>
                  <h3 className="font-mono text-h3 font-bold text-text-inverse">{c.proto}</h3>
                  <p className="mt-2 font-body text-body-sm leading-relaxed text-text-inverse-muted">
                    {c.desc}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <li key={t}>
                        <Badge variant="inverse">{t}</Badge>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 rounded-lg border border-white/12 bg-white/[0.04] p-6">
            <h3 className="label-section mb-4 text-brand-blue-soft">Kompatibilitas</h3>
            <ul className="flex flex-wrap gap-1.5">
              {COMPATIBILITY.map((c) => (
                <li
                  key={c}
                  className="rounded-sm border border-white/12 bg-white/[0.06] px-2.5 py-1 font-mono text-[0.6875rem] text-white/70"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            label="Tampilan Platform"
            title="Cuplikan langsung dari HELIOS"
            subtitle="Dashboard, peta, pembangun widget, dan pratinjau laporan."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SCREENSHOTS.map((ss, i) => (
            <Reveal key={ss.label} delay={i * 0.07}>
              <a
                href="https://iot.devetek.app/screenshots.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-card-hover"
              >
                <span className="relative block aspect-[16/10] w-full overflow-hidden bg-surface-soft">
                  <Image
                    src={ss.src}
                    alt={`Tampilan ${ss.label} pada platform HELIOS`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-forward group-hover:scale-[1.03]"
                    unoptimized
                  />
                </span>
                <span className="flex items-center justify-between gap-2 p-4">
                  <span className="font-body text-body-sm font-medium text-text-primary">
                    {ss.label}
                  </span>
                  <ArrowSquareOut
                    size={14}
                    weight="bold"
                    aria-hidden
                    className="shrink-0 text-brand-blue-strong"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <Reveal>
          <SectionHeading
            label="Perangkat Keras"
            title="Tiga jenis logger untuk kondisi lapangan berbeda"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {HARDWARE.map((hw, i) => (
            <Reveal key={hw.type} delay={i * 0.08}>
              <Card padding="lg" accent="orange" interactive={false} className="h-full">
                <span className="font-mono text-body-sm text-brand-orange">{hw.type}</span>
                <h3 className="mt-2 font-heading text-h3 font-semibold text-text-primary">
                  {hw.name}
                </h3>
                <p className="mt-2 font-body text-body-sm leading-relaxed text-text-secondary">
                  {hw.desc}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {hw.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span aria-hidden className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-blue" />
                      <span className="font-body text-body-sm text-text-secondary">{s}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div>
              <SectionHeading
                label="Industri"
                title="Dibangun untuk infrastruktur kritis"
                subtitle="Sektor air minum sudah berjalan; sisanya memakai fondasi platform yang sama."
              />
              <ul className="mt-8 space-y-3">
                {INDUSTRIES.map((ind) => {
                  const IndIcon = ind.icon
                  return (
                    <li key={ind.title}>
                      <Card padding="sm" interactive={Boolean(ind.href)} href={ind.href}>
                        <div className="flex items-start gap-3.5">
                          <span
                            aria-hidden
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-light text-brand-blue-strong"
                          >
                            <IndIcon size={19} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="flex flex-wrap items-center gap-2">
                              <span className="font-heading text-h4 font-semibold text-text-primary">
                                {ind.title}
                              </span>
                              <Badge variant={ind.active ? 'success' : 'neutral'} dot>
                                {ind.active ? 'Berjalan' : 'Dalam pengembangan'}
                              </Badge>
                            </span>
                            <span className="mt-1 block font-body text-body-sm leading-relaxed text-text-secondary">
                              {ind.desc}
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
              <SectionHeading label="Spesifikasi Platform" title="Target rancangan" as="h2" />
              <p className="measure mt-3 font-body text-body-sm text-text-muted">
                Angka berikut adalah target rancangan platform, bukan hasil pengukuran yang
                dipublikasikan.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="rounded-md border border-border bg-surface-soft p-5">
                    <div className="flex flex-col-reverse">
                      <dt className="mt-1.5 font-body text-body-sm text-text-secondary">
                        {s.label}
                      </dt>
                      <dd className="tabular font-heading text-h2 font-bold text-brand-blue-strong">
                        {s.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection />
    </>
  )
}
