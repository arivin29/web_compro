'use client'

import { Compass, ListChecks } from '@phosphor-icons/react'
import { Card, Reveal, Section, SectionHeading } from '@/components/ui'
import { MISI, VISI } from '@/lib/constants'

/** Visi dan misi — blueprint §18. */
export default function VisiMisi() {
  return (
    <Section tone="dark" pattern="grid">
      <Reveal>
        <SectionHeading label="Arah Kami" title="Visi dan misi" />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 md:items-stretch">
        <Reveal className="h-full">
          <Card tone="dark-soft" padding="lg" className="h-full">
            <span
              aria-hidden
              className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-brand-blue-soft"
            >
              <Compass size={22} />
            </span>
            <h3 className="font-heading text-h3 font-semibold text-text-inverse">Visi</h3>
            <p className="mt-3 font-body text-body-lg leading-relaxed text-text-inverse-muted">
              {VISI}
            </p>
          </Card>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <Card tone="dark-soft" padding="lg" className="h-full">
            <span
              aria-hidden
              className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-brand-blue-soft"
            >
              <ListChecks size={22} />
            </span>
            <h3 className="font-heading text-h3 font-semibold text-text-inverse">Misi</h3>
            <ul className="mt-3 space-y-3">
              {MISI.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-orange" />
                  <span className="font-body leading-relaxed text-text-inverse-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
