import Link from 'next/link'
import { EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react/dist/ssr'
import { COMPANY, CONTACT, FOOTER_LINKS } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Logo from '@/components/ui/Logo'

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Syarat & Ketentuan', href: '/terms' },
]

/** Link perusahaan tanpa item legal — legal dipindah ke baris bawah. */
const COMPANY_LINKS = FOOTER_LINKS.perusahaan.filter(
  (l) => !LEGAL_LINKS.some((legal) => legal.href === l.href),
)

const SOCIAL = [
  { label: 'LinkedIn', href: CONTACT.social.linkedin },
  { label: 'Instagram', href: CONTACT.social.instagram },
  // Blueprint §12 — social link bernilai '#' tidak ditampilkan
].filter((s) => s.href && s.href !== '#')

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="label-section mb-4 text-text-inverse-muted">{children}</h2>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-sm py-1 font-body text-body-sm text-white/70 transition-colors hover:text-white"
    >
      {children}
    </Link>
  )
}

/**
 * Footer global — blueprint §12.
 * Background navy, garis signature tiga warna, dan logo versi gelap.
 */
export default function Footer() {
  return (
    <footer className="on-dark relative bg-surface-dark text-text-inverse-muted">
      {/* Garis tipis tiga warna sebagai signature visual */}
      <div aria-hidden className="signature-line" />

      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr] lg:gap-8">
          {/* Brand */}
          <div>
            <Logo tone="dark" />
            <p className="measure mt-4 font-body text-body-sm leading-relaxed text-white/70">
              {COMPANY.description}
            </p>
            <p className="mt-4 font-heading text-body-sm font-semibold text-brand-orange">
              {COMPANY.tagline}
            </p>
          </div>

          {/* Produk */}
          <nav aria-labelledby="footer-produk">
            <ColumnHeading>
              <span id="footer-produk">Produk</span>
            </ColumnHeading>
            <ul className="space-y-1">
              {FOOTER_LINKS.produk.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Layanan */}
          <nav aria-labelledby="footer-layanan">
            <ColumnHeading>
              <span id="footer-layanan">Layanan</span>
            </ColumnHeading>
            <ul className="space-y-1">
              {FOOTER_LINKS.layanan.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Perusahaan */}
          <nav aria-labelledby="footer-perusahaan">
            <ColumnHeading>
              <span id="footer-perusahaan">Perusahaan</span>
            </ColumnHeading>
            <ul className="space-y-1">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontak */}
          <div>
            <ColumnHeading>Kontak</ColumnHeading>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-brand-blue-soft" />
                <span className="font-body text-body-sm leading-relaxed text-white/70">
                  {CONTACT.address.office.full}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeSimple size={17} className="shrink-0 text-brand-blue-soft" />
                <a
                  href={`mailto:${CONTACT.email.general}`}
                  className="rounded-sm font-body text-body-sm text-white/70 transition-colors hover:text-white"
                >
                  {CONTACT.email.general}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={17} className="shrink-0 text-brand-blue-soft" />
                <a
                  href={`tel:+${CONTACT.whatsapp.number}`}
                  className="rounded-sm font-body text-body-sm text-white/70 transition-colors hover:text-white"
                >
                  {CONTACT.whatsapp.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Baris bawah — legal & copyright */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-body-sm text-white/50">
            {COMPANY.copyright} · {COMPANY.name}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm font-body text-body-sm text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm font-body text-body-sm text-white/50 transition-colors hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
