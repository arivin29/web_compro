'use client'

import { useState } from 'react'
import { Bank, Buildings, Drop, Handshake, type Icon } from '@phosphor-icons/react'
import {
  Card,
  PageHero,
  ProjectCard,
  Reveal,
  Section,
  SectionHeading,
  TestimonialCard,
} from '@/components/ui'
import { CLIENTS, CLIENT_CATEGORIES, PROJECTS, TESTIMONIALS } from '@/lib/constants'
import CTASection from '@/components/sections/CTASection'

const SECTOR_ICONS: Record<string, Icon> = {
  PDAM: Drop,
  Pemerintahan: Bank,
  Swasta: Buildings,
}

const PARTNERS = [
  { name: 'PT Bakti Air Indonesia', role: 'Rekanan produk PDAM' },
  { name: 'PT Devetek Marapi Inovasi', role: 'Rekanan fokus pasar PDAM' },
]

/**
 * Portofolio & klien — blueprint §18.
 *
 * Filter sektor berlaku untuk daftar klien maupun daftar proyek sekaligus,
 * sehingga keduanya selalu bercerita tentang sektor yang sama.
 *
 * Testimoni diambil dari TESTIMONIALS di constants; sebelumnya kutipan yang
 * sama ditulis ulang secara hardcoded di halaman ini.
 */
export default function ClientsPage() {
  const [filter, setFilter] = useState<(typeof CLIENT_CATEGORIES)[number]>('Semua')

  const clients = filter === 'Semua' ? CLIENTS : CLIENTS.filter((c) => c.category === filter)
  const projects = filter === 'Semua' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <>
      <PageHero
        eyebrow="Portofolio"
        title="Dipercaya lintas sektor"
        description="Dari PDAM, kementerian, hingga perusahaan swasta — berikut institusi yang sistemnya kami bangun dan dampingi."
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Portofolio & Klien' }]}
      />

      <Section tone="white">
        <Reveal>
          <SectionHeading
            label="Klien Kami"
            title="Institusi yang mempercayakan sistemnya"
            subtitle="Saring berdasarkan sektor untuk melihat klien dan proyek yang relevan."
          />
        </Reveal>

        {/* Filter — menandai keadaan aktif lewat border, background, dan bobot
            teks sekaligus, bukan warna saja (blueprint §16) */}
        <Reveal delay={0.05}>
          <div
            role="radiogroup"
            aria-label="Saring berdasarkan sektor"
            className="mt-8 flex flex-wrap gap-2"
          >
            {CLIENT_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                role="radio"
                aria-checked={filter === c}
                onClick={() => setFilter(c)}
                className={`tap-target rounded-sm border px-4 py-2 font-body text-body-sm transition-colors duration-200 ${
                  filter === c
                    ? 'border-brand-blue bg-accent-light font-semibold text-brand-blue-strong'
                    : 'border-border bg-surface-white text-text-secondary hover:border-brand-blue/50 hover:text-text-primary'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <p aria-live="polite" className="mt-4 font-body text-body-sm text-text-muted">
            {clients.length} klien dan {projects.length} proyek ditampilkan.
          </p>
        </Reveal>

        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {clients.map((client, i) => {
            const SectorIcon = SECTOR_ICONS[client.category] ?? Buildings
            return (
              <li key={client.name}>
                <Reveal delay={Math.min(i, 8) * 0.03}>
                  <Card padding="sm" interactive={false} className="h-full py-5 text-center">
                    <span
                      aria-hidden
                      className="mx-auto flex h-10 w-10 items-center justify-center rounded-md bg-accent-light text-brand-blue-strong"
                    >
                      <SectorIcon size={19} />
                    </span>
                    <p className="mt-3 font-heading text-body-sm font-semibold text-text-primary">
                      {client.name}
                    </p>
                    <p className="mt-1 font-body text-body-sm text-text-muted">{client.category}</p>
                  </Card>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </Section>

      <Section tone="soft">
        <Reveal>
          <SectionHeading
            label="Proyek"
            title="Sistem yang sudah berjalan"
            subtitle="Setiap kartu adalah implementasi nyata, bukan konsep atau purwarupa."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={Math.min(i, 6) * 0.06}>
              <ProjectCard
                image={p.image}
                title={p.title}
                category={p.category}
                client={p.client}
                impact={p.desc}
              />
            </Reveal>
          ))}
        </div>

        {projects.length === 0 && (
          <p className="mt-8 font-body text-text-secondary">
            Belum ada proyek yang dipublikasikan untuk sektor ini.
          </p>
        )}
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <div>
              <SectionHeading label="Mitra Strategis" title="Rekanan yang mendukung solusi kami" />
              <ul className="mt-8 space-y-3">
                {PARTNERS.map((p) => (
                  <li key={p.name}>
                    <Card padding="sm" interactive={false}>
                      <div className="flex items-center gap-3.5">
                        <span
                          aria-hidden
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-light text-brand-blue-strong"
                        >
                          <Handshake size={19} />
                        </span>
                        <span>
                          <span className="block font-heading text-body-sm font-semibold text-text-primary">
                            {p.name}
                          </span>
                          <span className="mt-0.5 block font-body text-body-sm text-text-muted">
                            {p.role}
                          </span>
                        </span>
                      </div>
                    </Card>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <SectionHeading label="Testimoni" title="Kata mereka" as="h2" />
              <div className="mt-8">
                <TestimonialCard
                  quote={TESTIMONIALS[0].quote}
                  name={TESTIMONIALS[0].name}
                  role={TESTIMONIALS[0].role}
                  company={TESTIMONIALS[0].company}
                  highlights={[
                    { value: '5', label: 'DMA dipantau' },
                    { value: '200+', label: 'sensor node' },
                  ]}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection />
    </>
  )
}
