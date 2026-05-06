'use client'

import Link from 'next/link'
import { WifiHigh, CloudArrowUp, Cpu, Bell, ChartLine, Shield, CheckCircle, ArrowRight } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'

const FEATURES = [
  { title: 'Cloud Platform', icon: CloudArrowUp, desc: 'Dashboard monitoring real-time, analytics, dan alert system berbasis cloud.' },
  { title: 'Hardware Sensor', icon: Cpu, desc: 'Sensor tangguh untuk berbagai kondisi lapangan, tahan cuaca dan gangguan.' },
  { title: 'Alert System', icon: Bell, desc: 'Notifikasi instan saat anomali terdeteksi — via SMS, email, atau WhatsApp.' },
  { title: 'Analytics', icon: ChartLine, desc: 'Analisis data historis, prediktif, dan reporting otomatis.' },
  { title: 'Security', icon: Shield, desc: 'Enkripsi end-to-end, secure firmware update, dan access control.' },
  { title: 'Connectivity', icon: WifiHigh, desc: 'Multi-protocol: NB-IoT, LoRa, 4G, WiFi — adaptif sesuai kondisi.' },
]

const HARDWARE = [
  { type: 'Type A', name: 'Universal Logger', desc: 'Multi-sensor untuk flow, pressure, dan level monitoring. Cocok untuk DMA dan titik kritis.', specs: ['Battery 5+ tahun', 'IP68 waterproof', 'Multi-sensor input'] },
  { type: 'Type B', name: 'Pipeline Logger', desc: 'Khusus monitoring tekanan dan aliran pipa distribusi. Deteksi kebocoran realtime.', specs: ['Acoustic sensor', 'Pressure transducer', 'Auto-calibration'] },
  { type: 'Type C', name: 'Custom Solution', desc: 'Disesuaikan kebutuhan spesifik: water quality, pump monitoring, atau telemetri custom.', specs: ['Modular design', 'Custom firmware', 'Flexible I/O'] },
]

export default function HeliosPage() {
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
              DEVETEK HELIOS
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.1] text-white">
              Monitor. Analisa. Kendalikan.
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-3xl">
              Platform IoT end-to-end untuk infrastruktur kritis. Cloud platform cerdas + hardware sensor tangguh — visibilitas penuh atas seluruh operasi Anda.
            </p>
            <a href="https://iot.devetek.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-colors">
              Lihat Live Demo <ArrowRight size={16} weight="bold" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading title="Platform Features" subtitle="Teknologi IoT yang lengkap dan terintegrasi" />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feat, i) => {
              const Icon = feat.icon
              return (
                <ScrollReveal key={feat.title} delay={i * 0.08}>
                  <div className="bg-white border border-border rounded-2xl shadow-sm p-6 h-full">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                      <Icon size={24} weight="bold" className="text-brand-blue" />
                    </div>
                    <h4 className="font-heading font-semibold text-brand-dark">{feat.title}</h4>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">{feat.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading title="Hardware Lineup" subtitle="Sensor tangguh untuk berbagai kebutuhan" />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {HARDWARE.map((hw, i) => (
              <ScrollReveal key={hw.type} delay={i * 0.1}>
                <div className="bg-white border border-border rounded-2xl shadow-sm p-8 h-full border-t-4 border-brand-blue">
                  <span className="text-xs font-bold text-brand-blue uppercase">{hw.type}</span>
                  <h3 className="mt-2 text-xl font-heading font-bold text-brand-dark">{hw.name}</h3>
                  <p className="mt-3 text-sm text-text-secondary">{hw.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {hw.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-sm text-text-secondary">
                        <CheckCircle size={16} weight="bold" className="text-green-500" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <SectionHeading title="Use Cases" subtitle="HELIOS telah diimplementasikan di berbagai skenario" />
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {['PDAM Monitoring', 'Smart Building', 'Industrial IoT', 'Environmental'].map((uc) => (
                <div key={uc} className="p-4 rounded-xl bg-white border border-border">
                  <p className="text-sm font-medium text-brand-dark">{uc}</p>
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
              Siap Deploy IoT?
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              Dari pilot project hingga deployment massal — tim kami siap mendampingi.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue-dark hover:shadow-lg transition-all">
                Request Demo
              </Link>
              <a href="https://wa.me/628562302229?text=Halo%20Devetek%2C%20saya%20tertarik%20dengan%20HELIOS%20IoT." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-brand-blue text-brand-blue font-semibold hover:bg-brand-blue/5 transition-colors">
                WhatsApp Langsung
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
