'use client'

import { ArrowRight } from '@phosphor-icons/react'
import { Button, ProjectCard, Reveal, Section, SectionHeading } from '@/components/ui'
import { FEATURED_PROJECTS } from '@/lib/constants'

/**
 * Proyek nyata — blueprint §17 poin 7 dan §8.3.
 *
 * Datanya diambil dari FEATURED_PROJECTS di constants, sumber yang sama
 * dengan halaman /clients. Tiga proyek yang ditandai `featured` sengaja
 * mewakili satu sektor berbeda (PDAM, Pemerintahan, Swasta) supaya
 * cakupan Devetek terlihat.
 *
 * Section ini sebelumnya menampilkan D-IBS/D-ASSET/HELIOS lagi — produk
 * yang sudah dijelaskan di ProductsSection dan EcosystemSection, memakai
 * screenshot yang sama dengan hero. Itu pengulangan, bukan bukti.
 *
 * Kartu di sini tidak lagi menautkan ke /clients. Halaman itu kini berisi
 * bukti sektor, bukan galeri proyek; daftar proyek lengkapnya ada di
 * halaman Software House.
 */
export default function ProjectsSection() {
  return (
    <Section tone="white">
      <Reveal>
        <SectionHeading
          label="Implementasi Nyata"
          title="Sistem yang sudah dipakai, di sektor yang berbeda-beda"
          subtitle="Bukan hanya air minum — kami juga membangun sistem untuk kementerian, pemerintah daerah, dan perusahaan swasta."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {FEATURED_PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <ProjectCard
              image={p.image}
              title={p.title}
              category={p.category}
              client={p.client}
              impact={p.desc}
            />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10">
          <Button href="/clients" variant="secondary">
            Lihat klien dan sektornya
            <ArrowRight size={16} weight="bold" />
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
