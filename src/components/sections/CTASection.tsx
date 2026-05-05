'use client'

import { WhatsappLogo } from '@phosphor-icons/react'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { CONTACT } from '@/lib/constants'

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-surface-blue to-surface-blue-light">
      {/* Decorative blobs */}
      <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Siap Memulai Transformasi Digital?
          </h2>
          <p className="font-body text-white/80 text-lg mb-10">
            Konsultasikan kebutuhan Anda dengan tim kami — gratis, tanpa komitmen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="large" className="bg-white text-brand-blue hover:bg-white/90 shadow-lg">
              Hubungi Kami
            </Button>
            <Button
              href={CONTACT.whatsapp.urlWithText}
              variant="whatsapp"
              size="large"
            >
              <WhatsappLogo size={18} />
              WhatsApp Langsung
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
