'use client'

import { ArrowRight, Notebook } from '@phosphor-icons/react'
import { Badge, Button, Card, PageHero, Reveal, Section, SectionHeading } from '@/components/ui'

/**
 * Topik yang sedang disiapkan redaksi.
 *
 * CATATAN — versi sebelumnya menampilkan ketiganya sebagai artikel yang
 * sudah terbit: lengkap dengan tanggal, estimasi waktu baca, dan tautan
 * "Baca selengkapnya" yang tidak mengarah ke mana pun karena halaman
 * artikelnya memang belum ada. Salah satu ringkasannya juga mengklaim
 * "mengurangi NRW hingga 30%" sebagai studi kasus yang belum terverifikasi.
 *
 * Blueprint §21 melarang placeholder dan klaim yang belum diverifikasi,
 * jadi topik-topik ini ditampilkan apa adanya sebagai rencana — bukan
 * sebagai tulisan yang sudah bisa dibaca.
 */
const UPCOMING = [
  {
    category: 'Insight',
    title: 'Transformasi digital PDAM: tantangan dan peluang',
    desc: 'Apa saja yang biasanya menghambat digitalisasi PDAM, dan urutan pembenahan yang paling masuk akal.',
  },
  {
    category: 'Studi Kasus',
    title: 'Menemukan kebocoran lewat data, bukan laporan pelanggan',
    desc: 'Bagaimana pemantauan tekanan dan aliran per DMA mengubah cara tim lapangan menelusuri gangguan.',
  },
  {
    category: 'Panduan',
    title: 'ERP siap pakai atau software custom?',
    desc: 'Pertimbangan memilih antara keduanya berdasarkan kondisi proses bisnis yang sudah berjalan.',
  },
]

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Catatan dari lapangan"
        description="Tulisan tentang digitalisasi sektor publik dan enterprise, berdasarkan sistem yang benar-benar kami bangun dan operasikan."
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Blog' }]}
      />

      <Section tone="white">
        {/* Keadaan kosong yang jujur — belum ada artikel yang bisa dibaca */}
        <Reveal>
          <Card padding="lg" accent="orange" className="items-start">
            <span
              aria-hidden
              className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-accent-light text-brand-blue-strong"
            >
              <Notebook size={22} />
            </span>
            <h2 className="font-heading text-h3 font-semibold text-text-primary">
              Belum ada artikel yang terbit
            </h2>
            <p className="measure mt-2 font-body leading-relaxed text-text-secondary">
              Kami sedang menyiapkan tulisan pertama. Sementara menunggu, hal paling dekat dengan
              isi blog ini ada di daftar klien — sistem nyata yang sudah berjalan setiap hari.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/clients">
                Lihat Klien Kami
                <ArrowRight size={16} weight="bold" />
              </Button>
              <Button href="/contact" variant="secondary">
                Diskusikan Kebutuhan Anda
              </Button>
            </div>
          </Card>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <SectionHeading
            label="Sedang Disiapkan"
            title="Topik yang akan dibahas"
            subtitle="Belum bisa dibaca — daftar ini menunjukkan arah tulisan yang sedang kami garap."
          />
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {UPCOMING.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 0.08}>
                <Card padding="lg" interactive={false} className="h-full">
                  <Badge variant="neutral" className="self-start">
                    {item.category}
                  </Badge>
                  <h3 className="mt-3 font-heading text-h3 font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-body-sm leading-relaxed text-text-secondary">
                    {item.desc}
                  </p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
