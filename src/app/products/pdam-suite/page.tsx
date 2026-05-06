'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Drop, MapPin, WifiHigh, Receipt, Users, CurrencyDollar, Package, Headset, ChartLine, ArrowRight, CheckCircle, FileText, Gear, Database, Lightning, ShieldCheck } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'

const CHALLENGES = [
  { num: '01', title: 'Efisiensi Operasional Rendah', desc: 'Proses manual dan sistem yang tidak terintegrasi menyebabkan pemborosan waktu dan sumber daya, menurunkan produktivitas pegawai PDAM.' },
  { num: '02', title: 'Data Pelanggan Tidak Akurat', desc: 'Pengelolaan data pelanggan yang tersebar di berbagai sistem berbeda sehingga sulit untuk dikonsolidasi dan divalidasi.' },
  { num: '03', title: 'NRW (Non-Revenue Water) Tinggi', desc: 'Tingginya tingkat kebocoran air dan kesulitan dalam monitoring distribusi air secara real-time ke seluruh jaringan pipa.' },
]

const MODULES = [
  { title: 'Billing & Loket', icon: Receipt, desc: 'Dashboard monitoring pendapatan & penerimaan. Info detail dan riwayat pelanggan. Manajemen data master pelanggan. Pengolahan tagihan air & non-air. Fasilitas cicilan tagihan. Dukungan mutasi pelanggan.' },
  { title: 'Penagihan Mobile', icon: Users, desc: 'Penagihan langsung ke pelanggan dengan thermal printer Bluetooth. Dashboard real-time penerimaan kolektor. Navigasi GPS ke lokasi pelanggan. Pencatatan pembayaran kolektor.' },
  { title: 'Baca Meter Mobile', icon: ChartLine, desc: 'Semi-offline mode untuk area minim sinyal. Multi metode input: QR Code, pencarian manual, navigasi otomatis rute. Foto stand meter & geoposisi otomatis.' },
  { title: 'Hubungan Langganan', icon: Headset, desc: 'Pelaporan pengaduan via app, web, atau petugas. Klasifikasi & eskalasi otomatis. Tracking status real-time. Dashboard monitoring SLA.' },
  { title: 'Akuntansi & Keuangan', icon: CurrencyDollar, desc: 'Chart of Account berbasis SAKEP. Jurnal umum & khusus otomatis. Buku besar real-time. Laporan keuangan standar PDAM. Integrasi pembayaran multi-channel.' },
  { title: 'HR Management', icon: Package, desc: 'Database pegawai digital. Absensi QR code atau GPS. Cuti & izin online. Integrasi payroll. Manajemen SK, jabatan, mutasi. Arsip digital terpusat.' },
]

const REPORTS = [
  'Ringkasan data pelanggan dalam bentuk ikhtisar',
  'Laporan Daftar Rekening Ditagih (DRD)',
  'Laporan LPP (Laporan Penerimaan Pembayaran)',
  'Analisis piutang berdasarkan tanggal batas (cut-off)',
  'Analisis piutang berdasarkan umur tagihan',
  'Efektivitas proses penagihan berdasarkan realisasi',
  'Laporan aktivitas layanan pelanggan',
  'Koreksi pemakaian air oleh pelanggan',
  'Rekapitulasi pemakaian air pelanggan baru (Hublang)',
  'Ringkasan dan rincian laporan penerimaan (LPP)',
]

const ADVANTAGES = [
  { icon: Lightning, title: 'Efisiensi 70%', desc: 'Otomatisasi proses billing dan penagihan mengurangi waktu kerja manual hingga 70%, meningkatkan produktivitas pegawai PDAM.' },
  { icon: Database, title: 'Integrasi Data Terpusat', desc: 'Seluruh data pelanggan, pembayaran, dan operasional terintegrasi dalam satu sistem terpusat yang mudah diakses dari mana saja.' },
  { icon: ChartLine, title: 'Pelaporan Real-Time', desc: 'Dashboard monitoring dan laporan otomatis memudahkan pengambilan keputusan berbasis data secara cepat dan akurat.' },
]

export default function PDAMSuitePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-[72px] bg-gradient-to-br from-brand-blue-dark to-brand-blue overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20 mb-6">
              D-IBS
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.1] text-white">
              Sistem PDAM Terintegrasi
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-3xl">
              Pendekatan total: Teknologi + SDM + Tata Kelola. Membuat tata kelola PDAM kecil setara dengan yang besar secara teknologi.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tantangan */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading title="Permasalahan BUMD Air Minum" subtitle="Tantangan yang kami pecahkan setiap hari" />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {CHALLENGES.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-white border border-border rounded-2xl shadow-sm p-6 h-full">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue text-white font-heading font-bold text-sm mb-4">
                    {item.num}
                  </span>
                  <h3 className="font-heading font-bold text-brand-dark">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.desc}</p>
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
            <SectionHeading title="Modul D-IBS" subtitle="D-IBS tidak hanya sistem, tetapi pendekatan total: Teknologi + SDM + Tata Kelola" />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((mod, i) => {
              const Icon = mod.icon
              return (
                <ScrollReveal key={mod.title} delay={i * 0.08}>
                  <div className="bg-white border border-border rounded-2xl shadow-sm p-6 h-full">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                      <Icon size={24} weight="bold" className="text-brand-blue" />
                    </div>
                    <h4 className="font-heading font-semibold text-brand-dark">{mod.title}</h4>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">{mod.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Billing Screenshot + Laporan */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-brand-blue-dark to-brand-blue overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-lg">
                <img src="/images/projects/pdam-billing.png" alt="D-IBS Billing Dashboard" className="w-full object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-6">
                Laporan-Laporan Utama yang Tersedia
              </h2>
              <ul className="space-y-3">
                {REPORTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} weight="bold" className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
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
              <p className="mt-4 text-text-secondary leading-relaxed">
                Kelola aset PDAM dalam satu peta interaktif. Pemetaan, manajemen pelanggan, survey lapangan, dan monitoring — terintegrasi dengan DEVETEK HELIOS.
              </p>
              <ul className="mt-6 space-y-3">
                {['Pemetaan aset infrastruktur', 'Manajemen data pelanggan spasial', 'Survey lapangan digital', 'Monitoring jaringan real-time'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                    <CheckCircle size={20} weight="bold" className="text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://webgis-pdam.devetek.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-brand-blue font-medium hover:underline">
                Lihat demo <ArrowRight size={16} />
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl border border-border bg-white overflow-hidden shadow-sm">
                <img src="/images/projects/pdam-dashboard.png" alt="D-ASSET WebGIS Dashboard" className="w-full h-64 object-cover" />
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
              <div className="rounded-2xl border border-border bg-white overflow-hidden shadow-sm">
                <img src="/images/projects/helios-dashboard.jpg" alt="HELIOS IoT Platform" className="w-full h-64 object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <Badge>DEVETEK HELIOS</Badge>
              <h2 className="mt-4 text-3xl font-heading font-bold text-brand-dark">
                Monitor. Analisa. Kendalikan.
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Platform IoT end-to-end untuk infrastruktur kritis. Cloud platform cerdas + hardware sensor tangguh — visibilitas penuh atas seluruh operasi Anda.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { type: 'Type A', name: 'Universal Logger', desc: 'Multi-sensor untuk berbagai kebutuhan' },
                  { type: 'Type B', name: 'Pipeline Logger', desc: 'Khusus monitoring pipa dan distribusi' },
                  { type: 'Type C', name: 'Custom Solution', desc: 'Disesuaikan dengan kebutuhan spesifik' },
                ].map((hw) => (
                  <div key={hw.type} className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                    <p className="text-xs font-semibold text-brand-blue">{hw.type}</p>
                    <p className="font-heading font-semibold text-brand-dark">{hw.name}</p>
                    <p className="text-sm text-text-secondary">{hw.desc}</p>
                  </div>
                ))}
              </div>
              <a href="https://iot.devetek.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-brand-blue font-medium hover:underline">
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
            <SectionHeading title="Service D-IBS" subtitle="Kenapa memilih Solusi PDAM Devetek?" />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {ADVANTAGES.map((adv, i) => {
              const Icon = adv.icon
              return (
                <ScrollReveal key={adv.title} delay={i * 0.1}>
                  <div className="bg-white border border-border rounded-2xl shadow-sm p-8 h-full text-center">
                    <div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-5">
                      <Icon size={28} weight="bold" className="text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-brand-blue">{adv.title}</h3>
                    <p className="mt-3 text-sm text-text-secondary leading-relaxed">{adv.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
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
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
              Tertarik dengan Solusi PDAM Kami?
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              Jadwalkan demo gratis dan lihat bagaimana D-IBS dapat mengoptimalkan operasional PDAM Anda.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue-dark hover:shadow-lg transition-all">
                Jadwalkan Demo
              </Link>
              <a href="https://wa.me/628562302229?text=Halo%20Devetek%2C%20saya%20tertarik%20dengan%20solusi%20PDAM." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-brand-blue text-brand-blue font-semibold hover:bg-brand-blue/5 transition-colors">
                WhatsApp Langsung
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
