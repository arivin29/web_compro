import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import PageTransition from '@/components/ui/PageTransition'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Devetek — Digitalisasi Tanpa Batas',
    template: '%s — Devetek',
  },
  description:
    'Solusi teknologi end-to-end untuk PDAM, Pemerintahan, BUMN & Swasta. Berpengalaman lebih dari satu dekade membangun sistem yang benar-benar bekerja.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://devetek.com'),
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Devetek',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`}>
      <body>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  )
}
