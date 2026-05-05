'use client'

import { TESTIMONIALS } from '@/lib/constants'
import TestimonialCard from '@/components/ui/TestimonialCard'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function TestimonialSection() {
  return (
    <section className="py-24 md:py-32 bg-surface-alt">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard
                key={t.name}
                quote={t.quote}
                name={t.name}
                role={t.role}
                company={t.company}
                avatar={t.avatar}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
