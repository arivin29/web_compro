'use client'

import { Database, ArrowsLeftRight } from '@phosphor-icons/react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const ECOSYSTEM_NODES = [
  { label: 'D-IBS', sublabel: 'Billing', color: 'from-brand-red to-brand-red' },
  { label: 'D-ASSET', sublabel: 'WebGIS', color: 'from-brand-blue to-brand-blue' },
  { label: 'HELIOS', sublabel: 'IoT', color: 'from-brand-blue-dark to-brand-blue-dark' },
]

export default function EcosystemSection() {
  return (
    <section className="py-24 md:py-32 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            label="EKOSISTEM DEVETEK"
            title="Satu Ekosistem, Semua Terintegrasi"
            subtitle="D-IBS (Billing) ↔ D-ASSET (WebGIS) ↔ HELIOS (IoT) — terhubung dalam satu database terpusat. Data mengalir seamless dari sensor di lapangan hingga laporan di meja direksi."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 flex flex-col items-center">
            {/* Nodes */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full">
              {ECOSYSTEM_NODES.map((node, index) => (
                <div key={node.label} className="flex items-center gap-4 md:gap-6">
                  <div className="glass-card px-8 py-6 text-center min-w-[140px]">
                    <div className={`font-heading font-bold text-lg bg-gradient-to-r ${node.color} bg-clip-text text-transparent`}>
                      {node.label}
                    </div>
                    <div className="text-xs text-text-muted mt-1">{node.sublabel}</div>
                  </div>
                  {index < ECOSYSTEM_NODES.length - 1 && (
                    <ArrowsLeftRight className="text-brand-blue/50 hidden md:block" size={20} />
                  )}
                </div>
              ))}
            </div>

            {/* Connector */}
            <div className="w-px h-8 bg-border my-4" />

            {/* Database */}
            <div className="glass-card px-10 py-5 flex items-center gap-3 border-brand-blue/30 shadow-glow">
              <Database className="text-brand-blue" size={20} />
              <span className="font-heading font-semibold text-sm text-brand-dark">
                DATABASE TERPUSAT
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
