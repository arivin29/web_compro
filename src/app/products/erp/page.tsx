'use client'

import Link from 'next/link'
import { Users, CurrencyDollar, ShoppingCart, Package, Gear, CheckCircle } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'

const ERP_MODULES = [
  { title: 'Human Resource', icon: Users, desc: 'Manajemen karyawan, absensi, payroll, dan evaluasi kinerja.' },
  { title: 'Finance & Accounting', icon: CurrencyDollar, desc: 'Pembukuan, laporan keuangan, pajak, dan audit trail.' },
  { title: 'Sales Management', icon: ShoppingCart, desc: 'Pipeline penjualan, quotation, invoice, dan tracking.' },
  { title: 'Inventory Management', icon: Package, desc: 'Stok gudang, transfer, opname, dan barcode system.' },
  { title: 'Procurement', icon: Gear, desc: 'Purchase request, vendor management, dan approval workflow.' },
]

const ADVANTAGES = [
  'Full Customizable & Modular',
  'Dynamic Multi-Level Approval',
  'Role Management Granular',
  'Notifikasi multi-channel (Email, WhatsApp, SMS)',
  'Integrasi Payment Gateway',
  'Arsitektur Microservice',
]

export default function ERPPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-[72px] bg-gradient-to-br from-brand-blue-dark to-brand-blue overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20 mb-6">
              DEVETEK ERP
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.1] text-white">
              ERP Modular untuk Bisnis Modern
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-3xl">
              Sistem ERP yang fleksibel dan scalable. Dynamic multi-level approval, arsitektur microservice, dan integrasi payment gateway.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading title="Modul ERP" subtitle="Semua yang bisnis Anda butuhkan" />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ERP_MODULES.map((mod, i) => {
              const Icon = mod.icon
              return (
                <ScrollReveal key={mod.title} delay={i * 0.08}>
                  <div className="bg-white border border-border rounded-2xl shadow-sm p-6 h-full">
                    <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                      <Icon size={24} weight="bold" className="text-purple-600" />
                    </div>
                    <h4 className="font-heading font-semibold text-brand-dark">{mod.title}</h4>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">{mod.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-heading font-bold text-brand-dark">Keunggulan DEVETEK ERP</h2>
              <p className="mt-4 text-text-secondary">
                Dibangun dengan arsitektur modern yang memungkinkan kustomisasi penuh tanpa mengorbankan stabilitas.
              </p>
              <ul className="mt-6 space-y-3">
                {ADVANTAGES.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                    <CheckCircle size={20} weight="bold" className="text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl border border-border bg-white overflow-hidden shadow-sm">
                <img src="/images/products/erp.png" alt="ERP Dashboard" className="w-full h-64 object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
              Siap Modernisasi Bisnis Anda?
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              Konsultasikan kebutuhan ERP Anda dan dapatkan solusi yang sesuai.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue-dark hover:shadow-lg transition-all">
                Hubungi Kami
              </Link>
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
