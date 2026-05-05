'use client'

import { motion } from 'framer-motion'

export default function PageHero() {
  return (
    <section className="pt-[72px] bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-accent-light text-brand-blue border border-brand-blue/20 mb-6">
            TENTANG KAMI
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.1] text-brand-dark">
            Lebih dari Satu Dekade
            <br />
            <span className="gradient-text">Membangun Solusi Digital</span>
          </h1>
        </motion.div>
      </div>
    </section>
  )
}
