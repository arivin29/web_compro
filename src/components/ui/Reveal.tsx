'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Jeda mulai, detik. Untuk stagger pakai kelipatan 0.06–0.1 (blueprint §15). */
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

const offsets = {
  up: { y: 24 },
  left: { x: 24 },
  right: { x: -24 },
  none: {},
} as const

/**
 * Fade-up saat masuk viewport — blueprint §15.
 * Pergeseran 24px, durasi 500ms, dijalankan sekali.
 *
 * Menghormati `prefers-reduced-motion`: bila pengguna memilih
 * gerak minimum, konten langsung tampil tanpa animasi.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
