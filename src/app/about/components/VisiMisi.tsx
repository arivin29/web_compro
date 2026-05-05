'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { VISI, MISI } from '@/lib/constants'

export default function VisiMisi() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="glass-card p-8">
              <h3 className="font-heading font-bold text-xl text-brand-dark mb-4">Visi</h3>
              <p className="text-text-secondary leading-relaxed">{VISI}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-card p-8">
              <h3 className="font-heading font-bold text-xl text-brand-dark mb-4">Misi</h3>
              <ul className="space-y-3">
                {MISI.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0" />
                    <span className="text-text-secondary leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
