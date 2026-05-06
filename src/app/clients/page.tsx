'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Buildings, Drop, Bank, Handshake, Quotes } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'

const CATEGORIES = ['Semua', 'PDAM', 'Pemerintahan', 'Swasta'] as const

const CLIENTS = [
  { name: 'Perumda Merangin', category: 'PDAM' },
  { name: 'Perumda Tebo', category: 'PDAM' },
  { name: 'Perumda Rengat', category: 'PDAM' },
  { name: 'Perumda Batu Sangkar', category: 'PDAM' },
  { name: 'PDAM Pasaman Barat', category: 'PDAM' },
  { name: 'PDAM Bab Solok', category: 'PDAM' },
  { name: 'PDAM Agam', category: 'PDAM' },
  { name: 'Kementerian Hukum & HAM', category: 'Pemerintahan' },
  { name: 'KKP (Kementerian Kelautan & Perikanan)', category: 'Pemerintahan' },
  { name: 'BPBD', category: 'Pemerintahan' },
  { name: 'Pemkab Bogor', category: 'Pemerintahan' },
  { name: 'PT RPN (Rajawali Parama Nusantara)', category: 'Swasta' },
  { name: 'PT Bakti Air Indonesia', category: 'Swasta' },
  { name: 'PT Derazona Air Service', category: 'Swasta' },
  { name: 'PT Best Agro', category: 'Swasta' },
  { name: 'PT BMT Asia Indonesia', category: 'Swasta' },
]

const PROJECTS = [
  { title: 'Sistem PDAM Terintegrasi (D-IBS)', client: 'Perumda Batu Sangkar & Multiple PDAM', category: 'PDAM', desc: 'Integrated Billing System — billing, baca meter, penagihan, akuntansi SKETAP, dan pelaporan terintegrasi.', tech: ['D-IBS', 'D-ASSET', 'HELIOS'], image: '/images/projects/pdam-billing.png' },
  { title: 'IoT Monitoring & DMA (HELIOS)', client: 'PT Bakti Air Indonesia', category: 'PDAM', desc: 'Deployment 200+ node sensor IoT untuk deteksi kebocoran real-time di 5 DMA.', tech: ['HELIOS', 'IoT', 'Cloud'], image: '/images/projects/helios-dashboard.jpg' },
  { title: 'Mobile Baca Meter PDAM', client: 'Multiple PDAM', category: 'PDAM', desc: 'Aplikasi Android baca meter semi-offline dengan GPS tracking, foto meter, dan sinkronisasi data.', tech: ['Mobile', 'GPS', 'Offline-first'], image: '/images/projects/baca-meter-mobile.jpg' },
  { title: 'AMIMS — Aircraft Maintenance', client: 'PT Derazona Air Service', category: 'Swasta', desc: 'Management Part Helicopter: Purchase Request/Order, stock management, life-time part, cycle hour calculation, component tracking.', tech: ['Web App', 'Inventory', 'Reporting'], image: '/images/projects/amims.png' },
  { title: 'VMS — Vessel Monitoring System', client: 'Kementerian Kelautan & Perikanan', category: 'Pemerintahan', desc: 'WebGIS tracking kapal perikanan, vessel alert, pemantauan illegal fishing berbasis satelit.', tech: ['WebGIS', 'Satellite', 'Real-time'], image: '/images/projects/vms.png' },
  { title: 'SDKP & SalmonTrack Mobile', client: 'Kementerian Kelautan & Perikanan', category: 'Pemerintahan', desc: 'Pelaporan pelanggaran SDKP berbasis masyarakat + mobile tracking posisi kapal dari smartphone.', tech: ['Mobile', 'Chatbot', 'SMS Gateway'], image: '/images/projects/sdkp.png' },
  { title: 'BPBD — Sistem Informasi Kebencanaan', client: 'BPBD (Multi-Kabupaten)', category: 'Pemerintahan', desc: 'Penyajian & penyebarluasan informasi kebencanaan berbasis peta digital interaktif untuk Kutai Timur, Barito Utara, Murung Raya.', tech: ['WebGIS', 'Real-time', 'Dashboard'], image: '/images/projects/bpbd.png' },
  { title: 'OPTIMIS — Perizinan Online', client: 'Pemkab Bogor (DPMPTSP)', category: 'Pemerintahan', desc: 'Badan Perizinan Satu Pintu — registrasi online, tracking izin, disposition, multi-level approval, arsip SK.', tech: ['Web App', 'Workflow', 'E-Gov'], image: '/images/projects/optimis.png' },
  { title: 'ERP Custom Modular', client: 'PT RPN (Rajawali Parama Nusantara)', category: 'Swasta', desc: 'Sistem ERP modular dengan multi-level approval, integrasi payment, purchasing, dan reporting.', tech: ['ERP', 'Microservice', 'React'], image: '/images/projects/erp-illustration.jpg' },
  { title: 'LAP-APP (Sertifikasi Lab)', client: 'PT BMT Asia Indonesia', category: 'Swasta', desc: 'Manajemen data sample hingga sertifikat — approval dinamik, WebGIS lokasi sample, output sertifikat otomatis.', tech: ['Web App', 'WebGIS', 'Workflow'], image: '/images/projects/app-screenshot-1.png' },
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
    <main>
      {/* Hero */}
      <section className="relative pt-[72px] bg-gradient-to-br from-brand-blue-dark to-brand-blue overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20 mb-6">
              PORTFOLIO & KLIEN
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.1] text-white">
              Dipercaya oleh Institusi Terdepan
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Dari PDAM, kementerian, hingga perusahaan swasta — kami bangga menjadi bagian dari perjalanan digital mereka.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter */}
      <section className="py-5 bg-white border-b border-border sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'bg-surface-alt text-text-secondary hover:bg-brand-blue/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #1565C0 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading title="Klien Kami" subtitle={`${filteredClients.length} institusi yang mempercayai Devetek`} />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredClients.map((client, i) => (
              <ScrollReveal key={client.name} delay={i * 0.03}>
                <div className="bg-white border border-border rounded-2xl p-5 text-center h-full flex items-center justify-center min-h-[100px] hover:border-brand-blue/30 hover:shadow-card-hover transition-all duration-300">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-2">
                      {client.category === 'PDAM' && <Drop size={20} weight="bold" className="text-brand-blue" />}
                      {client.category === 'Pemerintahan' && <Bank size={20} weight="bold" className="text-brand-blue-dark" />}
                      {client.category === 'Swasta' && <Buildings size={20} weight="bold" className="text-brand-blue-light" />}
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
      <section className="py-16 md:py-24 bg-[#EBF5FF]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading title="Proyek yang Telah Kami Kerjakan" subtitle="Lebih dari 100 proyek selesai di berbagai sektor" />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.08}>
                <div className="bg-white border border-border rounded-2xl overflow-hidden h-full hover:shadow-card-hover transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-44 bg-surface-alt">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-heading font-bold text-brand-dark">{project.title}</h3>
                        <p className="text-sm text-brand-blue font-medium mt-1">{project.client}</p>
                      </div>
                      <span className="px-3 py-1 text-xs rounded-full bg-brand-blue/10 text-brand-blue whitespace-nowrap">
                        {project.category}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-text-secondary">{project.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs rounded-md bg-brand-blue/10 text-brand-blue font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-brand-blue-dark to-brand-blue overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Quotes size={48} weight="bold" className="text-white/20 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-heading text-white leading-relaxed">
              &ldquo;Setelah implementasi Devetek Helios di 5 DMA dengan 200+ node, waktu deteksi kebocoran berkurang drastis dari hitungan hari menjadi hitungan menit.&rdquo;
            </blockquote>
            <div className="mt-6">
              <p className="font-semibold text-white">Tim Teknis</p>
              <p className="text-sm text-white/60">PT Bakti Air Indonesia — Rekanan Resmi Produk PDAM</p>
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
                <div key={partner.name} className="bg-white border border-border rounded-2xl px-8 py-5 flex items-center gap-4 hover:border-brand-blue/30 hover:shadow-card-hover transition-all duration-300">
                  <Handshake size={24} weight="bold" className="text-brand-blue" />
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
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
              Ingin Menjadi Bagian dari Klien Kami?
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              Konsultasikan kebutuhan Anda dan bergabung bersama 50+ institusi yang telah mempercayai Devetek.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue-dark hover:shadow-lg transition-all">
                Hubungi Kami
              </a>
              <a href="https://wa.me/628562302229" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-brand-blue text-brand-blue font-semibold hover:bg-brand-blue/5 transition-colors">
                WhatsApp Langsung
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
