'use client'

import { useState } from 'react'
import { EnvelopeSimple, Phone, WhatsappLogo, PaperPlaneTilt, Buildings, CheckCircle } from '@phosphor-icons/react'
import ScrollReveal from '@/components/ui/ScrollReveal'
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
              KONTAK
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.1] text-white">
              Mari Berdiskusi
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
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
                <div className="bg-white border border-border rounded-2xl shadow-sm p-8 md:p-10">
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle size={64} weight="bold" className="text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-heading font-bold text-brand-dark">Pesan Terkirim!</h3>
                      <p className="mt-2 text-text-secondary">Kami akan segera menghubungi Anda.</p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-brand-blue font-medium hover:underline"
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
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-brand-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
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
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-brand-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
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
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-brand-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
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
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
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
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-brand-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors resize-none"
                          placeholder="Ceritakan kebutuhan Anda..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue-dark hover:shadow-lg transition-all"
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
                    className="block bg-white border border-border rounded-2xl shadow-sm p-6 group hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                        <WhatsappLogo size={24} weight="bold" className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-brand-dark group-hover:text-green-600 transition-colors">
                          WhatsApp Langsung
                        </p>
                        <p className="text-sm text-text-secondary">{CONTACT.whatsapp.display}</p>
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <div className="bg-white border border-border rounded-2xl shadow-sm p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <EnvelopeSimple size={24} weight="bold" className="text-brand-blue" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-brand-dark">Email</p>
                        <p className="text-sm text-text-secondary">{CONTACT.email.general}</p>
                        <p className="text-sm text-text-secondary">{CONTACT.email.marketing}</p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="bg-white border border-border rounded-2xl shadow-sm p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                        <Phone size={24} weight="bold" className="text-purple-600" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-brand-dark">Telepon</p>
                        <p className="text-sm text-text-secondary">{CONTACT.phone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="bg-white border border-border rounded-2xl shadow-sm p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0">
                        <Buildings size={24} weight="bold" className="text-rose-600" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-brand-dark">Kantor</p>
                        <p className="text-sm text-text-secondary mt-1">
                          {CONTACT.address.office.full}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="bg-white border border-border rounded-2xl shadow-sm p-1 overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3!2d106.77!3d-6.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnMzYuMCJTIDEwNsKwNDYnMTIuMCJF!5e0!3m2!1sid!2sid!4v1"
                      className="w-full h-48 rounded-xl"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
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
