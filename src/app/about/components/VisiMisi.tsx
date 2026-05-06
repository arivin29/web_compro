'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { VISI, MISI } from '@/lib/constants'

export default function VisiMisi() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-blue-dark to-brand-blue overflow-hidden">
      {/* Background pattern */}
      <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <ScrollReveal className="h-full">
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8 h-full flex flex-col">
              <h3 className="font-heading font-bold text-xl text-white mb-4">Visi</h3>
              <p className="text-white/80 leading-relaxed flex-1 flex items-center">{VISI}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="h-full">
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8 h-full">
              <h3 className="font-heading font-bold text-xl text-white mb-4">Misi</h3>
              <ul className="space-y-3">
                {MISI.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-white/50 mt-2 shrink-0" />
                    <span className="text-white/80 leading-relaxed">{item}</span>
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
