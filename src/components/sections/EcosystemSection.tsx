'use client'

import { ArrowRight, ChartBar, CloudArrowUp, Database, UsersThree } from '@phosphor-icons/react'
import { Reveal, Section, SectionHeading } from '@/components/ui'

/**
 * Alur data dari lapangan sampai meja direksi.
 * Setiap tahap ditampilkan sebagai node yang jelas, dengan status dan
 * hubungan sistem sebagai data — bukan ornamen palsu (blueprint §9.2).
 */
const FLOW = [
  {
    icon: UsersThree,
    title: 'Data lapangan',
    desc: 'Petugas menginput lewat aplikasi mobile, sensor HELIOS mengirim otomatis.',
    systems: ['D-IBS Mobile', 'HELIOS'],
  },
  {
    icon: Database,
    title: 'Basis data terpusat',
    desc: 'Seluruh transaksi dan telemetri masuk ke satu sumber kebenaran.',
    systems: ['D-IBS Core', 'D-ASSET'],
  },
  {
    icon: CloudArrowUp,
    title: 'Proses otomatis',
    desc: 'Perhitungan tagihan, penjadwalan penagihan, dan deteksi anomali berjalan sendiri.',
    systems: ['Billing Engine'],
  },
  {
    icon: ChartBar,
    title: 'Dashboard eksekutif',
    desc: 'Manajemen membaca kondisi terkini tanpa menunggu rekap bulanan.',
    systems: ['Executive Dashboard'],
  },
]

/** Diagram ekosistem terintegrasi — blueprint §9.2 dan §17 poin 6. */
export default function EcosystemSection() {
  return (
    <Section tone="dark" pattern="grid">
      <Reveal>
        <SectionHeading
          label="Cara Kerja Ekosistem"
          title="Dari lapangan ke meja direksi, tanpa rekap manual"
          subtitle="Empat tahap yang sama berlaku untuk billing, aset, maupun monitoring — karena semuanya memakai fondasi data yang sama."
        />
      </Reveal>

      <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {FLOW.map((step, i) => {
          const Icon = step.icon
          return (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="relative h-full rounded-lg border border-white/12 bg-white/[0.05] p-5">
                {/* Panah penghubung antar-node, hanya di desktop */}
                {i < FLOW.length - 1 && (
                  <ArrowRight
                    aria-hidden
                    size={16}
                    weight="bold"
                    className="absolute -right-[13px] top-1/2 hidden -translate-y-1/2 text-brand-orange lg:block"
                  />
                )}

                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-brand-blue-soft"
                  >
                    <Icon size={20} />
                  </span>
                  <span className="font-mono text-body-sm text-brand-orange">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-h4 font-semibold text-text-inverse">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-body-sm leading-relaxed text-text-inverse-muted">
                  {step.desc}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {step.systems.map((s) => (
                    <li
                      key={s}
                      className="rounded-sm border border-white/12 bg-white/[0.06] px-2 py-1 font-mono text-[0.6875rem] text-white/70"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          )
        })}
      </ol>

    </Section>
  )
}
