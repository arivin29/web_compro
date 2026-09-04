import type { Metadata } from 'next'
import { seoConfig } from '@/lib/metadata'

export const metadata: Metadata = seoConfig.consulting

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
