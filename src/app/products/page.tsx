'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Drop, WifiHigh, GearSix, Code, Handshake } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const PRODUCTS = [
  {
    slug: 'pdam-suite',
    label: 'Unggulan',
    title: 'Solusi PDAM Terintegrasi',
    subtitle: 'D-IBS + D-ASSET + HELIOS',
    description: 'Billing, baca meter, penagihan, keuangan, HR hingga dashboard eksekutif — dalam satu platform terpadu untuk PDAM.',
    icon: Drop,
    href: '/products/pdam-suite',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    slug: 'helios',
    title: 'DEVETEK HELIOS',
    subtitle: 'Platform IoT',
    description: 'Monitor, analisa, dan kendalikan infrastruktur kritis. Cloud platform + hardware sensor untuk monitoring 24/7.',
    icon: WifiHigh,
    href: '/products/helios',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    slug: 'erp',
    title: 'DEVETEK ERP',
    subtitle: 'ERP Modular',
    description: 'Sistem ERP modular dengan dynamic approval, microservice architecture, dan integrasi payment gateway.',
    icon: GearSix,
    href: '/products/erp',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    slug: 'software-house',
    title: 'Custom Software Development',
    subtitle: 'Software House',
    description: 'Web app, mobile app, Web GIS, dan solusi digital custom untuk kebutuhan spesifik bisnis Anda.',
    icon: Code,
    href: '/products/software-house',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    slug: 'consulting',
    title: 'Konsultasi & Pengadaan',
    subtitle: 'IT Services',
    description: 'IT consulting, pengadaan barang IT & elektronik, maintenance, dan instalasi untuk sektor publik & swasta.',
    icon: Handshake,
    href: '/products/consulting',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
]

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-[72px] bg-gradient-to-br from-brand-blue-dark to-brand-blue overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20 mb-6">
              PRODUK & LAYANAN
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.1] text-white">
              Solusi Digital End-to-End
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Dari sensor di lapangan hingga laporan eksekutif — semua dalam ekosistem Devetek. 
              Kami menyediakan teknologi, SDM, dan tata kelola dalam satu paket lengkap.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #1565C0 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => {
              const Icon = product.icon
              return (
                <ScrollReveal key={product.slug} delay={index * 0.1}>
                  <Link href={product.href} className="block h-full">
                    <div className="bg-white border border-border rounded-2xl p-8 h-full group hover:shadow-card-hover hover:border-brand-blue/30 transition-all duration-300 hover:-translate-y-1">
                      {product.label && (
                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-brand-blue/10 text-brand-blue mb-4">
                          {product.label}
                        </span>
                      )}
                      <div className={`w-14 h-14 rounded-xl ${product.bgColor} flex items-center justify-center mb-5`}>
                        <Icon size={28} weight="bold" className={product.color} />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-brand-blue font-medium mt-1">{product.subtitle}</p>
                      <p className="mt-3 text-text-secondary text-sm leading-relaxed">{product.description}</p>
                      <div className="mt-5 flex items-center text-brand-blue font-medium text-sm group-hover:translate-x-1 transition-transform">
                        Selengkapnya <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-brand-blue-dark to-brand-blue overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Satu Ekosistem, Semua Terintegrasi
            </h2>
            <p className="text-base text-white/70 max-w-xl mx-auto">
              D-IBS (Billing) ↔ D-ASSET (WebGIS) ↔ HELIOS (IoT) — terhubung dalam satu database terpusat
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { name: 'D-IBS', desc: 'Billing & Operasional' },
                { name: 'D-ASSET', desc: 'WebGIS & Aset' },
                { name: 'HELIOS', desc: 'IoT & Sensor' },
              ].map((item) => (
                <div key={item.name} className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                  <h4 className="font-heading font-bold text-white">{item.name}</h4>
                  <p className="text-sm text-white/70 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <div className="px-6 py-3 rounded-lg bg-white/10 border border-white/15">
                <p className="text-sm font-medium text-white">🔗 Database Terpusat</p>
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
              Butuh Solusi Khusus?
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              Konsultasikan kebutuhan Anda dengan tim kami — gratis, tanpa komitmen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue-dark hover:shadow-lg transition-all">
                Hubungi Kami
              </Link>
              <a href="https://wa.me/628562302229" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-brand-blue text-brand-blue font-semibold hover:bg-brand-blue/5 transition-colors">
                WhatsApp Langsung
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
