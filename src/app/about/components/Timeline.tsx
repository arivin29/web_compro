'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { TIMELINE } from '@/lib/constants'

export default function Timeline() {
  return (
    <section className="py-24 md:py-32 bg-surface-alt">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading title="Perjalanan Kami" />
        </ScrollReveal>

        <div className="mt-12 relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-10">
            {TIMELINE.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 0.1}>
                <div className="relative flex items-start gap-6 md:gap-0">
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-brand-blue border-2 border-white shadow-sm -translate-x-1.5 mt-1.5" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <span className="inline-block font-heading font-bold text-brand-blue text-sm mb-1">
                      {item.year}
                    </span>
                    <h3 className="font-heading font-semibold text-brand-dark text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
