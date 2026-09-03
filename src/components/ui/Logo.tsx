import Link from 'next/link'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface LogoProps {
  /** `dark` untuk dipakai di atas background navy. */
  tone?: 'light' | 'dark'
  /** `full` = ikon + wordmark. `mark` = ikon saja. */
  variant?: 'full' | 'mark'
  /** Bungkus sebagai link ke beranda. */
  href?: string | null
  className?: string
}

/**
 * Logo Devetek.
 *
 * Ikon memakai aset raster transparan hasil ekstraksi dari logo master
 * (`devetek-mark.png`), sedangkan wordmark diketik ulang memakai Outfit —
 * font yang dipilih justru karena paling dekat dengan wordmark asli.
 * Dengan begitu versi terang dan gelap cukup dibedakan lewat warna teks,
 * tanpa perlu dua file logo terpisah.
 */
export default function Logo({
  tone = 'light',
  variant = 'full',
  href = '/',
  className,
}: LogoProps) {
  const content = (
    <span className={twMerge('inline-flex items-center gap-2.5', className)}>
      <Image
        src="/images/logo/devetek-mark.png"
        alt=""
        aria-hidden
        width={512}
        height={497}
        className="h-8 w-auto shrink-0"
        priority
      />
      {variant === 'full' && (
        <span
          className={twMerge(
            'font-heading text-[1.375rem] font-semibold tracking-heading',
            tone === 'dark' ? 'text-white' : 'text-brand-navy',
          )}
        >
          Devetek
        </span>
      )}
      <span className="sr-only">Devetek — beranda</span>
    </span>
  )

  if (!href) return content

  return (
    <Link href={href} className="inline-flex items-center rounded-md">
      {content}
    </Link>
  )
}
