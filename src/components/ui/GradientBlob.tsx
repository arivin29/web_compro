import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface GradientBlobProps {
  className?: string
  color?: 'blue' | 'red'
}

export default function GradientBlob({ className, color = 'blue' }: GradientBlobProps) {
  return (
    <div
      aria-hidden
      className={twMerge(
        clsx(
          'absolute w-96 h-96 rounded-full blur-3xl pointer-events-none',
          color === 'blue' ? 'bg-brand-blue/8' : 'bg-brand-red/5',
          className,
        ),
      )}
    />
  )
}
