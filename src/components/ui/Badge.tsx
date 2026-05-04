import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'accent' | 'green' | 'yellow' | 'gray'
  className?: string
}

const variantStyles = {
  accent: 'bg-accent/10 text-accent border-accent/20',
  green: 'bg-green-500/10 text-green-400 border-green-500/20',
  yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  gray: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
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
