import HeroSection from '@/components/sections/HeroSection'
import TrustBarSection from '@/components/sections/TrustBarSection'
import ProblemSection from '@/components/sections/ProblemSection'
import EngagementSection from '@/components/sections/EngagementSection'
import ProductsSection from '@/components/sections/ProductsSection'
import EcosystemSection from '@/components/sections/EcosystemSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ClientsSection from '@/components/sections/ClientsSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import CTASection from '@/components/sections/CTASection'

/**
 * Beranda — urutan mengikuti blueprint §17.
 *
 * Ritme background sengaja berselang (§5.4) agar halaman punya irama
 * tanpa membuat tiap section terasa seperti halaman terpisah:
 * dark → white → soft → white → soft → dark → white → soft → white → soft → dark.
 *
 * Section lokasi kantor sengaja TIDAK ada di sini. Sesuai §17, informasi
 * itu cukup diringkas di footer dan ditampilkan lengkap di halaman Contact.
 */
export default function Home() {
  return (
    <>
      {/* 1. Positioning Devetek */}
      <HeroSection />
      {/* 2. Trust bar — pengalaman, klien, proyek */}
      <TrustBarSection />
      {/* 3. Masalah bisnis yang diselesaikan + cara Devetek menjawabnya */}
      <ProblemSection />
      {/* 4. Tiga cara masuk kerja sama: produk, dibangunkan, diadakan & dirawat */}
      <EngagementSection />
      {/* 5. Produk unggulan PDAM Suite dan produk lain */}
      <ProductsSection />
      {/* 6. Diagram ekosistem terintegrasi */}
      <EcosystemSection />
      {/* 7. Bukti implementasi nyata */}
      <ProjectsSection />
      {/* 8. Proses kerja Devetek */}
      <ProcessSection />
      {/* 9. Klien dan mitra */}
      <ClientsSection />
      {/* 10. Testimoni */}
      <TestimonialSection />
      {/* 11. CTA konsultasi */}
      <CTASection />
    </>
  )
}
