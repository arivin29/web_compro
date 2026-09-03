import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ProcessCardProps {
  /** Nomor tahap, mis. "01". Tampil besar sesuai blueprint §8.5. */
  step: string
  title: string
  description: string
  icon?: ReactNode
  /** Sembunyikan garis penghubung pada kartu terakhir. */
  last?: boolean
  className?: string
}

/**
 * Card tahapan proses — blueprint §8.5.
 * Nomor tahap dominan, antar-card dihubungkan garis mengarah ke depan.
 */
export default function ProcessCard({
  step,
  title,
  description,
  icon,
  last = false,
  className,
}: ProcessCardProps) {
  return (
    <div className={twMerge('relative', className)}>
      {/* Garis penghubung — hanya desktop, mengarah ke kartu berikutnya */}
      {!last && (
        <span
          aria-hidden
          className="absolute left-[calc(50%+2.5rem)] right-[calc(-50%+2.5rem)] top-8 hidden h-px bg-border lg:block"
        />
      )}

      <div className="relative flex flex-col items-center text-center">
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-lg border border-border bg-surface-white text-brand-blue-strong shadow-card">
          {icon}
          <span
            aria-hidden
            className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-sm bg-brand-orange px-1 font-heading text-[0.6875rem] font-bold text-brand-navy"
          >
            {step}
          </span>
        </div>

        <h3 className="mt-4 font-heading text-h4 font-semibold text-text-primary">{title}</h3>
        <p className="measure-tight mt-2 font-body text-body-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  )
}
