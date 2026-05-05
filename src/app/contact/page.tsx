'use client'

import { useState } from 'react'
import { EnvelopeSimple, Phone, MapPin, WhatsappLogo, PaperPlaneTilt, Buildings, CheckCircle } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Badge from '@/components/ui/Badge'
import { CONTACT } from '@/lib/constants'

const CATEGORIES = [
  'Sistem PDAM (D-IBS)',
  'WebGIS (D-ASSET)',
  'IoT (HELIOS)',
  'ERP',
  'Custom Software',
  'Konsultasi & Pengadaan',
  'Lainnya',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to WhatsApp with form data
    const text = `Halo Devetek,%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0AHP: ${formData.phone}%0AKebutuhan: ${formData.category}%0A%0APesan:%0A${formData.message}`
    window.open(`https://wa.me/628562302229?text=${text}`, '_blank')
    setSubmitted(true)
  }

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Badge>KONTAK</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-brand-dark">
              Mari Berdiskusi
            </h1>
            <p className="mt-4 text-lg text-text-body max-w-2xl mx-auto">
              Tim kami siap membantu Anda menemukan solusi yang tepat.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form - 3 cols */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="glass-card p-8 md:p-10">
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle size={64} weight="bold" className="text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-heading font-bold text-brand-dark">Pesan Terkirim!</h3>
                      <p className="mt-2 text-text-body">Kami akan segera menghubungi Anda.</p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-accent font-medium hover:underline"
                      >
                        Kirim pesan lagi
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-2">
                          Nama Lengkap <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-brand-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-brand-dark mb-2">
                            Email <span className="text-brand-red">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-brand-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                            placeholder="email@contoh.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-brand-dark mb-2">
                            No. HP
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-brand-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                            placeholder="08xx xxxx xxxx"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-2">
                          Kategori Kebutuhan
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                        >
                          <option value="">Pilih kategori...</option>
                          {CATEGORIES.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-2">
                          Pesan <span className="text-brand-red">*</span>
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-brand-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                          placeholder="Ceritakan kebutuhan Anda..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-red to-accent text-white font-semibold hover:shadow-lg transition-shadow"
                      >
                        <PaperPlaneTilt size={20} weight="bold" />
                        Kirim Pesan
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Info - 2 cols */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <div className="space-y-6">
                  {/* WhatsApp Card */}
                  <a
                    href={CONTACT.whatsapp.urlWithText}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass-card p-6 group hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                        <WhatsappLogo size={24} weight="bold" className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-brand-dark group-hover:text-green-600 transition-colors">
                          WhatsApp Langsung
                        </p>
                        <p className="text-sm text-text-body">{CONTACT.whatsapp.display}</p>
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <div className="glass-card p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <EnvelopeSimple size={24} weight="bold" className="text-accent" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-brand-dark">Email</p>
                        <p className="text-sm text-text-body">{CONTACT.email.general}</p>
                        <p className="text-sm text-text-body">{CONTACT.email.marketing}</p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="glass-card p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                        <Phone size={24} weight="bold" className="text-purple-600" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-brand-dark">Telepon</p>
                        <p className="text-sm text-text-body">{CONTACT.phone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="glass-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0">
                        <Buildings size={24} weight="bold" className="text-rose-600" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-brand-dark">Kantor</p>
                        <p className="text-sm text-text-body mt-1">
                          {CONTACT.address.office.full}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div className="glass-card p-1 overflow-hidden">
                    <div className="rounded-xl bg-surface-alt h-48 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin size={32} weight="bold" className="text-text-muted mx-auto mb-2" />
                        <p className="text-sm text-text-muted">Google Maps</p>
                        <p className="text-xs text-text-muted">(Coming soon)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
