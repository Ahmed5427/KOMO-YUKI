import ScrollAnimation from './ScrollAnimation'
import { Eye, Users, Clock, Calendar, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Eye,
    title: 'Strong Visual Frontage',
    description: 'Distinctive storefront design intended to enhance street presence and attract attention from passing footfall.',
  },
  {
    icon: Users,
    title: 'Broad Demographic Appeal',
    description: 'Designed to appeal across age groups, including children, teens, families, and tourists, supporting consistent daily traffic.',
  },
  {
    icon: Clock,
    title: 'High Dwell Time',
    description: 'A discovery-led retail environment, with select locations incorporating café elements, designed to encourage longer visits and repeat footfall.',
  },
  {
    icon: Calendar,
    title: 'Year-Round Performance',
    description: 'Product mix and experience are planned to support reliable, all-season trading rather than reliance on peak periods alone.',
  },
  {
    icon: TrendingUp,
    title: 'Positive Footfall Contribution',
    description: 'Intended to generate consistent pedestrian traffic that benefits neighbouring units and the wider retail environment.',
  },
]

export default function WhyWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-peach to-blush-pink">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollAnimation>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal text-center mb-6">
            Why KOMO-YUKI Works for Landlords
          </h2>
          <p className="text-xl text-charcoal max-w-4xl mx-auto mb-4 font-medium">
            KOMO-YUKI is being developed as a footfall-positive retail tenant, designed to attract attention, increase dwell time, and complement surrounding occupiers.
          </p>
          <p className="text-lg text-charcoal max-w-4xl mx-auto mb-12">
            The concept is structured to perform as everyday retail, not as a niche or seasonal use.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <ScrollAnimation key={index} delay={index * 100} className="h-full">
                <div className="p-8 bg-white/95 rounded-lg backdrop-blur-sm h-full">
                  <Icon className="w-10 h-10 mb-4 text-charcoal" />
                  <h3 className="font-outfit text-xl font-semibold text-charcoal mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </ScrollAnimation>
            )
          })}
        </div>

        <ScrollAnimation delay={600}>
          <div className="mt-12 text-center">
            <p className="text-sm text-charcoal font-medium max-w-4xl mx-auto italic bg-white/50 backdrop-blur-sm p-4 rounded-lg">
              Store format and concept mix are selected based on location, scale, and surrounding use, ensuring alignment with landlord and placemaking objectives.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
