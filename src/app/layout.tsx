import type { Metadata } from 'next'
import { Outfit, Inter, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import PageTransition from '@/components/ui/PageTransition'

/**
 * Tipografi resmi — blueprint §4.1.
 * Outfit dipilih karena paling dekat dengan wordmark pada logo master:
 * geometris, terminal rata, dan low-contrast.
 */
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Devetek — Digitalisasi Tanpa Batas',
    template: '%s — Devetek',
  },
  description:
    'Solusi teknologi end-to-end untuk PDAM, Pemerintahan, BUMN & Swasta. Berpengalaman lebih dari satu dekade membangun sistem yang benar-benar bekerja.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://devetek-compro.web.app'),
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Devetek',
    images: [{ url: '/images/devetek-icon.png', width: 512, height: 512, alt: 'Devetek Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devetek — Digitalisasi Tanpa Batas',
    description: 'Solusi teknologi end-to-end untuk PDAM, Pemerintahan, BUMN & Swasta.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {/* JSON-LD Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'PT Comon Cipta Inovasi',
              alternateName: 'Devetek',
              url: 'https://devetek-compro.web.app',
              logo: 'https://devetek-compro.web.app/images/devetek-icon.png',
              description: 'Perusahaan teknologi yang berfokus pada pengembangan solusi perangkat lunak dan sistem sensor untuk digitalisasi sektor publik dan swasta.',
              foundingDate: '2012',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Komplek Meranti No. 3, RT.01/RW.02, Pasir Jaya',
                addressLocality: 'Bogor',
                addressRegion: 'Jawa Barat',
                postalCode: '16119',
                addressCountry: 'ID',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+62-856-2302-229',
                contactType: 'sales',
                availableLanguage: ['Indonesian', 'English'],
              },
              sameAs: [],
            }),
          }}
        />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  )
}
