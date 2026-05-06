'use client'

import Link from 'next/link'
import {
  Globe, DeviceMobile, MapTrifold, Airplane, GraduationCap,
  House, Tree, PaintBrush, MegaphoneSimple, Code, Terminal,
  Laptop, Database, PuzzlePiece, Rocket, GitBranch, Stack,
  CheckCircle, ArrowRight, Headset, UserFocus, Trophy, Checks,
  FileCode, Layout,
} from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'

// ─── Core capabilities ─────────────────────────────────────────────────────
const CAPABILITIES = [
  {
    icon: Globe,
    title: 'Web Application',
    desc: 'Dashboard, admin panel, portal, e-commerce — dibangun dengan React/Next.js, Angular, atau framework sesuai kebutuhan.',
    tags: ['Next.js', 'React', 'Angular', 'Laravel'],
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: DeviceMobile,
    title: 'Mobile App',
    desc: 'Aplikasi Android & iOS dari codebase tunggal. Atau native untuk performa maksimal dan akses fitur hardware penuh.',
    tags: ['Flutter', 'React Native', 'Android Native'],
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: MapTrifold,
    title: 'WebGIS & Spatial',
    desc: 'Aplikasi pemetaan, spatial database, analisis foto udara, dan visualisasi data geografis berbasis web.',
    tags: ['OpenLayers', 'PostGIS', 'GeoJSON', 'SHP'],
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: Database,
    title: 'Sistem & Integrasi',
    desc: 'Integrasi API, microservice, data pipeline, dan sinkronisasi antar sistem yang sudah berjalan.',
    tags: ['REST API', 'PostgreSQL', 'Docker', 'Go / Node.js'],
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: PaintBrush,
    title: 'UI/UX & Creative',
    desc: 'Desain antarmuka, logo, branding, motion graphic, dan video animasi untuk kebutuhan digital.',
    tags: ['Figma', 'UI/UX', 'Branding', 'Motion'],
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: MegaphoneSimple,
    title: 'Digital Marketing',
    desc: 'SEO, iklan berbayar (Meta/Google Ads), pengelolaan media sosial, dan konten digital.',
    tags: ['SEO', 'Meta Ads', 'Google Ads', 'Social Media'],
    color: 'bg-pink-50 text-pink-600',
  },
]

// ─── Vertical products (built & proven) ────────────────────────────────────
const VERTICALS = [
  {
    icon: Airplane,
    title: 'AMIMS',
    subtitle: 'Aircraft Maintenance & Inventory',
    desc: 'Sistem manajemen part, maintenance schedule, dan inventory untuk helikopter dan pesawat.',
    badge: 'Built & Live',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: GraduationCap,
    title: 'EDUTECH',
    subtitle: 'Sistem Akademik Sekolah',
    desc: 'Platform manajemen siswa, kurikulum, absensi, nilai, dan komunikasi guru-orang tua.',
    badge: 'Built & Live',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: House,
    title: 'HOMPES',
    subtitle: 'Platform Pesantren Digital',
    desc: 'Sistem administrasi santri, keuangan, kehadiran, dan komunikasi internal pesantren.',
    badge: 'Built & Live',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Tree,
    title: 'Sistem Perkebunan',
    subtitle: 'Manajemen Kebun Custom',
    desc: 'Monitoring lahan, jadwal tanam, produksi panen, dan laporan untuk perkebunan skala menengah-besar.',
    badge: 'Built & Live',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
]

// ─── Tech stack ────────────────────────────────────────────────────────────
const TECH_STACK = [
  { cat: 'Frontend', items: ['React', 'Next.js', 'Angular', 'Flutter', 'Tailwind CSS'] },
  { cat: 'Backend', items: ['Go', 'Node.js', 'Laravel', 'FastAPI', 'PostgreSQL'] },
  { cat: 'Infra & DevOps', items: ['Docker', 'Kubernetes', 'Firebase', 'VPS / Cloud', 'CI/CD'] },
  { cat: 'GIS & Mapping', items: ['OpenLayers', 'PostGIS', 'GeoServer', 'QGIS', 'Mapbox'] },
]

// ─── Why Devetek diff ──────────────────────────────────────────────────────
const DIFFERENTIATORS = [
  {
    icon: PuzzlePiece,
    title: 'Bukan Agency, Bukan Freelancer',
    desc: 'Tim in-house penuh waktu dengan proses terstruktur. Tidak ada project yang dikerjakan sambil lalu.',
  },
  {
    icon: GitBranch,
    title: 'Satu Tim dari Awal sampai Akhir',
    desc: 'Analyst, designer, developer, dan QA bekerja bersama. Tidak ada serah terima antar vendor yang membuat konteks hilang.',
  },
  {
    icon: Stack,
    title: 'Produk Vertikal Sendiri sebagai Bukti',
    desc: 'AMIMS, EDUTECH, HOMPES, ERP, HELIOS — kami pakai teknologi yang sama untuk produk kami sendiri. Tidak hanya mengerjakan proyek orang lain.',
  },
  {
    icon: Rocket,
    title: 'Support Pasca Delivery',
    desc: 'Tidak menghilang setelah deployment. Tim kami siap untuk maintenance, penambahan fitur, dan eskalasi teknis.',
  },
]

// ─── Process ───────────────────────────────────────────────────────────────
const PROCESS = [
  { num: '01', title: 'Discovery', desc: 'Wawancara kebutuhan, definisi scope, penentuan tech stack, dan estimasi biaya transparan.' },
  { num: '02', title: 'Design', desc: 'Wireframe, UI/UX mockup, dan prototyping interaktif sebelum satu baris kode pun ditulis.' },
  { num: '03', title: 'Develop', desc: 'Sprint iteratif dengan demo berkala. Anda lihat progress nyata, bukan "hampir selesai" terus.' },
  { num: '04', title: 'Deploy & Support', desc: 'Setup server, deployment, training tim pengguna, dan dukungan bug-fixing pasca go-live.' },
]

export default function SoftwareHousePage() {
  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-[72px] bg-gradient-to-br from-brand-blue-dark to-brand-blue overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-0 md:pt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            {/* Left — copy */}
            <ScrollReveal>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 text-white/80 border border-white/20 mb-5">
                Custom Software Development
              </span>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight leading-[1.1] text-white">
                Kami Bangun Solusi Digital Anda
              </h1>
              <p className="mt-5 text-lg text-white/70 max-w-xl leading-relaxed">
                Dari ide hingga produksi — tim in-house kami merancang, mengembangkan, dan mendukung aplikasi custom yang benar-benar sesuai kebutuhan bisnis Anda.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Web App', 'Mobile App', 'WebGIS', 'API Integration', 'UI/UX Design'].map((b) => (
                  <span key={b} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 border border-white/20">{b}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white text-brand-blue font-bold hover:bg-white/90 transition-colors shadow-sm">
                  Diskusikan Proyek Anda <ArrowRight size={16} weight="bold" />
                </Link>
                <a href="https://wa.me/628562302229?text=Halo%20Devetek%2C%20saya%20ingin%20konsultasi%20pembuatan%20aplikasi." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors">
                  WhatsApp Langsung
                </a>
              </div>
            </ScrollReveal>

            {/* Right — code editor mockup */}
            <ScrollReveal delay={0.15} className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.08)' }}>
                {/* Window chrome */}
                <div className="flex items-center justify-between px-4 py-3" style={{ background: '#161b22', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex gap-1">
                    {['solution.ts', 'api.ts', 'types.ts'].map((tab, i) => (
                      <span key={tab} className={`text-[11px] px-3 py-1 rounded-t-md font-mono ${i === 0 ? 'bg-[#0d1117] text-white' : 'text-white/40'}`}>{tab}</span>
                    ))}
                  </div>
                  <div className="w-16" />
                </div>
                {/* Code */}
                <div className="px-6 py-5 font-mono text-[13px] leading-7 select-none" style={{ minHeight: 280 }}>
                  {/* Line numbers + code */}
                  {[
                    { ln: '1', tokens: [{ t: 'import', c: '#ff79c6' }, { t: ' { ', c: '#f8f8f2' }, { t: 'Solution', c: '#8be9fd' }, { t: ' } from ', c: '#f8f8f2' }, { t: '"@devetek/core"', c: '#f1fa8c' }, { t: ';', c: '#f8f8f2' }] },
                    { ln: '2', tokens: [{ t: 'import', c: '#ff79c6' }, { t: ' { ', c: '#f8f8f2' }, { t: 'Client', c: '#8be9fd' }, { t: ', ', c: '#f8f8f2' }, { t: 'Project', c: '#8be9fd' }, { t: ' } from ', c: '#f8f8f2' }, { t: '"@devetek/crm"', c: '#f1fa8c' }, { t: ';', c: '#f8f8f2' }] },
                    { ln: '3', tokens: [] },
                    { ln: '4', tokens: [{ t: 'export', c: '#ff79c6' }, { t: ' async ', c: '#ff79c6' }, { t: 'function ', c: '#50fa7b' }, { t: 'buildSolution', c: '#8be9fd' }, { t: '(', c: '#f8f8f2' }, { t: 'client', c: '#ffb86c' }, { t: ': ', c: '#f8f8f2' }, { t: 'Client', c: '#8be9fd' }, { t: ') {', c: '#f8f8f2' }] },
                    { ln: '5', tokens: [{ t: '  const ', c: '#ff79c6' }, { t: 'project', c: '#f8f8f2' }, { t: ' = await ', c: '#ff79c6' }, { t: 'Solution', c: '#8be9fd' }, { t: '.create({', c: '#f8f8f2' }] },
                    { ln: '6', tokens: [{ t: '    stack', c: '#50fa7b' }, { t: ': [', c: '#f8f8f2' }, { t: '"Next.js"', c: '#f1fa8c' }, { t: ', ', c: '#f8f8f2' }, { t: '"Flutter"', c: '#f1fa8c' }, { t: '],', c: '#f8f8f2' }] },
                    { ln: '7', tokens: [{ t: '    client', c: '#50fa7b' }, { t: ',', c: '#f8f8f2' }, { t: ' timeline', c: '#50fa7b' }, { t: ': ', c: '#f8f8f2' }, { t: '"on-time"', c: '#f1fa8c' }] },
                    { ln: '8', tokens: [{ t: '  });', c: '#f8f8f2' }] },
                    { ln: '9', tokens: [{ t: '  return ', c: '#ff79c6' }, { t: 'project', c: '#f8f8f2' }, { t: '.deploy();', c: '#f8f8f2' }] },
                    { ln: '10', tokens: [{ t: '}', c: '#f8f8f2' }] },
                  ].map((line) => (
                    <div key={line.ln} className="flex gap-4">
                      <span className="w-5 text-right shrink-0" style={{ color: '#495670' }}>{line.ln}</span>
                      <span>
                        {line.tokens.map((tok, ti) => (
                          <span key={ti} style={{ color: tok.c }}>{tok.t}</span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Status bar */}
                <div className="flex items-center justify-end gap-4 px-5 py-2" style={{ background: '#161b22', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="flex items-center gap-1.5 text-[11px]" style={{ color: '#28c840' }}>
                    <span className="w-2 h-2 rounded-full bg-[#28c840]" />TypeScript
                  </span>
                  <span className="text-[11px]" style={{ color: '#495670' }}>UTF-8</span>
                  <span className="text-[11px]" style={{ color: '#495670' }}>Devetek Solutions</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Why Different ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2">Kenapa Devetek?</p>
            <SectionHeading
              title="Software House yang Juga Punya Produk Sendiri"
              subtitle="Kami bukan hanya mengerjakan proyek klien — kami juga membangun produk kami sendiri dengan teknologi yang sama. Itu yang membuat tim kami beda."
            />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFFERENTIATORS.map((d, i) => {
              const Icon = d.icon
              return (
                <ScrollReveal key={d.title} delay={i * 0.08}>
                  <div className="bg-surface-alt border border-border rounded-2xl p-6 h-full">
                    <div className="w-11 h-11 rounded-lg bg-white border border-border flex items-center justify-center mb-4 shadow-sm">
                      <Icon size={22} weight="bold" className="text-brand-blue" />
                    </div>
                    <h4 className="font-heading font-semibold text-brand-dark">{d.title}</h4>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">{d.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Capabilities ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2">Kemampuan Kami</p>
            <SectionHeading
              title="Apa yang Bisa Kami Bangun"
              subtitle="Tim full-stack kami mengerjakan seluruh spektrum kebutuhan digital — dari kode sampai desain hingga infrastruktur."
            />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon
              return (
                <ScrollReveal key={cap.title} delay={i * 0.07}>
                  <div className="bg-white border border-border rounded-2xl p-6 h-full hover:border-brand-blue/30 hover:shadow-md transition-all">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${cap.color}`}>
                      <Icon size={24} weight="bold" />
                    </div>
                    <h4 className="font-heading font-semibold text-brand-dark">{cap.title}</h4>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">{cap.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cap.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-surface-alt border border-border text-text-secondary">{t}</span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Vertical Products ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2">Produk Vertikal</p>
            <SectionHeading
              title="Solusi Industri yang Sudah Jalan"
              subtitle="Beberapa vertikal sudah kami kerjakan dan digunakan secara aktif — bisa diadaptasi atau dikembangkan lebih lanjut sesuai kebutuhan Anda."
            />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VERTICALS.map((v, i) => {
              const Icon = v.icon
              return (
                <ScrollReveal key={v.title} delay={i * 0.08}>
                  <div className="bg-surface-alt border border-border rounded-2xl p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-lg bg-white border border-border flex items-center justify-center shadow-sm">
                        <Icon size={22} weight="bold" className="text-brand-blue" />
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${v.badgeColor}`}>{v.badge}</span>
                    </div>
                    <h4 className="font-heading font-bold text-brand-dark">{v.title}</h4>
                    <p className="text-xs font-semibold text-brand-blue mt-0.5 mb-3">{v.subtitle}</p>
                    <p className="text-sm text-text-secondary leading-relaxed flex-1">{v.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Tech Stack ───────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-surface-alt border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-5 text-center">Tech Stack</p>
            <p className="text-center font-heading font-bold text-xl text-brand-dark mb-10">Teknologi yang Kami Kuasai</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-6">
            {TECH_STACK.map((group, i) => (
              <ScrollReveal key={group.cat} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-border p-5">
                  <p className="text-xs font-bold tracking-widest uppercase text-text-secondary mb-3">{group.cat}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded-full text-xs font-medium bg-surface-alt border border-border text-brand-dark">{item}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2">Cara Kerja</p>
            <SectionHeading
              title="Proses yang Transparan, Bukan Black Box"
              subtitle="Anda tahu apa yang sedang dikerjakan, kapan selesai, dan kemana anggaran pergi — di setiap tahap."
            />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="relative bg-surface-alt border border-border rounded-2xl p-6 h-full">
                  <span className="absolute top-5 right-5 text-4xl font-extrabold text-brand-blue/10 font-heading leading-none">{step.num}</span>
                  <h4 className="font-heading font-bold text-xl text-brand-dark pr-10">{step.title}</h4>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Commitment / Guarantee ───────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2">Komitmen Kami</p>
            <SectionHeading title="Yang Anda Dapatkan Bersama Devetek" subtitle="" />
          </ScrollReveal>
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {[
              'Estimasi biaya transparan sebelum proyek dimulai',
              'Akses ke progress pengerjaan secara berkala',
              'Source code adalah milik Anda sepenuhnya',
              'Dokumentasi teknis dan user guide disertakan',
              'Fix bug gratis selama 30 hari pasca go-live',
              'Tidak ada hidden cost atau biaya lisensi bulanan',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white border border-border rounded-xl px-5 py-4">
                <CheckCircle size={18} weight="fill" className="text-brand-blue mt-0.5 shrink-0" />
                <span className="text-sm text-brand-dark font-medium">{item}</span>
              </div>
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
              Punya Ide Aplikasi?<br />Kami Siap Wujudkan.
            </h2>
            <p className="mt-5 text-white/70 text-lg">
              Ceritakan kebutuhan Anda — dalam 1 sesi diskusi kami sudah bisa berikan estimasi awal dan rekomendasi teknologi yang tepat.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-brand-blue font-bold hover:bg-white/90 transition-colors shadow-sm">
                Mulai Konsultasi <ArrowRight size={16} weight="bold" />
              </Link>
              <a href="https://wa.me/628562302229?text=Halo%20Devetek%2C%20saya%20ingin%20diskusi%20pembuatan%20aplikasi%20custom." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors">
                WhatsApp Langsung
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
