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
    'bg-gradient-to-r from-accent to-[#0EA5E9] text-navy font-medium shadow-lg shadow-accent/20 hover:brightness-110 hover:shadow-accent/30',
  secondary:
    'border border-border text-white hover:border-accent/50 hover:bg-accent/10',
  ghost:
    'text-gray-300 hover:text-white hover:bg-white/5',
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
