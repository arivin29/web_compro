'use client'

import { MagnifyingGlass, Blueprint, Code, Rocket, Headset } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const STEPS = [
  {
    icon: MagnifyingGlass,
    step: '01',
    title: 'Analisa Kebutuhan',
    desc: 'Kami memahami masalah, tujuan bisnis, dan kebutuhan teknis Anda secara menyeluruh sebelum membuat solusi.',
  },
  {
    icon: Blueprint,
    step: '02',
    title: 'Perencanaan & Desain',
    desc: 'Membuat roadmap proyek, arsitektur sistem, dan desain UI/UX yang sesuai dengan kebutuhan.',
  },
  {
    icon: Code,
    step: '03',
    title: 'Development & Testing',
    desc: 'Pengembangan agile dengan testing berkelanjutan. Progress demo berkala agar Anda selalu update.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Deployment & Training',
    desc: 'Implementasi lancar dengan training lengkap dan dokumentasi untuk tim Anda.',
  },
  {
    icon: Headset,
    step: '05',
    title: 'Maintenance & Support',
    desc: 'Dukungan pasca-launch: maintenance, update, dan dedicated support agar sistem selalu optimal.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-22 md:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center gap-3 mb-4 text-brand-blue text-sm uppercase tracking-widest font-medium justify-center">
              <span className="w-8 h-px bg-brand-blue" />
              CARA KAMI BEKERJA
              <span className="w-8 h-px bg-brand-blue" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-dark mb-4">
              Proses Development Kami
            </h2>
            <p className="text-base text-text-secondary max-w-xl mx-auto">
              Metodologi yang terbukti menghasilkan proyek sukses — dari konsultasi awal hingga maintenance jangka panjang.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting line */}
          <div aria-hidden className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="relative text-center group">
                  {/* Icon circle */}
                  <div className="relative z-10 w-[72px] h-[72px] mx-auto mb-5 rounded-2xl bg-white border-2 border-border flex items-center justify-center shadow-card group-hover:border-brand-blue group-hover:shadow-blue transition-all duration-300">
                    <step.icon className="text-brand-blue" size={28} />
                  </div>

                  {/* Step number */}
                  <div className="text-xs font-bold text-brand-blue/50 uppercase tracking-widest mb-2">
                    Step {step.step}
                  </div>

                  <h3 className="font-heading font-bold text-1x text-brand-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
