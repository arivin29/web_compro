'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Code,
  Drop,
  GearSix,
  Handshake,
  MapPinArea,
  WifiHigh,
} from '@phosphor-icons/react'
import { Badge, Card, FeatureCard, Reveal, Section, SectionHeading } from '@/components/ui'

/** Produk unggulan — mendapat card lebih besar dan permukaan navy (blueprint §8.2). */
const FLAGSHIP = {
  title: 'Solusi PDAM Terintegrasi',
  description:
    'Ekosistem lengkap untuk digitalisasi PDAM — dari billing pelanggan, manajemen aset berbasis peta, hingga monitoring IoT real-time. Satu platform, semua terhubung.',
  href: '/products/pdam-suite',
  modules: [
    { icon: Drop, name: 'D-IBS', desc: 'Billing, baca meter, penagihan, keuangan & HR' },
    { icon: MapPinArea, name: 'D-ASSET', desc: 'WebGIS pengelolaan aset & infrastruktur' },
    { icon: WifiHigh, name: 'HELIOS', desc: 'Sensor IoT dan monitoring 24/7' },
  ],
}

const OTHER_PRODUCTS = [
  {
    icon: GearSix,
    title: 'DEVETEK ERP',
    description: 'Sistem ERP modular dengan dynamic approval, microservice, dan payment gateway.',
    href: '/products/erp',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Web app, mobile app, Web GIS, dan solusi digital sesuai kebutuhan spesifik.',
    href: '/products/software-house',
  },
  {
    icon: Handshake,
    title: 'Konsultasi & Pengadaan',
    description: 'IT consulting, pengadaan barang IT, maintenance, dan instalasi.',
    href: '/products/consulting',
  },
]

/** Produk & layanan — blueprint §17 poin 4 dan 5. */
export default function ProductsSection() {
  return (
    <Section tone="white">
      <Reveal>
        <SectionHeading
          label="Produk & Layanan"
          title="Solusi lengkap untuk transformasi digital"
          subtitle="Satu produk unggulan untuk sektor air minum, ditopang layanan enterprise lain yang memakai fondasi teknologi sama."
        />
      </Reveal>

      {/* ── Card unggulan ── */}
      <Reveal>
        <Card
          tone="dark"
          accent="gradient"
          href={FLAGSHIP.href}
          padding="none"
          className="mt-12"
        >
          <div className="p-6 md:p-9">
            <Badge variant="inverse" dot>
              Produk Unggulan
            </Badge>

            <h3 className="mt-4 font-heading text-h2 font-bold text-text-inverse">
              {FLAGSHIP.title}
            </h3>
            <p className="measure mt-3 font-body text-body-lg text-text-inverse-muted">
              {FLAGSHIP.description}
            </p>

            <ul className="mt-8 grid gap-3 md:grid-cols-3">
              {FLAGSHIP.modules.map((m) => {
                const Icon = m.icon
                return (
                  <li
                    key={m.name}
                    className="rounded-md border border-white/12 bg-white/[0.06] px-4 py-3.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon size={18} className="text-brand-blue-soft" />
                      <span className="font-heading text-body-sm font-bold text-white">
                        {m.name}
                      </span>
                    </div>
                    <p className="mt-1.5 font-body text-body-sm leading-relaxed text-text-inverse-muted">
                      {m.desc}
                    </p>
                  </li>
                )
              })}
            </ul>

            <span className="mt-7 inline-flex items-center gap-2 font-body text-body-sm font-semibold text-brand-orange">
              Lihat detail Solusi PDAM
              <ArrowRight
                size={15}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </div>
        </Card>
      </Reveal>

      {/* ── Produk lain ── */}
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {OTHER_PRODUCTS.map((p, i) => {
          const Icon = p.icon
          return (
            <Reveal key={p.title} delay={i * 0.08}>
              <FeatureCard
                icon={<Icon size={21} />}
                title={p.title}
                description={p.description}
                href={p.href}
                className="h-full"
              />
            </Reveal>
          )
        })}
      </div>

      <Reveal>
        <p className="mt-8 font-body text-body-sm text-text-secondary">
          Belum yakin mana yang sesuai?{' '}
          <Link href="/products" className="link-inline font-semibold">
            Bandingkan seluruh produk
          </Link>
          .
        </p>
      </Reveal>
    </Section>
  )
}
