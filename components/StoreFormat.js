import ScrollAnimation from './ScrollAnimation'
import { Ruler, Layers, Sparkles, RefreshCw, Zap, Plug } from 'lucide-react'

const formatFeatures = [
  {
    icon: Ruler,
    title: 'Compact to Mid-size Units',
    description: '700 – 1,500 sq ft retail space',
  },
  {
    icon: Layers,
    title: 'Flexible Floorplan',
    description: 'Modular shelving & merchandising system',
  },
  {
    icon: Sparkles,
    title: 'Bright, Open Interior',
    description: 'Strong sightlines and visual appeal',
  },
  {
    icon: RefreshCw,
    title: 'Fast Product Rotation',
    description: 'Frequent refreshes to drive repeat visits',
  },
  {
    icon: Zap,
    title: 'Rapid Rollout',
    description: 'Efficient fit-out process',
  },
  {
    icon: Plug,
    title: 'Standard Utilities',
    description: 'No specialist infrastructure required',
  },
]

export default function StoreFormat() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollAnimation>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal text-center mb-12">
            Store Format
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {formatFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-blush-pink" />
                  <h3 className="font-outfit text-lg font-semibold text-charcoal mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    </section>
  )
}
