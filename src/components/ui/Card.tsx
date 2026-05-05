import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          'glass-card p-6 md:p-8',
          hover &&
            'transition-all duration-300 hover:border-brand-blue/30 hover:-translate-y-1 hover:shadow-card-hover',
          className,
        ),
      )}
    >
      {children}
    </div>
  )
}
