'use client'

import {
  ArrowRight,
  ChartLine,
  CurrencyDollar,
  Database,
  Drop,
  Headset,
  Lightning,
  MapPinArea,
  Package,
  Receipt,
  Users,
  WifiHigh,
} from '@phosphor-icons/react'
import {
  Badge,
  BrowserFrame,
  Button,
  Card,
  FeatureCard,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from '@/components/ui'
import CTASection from '@/components/sections/CTASection'
import { slotImage } from '@/lib/images'

const CHALLENGES = [
  {
    num: '01',
    title: 'Proses manual memakan waktu',
    desc: 'Sistem yang tidak saling terhubung membuat pekerjaan berulang dan menurunkan produktivitas petugas.',
  },
  {
    num: '02',
    title: 'Data pelanggan tidak seragam',
    desc: 'Data tersebar di beberapa sistem berbeda sehingga sulit dikonsolidasi dan divalidasi.',
  },
  {
    num: '03',
    title: 'Kebocoran sulit dilacak',
    desc: 'Tanpa pemantauan distribusi yang berjalan terus-menerus, kehilangan air baru diketahui belakangan.',
  },
]

const MODULES = [
  {
    title: 'Billing & Loket',
    icon: Receipt,
    desc: 'Pemantauan pendapatan, data master pelanggan, pengolahan tagihan air dan non-air, cicilan, serta mutasi pelanggan.',
  },
  {
    title: 'Penagihan Mobile',
    icon: Users,
    desc: 'Penagihan langsung ke rumah pelanggan dengan printer thermal Bluetooth, navigasi GPS, dan rekap penerimaan kolektor.',
  },
  {
    title: 'Baca Meter Mobile',
    icon: ChartLine,
    desc: 'Mode semi-offline untuk area minim sinyal, input lewat QR atau pencarian manual, foto stand meter dengan geoposisi.',
  },
  {
    title: 'Hubungan Langganan',
    icon: Headset,
    desc: 'Pengaduan lewat aplikasi, web, atau petugas; klasifikasi dan eskalasi otomatis dengan pemantauan SLA.',
  },
  {
    title: 'Akuntansi & Keuangan',
    icon: CurrencyDollar,
    desc: 'Chart of Account berbasis SAK EP. Transaksi dari billing, kas, dan gudang mengalir menjadi jurnal — diperiksa sebelum masuk buku besar.',
    href: '/products/pdam-suite/akuntansi',
  },
  {
    title: 'Manajemen SDM',
    icon: Package,
    desc: 'Basis data pegawai, absensi QR atau GPS, cuti dan izin daring, integrasi payroll, serta arsip SK terpusat.',
  },
]

const REPORTS = [
  'Ikhtisar data pelanggan',
  'Daftar Rekening Ditagih (DRD)',
  'Laporan Penerimaan Pembayaran (LPP)',
  'Analisis piutang per tanggal batas',
  'Analisis piutang per umur tagihan',
  'Efektivitas penagihan berdasarkan realisasi',
  'Aktivitas layanan pelanggan',
  'Koreksi pemakaian air pelanggan',
  'Rekapitulasi pemakaian pelanggan baru',
  'Ringkasan dan rincian penerimaan',
]

const ADVANTAGES = [
  {
    icon: Lightning,
    title: 'Mengurangi pekerjaan manual',
    desc: 'Billing dan penagihan berjalan otomatis, sehingga waktu petugas berpindah dari rekap ke pelayanan.',
  },
  {
    icon: Database,
    title: 'Satu basis data terpusat',
    desc: 'Data pelanggan, pembayaran, dan operasional berada di satu tempat dan bisa diakses dari mana saja.',
  },
  {
    icon: ChartLine,
    title: 'Laporan tanpa menunggu rekap',
    desc: 'Dashboard dan laporan tersusun otomatis, sehingga keputusan tidak menunggu tutup bulan.',
  },
]

const DASSET_POINTS = [
  'Pemetaan aset infrastruktur: pipa, valve, meter induk, dan reservoir',
  'Manajemen data pelanggan berbasis lokasi spasial',
  'Survei lapangan digital dengan GPS dan foto bergeotag',
  'Penelusuran jaringan untuk menemukan sumber gangguan',
]

const HELIOS_HW = [
  { type: 'Type A', name: 'Universal Logger', desc: 'Multi-sensor untuk berbagai kebutuhan pemantauan' },
  { type: 'Type B', name: 'Pipeline Logger', desc: 'Khusus pemantauan pipa dan jalur distribusi' },
  { type: 'Type C', name: 'Custom Solution', desc: 'Dirakit menyesuaikan kondisi lapangan tertentu' },
]

/**
 * Solusi PDAM (D-IBS + D-ASSET + HELIOS) — blueprint §18.
 *
 * CATATAN: versi sebelumnya mengklaim "Efisiensi 70%" tanpa sumber atau
 * konteks. Blueprint §8.4 mensyaratkan angka publik punya rujukan yang bisa
 * diverifikasi, jadi klaim itu diganti pernyataan kualitatif. Kembalikan
 * angkanya bila ada data pengukuran yang bisa dirujuk.
 */
export default function PDAMSuitePage() {
  return (
    <>
      <PageHero
        eyebrow="Solusi PDAM"
        title="Sistem PDAM terintegrasi"
        description="Pendekatan menyeluruh — teknologi, pendampingan SDM, dan tata kelola — supaya PDAM berskala kecil bisa beroperasi setertib yang besar."
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Produk', href: '/products' },
          { label: 'Solusi PDAM' },
        ]}
        actions={
          <>
            <Button href="/contact">
              Minta Demo
              <ArrowRight size={16} weight="bold" />
            </Button>
            <Button href="/products/pdam-suite/akuntansi" variant="secondary">
              Modul Akuntansi
            </Button>
          </>
        }
        media={
          <BrowserFrame
            src={slotImage('pdam_ibs_dashboard')}
            alt="Dashboard D-IBS menampilkan ringkasan billing dan pelanggan"
            label="d-ibs.devetek.com"
          />
        }
      />

      <Section tone="white">
        <Reveal>
          <SectionHeading
            label="Permasalahan"
            title="Tiga hambatan yang paling sering kami temui"
            subtitle="Tiga hal ini hampir selalu muncul sebelum digitalisasi dimulai."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {CHALLENGES.map((c, i) => (
            <Reveal key={c.num} delay={i * 0.08}>
              <Card padding="lg" accent="orange" interactive={false} className="h-full">
                <span className="font-mono text-body-sm text-brand-orange">{c.num}</span>
                <h3 className="mt-2 font-heading text-h3 font-semibold text-text-primary">
                  {c.title}
                </h3>
                <p className="mt-2 font-body text-body-sm leading-relaxed text-text-secondary">
                  {c.desc}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <Reveal>
          <SectionHeading
            label="Modul D-IBS"
            title="Enam modul yang saling terhubung"
            subtitle="Bukan sekadar sistem — kami dampingi teknologinya, orangnya, dan tata kelolanya."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m, i) => {
            const ModuleIcon = m.icon
            return (
              <Reveal key={m.title} delay={i * 0.07}>
                <FeatureCard
                  icon={<ModuleIcon size={21} />}
                  title={m.title}
                  description={m.desc}
                  href={m.href}
                  linkLabel="Lihat modul"
                  className="h-full"
                />
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <Badge variant="brand">D-ASSET</Badge>
              <h2 className="mt-4 font-heading text-h2 font-bold text-text-primary">
                Aset jaringan di atas satu peta
              </h2>
              <p className="measure mt-4 font-body leading-relaxed text-text-secondary">
                Manajemen aset berbasis WebGIS untuk memetakan, memantau, dan menelusuri seluruh
                infrastruktur jaringan — dari pipa distribusi sampai titik pelanggan.
              </p>
              <ul className="mt-6 space-y-2.5">
                {DASSET_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-orange" />
                    <span className="font-body text-body-sm text-text-secondary">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <BrowserFrame
              src={slotImage('pdam_asset_webgis')}
              alt="Peta jaringan pipa dan aset pada D-ASSET WebGIS"
              label="d-asset.devetek.com"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="dark" pattern="grid">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <BrowserFrame
              src={slotImage('pdam_helios_monitoring')}
              alt="Dashboard pemantauan sensor HELIOS"
              label="helios.devetek.com"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <Badge variant="inverse">HELIOS</Badge>
              <h2 className="mt-4 font-heading text-h2 font-bold text-text-inverse">
                Sensor di lapangan, angkanya di layar
              </h2>
              <p className="measure mt-4 font-body leading-relaxed text-text-inverse-muted">
                Perangkat sensor tangguh di titik-titik jaringan, dipasangkan dengan platform cloud
                untuk membaca tekanan dan aliran secara terus-menerus.
              </p>
              <ul className="mt-6 space-y-3">
                {HELIOS_HW.map((hw) => (
                  <li
                    key={hw.type}
                    className="flex items-start gap-3 rounded-md border border-white/12 bg-white/[0.05] px-4 py-3"
                  >
                    <span className="shrink-0 font-mono text-body-sm text-brand-orange">{hw.type}</span>
                    <span>
                      <span className="block font-heading text-body-sm font-semibold text-text-inverse">
                        {hw.name}
                      </span>
                      <span className="mt-0.5 block font-body text-body-sm text-text-inverse-muted">
                        {hw.desc}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div>
              <SectionHeading label="Keunggulan" title="Kenapa memilih Solusi PDAM Devetek" />
              <div className="mt-8 space-y-4">
                {ADVANTAGES.map((a) => {
                  const AdvIcon = a.icon
                  return (
                    <Card key={a.title} padding="sm" interactive={false}>
                      <div className="flex items-start gap-3.5">
                        <span
                          aria-hidden
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-light text-brand-blue-strong"
                        >
                          <AdvIcon size={19} />
                        </span>
                        <span>
                          <span className="block font-heading text-h4 font-semibold text-text-primary">
                            {a.title}
                          </span>
                          <span className="mt-1 block font-body text-body-sm leading-relaxed text-text-secondary">
                            {a.desc}
                          </span>
                        </span>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <SectionHeading label="Pelaporan" title="Laporan yang tersedia" as="h2" />
              <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                {REPORTS.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-2.5 rounded-md border border-border bg-surface-soft px-3.5 py-2.5"
                  >
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-blue" />
                    <span className="font-body text-body-sm text-text-secondary">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="soft">
        <Reveal>
          <SectionHeading
            align="center"
            label="Integrasi"
            title="Tiga sistem, satu ekosistem"
            subtitle="Ketiganya menulis dan membaca basis data yang sama, sehingga angka di billing, peta, dan sensor tidak pernah berbeda."
          />
        </Reveal>
        <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
          {[
            { icon: Drop, name: 'D-IBS', role: 'Billing' },
            { icon: MapPinArea, name: 'D-ASSET', role: 'WebGIS' },
            { icon: WifiHigh, name: 'HELIOS', role: 'IoT' },
          ].map((s) => {
            const SysIcon = s.icon
            return (
              <li key={s.name}>
                <Card padding="lg" interactive={false} className="h-full text-center">
                  <span
                    aria-hidden
                    className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-accent-light text-brand-blue-strong"
                  >
                    <SysIcon size={24} />
                  </span>
                  <p className="mt-3 font-heading text-h4 font-bold text-text-primary">{s.name}</p>
                  <p className="mt-1 font-body text-body-sm text-text-muted">{s.role}</p>
                </Card>
              </li>
            )
          })}
        </ul>
      </Section>

      <CTASection />
    </>
  )
}
