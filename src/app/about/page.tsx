import type { Metadata } from 'next'
import { seoConfig } from '@/lib/metadata'
import PageHero from './components/PageHero'
import CompanyStory from './components/CompanyStory'
import Timeline from './components/Timeline'
import VisiMisi from './components/VisiMisi'
import Values from './components/Values'
import TeamSection from './components/TeamSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = seoConfig.about

export default function AboutPage() {
  return (
    <>
      <PageHero />
      <CompanyStory />
      <Timeline />
      <VisiMisi />
      <Values />
      <TeamSection />
      <CTASection />
    </>
  )
}
