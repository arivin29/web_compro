import { ReactNode } from 'react'
import { twMerge } from '@/lib/cn'

interface SectionHeadingProps {
  /** Label uppercase kecil di atas judul, mis. "PRODUK & LAYANAN". */
  label?: string
  title: ReactNode
  /** Paragraf pengantar opsional di bawah judul. */
  subtitle?: ReactNode
  /**
   * Blueprint §7.3 — alignment default adalah KIRI.
   * Pakai `center` hanya untuk section yang benar-benar simetris
   * seperti testimonial atau logo klien.
   */
  align?: 'left' | 'center'
  /** Level heading semantik. Ubah agar urutan heading tidak melompat. */
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

/**
 * Heading section standar — blueprint §7.3.
 *
 * Struktur tetap: diamond oranye → label uppercase → judul → deskripsi.
 * Warna otomatis menyesuaikan ketika berada di dalam `<Section tone="dark">`
 * (lewat kelas `on-dark`), jadi tidak perlu prop tambahan.
 */
export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  as: Tag = 'h2',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div className={twMerge('max-w-3xl', centered && 'mx-auto text-center', className)}>
      {label && (
        <div
          className={twMerge(
            'label-section mb-4 flex items-center gap-2.5 text-brand-blue-strong [.on-dark_&]:text-brand-blue-soft',
            centered && 'justify-center',
          )}
        >
          {/* Diamond oranye — penanda tetap identitas Devetek */}
          <span aria-hidden className="h-2 w-2 rotate-45 bg-brand-orange" />
          {label}
        </div>
      )}

      <Tag
        className={twMerge(
          'font-heading font-bold text-text-primary [.on-dark_&]:text-text-inverse',
          Tag === 'h1' ? 'text-h1' : Tag === 'h3' ? 'text-h3' : 'text-h2',
        )}
      >
        {title}
      </Tag>

      {subtitle && (
        <p
          className={twMerge(
            'measure mt-4 text-body-lg text-text-secondary [.on-dark_&]:text-text-inverse-muted',
            centered && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
