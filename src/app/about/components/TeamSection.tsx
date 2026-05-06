'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { TEAM } from '@/lib/constants'

export default function TeamSection() {
  return (
    <section className="py-24 md:py-32 bg-[#EBF5FF]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            title="Tim Kami"
            subtitle="Didukung oleh profesional berpengalaman"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {TEAM.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 0.05}>
              <div className="glass-card p-5 text-center group">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border border-border bg-blue-50 flex items-center justify-center">
                  <span className="text-lg font-bold text-accent">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-heading font-semibold text-sm text-brand-dark">
                  {member.name}
                </h4>
                <p className="text-xs text-text-muted mt-1">{member.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
