'use client'

import Link from 'next/link'
import { Code, Handshake, type Icon } from '@phosphor-icons/react'
import {
  Badge,
  FeatureCard,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from '@/components/ui'
import { SERVICES } from '@/lib/constants'
import CTASection from '@/components/sections/CTASection'

const ICONS: Record<string, Icon> = { Code, Handshake }

/**
 * Rantai pekerjaan yang biasanya dipecah ke beberapa vendor.
 * Ini inti argumen halaman: bukan "kami bisa banyak hal", melainkan
 * "tidak ada celah tanggung jawab di antara keempatnya".
 */
const CHAIN = [
  {
    step: 'Perangkat lunak',
    desc: 'Sistem dibangun atau disesuaikan mengikuti proses yang benar-benar berjalan di tempat Anda.',
  },
  {
    step: 'Perangkat keras',
    desc: 'Server, jaringan, UPS, dan perangkat pendukung diadakan sesuai spesifikasi sistem yang akan dipasang.',
  },
  {
    step: 'Instalasi',
    desc: 'Pemasangan di lokasi, migrasi data, dan pelatihan operator sampai sistem dipakai harian.',
  },
  {
    step: 'Perawatan',
    desc: 'Pendampingan setelah serah terima — perbaikan, pembaruan, dan penyesuaian saat kebutuhan berubah.',
  },
]

/**
 * Hub layanan — arketipe halaman "hub" pada page-templates.md.
 *
 * Halaman ini lahir dari pemisahan produk dan jasa. Sebelumnya Software
 * House dan Konsultasi & Pengadaan berada di bawah `/products`, sehingga
 * pekerjaan yang lingkupnya disusun bersama klien terbaca seperti lisensi
 * siap beli.
 */
export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Layanan"
        title="Satu tim dari sistem sampai perawatannya"
        description="Sebagian kebutuhan tidak bisa dijawab produk siap pakai. Di sinilah tim kami membangunkan sistemnya, mengadakan perangkatnya, memasangnya, lalu merawatnya."
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Layanan' }]}
        media={
          <ul className="flex flex-wrap gap-2">
            {['Web App', 'Mobile App', 'WebGIS', 'Pengadaan IT', 'Instalasi', 'Maintenance'].map(
              (b) => (
                <li key={b}>
                  <Badge variant="inverse">{b}</Badge>
                </li>
              ),
            )}
          </ul>
        }
      />

      <Section tone="white">
        <Reveal>
          <SectionHeading
            label="Dua Bentuk Kerja Sama"
            title="Bergantung pada apa yang belum ada di tempat Anda"
            subtitle="Kalau yang kurang adalah sistemnya, kami bangunkan. Kalau yang kurang perangkat dan penanganan lapangannya, kami adakan dan rawat."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => {
            const ServiceIcon = ICONS[s.icon] ?? Code
            return (
              <Reveal key={s.slug} delay={i * 0.08}>
                <FeatureCard
                  icon={<ServiceIcon size={21} />}
                  title={s.title}
                  description={
                    <>
                      <span className="mb-1.5 block font-mono text-body-sm text-brand-blue-strong">
                        {s.subtitle}
                      </span>
                      {s.description}
                    </>
                  }
                  href={s.href}
                  className="h-full"
                />
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section tone="dark" pattern="grid">
        <Reveal>
          <SectionHeading
            label="Kenapa Digabung"
            title="Empat pekerjaan yang biasanya dipecah ke empat vendor"
            subtitle="Ketika sistem, perangkat, instalasi, dan perawatan dipegang pihak berbeda, setiap gangguan berubah menjadi perdebatan siapa yang salah. Kami menutup keempatnya lewat satu kontrak dan satu penanggung jawab."
          />
        </Reveal>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {CHAIN.map((c, i) => (
            <li key={c.step}>
              <Reveal delay={i * 0.08}>
                <div className="h-full rounded-md border border-white/12 bg-white/[0.05] p-5">
                  <span className="font-mono text-body-sm text-brand-orange">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 font-heading text-h3 font-semibold text-text-inverse">
                    {c.step}
                  </h3>
                  <p className="mt-2 font-body text-body-sm leading-relaxed text-text-inverse-muted">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.2}>
          <p className="measure mt-8 font-body text-body-lg text-text-inverse">
            Kalau yang Anda butuhkan sudah kami buat sebelumnya, mulailah dari{' '}
            <Link href="/products" className="link-inline font-semibold">
              katalog produk
            </Link>{' '}
            — biayanya lebih ringan daripada membangun dari nol.
          </p>
        </Reveal>
      </Section>

      <CTASection />
    </>
  )
}
