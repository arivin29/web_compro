import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'
import { COMPANY, CONTACT, FOOTER_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-surface-alt border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo/devetek-logo.png"
                alt={COMPANY.brand}
                width={140}
                height={33}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {COMPANY.description}
            </p>
          </div>

          {/* Produk */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-brand-dark mb-4 uppercase tracking-wider">
              Produk
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.produk.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-brand-dark mb-4 uppercase tracking-wider">
              Perusahaan
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.perusahaan.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-brand-dark mb-4 uppercase tracking-wider">
              Kontak
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                <span className="text-sm text-text-secondary">
                  {CONTACT.address.office.full}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <a
                  href={`mailto:${CONTACT.email.general}`}
                  className="text-sm text-text-secondary hover:text-brand-blue transition-colors"
                >
                  {CONTACT.email.general}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-sm text-text-secondary hover:text-brand-blue transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">{COMPANY.copyright}</p>
          <div className="flex items-center gap-4">
            {CONTACT.social.linkedin !== '#' && (
              <a
                href={CONTACT.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-brand-blue transition-colors text-sm"
              >
                LinkedIn
              </a>
            )}
            {CONTACT.social.instagram !== '#' && (
              <a
                href={CONTACT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-brand-blue transition-colors text-sm"
              >
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
