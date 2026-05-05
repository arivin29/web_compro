'use client'

import Link from 'next/link'
import { Users, CurrencyDollar, ShoppingCart, Package, Gear, CheckCircle } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'

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
    <main className="pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <Badge>DEVETEK ERP</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-brand-dark">
              ERP Modular untuk Bisnis Modern
            </h1>
            <p className="mt-4 text-lg text-text-body max-w-3xl">
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
                  <div className="glass-card p-6 h-full">
                    <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                      <Icon size={24} weight="bold" className="text-purple-600" />
                    </div>
                    <h4 className="font-heading font-semibold text-brand-dark">{mod.title}</h4>
                    <p className="mt-2 text-sm text-text-body leading-relaxed">{mod.desc}</p>
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
              <p className="mt-4 text-text-body">
                Dibangun dengan arsitektur modern yang memungkinkan kustomisasi penuh tanpa mengorbankan stabilitas.
              </p>
              <ul className="mt-6 space-y-3">
                {ADVANTAGES.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-text-body">
                    <CheckCircle size={20} weight="bold" className="text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl border border-border bg-surface-alt p-8 flex items-center justify-center h-64">
                <div className="text-center">
                  <Gear size={48} weight="bold" className="text-purple-500 mx-auto mb-3" />
                  <p className="text-sm text-text-muted">ERP Dashboard Preview</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-brand-red/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
              Siap Modernisasi Bisnis Anda?
            </h2>
            <p className="mt-4 text-text-body text-lg">
              Konsultasikan kebutuhan ERP Anda dan dapatkan solusi yang sesuai.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-brand-red to-accent text-white font-semibold hover:shadow-lg transition-shadow">
                Hubungi Kami
              </Link>
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
