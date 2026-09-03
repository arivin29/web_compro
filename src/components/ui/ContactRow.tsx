import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ContactRowProps {
  icon: ReactNode
  label: string
  value: ReactNode
  /** Bila diisi, seluruh baris menjadi clickable (blueprint §8.7). */
  href?: string
  className?: string
}

/**
 * Baris informasi kontak — blueprint §8.7.
 * Satu informasi utama per baris, ikon konsisten,
 * baris email/telepon selalu clickable.
 */
export default function ContactRow({ icon, label, value, href, className }: ContactRowProps) {
  const body = (
    <>
      <span
        aria-hidden
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-light text-brand-blue-strong [.on-dark_&]:bg-white/10 [.on-dark_&]:text-brand-blue-soft"
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="label-section block text-text-muted [.on-dark_&]:text-text-inverse-muted">
          {label}
        </span>
        <span className="mt-1 block font-body text-body-sm text-text-primary [.on-dark_&]:text-text-inverse">
          {value}
        </span>
      </span>
    </>
  )

  const classes = twMerge(
    'tap-target flex items-start gap-3.5 rounded-md',
    href && 'transition-colors hover:bg-surface-soft [.on-dark_&]:hover:bg-white/5 -m-2 p-2',
    className,
  )

  if (!href) return <div className={classes}>{body}</div>

  return (
    <a href={href} className={classes}>
      {body}
    </a>
  )
}
