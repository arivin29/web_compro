'use client'

import {
  LightbulbFilament,
  ShieldCheck,
  Target,
  Trophy,
  UsersFour,
  type Icon,
} from '@phosphor-icons/react'
import { FeatureCard, Reveal, Section, SectionHeading } from '@/components/ui'
import { VALUES } from '@/lib/constants'

const ICONS: Record<string, Icon> = {
  Shield: ShieldCheck,
  Lightbulb: LightbulbFilament,
  Users: UsersFour,
  Target,
  Award: Trophy,
}

/** Nilai-nilai perusahaan — blueprint §18. */
export default function Values() {
  return (
    <Section tone="white">
      <Reveal>
        <SectionHeading
          label="Nilai-Nilai Kami"
          title="Lima hal yang kami pegang di setiap proyek"
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {VALUES.map((value, i) => {
          const ValueIcon = ICONS[value.icon] ?? ShieldCheck
          return (
            <Reveal key={value.name} delay={i * 0.07}>
              <FeatureCard
                icon={<ValueIcon size={21} />}
                title={value.name}
                description={value.description}
                className="h-full"
              />
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
