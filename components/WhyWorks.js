import ScrollAnimation from './ScrollAnimation'
import { Eye, Users, Clock, Calendar, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Eye,
    title: 'Strong Visual Frontage',
    description: 'Enhances street appeal and attracts attention',
  },
  {
    icon: Users,
    title: 'Broad Demographic Appeal',
    description: 'Children, teens, families, and tourists',
  },
  {
    icon: Clock,
    title: 'High Dwell Time',
    description: 'Impulse-driven purchasing behaviour',
  },
  {
    icon: Calendar,
    title: 'Year-Round Performance',
    description: 'Reliable, everyday retail rather than seasonal dependency',
  },
  {
    icon: TrendingUp,
    title: 'Footfall Contribution',
    description: 'Consistent traffic that benefits surrounding units',
  },
]

export default function WhyWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-peach to-blush-pink">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollAnimation>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal text-center mb-6">
            Why Komo-Yuki Works for Landlords
          </h2>
          <p className="text-xl text-charcoal text-center max-w-4xl mx-auto mb-12 font-medium">
            Komo-Yuki is designed to be a footfall-positive retail tenant, not a niche destination.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="p-8 bg-white/95 rounded-lg backdrop-blur-sm">
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
      </div>
    </section>
  )
}
