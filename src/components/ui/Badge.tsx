import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'accent' | 'green' | 'yellow' | 'gray'
  className?: string
}

const variantStyles = {
  accent: 'bg-accent/10 text-brand-blue border-brand-blue/20',
  green: 'bg-green-500/10 text-green-600 border-green-500/20',
  yellow: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
  gray: 'bg-gray-100 text-text-muted border-gray-200',
}

export default function Badge({ children, variant = 'accent', className }: BadgeProps) {
  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border',
          variantStyles[variant],
          className,
        ),
      )}
    >
      {children}
    </span>
  )
}
