'use client'

import { Quotes } from '@phosphor-icons/react'
import { TESTIMONIALS } from '@/lib/constants'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function TestimonialSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center gap-3 mb-4 text-brand-blue text-sm uppercase tracking-widest font-medium justify-center">
              <span className="w-8 h-px bg-brand-blue" />
              TESTIMONI
              <span className="w-8 h-px bg-brand-blue" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-dark">
              Apa Kata Klien Kami
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="relative bg-surface-alt border border-border rounded-2xl p-8 md:p-10">
              <Quotes className="absolute top-6 right-6 text-brand-blue/10" size={48} />

              {/* Highlight number */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-brand-blue/10 rounded-lg px-4 py-2">
                  <span className="font-heading font-bold text-brand-blue text-lg">5 DMA</span>
                  <span className="text-xs text-text-muted ml-2">area monitoring</span>
                </div>
                <div className="bg-brand-blue/10 rounded-lg px-4 py-2">
                  <span className="font-heading font-bold text-brand-blue text-lg">200+</span>
                  <span className="text-xs text-text-muted ml-2">sensor node</span>
                </div>
                <div className="bg-green-50 rounded-lg px-4 py-2">
                  <span className="font-heading font-bold text-green-600 text-lg">Menit</span>
                  <span className="text-xs text-text-muted ml-2">vs hari (deteksi kebocoran)</span>
                </div>
              </div>

              <blockquote className="text-lg md:text-xl text-brand-dark leading-relaxed mb-6 font-medium italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-heading font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-sm text-brand-dark">{t.name}</div>
                  <div className="text-xs text-text-muted">{t.role} — {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
