'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

interface CounterProps {
  value: number
  suffix?: string
  prefix?: string
  /** Durasi animasi, detik. Blueprint §9.1 membatasi 1.2–1.8 detik. */
  duration?: number
  className?: string
}

/**
 * Angka yang menghitung naik saat masuk viewport — blueprint §9.1.
 * Berjalan sekali, maksimal 1.8 detik, dan langsung menampilkan
 * nilai akhir bila pengguna memilih `prefers-reduced-motion`.
 */
export default function Counter({
  value,
  suffix = '',
  prefix = '',
  duration = 1.5,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    if (reduce) {
      setCount(value)
      return
    }

    const ms = Math.min(duration, 1.8) * 1000
    let raf = 0
    let startedAt: number | null = null

    const tick = (now: number) => {
      if (startedAt === null) startedAt = now
      const t = Math.min((now - startedAt) / ms, 1)
      // easeOutCubic — cepat di awal, melambat di akhir
      setCount(Math.round(value * (1 - Math.pow(1 - t, 3))))
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, value, duration, reduce])

  return (
    <span ref={ref} className={className}>
      <span className="tabular">
        {prefix}
        {count}
      </span>
      {suffix}
    </span>
  )
}
