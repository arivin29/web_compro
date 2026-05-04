import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={twMerge(
        clsx(align === 'center' && 'text-center', className),
      )}
    >
      {label && (
        <div
          className={clsx(
            'flex items-center gap-3 mb-4 text-accent text-sm uppercase tracking-widest font-medium',
            align === 'center' && 'justify-center',
          )}
        >
          <span className="w-8 h-px bg-accent" />
          {label}
          <span className="w-8 h-px bg-accent" />
        </div>
      )}
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'text-base text-gray-400 max-w-xl',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
