import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import Container from './Container'

export type SectionTone = 'page' | 'white' | 'soft' | 'dark' | 'dark-soft'

interface SectionProps {
  children: ReactNode
  /**
   * Ritme background — blueprint §5.4.
   * Urutan yang dianjurkan di homepage:
   * dark → white → soft → white → dark → white → soft → dark.
   */
  tone?: SectionTone
  /** Kerapatan jarak vertikal. Default mengikuti blueprint §5.3 (64/80/96px). */
  space?: 'default' | 'compact' | 'loose' | 'none'
  /** Pola latar dekoratif. */
  pattern?: 'none' | 'grid' | 'dots'
  /** Garis pembatas atas/bawah. */
  divider?: 'none' | 'top' | 'signature-top'
  /**
   * Lebar container. Pakai prop ini, JANGAN menimpa lewat
   * `containerClassName="max-w-..."` — tailwind-merge tidak mengenali
   * token `max-w-container`, sehingga dua kelas max-width akan ikut
   * terpasang sekaligus dan hasilnya bergantung urutan CSS.
   */
  width?: 'default' | 'narrow' | 'prose'
  id?: string
  className?: string
  /** Kelas tambahan untuk container di dalamnya. Bukan untuk mengatur lebar. */
  containerClassName?: string
  /** Set `false` bila section perlu mengatur containernya sendiri. */
  contained?: boolean
}

const toneStyles: Record<SectionTone, string> = {
  page: 'bg-surface-page text-text-secondary',
  white: 'bg-surface-white text-text-secondary',
  soft: 'bg-surface-soft text-text-secondary',
  dark: 'on-dark bg-surface-dark text-text-inverse-muted',
  'dark-soft': 'on-dark bg-surface-dark-soft text-text-inverse-muted',
}

const spaceStyles = {
  none: '',
  compact: 'py-12 md:py-16',
  default: 'py-16 md:py-20 lg:py-24',
  loose: 'py-20 md:py-24 lg:py-30',
} as const

/**
 * Pembungkus section standar Devetek.
 *
 * Menangani tiga hal yang sebelumnya ditulis ulang di tiap halaman:
 * ritme background (§5.4), jarak vertikal (§5.3), dan pola dekoratif.
 * Section bertema gelap otomatis mendapat kelas `on-dark`, sehingga
 * link dan focus ring di dalamnya ikut menyesuaikan.
 *
 * @example
 * <Section tone="soft">
 *   <SectionHeading label="Produk" title="Solusi Lengkap" />
 *   ...
 * </Section>
 */
export default function Section({
  children,
  tone = 'white',
  space = 'default',
  pattern = 'none',
  divider = 'none',
  width = 'default',
  id,
  className,
  containerClassName,
  contained = true,
}: SectionProps) {
  const isDark = tone === 'dark' || tone === 'dark-soft'

  return (
    <section
      id={id}
      className={twMerge(
        'relative overflow-hidden',
        toneStyles[tone],
        spaceStyles[space],
        divider === 'top' && 'border-t border-border',
        className,
      )}
    >
      {divider === 'signature-top' && (
        <div aria-hidden className="signature-line absolute inset-x-0 top-0" />
      )}

      {pattern !== 'none' && (
        <div
          aria-hidden
          className={twMerge(
            'absolute inset-0',
            pattern === 'grid' && 'pattern-grid',
            pattern === 'dots' && (isDark ? 'pattern-dots' : 'pattern-dots-light'),
          )}
        />
      )}

      {contained ? (
        <Container width={width} className={twMerge('relative', containerClassName)}>
          {children}
        </Container>
      ) : (
        children
      )}
    </section>
  )
}
