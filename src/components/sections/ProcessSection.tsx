'use client'

import { Blueprint, Code, Headset, MagnifyingGlass, Rocket } from '@phosphor-icons/react'
import { ProcessCard, Reveal, Section, SectionHeading } from '@/components/ui'

const STEPS = [
  {
    icon: MagnifyingGlass,
    step: '01',
    title: 'Analisa kebutuhan',
    desc: 'Memahami masalah, tujuan bisnis, dan kondisi teknis yang ada sebelum menawarkan solusi.',
  },
  {
    icon: Blueprint,
    step: '02',
    title: 'Perencanaan & desain',
    desc: 'Menyusun roadmap, arsitektur sistem, dan desain antarmuka yang sesuai cara kerja tim Anda.',
  },
  {
    icon: Code,
    step: '03',
    title: 'Development & testing',
    desc: 'Pengembangan bertahap dengan pengujian berkelanjutan dan demo berkala.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Deployment & pelatihan',
    desc: 'Implementasi disertai pelatihan operator dan dokumentasi yang bisa dipakai mandiri.',
  },
  {
    icon: Headset,
    step: '05',
    title: 'Maintenance & support',
    desc: 'Pendampingan pasca-launch: perbaikan, pembaruan, dan dukungan teknis berkelanjutan.',
  },
]

/** Proses kerja Devetek — blueprint §17 poin 8 dan §8.5. */
export default function ProcessSection() {
  return (
    <Section tone="soft">
      <Reveal>
        <SectionHeading
          label="Cara Kami Bekerja"
          title="Lima tahap, dari percakapan pertama sampai sistem berjalan"
          subtitle="Setiap tahap punya keluaran yang jelas, sehingga Anda selalu tahu posisi proyek."
        />
      </Reveal>

      <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
        {STEPS.map((s, i) => {
          const Icon = s.icon
          return (
            <li key={s.step}>
              <Reveal delay={i * 0.07}>
                <ProcessCard
                  step={s.step}
                  title={s.title}
                  description={s.desc}
                  icon={<Icon size={24} />}
                  last={i === STEPS.length - 1}
                />
              </Reveal>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
