'use client'

import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import Link from 'next/link'
import { twMerge } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'whatsapp'
export type ButtonSize = 'sm' | 'default' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  /** Tampilkan spinner dan nonaktifkan interaksi. */
  loading?: boolean
  /** Regangkan selebar container. */
  block?: boolean
  children: ReactNode
  className?: string
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined }

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

/**
 * Varian tombol — blueprint §7.1.
 *
 * Label primary memakai putih bersih di atas oranye merek — keputusan
 * merek, ditetapkan 3 Sep 2026 dan sejak 4 Sep 2026 berlaku untuk setiap
 * permukaan `bg-brand-orange` yang memuat teks, bukan hanya tombol.
 * Kontrasnya 2.98:1, jadi kombinasi ini tidak memenuhi WCAG AA untuk teks.
 * Konsekuensinya:
 *
 *  - Jangan memakai `size="sm"` untuk aksi penting; makin kecil teks,
 *    makin terasa kurangnya kontras.
 *  - Jangan menurunkan `font-semibold` menjadi lebih tipis.
 *  - Jangan memakai warna oranye + teks putih untuk teks biasa di luar
 *    tombol (paragraf, label, link) — di sana pakai `brand-orange` pada
 *    permukaan gelap, atau `brand-blue-strong` pada permukaan terang.
 *
 * Bila suatu saat AA diperlukan, satu-satunya perubahan yang dibutuhkan
 * adalah menggelapkan permukaan tombol ke #B9540E (putih = 4.84:1).
 */
const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-brand-orange text-white font-semibold shadow-cta',
    'hover:bg-brand-orange-hover hover:shadow-card-hover',
    'active:translate-y-px',
  ].join(' '),

  secondary: [
    'bg-transparent text-text-primary font-semibold border border-brand-blue/45',
    'hover:border-brand-blue hover:bg-accent-light',
    '[.on-dark_&]:text-text-inverse [.on-dark_&]:border-white/30',
    '[.on-dark_&]:hover:border-white/60 [.on-dark_&]:hover:bg-white/10',
    'active:translate-y-px',
  ].join(' '),

  ghost: [
    'bg-transparent text-text-secondary font-medium',
    'hover:bg-surface-soft hover:text-text-primary',
    '[.on-dark_&]:text-text-inverse-muted [.on-dark_&]:hover:bg-white/10',
    '[.on-dark_&]:hover:text-text-inverse',
  ].join(' '),

  /* Hijau resmi WhatsApp (#075E54). Hanya untuk aksi yang benar-benar
     membuka WhatsApp — tidak menggantikan CTA utama Devetek. */
  whatsapp: 'bg-[#075E54] text-white font-semibold hover:bg-[#064C44] active:translate-y-px',
}

/** Ukuran — blueprint §7.1. Tinggi minimum memenuhi target sentuh 44px. */
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'min-h-[36px] px-3.5 text-body-sm gap-1.5',
  default: 'min-h-[44px] px-5 text-body-sm gap-2',
  lg: 'min-h-[52px] px-7 text-body gap-2',
}

const base = [
  'inline-flex items-center justify-center rounded-md font-body',
  'transition-all duration-200 ease-forward',
  'disabled:pointer-events-none disabled:opacity-50',
  'aria-disabled:pointer-events-none aria-disabled:opacity-50',
].join(' ')

function Spinner() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 animate-spin"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <circle cx="12" cy="12" r="9" strokeOpacity="0.25" />
      <path d="M21 12a9 9 0 0 0-9-9" strokeLinecap="round" />
    </svg>
  )
}

const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'default', loading = false, block = false, className, children, ...rest },
  ref,
) {
  const classes = twMerge(
    base,
    variantStyles[variant],
    sizeStyles[size],
    block && 'w-full',
    className,
  )

  const content = (
    <>
      {loading && <Spinner />}
      {children}
    </>
  )

  if ('href' in rest && rest.href !== undefined) {
    const { href, ...anchorProps } = rest as ButtonAsLink
    const isExternal = /^(https?:|mailto:|tel:)/.test(href)

    if (isExternal) {
      return (
        <a ref={ref} href={href} className={classes} {...anchorProps}>
          {content}
        </a>
      )
    }

    return (
      <Link ref={ref} href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    )
  }

  const { disabled, ...buttonProps } = rest as ButtonAsButton

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...buttonProps}
    >
      {content}
    </button>
  )
})

export default Button
