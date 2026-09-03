'use client'

import Link from 'next/link'
import {
  ArrowDown,
  ArrowRight,
  ArrowsClockwise,
  Bank,
  Books,
  CaretDown,
  ChartBar,
  CheckCircle,
  CurrencyDollar,
  Database,
  Eye,
  FileText,
  Flask,
  Gear,
  ImageSquare,
  Lock,
  MagnifyingGlass,
  Notebook,
  Path,
  Receipt,
  SealCheck,
  ShieldCheck,
  Stack,
  Swap,
  Table,
  TreeStructure,
  Warning,
  WhatsappLogo,
  XCircle,
} from '@phosphor-icons/react'
import { twMerge } from 'tailwind-merge'
import {
  Button,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from '@/components/ui'
import CTASection from '@/components/sections/CTASection'
import Badge from '@/components/ui/Badge'

const WA_LINK =
  'https://wa.me/628562302229?text=Halo%20Devetek%2C%20saya%20tertarik%20dengan%20modul%20Akuntansi%20PDAM.'

const STATS = [
  { value: '8', label: 'Laporan SAK EP, masing-masing dengan PDF & Excel' },
  { value: '9', label: 'Register transaksi yang mengalir sendiri' },
  { value: '8', label: 'Pemeriksaan baku sebelum jurnal terbit' },
  { value: '1', label: 'Buku besar per tahun buku, terpisah rapi' },
]

const PROBLEMS = [
  {
    num: '01',
    title: 'Angka diketik ulang dari sistem lain',
    desc: 'Tagihan air sudah ada di billing, penerimaan sudah ada di kas, pemakaian bahan kimia sudah ada di gudang. Tapi ke buku besar semuanya masuk lewat pengetikan ulang. Setiap pengetikan ulang adalah kesempatan baru untuk salah.',
  },
  {
    num: '02',
    title: 'Kesalahan baru ketahuan di laporan',
    desc: 'Kode akun yang tidak ada di bagan akun, jurnal yang debit dan kreditnya tidak sama, periode yang datanya belum digenerate — semuanya lolos, lalu muncul sebagai selisih di neraca berbulan-bulan kemudian, tanpa jejak dari mana asalnya.',
  },
  {
    num: '03',
    title: 'Bulan yang sudah dilaporkan masih bisa berubah',
    desc: 'Laporan sudah naik ke direksi, lalu ada yang menyunting jurnal bulan itu. Angkanya bergeser diam-diam, dan tidak ada yang tahu sampai ada yang membandingkan cetakan lama.',
  },
]

const STEPS = [
  {
    num: '1',
    icon: Stack,
    title: 'Transaksi terkumpul sendiri',
    desc: 'Sembilan register menampung transaksi apa adanya dari sistem operasional: rekening air, rekening non air, penerimaan kas, pengeluaran lewat voucher, pemakaian bahan & kimia, pindah buku antar rekening bank. Setiap baris menyandang penanda: sudah masuk buku besar, atau belum.',
  },
  {
    num: '2',
    icon: Eye,
    title: 'Diperiksa, sebelum apa pun ditulis',
    desc: 'Tombol Pratinjau memperlihatkan apa yang akan terjadi tanpa menulis apa pun — termasuk berapa baris jurnal yang akan lahir. Delapan pemeriksaan baku berjalan sekaligus, dan seluruh masalahnya disebut dalam satu tampilan, bukan satu per satu.',
  },
  {
    num: '3',
    icon: ShieldCheck,
    title: 'Posting, dengan penjaga',
    desc: 'Buku yang sudah ditutup tidak bisa ditulis. Bulan yang sudah dikunci akuntan tidak bisa ditulis; membukanya adalah tindakan sadar dengan layarnya sendiri. Setiap jurnal yang lahir membawa tautan permanen ke dokumen asalnya.',
  },
  {
    num: '4',
    icon: FileText,
    title: 'Laporan, dari angka yang sama',
    desc: 'Delapan laporan SAK EP plus dua belas laporan manajemen. Yang tampil di layar sama dengan yang tercetak di PDF dan Excel — export memakai jalur hitung yang sama, bukan menghitung ulang.',
  },
]

const BLOCKING = [
  'Debit tidak sama dengan kredit',
  'Periode tidak punya baris sumber sama sekali',
  'Ada baris tanpa kode akun',
  'Kode akun tidak ada di bagan akun buku ini',
  'Kode akun muncul lebih dari sekali di bagan akun',
]

const WARNING = [
  'Seluruh baris bernilai nol — biasanya tanda data sumber belum digenerate',
  'Sebagian baris bernilai nol',
  'Periode ini sudah punya jurnal — posting akan menulis ulang, bukan menumpuk',
]

const TRACEABILITY = [
  {
    icon: MagnifyingGlass,
    title: 'Klik angka di Neraca',
    desc: 'Langsung terbuka Buku Besar akun itu, dengan rentang periodenya ikut terbawa.',
  },
  {
    icon: Path,
    title: 'Klik baris di Buku Besar',
    desc: 'Terbuka jurnalnya. Dari jurnal, tautan asal menunjuk dokumen sumbernya: voucher mana, register periode mana.',
  },
  {
    icon: ArrowsClockwise,
    title: 'Dashboard Rekonsiliasi',
    desc: 'Mengadu dokumen sumber dengan jurnal di buku besar, per modul, per periode. Yang belum sinkron tampil sebagai baris tersendiri, bukan sebagai selisih yang harus dicari.',
  },
  {
    icon: Lock,
    title: 'Jurnal manual tidak tersentuh mesin',
    desc: 'Jurnal yang diketik langsung tidak akan pernah disentuh mesin posting. Hubungannya dipaksa kosong oleh sistem, bukan diserahkan ke pengirim data.',
  },
  {
    icon: SealCheck,
    title: 'Perubahan jurnal manual tercatat',
    desc: 'Penambahan, perubahan, dan penghapusan jurnal di Entry Jurnal tercatat lengkap dengan waktu, pengguna, dan alamat IP.',
  },
]

const SAKEP_REPORTS = [
  { name: 'Neraca / Posisi Keuangan', scope: 'Bulanan · Triwulan · Semester · Tahunan' },
  { name: 'Laba Rugi & Penghasilan Komprehensif', scope: 'Bulanan · Triwulan · Semester · Tahunan' },
  { name: 'Neraca Saldo', scope: 'Bulanan · Triwulan · Semester · Tahunan' },
  { name: 'Rincian Biaya', scope: 'Bulanan · Triwulan · Semester · Tahunan' },
  { name: 'Arus Kas', scope: 'Bulanan · Triwulan · Semester · Tahunan' },
  { name: 'Perubahan Ekuitas', scope: 'Bulanan · Triwulan · Semester · Tahunan' },
  { name: 'Buku Besar — satu akun', scope: 'Kumulatif · per bulan · rentang bebas' },
  { name: 'Buku Besar — seluruh akun', scope: 'Bulanan · Triwulan · Semester · Tahunan' },
]

type EditionRow = { label: string; mandiri: string; terintegrasi: string }

const EDITIONS: EditionRow[] = [
  { label: 'Laporan SAK EP + PDF/Excel + drill-down', mandiri: 'ya', terintegrasi: 'ya' },
  { label: 'Konfigurasi Arus Kas & Perubahan Ekuitas per buku', mandiri: 'ya', terintegrasi: 'ya' },
  { label: 'Bagan akun, jenis jurnal, tag, multi tahun buku', mandiri: 'ya', terintegrasi: 'ya' },
  { label: 'Entry jurnal manual', mandiri: 'ya', terintegrasi: 'ya' },
  { label: 'Import jurnal dari berkas', mandiri: 'ya', terintegrasi: 'belum' },
  { label: 'Pencarian lanjutan lintas jurnal', mandiri: 'ya', terintegrasi: 'belum' },
  { label: 'Transaksi mengalir sendiri dari billing, kas, gudang', mandiri: 'tidak', terintegrasi: '9 register' },
  { label: 'Pratinjau posting & kunci per periode', mandiri: 'tidak', terintegrasi: 'ya' },
  { label: 'Rekonsiliasi sumber ↔ buku besar', mandiri: 'tidak', terintegrasi: 'ya' },
  { label: 'Laporan manajemen', mandiri: 'tidak', terintegrasi: '12 laporan' },
  { label: 'Vendor, mitra, anggaran, bahan & kimia', mandiri: 'tidak', terintegrasi: 'ya' },
  { label: 'Periksa Konfigurasi Laporan', mandiri: 'tidak', terintegrasi: 'ya' },
  { label: 'Panduan di dalam aplikasi', mandiri: 'tidak', terintegrasi: 'ya' },
]

const IT_NOTES = [
  {
    icon: Database,
    title: 'Satu buku besar per tahun buku',
    desc: 'Nama databasenya diambil dari registry yang diperiksa tiap dipakai, bukan dirakit dari potongan teks.',
  },
  {
    icon: Books,
    title: 'Menyiapkan buku tahun baru adalah satu perintah',
    desc: 'Dan perintah itu tidak pernah menghapus apa pun.',
  },
  {
    icon: Lock,
    title: 'Buku yang sudah ditutup tetap bisa dibaca',
    desc: 'Untuk laporan. Yang ditutup hanya jalur tulis.',
  },
  {
    icon: ArrowsClockwise,
    title: 'Debit/kredit diterjemahkan di satu tempat',
    desc: 'Nilai yang tidak dikenali ditolak, bukan diam-diam dianggap kredit.',
  },
  {
    icon: Warning,
    title: 'Setiap penolakan punya kode alasan yang tetap',
    desc: 'Bukan pesan yang harus ditebak maksudnya.',
  },
  {
    icon: SealCheck,
    title: 'Aljabar uangnya dikunci oleh test',
    desc: 'Pembulatan, saldo, dan saldo akhir masing-masing punya rangkaian test tersendiri. Penurunan rentang periode dikunci 22 test.',
  },
  {
    icon: ShieldCheck,
    title: 'Perintah yang bisa merusak database ditolak',
    desc: 'Sebelum sempat jalan, dan tidak bisa dilewati dengan --force.',
  },
  {
    icon: Gear,
    title: 'Sembilan prosedur posting lama sudah dipensiunkan',
    desc: 'Diganti mesin baru; jalur memanggilnya ditutup di kode.',
  },
]

const PANDUAN_MODULES = [
  'Rekening Air',
  'Rekening Non Air',
  'Penerimaan Kas',
  'Jurnal Umum',
  'Voucher',
  'Voucher Bayar',
  'Pindah Buku',
  'Rekonsiliasi',
  'Neraca Lajur',
]

const UI = {
  card: 'rounded-md border border-border bg-white p-6 shadow-card',
  cardSoft: 'rounded-md border border-border bg-surface-soft p-6',
  cardDark: 'rounded-md border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm',
  marker: 'inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-orange',
}

/**
 * Bagan "Arsitektur & Alur Data".
 *
 * Lima lapis, dari transaksi operasional sampai laporan. Chip di antara lapis
 * menyebut APA yang terjadi di perpindahan itu — bukan hiasan. Isinya mengikuti
 * 10-landing-akuntansi.md §D; jangan menambah kotak tanpa sumbernya di sana.
 */
type Tone = 'sky' | 'blue' | 'amber' | 'emerald' | 'violet'

// Kelas ditulis utuh, tidak dirakit dari variabel — Tailwind memindai teks sumber,
// kelas hasil rangkaian string akan terbuang saat build.
const TONE: Record<Tone, { band: string; chip: string; card: string; icon: string; num: string }> = {
  sky: {
    band: 'border-sky-400/20 bg-sky-400/[0.06]',
    chip: 'border-sky-400/30 bg-sky-400/10 text-sky-200',
    card: 'border-white/10 bg-white/[0.04]',
    icon: 'text-sky-300',
    num: 'bg-sky-400/20 text-sky-200',
  },
  blue: {
    band: 'border-blue-400/20 bg-blue-400/[0.06]',
    chip: 'border-blue-400/30 bg-blue-400/10 text-blue-200',
    card: 'border-white/10 bg-white/[0.04]',
    icon: 'text-blue-300',
    num: 'bg-blue-400/20 text-blue-200',
  },
  amber: {
    band: 'border-amber-300/25 bg-amber-300/[0.07]',
    chip: 'border-amber-300/30 bg-amber-300/10 text-amber-200',
    card: 'border-amber-200/15 bg-white/[0.04]',
    icon: 'text-amber-300',
    num: 'bg-amber-300/20 text-amber-200',
  },
  emerald: {
    band: 'border-emerald-400/20 bg-emerald-400/[0.06]',
    chip: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
    card: 'border-white/10 bg-white/[0.04]',
    icon: 'text-emerald-300',
    num: 'bg-emerald-400/20 text-emerald-200',
  },
  violet: {
    band: 'border-violet-400/20 bg-violet-400/[0.06]',
    chip: 'border-violet-400/30 bg-violet-400/10 text-violet-200',
    card: 'border-white/10 bg-white/[0.04]',
    icon: 'text-violet-300',
    num: 'bg-violet-400/20 text-violet-200',
  },
}

type BandItem = { icon: typeof Receipt; title: string; sub?: string; num?: number }
type Band = { label: string; note?: string; tone: Tone; items: BandItem[]; after?: string[] }

const FLOW: Band[] = [
  {
    label: 'Sumber Operasional',
    note: 'Transaksi lahir di sini, bukan diketik ulang',
    tone: 'sky',
    items: [
      { icon: Receipt, title: 'Billing Air', sub: 'rekening air' },
      { icon: FileText, title: 'Non Air', sub: 'sambungan, jasa lain' },
      { icon: Bank, title: 'Loket & Kas', sub: 'penerimaan' },
      { icon: CurrencyDollar, title: 'Voucher', sub: 'pengeluaran' },
      { icon: Flask, title: 'Bahan & Kimia', sub: 'gudang' },
      { icon: Swap, title: 'Pindah Buku', sub: 'antar rekening bank' },
    ],
    after: ['9 register', 'penanda: sudah / belum diposting'],
  },
  {
    label: 'Register & Dokumen',
    note: 'Basis master — selama belum diposting, dokumen masih bisa diperbaiki',
    tone: 'blue',
    items: [
      { icon: Stack, title: 'JRA', sub: 'Rekening Air' },
      { icon: Stack, title: 'JRNA', sub: 'Rekening Non Air' },
      { icon: Stack, title: 'JPK', sub: 'Penerimaan Kas' },
      { icon: Stack, title: 'JPBIK', sub: 'Bahan & Kimia' },
      { icon: Stack, title: 'JBK', sub: 'Pembayaran voucher' },
      { icon: Stack, title: 'DVUD / DHHD', sub: 'Posting voucher' },
      { icon: Notebook, title: 'JU', sub: 'Jurnal Umum' },
    ],
    after: ['Pratinjau — memperlihatkan hasilnya tanpa menulis apa pun'],
  },
  {
    label: 'Gerbang Pemeriksaan',
    note: 'Satu-satunya jalan masuk ke buku besar',
    tone: 'amber',
    items: [
      { num: 1, icon: MagnifyingGlass, title: 'Preflight', sub: '8 pemeriksaan, 5 memblokir' },
      { num: 2, icon: Eye, title: 'Pratinjau', sub: 'berapa baris jurnal akan lahir' },
      { num: 3, icon: ShieldCheck, title: 'Penjaga Buku', sub: 'status buku & kunci periode' },
      { num: 4, icon: ArrowsClockwise, title: 'Konversi', sub: 'debit/kredit satu gerbang' },
      { num: 5, icon: SealCheck, title: 'Terbit', sub: 'tautan asal ikut tersimpan' },
    ],
    after: ['posting ulang menimpa periode itu, tidak menumpuk'],
  },
  {
    label: 'Buku Besar',
    note: 'Satu database per tahun buku — ini catatan finalnya',
    tone: 'emerald',
    items: [
      { icon: Notebook, title: 'Jurnal', sub: 'bernomor, bertanggal' },
      { icon: TreeStructure, title: 'Bagan Akun', sub: 'akun & kelompok' },
      { icon: Database, title: 'Saldo', sub: 'saldo awal & berjalan' },
      { icon: Lock, title: 'Kunci Periode', sub: 'per bulan' },
    ],
    after: ['jalur hitung yang sama untuk layar, PDF, dan Excel'],
  },
  {
    label: 'Laporan & Penelusuran',
    note: 'Bisa ditelusuri balik sampai dokumen sumbernya',
    tone: 'violet',
    items: [
      { icon: Bank, title: 'Neraca' },
      { icon: ChartBar, title: 'Laba Rugi' },
      { icon: ArrowsClockwise, title: 'Arus Kas' },
      { icon: Path, title: 'Perubahan Ekuitas' },
      { icon: Table, title: 'Neraca Saldo' },
      { icon: Books, title: 'Buku Besar' },
      { icon: FileText, title: 'Laporan Manajemen' },
    ],
  },
]

const LEGEND: { tone: string; label: string }[] = [
  { tone: 'bg-sky-400', label: 'Operasional — di luar modul akuntansi' },
  { tone: 'bg-blue-400', label: 'Master — dokumen masih bisa diubah' },
  { tone: 'bg-amber-300', label: 'Gerbang — diperiksa sebelum ditulis' },
  { tone: 'bg-emerald-400', label: 'Book — catatan final per tahun buku' },
  { tone: 'bg-violet-400', label: 'Laporan — bisa ditelusuri balik' },
]

function FlowBand({ band }: { band: Band }) {
  const t = TONE[band.tone]
  return (
    <div className={`rounded-md border p-4 md:p-6 ${t.band}`}>
      <div className="mb-5 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 text-center">
        <span
          className={`rounded-sm border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] ${t.chip}`}
        >
          {band.label}
        </span>
        {band.note && <span className="text-xs text-white/45">{band.note}</span>}
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {band.items.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              className={`relative w-[120px] rounded-sm border px-2 py-4 text-center md:w-[140px] md:px-3 ${t.card}`}
            >
              {item.num !== undefined && (
                <span
                  className={`absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${t.num}`}
                >
                  {item.num}
                </span>
              )}
              <Icon size={22} weight="light" className={`mx-auto ${t.icon}`} />
              <p className="mt-2 text-sm font-semibold leading-tight text-white/90">
                {item.title}
              </p>
              {item.sub && (
                <p className="mt-1 text-[11px] leading-snug text-white/45">{item.sub}</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function FlowConnector({ chips }: { chips: string[] }) {
  return (
    <div className="flex flex-col items-center gap-2 py-4">
      <ArrowDown size={18} weight="bold" className="text-white/25" />
      <div className="flex flex-wrap justify-center gap-2">
        {chips.map((c) => (
          <span
            key={c}
            className="rounded-sm border border-white/12 bg-white/[0.06] px-3 py-1 font-mono text-[11px] text-white/55"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}

/**
 * Penampung tangkapan layar.
 *
 * Sengaja kosong dan berlabel, bukan gambar produk lain yang dipinjam —
 * supaya tidak ada yang mengira ini tampilan aplikasinya. Ganti dengan
 * <img src="..." /> begitu bidikan aslinya siap; tata letaknya tidak
 * perlu ikut berubah.
 */
function ShotFrame({ caption, className }: { caption: string; className?: string }) {
  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center rounded-md border-2 border-dashed border-brand-blue/25 bg-brand-blue/[0.03] p-8 text-center',
        className,
      )}
    >
      <ImageSquare size={32} weight="light" className="text-brand-blue/40" />
      <p className="mt-3 text-xs font-medium uppercase tracking-widest text-brand-blue-strong/60">
        Tangkapan layar
      </p>
      <p className="mt-1 max-w-xs text-sm text-text-muted">{caption}</p>
    </div>
  )
}

function HeroFlowSummary() {
  return (
    <aside className="relative overflow-hidden rounded-lg border border-white/15 bg-surface-dark/80 p-6 shadow-2xl backdrop-blur-sm">
      <div aria-hidden className="absolute right-0 top-0 h-1 w-28 bg-gradient-signature" />
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">
        Cara kerja singkat
      </p>
      <h2 className="mt-3 font-heading text-xl font-bold text-white">
        Data operasional masuk, sistem menjaga, laporan siap dipakai.
      </h2>
      <ol className="mt-6 space-y-0 border-l border-white/15">
        {STEPS.map((step, index) => {
          const Icon = step.icon
          return (
            <li key={step.num} className="relative pl-6 pb-6 last:pb-0">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-brand-orange ring-4 ring-surface-dark" />
              <div className="flex items-center gap-2">
                <Icon size={17} weight="bold" className="text-brand-blue-soft" />
                <span className="text-xs font-bold uppercase tracking-wider text-white/45">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </div>
              <p className="mt-1 font-body text-body-sm font-semibold text-white">{step.title}</p>
            </li>
          )
        })}
      </ol>
    </aside>
  )
}

export default function AkuntansiPDAMPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        eyebrow="D-IBS · Modul Akuntansi & Keuangan"
        title="Akuntansi PDAM yang angkanya datang sendiri"
        description="Rekening air, penerimaan kas, pengeluaran, dan pemakaian bahan kimia mengalir dari operasional menjadi jurnal — dan diperiksa lebih dulu sebelum satu baris pun masuk buku besar. Laporan SAK EP-nya keluar dari angka yang sama."
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Produk', href: '/products' },
          { label: 'Solusi PDAM', href: '/products/pdam-suite' },
          { label: 'Akuntansi & Keuangan' },
        ]}
        actions={
          <>
            <Button href="/contact">Jadwalkan Demo</Button>
            <Button href={WA_LINK} variant="whatsapp">
              <WhatsappLogo size={19} weight="fill" />
              WhatsApp Langsung
            </Button>
          </>
        }
        media={<HeroFlowSummary />}
      />

      <Section tone="dark" space="compact" pattern="grid">
        <dl className="grid grid-cols-2 gap-y-6 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="min-w-0 border-l border-white/10 pl-4 first:border-l-0 first:pl-0 sm:px-6 sm:first:px-0"
            >
              {/* flex-col-reverse: nilai tampil di atas, tetapi urutan
                  DOM tetap dt lalu dd sesuai semantik daftar deskripsi */}
              <div className="flex flex-col-reverse">
                <dt className="mt-1 font-body text-body-sm leading-relaxed text-text-inverse-muted">
                  {s.label}
                </dt>
                <dd className="tabular font-heading text-h1 font-bold text-text-inverse">
                  {s.value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </Section>

      {/* Masalah */}
      <Section tone="soft">
          <Reveal>
            <SectionHeading
              label="Masalah yang diselesaikan"
              title="Kenapa Pembukuan PDAM Sering Meleset"
              subtitle="Tiga hal yang kami temui berulang di lapangan"
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PROBLEMS.map((item, i) => (
              <Reveal key={item.num} delay={i * 0.1}>
                <div className={`${UI.card} h-full border-t-2 border-t-brand-blue`}>
                  <span className="mb-5 inline-flex h-8 min-w-8 items-center justify-center rounded-sm bg-brand-blue px-2 font-heading text-xs font-bold text-white">
                    {item.num}
                  </span>
                  <h3 className="font-heading font-bold text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
      </Section>

      {/* Alur empat langkah */}
      <Section tone="white">
          <Reveal>
            <SectionHeading
              label="Alur kerja"
              title="Dari Transaksi ke Laporan"
              subtitle="Satu alur, dengan satu gerbang pemeriksaan di tengahnya"
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <Reveal key={step.num} delay={i * 0.08}>
                  <div className={`${UI.card} relative h-full border-t-2 border-t-brand-blue`}>
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-blue-50">
                      <Icon size={24} weight="bold" className="text-brand-blue" />
                    </div>
                    <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-blue-strong">
                      Langkah {step.num}
                    </span>
                    <h3 className="mt-1 font-heading font-semibold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.2}>
            <ShotFrame
              caption="Dashboard Rekonsiliasi dengan panel Pratinjau posting terbuka — inilah gerbang di langkah 2."
              className="mt-12 min-h-[280px] md:min-h-[380px]"
            />
          </Reveal>
      </Section>

      {/* Arsitektur & alur data */}
      <Section tone="soft">
          <Reveal>
            <SectionHeading
              label="Cara data bergerak"
              title="Arsitektur & Alur Data"
              subtitle="Lihat bagaimana angka berjalan dari loket, gudang, dan billing sampai menjadi Neraca — dan bisa ditelusuri balik ke dokumen yang melahirkannya."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-hidden rounded-lg bg-surface-dark p-4 shadow-card-hover md:p-8">
              {/* Di bawah md kartunya membungkus sendiri; gulir menyamping hanya
                  dipakai dari md ke atas, saat lebar 680px memang muat. */}
              <div className="min-w-0 md:overflow-x-auto">
                <div className="md:min-w-[680px]">
                  {FLOW.map((band, i) => (
                    <div key={band.label}>
                      <FlowBand band={band} />
                      {band.after && <FlowConnector chips={band.after} />}
                      {i === FLOW.length - 1 && (
                        <div className="mt-6 flex items-center justify-center gap-3 rounded-sm border border-white/10 bg-white/[0.04] px-5 py-4 text-center">
                          <Path size={18} weight="bold" className="flex-shrink-0 text-violet-300" />
                          <p className="text-sm text-white/70">
                            <strong className="text-white/90">Penelusuran balik:</strong> klik
                            angka di laporan → Buku Besar akun itu → jurnalnya → dokumen
                            sumbernya.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-6">
                {LEGEND.map((l) => (
                  <span key={l.label} className="flex items-center gap-2 text-xs text-white/50">
                    <span className={`h-2 w-2 rounded-full ${l.tone}`} />
                    {l.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-text-secondary">
              Perhatikan lapis kuning di tengah. Itu satu-satunya jalan masuk ke buku besar —
              tidak ada jalur pintas dari dokumen langsung ke jurnal.
            </p>
          </Reveal>
      </Section>

      {/* Delapan pemeriksaan */}
      <Section tone="dark" pattern="dots">
          <Reveal>
            <div className="text-center">
              <p className={`${UI.marker} justify-center`}>
                <span className="h-1.5 w-1.5 bg-brand-orange" />
                Gerbang pemeriksaan
              </p>
              <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
                Delapan Pemeriksaan, Lima di Antaranya Menghentikan
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/70">
                Prosedur lama menulis dulu, baru ketahuan belakangan. Ini kebalikannya.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className={`${UI.cardDark} h-full border-l-2 border-l-red-400`}>
                <div className="mb-5 flex items-center gap-3">
                  <XCircle size={22} weight="fill" className="text-red-400" />
                  <h3 className="font-heading font-bold text-white">
                    Menghentikan posting
                  </h3>
                </div>
                <p className="mb-5 text-sm text-white/60">
                  Jurnalnya tidak diterbitkan sama sekali.
                </p>
                <ul className="space-y-3">
                  {BLOCKING.map((item, i) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-400/20 text-[11px] font-bold text-red-300">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-white/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className={`${UI.cardDark} h-full border-l-2 border-l-amber-300`}>
                <div className="mb-5 flex items-center gap-3">
                  <Warning size={22} weight="fill" className="text-amber-300" />
                  <h3 className="font-heading font-bold text-white">Memperingatkan</h3>
                </div>
                <p className="mb-5 text-sm text-white/60">Posting tetap boleh jalan.</p>
                <ul className="space-y-3">
                  {WARNING.map((item, i) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-300/20 text-[11px] font-bold text-amber-200">
                        {i + 6}
                      </span>
                      <span className="text-sm leading-relaxed text-white/85">{item}</span>
                    </li>
                  ))}
                </ul>
                <ShotFrame
                  caption="Panel preflight menampilkan temuan pemblokir."
                  className="mt-6 min-h-[140px] border-white/20 bg-white/[0.04] [&_p]:text-white/50"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 border-l-2 border-l-brand-orange bg-white/[0.06] p-6 md:p-8">
              <p className="text-base leading-relaxed text-white/85 md:text-lg">
                Kode akun yang tidak dikenali <strong className="text-white">menghentikan</strong>{' '}
                posting. Prosedur lama membuang barisnya diam-diam, lalu tetap menandai
                periodenya sudah diposting — angkanya hilang tanpa satu pun pesan kesalahan.
              </p>
            </div>
          </Reveal>
      </Section>

      {/* Ketertelusuran */}
      <Section tone="white">
          <Reveal>
            <SectionHeading
              label="Ketertelusuran"
              title="Setiap Angka Punya Alamat Asal"
              subtitle="Dari baris di laporan, turun sampai dokumen yang melahirkannya"
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {TRACEABILITY.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className={`${UI.card} h-full`}>
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-blue-50">
                      <Icon size={24} weight="bold" className="text-brand-blue" />
                    </div>
                    <h3 className="font-heading font-semibold text-text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
      </Section>

      {/* Laporan */}
      <Section tone="soft">
          <Reveal>
            <SectionHeading
              label="Hasil yang tersedia"
              title="Laporan yang Dipakai, Bukan Daftar Panjang"
              subtitle="Angka di layar, PDF, dan Excel berasal dari jalur hitung yang sama — bukan dihitung ulang per format."
            />
          </Reveal>

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-md border border-border bg-white shadow-card">
                <div className="flex items-center gap-3 border-b border-border bg-white px-6 py-4">
                  <Bank size={20} weight="bold" className="text-brand-blue" />
                  <h3 className="font-heading font-bold text-text-primary">
                    Laporan Keuangan SAK EP
                  </h3>
                </div>
                <ul>
                  {SAKEP_REPORTS.map((r) => (
                    <li
                      key={r.name}
                      className="flex flex-col gap-1 border-b border-border px-6 py-4 last:border-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                    >
                      <span className="flex items-start gap-3 text-sm font-medium text-text-primary">
                        <CheckCircle
                          size={18}
                          weight="bold"
                          className="mt-0.5 flex-shrink-0 text-green-500"
                        />
                        {r.name}
                      </span>
                      <span className="pl-8 text-xs text-text-muted sm:pl-0 sm:text-right">
                        {r.scope}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="bg-surface-soft px-6 py-4 text-xs text-text-secondary">
                  Ditambah <strong>Dashboard Keuangan</strong> dan{' '}
                  <strong>Periksa Konfigurasi</strong> — dua halaman pendukung, bukan laporan.
                </div>
              </div>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.1}>
                <div className={UI.card}>
                  <div className="mb-4 flex items-center gap-3">
                    <Table size={20} weight="bold" className="text-brand-blue" />
                    <h3 className="font-heading font-bold text-text-primary">
                      Laporan Manajemen — dua belas
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    Neraca Lajur, Neraca, Laba Rugi, Laba Rugi vs Anggaran, Rincian Biaya,
                    Ekuitas, dan Arus Kas — dalam cakupan bulanan maupun tahunan, dengan
                    export Excel. Untuk kebutuhan internal, di luar laporan resmi SAK EP.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="rounded-md border border-brand-blue/20 border-l-2 border-l-brand-blue bg-brand-blue/5 p-6">
                  <Badge className="mb-4">Jarang ada di tempat lain</Badge>
                  <div className="mb-3 flex items-center gap-3">
                    <MagnifyingGlass size={20} weight="bold" className="text-brand-blue" />
                    <h3 className="font-heading font-bold text-text-primary">
                      Periksa Konfigurasi
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    Susunan Arus Kas dan Perubahan Ekuitas disimpan sebagai konfigurasi per
                    buku. Kalau konfigurasi itu menunjuk akun yang tidak ada — misalnya
                    karena disalin dari PDAM lain yang bagan akunnya berbeda — laporannya{' '}
                    <strong>tidak error</strong>, ia hanya mencetak nol. Halaman ini
                    memeriksa seluruh barisnya terhadap bagan akun buku yang sedang dipakai,
                    dan menyebutkan mana yang menggantung.
                  </p>
                  <p className="mt-4 border-t border-brand-blue/15 pt-4 text-sm leading-relaxed text-text-secondary">
                    Bukan fitur teoretis: di satu pemasangan,{' '}
                    <strong className="text-text-primary">
                      27 rujukan kelompok akun dan 16 rujukan akun menggantung sekaligus
                    </strong>{' '}
                    — tanpa satu pun pesan kesalahan sebelumnya.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <ShotFrame
                  caption="Neraca dengan grid ala Excel — header dan baris Total beku saat digulir."
                  className="min-h-[200px]"
                />
              </Reveal>
            </div>
          </div>
      </Section>

      {/* Dua edisi */}
      <Section tone="white" width="narrow">
          <Reveal>
            <SectionHeading
              label="Pilihan implementasi"
              title="Dua Cara Memakainya"
              subtitle="Laporan SAK EP-nya sama. Yang berbeda adalah dari mana angkanya datang."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-x-auto rounded-md border border-border shadow-card">
              <table className="w-full min-w-[640px] border-collapse bg-white text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-soft">
                    <th className="px-6 py-4 text-left font-heading font-semibold text-text-primary">
                      Kemampuan
                    </th>
                    <th className="px-6 py-4 text-center font-heading font-semibold text-text-primary">
                      Edisi Mandiri
                      <span className="mt-1 block text-xs font-normal text-text-muted">
                        akuntansi berdiri sendiri
                      </span>
                    </th>
                    <th className="px-6 py-4 text-center font-heading font-semibold text-brand-blue-strong">
                      Edisi Terintegrasi
                      <span className="mt-1 block text-xs font-normal text-text-muted">
                        menyatu dengan D-IBS
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {EDITIONS.map((row) => (
                    <tr key={row.label} className="border-b border-border last:border-0">
                      <td className="px-6 py-3.5 text-text-secondary">{row.label}</td>
                      <td className="px-6 py-3.5 text-center">
                        <EditionCell value={row.mandiri} />
                      </td>
                      <td className="bg-brand-blue/[0.03] px-6 py-3.5 text-center">
                        <EditionCell value={row.terintegrasi} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 border-l-2 border-brand-orange bg-surface-soft py-4 pl-5 pr-4 text-base leading-relaxed text-text-secondary">
              Edisi Mandiri memberi Anda laporan keuangan SAK EP yang utuh hari ini. Edisi
              Terintegrasi memberi laporan yang sama — tetapi angkanya datang sendiri dari
              transaksi, dan diperiksa sebelum masuk buku besar.
            </p>
          </Reveal>
      </Section>

      {/* Panduan in-app */}
      <Section tone="soft">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <p className={UI.marker}>
                <span className="h-1.5 w-1.5 bg-brand-orange" />
                Panduan di dalam aplikasi
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary">
                Petugas Baru Tidak Perlu Menunggu Pelatihan
              </h2>
              <p className="mt-4 leading-relaxed text-text-secondary">
                Panduan langkah demi langkah tersedia di dalam layarnya sendiri, bukan
                sebagai dokumen terpisah yang harus dicari. Tersedia untuk modul transaksi
                yang paling sering dipakai:
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {PANDUAN_MODULES.map((m) => (
                  <span
                    key={m}
                    className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-white px-3 py-1.5 text-sm text-text-secondary"
                  >
                    <CheckCircle size={14} weight="bold" className="text-green-500" />
                    {m}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <ShotFrame
                caption="Drawer panduan terbuka di atas layar modul."
                className="min-h-[300px] bg-white"
              />
            </Reveal>
          </div>
      </Section>

      {/* Untuk tim TI */}
      <Section tone="white" width="narrow">
          <Reveal>
            <details className="group rounded-md border border-border bg-white shadow-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-blue-50">
                    <Gear size={24} weight="bold" className="text-brand-blue" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-text-primary md:text-2xl">
                      Untuk Tim TI Anda
                    </h2>
                    <p className="mt-1 text-sm text-text-muted">
                      Arsitektur, penjaga data, dan yang dikunci oleh test
                    </p>
                  </div>
                </div>
                <CaretDown
                  size={20}
                  weight="bold"
                  className="flex-shrink-0 text-text-muted transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="grid gap-6 border-t border-border p-6 md:grid-cols-2 md:p-8">
                {IT_NOTES.map((note) => {
                  const Icon = note.icon
                  return (
                    <div key={note.title} className="flex gap-4">
                      <Icon
                        size={20}
                        weight="bold"
                        className="mt-0.5 flex-shrink-0 text-brand-blue"
                      />
                      <div>
                        <h3 className="font-heading text-sm font-semibold text-text-primary">
                          {note.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                          {note.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </details>
          </Reveal>
      </Section>

      {/* CTA */}
      <CTASection />
    </main>
  )
}

function EditionCell({ value }: { value: string }) {
  if (value === 'ya') {
    return (
      <CheckCircle
        size={20}
        weight="fill"
        className="mx-auto text-green-500"
        aria-label="tersedia"
      />
    )
  }
  if (value === 'tidak') {
    return <span className="text-text-muted">—</span>
  }
  if (value === 'belum') {
    return <span className="text-xs font-medium text-text-muted">belum</span>
  }
  return <span className="text-xs font-semibold text-brand-blue-strong">{value}</span>
}
