'use client'

import { CheckCircle, Headphones, Zap, RefreshCw } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Counter from '@/components/ui/Counter'
import { STATS } from '@/lib/constants'

const WHY_US = [
  {
    icon: CheckCircle,
    title: 'Terbukti di Lapangan',
    desc: 'Bukan hanya teori — produk kami sudah berjalan di puluhan PDAM dan instansi di seluruh Indonesia.',
  },
  {
    icon: Zap,
    title: 'Teknologi Terkini',
    desc: 'IoT, cloud-based SaaS, microservice architecture — kami gunakan stack modern yang siap scale.',
  },
  {
    icon: Headphones,
    title: 'Pendampingan Penuh',
    desc: 'Tim kami mendampingi dari konsultasi awal, development, training, hingga maintenance pasca-launch.',
  },
  {
    icon: RefreshCw,
    title: 'Terintegrasi End-to-End',
    desc: 'Billing, aset, IoT, laporan — semua terhubung dalam satu ekosistem. Tidak ada data silo.',
  },
]

export default function StatsSection() {
  return (
    <section className="relative bg-white">
      {/* Stats bar */}
      <div className="bg-surface-alt border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
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
        </div>
      </div>

      {/* Why Devetek */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center gap-3 mb-4 text-brand-blue text-sm uppercase tracking-widest font-medium justify-center">
              <span className="w-8 h-px bg-brand-blue" />
              KENAPA DEVETEK
              <span className="w-8 h-px bg-brand-blue" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-dark mb-4">
              Partner Teknologi yang Bisa Diandalkan
            </h2>
            <p className="text-base text-text-secondary max-w-2xl mx-auto">
              Lebih dari satu dekade pengalaman membangun solusi digital untuk sektor publik dan enterprise di Indonesia.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="group p-6 rounded-2xl border border-border bg-white hover:border-brand-blue/30 hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-base text-brand-dark mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
