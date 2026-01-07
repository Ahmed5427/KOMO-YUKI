import Header from '@/components/Header'
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
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <div id="about">
          <WhatIsKomoYuki />
        </div>
        <div id="format">
          <StoreFormat />
        </div>
        <div id="benefits">
          <WhyWorks />
        </div>
        <div id="locations">
          <TargetLocations />
        </div>
        <SupplierSection />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
