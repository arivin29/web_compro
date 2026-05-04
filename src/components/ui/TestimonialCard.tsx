import Image from 'next/image'
import { Quote } from 'lucide-react'

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
      <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/30" />
      <p className="text-base text-gray-300 italic mb-6 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        {avatar ? (
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-navy-hover flex items-center justify-center text-accent font-heading font-bold text-lg">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-heading font-semibold text-sm text-white">{name}</div>
          <div className="text-xs text-gray-500">
            {role} — {company}
          </div>
        </div>
      </div>
    </div>
  )
}
