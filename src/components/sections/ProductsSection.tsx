'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Drop, MapPinArea, WifiHigh, GearSix, Code, Handshake } from '@phosphor-icons/react'
import Card from '@/components/ui/Card'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const PRODUCT_CARDS = [
  {
    icon: Drop,
    title: 'D-IBS — Sistem PDAM Terintegrasi',
    description:
      'Billing, baca meter, penagihan, keuangan, HR hingga dashboard eksekutif — dalam satu platform terpadu untuk PDAM.',
    href: '/products/pdam-suite',
  },
  {
    icon: MapPinArea,
    title: 'D-ASSET — WebGIS Pengelolaan Aset',
    description:
      'Pemetaan aset, manajemen pelanggan, survey lapangan, dan monitoring infrastruktur PDAM dalam peta interaktif.',
    href: '/products/pdam-suite',
  },
  {
    icon: WifiHigh,
    title: 'DEVETEK HELIOS — Platform IoT',
    description:
      'Monitor, analisa, dan kendalikan infrastruktur kritis. Cloud platform + hardware sensor untuk monitoring 24/7.',
    href: '/products/helios',
  },
  {
    icon: GearSix,
    title: 'DEVETEK ERP',
    description:
      'Sistem ERP modular dengan dynamic approval, microservice architecture, dan integrasi payment gateway.',
    href: '/products/erp',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description:
      'Web app, mobile app, Web GIS, dan solusi digital custom untuk kebutuhan spesifik bisnis Anda.',
    href: '/products/software-house',
  },
  {
    icon: Handshake,
    title: 'Konsultasi & Pengadaan',
    description:
      'IT consulting, pengadaan barang IT & elektronik, maintenance, dan instalasi untuk sektor publik & swasta.',
    href: '/products/consulting',
  },
]

export default function ProductsSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            label="PRODUK & LAYANAN"
            title="Solusi Lengkap untuk Kebutuhan Digital Anda"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {PRODUCT_CARDS.map((product, index) => (
            <ScrollReveal key={product.title} delay={index * 0.1}>
              <Link href={product.href} className="block h-full">
                <Card className="h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-5">
                    <product.icon className="text-brand-blue" size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brand-dark mb-3">
                    {product.title}
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-1 mt-5 text-sm text-brand-blue font-medium">
                    Selengkapnya
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
