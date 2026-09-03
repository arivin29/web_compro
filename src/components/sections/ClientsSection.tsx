'use client'

import { Buildings, Drop, Factory } from '@phosphor-icons/react'
import { Card, Reveal, Section, SectionHeading } from '@/components/ui'

const SECTORS = [
  {
    icon: Drop,
    sector: 'PDAM / Air Minum',
    clients: [
      'Perumda Merangin',
      'Perumda Tebo',
      'Perumda Rengat',
      'Perumda Batu Sangkar',
      'PDAM Pasaman Barat',
      'PDAM Bab Solok',
      'PDAM Agam',
    ],
  },
  {
    icon: Buildings,
    sector: 'Pemerintah & BUMN',
    clients: ['Kementerian PUPR', 'PT Bakti Air Indonesia'],
  },
  {
    icon: Factory,
    sector: 'Swasta',
    clients: ['PT Derazona Air Service', 'PT Best Agro', 'PT BMT Asia Indonesia'],
  },
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
                    <p className="font-body text-body-sm text-text-muted">
                      {s.clients.length} klien
                    </p>
                  </div>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.clients.map((name) => (
                    <li
                      key={name}
                      className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface-soft px-2.5 py-1.5 font-body text-body-sm text-text-secondary"
                    >
                      <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-blue" />
                      {name}
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
