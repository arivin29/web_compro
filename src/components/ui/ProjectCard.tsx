import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import Badge from './Badge'
import Card from './Card'

interface ProjectCardProps {
  image: string
  title: string
  /** Kategori solusi, mis. "WebGIS Aset". */
  category: string
  /** Nama klien — isi hanya bila sudah ada izin publikasi (blueprint §8.3). */
  client?: string
  /** Dampak atau hasil yang dapat diverifikasi. */
  impact?: string
  href?: string
  className?: string
}

/**
 * Card proyek / studi kasus — blueprint §8.3.
 * Screenshot dominan dengan rasio 16:10, bukan dekorasi kecil.
 */
export default function ProjectCard({
  image,
  title,
  category,
  client,
  impact,
  href,
  className,
}: ProjectCardProps) {
  return (
    <Card href={href} padding="none" className={twMerge('h-full', className)}>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-soft">
        <Image
          src={image}
          alt={`Tampilan ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 ease-forward group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <Badge variant="brand" className="self-start">
          {category}
        </Badge>

        <h3 className="mt-3 font-heading text-h3 font-semibold text-text-primary">{title}</h3>

        {client && (
          <p className="mt-1 font-body text-body-sm text-text-muted">{client}</p>
        )}

        {impact && (
          <p className="mt-3 flex-1 font-body text-body-sm leading-relaxed text-text-secondary">
            {impact}
          </p>
        )}
      </div>
    </Card>
  )
}
