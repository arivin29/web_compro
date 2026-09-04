'use client'

import Link from 'next/link'
import { ArrowRight, Database, Drop, GearSix, WifiHigh, type Icon } from '@phosphor-icons/react'
import {
  Badge,
  Card,
  FeatureCard,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from '@/components/ui'
import { PRODUCTS } from '@/lib/constants'
import CTASection from '@/components/sections/CTASection'

const ICONS: Record<string, Icon> = { Drop, WifiHigh, GearSix }

/** Tiga sistem yang berbagi satu basis data — inti ekosistem PDAM. */
const ECOSYSTEM = [
  { name: 'D-IBS', desc: 'Billing dan operasional harian' },
  { name: 'D-ASSET', desc: 'WebGIS jaringan dan aset' },
  { name: 'HELIOS', desc: 'Sensor lapangan dan telemetri' },
]

/**
 * Ikhtisar produk — blueprint §18: satu card unggulan PDAM Suite,
 * sisanya dikelompokkan, CTA konsultasi di akhir halaman.
 *
 * Halaman ini hanya memuat produk. Software House dan Konsultasi &
 * Pengadaan pindah ke `/services` karena keduanya jasa: lingkupnya
 * disusun bersama klien, bukan dipilih dari katalog.
 */
export default function ProductsPage() {
  const flagship = PRODUCTS.find((p) => p.slug === 'pdam-suite')!
  const others = PRODUCTS.filter((p) => p.slug !== 'pdam-suite')
  const FlagshipIcon = ICONS[flagship.icon] ?? Drop

  return (
    <>
      <PageHero
        eyebrow="Produk"
        title="Sistem yang sudah berjalan, bukan janji"
        description="Ketiganya dipakai harian di PDAM dan perusahaan. Karena sudah jadi, implementasinya lebih cepat dan lebih murah daripada membangun dari nol."
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Produk' }]}
      />

      <Section tone="white">
        <Reveal>
          <SectionHeading
            label="Produk Unggulan"
            title="Paling banyak dipakai: solusi untuk sektor air minum"
          />
        </Reveal>

        {/* Unggulan dibedakan lewat tone + accent, bukan radius lebih besar */}
        <Reveal>
          <Card tone="dark" accent="gradient" href={flagship.href} padding="lg" className="mt-10">
            <div className="flex flex-wrap items-center gap-3">
              <span
                aria-hidden
                className="flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-brand-blue-soft"
              >
                <FlagshipIcon size={22} />
              </span>
              <Badge variant="inverse" dot>
                {flagship.badge}
              </Badge>
            </div>

            <h3 className="mt-5 font-heading text-h2 font-bold text-text-inverse">
              {flagship.title}
            </h3>
            <p className="mt-1 font-mono text-body-sm text-brand-blue-soft">{flagship.subtitle}</p>
            <p className="measure mt-4 font-body text-body-lg text-text-inverse-muted">
              {flagship.description}
            </p>

            <span className="mt-7 inline-flex items-center gap-2 font-body text-body-sm font-semibold text-brand-orange">
              Lihat detail Solusi PDAM
              <ArrowRight
                size={15}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Card>
        </Reveal>

        <Reveal>
          <div className="mt-16">
            <SectionHeading
              label="Produk Lain"
              title="Untuk kebutuhan di luar sektor air"
              as="h3"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {others.map((p, i) => {
            const ProductIcon = ICONS[p.icon] ?? Drop
            return (
              <Reveal key={p.slug} delay={i * 0.08}>
                <FeatureCard
                  icon={<ProductIcon size={21} />}
                  title={p.title}
                  description={
                    <>
                      <span className="mb-1.5 block font-mono text-body-sm text-brand-blue-strong">
                        {p.subtitle}
                      </span>
                      {p.description}
                    </>
                  }
                  href={p.href}
                  className="h-full"
                />
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <p className="mt-8 font-body text-body-sm text-text-secondary">
            Butuh sistem yang belum ada di daftar ini, atau perangkat beserta
            pemasangannya?{' '}
            <Link href="/services" className="link-inline font-semibold">
              Lihat layanan kami
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      <Section tone="dark" pattern="grid">
        <Reveal>
          <SectionHeading
            label="Keterhubungan"
            title="Tiga sistem, satu basis data"
            subtitle="Modul PDAM tidak berdiri sendiri-sendiri. Ketiganya menulis dan membaca sumber data yang sama, sehingga angka di billing, peta, dan sensor tidak pernah berbeda."
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {ECOSYSTEM.map((e, i) => (
            <li key={e.name}>
              <Reveal delay={i * 0.08}>
                <Card tone="dark-soft" padding="lg" interactive={false} className="h-full">
                  <h3 className="font-heading text-h3 font-bold text-text-inverse">{e.name}</h3>
                  <p className="mt-2 font-body text-body-sm text-text-inverse-muted">{e.desc}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.2}>
          <div className="mt-4 flex items-center justify-center gap-3 rounded-lg border border-white/12 bg-white/[0.05] px-5 py-4">
            <Database size={19} aria-hidden className="shrink-0 text-brand-orange" />
            <p className="font-body text-body-sm text-text-inverse-muted">
              Satu basis data terpusat — tidak ada sinkronisasi manual antar-modul.
            </p>
          </div>
        </Reveal>
      </Section>

      <CTASection />
    </>
  )
}
