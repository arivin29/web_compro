'use client'

import { Buildings, Drop, Lightning } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'

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
    clients: [
      'Kementerian PUPR',
      'PT Bakti Air Indonesia',
    ],
  },
  {
    icon: Lightning,
    sector: 'Swasta',
    clients: [
      'PT Derazona Air Service',
      'PT Best Agro',
      'PT BMT Asia Indonesia',
    ],
  },
]

export default function ClientsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-blue-dark to-brand-blue overflow-hidden">
      {/* Background pattern */}
      <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center gap-3 mb-4 text-white/60 text-sm uppercase tracking-widest font-medium justify-center">
              <span className="w-8 h-px bg-white/30" />
              DIPERCAYA OLEH
              <span className="w-8 h-px bg-white/30" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Klien & Mitra di Berbagai Sektor
            </h2>
            <p className="text-base text-white/70 max-w-xl mx-auto">
              Melayani PDAM, pemerintahan, BUMN, dan sektor swasta di seluruh Indonesia.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4 max-w-3xl mx-auto">
          {SECTORS.map((sector, i) => (
            <ScrollReveal key={sector.sector} delay={i * 0.1}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center">
                    <sector.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-white">{sector.sector}</h3>
                    <span className="text-xs text-white/50">{sector.clients.length} klien</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sector.clients.map((name) => (
                    <span key={name} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-sm text-white/90 border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
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
