'use client'

import Link from 'next/link'
import { Drop, MapPin, WifiHigh, Receipt, Users, CurrencyDollar, Package, Headset, ChartLine, ArrowRight, CheckCircle } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'

const CHALLENGES = [
  { title: 'Efisiensi Rendah', desc: 'Proses manual dan sistem tidak terintegrasi menyebabkan pemborosan waktu dan sumber daya.' },
  { title: 'Data Tidak Akurat', desc: 'Data pelanggan tersebar di berbagai sistem berbeda, sulit dikonsolidasi.' },
  { title: 'NRW Tinggi', desc: 'Tingginya tingkat kebocoran air dan kesulitan monitoring distribusi secara real-time.' },
]

const MODULES = [
  { title: 'Billing & Loket', icon: Receipt, desc: 'Dashboard monitoring pendapatan & penerimaan. Info detail dan riwayat pelanggan. Manajemen data master pelanggan. Pengolahan tagihan air & non-air.' },
  { title: 'Penagihan Mobile', icon: Users, desc: 'Penagihan langsung ke pelanggan dengan thermal printer Bluetooth. Dashboard real-time. Navigasi GPS ke lokasi pelanggan.' },
  { title: 'Baca Meter Mobile', icon: ChartLine, desc: 'Semi-offline mode untuk area minim sinyal. Multi metode: QR Code, pencarian manual, navigasi otomatis. Foto meter & geoposisi.' },
  { title: 'Hubungan Langganan', icon: Headset, desc: 'Pelaporan via app, web, atau petugas. Klasifikasi otomatis. Tracking status real-time. Dashboard monitoring.' },
  { title: 'Akuntansi & Keuangan', icon: CurrencyDollar, desc: 'Chart of Account berbasis SAKEP. Jurnal umum & khusus. Buku besar otomatis. Laporan keuangan standar PDAM.' },
  { title: 'HR & Absensi', icon: Package, desc: 'Database pegawai digital. Absensi QR code atau GPS. Cuti & izin online. Integrasi payroll. Audit trail lengkap.' },
]

const ADVANTAGES = [
  { title: 'Efisiensi 70%', desc: 'Otomatisasi proses billing dan penagihan mengurangi waktu kerja manual.' },
  { title: 'Data Terpusat', desc: 'Seluruh data pelanggan, pembayaran, dan operasional dalam satu sistem.' },
  { title: 'Real-Time', desc: 'Dashboard monitoring dan laporan otomatis untuk keputusan berbasis data.' },
]

export default function PDAMSuitePage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <Badge>D-IBS</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-brand-dark">
              Sistem PDAM Terintegrasi
            </h1>
            <p className="mt-4 text-lg text-text-body max-w-3xl">
              Pendekatan total: Teknologi + SDM + Tata Kelola. Membuat tata kelola PDAM kecil setara dengan yang besar secara teknologi.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tantangan */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading title="Tantangan PDAM" subtitle="Masalah yang kami pecahkan" />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {CHALLENGES.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="glass-card p-6 border-l-4 border-brand-red">
                  <h3 className="font-heading font-bold text-brand-dark">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-body">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modul D-IBS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading title="Modul D-IBS" subtitle="Sistem lengkap untuk operasional PDAM" />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((mod, i) => {
              const Icon = mod.icon
              return (
                <ScrollReveal key={mod.title} delay={i * 0.08}>
                  <div className="glass-card p-6 h-full">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                      <Icon size={24} weight="bold" className="text-accent" />
                    </div>
                    <h4 className="font-heading font-semibold text-brand-dark">{mod.title}</h4>
                    <p className="mt-2 text-sm text-text-body leading-relaxed">{mod.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* D-ASSET */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <Badge>D-ASSET</Badge>
              <h2 className="mt-4 text-3xl font-heading font-bold text-brand-dark">
                WebGIS Pengelolaan Aset PDAM
              </h2>
              <p className="mt-4 text-text-body leading-relaxed">
                Kelola aset PDAM dalam satu peta interaktif. Pemetaan, manajemen pelanggan, survey lapangan, dan monitoring — terintegrasi dengan DEVETEK HELIOS.
              </p>
              <ul className="mt-6 space-y-3">
                {['Pemetaan aset infrastruktur', 'Manajemen data pelanggan spasial', 'Survey lapangan digital', 'Monitoring jaringan real-time'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-text-body">
                    <CheckCircle size={20} weight="bold" className="text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://webgis-pdam.devetek.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-accent font-medium hover:underline">
                Lihat demo <ArrowRight size={16} />
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl border border-border bg-white p-8 flex items-center justify-center h-64">
                <div className="text-center">
                  <MapPin size={48} weight="bold" className="text-green-500 mx-auto mb-3" />
                  <p className="text-sm text-text-muted">WebGIS Dashboard Preview</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HELIOS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl border border-border bg-surface-alt p-8 flex items-center justify-center h-64">
                <div className="text-center">
                  <WifiHigh size={48} weight="bold" className="text-orange-500 mx-auto mb-3" />
                  <p className="text-sm text-text-muted">IoT Platform Preview</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <Badge>DEVETEK HELIOS</Badge>
              <h2 className="mt-4 text-3xl font-heading font-bold text-brand-dark">
                Monitor. Analisa. Kendalikan.
              </h2>
              <p className="mt-4 text-text-body leading-relaxed">
                Platform IoT end-to-end untuk infrastruktur kritis. Cloud platform cerdas + hardware sensor tangguh — visibilitas penuh atas seluruh operasi Anda.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { type: 'Type A', name: 'Universal Logger', desc: 'Multi-sensor untuk berbagai kebutuhan' },
                  { type: 'Type B', name: 'Pipeline Logger', desc: 'Khusus monitoring pipa dan distribusi' },
                  { type: 'Type C', name: 'Custom Solution', desc: 'Disesuaikan dengan kebutuhan spesifik' },
                ].map((hw) => (
                  <div key={hw.type} className="p-4 rounded-lg bg-orange-50 border border-orange-100">
                    <p className="text-xs font-semibold text-orange-600">{hw.type}</p>
                    <p className="font-heading font-semibold text-brand-dark">{hw.name}</p>
                    <p className="text-sm text-text-body">{hw.desc}</p>
                  </div>
                ))}
              </div>
              <a href="https://iot.devetek.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-accent font-medium hover:underline">
                Lihat demo <ArrowRight size={16} />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading title="Keunggulan" subtitle="Kenapa memilih Solusi PDAM Devetek?" />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {ADVANTAGES.map((adv, i) => (
              <ScrollReveal key={adv.title} delay={i * 0.1}>
                <div className="glass-card p-8 text-center">
                  <h3 className="text-2xl font-heading font-bold text-accent">{adv.title}</h3>
                  <p className="mt-3 text-text-body">{adv.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <SectionHeading title="Integrasi Penuh" subtitle="Tiga sistem, satu ekosistem terpadu" />
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="p-5 rounded-xl bg-blue-50 border border-blue-200 text-center min-w-[140px]">
                <Drop size={32} weight="bold" className="text-blue-600 mx-auto mb-2" />
                <p className="font-heading font-bold text-sm">D-IBS</p>
                <p className="text-xs text-text-muted">Billing</p>
              </div>
              <div className="text-2xl text-text-muted hidden md:block">↔</div>
              <div className="text-2xl text-text-muted md:hidden">↕</div>
              <div className="p-5 rounded-xl bg-green-50 border border-green-200 text-center min-w-[140px]">
                <MapPin size={32} weight="bold" className="text-green-600 mx-auto mb-2" />
                <p className="font-heading font-bold text-sm">D-ASSET</p>
                <p className="text-xs text-text-muted">WebGIS</p>
              </div>
              <div className="text-2xl text-text-muted hidden md:block">↔</div>
              <div className="text-2xl text-text-muted md:hidden">↕</div>
              <div className="p-5 rounded-xl bg-orange-50 border border-orange-200 text-center min-w-[140px]">
                <WifiHigh size={32} weight="bold" className="text-orange-600 mx-auto mb-2" />
                <p className="font-heading font-bold text-sm">HELIOS</p>
                <p className="text-xs text-text-muted">IoT</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-brand-red/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
              Tertarik dengan Solusi PDAM Kami?
            </h2>
            <p className="mt-4 text-text-body text-lg">
              Jadwalkan demo gratis dan lihat bagaimana D-IBS dapat mengoptimalkan operasional PDAM Anda.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-brand-red to-accent text-white font-semibold hover:shadow-lg transition-shadow">
                Jadwalkan Demo
              </Link>
              <a href="https://wa.me/628562302229?text=Halo%20Devetek%2C%20saya%20tertarik%20dengan%20solusi%20PDAM." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/5 transition-colors">
                WhatsApp Langsung
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
