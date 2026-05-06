'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Users, Briefcase } from 'lucide-react'
import Button from '@/components/ui/Button'

const HERO_STATS = [
  { icon: Briefcase, value: '12+', label: 'Tahun Pengalaman' },
  { icon: Users, value: '50+', label: 'Klien Terpercaya' },
  { icon: Shield, value: '100+', label: 'Proyek Selesai' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[72px] bg-gradient-to-br from-surface-blue via-brand-blue to-surface-blue-light">
      {/* Background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative elements */}
      <div aria-hidden className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
      <div aria-hidden className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-brand-blue-dark/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-white/15 text-white border border-white/20 backdrop-blur-sm">
                Devetek — Berdiri sejak 2012
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.1] mb-6 text-white"
            >
              Solusi Teknologi
              <br />
              End-to-End untuk
              <br />
              <span className="text-white/90">PDAM & Enterprise</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-base md:text-lg text-white/75 max-w-lg mb-8 leading-relaxed"
            >
              Dari sistem billing, IoT monitoring, hingga ERP — kami membangun 
              dan mengintegrasikan teknologi yang benar-benar bekerja untuk 
              sektor publik dan swasta di Indonesia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-3 mb-12"
            >
              <Button href="/contact" size="large" className="bg-white text-brand-blue hover:bg-white/90 shadow-lg">
                Hubungi Kami
              </Button>
              <Button href="/products" variant="secondary" size="large" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                Lihat Produk
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* Inline stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-6 md:gap-10"
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-xl text-white">{stat.value}</div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual / Trust indicators */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
                <div className="text-sm font-medium text-white/60 uppercase tracking-wider mb-6">Ekosistem Devetek</div>
                
                <div className="space-y-4">
                  {[
                    { name: 'D-IBS', desc: 'Billing & Manajemen PDAM', color: 'bg-white/20' },
                    { name: 'D-ASSET', desc: 'WebGIS Pengelolaan Aset', color: 'bg-white/15' },
                    { name: 'HELIOS', desc: 'IoT Sensor & Monitoring', color: 'bg-white/15' },
                    { name: 'ERP', desc: 'Enterprise Resource Planning', color: 'bg-white/10' },
                  ].map((item) => (
                    <div key={item.name} className={`${item.color} rounded-xl px-5 py-4 flex items-center justify-between`}>
                      <div>
                        <div className="font-heading font-bold text-white text-sm">{item.name}</div>
                        <div className="text-xs text-white/60">{item.desc}</div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-white/50">Semua sistem terintegrasi</div>
                  <div className="flex -space-x-1">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-white/20 border-2 border-brand-blue flex items-center justify-center text-[8px] text-white font-bold">
                        {i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-brand-dark">Terpercaya</div>
                  <div className="text-[10px] text-text-muted">Sejak 2012</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
