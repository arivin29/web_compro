'use client'

import { useRef, useState } from 'react'
import {
  ChatCircleDots,
  Clock,
  EnvelopeSimple,
  MapPin,
  PaperPlaneTilt,
  Phone,
  WhatsappLogo,
} from '@phosphor-icons/react'
import {
  Button,
  ContactRow,
  Field,
  Input,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
  Select,
  Textarea,
} from '@/components/ui'
import { CONTACT } from '@/lib/constants'

const CATEGORIES = [
  'Sistem PDAM (D-IBS)',
  'WebGIS (D-ASSET)',
  'IoT (HELIOS)',
  'ERP',
  'Custom Software',
  'Konsultasi & Pengadaan',
  'Lainnya',
] as const

type Errors = Partial<Record<'nama' | 'email' | 'pesan', string>>

/**
 * Halaman Kontak — blueprint §18: form menjadi fokus utama, WhatsApp
 * sebagai alternatif cepat, peta setelah informasi utama.
 *
 * Halaman ini sengaja TIDAK memakai <CTASection />: CTA-nya adalah form
 * itu sendiri, dan blok CTA akan mengulang informasi kontak yang sama.
 *
 * Pengiriman memakai WhatsApp karena itu kanal yang benar-benar dipantau
 * tim — tidak ada backend email di project ini. Mekanismenya disebutkan
 * terus terang pada tombol dan keterangan di bawahnya, supaya pengguna
 * tahu apa yang akan terjadi sebelum menekan.
 */
export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()

    const next: Errors = {}
    if (!get('nama')) next.nama = 'Nama wajib diisi.'
    const email = get('email')
    if (!email) next.email = 'Email wajib diisi.'
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = 'Format email belum benar.'
    if (!get('pesan')) next.pesan = 'Ceritakan sedikit kebutuhan Anda.'

    setErrors(next)
    if (Object.keys(next).length > 0) {
      // Pindahkan fokus ke field bermasalah pertama
      formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
      return
    }

    const lines = [
      'Halo Devetek, saya ingin berdiskusi.',
      '',
      `Nama: ${get('nama')}`,
      get('perusahaan') && `Perusahaan: ${get('perusahaan')}`,
      `Email: ${email}`,
      get('telepon') && `Telepon: ${get('telepon')}`,
      get('kategori') && `Kebutuhan: ${get('kategori')}`,
      '',
      'Pesan:',
      get('pesan'),
    ].filter(Boolean)

    window.open(
      `${CONTACT.whatsapp.url}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
      'noopener,noreferrer',
    )
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title="Mari berdiskusi"
        description="Ceritakan kondisi operasional Anda sekarang. Kami bantu petakan langkah pertama yang paling masuk akal."
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Kontak' }]}
        actions={
          <div className="flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/10 px-3 py-2 font-body text-body-sm text-white/85">
              <Clock size={15} aria-hidden className="text-brand-blue-soft" />
              Dibalas pada jam kerja
            </span>
            <span className="inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/10 px-3 py-2 font-body text-body-sm text-white/85">
              <ChatCircleDots size={15} aria-hidden className="text-brand-blue-soft" />
              Konsultasi awal gratis
            </span>
          </div>
        }
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          {/* ── Form ── */}
          <div>
            <Reveal>
              <SectionHeading
                label="Kirim Pesan"
                title="Isi keterangan seperlunya"
                subtitle="Hanya nama, email, dan pesan yang wajib. Sisanya membantu kami menyiapkan jawaban yang lebih tepat."
              />
            </Reveal>

            <Reveal delay={0.05}>
              {sent ? (
                <div
                  role="status"
                  className="mt-8 rounded-lg border border-state-success/30 bg-state-success-soft p-6"
                >
                  <h3 className="font-heading text-h3 font-semibold text-state-success-strong">
                    WhatsApp sudah dibuka
                  </h3>
                  <p className="measure mt-2 font-body leading-relaxed text-text-secondary">
                    Pesan Anda sudah tersusun di jendela WhatsApp — tinggal tekan kirim di sana.
                    Kalau jendelanya tidak muncul, kemungkinan diblokir browser; Anda bisa
                    mengirim langsung ke{' '}
                    <a href={`mailto:${CONTACT.email.general}`} className="link-inline font-semibold">
                      {CONTACT.email.general}
                    </a>.
                  </p>
                  <div className="mt-5">
                    <Button variant="secondary" onClick={() => setSent(false)}>
                      Tulis pesan lain
                    </Button>
                  </div>
                </div>
              ) : (
                <form ref={formRef} noValidate onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Nama lengkap" required error={errors.nama}>
                      {({ id, describedBy, invalid }) => (
                        <Input
                          id={id}
                          name="nama"
                          autoComplete="name"
                          aria-describedby={describedBy}
                          invalid={invalid}
                        />
                      )}
                    </Field>

                    <Field label="Perusahaan / instansi">
                      {({ id }) => (
                        <Input id={id} name="perusahaan" autoComplete="organization" />
                      )}
                    </Field>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Email" required error={errors.email}>
                      {({ id, describedBy, invalid }) => (
                        <Input
                          id={id}
                          name="email"
                          type="email"
                          autoComplete="email"
                          aria-describedby={describedBy}
                          invalid={invalid}
                        />
                      )}
                    </Field>

                    <Field label="Nomor WhatsApp" hint="Opsional, untuk respons lebih cepat.">
                      {({ id, describedBy }) => (
                        <Input
                          id={id}
                          name="telepon"
                          type="tel"
                          autoComplete="tel"
                          aria-describedby={describedBy}
                        />
                      )}
                    </Field>
                  </div>

                  <Field label="Kategori kebutuhan">
                    {({ id }) => (
                      <Select id={id} name="kategori" defaultValue="">
                        <option value="">Pilih kategori…</option>
                        {CATEGORIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </Select>
                    )}
                  </Field>

                  <Field label="Pesan" required error={errors.pesan}>
                    {({ id, describedBy, invalid }) => (
                      <Textarea
                        id={id}
                        name="pesan"
                        rows={5}
                        aria-describedby={describedBy}
                        invalid={invalid}
                        placeholder="Sistem apa yang sedang berjalan sekarang, dan bagian mana yang paling menghambat?"
                      />
                    )}
                  </Field>

                  <div>
                    <Button type="submit" size="lg">
                      <PaperPlaneTilt size={18} weight="bold" />
                      Kirim lewat WhatsApp
                    </Button>
                    <p className="mt-3 font-body text-body-sm text-text-muted">
                      Menekan tombol ini membuka WhatsApp dengan pesan yang sudah terisi — Anda
                      masih bisa memeriksanya sebelum mengirim. Lebih suka email?{' '}
                      <a href={`mailto:${CONTACT.email.general}`} className="link-inline">
                        {CONTACT.email.general}
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </Reveal>
          </div>

          {/* ── Alternatif cepat ── */}
          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
              <div className="rounded-lg border border-border bg-surface-soft p-6">
                <h2 className="label-section mb-5 text-brand-blue-strong">Hubungi Langsung</h2>

                <div className="space-y-4">
                  <ContactRow
                    icon={<EnvelopeSimple size={18} />}
                    label="Email umum"
                    value={CONTACT.email.general}
                    href={`mailto:${CONTACT.email.general}`}
                  />
                  <ContactRow
                    icon={<EnvelopeSimple size={18} />}
                    label="Email marketing"
                    value={CONTACT.email.marketing}
                    href={`mailto:${CONTACT.email.marketing}`}
                  />
                  <ContactRow
                    icon={<Phone size={18} />}
                    label="Telepon / WhatsApp"
                    value={CONTACT.whatsapp.display}
                    href={`tel:+${CONTACT.whatsapp.number}`}
                  />
                  <ContactRow
                    icon={<MapPin size={18} />}
                    label="Kantor"
                    value={CONTACT.address.office.full}
                  />
                </div>

                <div className="mt-6 border-t border-border pt-5">
                  <Button href={CONTACT.whatsapp.urlWithText} variant="whatsapp" block>
                    <WhatsappLogo size={19} weight="fill" />
                    Chat WhatsApp Sekarang
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Peta diperlakukan sebagai konten pendukung — blueprint §9.5 */}
      <Section tone="soft" space="compact">
        <Reveal>
          <SectionHeading label="Lokasi" title="Kantor kami di Bogor" as="h2" />
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 overflow-hidden rounded-lg border border-border bg-surface-white shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5!2d106.767!3d-6.574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5a3f0c3b0a1%3A0x1!2sKomplek%20Meranti%2C%20Pasir%20Jaya%2C%20Bogor%20Barat!5e0!3m2!1sid!2sid!4v1"
              className="h-[320px] w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta lokasi kantor Devetek di Bogor"
            />
          </div>
          {/* Fallback teks bila iframe gagal dimuat — blueprint §9.5 */}
          <p className="mt-3 font-body text-body-sm text-text-muted">
            {CONTACT.address.office.full}
          </p>
        </Reveal>
      </Section>
    </>
  )
}
