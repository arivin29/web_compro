import { ReactNode } from 'react'
import Card, { CardAccent, CardTone } from './Card'

interface FeatureCardProps {
  icon?: ReactNode
  title: string
  description: ReactNode
  /** Daftar poin ringkas di bawah deskripsi. */
  points?: readonly string[]
  href?: string
  /** Teks link di kaki card. Muncul hanya bila `href` diisi. */
  linkLabel?: string
  tone?: CardTone
  accent?: CardAccent
  className?: string
  /**
   * Konten tambahan di bawah deskripsi — mis. daftar tag atau angka
   * pendukung. Dirender sebelum tautan kaki.
   */
  children?: ReactNode
}

/**
 * Card fitur/manfaat generik — ikon, judul, deskripsi.
 * Bentuk paling umum di seluruh situs; pakai ini alih-alih
 * menyusun ulang div + border + hover di tiap halaman.
 */
export default function FeatureCard({
  icon,
  title,
  description,
  points,
  href,
  linkLabel = 'Selengkapnya',
  tone = 'light',
  accent = 'none',
  className,
  children,
}: FeatureCardProps) {
  return (
    <Card tone={tone} accent={accent} href={href} padding="lg" className={className}>
      {icon && (
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-accent-light text-brand-blue-strong transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white [.on-dark_&]:bg-white/10 [.on-dark_&]:text-brand-blue-soft">
          {icon}
        </div>
      )}

      <h3 className="font-heading text-h3 font-semibold text-text-primary [.on-dark_&]:text-text-inverse">
        {title}
      </h3>

      <div className="mt-2 flex-1 font-body text-body-sm leading-relaxed text-text-secondary [.on-dark_&]:text-text-inverse-muted">
        {description}
      </div>

      {points && points.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2 font-body text-body-sm text-text-secondary [.on-dark_&]:text-text-inverse-muted"
            >
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-orange" />
              {p}
            </li>
          ))}
        </ul>
      )}

      {children}

      {href && (
        <span className="mt-5 inline-flex items-center gap-1.5 font-body text-body-sm font-semibold text-brand-blue-strong [.on-dark_&]:text-brand-blue-soft">
          {linkLabel}
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 8h9M8.5 4l4 4-4 4" />
          </svg>
        </span>
      )}
    </Card>
  )
}
