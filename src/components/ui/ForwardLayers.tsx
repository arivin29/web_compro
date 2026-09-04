import { twMerge } from '@/lib/cn'

interface ForwardLayersProps {
  className?: string
  /**
   * `brand` memakai tiga warna logo (merah/biru/oranye).
   * `mono` memakai satu warna currentColor — untuk dekorasi halus
   * di permukaan gelap atau terang.
   */
  tone?: 'brand' | 'mono'
  /** Opasitas keseluruhan pola. */
  opacity?: number
}

/**
 * FORWARD LAYERS — pola visual signature Devetek (blueprint §2.3).
 *
 * Tiga segitiga transparan yang saling bertumpuk dan mengarah ke depan,
 * diturunkan langsung dari geometri ikon pada logo master.
 * Makna: progres (arah maju), tiga lapisan (sistem–integrasi–kolaborasi),
 * dan transparansi (keterhubungan data).
 *
 * ATURAN PAKAI — maksimal SATU elemen Forward Layers yang dominan
 * dalam satu viewport. Jangan menaruhnya di setiap section.
 */
export default function ForwardLayers({
  className,
  tone = 'brand',
  opacity = 1,
}: ForwardLayersProps) {
  const colors =
    tone === 'brand'
      ? ['#E5301E', '#4479B3', '#F0701F']
      : ['currentColor', 'currentColor', 'currentColor']

  // Segitiga mengarah ke kanan. Sudut dibulatkan lewat trik
  // stroke-linejoin="round" dengan stroke sewarna fill.
  const tri = 'M 0 0 L 74 37 L 0 74 Z'
  const r = 9

  return (
    <svg
      aria-hidden
      viewBox="0 0 140 132"
      fill="none"
      className={twMerge('pointer-events-none select-none', className)}
      style={{ opacity }}
    >
      <g style={{ mixBlendMode: 'multiply' }}>
        {/* Lapisan 1 — merah, mengarah maju di atas */}
        <path
          d={tri}
          transform="translate(30 4) rotate(6 37 37)"
          fill={colors[0]}
          stroke={colors[0]}
          strokeWidth={r}
          strokeLinejoin="round"
          fillOpacity={0.9}
          strokeOpacity={0.9}
        />
        {/* Lapisan 2 — biru, fondasi di kiri bawah */}
        <path
          d={tri}
          transform="translate(4 50) rotate(-2 37 37)"
          fill={colors[1]}
          stroke={colors[1]}
          strokeWidth={r}
          strokeLinejoin="round"
          fillOpacity={0.9}
          strokeOpacity={0.9}
        />
        {/* Lapisan 3 — oranye, aksi di depan kanan */}
        <path
          d={tri}
          transform="translate(48 48) rotate(-4 37 37)"
          fill={colors[2]}
          stroke={colors[2]}
          strokeWidth={r}
          strokeLinejoin="round"
          fillOpacity={0.9}
          strokeOpacity={0.9}
        />
      </g>
    </svg>
  )
}

/**
 * Varian garis-saja untuk dekorasi latar yang sangat halus,
 * misalnya di sudut hero atau background CTA gelap.
 */
export function ForwardLayersOutline({ className }: { className?: string }) {
  const tri = 'M 0 0 L 74 37 L 0 74 Z'
  return (
    <svg
      aria-hidden
      viewBox="0 0 140 132"
      fill="none"
      className={twMerge('pointer-events-none select-none', className)}
    >
      {[
        'translate(30 4) rotate(6 37 37)',
        'translate(4 50) rotate(-2 37 37)',
        'translate(48 48) rotate(-4 37 37)',
      ].map((t) => (
        <path
          key={t}
          d={tri}
          transform={t}
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
      ))}
    </svg>
  )
}
