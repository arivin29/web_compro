'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CounterProps {
  value: number
  suffix?: string
  label: string
  sublabel?: string
  duration?: number
}

export default function Counter({
  value,
  suffix = '',
  label,
  sublabel,
  duration = 2,
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const totalFrames = Math.round(duration * 60)
    const increment = end / totalFrames

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading font-extrabold text-4xl md:text-5xl text-brand-blue">
        {count}
        {suffix}
      </div>
      <div className="font-body font-medium text-sm text-brand-dark mt-1">{label}</div>
      {sublabel && (
        <div className="font-body text-xs text-text-muted">{sublabel}</div>
      )}
    </div>
  )
}
