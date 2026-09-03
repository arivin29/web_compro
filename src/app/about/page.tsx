import type { Metadata } from 'next'
import { PageHero } from '@/components/ui'
import { seoConfig } from '@/lib/metadata'
import CompanyStory from './components/CompanyStory'
import Timeline from './components/Timeline'
import VisiMisi from './components/VisiMisi'
import Values from './components/Values'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = seoConfig.about

/**
 * Halaman Tentang — urutan mengikuti blueprint §18.
 *
 * Ritme background: dark (hero) → white → soft → dark → white → dark (CTA).
 *
 * TeamSection tersedia di ./components/TeamSection tetapi belum dipasang;
 * pencantuman nama dan foto tim perlu persetujuan lebih dulu.
 */
export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Lebih dari satu dekade membangun solusi digital"
        description="Perusahaan teknologi Indonesia yang berfokus pada digitalisasi PDAM, sistem sensor IoT, dan solusi enterprise untuk sektor publik maupun swasta."
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Tentang Kami' }]}
      />
      <CompanyStory />
      <Timeline />
      <VisiMisi />
      <Values />
      <CTASection />
    </>
  )
}
