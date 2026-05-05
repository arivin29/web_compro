'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'whatsapp'
type ButtonSize = 'default' | 'large'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-blue text-white font-medium shadow-blue hover:bg-brand-blue-light hover:shadow-lg',
  secondary:
    'border border-border text-brand-dark hover:border-brand-blue hover:bg-accent-light',
  ghost:
    'text-text-secondary hover:text-brand-dark hover:bg-surface-hover',
  whatsapp:
    'bg-green-500 text-white hover:bg-green-600',
}

const sizeStyles: Record<ButtonSize, string> = {
  default: 'px-6 py-2.5 text-sm',
  large: 'px-8 py-3 text-sm',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'default', className, href, children, ...props }, ref) => {
    const classes = twMerge(
      clsx(
        'inline-flex items-center justify-center gap-2 rounded-full font-body transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        className,
      ),
    )

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
