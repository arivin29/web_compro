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
import { slotImageOrNull, type ImageSlot } from '@/lib/images'
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

/**
 * Spesifikasi perangkat keras.
 *
 * Diselaraskan dengan iot.devetek.app/hardware.html pada 4 September 2026.
 * Versi sebelumnya di halaman ini menyimpang dari situs produk — mis. BLE
 * dan SD Card 32GB dicantumkan pada Type B, padahal keduanya berlaku umum,
 * sementara pilihan LoRa justru milik Type C. Dua situs milik perusahaan
 * yang sama menyebut spesifikasi berbeda adalah masalah nyata saat dokumen
 * penawaran diperiksa.
 *
 * `included` menyebut yang sudah masuk paket — ini pertanyaan pertama
 * bagian pengadaan, dan sebelumnya tidak terjawab di mana pun.
 */
const HARDWARE = [
  {
    type: 'Type A',
    name: 'Universal Logger',
    desc: 'Perangkat paling lengkap. Untuk titik yang butuh baca sekaligus kendali — rumah pompa, titik kritis distribusi, dan instalasi industri.',
    included: 'Sensor tekanan + sensor debit TUF-2000M',
    battery: 'LiFePO4 25Ah — bertahan 3–5 hari tanpa matahari',
    specs: [
      'RS485 Modbus, 1–5 alamat',
      '2× analog 4–20mA · 2× digital input',
      '2× relay 10A @ 250VAC untuk kendali',
      'Konfigurasi diubah dari cloud, tanpa datang ke lokasi',
    ],
  },
  {
    type: 'Type B',
    name: 'Pipeline Logger',
    desc: 'Versi ringkas untuk pemantauan tekanan pipa distribusi. Paling banyak dipakai PDAM karena bisa langsung dipasang tanpa penyesuaian.',
    included: 'Sensor tekanan',
    battery: 'LiFePO4 8Ah — bertahan 1–2 hari tanpa matahari',
    specs: [
      '2× analog 4–20mA · 2× digital input',
      'Panel surya 20WP, kaca tempered 1,2mm',
      'Siap pasang di titik DMA',
    ],
  },
  {
    type: 'Type C',
    name: 'Custom Solution',
    desc: 'Dirakit mengikuti kebutuhan lokasi. Dipilih ketika sinyal seluler tidak tersedia, atau ketika titik pantaunya banyak dan berdekatan.',
    included: 'Ditentukan saat pemesanan',
    battery: 'Kapasitas menyesuaikan kebutuhan',
    specs: [
      'GSM 4G/2G atau LoRa — dipilih saat pemesanan',
      'LoRa berjalan tanpa SIM card di tiap titik',
      'RS485, analog, relay, dan sensor bersifat opsional',
    ],
  },
]

/** Berlaku untuk ketiga tipe. Garansi sengaja ditaruh paling depan. */
const HARDWARE_COMMON = [
  { label: 'Garansi', value: '12 bulan perangkat · 24 bulan baterai' },
  { label: 'Ketahanan', value: 'IP65 — tahan hujan dan debu lapangan' },
  { label: 'Panel surya', value: '20WP, efisiensi ≥18%, IP67, usia pakai 25+ tahun' },
  { label: 'Interval kirim', value: '2 menit, dapat diatur sesuai kebutuhan' },
  { label: 'Saat jaringan putus', value: 'Data ditahan di SD card, dikirim ulang setelah tersambung' },
  { label: 'Pembaruan', value: 'Firmware diperbarui jarak jauh (OTA), tanpa kunjungan' },
  { label: 'Keamanan', value: 'Enkripsi TLS/SSL dari perangkat sampai server' },
]

/**
 * Dokumentasi pemasangan di lapangan.
 *
 * Foto hanya ditampilkan bila folder slotnya berisi; galeri yang separuh
 * kosong lebih merugikan daripada tidak ada galeri sama sekali.
 */
const FIELD_PHOTOS = [
  { slot: 'helios_kegiatan_tiang_terpasang', caption: 'Tiang monitoring terpasang lengkap dengan panel surya dan boks sensor' },
  { slot: 'helios_kegiatan_node_sensor', caption: 'Node dengan rangkaian sensor terpasang penuh' },
  { slot: 'helios_kegiatan_lokasi_pdam', caption: 'Unit terpasang di salah satu lokasi PDAM' },
  { slot: 'helios_kegiatan_rakit_tiang', caption: 'Perakitan tiang galvanis sebelum didirikan' },
  { slot: 'helios_kegiatan_bracket_panel', caption: 'Pemasangan bracket panel surya' },
  { slot: 'helios_kegiatan_pondasi', caption: 'Persiapan pondasi di titik pemasangan' },
  { slot: 'helios_kegiatan_angkat_tiang', caption: 'Pendirian tiang di lokasi' },
] as const

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
 * CATATAN ANGKA: nilai pada "Spesifikasi Platform" (respons API, throughput,
 * ketersediaan) diselaraskan dengan yang diterbitkan Devetek sendiri di
 * iot.devetek.app. Angka 99,9% dibingkai sebagai komitmen layanan, bukan
 * hasil pengukuran — pembedaan itu penting karena keduanya diperlakukan
 * berbeda dalam dokumen kontrak. Bila suatu saat ada laporan ketersediaan
 * yang benar-benar diukur, tambahkan periodenya di sini.
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
            subtitle="Kami merancang perangkatnya sendiri, bukan membeli lalu memberi merek. Itu sebabnya sensor, baterai, dan panel suryanya sudah cocok satu sama lain sejak dari kotaknya."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {HARDWARE.map((hw, i) => (
            <Reveal key={hw.type} delay={i * 0.08} className="h-full">
              <Card padding="lg" accent="orange" interactive={false} className="h-full">
                <span className="font-mono text-body-sm text-brand-orange-ink">{hw.type}</span>
                <h3 className="mt-2 font-heading text-h3 font-semibold text-text-primary">
                  {hw.name}
                </h3>
                <p className="mt-2 font-body text-body-sm leading-relaxed text-text-secondary">
                  {hw.desc}
                </p>

                {/* Dua hal yang paling sering ditanyakan lebih dulu:
                    apa yang sudah termasuk, dan tahan berapa lama. */}
                <dl className="mt-5 space-y-3 rounded-md border border-border bg-surface-soft p-4">
                  <div className="flex flex-col-reverse">
                    <dt className="font-body text-body-sm text-text-muted">Sudah termasuk</dt>
                    <dd className="font-body text-body-sm font-semibold text-text-primary">
                      {hw.included}
                    </dd>
                  </div>
                  <div className="flex flex-col-reverse border-t border-border pt-3">
                    <dt className="font-body text-body-sm text-text-muted">Daya cadangan</dt>
                    <dd className="font-body text-body-sm font-semibold text-text-primary">
                      {hw.battery}
                    </dd>
                  </div>
                </dl>

                <ul className="mt-4 space-y-1.5">
                  {hw.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2">
                      <span
                        aria-hidden
                        className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-blue"
                      />
                      <span className="font-body text-body-sm text-text-secondary">{spec}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Yang berlaku untuk ketiga tipe — sebelumnya tercecer di kartu
            masing-masing sehingga terbaca seolah pembeda antar-tipe. */}
        <Reveal delay={0.16}>
          <div className="mt-6 overflow-hidden rounded-md border border-border bg-surface-white shadow-card">
            <div className="border-b border-border px-6 py-4">
              <h3 className="font-heading font-bold text-text-primary">
                Berlaku untuk ketiga tipe
              </h3>
            </div>
            <dl className="grid md:grid-cols-2 lg:grid-cols-3">
              {HARDWARE_COMMON.map((c, i) => (
                <div
                  key={c.label}
                  className={`border-b border-border px-6 py-4 lg:border-r ${
                    i === 0 ? 'bg-brand-orange-pale' : ''
                  }`}
                >
                  <dt className="font-body text-body-sm text-text-muted">{c.label}</dt>
                  <dd className="mt-1 font-body text-body-sm font-medium leading-relaxed text-text-primary">
                    {c.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Section>

      {/* Dokumentasi lapangan — bukti bahwa perangkatnya benar-benar dipasang,
          bukan hanya ada di katalog. */}
      {FIELD_PHOTOS.some((f) => slotImageOrNull(f.slot as ImageSlot)) && (
        <Section tone="white">
          <Reveal>
            <SectionHeading
              label="Dokumentasi Lapangan"
              title="Bukan render katalog — ini pemasangan sesungguhnya"
              subtitle="Dari penyiapan pondasi, perakitan tiang, sampai unit berdiri dan mengirim data. Seluruhnya dikerjakan tim yang sama."
            />
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FIELD_PHOTOS.map((photo, i) => {
              const src = slotImageOrNull(photo.slot as ImageSlot)
              if (!src) return null

              // Foto pertama diberi porsi lebih besar: itu gambaran utuh
              // hasil pemasangan, sisanya potongan prosesnya.
              const featured = i === 0

              return (
                <li
                  key={photo.slot}
                  className={featured ? 'sm:col-span-2 sm:row-span-2' : undefined}
                >
                  <Reveal delay={Math.min(i, 6) * 0.06} className="h-full">
                    <figure className="flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface-white shadow-card">
                      <div
                        className={`relative w-full overflow-hidden bg-surface-soft ${
                          featured ? 'aspect-[4/3] sm:flex-1' : 'aspect-[4/5]'
                        }`}
                      >
                        <Image
                          src={src}
                          alt={photo.caption}
                          fill
                          sizes={
                            featured
                              ? '(max-width: 640px) 100vw, 50vw'
                              : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                          }
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="px-4 py-3 font-body text-body-sm leading-snug text-text-secondary">
                        {photo.caption}
                      </figcaption>
                    </figure>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </Section>
      )}

      <Section tone="soft">
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
              <SectionHeading
                label="Spesifikasi Platform"
                title="Angka yang kami pegang"
                as="h2"
              />
              <p className="measure mt-3 font-body text-body-sm text-text-muted">
                Spesifikasi dan komitmen layanan platform, sebagaimana diterbitkan di situs
                produk HELIOS. Ketersediaan 99,9% adalah komitmen layanan, bukan rata-rata
                pengukuran satu periode tertentu.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="rounded-md border border-border bg-surface-white p-5">
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
