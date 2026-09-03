'use client'

import Image from 'next/image'
import { Reveal, Section, SectionHeading } from '@/components/ui'
import { TEAM } from '@/lib/constants'

/**
 * Tim Devetek — blueprint §18.
 *
 * Hanya menampilkan nama dan peran. Foto dipakai bila filenya tersedia;
 * sisanya memakai inisial, bukan foto placeholder.
 *
 * CATATAN: section ini belum dipasang di halaman /about. Pastikan foto dan
 * pencantuman nama sudah disetujui setiap anggota sebelum diaktifkan.
 */
export default function TeamSection() {
  return (
    <Section tone="soft">
      <Reveal>
        <SectionHeading
          label="Tim Kami"
          title="Didukung profesional berpengalaman"
        />
      </Reveal>

      <ul className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {TEAM.map((member, i) => (
          <li key={member.name}>
            <Reveal delay={i * 0.05}>
              <div className="rounded-lg border border-border bg-surface-white p-5 text-center shadow-card">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={`Foto ${member.name}`}
                    width={80}
                    height={80}
                    className="mx-auto h-20 w-20 rounded-full border border-border object-cover"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-border bg-accent-light font-heading text-h3 font-bold text-brand-blue-strong"
                  >
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </span>
                )}

                <h3 className="mt-4 font-heading text-body-sm font-semibold text-text-primary">
                  {member.name}
                </h3>
                <p className="mt-1 font-body text-body-sm text-text-muted">{member.role}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
