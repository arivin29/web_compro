'use client'

import {
  ChartLineDown,
  Headset,
  Lightning,
  PuzzlePiece,
  ShieldCheck,
  Stack,
  Clock,
} from '@phosphor-icons/react'
import { Card, FeatureCard, Reveal, Section, SectionHeading } from '@/components/ui'

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

/** Cara Devetek menjawab — dulu berdiri sebagai section terpisah. */
const ANSWERS = [
  {
    icon: PuzzlePiece,
    title: 'Terintegrasi end-to-end',
    desc: 'Billing, aset, IoT, dan laporan terhubung dalam satu ekosistem. Tidak ada data silo antar-modul.',
  },
  {
    icon: Lightning,
    title: 'Otomatis dan real-time',
    desc: 'Data dari lapangan langsung diproses menjadi tagihan, peringatan, dan laporan tanpa rekap manual.',
  },
  {
    icon: ShieldCheck,
    title: 'Terbukti di lapangan',
    desc: 'Bukan prototipe. Produk kami berjalan harian di PDAM dan instansi di berbagai daerah.',
  },
  {
    icon: Headset,
    title: 'Didampingi sampai jalan',
    desc: 'Dari analisa kebutuhan, implementasi, pelatihan operator, hingga maintenance pasca-launch.',
  },
]

/**
 * Masalah bisnis yang diselesaikan — blueprint §17 poin 3.
 * Menggabungkan section "masalah" dan "kenapa Devetek" yang sebelumnya
 * terpisah, sesuai arahan Tahap 3 untuk mengurangi section berulang.
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

      <Reveal>
        <div className="mt-16">
          <SectionHeading
            label="Cara Devetek Menjawabnya"
            title="Partner teknologi yang bisa diandalkan"
            as="h3"
          />
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {ANSWERS.map((a, i) => {
          const Icon = a.icon
          return (
            <Reveal key={a.title} delay={i * 0.08}>
              <FeatureCard
                icon={<Icon size={21} />}
                title={a.title}
                description={a.desc}
                className="h-full"
              />
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
