'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Drop, MapPinArea, WifiHigh, GearSix, Code, Handshake } from '@phosphor-icons/react'
import Badge from '@/components/ui/Badge'
import ScrollReveal from '@/components/ui/ScrollReveal'

const FLAGSHIP = {
  title: 'Solusi PDAM Terintegrasi',
  description:
    'Ekosistem lengkap untuk digitalisasi PDAM — dari billing pelanggan, manajemen aset berbasis peta, hingga monitoring IoT real-time. Satu platform, semua terhubung.',
  href: '/products/pdam-suite',
  modules: [
    { icon: Drop, name: 'D-IBS', desc: 'Billing, baca meter, penagihan, keuangan & HR' },
    { icon: MapPinArea, name: 'D-ASSET', desc: 'WebGIS pengelolaan aset & infrastruktur' },
    { icon: WifiHigh, name: 'HELIOS', desc: 'IoT sensor monitoring 24/7' },
  ],
}

const OTHER_PRODUCTS = [
  {
    icon: GearSix,
    title: 'DEVETEK ERP',
    description: 'Sistem ERP modular — dynamic approval, microservice, payment gateway.',
    href: '/products/erp',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Web app, mobile app, Web GIS, dan solusi digital sesuai kebutuhan.',
    href: '/products/software-house',
  },
  {
    icon: Handshake,
    title: 'Konsultasi & Pengadaan',
    description: 'IT consulting, pengadaan, maintenance, dan instalasi.',
    href: '/products/consulting',
  },
]

export default function ProductsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#EBF5FF]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center gap-3 mb-4 text-brand-blue text-sm uppercase tracking-widest font-medium justify-center">
              <span className="w-8 h-px bg-brand-blue" />
              PRODUK & LAYANAN
              <span className="w-8 h-px bg-brand-blue" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-dark mb-4">
              Solusi Lengkap untuk Transformasi Digital
            </h2>
          </div>
        </ScrollReveal>

        {/* Flagship — PDAM Suite */}
        <ScrollReveal>
          <Link href={FLAGSHIP.href} className="block mb-8">
            <div className="bg-gradient-to-br from-brand-blue-dark to-brand-blue rounded-2xl p-8 md:p-10 text-white relative overflow-hidden group">
              <div aria-hidden className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-white/20 text-white border-white/30">Produk Unggulan</Badge>
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3">{FLAGSHIP.title}</h3>
                <p className="text-white/75 max-w-2xl mb-8 leading-relaxed">{FLAGSHIP.description}</p>

                <div className="grid md:grid-cols-3 gap-4">
                  {FLAGSHIP.modules.map((mod) => (
                    <div key={mod.name} className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <mod.icon className="text-white/80" size={20} />
                        <span className="font-heading font-bold text-sm">{mod.name}</span>
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed">{mod.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1 mt-6 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  Lihat Detail Produk PDAM
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </ScrollReveal>

        {/* Other products */}
        <div className="grid md:grid-cols-3 gap-6">
          {OTHER_PRODUCTS.map((product, i) => (
            <ScrollReveal key={product.title} delay={i * 0.1}>
              <Link href={product.href} className="block h-full">
                <div className="group bg-white border border-border rounded-2xl p-6 h-full flex flex-col hover:border-brand-blue/30 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                    <product.icon className="text-brand-blue" size={22} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-brand-dark mb-2">{product.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">{product.description}</p>
                  <div className="flex items-center gap-1 mt-4 text-sm text-brand-blue font-medium group-hover:gap-2 transition-all">
                    Selengkapnya
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
