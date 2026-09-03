'use client'

import { Buildings, CalendarCheck, Package, Rocket } from '@phosphor-icons/react'
import { Reveal, Section, StatCard } from '@/components/ui'

/**
 * Trust bar — blueprint §17 poin 2.
 * Ringkas dan datar; angka pencapaian yang lebih detail tidak diulang
 * lagi di section lain agar homepage tidak terasa repetitif.
 */
const TRUST_STATS = [
  { value: 12, suffix: '+', label: 'Tahun pengalaman', note: 'Sejak 2012', icon: CalendarCheck, accent: 'orange' as const },
  { value: 50, suffix: '+', label: 'Klien terpercaya', note: 'PDAM, pemerintah & swasta', icon: Buildings, accent: 'blue' as const },
  { value: 100, suffix: '+', label: 'Proyek selesai', note: 'Di berbagai sektor', icon: Rocket, accent: 'red' as const },
  { value: 5, suffix: '', label: 'Produk sendiri', note: 'Dikembangkan in-house', icon: Package, accent: 'blue' as const },
]

export default function TrustBarSection() {
  return (
    <Section tone="white" space="compact">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {TRUST_STATS.map((s, i) => {
          const Icon = s.icon
          return (
            <Reveal key={s.label} delay={i * 0.08}>
              <StatCard
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                note={s.note}
                accent={s.accent}
                icon={<Icon size={20} weight="bold" />}
              />
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
