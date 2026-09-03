'use client'

import { Reveal, Section, SectionHeading, TestimonialCard } from '@/components/ui'
import { TESTIMONIALS } from '@/lib/constants'

/**
 * Angka pendukung untuk testimoni pertama (implementasi HELIOS).
 * Sengaja dipetakan per-testimoni, bukan ditempel ke semuanya —
 * versi sebelumnya menampilkan angka yang sama di setiap kartu.
 */
const HIGHLIGHTS: Record<string, readonly { value: string; label: string }[]> = {
  'PT Bakti Air Indonesia': [
    { value: '5', label: 'DMA dipantau' },
    { value: '200+', label: 'sensor node' },
  ],
}

/** Testimoni terverifikasi — blueprint §17 poin 10 dan §8.6. */
export default function TestimonialSection() {
  return (
    <Section tone="soft">
      <Reveal>
        <SectionHeading
          align="center"
          label="Testimoni"
          title="Apa kata klien kami"
        />
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.company} delay={i * 0.08}>
            <TestimonialCard
              quote={t.quote}
              name={t.name}
              role={t.role}
              company={t.company}
              highlights={HIGHLIGHTS[t.company]}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
