'use client'

import { MapPin, EnvelopeSimple, Phone } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { CONTACT } from '@/lib/constants'

export default function LocationSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center gap-3 mb-4 text-brand-blue text-sm uppercase tracking-widest font-medium justify-center">
              <span className="w-8 h-px bg-brand-blue" />
              LOKASI KAMI
              <span className="w-8 h-px bg-brand-blue" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-dark mb-4">
              Temukan Kami di Indonesia
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-card h-[320px] md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7!2d106.84!3d-6.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjknMjQuMCJTIDEwNsKwNTAnMjQuMCJF!5e0!3m2!1sid!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Devetek"
              />
            </div>

            {/* Office cards */}
            <div className="space-y-4">
              {/* Office */}
              <div className="bg-surface-alt border border-border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-blue" size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-heading font-bold text-sm text-brand-dark">{CONTACT.address.office.label}</h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">Kantor Utama</span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{CONTACT.address.office.full}</p>
                  </div>
                </div>
              </div>

              {/* Contact quick links */}
              <div className="bg-surface-alt border border-border rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                      <Phone className="text-brand-blue" size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] text-text-muted uppercase tracking-wider">Telepon</div>
                      <a href={`tel:${CONTACT.phone}`} className="text-sm text-brand-dark font-medium hover:text-brand-blue transition-colors">
                        {CONTACT.whatsapp.display}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                      <EnvelopeSimple className="text-brand-blue" size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] text-text-muted uppercase tracking-wider">Email</div>
                      <a href={`mailto:${CONTACT.email.general}`} className="text-sm text-brand-dark font-medium hover:text-brand-blue transition-colors">
                        {CONTACT.email.general}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
