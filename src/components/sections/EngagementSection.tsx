'use client'

import { ArrowRight, Code, Package, Toolbox } from '@phosphor-icons/react'
import { Card, Reveal, Section, SectionHeading } from '@/components/ui'

/**
 * Tiga cara masuk kerja sama. Urutannya sengaja dari yang paling murah
 * ke yang paling menyeluruh, supaya pembaca menempatkan dirinya sendiri
 * tanpa perlu bertanya lebih dulu.
 */
const WAYS = [
  {
    icon: Package,
    step: 'Cara 1',
    title: 'Pakai produk kami',
    desc: 'Sistem yang sudah berjalan harian di PDAM dan perusahaan lain. Karena sudah jadi dan sudah teruji, penyesuaian dan pemasangannya jauh lebih cepat daripada membangun dari nol.',
    href: '/products',
    linkLabel: 'Lihat produk',
  },
  {
    icon: Code,
    step: 'Cara 2',
    title: 'Kami bangunkan',
    desc: 'Kalau proses kerja Anda khas dan tidak ada produk yang benar-benar cocok, tim yang membangun produk kami sendiri yang mengerjakannya untuk Anda.',
    href: '/services/software-house',
    linkLabel: 'Software house',
  },
  {
    icon: Toolbox,
    step: 'Cara 3',
    title: 'Kami adakan dan rawat',
    desc: 'Server, jaringan, dan perangkat pendukungnya diadakan, dipasang di lokasi, lalu dirawat setelah serah terima — termasuk untuk sistem yang bukan buatan kami.',
    href: '/services/consulting',
    linkLabel: 'Konsultasi & pengadaan',
  },
]

/**
 * Tiga cara bekerja bersama Devetek.
 *
 * Section ini menjawab kebingungan yang muncul dari struktur lama: produk
 * dan jasa dicampur dalam satu daftar, sehingga pembaca harus menebak
 * sendiri mana yang bisa dibeli dan mana yang harus dibicarakan dulu.
 * Di sini ketiganya dinyatakan terbuka sebagai pilihan cara masuk.
 */
export default function EngagementSection() {
  return (
    <Section tone="white">
      <Reveal>
        <SectionHeading
          label="Tiga Cara Bekerja Bersama Kami"
          title="Mulai dari mana pun kondisi Anda sekarang"
          subtitle="Tidak semua kebutuhan berangkat dari titik yang sama. Sebagian tinggal memasang, sebagian perlu dibangun, sebagian lagi butuh perangkat dan penanganan lapangannya lebih dulu."
        />
      </Reveal>

      <ol className="mt-12 grid gap-5 md:grid-cols-3">
        {WAYS.map((w, i) => {
          const Icon = w.icon
          return (
            <li key={w.title}>
              <Reveal delay={i * 0.08}>
                <Card href={w.href} padding="lg" className="h-full">
                  <span className="font-mono text-body-sm text-brand-orange">{w.step}</span>

                  <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-md bg-accent-light text-brand-blue-strong transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-4 font-heading text-h3 font-semibold text-text-primary">
                    {w.title}
                  </h3>
                  <p className="mt-2 flex-1 font-body text-body-sm leading-relaxed text-text-secondary">
                    {w.desc}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 font-body text-body-sm font-semibold text-brand-blue-strong">
                    {w.linkLabel}
                    <ArrowRight
                      size={15}
                      weight="bold"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Card>
              </Reveal>
            </li>
          )
        })}
      </ol>

      <Reveal delay={0.24}>
        <p className="measure mt-8 font-body text-body-lg text-text-primary">
          Ketiganya dikerjakan tim yang sama, jadi tidak ada saling lempar antar-vendor ketika
          ada yang perlu diperbaiki.
        </p>
      </Reveal>
    </Section>
  )
}
