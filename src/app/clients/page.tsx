'use client'

import { Bank, Buildings, Drop, Handshake, MapPin, type Icon } from '@phosphor-icons/react'
import {
  Card,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
  TestimonialCard,
} from '@/components/ui'
import { CLIENTS, TESTIMONIALS } from '@/lib/constants'
import CTASection from '@/components/sections/CTASection'

const SECTORS: { key: string; icon: Icon; title: string; note: string }[] = [
  {
    key: 'PDAM',
    icon: Drop,
    title: 'PDAM & Air Minum',
    note: 'Billing, baca meter, akuntansi, dan monitoring jaringan berjalan harian.',
  },
  {
    key: 'Pemerintahan',
    icon: Bank,
    title: 'Kementerian & Pemerintah Daerah',
    note: 'Sistem perizinan, pemantauan berbasis peta, dan pelaporan lintas wilayah.',
  },
  {
    key: 'Swasta',
    icon: Buildings,
    title: 'Perusahaan Swasta',
    note: 'ERP, manajemen aset, dan sistem operasional khusus per industri.',
  },
]

/**
 * Dua rujukan yang boleh disebut lengkap dengan angkanya.
 *
 * Angka di sini berasal dari keterangan klien sendiri — bukan estimasi
 * kami. Rujukan tanpa angka yang bisa dipertanggungjawabkan sengaja
 * ditulis apa adanya sebagai lingkup pekerjaan, bukan dibuatkan
 * "peningkatan sekian persen".
 */
const REFERENCES = [
  {
    client: 'PT Bakti Air Indonesia',
    sector: 'Monitoring jaringan air',
    scope: 'Pemasangan HELIOS di 5 DMA dengan lebih dari 200 node sensor.',
    outcome:
      'Kebocoran terbaca dari data, bukan dari keluhan pelanggan. Menurut tim teknis mereka, waktu deteksi turun dari hitungan hari menjadi hitungan menit.',
    facts: [
      { value: '5', label: 'DMA dipantau' },
      { value: '200+', label: 'node sensor' },
    ],
  },
  {
    client: 'Kementerian Kelautan & Perikanan',
    sector: 'Pengawasan perikanan',
    scope:
      'Vessel Monitoring System berbasis WebGIS, ditambah kanal pelaporan pelanggaran SDKP dan pelacakan posisi kapal lewat ponsel.',
    outcome:
      'Posisi kapal dan laporan lapangan masuk ke satu peta yang sama, sehingga pengawas tidak lagi menggabungkan data dari beberapa sumber terpisah.',
    facts: [],
  },
]

const PARTNERS = [
  { name: 'PT Bakti Air Indonesia', role: 'Rekanan produk PDAM' },
  { name: 'PT Devetek Marapi Inovasi', role: 'Rekanan fokus pasar PDAM' },
]

/**
 * Klien — blueprint §18, disusun ulang September 2026.
 *
 * Sebelumnya halaman ini berupa galeri portofolio: sepuluh kartu proyek
 * lintas sektor dengan filter. Untuk pembaca korporat, galeri semacam itu
 * membaca sebagai perusahaan yang masih perlu membuktikan diri, dan
 * keluasannya justru mengaburkan kedalaman di sektor air minum.
 *
 * Yang tinggal di sini sekarang adalah bukti yang bisa diperiksa: nama
 * institusi per sektor, dua rujukan berikut angkanya, dan tawaran untuk
 * dipertemukan langsung dengan pengguna sistemnya. Daftar proyek lintas
 * sektor pindah ke halaman Software House, tempat keluasan justru menjadi
 * nilai jual.
 */
export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Klien"
        title="Siapa yang sistemnya kami jalankan"
        description="Bukan galeri logo. Ini institusi yang memakai sistem kami setiap hari, disebut dengan nama, beserta sektornya."
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Klien' }]}
      />

      <Section tone="white">
        <Reveal>
          <SectionHeading
            label="Sebaran Klien"
            title="Tiga sektor, seluruhnya disebut dengan nama"
            subtitle="Setiap nama di bawah ini adalah institusi yang sistemnya sudah diserahterimakan dan masih berjalan."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {SECTORS.map((s, i) => {
            const list = CLIENTS.filter((c) => c.category === s.key)
            const SectorIcon = s.icon
            return (
              <Reveal key={s.key} delay={i * 0.08}>
                <Card padding="lg" interactive={false} className="h-full">
                  <div className="flex items-center gap-3.5">
                    <span
                      aria-hidden
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent-light text-brand-blue-strong"
                    >
                      <SectorIcon size={21} />
                    </span>
                    <div>
                      <h3 className="font-heading text-h3 font-semibold text-text-primary">
                        {s.title}
                      </h3>
                      <p className="tabular font-body text-body-sm text-text-muted">
                        {list.length} institusi
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 font-body text-body-sm leading-relaxed text-text-secondary">
                    {s.note}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {list.map((c) => (
                      <li key={c.name} className="flex items-start gap-2.5">
                        <span
                          aria-hidden
                          className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-blue"
                        />
                        <span className="font-body text-body-sm text-text-secondary">{c.name}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section tone="soft">
        <Reveal>
          <SectionHeading
            label="Rujukan"
            title="Dua yang boleh Anda periksa sendiri"
            subtitle="Angka pada rujukan pertama berasal dari keterangan klien, bukan hitungan kami."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {REFERENCES.map((r, i) => (
            <Reveal key={r.client} delay={i * 0.08}>
              <Card padding="lg" accent="orange" interactive={false} className="h-full">
                <p className="label-section text-brand-blue-strong">{r.sector}</p>
                <h3 className="mt-3 font-heading text-h3 font-semibold text-text-primary">
                  {r.client}
                </h3>

                <p className="mt-4 font-body text-body-sm leading-relaxed text-text-secondary">
                  {r.scope}
                </p>
                <p className="mt-3 font-body text-body-sm leading-relaxed text-text-secondary">
                  {r.outcome}
                </p>

                {r.facts.length > 0 && (
                  <dl className="mt-6 flex gap-8 border-t border-border pt-5">
                    {r.facts.map((f) => (
                      <div key={f.label} className="flex flex-col-reverse">
                        <dt className="font-body text-body-sm text-text-muted">{f.label}</dt>
                        <dd className="tabular font-heading text-h2 font-bold text-brand-blue-strong">
                          {f.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16}>
          <div className="mt-8 flex items-start gap-3.5 rounded-md border border-border bg-surface-white px-5 py-4">
            <MapPin size={19} aria-hidden className="mt-0.5 shrink-0 text-brand-orange" />
            <p className="font-body text-body-sm leading-relaxed text-text-secondary">
              Ingin mendengar langsung dari penggunanya? Kami bersedia mempertemukan Anda dengan
              klien yang sistemnya sejenis, atau mengatur kunjungan ke lokasi tempat sistem itu
              berjalan. Cukup sampaikan saat pembicaraan awal.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <div>
              <SectionHeading label="Mitra Strategis" title="Rekanan yang mendukung solusi kami" />
              <ul className="mt-8 space-y-3">
                {PARTNERS.map((p) => (
                  <li key={p.name}>
                    <Card padding="sm" interactive={false}>
                      <div className="flex items-center gap-3.5">
                        <span
                          aria-hidden
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-light text-brand-blue-strong"
                        >
                          <Handshake size={19} />
                        </span>
                        <span>
                          <span className="block font-heading text-body-sm font-semibold text-text-primary">
                            {p.name}
                          </span>
                          <span className="mt-0.5 block font-body text-body-sm text-text-muted">
                            {p.role}
                          </span>
                        </span>
                      </div>
                    </Card>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <SectionHeading label="Testimoni" title="Kata mereka" as="h2" />
              <div className="mt-8">
                <TestimonialCard
                  quote={TESTIMONIALS[1].quote}
                  name={TESTIMONIALS[1].name}
                  role={TESTIMONIALS[1].role}
                  company={TESTIMONIALS[1].company}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection />
    </>
  )
}
