'use client'

import { WhatsappLogo } from '@phosphor-icons/react'
import { CONTACT } from '@/lib/constants'

/**
 * Tombol mengambang WhatsApp — blueprint §9.6.
 *
 * Ukuran 56px, posisi kanan bawah dengan safe-area mobile, dan tooltip
 * pada desktop. Warna memakai hijau WhatsApp #128C7E, bukan #25D366:
 * varian terang tidak memenuhi kontras non-teks 3:1 terhadap latar
 * halaman yang terang, sedangkan #128C7E memenuhi (3.5:1).
 */
export default function WhatsAppFAB() {
  return (
    <div className="fixed bottom-5 right-5 z-40 md:bottom-7 md:right-7">
      <a
        href={CONTACT.whatsapp.urlWithText}
        target="_blank"
        rel="noopener noreferrer"
        className="group peer flex h-14 w-14 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-card-hover transition-transform duration-200 ease-forward hover:bg-[#0F7A6C] hover:scale-105"
      >
        <WhatsappLogo size={27} weight="fill" aria-hidden />
        <span className="sr-only">Chat via WhatsApp — {CONTACT.whatsapp.display}</span>
      </a>

      {/* Tooltip desktop */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-surface-dark px-3 py-2 font-body text-body-sm text-white opacity-0 shadow-dropdown transition-opacity duration-200 peer-hover:opacity-100 lg:block"
      >
        Chat via WhatsApp
      </span>
    </div>
  )
}
