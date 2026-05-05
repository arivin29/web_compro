'use client'

import { STATS } from '@/lib/constants'
import Counter from '@/components/ui/Counter'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function StatsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {STATS.map((stat) => (
              <Counter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                sublabel={stat.sublabel}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
