'use client'

import {
  Airplane,
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  DeviceMobile,
  GitBranch,
  Globe,
  GraduationCap,
  House,
  MapTrifold,
  MegaphoneSimple,
  PaintBrush,
  PuzzlePiece,
  Rocket,
  Stack,
  Tree,
} from '@phosphor-icons/react'
import {
  Badge,
  Button,
  Card,
  FeatureCard,
  PageHero,
  ProcessCard,
  Reveal,
  Section,
  SectionHeading,
} from '@/components/ui'
import CTASection from '@/components/sections/CTASection'

const CAPABILITIES = [
  {
    icon: Globe,
    title: 'Web Application',
    desc: 'Dashboard, admin panel, portal, dan e-commerce — dibangun dengan framework yang paling sesuai kebutuhan.',
    tags: ['Next.js', 'React', 'Angular', 'Laravel'],
  },
  {
    icon: DeviceMobile,
    title: 'Mobile App',
    desc: 'Aplikasi Android dan iOS dari satu basis kode, atau native bila butuh akses penuh ke perangkat.',
    tags: ['Flutter', 'React Native', 'Android Native'],
  },
  {
    icon: MapTrifold,
    title: 'WebGIS & Spasial',
    desc: 'Aplikasi pemetaan, basis data spasial, analisis foto udara, dan visualisasi data geografis.',
    tags: ['OpenLayers', 'PostGIS', 'GeoJSON', 'SHP'],
  },
  {
    icon: Database,
    title: 'Sistem & Integrasi',
    desc: 'Integrasi API, microservice, alur data, dan sinkronisasi antar sistem yang sudah berjalan.',
    tags: ['REST API', 'PostgreSQL', 'Docker', 'Go / Node.js'],
  },
  {
    icon: PaintBrush,
    title: 'UI/UX & Kreatif',
    desc: 'Desain antarmuka, logo, branding, motion graphic, dan video animasi untuk kebutuhan digital.',
    tags: ['Figma', 'UI/UX', 'Branding', 'Motion'],
  },
  {
    icon: MegaphoneSimple,
    title: 'Digital Marketing',
    desc: 'SEO, iklan berbayar, pengelolaan media sosial, dan produksi konten digital.',
    tags: ['SEO', 'Meta Ads', 'Google Ads', 'Social Media'],
  },
]

/** Produk vertikal yang sudah dibangun dan dipakai — bukti, bukan portofolio konsep. */
const VERTICALS = [
  {
    icon: Airplane,
    title: 'AMIMS',
    subtitle: 'Aircraft Maintenance & Inventory',
    desc: 'Manajemen part, jadwal perawatan, dan inventori untuk helikopter dan pesawat.',
  },
  {
    icon: GraduationCap,
    title: 'EDUTECH',
    subtitle: 'Sistem Akademik Sekolah',
    desc: 'Manajemen siswa, kurikulum, absensi, nilai, dan komunikasi guru–orang tua.',
  },
  {
    icon: House,
    title: 'HOMPES',
    subtitle: 'Platform Pesantren Digital',
    desc: 'Administrasi santri, keuangan, kehadiran, dan komunikasi internal pesantren.',
  },
  {
    icon: Tree,
    title: 'Sistem Perkebunan',
    subtitle: 'Manajemen Kebun',
    desc: 'Pemantauan lahan, jadwal tanam, produksi panen, dan pelaporan untuk perkebunan.',
  },
]

const TECH_STACK = [
  { cat: 'Frontend', items: ['React', 'Next.js', 'Angular', 'Flutter', 'Tailwind CSS'] },
  { cat: 'Backend', items: ['Go', 'Node.js', 'Laravel', 'FastAPI', 'PostgreSQL'] },
  { cat: 'Infra & DevOps', items: ['Docker', 'Kubernetes', 'Firebase', 'VPS / Cloud', 'CI/CD'] },
  { cat: 'GIS & Mapping', items: ['OpenLayers', 'PostGIS', 'GeoServer', 'QGIS', 'Mapbox'] },
]

const DIFFERENTIATORS = [
  {
    icon: PuzzlePiece,
    title: 'Tim tetap, bukan lepasan',
    desc: 'Dikerjakan tim in-house penuh waktu dengan proses yang terstruktur, bukan sambil lalu.',
  },
  {
    icon: GitBranch,
    title: 'Satu tim dari awal sampai akhir',
    desc: 'Analis, desainer, developer, dan QA bekerja bersama — tidak ada serah terima antar vendor yang membuat konteks hilang.',
  },
  {
    icon: Stack,
    title: 'Produk sendiri sebagai bukti',
    desc: 'AMIMS, EDUTECH, HOMPES, ERP, dan HELIOS memakai teknologi yang sama dengan yang kami tawarkan.',
  },
  {
    icon: Rocket,
    title: 'Dukungan setelah rilis',
    desc: 'Kami tidak menghilang setelah deployment: maintenance, penambahan fitur, dan eskalasi teknis tetap berjalan.',
  },
]

const PROCESS = [
  { num: '01', title: 'Discovery', desc: 'Wawancara kebutuhan, definisi lingkup, penentuan teknologi, dan estimasi biaya.', icon: PuzzlePiece },
  { num: '02', title: 'Design', desc: 'Wireframe, mockup antarmuka, dan purwarupa interaktif sebelum kode ditulis.', icon: PaintBrush },
  { num: '03', title: 'Develop', desc: 'Sprint iteratif dengan demo berkala, sehingga progres bisa dilihat langsung.', icon: Code },
  { num: '04', title: 'Deploy & dukungan', desc: 'Penyiapan server, rilis, pelatihan pengguna, dan perbaikan bug pasca go-live.', icon: Rocket },
]

const COMMITMENTS = [
  'Estimasi biaya transparan sebelum proyek dimulai',
  'Akses ke progres pengerjaan secara berkala',
  'Source code sepenuhnya menjadi milik Anda',
  'Dokumentasi teknis dan panduan pengguna disertakan',
  'Perbaikan bug gratis selama 30 hari pasca go-live',
  'Tanpa biaya tersembunyi atau lisensi bulanan',
]

/** Software house — blueprint §18. */
export default function SoftwareHousePage() {
  return (
    <>
      <PageHero
        eyebrow="Custom Software"
        title="Software house yang juga punya produk sendiri"
        description="Kami tidak hanya mengerjakan proyek klien. Produk vertikal kami sendiri dibangun dengan teknologi dan tim yang sama."
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Produk', href: '/products' },
          { label: 'Custom Software' },
        ]}
        actions={
          <>
            <Button href="/contact">
              Diskusikan Proyek
              <ArrowRight size={16} weight="bold" />
            </Button>
            <Button href="/clients" variant="secondary">
              Lihat Portofolio
            </Button>
          </>
        }
        media={
          <ul className="flex flex-wrap gap-2">
            {['Web App', 'Mobile App', 'WebGIS', 'Integrasi Sistem', 'UI/UX'].map((b) => (
              <li key={b}>
                <Badge variant="inverse">{b}</Badge>
              </li>
            ))}
          </ul>
        }
      />

      <Section tone="white">
        <Reveal>
          <SectionHeading
            label="Kenapa Devetek"
            title="Yang membedakan cara kami bekerja"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIATORS.map((d, i) => {
            const DiffIcon = d.icon
            return (
              <Reveal key={d.title} delay={i * 0.08}>
                <FeatureCard
                  icon={<DiffIcon size={21} />}
                  title={d.title}
                  description={d.desc}
                  className="h-full"
                />
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section tone="soft">
        <Reveal>
          <SectionHeading
            label="Kapabilitas"
            title="Apa yang bisa kami bangun"
            subtitle="Tim full-stack kami menangani seluruh spektrum kebutuhan digital, dari antarmuka sampai infrastruktur."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => {
            const CapIcon = c.icon
            return (
              <Reveal key={c.title} delay={i * 0.07}>
                <FeatureCard
                  icon={<CapIcon size={21} />}
                  title={c.title}
                  description={c.desc}
                  className="h-full"
                >
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <li key={t}>
                        <Badge variant="neutral">{t}</Badge>
                      </li>
                    ))}
                  </ul>
                </FeatureCard>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section tone="dark" pattern="grid">
        <Reveal>
          <SectionHeading
            label="Produk Vertikal"
            title="Solusi industri yang sudah dipakai"
            subtitle="Bukan purwarupa — keempatnya berjalan dan dipelihara sampai sekarang."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {VERTICALS.map((v, i) => {
            const VertIcon = v.icon
            return (
              <Reveal key={v.title} delay={i * 0.08}>
                <Card tone="dark-soft" padding="lg" interactive={false} className="h-full">
                  <span
                    aria-hidden
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-brand-blue-soft"
                  >
                    <VertIcon size={22} />
                  </span>
                  <h3 className="font-heading text-h3 font-bold text-text-inverse">{v.title}</h3>
                  <p className="mt-1 font-mono text-body-sm text-brand-blue-soft">{v.subtitle}</p>
                  <p className="mt-3 font-body text-body-sm leading-relaxed text-text-inverse-muted">
                    {v.desc}
                  </p>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            label="Teknologi"
            title="Perkakas yang kami pakai sehari-hari"
            subtitle="Pilihan teknologi menyesuaikan kebutuhan proyek, bukan sebaliknya."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {TECH_STACK.map((g, i) => (
            <Reveal key={g.cat} delay={i * 0.07}>
              <Card padding="lg" accent="blue" interactive={false} className="h-full">
                <h3 className="font-heading text-h4 font-semibold text-text-primary">{g.cat}</h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle size={15} weight="fill" aria-hidden className="shrink-0 text-brand-blue" />
                      <span className="font-mono text-body-sm text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <Reveal>
          <SectionHeading
            label="Proses"
            title="Terbuka di setiap tahap"
            subtitle="Anda tahu apa yang sedang dikerjakan, kapan selesai, dan ke mana anggaran mengalir."
          />
        </Reveal>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {PROCESS.map((s, i) => {
            const StepIcon = s.icon
            return (
              <li key={s.num}>
                <Reveal delay={i * 0.07}>
                  <ProcessCard
                    step={s.num}
                    title={s.title}
                    description={s.desc}
                    icon={<StepIcon size={24} />}
                    last={i === PROCESS.length - 1}
                  />
                </Reveal>
              </li>
            )
          })}
        </ol>

        <Reveal>
          <div className="mt-16">
            <SectionHeading label="Komitmen Kami" title="Yang Anda dapatkan" as="h3" />
          </div>
        </Reveal>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {COMMITMENTS.map((c) => (
            <li
              key={c}
              className="flex items-start gap-2.5 rounded-md border border-border bg-surface-white px-4 py-3.5"
            >
              <CheckCircle size={17} weight="fill" aria-hidden className="mt-0.5 shrink-0 text-brand-blue" />
              <span className="font-body text-body-sm text-text-secondary">{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      <CTASection />
    </>
  )
}
