import ScrollAnimation from './ScrollAnimation'
import { CheckCircle } from 'lucide-react'

const priorities = [
  'Clear pricing and MOQs',
  'Reliable supply and production capability',
  'Thoughtful brand presentation',
  'Long-term collaboration over one-off placements',
]

export default function SupplierSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <ScrollAnimation>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal text-center mb-6">
            Interested in Partnering?
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-700 mb-4">
              KOMO-YUKI is building long-term relationships with independent and established suppliers across collectibles, toys, lifestyle, and design-led products.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We are particularly interested in working with emerging Asian brands from Japan, Korea, and across the region that align with our focus on design, quality, and cultural relevance.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div className="bg-white p-8 rounded-lg shadow-md mb-8 max-w-3xl mx-auto">
            <h3 className="font-outfit text-xl font-semibold text-charcoal mb-6 text-center">
              Our approach prioritises:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {priorities.map((priority, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blush-pink flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{priority}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={300}>
          <div className="text-center">
            <a
              href="#contact"
              className="inline-block px-12 py-4 bg-blush-pink text-charcoal font-semibold rounded-lg hover:bg-pink-400 transition-colors duration-300 text-lg"
            >
              Supplier Contact →
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
