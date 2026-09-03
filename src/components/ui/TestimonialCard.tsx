import { ReactNode } from 'react'
import Card from './Card'

interface TestimonialCardProps {
  quote: string
  /** Nama pemberi testimoni. Jangan pakai placeholder di produksi (blueprint §8.6). */
  name: string
  role: string
  company: string
  /** Angka pendukung yang dapat diverifikasi, mis. "200+ sensor node". */
  highlights?: readonly { value: string; label: string }[]
  children?: ReactNode
}

/**
 * Card testimoni — blueprint §8.6.
 * Kutipan menjadi fokus, identitas jelas, tanpa rating bintang palsu.
 */
export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  highlights,
}: TestimonialCardProps) {
  return (
    <Card padding="lg" className="h-full">
      <svg
        aria-hidden
        viewBox="0 0 32 32"
        className="h-7 w-7 shrink-0 text-brand-orange/40"
        fill="currentColor"
      >
        <path d="M12.5 7C8 8.9 5 13.2 5 18.4V25h9.5v-9.5h-4c0-2.7 1-4.6 3-5.9L12.5 7Zm14 0C22 8.9 19 13.2 19 18.4V25h9.5v-9.5h-4c0-2.7 1-4.6 3-5.9L26.5 7Z" />
      </svg>

      <blockquote className="mt-4 flex-1 font-body text-body-lg leading-relaxed text-text-primary">
        {quote}
      </blockquote>

      {highlights && highlights.length > 0 && (
        <dl className="mt-6 flex flex-wrap gap-2">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex flex-row-reverse items-baseline gap-1.5 rounded-sm bg-surface-soft px-3 py-2"
            >
              <dt className="font-body text-body-sm text-text-muted">{h.label}</dt>
              <dd className="font-heading text-body font-bold text-brand-blue-strong">
                {h.value}
              </dd>
            </div>
          ))}
        </dl>
      )}

      <footer className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span
          aria-hidden
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-light font-heading text-body font-bold text-brand-blue-strong"
        >
          {name.charAt(0)}
        </span>
        <div>
          <div className="font-heading text-body-sm font-semibold text-text-primary">{name}</div>
          <div className="font-body text-body-sm text-text-muted">
            {role} — {company}
          </div>
        </div>
      </footer>
    </Card>
  )
}
