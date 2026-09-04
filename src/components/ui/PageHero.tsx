import { ReactNode } from 'react'
import Link from 'next/link'
import { twMerge } from '@/lib/cn'
import Container from './Container'
import ForwardLayers from './ForwardLayers'

interface Crumb {
  label: string
  href?: string
}

interface PageHeroProps {
  /** Label uppercase kecil di atas judul. */
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  /** Breadcrumb opsional — blueprint §11.2. */
  breadcrumb?: readonly Crumb[]
  /** Tombol aksi. Biasanya satu primary + satu secondary. */
  actions?: ReactNode
  /** Kolom kanan: screenshot produk, diagram, atau visual implementasi. */
  media?: ReactNode
  className?: string
}

/**
 * Hero halaman dalam — blueprint §11.2.
 *
 * Semua halaman selain beranda WAJIB memakai komponen ini agar
 * tinggi, background, dan hierarki heading konsisten di seluruh route.
 * Beranda memakai hero-nya sendiri yang lebih tinggi (§11.1).
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  actions,
  media,
  className,
}: PageHeroProps) {
  return (
    <section
      className={twMerge(
        'on-dark relative overflow-hidden bg-gradient-hero pt-[var(--header-h)] text-text-inverse-muted',
        className,
      )}
    >
      <div aria-hidden className="pattern-grid absolute inset-0" />

      {/* Satu elemen Forward Layers dominan per viewport — blueprint §2.3 */}
      <ForwardLayers
        tone="mono"
        opacity={0.07}
        className="absolute -right-16 -top-10 h-[380px] w-[380px] text-white"
      />

      <Container className="relative py-14 md:py-18 lg:py-20">
        <div
          className={twMerge(
            'grid items-center gap-10',
            media && 'lg:grid-cols-[1.1fr_1fr] lg:gap-14',
          )}
        >
          <div>
            {breadcrumb && breadcrumb.length > 0 && (
              <nav aria-label="Breadcrumb" className="mb-5">
                <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-body-sm text-text-inverse-muted">
                  {breadcrumb.map((c, i) => (
                    <li key={c.label} className="flex items-center gap-2">
                      {i > 0 && (
                        <span aria-hidden className="text-white/30">
                          /
                        </span>
                      )}
                      {c.href ? (
                        <Link href={c.href} className="rounded-sm transition-colors hover:text-white">
                          {c.label}
                        </Link>
                      ) : (
                        <span aria-current="page" className="text-white">
                          {c.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {eyebrow && (
              <div className="label-section mb-4 flex items-center gap-2.5 text-brand-blue-soft">
                <span aria-hidden className="h-2 w-2 rotate-45 bg-brand-orange" />
                {eyebrow}
              </div>
            )}

            <h1 className="font-heading text-h1 font-bold text-text-inverse">{title}</h1>

            {description && (
              <p className="measure mt-5 font-body text-body-lg text-text-inverse-muted">
                {description}
              </p>
            )}

            {actions && <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>}
          </div>

          {media && <div className="relative">{media}</div>}
        </div>
      </Container>
    </section>
  )
}
