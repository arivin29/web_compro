'use client'

import Image from 'next/image'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface ClientLogoProps {
  src: string
  alt: string
  className?: string
}

export default function ClientLogo({ src, alt, className }: ClientLogoProps) {
  return (
    <div
      className={twMerge(
        clsx(
          'flex items-center justify-center p-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300',
          className,
        ),
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={120}
        height={60}
        className="object-contain max-h-12"
      />
    </div>
  )
}
