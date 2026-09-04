'use client'

import Image from 'next/image'
import { Reveal, Section, SectionHeading } from '@/components/ui'
import { COMPANY } from '@/lib/constants'
import { slotImage } from '@/lib/images'

/**
 * Cerita perusahaan — blueprint §18.
 * Kolom kanan memakai foto kantor, bukan screenshot produk: screenshot
 * sudah dipakai di beranda dan tidak menjelaskan apa pun tentang perusahaan.
 */
export default function CompanyStory() {
  return (
    <Section tone="white">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <SectionHeading
              label="Profil Perusahaan"
              title={`Tentang ${COMPANY.brand}`}
            />

            <div className="measure mt-6 space-y-4 font-body text-body leading-relaxed text-text-secondary">
              <p>
                Devetek berdiri pada {COMPANY.founded} sebagai tim kecil pembuat sistem
                informasi, lalu resmi berbadan hukum sebagai {COMPANY.name} pada{' '}
                {COMPANY.incorporated}. Sejak awal arah kami sama: menyatukan perangkat lunak
                dan perangkat sensor agar pekerjaan yang tadinya manual bisa dijalankan
                berdasarkan data.
              </p>
              <p>
                Sepanjang perjalanan itu kami menangani berbagai proyek — dari ERP
                terintegrasi, infrastruktur cloud, sistem PDAM lengkap, hingga pemantauan
                berbasis sensor. Kini Devetek berekspansi ke bidang IT, telekomunikasi, dan
                kelistrikan.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="space-y-5">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-surface-soft shadow-card">
              <Image
                src={slotImage('about_kantor')}
                alt="Suasana kantor Devetek di Bogor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Struktur entitas — blueprint §18 */}
            <div className="rounded-lg border border-border bg-surface-soft p-5">
              <h3 className="label-section mb-4 text-brand-blue-strong">Struktur Perusahaan</h3>
              <ul className="space-y-2.5">
                {Object.values(COMPANY.entities).map((entity) => (
                  <li
                    key={entity.name}
                    className="flex items-start gap-3 rounded-md border border-border bg-surface-white p-3.5"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-light font-heading text-[0.6875rem] font-bold text-brand-blue-strong"
                    >
                      {entity.name
                        .split(' ')
                        .map((w) => w[0])
                        .slice(0, 3)
                        .join('')}
                    </span>
                    <span>
                      <span className="block font-heading text-body-sm font-semibold text-text-primary">
                        {entity.name}
                      </span>
                      <span className="mt-0.5 block font-body text-body-sm text-text-muted">
                        {entity.desc}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
