'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px] bg-gradient-to-br from-surface-blue via-brand-blue to-surface-blue-light">
      {/* Subtle background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative blobs */}
      <div aria-hidden className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      <div aria-hidden className="absolute bottom-0 -left-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-white/15 text-white border border-white/20 backdrop-blur-sm">
            PT Comon Cipta Inovasi
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-white"
        >
          Digitalisasi Tanpa Batas
          <br />
          <span className="text-white/80">— Dari Sensor Hingga Sistem</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Solusi teknologi end-to-end untuk PDAM, Pemerintahan, BUMN & Swasta.
          Berpengalaman lebih dari satu dekade membangun sistem yang benar-benar bekerja.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/contact" size="large" className="bg-white text-brand-blue hover:bg-white/90 shadow-lg">
            Hubungi Kami
          </Button>
          <Button href="/products" variant="secondary" size="large" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
            Lihat Produk
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
