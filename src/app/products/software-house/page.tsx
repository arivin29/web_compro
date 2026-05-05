'use client'

import Link from 'next/link'
import { Globe, DeviceMobile, MapTrifold, Airplane, GraduationCap, House, Tree, PaintBrush, Megaphone } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'

const SERVICES = [
  { title: 'Web Application', icon: Globe, desc: 'Aplikasi web custom dengan teknologi modern' },
  { title: 'Mobile App', icon: DeviceMobile, desc: 'Android & iOS native atau cross-platform' },
  { title: 'Web GIS', icon: MapTrifold, desc: 'Pemetaan, spatial database, foto udara' },
  { title: 'Aircraft Maintenance (AMIMS)', icon: Airplane, desc: 'Manajemen part helikopter dan pesawat' },
  { title: 'EDUTECH', icon: GraduationCap, desc: 'Sistem akademik sekolah' },
  { title: 'HOMPES', icon: House, desc: 'Platform pesantren digital' },
  { title: 'Sistem Perkebunan', icon: Tree, desc: 'Manajemen perkebunan custom' },
  { title: 'Creative Design', icon: PaintBrush, desc: 'UI/UX, logo, video animasi' },
  { title: 'Digital Marketing', icon: Megaphone, desc: 'SEO, ads, social media management' },
]

const PROCESS = [
  { step: '01', title: 'Define', desc: 'Konsultasi & identifikasi kebutuhan' },
  { step: '02', title: 'Design', desc: 'Perancangan UI/UX sesuai kebutuhan' },
  { step: '03', title: 'Develop', desc: 'Pengembangan dan testing' },
  { step: '04', title: 'Deploy', desc: 'Launching dan dukungan berkelanjutan' },
]

export default function SoftwareHousePage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <Badge>CUSTOM DEVELOPMENT</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-brand-dark">
              Kami Bangun Solusi Digital Anda
            </h1>
            <p className="mt-4 text-lg text-text-body max-w-3xl">
              Dari ide hingga produksi — tim kami merancang, mengembangkan, dan mendukung aplikasi custom sesuai kebutuhan bisnis Anda.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading title="Layanan Kami" subtitle="Beragam solusi untuk berbagai kebutuhan" />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon
              return (
                <ScrollReveal key={svc.title} delay={i * 0.06}>
                  <div className="glass-card p-6 h-full">
                    <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-4">
                      <Icon size={24} weight="bold" className="text-orange-600" />
                    </div>
                    <h4 className="font-heading font-semibold text-brand-dark">{svc.title}</h4>
                    <p className="mt-2 text-sm text-text-body">{svc.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading title="Proses Kerja" subtitle="Metodologi yang teruji" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-red to-accent flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{p.step}</span>
                  </div>
                  <h4 className="font-heading font-bold text-brand-dark">{p.title}</h4>
                  <p className="mt-2 text-sm text-text-body">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-brand-red/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
              Punya Ide Aplikasi?
            </h2>
            <p className="mt-4 text-text-body text-lg">
              Ceritakan kebutuhan Anda, dan kami akan wujudkan menjadi produk digital berkualitas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-brand-red to-accent text-white font-semibold hover:shadow-lg transition-shadow">
                Mulai Konsultasi
              </Link>
              <a href="https://wa.me/628562302229" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/5 transition-colors">
                WhatsApp Langsung
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
