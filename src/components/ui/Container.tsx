import { ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ContainerProps {
  children: ReactNode
  className?: string
  /** Elemen HTML yang dirender. Default `div`. */
  as?: ElementType
  /** Lebar maksimum. `default` = 1280px (blueprint §5.1). */
  width?: 'default' | 'narrow' | 'prose'
}

const widths = {
  default: 'max-w-container',
  narrow: 'max-w-4xl',
  prose: 'max-w-prose',
} as const

/**
 * Container standar Devetek — blueprint §5.1.
 * Padding: mobile 20px, tablet 24px, desktop 32px.
 *
 * Selalu pakai ini alih-alih menulis `max-w-7xl mx-auto px-6` manual,
 * supaya lebar dan padding seragam di seluruh halaman.
 */
export default function Container({
  children,
  className,
  as: Tag = 'div',
  width = 'default',
}: ContainerProps) {
  return (
    <Tag className={twMerge('mx-auto w-full px-5 md:px-6 lg:px-8', widths[width], className)}>
      {children}
    </Tag>
  )
}
