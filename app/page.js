import Hero from '@/components/Hero'
import WhatIsKomoYuki from '@/components/WhatIsKomoYuki'
import StoreFormat from '@/components/StoreFormat'
import WhyWorks from '@/components/WhyWorks'
import TargetLocations from '@/components/TargetLocations'
import SupplierSection from '@/components/SupplierSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatIsKomoYuki />
      <StoreFormat />
      <WhyWorks />
      <TargetLocations />
      <SupplierSection />
      <Contact />
      <Footer />
    </main>
  )
}
