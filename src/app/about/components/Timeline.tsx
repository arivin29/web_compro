'use client'

import { Reveal, Section, SectionHeading } from '@/components/ui'
import { TIMELINE } from '@/lib/constants'

/**
 * Perjalanan perusahaan — blueprint §9.4.
 *
 * Desktop memakai layout alternating, mobile selalu satu kolom.
 * Dot memakai tiga warna merek secara berurutan, dan tahun dibuat lebih
 * dominan daripada dekorasi.
 */
const DOT_COLORS = ['bg-brand-blue', 'bg-brand-red', 'bg-brand-orange']

export default function Timeline() {
  return (
    <Section tone="soft" width="narrow">
      <Reveal>
        <SectionHeading
          label="Perjalanan Kami"
          title="Dari startup teknologi menjadi mitra digitalisasi"
        />
      </Reveal>

      <ol className="relative mt-12">
        {/* Garis vertikal */}
        <span
          aria-hidden
          className="absolute bottom-0 left-[7px] top-2 w-px bg-border-strong md:left-1/2 md:-translate-x-px"
        />

        {TIMELINE.map((item, i) => {
          const alignRight = i % 2 === 0
          return (
            <li key={item.year} className="relative pb-8 last:pb-0">
              <Reveal delay={i * 0.07}>
                <span
                  aria-hidden
                  className={`absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-surface-soft md:left-1/2 md:-translate-x-1/2 ${
                    DOT_COLORS[i % DOT_COLORS.length]
                  }`}
                />

                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    alignRight ? 'md:pr-10 md:text-right' : 'md:ml-auto md:pl-10'
                  }`}
                >
                  <div className="rounded-lg border border-border bg-surface-white p-5 shadow-card">
                    <span className="tabular block font-heading text-h3 font-bold text-brand-blue-strong">
                      {item.year}
                    </span>
                    <h3 className="mt-1 font-heading text-h4 font-semibold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 font-body text-body-sm leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
