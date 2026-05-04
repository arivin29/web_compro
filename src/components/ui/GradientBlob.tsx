import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface GradientBlobProps {
  className?: string
  color?: 'accent' | 'navy'
}

export default function GradientBlob({ className, color = 'accent' }: GradientBlobProps) {
  return (
    <div
      aria-hidden
      className={twMerge(
        clsx(
          'absolute w-96 h-96 rounded-full blur-3xl pointer-events-none',
          color === 'accent' ? 'bg-accent/10' : 'bg-navy-lighter/50',
          className,
        ),
      )}
    />
  )
}
