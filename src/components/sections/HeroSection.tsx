'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { BrowserFrame, Button, Container, ForwardLayers } from '@/components/ui'
import { COMPANY } from '@/lib/constants'
import { slotImage } from '@/lib/images'

/**
 * Hero beranda — blueprint §11.1.
 *
 * Dua kolom: kiri berisi label, headline, deskripsi, dan CTA; kanan berisi
 * visual implementasi nyata (screenshot dashboard D-IBS), bukan ilustrasi
 * generik (§14).
 *
 * Angka pencapaian sengaja TIDAK ada di sini. Sebelumnya hero memuat
 * 12+/50+/100+ yang persis diulang oleh TrustBarSection satu section
 * di bawahnya.
 */
export default function HeroSection() {
  const reduce = useReducedMotion()

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
        }

  return (
    <section className="on-dark relative overflow-hidden bg-gradient-hero pt-[var(--header-h)] text-text-inverse-muted">
      <div aria-hidden className="pattern-grid absolute inset-0" />

      {/* Satu elemen Forward Layers dominan per viewport — blueprint §2.3 */}
      <ForwardLayers
        tone="mono"
        opacity={0.08}
        className="absolute -left-24 top-1/3 h-[460px] w-[460px] text-white"
      />

      <Container className="relative py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* ── Kolom kiri: pesan utama ── */}
          <div>
            <motion.p {...rise(0)} className="label-section flex items-center gap-2.5 text-brand-orange">
              <span aria-hidden className="h-2 w-2 rotate-45 bg-brand-orange" />
              {COMPANY.tagline}
            </motion.p>

            <motion.h1
              {...rise(0.08)}
              className="mt-5 font-heading text-display font-bold text-text-inverse"
            >
              Teknologi yang Membuat{' '}
              <span className="text-brand-blue-soft">Operasional Bergerak</span> Lebih Baik
            </motion.h1>

            <motion.p
              {...rise(0.16)}
              className="measure mt-6 font-body text-body-lg text-text-inverse-muted"
            >
              Devetek membuat produknya sendiri, membangun sistem yang belum ada, lalu
              mengadakan dan merawat perangkat pendukungnya — untuk PDAM, pemerintahan, dan
              perusahaan swasta di Indonesia.
            </motion.p>

            <motion.div {...rise(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" size="lg">
                Mulai Diskusi
              </Button>
              <Button href="/products" variant="secondary" size="lg">
                Lihat Produk
                <ArrowRight size={17} weight="bold" />
              </Button>
            </motion.div>
          </div>

          {/* ── Kolom kanan: bukti implementasi ── */}
          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 28 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 },
                })}
            className="relative"
          >
            <BrowserFrame
              src={slotImage('home_hero_dashboard')}
              alt="Dashboard D-IBS menampilkan ringkasan billing dan pelanggan PDAM"
              label="d-ibs.devetek.com"
              priority
            />

            {/* Kartu penanda status — menyampaikan data, bukan ornamen */}
            <div className="mt-4 rounded-lg border border-white/12 bg-surface-dark-soft p-4 shadow-dropdown lg:absolute lg:-bottom-7 lg:-left-7 lg:mt-0 lg:w-60">
              <div className="flex items-center gap-2">
                <span aria-hidden className="h-2 w-2 rounded-full bg-state-success" />
                <span className="font-body text-body-sm font-semibold text-white">
                  Terpasang &amp; berjalan
                </span>
              </div>
              <p className="mt-1.5 font-body text-body-sm text-text-inverse-muted">
                Sistem billing dan monitoring aktif di puluhan PDAM.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
