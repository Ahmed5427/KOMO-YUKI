import ScrollAnimation from './ScrollAnimation'
import { Eye, RefreshCw, Layers } from 'lucide-react'

export default function WhatIsKomoYuki() {
  return (
    <section id="about" className="pt-36 pb-20 bg-cream">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Section */}
        <ScrollAnimation>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal mb-4">
            What is KOMO-YUKI
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            A new retail concept built for discovery and repeat visits.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <div className="max-w-4xl mx-auto space-y-4 mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              KOMO-YUKI is a new retail and experience concept inspired by modern Japanese culture and contemporary Asian design.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The brand is built around discovery, frequent product rotation, and visually engaging environments that encourage repeat visits.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              KOMO-YUKI is designed to adapt by location while maintaining a consistent, recognisable identity.
            </p>
          </div>
        </ScrollAnimation>

        {/* Three Key Features */}
        <ScrollAnimation delay={200}>
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Eye className="w-10 h-10 text-blush-pink mb-4" />
              <h3 className="font-outfit text-xl font-semibold text-charcoal mb-3">
                Discovery-led retail
              </h3>
              <p className="text-gray-700">
                Products curated for browsing, impulse discovery, and visual impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <RefreshCw className="w-10 h-10 text-blush-pink mb-4" />
              <h3 className="font-outfit text-xl font-semibold text-charcoal mb-3">
                Frequent rotation
              </h3>
              <p className="text-gray-700">
                Regular product refreshes are designed to encourage repeat visits and ongoing relevance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Layers className="w-10 h-10 text-blush-pink mb-4" />
              <h3 className="font-outfit text-xl font-semibold text-charcoal mb-3">
                Consistent identity
              </h3>
              <p className="text-gray-700">
                Adaptable by location while remaining instantly recognisable as KOMO-YUKI.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* About KOMO-YUKI */}
        <ScrollAnimation delay={300}>
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="font-outfit text-3xl font-bold text-charcoal mb-6">
              About KOMO-YUKI
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              KOMO-YUKI is a new retail and experience concept inspired by modern Japanese culture and contemporary Asian design.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Built around discovery, frequent product rotation, and visually engaging environments, KOMO-YUKI is designed to encourage repeat visits and perform in high-footfall retail locations. The brand adapts by location while maintaining a consistent, recognisable identity across all stores.
            </p>

            <h4 className="font-outfit text-2xl font-semibold text-charcoal mb-4 mt-8">
              What defines KOMO-YUKI
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-charcoal mb-2">Discovery-led retail</h5>
                <p className="text-gray-700">Products curated for browsing, impulse discovery, and visual impact.</p>
              </div>
              <div>
                <h5 className="font-semibold text-charcoal mb-2">Frequent rotation</h5>
                <p className="text-gray-700">Regular product refreshes designed to keep the offer feeling new and relevant.</p>
              </div>
              <div>
                <h5 className="font-semibold text-charcoal mb-2">Consistent identity</h5>
                <p className="text-gray-700">Adaptable by location while remaining instantly recognisable as KOMO-YUKI.</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Platform for Asian Indie Brands */}
        <ScrollAnimation delay={400}>
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="font-outfit text-3xl font-bold text-charcoal mb-6">
              A platform for Asian indie brands
            </h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                KOMO-YUKI is being built as a destination for independent, design-led brands from Asia, with a particular focus on Japan and Korea.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The aim is to surface emerging brands that are not yet widely available in the UK and present them in a highly curated retail environment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Long-term, KOMO-YUKI is intended to become a recognised platform where appearing in-store signals relevance, momentum, and cultural alignment for an indie brand.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* One Brand. Multiple Experiences */}
        <ScrollAnimation delay={500}>
          <div className="max-w-3xl mx-auto">
            <h3 className="font-outfit text-3xl font-bold text-charcoal mb-4">
              One brand. Multiple experiences.
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              KOMO-YUKI operates as a flexible brand concept designed to support multiple retail formats.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Whether experienced as a retail store or, in select locations, as an extended café-led concept, each format reinforces the same core principles.
            </p>
            <p className="text-xl font-semibold text-charcoal mt-6">
              Discovery. Design. Modern Asian culture. Experience.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
