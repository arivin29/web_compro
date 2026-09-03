'use client'

import { EnvelopeSimple, Phone, WhatsappLogo } from '@phosphor-icons/react'
import { Button, CTABand, ContactRow } from '@/components/ui'
import { CONTACT } from '@/lib/constants'

/**
 * CTA penutup halaman — blueprint §17 poin 11.
 * Membungkus <CTABand /> dengan isi standar Devetek, sehingga setiap
 * halaman cukup memanggil <CTASection /> tanpa menyusun ulang CTA.
 */
export default function CTASection() {
  return (
    <CTABand
      eyebrow="Mulai Sekarang"
      title="Siap memulai transformasi digital?"
      description="Ceritakan kondisi operasional Anda sekarang. Kami bantu petakan langkah pertama yang paling masuk akal — gratis dan tanpa komitmen."
      actions={
        <>
          <Button href="/contact" size="lg">
            Jadwalkan Konsultasi
          </Button>
          <Button href={CONTACT.whatsapp.urlWithText} variant="whatsapp" size="lg">
            <WhatsappLogo size={19} weight="fill" />
            Chat WhatsApp
          </Button>
        </>
      }
      aside={
        <div className="space-y-4 rounded-lg border border-white/12 bg-white/[0.05] p-6">
          <ContactRow
            icon={<EnvelopeSimple size={18} />}
            label="Email"
            value={CONTACT.email.general}
            href={`mailto:${CONTACT.email.general}`}
          />
          <ContactRow
            icon={<Phone size={18} />}
            label="Telepon / WhatsApp"
            value={CONTACT.whatsapp.display}
            href={`tel:+${CONTACT.whatsapp.number}`}
          />
        </div>
      }
    />
  )
}
