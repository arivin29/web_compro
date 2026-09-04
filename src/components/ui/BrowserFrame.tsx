import Image from 'next/image'
import { twMerge } from '@/lib/cn'

interface BrowserFrameProps {
  src: string
  alt: string
  /** Teks di address bar. Kosongkan bila tidak relevan. */
  label?: string
  /** Rasio gambar. Default 16:10 sesuai blueprint §8.3. */
  ratio?: '16/10' | '16/9' | '4/3'
  priority?: boolean
  className?: string
}

/**
 * Framing sederhana bergaya jendela browser untuk screenshot produk —
 * blueprint §14. Dipakai agar screenshot terbaca sebagai produk nyata,
 * bukan dekorasi.
 */
export default function BrowserFrame({
  src,
  alt,
  label,
  ratio = '16/10',
  priority = false,
  className,
}: BrowserFrameProps) {
  return (
    <figure
      className={twMerge(
        'overflow-hidden rounded-lg border border-white/12 bg-surface-dark-soft shadow-dropdown',
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-3.5 py-2.5">
        <span aria-hidden className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-red/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-orange/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-blue/70" />
        </span>
        {label && (
          <span className="ml-1.5 truncate rounded-sm bg-white/8 px-2.5 py-1 font-mono text-[0.6875rem] text-white/55">
            {label}
          </span>
        )}
      </div>

      <div
        className="relative w-full bg-surface-dark"
        style={{ aspectRatio: ratio.replace('/', ' / ') }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    </figure>
  )
}
