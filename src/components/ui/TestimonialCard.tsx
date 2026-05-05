import Image from 'next/image'
import { Quotes } from '@phosphor-icons/react'

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  avatar?: string | null
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="glass-card p-8 relative">
      <Quotes className="absolute top-4 right-4 text-brand-blue/15" size={32} />
      <p className="text-base text-text-secondary italic mb-6 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 justify-center">
        {avatar ? (
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center text-brand-blue font-heading font-bold text-lg">
            {name.charAt(0)}
          </div>
        )}
        <div className="text-left">
          <div className="font-heading font-semibold text-sm text-brand-dark">{name}</div>
          <div className="text-xs text-text-muted">
            {role} — {company}
          </div>
        </div>
      </div>
    </div>
  )
}
