'use client'

import { motion } from 'framer-motion'

export default function PageHero() {
  return (
    <section className="relative pt-[72px] bg-gradient-to-br from-brand-blue-dark to-brand-blue overflow-hidden">
      {/* Background pattern */}
      <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20 mb-6">
            TENTANG KAMI
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.1] text-white">
            Lebih dari Satu Dekade
            <br />
            <span className="text-white/80">Membangun Solusi Digital</span>
          </h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Perusahaan teknologi Indonesia yang berfokus pada digitalisasi PDAM, IoT, dan enterprise solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
