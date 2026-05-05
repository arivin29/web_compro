'use client'

import { WhatsappLogo, EnvelopeSimple, Phone, MapPin } from '@phosphor-icons/react'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { CONTACT } from '@/lib/constants'

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-surface-blue to-surface-blue-light">
      <div aria-hidden className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — CTA text */}
          <ScrollReveal>
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
                Siap Memulai Transformasi Digital?
              </h2>
              <p className="font-body text-white/75 text-lg mb-8 leading-relaxed">
                Konsultasikan kebutuhan Anda dengan tim kami — gratis, tanpa komitmen. 
                Kami siap membantu dari perencanaan hingga implementasi.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
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
            </div>
          </ScrollReveal>

          {/* Right — Contact info */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15 p-6 md:p-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                  <EnvelopeSimple className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Email</div>
                  <a href={`mailto:${CONTACT.email.general}`} className="text-sm text-white hover:underline">{CONTACT.email.general}</a>
                  <br />
                  <a href={`mailto:${CONTACT.email.marketing}`} className="text-sm text-white/70 hover:underline">{CONTACT.email.marketing}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Telepon / WhatsApp</div>
                  <a href={CONTACT.whatsapp.url} className="text-sm text-white hover:underline">{CONTACT.whatsapp.display}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Kantor</div>
                  <div className="text-sm text-white/80 leading-relaxed">{CONTACT.address.office.full}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
