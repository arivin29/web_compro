'use client'

import { WhatsappLogo } from '@phosphor-icons/react'
import { CONTACT } from '@/lib/constants'

export default function WhatsAppFAB() {
  return (
    <a
      href={CONTACT.whatsapp.urlWithText}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-200"
    >
      <WhatsappLogo size={28} />
    </a>
  )
}
