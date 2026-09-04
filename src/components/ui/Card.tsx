import { ElementType, ReactNode } from 'react'
import Link from 'next/link'
import { twMerge } from '@/lib/cn'

export type CardTone = 'light' | 'soft' | 'dark' | 'dark-soft'
export type CardAccent = 'none' | 'brand' | 'orange' | 'blue' | 'gradient'

interface CardProps {
  children: ReactNode
  /** Warna permukaan card. `dark` untuk card di atas section navy. */
  tone?: CardTone
  /**
   * Garis aksen pendek di sisi atas kiri (blueprint §8.1),
   * atau garis gradient penuh untuk card unggulan (§6.2).
   */
  accent?: CardAccent
  /** Angkat 4px + border biru saat hover. Aktif otomatis bila `href` diisi. */
  interactive?: boolean
  padding?: 'sm' | 'default' | 'lg' | 'none'
  /** Bila diisi, seluruh card menjadi satu link. */
  href?: string
  as?: ElementType
  className?: string
}

const toneStyles: Record<CardTone, string> = {
  light: 'bg-surface-white border-border shadow-card',
  soft: 'bg-surface-soft border-border',
  dark: 'on-dark bg-surface-dark border-white/12 text-text-inverse-muted',
  'dark-soft': 'on-dark bg-surface-dark-soft border-white/12 text-text-inverse-muted',
}

const hoverStyles: Record<CardTone, string> = {
  light: 'hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-card-hover',
  soft: 'hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-card',
  dark: 'hover:-translate-y-1 hover:border-white/30 hover:bg-surface-dark-soft',
  'dark-soft': 'hover:-translate-y-1 hover:border-white/30',
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  default: 'p-6',
  lg: 'p-6 md:p-8',
} as const

const accentStyles: Record<CardAccent, string> = {
  none: '',
  brand: 'bg-brand-blue',
  orange: 'bg-brand-orange',
  blue: 'bg-brand-blue',
  gradient: 'bg-gradient-signature',
}

/**
 * Card baseline Devetek — blueprint §8.1.
 *
 * Radius 8px, border tipis, shadow lembut, hover naik maksimal 4px.
 * Card unggulan dibedakan lewat `accent="gradient"` atau `tone="dark"`,
 * BUKAN lewat radius yang lebih besar (§6.1).
 *
 * @example
 * <Card accent="orange" href="/products/erp" interactive>
 *   <h3>DEVETEK ERP</h3>
 * </Card>
 */
export default function Card({
  children,
  tone = 'light',
  accent = 'none',
  interactive,
  padding = 'default',
  href,
  as,
  className,
}: CardProps) {
  const isInteractive = interactive ?? Boolean(href)
  const isFullBar = accent === 'gradient'

  const classes = twMerge(
    'group relative flex flex-col overflow-hidden rounded-lg border transition-all duration-300 ease-forward',
    toneStyles[tone],
    isInteractive && hoverStyles[tone],
    paddingStyles[padding],
    className,
  )

  const inner = (
    <>
      {accent !== 'none' && (
        <span
          aria-hidden
          className={twMerge(
            'absolute top-0 left-0',
            accentStyles[accent],
            isFullBar ? 'h-1 w-full' : 'h-0.5 w-10',
          )}
        />
      )}
      {children}
    </>
  )

  if (href) {
    const isExternal = /^(https?:|mailto:|tel:)/.test(href)
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    )
  }

  const Tag = as ?? 'div'
  return <Tag className={classes}>{inner}</Tag>
}
