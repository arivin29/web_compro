import { ReactNode } from 'react'
import { twMerge } from '@/lib/cn'

export type BadgeVariant =
  | 'brand'
  | 'featured'
  | 'success'
  | 'warning'
  | 'neutral'
  | 'inverse'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  /** Titik status kecil di depan teks. */
  dot?: boolean
  className?: string
}

/**
 * Badge — blueprint §7.2.
 *
 * Radius 4px, BUKAN pill (§6.1: "Badge dan filter menggunakan radius 4px").
 * Usahakan isinya maksimal dua kata.
 */
const variantStyles: Record<BadgeVariant, string> = {
  brand: 'bg-accent-light text-brand-blue-strong border-brand-blue/25',
  featured: 'bg-[#FDF0E4] text-[#A33A12] border-brand-orange/35',
  success: 'bg-state-success-soft text-state-success-strong border-state-success/25',
  warning: 'bg-state-warning-soft text-[#9A5406] border-state-warning/30',
  neutral: 'bg-surface-soft text-text-secondary border-border',
  inverse: 'bg-white/10 text-text-inverse border-white/25',
}

const dotStyles: Record<BadgeVariant, string> = {
  brand: 'bg-brand-blue',
  featured: 'bg-brand-orange',
  success: 'bg-state-success',
  warning: 'bg-state-warning',
  neutral: 'bg-text-muted',
  inverse: 'bg-brand-orange',
}

export default function Badge({
  children,
  variant = 'brand',
  dot = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={twMerge(
        'inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 font-body text-body-sm font-semibold leading-none',
        variantStyles[variant],
        className,
      )}
    >
      {dot && <span aria-hidden className={twMerge('h-1.5 w-1.5 rounded-full', dotStyles[variant])} />}
      {children}
    </span>
  )
}
