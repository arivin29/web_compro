'use client'

import { ChartLineDown, Clock, Stack } from '@phosphor-icons/react'
import { Card, Reveal, Section, SectionHeading } from '@/components/ui'

/** Masalah operasional yang paling sering ditemui di lapangan. */
const PROBLEMS = [
  {
    icon: Stack,
    title: 'Data tersebar di banyak sistem',
    desc: 'Billing, aset, dan laporan keuangan berdiri sendiri-sendiri, sehingga angka antar-unit sering tidak cocok.',
  },
  {
    icon: Clock,
    title: 'Proses manual memakan waktu',
    desc: 'Baca meter, rekap tagihan, dan penyusunan laporan masih bertumpu pada kertas dan spreadsheet.',
  },
  {
    icon: ChartLineDown,
    title: 'Masalah baru ketahuan terlambat',
    desc: 'Kebocoran dan gangguan distribusi baru diketahui setelah pelanggan mengeluh, bukan dari data.',
  },
]

/**
 * Masalah bisnis yang diselesaikan — blueprint §17 poin 3.
 *
 * Section ini sekarang mengerjakan satu hal saja: menyatakan masalahnya.
 * Blok "Cara Devetek Menjawabnya" dibuang setelah EngagementSection masuk
 * tepat di bawahnya — dua section berturut-turut sama-sama menjawab
 * "bagaimana cara Devetek", dan yang di bawah menjawabnya jauh lebih
 * konkret. Keempat klaimnya pun sudah punya rumah yang lebih tepat:
 * keterhubungan di EcosystemSection, bukti lapangan di ProjectsSection
 * dan ClientsSection, pendampingan di ProcessSection.
 */
export default function ProblemSection() {
  return (
    <Section tone="soft">
      <Reveal>
        <SectionHeading
          label="Masalah yang Kami Selesaikan"
          title="Sistem yang tidak terhubung membuat operasional berjalan lambat"
          subtitle="Tiga hambatan berikut hampir selalu muncul sebelum digitalisasi dimulai."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {PROBLEMS.map((p, i) => {
          const Icon = p.icon
          return (
            <Reveal key={p.title} delay={i * 0.08}>
              <Card padding="lg" className="h-full" accent="orange">
                <Icon size={26} className="text-brand-orange" />
                <h3 className="mt-4 font-heading text-h3 font-semibold text-text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 font-body text-body-sm leading-relaxed text-text-secondary">
                  {p.desc}
                </p>
              </Card>
            </Reveal>
          )
        })}
      </div>

    </Section>
  )
}
