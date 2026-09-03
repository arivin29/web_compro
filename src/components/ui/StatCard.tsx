import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import Counter from './Counter'

interface StatCardProps {
  value: number
  suffix?: string
  label: string
  /** Konteks atau sumber angka. Blueprint §8.4 mewajibkan ini bila klaimnya publik. */
  note?: string
  icon?: ReactNode
  /** Satu warna aksen per angka (blueprint §9.1). */
  accent?: 'orange' | 'blue' | 'red'
  align?: 'left' | 'center'
  className?: string
}

const accentText = {
  orange: 'text-brand-orange',
  blue: 'text-brand-blue-strong [.on-dark_&]:text-brand-blue-soft',
  red: 'text-brand-red [.on-dark_&]:text-[#FF6A58]',
} as const

/**
 * Kartu angka pencapaian — blueprint §8.4.
 * Angka adalah elemen paling dominan; ikon hanya pendukung.
 */
export default function StatCard({
  value,
  suffix = '',
  label,
  note,
  icon,
  accent = 'orange',
  align = 'left',
  className,
}: StatCardProps) {
  return (
    <div className={twMerge(align === 'center' && 'text-center', className)}>
      {icon && (
        <div
          className={twMerge(
            'mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-surface-soft [.on-dark_&]:bg-white/10',
            accentText[accent],
            align === 'center' && 'mx-auto',
          )}
        >
          {icon}
        </div>
      )}

      <div
        className={twMerge(
          'font-heading text-[2.25rem] font-bold leading-none md:text-[2.75rem]',
          accentText[accent],
        )}
      >
        <Counter value={value} suffix={suffix} />
      </div>

      <div className="mt-2 font-body text-body-sm font-semibold text-text-primary [.on-dark_&]:text-text-inverse">
        {label}
      </div>

      {note && (
        <div className="mt-1 font-body text-body-sm text-text-muted [.on-dark_&]:text-text-inverse-muted">
          {note}
        </div>
      )}
    </div>
  )
}
