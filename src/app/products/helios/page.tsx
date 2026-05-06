'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  WifiHigh, CloudArrowUp, Cpu, Bell, ChartLine, Shield,
  CheckCircle, ArrowRight, MapPin, Robot, FileText,
  HardDrives, PlugsConnected, Broadcast, ArrowsClockwise,
  Brain, Handshake, Gauge, TrendUp, Drop, Factory,
  Plant, Lightning, ArrowCircleRight,
} from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'

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

export default function HeliosPage() {
  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-[72px] bg-gradient-to-br from-brand-blue-dark to-brand-blue overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-0 md:pt-24">
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <ScrollReveal>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 text-white/80 border border-white/20 mb-5">
                DEVETEK HELIOS — Platform IoT
              </span>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight leading-[1.1] text-white">
                Monitor. Analisa.<br />Kendalikan.
              </h1>
              <p className="mt-5 text-lg text-white/70 max-w-xl leading-relaxed">
                Platform IoT end-to-end untuk infrastruktur kritis. Koneksikan device apapun via HTTP, TCP, atau MQTT — tidak terkunci vendor tertentu.
              </p>
              {/* stat badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {['30+ Fitur', '6+ Tipe Widget', '34 Entitas', '3 Arsitektur Layanan'].map((b) => (
                  <span key={b} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 border border-white/20">{b}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white text-brand-blue font-bold hover:bg-white/90 transition-colors shadow-sm">
                  Jadwalkan Demo <ArrowRight size={16} weight="bold" />
                </Link>
                <a href="https://iot.devetek.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors">
                  Coba Live Demo
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="hidden lg:block">
              <Image
                src="https://iot.devetek.app/img/hero/dashboard.jpg"
                alt="Devetek Helios Dashboard"
                width={700}
                height={420}
                className="w-full rounded-t-2xl shadow-2xl object-cover"
                priority
                unoptimized
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Dua Pilar ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2">Ekosistem Devetek</p>
            <SectionHeading
              title="Dua Pilar. Satu Solusi."
              subtitle="DEVETEK menggabungkan kekuatan hardware di lapangan dengan platform cloud cerdas — memberikan Anda visibilitas penuh atas seluruh infrastruktur."
            />
          </ScrollReveal>
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {/* Cloud */}
            <ScrollReveal delay={0.05}>
              <div className="h-full border border-brand-blue/20 rounded-2xl p-8 bg-blue-50/40 flex flex-col">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                    <CloudArrowUp size={22} weight="bold" className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-widest uppercase text-brand-blue">Cloud Platform</p>
                    <h3 className="font-heading font-bold text-brand-dark text-xl leading-tight">DEVETEK HELIOS</h3>
                  </div>
                </div>
                <p className="text-xs text-text-secondary mt-1 mb-5">Subscription per Node</p>
                <ul className="space-y-3 flex-1">
                  {[
                    'Dashboard custom & widget builder',
                    'WebGIS dengan OpenLayers + PostGIS',
                    'AI Analytics & Early Warning System',
                    'Smart Alert via WhatsApp, Email, Telegram',
                    'Laporan otomatis PDF/Excel',
                    'Integrasi server pelanggan (Webhook, API)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <CheckCircle size={16} weight="fill" className="text-brand-blue mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://iot.devetek.app/features.html" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline">
                  Pelajari Platform <ArrowRight size={14} weight="bold" />
                </a>
              </div>
            </ScrollReveal>
            {/* Hardware */}
            <ScrollReveal delay={0.1}>
              <div className="h-full border border-border rounded-2xl p-8 bg-surface-alt flex flex-col">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-lg bg-brand-dark/10 flex items-center justify-center">
                    <Cpu size={22} weight="bold" className="text-brand-dark" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-widest uppercase text-text-secondary">Hardware</p>
                    <h3 className="font-heading font-bold text-brand-dark text-xl leading-tight">DEVETEK IoT Node</h3>
                  </div>
                </div>
                <p className="text-xs text-text-secondary mt-1 mb-5">Mata & Tangan di Lapangan</p>
                <ul className="space-y-3 flex-1">
                  {[
                    'Konektivitas GSM 4G / 2G + BLE 5.0',
                    'Solar powered 20WP + baterai LiFePO4',
                    'RS485 Modbus RTU + Analog 4-20mA',
                    'Enclosure IP65 weatherproof',
                    'Penyimpanan offline (SD Card 32GB)',
                    '3 varian: Type A, B, C',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <CheckCircle size={16} weight="fill" className="text-text-secondary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://iot.devetek.app/hardware.html" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark hover:underline">
                  Lihat Hardware <ArrowRight size={14} weight="bold" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 3-Step Value Prop ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2">Tiga Pilar</p>
            <SectionHeading
              title="Platform Monitoring yang Terintegrasi"
              subtitle="Dari data mentah sensor hingga keputusan operasional — semua dalam satu ekosistem."
            />
          </ScrollReveal>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              { icon: Gauge, title: 'Pantau Segalanya', desc: 'Data real-time dari sensor, node & gateway dalam satu dashboard. Tidak ada area gelap dalam operasi Anda.' },
              { icon: Brain, title: 'Analisa Secara Cerdas', desc: 'Deteksi anomali berbasis ML & prediksi untuk wawasan prediktif. Tahu sebelum masalah terjadi.' },
              { icon: Broadcast, title: 'Bertindak Seketika', desc: 'Alert otomatis, perintah device, dan pembuatan laporan untuk respons cepat. Kendalikan dari mana saja.' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-border p-8 h-full">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                      <Icon size={26} weight="bold" className="text-brand-blue" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-brand-dark">{item.title}</h3>
                    <p className="mt-3 text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 6 Platform Features ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2">Fitur Platform</p>
            <SectionHeading
              title="Fitur Unggulan"
              subtitle="Toolkit lengkap untuk monitoring, analisis, dan pengendalian infrastruktur IoT Anda."
            />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLATFORM_FEATURES.map((feat, i) => {
              const Icon = feat.icon
              return (
                <ScrollReveal key={feat.title} delay={i * 0.07}>
                  <a href={feat.href} target="_blank" rel="noopener noreferrer" className="group block h-full bg-white border border-border rounded-2xl shadow-sm p-6 hover:border-brand-blue/40 hover:shadow-md transition-all">
                    <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-brand-blue/10 transition-colors">
                      <Icon size={22} weight="bold" className="text-brand-blue" />
                    </div>
                    <h4 className="font-heading font-semibold text-brand-dark">{feat.title}</h4>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">{feat.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity">
                      Selengkapnya <ArrowRight size={12} weight="bold" />
                    </span>
                  </a>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Screenshots ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2">Tampilan Platform</p>
            <SectionHeading
              title="Lihat Helios Beraksi"
              subtitle="Screenshot langsung dari platform — dashboard, peta, laporan, dan lainnya."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {SCREENSHOTS.map((ss, i) => (
              <ScrollReveal key={ss.label} delay={i * 0.07}>
                <a href="https://iot.devetek.app/screenshots.html" target="_blank" rel="noopener noreferrer" className="group flex flex-col rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow bg-white">
                  <div className="relative w-full h-44 overflow-hidden bg-surface-alt">
                    <Image
                      src={ss.src}
                      alt={ss.label}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                  <div className="px-4 py-2.5">
                    <p className="text-xs font-medium text-brand-dark truncate">{ss.label}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="https://iot.devetek.app/screenshots.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline">
              Lihat Semua Screenshot <ArrowRight size={14} weight="bold" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Industries ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2">Solusi Industri</p>
            <SectionHeading
              title="Dibangun untuk Industri Kritis"
              subtitle="Devetek Helios beradaptasi dengan kebutuhan monitoring dan kontrol unik setiap industri."
            />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon
              return (
                <ScrollReveal key={ind.title} delay={i * 0.08}>
                  {ind.active ? (
                    <a href={ind.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col h-full bg-white border-2 border-brand-blue rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                        <Icon size={22} weight="bold" className="text-brand-blue" />
                      </div>
                      <h4 className="font-heading font-semibold text-brand-dark">{ind.title}</h4>
                      <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">{ind.desc}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-blue">
                        Jelajahi Solusi <ArrowCircleRight size={14} weight="bold" />
                      </span>
                    </a>
                  ) : (
                    <div className="flex flex-col h-full bg-surface-alt border border-border rounded-2xl p-6 opacity-70">
                      <div className="w-11 h-11 rounded-lg bg-white border border-border flex items-center justify-center mb-4">
                        <Icon size={22} weight="bold" className="text-text-secondary" />
                      </div>
                      <h4 className="font-heading font-semibold text-brand-dark">{ind.title}</h4>
                      <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">{ind.desc}</p>
                      <span className="mt-4 inline-block px-3 py-1 rounded-full text-xs font-bold bg-white border border-border text-text-secondary w-fit">
                        Segera Hadir
                      </span>
                    </div>
                  )}
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 4-Step Pipeline ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2">Cara Kerja</p>
            <SectionHeading
              title="Dari Sensor ke Insight dalam 4 Langkah"
              subtitle=""
            />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PIPELINE_STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <ScrollReveal key={step.title} delay={i * 0.1}>
                  <div className="relative bg-white border border-border rounded-2xl p-6 h-full">
                    <span className="absolute top-5 right-5 text-4xl font-extrabold text-brand-blue/10 font-heading leading-none">{step.num}</span>
                    <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                      <Icon size={22} weight="bold" className="text-brand-blue" />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-brand-dark">{step.title}</h4>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Open Connectivity ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2">Konektivitas Terbuka</p>
            <SectionHeading
              title="Apapun Device-nya, Helios Siap Terima"
              subtitle="Tidak terkunci vendor tertentu. Selama device Anda support HTTP, TCP, atau MQTT — langsung konek ke Helios."
            />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {CONNECTIVITY.map((c, i) => {
              const Icon = c.icon
              return (
                <ScrollReveal key={c.proto} delay={i * 0.1}>
                  <div className="bg-surface-alt border border-border rounded-2xl p-7 h-full">
                    <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center mb-5 shadow-sm">
                      <Icon size={24} weight="bold" className="text-brand-blue" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-brand-dark">{c.proto}</h3>
                    <p className="mt-3 text-sm text-text-secondary leading-relaxed">{c.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium bg-white border border-border text-brand-dark">{t}</span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Device Compatibility ────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-surface-alt border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-5 text-center">Kompatibilitas</p>
            <p className="text-center font-heading font-bold text-xl text-brand-dark mb-8">Device & Tools yang Didukung</p>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {COMPATIBILITY.map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-border text-brand-dark shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Performance Stats ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2 text-center">Performa</p>
            <p className="text-center font-heading font-extrabold text-3xl md:text-4xl text-brand-dark mb-12">Angka yang Berbicara</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08}>
                <div className="text-center p-8 rounded-2xl bg-surface-alt border border-border">
                  <p className="font-heading font-extrabold text-3xl md:text-4xl text-brand-blue">{s.value}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-text-secondary">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonial ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-6">Testimoni</p>
            <Handshake size={40} weight="duotone" className="text-brand-blue mx-auto mb-6 opacity-60" />
            <blockquote className="text-xl md:text-2xl font-heading font-medium text-brand-dark leading-relaxed">
              &ldquo;Devetek Helios membantu kami memantau 200+ node tersebar di 5 DMA dengan real-time dashboard yang intuitif dan alert system yang responsif.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm font-semibold text-text-secondary">— Tim Teknis, PT Bakti Air Indonesia</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Hardware Lineup ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2">Hardware</p>
            <SectionHeading
              title="Hardware Lineup"
              subtitle="Sensor tangguh untuk berbagai kebutuhan lapangan."
            />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {HARDWARE.map((hw, i) => (
              <ScrollReveal key={hw.type} delay={i * 0.1}>
                <div className="bg-white border border-border border-t-4 border-t-brand-blue rounded-2xl shadow-sm p-8 h-full flex flex-col">
                  <span className="text-xs font-extrabold text-brand-blue uppercase tracking-wider">{hw.type}</span>
                  <h3 className="mt-2 text-xl font-heading font-bold text-brand-dark">{hw.name}</h3>
                  <p className="mt-3 text-sm text-text-secondary flex-1">{hw.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {hw.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-sm text-text-secondary">
                        <CheckCircle size={16} weight="fill" className="text-green-500 shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="https://iot.devetek.app/hardware.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline">
              Spesifikasi lengkap hardware <ArrowRight size={14} weight="bold" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-blue-dark to-brand-blue">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <TrendUp size={44} weight="duotone" className="text-white/50 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white leading-tight">
              Siap Mentransformasi<br />Operasi IoT Anda?
            </h2>
            <p className="mt-5 text-white/70 text-lg">
              Jadwalkan demo gratis dan lihat bagaimana Devetek Helios dapat mengoptimalkan infrastruktur Anda.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-brand-blue font-bold hover:bg-white/90 transition-colors shadow-sm">
                Jadwalkan Demo Gratis <ArrowRight size={16} weight="bold" />
              </Link>
              <a href="https://wa.me/628562302229?text=Halo%20Devetek%2C%20saya%20tertarik%20dengan%20HELIOS%20IoT%20Platform." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors">
                WhatsApp Langsung
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
