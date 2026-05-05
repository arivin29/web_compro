'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const CLIENT_NAMES = [
  'PDAM Kab. Tangerang',
  'PDAM Kota Tangerang',
  'PDAM Tirta Pakuan Bogor',
  'PDAM Tirta Kahuripan',
  'PDAM Kab. Subang',
  'PDAM Kab. Sukabumi',
  'PDAM Kota Depok',
  'PT Bakti Air Indonesia',
  'Kementerian PUPR',
  'PLN',
]

export default function ClientsSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            label="DIPERCAYA OLEH"
            title="Klien & Mitra Kami"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CLIENT_NAMES.map((name) => (
              <div
                key={name}
                className="glass-card px-4 py-5 flex items-center justify-center text-center transition-all duration-300 hover:border-brand-blue/30 hover:shadow-card-hover"
              >
                <span className="text-sm text-text-secondary font-medium">{name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
