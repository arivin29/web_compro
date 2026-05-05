'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { COMPANY } from '@/lib/constants'

export default function CompanyStory() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <h2 className="font-heading font-bold text-3xl text-brand-dark mb-6">
                Tentang {COMPANY.brand}
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Devetek adalah perusahaan teknologi yang berdiri sejak 2012, dan resmi
                  menjadi PT Comon Cipta Inovasi pada tahun 2018. Kami berfokus pada
                  pengembangan solusi perangkat lunak dan sistem sensor yang mendukung
                  digitalisasi sektor swasta, BUMN, BUMD, dan Pemerintahan.
                </p>
                <p>
                  Dengan pengalaman lebih dari satu dekade, Devetek telah menangani berbagai
                  proyek mulai dari ERP terintegrasi, infrastruktur cloud, hingga sistem PDAM
                  lengkap. PT Comon Cipta Inovasi telah berekspansi ke bidang IT,
                  Telekomunikasi, dan Kelistrikan.
                </p>
                <p>
                  Sebagai induk perusahaan, CCI memiliki lisensi dan didukung oleh PT Devetek
                  Marapi Inovasi (DMI) sebagai rekanan yang fokus pada pasar PDAM.
                </p>
              </div>

              {/* Entity info */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {Object.values(COMPANY.entities).map((entity) => (
                  <div key={entity.name} className="glass-card p-4">
                    <div className="font-heading font-semibold text-sm text-brand-dark">
                      {entity.name}
                    </div>
                    <div className="text-xs text-text-muted mt-1">{entity.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-border bg-surface-alt flex items-center justify-center h-64 md:h-80">
              <div className="text-center px-6">
                <div className="w-16 h-16 rounded-full bg-blue-50 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                </div>
                <p className="text-sm text-text-muted">Foto Kantor / Tim</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
