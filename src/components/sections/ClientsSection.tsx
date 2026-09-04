'use client'

import { Bank, Buildings, Drop, type Icon } from '@phosphor-icons/react'
import { Card, Reveal, Section, SectionHeading } from '@/components/ui'
import { CLIENTS } from '@/lib/constants'

/**
 * Daftar klien diturunkan dari CLIENTS di constants, bukan ditulis ulang.
 * Versi sebelumnya menyalin daftarnya secara manual dan sudah menyimpang:
 * memuat "Kementerian PUPR" yang tidak ada di data, dan menempatkan
 * PT Bakti Air Indonesia di kelompok pemerintahan padahal perusahaan swasta.
 */
const SECTORS: { key: string; icon: Icon; sector: string }[] = [
  { key: 'PDAM', icon: Drop, sector: 'PDAM / Air Minum' },
  { key: 'Pemerintahan', icon: Bank, sector: 'Kementerian & Pemerintah Daerah' },
  { key: 'Swasta', icon: Buildings, sector: 'Perusahaan Swasta' },
]

/** Klien & mitra — blueprint §17 poin 9. */
export default function ClientsSection() {
  return (
    <Section tone="white">
      <Reveal>
        <SectionHeading
          label="Dipercaya Oleh"
          title="Klien dan mitra di berbagai sektor"
          subtitle="Melayani PDAM, instansi pemerintah, BUMN, dan perusahaan swasta di seluruh Indonesia."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {SECTORS.map((s, i) => {
          const clients = CLIENTS.filter((c) => c.category === s.key)
          const Icon = s.icon
          return (
            <Reveal key={s.sector} delay={i * 0.08}>
              <Card padding="lg" className="h-full">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-light text-brand-blue-strong"
                  >
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-heading text-h4 font-semibold text-text-primary">
                      {s.sector}
                    </h3>
                    <p className="tabular font-body text-body-sm text-text-muted">
                      {clients.length} klien
                    </p>
                  </div>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {clients.map((c) => (
                    <li
                      key={c.name}
                      className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface-soft px-2.5 py-1.5 font-body text-body-sm text-text-secondary"
                    >
                      <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-blue" />
                      {c.name}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
