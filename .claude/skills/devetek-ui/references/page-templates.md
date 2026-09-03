# Template Halaman

Lima kerangka siap salin. Ambil yang paling dekat, ganti isinya, jangan
menyusun ulang strukturnya.

Semua template mengikuti aturan yang sama:

- Tepat satu `<PageHero>` di atas (hanya beranda yang punya hero sendiri).
- Isi dibungkus `<Section>`, bukan `<section>` mentah.
- `<CTASection />` sebagai penutup, sebelum footer.
- Satu `<h1>` per halaman — sudah dirender `PageHero`.
- Ritme background berselang: `white → soft → dark → white → …`

---

## 1. Halaman detail produk

Urutan mengikuti blueprint §18: hero → masalah pengguna → cara solusi
bekerja → modul → screenshot nyata → integrasi → bukti → FAQ → CTA.

```tsx
'use client'

import { Drop, GearSix, ShieldCheck } from '@phosphor-icons/react'
import {
  BrowserFrame, Button, Card, FeatureCard, PageHero,
  Reveal, Section, SectionHeading,
} from '@/components/ui'
import CTASection from '@/components/sections/CTASection'

const MASALAH = [
  { title: '…', desc: '…' },
]

const MODUL = [
  { icon: Drop, title: '…', desc: '…' },
]

export default function ProdukPage() {
  return (
    <>
      <PageHero
        eyebrow="Produk"
        title="Nama Produk"
        description="Satu paragraf pembuka. Jangan lebih."
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Produk', href: '/products' },
          { label: 'Nama Produk' },
        ]}
        actions={
          <>
            <Button href="/contact">Minta Demo</Button>
            <Button href="/products" variant="secondary">Produk Lain</Button>
          </>
        }
        media={
          <BrowserFrame
            src="/images/projects/xxx.png"
            alt="Deskripsi konkret isi layar"
            label="produk.devetek.com"
          />
        }
      />

      {/* Masalah pengguna */}
      <Section tone="white">
        <Reveal>
          <SectionHeading
            label="Masalah yang Diselesaikan"
            title="…"
            subtitle="…"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {MASALAH.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <Card padding="lg" accent="orange" className="h-full">
                <h3 className="font-heading text-h3 font-semibold text-text-primary">{m.title}</h3>
                <p className="mt-2 font-body text-body-sm leading-relaxed text-text-secondary">
                  {m.desc}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Modul / kapabilitas */}
      <Section tone="soft">
        <Reveal>
          <SectionHeading label="Modul" title="…" />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {MODUL.map((m, i) => {
            const Icon = m.icon
            return (
              <Reveal key={m.title} delay={i * 0.08}>
                <FeatureCard
                  icon={<Icon size={21} />}
                  title={m.title}
                  description={m.desc}
                  className="h-full"
                />
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Bukti implementasi — screenshot nyata */}
      <Section tone="dark" pattern="grid">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading label="Tampilan Sistem" title="…" subtitle="…" />
          </Reveal>
          <Reveal delay={0.1}>
            <BrowserFrame src="/images/projects/yyy.png" alt="…" />
          </Reveal>
        </div>
      </Section>

      {/* FAQ — lihat interaction-patterns.md untuk versi accordion */}

      <CTASection />
    </>
  )
}
```

---

## 2. Halaman daftar / portofolio (dengan filter)

```tsx
'use client'

import { useState } from 'react'
import { Badge, PageHero, ProjectCard, Reveal, Section, SectionHeading } from '@/components/ui'
import { CLIENT_CATEGORIES, PROJECTS, type ClientCategory } from '@/lib/constants'
import CTASection from '@/components/sections/CTASection'

export default function PortfolioPage() {
  const [filter, setFilter] = useState<ClientCategory>('Semua')
  const shown = filter === 'Semua' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <>
      <PageHero
        eyebrow="Portofolio"
        title="…"
        description="…"
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Portofolio' }]}
      />

      <Section tone="white">
        <Reveal>
          <SectionHeading label="Proyek" title="…" />
        </Reveal>

        {/* Filter — radio group, bukan tombol lepas. Lihat interaction-patterns.md */}
        <div role="radiogroup" aria-label="Saring berdasarkan sektor" className="mt-8 flex flex-wrap gap-2">
          {CLIENT_CATEGORIES.map((c) => (
            <button
              key={c}
              role="radio"
              aria-checked={filter === c}
              onClick={() => setFilter(c)}
              className={`tap-target rounded-sm border px-3.5 py-2 font-body text-body-sm transition-colors ${
                filter === c
                  ? 'border-brand-blue bg-accent-light font-semibold text-brand-blue-strong'
                  : 'border-border bg-surface-white text-text-secondary hover:border-brand-blue/50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <p aria-live="polite" className="mt-4 font-body text-body-sm text-text-muted">
          Menampilkan {shown.length} proyek
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <ProjectCard
                image={p.image}
                title={p.title}
                category={p.category}
                client={p.client}
                impact={p.desc}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
```

---

## 3. Halaman kontak (form)

```tsx
'use client'

import { useState } from 'react'
import { EnvelopeSimple, MapPin, Phone, WhatsappLogo } from '@phosphor-icons/react'
import {
  Button, ContactRow, Field, Input, PageHero, Reveal, Section, SectionHeading, Textarea,
} from '@/components/ui'
import { CONTACT } from '@/lib/constants'

export default function ContactPage() {
  const [sending, setSending] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title="…"
        description="…"
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Kontak' }]}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Form jadi fokus utama — blueprint §18 */}
          <Reveal>
            <form
              noValidate
              onSubmit={(e) => { e.preventDefault(); /* … */ }}
              className="space-y-5"
            >
              <SectionHeading label="Kirim Pesan" title="…" as="h2" />

              <Field label="Nama" required error={errors.nama}>
                {({ id, describedBy, invalid }) => (
                  <Input id={id} name="nama" aria-describedby={describedBy} invalid={invalid} />
                )}
              </Field>

              <Field label="Email" required error={errors.email}>
                {({ id, describedBy, invalid }) => (
                  <Input id={id} name="email" type="email" aria-describedby={describedBy} invalid={invalid} />
                )}
              </Field>

              <Field label="Pesan" required error={errors.pesan}>
                {({ id, describedBy, invalid }) => (
                  <Textarea id={id} name="pesan" aria-describedby={describedBy} invalid={invalid} />
                )}
              </Field>

              <Button type="submit" loading={sending} size="lg">
                {sending ? 'Mengirim…' : 'Kirim Pesan'}
              </Button>

              {/* Success state tetap menyediakan langkah berikutnya — blueprint §13 */}
              {sent && (
                <p role="status" className="rounded-md border border-state-success/30 bg-state-success-soft p-4 font-body text-body-sm text-[#136F45]">
                  Pesan terkirim. Kami balas dalam 1×24 jam kerja. Butuh lebih cepat?{' '}
                  <a href={CONTACT.whatsapp.urlWithText} className="link-inline font-semibold">
                    Hubungi lewat WhatsApp
                  </a>.
                </p>
              )}
            </form>
          </Reveal>

          {/* WhatsApp sebagai alternatif cepat */}
          <Reveal delay={0.1}>
            <div className="space-y-4 rounded-lg border border-border bg-surface-soft p-6">
              <ContactRow icon={<EnvelopeSimple size={18} />} label="Email"
                value={CONTACT.email.general} href={`mailto:${CONTACT.email.general}`} />
              <ContactRow icon={<Phone size={18} />} label="Telepon"
                value={CONTACT.whatsapp.display} href={`tel:+${CONTACT.whatsapp.number}`} />
              <ContactRow icon={<MapPin size={18} />} label="Kantor"
                value={CONTACT.address.office.full} />
              <Button href={CONTACT.whatsapp.urlWithText} variant="whatsapp" block>
                <WhatsappLogo size={19} weight="fill" />
                Chat WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Peta setelah informasi utama — blueprint §18 */}
    </>
  )
}
```

Halaman kontak **tidak** memakai `<CTASection />` — CTA-nya adalah form itu
sendiri, dan blok CTA akan mengulang informasi kontak yang sama.

---

## 4. Halaman legal / teks panjang

```tsx
import type { Metadata } from 'next'
import { PageHero, Section } from '@/components/ui'

export const metadata: Metadata = { title: 'Kebijakan Privasi' }

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Kebijakan Privasi"
        description="Terakhir diperbarui 3 September 2026."
        breadcrumb={[{ label: 'Beranda', href: '/' }, { label: 'Kebijakan Privasi' }]}
      />

      <Section tone="white" width="prose">
        <div className="space-y-8">
          <section>
            <h2 className="font-heading text-h3 font-semibold text-text-primary">1. Judul Bagian</h2>
            <p className="mt-3 font-body leading-relaxed text-text-secondary">…</p>
          </section>
        </div>
      </Section>
    </>
  )
}
```

`width="prose"` membatasi baris ke 68 karakter. Halaman legal tidak memakai
`CTASection` — tidak pantas menjual di halaman kebijakan.

---

## 5. Halaman ikhtisar / hub

Untuk `/products`: satu card unggulan, sisanya dikelompokkan berdasarkan
masalah yang diselesaikan (blueprint §18).

```tsx
<Section tone="white">
  <Reveal>
    <SectionHeading label="Produk Unggulan" title="…" />
  </Reveal>

  {/* Unggulan dibedakan lewat tone + accent, BUKAN radius lebih besar */}
  <Reveal>
    <Card tone="dark" accent="gradient" href="/products/pdam-suite" padding="lg" className="mt-12">
      …
    </Card>
  </Reveal>

  <div className="mt-5 grid gap-5 md:grid-cols-3">
    {OTHERS.map((p, i) => (
      <Reveal key={p.title} delay={i * 0.08}>
        <FeatureCard {...p} className="h-full" />
      </Reveal>
    ))}
  </div>
</Section>
```
