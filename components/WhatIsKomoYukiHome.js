import ScrollAnimation from '@/components/ScrollAnimation'
import { Eye, RefreshCw, Layers } from 'lucide-react'

export default function WhatIsKomoYukiHome() {
  return (
    <section className="py-20 bg-cream">
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
          <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto">
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
      </div>
    </section>
  )
}
