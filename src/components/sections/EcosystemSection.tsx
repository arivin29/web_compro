'use client'

import { Database, ArrowsLeftRight, ChartBar, CloudArrowUp, UsersThree } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const FLOW_STEPS = [
  {
    icon: UsersThree,
    title: 'Data Lapangan',
    desc: 'Petugas input via mobile app & sensor IoT',
    color: 'bg-brand-red',
  },
  {
    icon: Database,
    title: 'Database Terpusat',
    desc: 'Semua data tersimpan aman di cloud',
    color: 'bg-brand-blue',
  },
  {
    icon: CloudArrowUp,
    title: 'Proses Otomatis',
    desc: 'Billing, penagihan, analisa berjalan otomatis',
    color: 'bg-brand-blue-light',
  },
  {
    icon: ChartBar,
    title: 'Dashboard Eksekutif',
    desc: 'Laporan real-time di meja direksi',
    color: 'bg-brand-blue-dark',
  },
]

export default function EcosystemSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-t-4 border-brand-blue/10">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-6">
            <div className="flex items-center gap-3 mb-4 text-brand-blue text-sm uppercase tracking-widest font-medium justify-center">
              <span className="w-8 h-px bg-brand-blue" />
              CARA KERJA
              <span className="w-8 h-px bg-brand-blue" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-dark mb-4">
              Dari Lapangan ke Meja Direksi
            </h2>
            <p className="text-base text-text-secondary max-w-2xl mx-auto">
              Data mengalir seamless dari sensor & petugas di lapangan, diproses otomatis, 
              hingga menjadi insight di dashboard eksekutif.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 relative">
            {/* Connecting line (desktop) */}
            <div aria-hidden className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border z-0" />

            {FLOW_STEPS.map((step, i) => (
              <div key={step.title} className="relative flex flex-col items-center text-center px-4">
                {/* Step number + icon */}
                <div className={`relative z-10 w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <step.icon className="text-white" size={32} />
                </div>
                
                {/* Arrow between steps (mobile) */}
                {i < FLOW_STEPS.length - 1 && (
                  <div className="md:hidden py-2">
                    <ArrowsLeftRight className="text-brand-blue/30 rotate-90" size={20} />
                  </div>
                )}

                <h3 className="font-heading font-bold text-sm text-brand-dark mb-1">{step.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed max-w-[180px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom summary */}
        <ScrollReveal delay={0.3}>
          <div className="mt-14 bg-surface-alt rounded-2xl border border-border p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="font-heading font-bold text-lg text-brand-blue">D-IBS + D-ASSET + HELIOS</div>
                <div className="text-sm text-text-muted mt-1">Tiga sistem, satu ekosistem</div>
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-brand-dark">Real-Time</div>
                <div className="text-sm text-text-muted mt-1">Data update otomatis 24/7</div>
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-brand-dark">Zero Data Silo</div>
                <div className="text-sm text-text-muted mt-1">Semua modul saling terhubung</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
