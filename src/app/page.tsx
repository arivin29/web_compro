import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import ProductsSection from '@/components/sections/ProductsSection'
import EcosystemSection from '@/components/sections/EcosystemSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ClientsSection from '@/components/sections/ClientsSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import LocationSection from '@/components/sections/LocationSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      {/* 1. Siapa kita + apa yang kita lakukan */}
      <HeroSection />
      {/* 2. Bukti kredibilitas + kenapa pilih kami */}
      <StatsSection />
      {/* 3. Produk & layanan — apa yang kita tawarkan */}
      <ProductsSection />
      {/* 4. Cara kerja ekosistem — bagaimana semua terhubung */}
      <EcosystemSection />
      {/* 5. Proses kerja — bagaimana kami deliver */}
      <ProcessSection />
      {/* 6. Siapa yang sudah percaya */}
      <ClientsSection />
      {/* 7. Bukti nyata — testimoni */}
      <TestimonialSection />
      {/* 8. Di mana menemukan kami */}
      <LocationSection />
      {/* 9. Ajak action */}
      <CTASection />
    </>
  )
}
