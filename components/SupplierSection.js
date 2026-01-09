import ScrollAnimation from './ScrollAnimation'
import { CheckCircle, Eye, Package, Users, TrendingUp } from 'lucide-react'

const qualities = [
  {
    icon: Eye,
    title: 'Design-led products',
    description: 'Clear brand identity, strong visual appeal, and thoughtful design.',
  },
  {
    icon: Package,
    title: 'Retail-ready ranges',
    description: 'Products suited to physical retail, gifting, and discovery-led environments.',
  },
  {
    icon: Users,
    title: 'Reliable supply',
    description: 'Consistent availability, transparent MOQs, and dependable lead times.',
  },
  {
    icon: TrendingUp,
    title: 'Long-term alignment',
    description: 'Brands interested in growing visibility and presence through an ongoing retail partnership.',
  },
]

const benefits = [
  'Curated environment: Products are presented within a carefully designed retail setting that elevates brand perception.',
  'Physical discovery: Access to customers who value browsing, gifting, and discovering new brands in-store.',
  'Selective positioning: Appearing in KOMO-YUKI signals relevance, momentum, and cultural alignment.',
  'Growth-focused platform: Built to scale across locations while maintaining curation and quality.',
]

export default function SupplierSection() {
  return (
    <section id="brands" className="pt-36 pb-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollAnimation>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal mb-6 text-center">
            For Brands & Suppliers
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 mb-4">
              KOMO-YUKI is being built as a curated physical retail platform for independent, design-led brands from Asia, with a focus on Japan, Korea, and contemporary Asian culture.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              The platform is designed to support discovery-led retail, allowing customers to encounter new brands organically through browsing, visual merchandising, and impulse-driven exploration.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              KOMO-YUKI prioritises long-term partnerships with brands that align with our aesthetic, quality standards, and retail model.
            </p>
          </div>
        </ScrollAnimation>

        {/* What we look for */}
        <ScrollAnimation delay={200}>
          <h3 className="font-outfit text-3xl font-bold text-charcoal mb-8 mt-12">
            What KOMO-YUKI looks for in brand partners
          </h3>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {qualities.map((quality, index) => {
            const Icon = quality.icon
            return (
              <ScrollAnimation key={index} delay={index * 100 + 300} className="h-full">
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <Icon className="w-10 h-10 text-blush-pink mb-4" />
                  <h4 className="font-outfit text-xl font-semibold text-charcoal mb-3">
                    {quality.title}
                  </h4>
                  <p className="text-gray-700">
                    {quality.description}
                  </p>
                </div>
              </ScrollAnimation>
            )
          })}
        </div>

        {/* Why partner with KOMO-YUKI */}
        <ScrollAnimation delay={600}>
          <div className="bg-white p-8 rounded-lg shadow-md mb-12 max-w-4xl mx-auto">
            <h3 className="font-outfit text-2xl font-bold text-charcoal mb-6">
              Why partner with KOMO-YUKI
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blush-pink flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={700}>
          <div className="text-center">
            <a
              href="#contact"
              className="inline-block px-12 py-4 bg-blush-pink text-charcoal font-semibold rounded-lg hover:bg-pink-400 transition-colors duration-300 text-lg"
            >
              Get in Touch →
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
