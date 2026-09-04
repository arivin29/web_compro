import Link from 'next/link'
import Image from 'next/image'
import { twMerge } from '@/lib/cn'

interface LogoProps {
  /** `dark` untuk dipakai di atas background navy. */
  tone?: 'light' | 'dark'
  /** `full` = lockup ikon + wordmark. `mark` = ikon saja. */
  variant?: 'full' | 'mark'
  /** Bungkus sebagai link ke beranda. */
  href?: string | null
  className?: string
}

/**
 * Logo Devetek.
 *
 * Memakai berkas lockup resmi apa adanya — ikon dan wordmark dalam satu
 * gambar. Wordmark TIDAK diketik ulang dengan font situs: bentuk huruf pada
 * logo punya sambungan dan potongan tersendiri yang tidak bisa ditiru
 * `font-heading`, dan mengetiknya ulang berarti dua versi wordmark beredar
 * berdampingan.
 *
 * Karena wordmark pada lockup berwarna navy pekat, permukaan gelap memakai
 * berkas terpisah dengan huruf diputihkan — dihasilkan oleh
 * `scripts/make-logo-dark.py` dari berkas master yang sama, jadi keduanya
 * tidak akan menyimpang satu sama lain.
 */
const LOCKUP = {
  light: '/images/logo/devetek-lockup.png',
  dark: '/images/logo/devetek-lockup-dark.png',
} as const

export default function Logo({
  tone = 'light',
  variant = 'full',
  href = '/',
  className,
}: LogoProps) {
  const content = (
    <span className={twMerge('inline-flex items-center', className)}>
      {variant === 'full' ? (
        <Image
          src={LOCKUP[tone]}
          alt=""
          aria-hidden
          width={900}
          height={231}
          className="h-9 w-auto shrink-0"
          priority
        />
      ) : (
        <Image
          src="/images/logo/devetek-mark.png"
          alt=""
          aria-hidden
          width={512}
          height={497}
          className="h-8 w-auto shrink-0"
          priority
        />
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
