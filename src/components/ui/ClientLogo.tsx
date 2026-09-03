'use client'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface ClientLogoProps {
  src: string
  /** Nama klien — wajib, agar tetap terbaca oleh screen reader (blueprint §9.3). */
  alt: string
  className?: string
}

/**
 * Logo klien di dalam container berukuran visual setara — blueprint §9.3.
 * Default grayscale, kembali berwarna saat hover. Proporsi logo tidak diubah.
 */
export default function ClientLogo({ src, alt, className }: ClientLogoProps) {
  return (
    <div
      className={twMerge(
        'flex h-20 items-center justify-center rounded-md border border-border bg-surface-white p-4 transition-all duration-300',
        'grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:border-brand-blue/40',
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={140}
        height={56}
        className="max-h-10 w-auto object-contain"
      />
    </div>
  )
}
