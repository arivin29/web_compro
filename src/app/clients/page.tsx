'use client'

import { useState } from 'react'
import { Buildings, Drop, Tree, Bank, Handshake, Quotes, MapPin } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'

const CATEGORIES = ['Semua', 'PDAM', 'Pemerintahan', 'Swasta'] as const

const CLIENTS = [
  { name: 'PDAM Tanah Datar', category: 'PDAM' },
  { name: 'PDAM Kota Padang', category: 'PDAM' },
  { name: 'PDAM Kab. Bogor', category: 'PDAM' },
  { name: 'PDAM Kota Solok', category: 'PDAM' },
  { name: 'PDAM Dharmasraya', category: 'PDAM' },
  { name: 'PDAM Sijunjung', category: 'PDAM' },
  { name: 'PDAM Pasaman Barat', category: 'PDAM' },
  { name: 'PDAM Lima Puluh Kota', category: 'PDAM' },
  { name: 'Kementerian Hukum & HAM', category: 'Pemerintahan' },
  { name: 'KKP (Kementerian Kelautan & Perikanan)', category: 'Pemerintahan' },
  { name: 'BPBD', category: 'Pemerintahan' },
  { name: 'Pemkab Bogor', category: 'Pemerintahan' },
  { name: 'PT RPN (Rajawali Parama Nusantara)', category: 'Swasta' },
  { name: 'PT Bakti Air Indonesia', category: 'Swasta' },
  { name: 'RS Universitas Andalas', category: 'Swasta' },
  { name: 'PT Telkom Indonesia', category: 'Swasta' },
]

const PROJECTS = [
  { title: 'Sistem PDAM Terintegrasi', client: 'PDAM Tanah Datar', category: 'PDAM', desc: 'Implementasi D-IBS untuk billing, baca meter, penagihan, dan akuntansi.', tech: ['D-IBS', 'D-ASSET', 'HELIOS'] },
  { title: 'IoT Monitoring 5 DMA', client: 'PT Bakti Air Indonesia', category: 'PDAM', desc: 'Deployment 200+ node sensor untuk deteksi kebocoran real-time.', tech: ['HELIOS', 'IoT', 'Cloud'] },
  { title: 'WebGIS Aset PDAM', client: 'PDAM Kota Padang', category: 'PDAM', desc: 'Pemetaan aset infrastruktur dan monitoring jaringan distribusi.', tech: ['D-ASSET', 'GIS', 'PostgreSQL'] },
  { title: 'ERP Custom', client: 'PT RPN', category: 'Swasta', desc: 'Sistem ERP modular dengan multi-level approval dan integrasi payment.', tech: ['ERP', 'Microservice', 'React'] },
  { title: 'Sistem SDKP', client: 'KKP', category: 'Pemerintahan', desc: 'Aplikasi pengawasan sumber daya kelautan dan perikanan.', tech: ['Web App', 'GIS', 'Mobile'] },
  { title: 'Sistem Perizinan Online', client: 'Pemkab Bogor', category: 'Pemerintahan', desc: 'Platform perizinan digital untuk pelayanan publik.', tech: ['Web App', 'Workflow', 'Integration'] },
  { title: 'AMIMS', client: 'Klien Swasta', category: 'Swasta', desc: 'Aircraft Maintenance Information Management System untuk manajemen part helikopter.', tech: ['Web App', 'Inventory', 'Reporting'] },
  { title: 'Sistem Baca Meter Mobile', client: 'Multiple PDAM', category: 'PDAM', desc: 'Aplikasi baca meter semi-offline dengan GPS dan foto meter.', tech: ['Mobile', 'GPS', 'Offline-first'] },
]

export default function ClientsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('Semua')

  const filteredClients = activeFilter === 'Semua'
    ? CLIENTS
    : CLIENTS.filter(c => c.category === activeFilter)

  const filteredProjects = activeFilter === 'Semua'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter)

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Badge>KLIEN & MITRA</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-brand-dark">
              Dipercaya oleh Institusi Terdepan
            </h1>
            <p className="mt-4 text-lg text-text-body max-w-2xl mx-auto">
              Dari PDAM, kementerian, hingga perusahaan swasta — kami bangga menjadi bagian dari perjalanan digital mereka.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-border sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-accent text-white shadow-sm'
                    : 'bg-surface-alt text-text-body hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading title="Klien Kami" subtitle={`${filteredClients.length} institusi yang mempercayai Devetek`} />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredClients.map((client, i) => (
              <ScrollReveal key={client.name} delay={i * 0.03}>
                <div className="glass-card p-5 text-center h-full flex items-center justify-center min-h-[100px]">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-2">
                      {client.category === 'PDAM' && <Drop size={20} weight="bold" className="text-blue-500" />}
                      {client.category === 'Pemerintahan' && <Bank size={20} weight="bold" className="text-purple-500" />}
                      {client.category === 'Swasta' && <Buildings size={20} weight="bold" className="text-orange-500" />}
                    </div>
                    <p className="text-sm font-medium text-brand-dark">{client.name}</p>
                    <p className="text-xs text-text-muted mt-1">{client.category}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading title="Proyek yang Telah Kami Kerjakan" subtitle="Lebih dari 100 proyek selesai di berbagai sektor" />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.08}>
                <div className="glass-card p-6 h-full">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading font-bold text-brand-dark">{project.title}</h3>
                      <p className="text-sm text-accent font-medium mt-1">{project.client}</p>
                    </div>
                    <span className="px-3 py-1 text-xs rounded-full bg-surface-alt text-text-muted whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-text-body">{project.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 text-xs rounded-md bg-accent/10 text-accent font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Quotes size={48} weight="bold" className="text-accent/30 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-heading text-brand-dark leading-relaxed">
              &ldquo;Setelah implementasi Devetek Helios di 5 DMA dengan 200+ node, waktu deteksi kebocoran berkurang drastis dari hitungan hari menjadi hitungan menit.&rdquo;
            </blockquote>
            <div className="mt-6">
              <p className="font-semibold text-brand-dark">Tim Teknis</p>
              <p className="text-sm text-text-muted">PT Bakti Air Indonesia — Rekanan Resmi Produk PDAM</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Partner */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <SectionHeading title="Mitra Strategis" subtitle="Partner yang mendukung solusi kami" />
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {[
                { name: 'PT Bakti Air Indonesia', role: 'Rekanan Produk PDAM' },
                { name: 'PT Devetek Marapi Inovasi', role: 'Rekanan Fokus PDAM' },
              ].map((partner) => (
                <div key={partner.name} className="glass-card px-8 py-5 flex items-center gap-4">
                  <Handshake size={24} weight="bold" className="text-accent" />
                  <div className="text-left">
                    <p className="font-heading font-semibold text-brand-dark text-sm">{partner.name}</p>
                    <p className="text-xs text-text-muted">{partner.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-brand-red/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
              Ingin Menjadi Bagian dari Klien Kami?
            </h2>
            <p className="mt-4 text-text-body text-lg">
              Konsultasikan kebutuhan Anda dan bergabung bersama 50+ institusi yang telah mempercayai Devetek.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-brand-red to-accent text-white font-semibold hover:shadow-lg transition-shadow">
                Hubungi Kami
              </a>
              <a href="https://wa.me/628562302229" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/5 transition-colors">
                WhatsApp Langsung
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
