'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Drop, MapPin, WifiHigh, GearSix, Code, Handshake } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'

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
    <main className="pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Badge>PRODUK & LAYANAN</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-brand-dark">
              Solusi Digital End-to-End
            </h1>
            <p className="mt-4 text-lg text-text-body max-w-2xl mx-auto">
              Dari sensor di lapangan hingga laporan eksekutif — semua dalam ekosistem Devetek. 
              Kami menyediakan teknologi, SDM, dan tata kelola dalam satu paket lengkap.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => {
              const Icon = product.icon
              return (
                <ScrollReveal key={product.slug} delay={index * 0.1}>
                  <Link href={product.href} className="block h-full">
                    <div className="glass-card p-8 h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      {product.label && (
                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-brand-red/10 text-brand-red mb-4">
                          {product.label}
                        </span>
                      )}
                      <div className={`w-14 h-14 rounded-xl ${product.bgColor} flex items-center justify-center mb-5`}>
                        <Icon size={28} weight="bold" className={product.color} />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-brand-dark group-hover:text-accent transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-accent font-medium mt-1">{product.subtitle}</p>
                      <p className="mt-3 text-text-body text-sm leading-relaxed">{product.description}</p>
                      <div className="mt-5 flex items-center text-accent font-medium text-sm group-hover:translate-x-1 transition-transform">
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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <SectionHeading
              title="Satu Ekosistem, Semua Terintegrasi"
              subtitle="D-IBS (Billing) ↔ D-ASSET (WebGIS) ↔ HELIOS (IoT) — terhubung dalam satu database terpusat"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { name: 'D-IBS', desc: 'Billing & Operasional', color: 'border-blue-200 bg-blue-50' },
                { name: 'D-ASSET', desc: 'WebGIS & Aset', color: 'border-green-200 bg-green-50' },
                { name: 'HELIOS', desc: 'IoT & Sensor', color: 'border-orange-200 bg-orange-50' },
              ].map((item) => (
                <div key={item.name} className={`p-6 rounded-xl border-2 ${item.color}`}>
                  <h4 className="font-heading font-bold text-brand-dark">{item.name}</h4>
                  <p className="text-sm text-text-body mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <div className="px-6 py-3 rounded-lg bg-slate-100 border border-slate-200">
                <p className="text-sm font-medium text-brand-dark">🔗 Database Terpusat</p>
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
              Butuh Solusi Khusus?
            </h2>
            <p className="mt-4 text-text-body text-lg">
              Konsultasikan kebutuhan Anda dengan tim kami — gratis, tanpa komitmen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-brand-red to-accent text-white font-semibold hover:shadow-lg transition-shadow">
                Hubungi Kami
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
