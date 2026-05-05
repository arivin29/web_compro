'use client'

import { ShieldCheck, LightbulbFilament, UsersFour, Target, Trophy } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { VALUES } from '@/lib/constants'

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Shield: ShieldCheck,
  Lightbulb: LightbulbFilament,
  Users: UsersFour,
  Target: Target,
  Award: Trophy,
}

export default function Values() {
  return (
    <section className="py-24 md:py-32 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading title="Nilai-Nilai Kami" />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {VALUES.map((value, index) => {
            const Icon = ICON_MAP[value.icon]
            return (
              <ScrollReveal key={value.name} delay={index * 0.1}>
                <div className="glass-card p-6 text-center h-full">
                  {Icon && (
                    <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-brand-blue" size={24} />
                    </div>
                  )}
                  <h4 className="font-heading font-semibold text-sm text-brand-dark mb-2">
                    {value.name}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
