'use client'

import { CalendarBlank, Clock, ArrowRight } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Badge from '@/components/ui/Badge'
import SectionHeading from '@/components/ui/SectionHeading'

const ARTICLES = [
  {
    slug: 'transformasi-digital-pdam',
    title: 'Transformasi Digital PDAM: Tantangan dan Peluang di 2026',
    excerpt: 'Bagaimana PDAM di Indonesia dapat memanfaatkan teknologi untuk meningkatkan efisiensi operasional dan pelayanan pelanggan.',
    category: 'Insight',
    date: '2026-04-15',
    readTime: '5 min',
  },
  {
    slug: 'iot-monitoring-kebocoran',
    title: 'Implementasi IoT untuk Deteksi Kebocoran Air Real-Time',
    excerpt: 'Studi kasus: bagaimana sensor HELIOS membantu mengurangi NRW hingga 30% di beberapa PDAM mitra kami.',
    category: 'Studi Kasus',
    date: '2026-03-28',
    readTime: '7 min',
  },
  {
    slug: 'erp-vs-software-custom',
    title: 'ERP vs Custom Software: Mana yang Tepat untuk Bisnis Anda?',
    excerpt: 'Panduan memilih antara solusi ERP siap pakai atau pengembangan software custom berdasarkan kebutuhan.',
    category: 'Artikel',
    date: '2026-03-10',
    readTime: '4 min',
  },
]

export default function BlogPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Badge>BLOG & INSIGHT</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-brand-dark">
              Artikel, Update & Studi Kasus
            </h1>
            <p className="mt-4 text-lg text-text-body max-w-2xl mx-auto">
              Wawasan terbaru seputar teknologi, digitalisasi, dan solusi industri.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 0.1}>
                <article className="glass-card overflow-hidden h-full flex flex-col">
                  {/* Thumbnail placeholder */}
                  <div className="h-48 bg-gradient-to-br from-accent/10 to-brand-red/10 flex items-center justify-center">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/80 text-accent">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-text-muted mb-3">
                      <span className="flex items-center gap-1">
                        <CalendarBlank size={14} weight="bold" />
                        {new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} weight="bold" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-brand-dark leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-body flex-1">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-accent font-medium text-sm">
                      Baca selengkapnya <ArrowRight size={14} className="ml-1" />
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Coming soon note */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 text-center p-8 rounded-2xl bg-white border border-border">
              <p className="text-text-body">
                📝 Artikel lengkap akan segera hadir. Stay tuned!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
