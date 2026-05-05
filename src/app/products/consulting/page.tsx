'use client'

import Link from 'next/link'
import { Desktop, ComputerTower, Wrench, HardDrives, Toolbox, CheckCircle } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'

const SERVICES = [
  { title: 'IT Consulting', icon: Desktop, desc: 'Konsultasi kebutuhan teknologi dan infrastruktur' },
  { title: 'Pengadaan IT & Elektronik', icon: ComputerTower, desc: 'Server, UPS, PAC, Network, Genset, CCTV' },
  { title: 'Perangkat Office', icon: HardDrives, desc: 'Komputer, laptop, printer, scanner, monitor' },
  { title: 'Maintenance & Services', icon: Wrench, desc: 'Dukungan teknis, garansi produk, purna jual' },
  { title: 'Instalasi & Preventive Maintenance', icon: Toolbox, desc: 'Setup dan pemeliharaan berkala' },
]

export default function ConsultingPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <Badge>KONSULTASI & PENGADAAN</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-brand-dark">
              Mitra Terpercaya untuk Pengadaan & Layanan IT
            </h1>
            <p className="mt-4 text-lg text-text-body max-w-3xl">
              Berpengalaman dalam pengadaan barang dan jasa untuk sektor swasta dan pemerintahan. Harga terbaik tanpa mengorbankan kualitas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading title="Layanan" subtitle="Solusi lengkap untuk kebutuhan IT Anda" />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon
              return (
                <ScrollReveal key={svc.title} delay={i * 0.08}>
                  <div className="glass-card p-6 h-full">
                    <div className="w-12 h-12 rounded-lg bg-rose-50 flex items-center justify-center mb-4">
                      <Icon size={24} weight="bold" className="text-rose-600" />
                    </div>
                    <h4 className="font-heading font-semibold text-brand-dark">{svc.title}</h4>
                    <p className="mt-2 text-sm text-text-body leading-relaxed">{svc.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading title="Mengapa Kami?" subtitle="Keunggulan layanan konsultasi & pengadaan Devetek" />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-12 grid md:grid-cols-2 gap-4">
              {[
                'Pengalaman pengadaan sektor publik & swasta',
                'Harga kompetitif dengan kualitas terjamin',
                'Dukungan teknis dan after-sales',
                'Vendor resmi berbagai brand IT',
                'Proses pengadaan transparan',
                'Tim teknis berpengalaman',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-lg bg-surface-alt">
                  <CheckCircle size={20} weight="bold" className="text-green-500 flex-shrink-0" />
                  <span className="text-sm text-text-body">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-brand-red/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
              Butuh Konsultasi atau Penawaran?
            </h2>
            <p className="mt-4 text-text-body text-lg">
              Hubungi kami untuk konsultasi gratis dan penawaran terbaik.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-brand-red to-accent text-white font-semibold hover:shadow-lg transition-shadow">
                Minta Penawaran
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
