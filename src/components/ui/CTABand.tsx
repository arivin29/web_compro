import { ReactNode } from 'react'
import Container from './Container'
import ForwardLayers from './ForwardLayers'

interface CTABandProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  actions: ReactNode
  /** Konten pendamping di kolom kanan, mis. daftar kontak. */
  aside?: ReactNode
}

/**
 * Blok CTA standar — dipakai sebagai penutup halaman dan pre-footer.
 * Selalu satu primary button; aksi lain memakai secondary atau whatsapp
 * (blueprint §7.1: maksimal satu primary per kelompok aksi).
 */
export default function CTABand({
  eyebrow,
  title,
  description,
  actions,
  aside,
}: CTABandProps) {
  return (
    <section className="on-dark relative overflow-hidden bg-surface-dark text-text-inverse-muted">
      <div aria-hidden className="signature-line absolute inset-x-0 top-0" />
      <div aria-hidden className="pattern-grid absolute inset-0" />
      <ForwardLayers
        tone="mono"
        opacity={0.06}
        className="absolute -bottom-16 right-4 h-[300px] w-[300px] text-white"
      />

      <Container className="relative py-16 md:py-20 lg:py-24">
        <div className={aside ? 'grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]' : ''}>
          <div>
            {eyebrow && (
              <div className="label-section mb-4 flex items-center gap-2.5 text-brand-blue-soft">
                <span aria-hidden className="h-2 w-2 rotate-45 bg-brand-orange" />
                {eyebrow}
              </div>
            )}

            <h2 className="font-heading text-h2 font-bold text-text-inverse">{title}</h2>

            {description && (
              <p className="measure mt-4 font-body text-body-lg text-text-inverse-muted">
                {description}
              </p>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {actions}
            </div>
          </div>

          {aside && <div>{aside}</div>}
        </div>
      </Container>
    </section>
  )
}
