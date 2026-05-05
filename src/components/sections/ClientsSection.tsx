'use client'

import { Buildings, Drop, Lightning } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const SECTORS = [
  {
    icon: Drop,
    sector: 'PDAM / Air Minum',
    clients: [
      'PDAM Kab. Tangerang',
      'PDAM Kota Tangerang',
      'PDAM Tirta Pakuan Bogor',
      'PDAM Tirta Kahuripan',
      'PDAM Kab. Subang',
      'PDAM Kab. Sukabumi',
      'PDAM Kota Depok',
    ],
  },
  {
    icon: Buildings,
    sector: 'Pemerintah & BUMN',
    clients: [
      'Kementerian PUPR',
      'PT Bakti Air Indonesia',
    ],
  },
  {
    icon: Lightning,
    sector: 'Utilitas & Energi',
    clients: [
      'PLN',
    ],
  },
]

export default function ClientsSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center gap-3 mb-4 text-brand-blue text-sm uppercase tracking-widest font-medium justify-center">
              <span className="w-8 h-px bg-brand-blue" />
              DIPERCAYA OLEH
              <span className="w-8 h-px bg-brand-blue" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-dark mb-4">
              Klien & Mitra di Berbagai Sektor
            </h2>
            <p className="text-base text-text-secondary max-w-xl mx-auto">
              Melayani PDAM, pemerintahan, BUMN, dan sektor swasta di seluruh Indonesia.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4 max-w-3xl mx-auto">
          {SECTORS.map((sector, i) => (
            <ScrollReveal key={sector.sector} delay={i * 0.1}>
              <div className="bg-white border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                    <sector.icon className="text-brand-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-brand-dark">{sector.sector}</h3>
                    <span className="text-xs text-text-muted">{sector.clients.length} klien</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sector.clients.map((name) => (
                    <span key={name} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-alt text-sm text-text-secondary border border-border">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/40 shrink-0" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
