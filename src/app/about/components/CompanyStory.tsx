'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { COMPANY } from '@/lib/constants'

export default function CompanyStory() {
  return (
    <section className="relative py-12 md:py-20 bg-white overflow-hidden">
      {/* Subtle dot pattern */}
      <div aria-hidden className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #1565C0 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          <ScrollReveal>
            <div>
              <span className="inline-flex items-center px-3 py- rounded-full text-xs font-medium bg-brand-blue/10 text-brand-blue mb-4">
                SEJAK 2012
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-dark mb-6">
                Tentang {COMPANY.brand}
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed text-[15px]">
                <p>
                  Devetek adalah perusahaan teknologi yang berdiri sejak 2012, dan resmi
                  berbadan hukum sebagai PT Comon Cipta Inovasi pada tahun 2018. Kami berfokus pada
                  pengembangan solusi perangkat lunak dan sistem sensor yang mendukung
                  digitalisasi sektor swasta, BUMN, BUMD, dan Pemerintahan.
                </p>
                <p>
                  Dengan pengalaman lebih dari satu dekade, Devetek telah menangani berbagai
                  proyek mulai dari ERP terintegrasi, infrastruktur cloud, hingga sistem PDAM
                  lengkap. Kini Devetek telah berekspansi ke bidang IT,
                  Telekomunikasi, dan Kelistrikan.
                </p>
                <p>
                  Sebagai induk perusahaan, CCI memiliki lisensi dan didukung oleh PT Devetek
                  Marapi Inovasi (DMI) sebagai rekanan yang fokus pada pasar PDAM.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-56 md:h-72 relative bg-gradient-to-br from-brand-blue/5 to-brand-blue/10">
                <Image
                  src="/images/projects/pdam-billing.png"
                  alt="Devetek Platform"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Entity info */}
              <div className="grid grid-cols-3 gap-3">
                {Object.values(COMPANY.entities).map((entity) => (
                  <div key={entity.name} className="bg-surface-alt border border-border rounded-xl p-4 text-center">
                    <div className="font-heading font-semibold text-sm text-brand-dark">
                      {entity.name}
                    </div>
                    <div className="text-xs text-text-muted mt-1">{entity.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
