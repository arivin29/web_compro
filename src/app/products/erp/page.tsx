'use client'

import Link from 'next/link'
import {
  Users, Package, GearSix,
  CheckCircle, ArrowRight, Headset, Handshake, MegaphoneSimple,
  ClipboardText, Wallet, GlobeSimple, PresentationChart, Truck,
  SealCheck, ShieldCheck, Bell, TrendUp, Sparkle,
} from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'

// ─── 10 Module Groups with sub-menus ──────────────────────────────────────
const MODULE_GROUPS = [
  {
    icon: GearSix,
    title: 'Generals',
    subtitle: 'Tools & Resource Management',
    color: 'bg-slate-100 text-slate-600',
    submodules: ['Notifikasi approval & ticketing', 'Helpdesk & ticketing', 'Tutorial', 'Monitoring API'],
  },
  {
    icon: Users,
    title: 'HRGA',
    subtitle: 'Human Resource & General Affair',
    color: 'bg-blue-50 text-blue-600',
    submodules: ['Kelola organisasi & perusahaan', 'HR Dashboard & rekapitulasi', 'Data pegawai', 'Absensi, cuti & izin'],
  },
  {
    icon: Package,
    title: 'EQS & Inventory',
    subtitle: 'EQS, Asset & Stock Management',
    color: 'bg-orange-50 text-orange-600',
    submodules: ['Stok & gudang produksi', 'Manajemen asset', 'Audit & stok opname', 'Penerimaan barang', 'Jadwal & jadwal maintenance', 'Master konfigurasi'],
  },
  {
    icon: Handshake,
    title: 'CRM',
    subtitle: 'Customer Relationship Management',
    color: 'bg-green-50 text-green-600',
    submodules: ['Data kontak customer care', 'Data pelanggan', 'Rencana & realisasi kontak', 'Data vendor', 'Data mitra klaim'],
  },
  {
    icon: MegaphoneSimple,
    title: 'Sales & Marketing',
    subtitle: 'Sales & Marketing Management',
    color: 'bg-pink-50 text-pink-600',
    submodules: ['Prospek & kontak', 'Monitoring incoming call', 'Data penawaran', 'Monitoring aktivitas AE', 'Pengaturan harga & kelompok', 'Manajemen kontrak'],
  },
  {
    icon: ClipboardText,
    title: 'Operasional',
    subtitle: 'Pekerjaan & Quality Control',
    color: 'bg-yellow-50 text-yellow-600',
    submodules: ['Data lokasi kontrak', 'Jadwal rencana kerja', 'Kehadiran operator onsite', 'Laporan work order', 'QC inspeksi', 'Manajemen keluhan pelanggan'],
  },
  {
    icon: Truck,
    title: 'Purchasing',
    subtitle: 'Pembelian & Pengadaan Barang',
    color: 'bg-teal-50 text-teal-600',
    submodules: ['Purchase Order (PO)', 'Work Order (WO)', 'Cash Advance (CA)', 'Return & PI', 'Vendor management'],
  },
  {
    icon: Wallet,
    title: 'Keuangan',
    subtitle: 'Pemasukan & Pengeluaran',
    color: 'bg-emerald-50 text-emerald-600',
    submodules: ['Accounting & cash advance', 'PPh23', 'Cash management (IN/OUT)', 'Rencana anggaran', 'Invoice & faktur', 'Verifikasi & validasi tagihan', 'Distribusi & penagihan', 'Validasi pembayaran masuk'],
  },
  {
    icon: GlobeSimple,
    title: 'Website',
    subtitle: 'Company Profile & E-Commerce',
    color: 'bg-indigo-50 text-indigo-600',
    submodules: ['Builder admin website', 'Manajemen produk katalog'],
  },
  {
    icon: PresentationChart,
    title: 'Management Report',
    subtitle: 'Laporan untuk Manajemen',
    color: 'bg-purple-50 text-purple-600',
    submodules: ['Laporan penjualan', 'Laporan omset & pemasukan', 'Laporan tagihan'],
  },
]

const ADVANTAGES = [
  { icon: Sparkle, title: 'Full Customizable & Modular', desc: 'Aktifkan hanya modul yang dibutuhkan. Tidak membayar fitur yang tidak dipakai.' },
  { icon: SealCheck, title: 'Dynamic Multi-Level Approval', desc: 'Alur persetujuan fleksibel sesuai hierarki organisasi Anda — tanpa hard-coded.' },
  { icon: ShieldCheck, title: 'Role Management Granular', desc: 'Kontrol akses per user, per divisi, per menu. Data sensitif terlindungi.' },
  { icon: Bell, title: 'Notifikasi Multi-channel', desc: 'Email, WhatsApp, dan SMS otomatis untuk approval, alert, dan reminder penting.' },
  { icon: GearSix, title: 'Arsitektur Microservice', desc: 'Setiap modul independen. Skalabilitas tinggi, downtime minimal.' },
  { icon: TrendUp, title: 'Integrasi Payment Gateway', desc: 'Terhubung ke sistem pembayaran eksternal dan bank untuk rekonsiliasi otomatis.' },
]

const STATS = [
  { value: '16K+', label: 'Work Order Diproses' },
  { value: '50+', label: 'Sub-menu & Fitur' },
  { value: 'v4.0', label: 'Versi Saat Ini' },
  { value: 'Auto', label: 'Email & WA Notifikasi' },
]

export default function ERPPage() {
  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-[20px] bg-gradient-to-br from-brand-blue-dark to-brand-blue overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-6 pb-0 md:pt-24 md:pb-12">
          <div className="grid lg:grid-cols-2 gap-10">
            <ScrollReveal>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 text-white/80 border border-white/20 mb-5">
                DEVETEK ERP V2
              </span>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight leading-[1.1] text-white">
                ERP Modular<br />untuk Bisnis Modern
              </h1>
              <p className="mt-5 text-lg text-white/70 max-w-xl leading-relaxed">
                Sistem ERP custom yang fleksibel. Aktifkan modul sesuai kebutuhan — HR, keuangan, operasional, CRM, hingga laporan manajemen dalam satu platform terintegrasi.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['10+ Modul Bisnis', '50+ Sub-menu', 'Dynamic Approval', 'Microservice'].map((b) => (
                  <span key={b} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 border border-white/20">{b}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white text-brand-blue font-bold hover:bg-white/90 transition-colors shadow-sm">
                  Konsultasi Gratis <ArrowRight size={16} weight="bold" />
                </Link>
                <a href="https://wa.me/628562302229?text=Halo%20Devetek%2C%20saya%20ingin%20konsultasi%20kebutuhan%20ERP." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors">
                  WhatsApp Langsung
                </a>
              </div>
            </ScrollReveal>
            {/* ERP sidebar preview mockup */}
            <ScrollReveal delay={0.15} className="hidden lg:block">
              <div className="rounded-t-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#1B2B6B]">
                {/* Topbar */}
                <div className="flex items-center gap-3 px-4 py-3 bg-[#152258] border-b border-white/10">
                  <span className="font-heading font-black text-white text-sm tracking-tight">ERP<span className="text-brand-blue">V2</span></span>
                  <div className="flex-1 bg-white/10 rounded-md px-3 py-1 text-xs text-white/40">Cari disini...</div>
                  <div className="w-7 h-7 rounded-full bg-brand-blue/30 flex items-center justify-center">
                    <Users size={14} className="text-white/70" />
                  </div>
                </div>
                <div className="flex">
                  {/* Sidebar */}
                  <div className="w-44 bg-[#1a2960] border-r border-white/10 py-3 shrink-0">
                    {[
                      { label: 'HRGA', items: ['Perusahaan', 'HR Dashboard', 'Pegawai', 'Kehadiran'] },
                      { label: 'OPERASIONAL', items: ['Kontrak Lokasi', 'Jadwal', 'Work Order', 'QC Inspeksi'] },
                      { label: 'KEUANGAN', items: ['Accounting', 'Cash Mgmt', 'Invoice', 'Anggaran'] },
                    ].map((group) => (
                      <div key={group.label} className="mb-3">
                        <p className="px-3 text-[9px] font-extrabold tracking-widest text-white/30 uppercase mb-1">{group.label}</p>
                        {group.items.map((item) => (
                          <div key={item} className={`px-3 py-1.5 text-xs text-white/70 hover:bg-white/5 cursor-pointer flex items-center gap-2 ${item === 'Jadwal' ? 'bg-brand-blue/30 text-white font-semibold rounded-sm mx-1' : ''}`}>
                            <span className="w-1 h-1 rounded-full bg-white/30 shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  {/* Main content preview */}
                  <div className="flex-1 bg-white/5 p-4">
                    <div className="bg-[#1B2B6B] rounded-lg px-4 py-3 mb-3">
                      <p className="text-white font-bold text-sm tracking-wide">JADWAL</p>
                      <p className="text-white/50 text-[10px]">Status / Semua</p>
                    </div>
                    <div className="flex gap-1.5 mb-3 flex-wrap">
                      {['Semua (2240)', 'Dijadwalkan (775)', 'Progres (67)', 'Selesai (155)'].map((tab, i) => (
                        <span key={tab} className={`px-2 py-1 rounded text-[9px] font-semibold ${i === 0 ? 'bg-brand-blue text-white' : 'bg-white/10 text-white/60'}`}>{tab}</span>
                      ))}
                    </div>
                    <div className="space-y-1.5">
                      {['SPKO/0895.../5/2026', '10138450887...', 'TF88P/03809...'].map((row, i) => (
                        <div key={row} className="flex items-center gap-2 bg-white/5 rounded px-2 py-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${i === 1 ? 'bg-brand-blue' : 'bg-green-400'}`} />
                          <span className="text-[9px] text-white/70 truncate">{row}</span>
                          <span className="ml-auto text-[8px] px-1.5 py-0.5 rounded bg-white/10 text-white/50">JKT</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Stats ────────────────────────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.07}>
                <div className="text-center">
                  <p className="font-heading font-extrabold text-2xl md:text-3xl text-brand-blue">{s.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Proof Section: WO Dashboard ───────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-3">Terbukti di Lapangan</p>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-dark leading-tight">
                Dari v3 ke v4 —<br />Terus Berkembang Bersama Klien
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Devetek ERP bukan produk sekali jadi. Setiap rilis membawa penyempurnaan nyata dari feedback pengguna di lapangan — mulai dari alur Work Order, monitoring kehadiran operator, hingga rekap eksekutif.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: '16.822', label: 'Work Order Mobile tercatat' },
                  { value: '251', label: 'WO dalam status Tunggu' },
                  { value: 'v4.0.3', label: 'Versi stabil saat ini' },
                  { value: '3 fase', label: 'Email: Ready → Send → Delivered' },
                ].map((item) => (
                  <div key={item.label} className="bg-white border border-border rounded-xl p-4">
                    <p className="font-heading font-extrabold text-xl text-brand-blue">{item.value}</p>
                    <p className="mt-1 text-xs text-text-secondary leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            {/* WO Dashboard CSS Mockup */}
            <ScrollReveal delay={0.15}>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-white">
                {/* Topbar */}
                <div className="flex items-center gap-3 px-4 py-2.5 bg-[#152258]">
                  <span className="font-heading font-black text-white text-sm tracking-tight">ERP<span className="text-[#5E8FC8]">V2</span></span>
                  <div className="flex-1 bg-white/10 rounded px-3 py-1 text-[10px] text-white/40">Cari disini...</div>
                </div>
                <div className="flex" style={{ minHeight: 280 }}>
                  {/* Sidebar */}
                  <div className="w-40 bg-[#1a2960] py-3 shrink-0">
                    {[
                      { section: 'KONTRAK LOKASI', items: ['Kontrak Lokasi', 'Dashboard', 'Random Check WO', 'Kehadiran Operator'] },
                      { section: 'WO MOBILE V4.0.3', items: ['Cek Data', 'List by Status', 'List Close', 'WO Aktifitas Action'] },
                      { section: 'REKAP', items: ['Monitoring Rayap', 'WO & Jadwal'] },
                    ].map((g) => (
                      <div key={g.section} className="mb-3">
                        <p className="px-3 text-[8px] font-extrabold tracking-widest text-white/30 uppercase mb-1">{g.section}</p>
                        {g.items.map((item) => (
                          <div key={item} className={`px-3 py-[5px] text-[10px] flex items-center gap-1.5 ${
                            item === 'Dashboard' ? 'bg-[#1B2B6B] text-white font-semibold' : 'text-white/60'
                          }`}>
                            <span className="w-1 h-1 rounded-full bg-current opacity-50 shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  {/* Main area */}
                  <div className="flex-1 bg-gray-50 p-3">
                    <div className="bg-[#1B2B6B] rounded-lg px-4 py-2.5 mb-3">
                      <p className="text-white font-bold text-xs tracking-wide">DASHBOARD</p>
                      <p className="text-white/50 text-[9px]">Work Order v4.0.3</p>
                    </div>
                    {/* Stat cards row */}
                    <div className="grid grid-cols-4 gap-1.5 mb-2">
                      {[
                        { label: 'Semua', val: '16.822', hi: true },
                        { label: 'Open', val: '82', hi: false },
                        { label: 'Tunggu', val: '251', hi: false },
                        { label: 'Close', val: '16.489', hi: false },
                      ].map((card) => (
                        <div key={card.label} className={`rounded border p-2 text-center ${
                          card.hi ? 'bg-white border-brand-blue/30' : 'bg-white border-border'
                        }`}>
                          <p className={`font-bold text-xs ${card.hi ? 'text-brand-blue' : 'text-brand-dark'}`}>{card.val}</p>
                          <p className="text-[8px] text-text-secondary mt-0.5">{card.label}</p>
                        </div>
                      ))}
                    </div>
                    {/* Email pipeline */}
                    <div className="bg-white border border-border rounded p-2">
                      <p className="text-[9px] font-bold text-text-secondary mb-1.5 uppercase tracking-wide">Email Pipeline</p>
                      <div className="flex gap-1.5">
                        {['Email-Ready', 'Email-Send', 'Email-Failed'].map((e, i) => (
                          <div key={e} className={`flex-1 rounded p-1.5 text-center text-[8px] font-semibold ${
                            i === 0 ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                            : i === 1 ? 'bg-green-50 text-green-700 border border-green-200'
                            : 'bg-red-50 text-red-600 border border-red-200'
                          }`}>{e}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Why Custom ERP ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2">Kenapa ERP Custom?</p>
            <SectionHeading
              title="Bukan ERP Template yang Dipaksakan"
              subtitle="ERP template memaksa bisnis Anda menyesuaikan prosesnya ke sistem. Devetek ERP justru sebaliknya — sistemnya yang mengikuti cara kerja bisnis Anda."
            />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Tidak Bayar Fitur yang Tidak Dipakai', desc: 'Aktifkan hanya modul yang relevan. Mulai dari 2–3 modul, tambah seiring pertumbuhan bisnis.', icon: SealCheck },
              { title: 'Approval Sesuai Struktur Anda', desc: 'Alur persetujuan multi-level dikonfigurasi sesuai hierarki organisasi nyata — bukan template generik.', icon: ClipboardText },
              { title: 'Integrasi ke Sistem Existing', desc: 'Terkoneksi ke sistem billing, payment gateway, atau tools yang sudah berjalan tanpa mengganggu operasi.', icon: GearSix },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-border p-7 h-full">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                      <Icon size={24} weight="bold" className="text-brand-blue" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-brand-dark">{item.title}</h3>
                    <p className="mt-3 text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Module Groups ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2">Modul Bisnis</p>
            <SectionHeading
              title="10 Grup Modul, 50+ Fitur"
              subtitle="Dari HR hingga keuangan, operasional hingga laporan eksekutif — semua terintegrasi dalam satu platform."
            />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {MODULE_GROUPS.map((group, i) => {
              const Icon = group.icon
              return (
                <ScrollReveal key={group.title} delay={i * 0.06}>
                  <div className="bg-white border border-border rounded-2xl p-5 h-full hover:border-brand-blue/30 hover:shadow-md transition-all">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${group.color}`}>
                        <Icon size={20} weight="bold" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-brand-dark text-sm leading-tight">{group.title}</h4>
                        <p className="text-[11px] text-text-secondary leading-snug">{group.subtitle}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {group.submodules.map((sub) => (
                        <li key={sub} className="flex items-start gap-2 text-xs text-text-secondary">
                          <CheckCircle size={13} weight="fill" className="text-brand-blue mt-[1px] shrink-0" />
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Keunggulan Teknis ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2">Keunggulan</p>
            <SectionHeading
              title="Dibangun untuk Tumbuh Bersama Bisnis Anda"
              subtitle="Arsitektur modern yang memungkinkan kustomisasi penuh tanpa mengorbankan stabilitas dan keamanan."
            />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((adv, i) => {
              const Icon = adv.icon
              return (
                <ScrollReveal key={adv.title} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl border border-border p-6 h-full">
                    <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                      <Icon size={22} weight="bold" className="text-brand-blue" />
                    </div>
                    <h4 className="font-heading font-semibold text-brand-dark">{adv.title}</h4>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">{adv.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Implementation Steps ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2">Cara Implementasi</p>
            <SectionHeading
              title="Dari Konsultasi ke Go-Live"
              subtitle="Proses implementasi terstruktur agar tidak mengganggu operasi bisnis yang berjalan."
            />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Analisis Kebutuhan', desc: 'Tim kami mempelajari alur bisnis, struktur organisasi, dan kebutuhan spesifik Anda.' },
              { num: '2', title: 'Desain & Konfigurasi', desc: 'Modul dikonfigurasi sesuai kebutuhan: approval flow, role, notifikasi, dan integrasi.' },
              { num: '3', title: 'Training & UAT', desc: 'Training tim pengguna, user acceptance testing, dan penyesuaian akhir sebelum live.' },
              { num: '4', title: 'Go-Live & Support', desc: 'Pendampingan go-live intensif dan dukungan teknis berkelanjutan pasca implementasi.' },
            ].map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="relative bg-surface-alt border border-border rounded-2xl p-6 h-full">
                  <span className="absolute top-5 right-5 text-4xl font-extrabold text-brand-blue/10 font-heading leading-none">{step.num}</span>
                  <h4 className="font-heading font-bold text-lg text-brand-dark pr-8">{step.title}</h4>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-blue-dark to-brand-blue">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Headset size={44} weight="duotone" className="text-white/50 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white leading-tight">
              Siap Modernisasi<br />Operasi Bisnis Anda?
            </h2>
            <p className="mt-5 text-white/70 text-lg">
              Setiap bisnis punya kebutuhan unik. Konsultasikan kebutuhan ERP Anda dan kami rancang solusi yang tepat sasaran.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-brand-blue font-bold hover:bg-white/90 transition-colors shadow-sm">
                Konsultasi Gratis <ArrowRight size={16} weight="bold" />
              </Link>
              <a href="https://wa.me/628562302229?text=Halo%20Devetek%2C%20saya%20ingin%20konsultasi%20kebutuhan%20ERP%20untuk%20bisnis%20saya." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors">
                WhatsApp Langsung
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
