import ScrollAnimation from './ScrollAnimation'
import { Eye, Users, Clock, Calendar, TrendingUp, MapPin } from 'lucide-react'

const benefits = [
  {
    icon: Eye,
    title: 'Strong visual frontage',
    description: 'High-impact windows and merchandising that enhance street appeal.',
  },
  {
    icon: Users,
    title: 'Broad demographic appeal',
    description: 'Attracts children, teens, families, and gift buyers.',
  },
  {
    icon: Clock,
    title: 'High dwell time',
    description: 'Discovery-led browsing encourages longer visits and impulse purchasing.',
  },
  {
    icon: Calendar,
    title: 'Year-round performance',
    description: 'Reliable everyday retail rather than seasonal dependency.',
  },
  {
    icon: TrendingUp,
    title: 'Low operational risk',
    description: 'Simple retail operation with no specialist infrastructure requirements.',
  },
]

const suitability = [
  'Pedestrian high streets',
  'Town-centre retail locations',
  'Shopping centres and mixed-use developments',
  'Ground-floor units with strong visibility',
]

export default function WhyWorks() {
  return (
    <section id="landlords" className="pt-36 pb-20 bg-gradient-to-br from-peach to-blush-pink">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollAnimation>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal mb-6">
            For Landlords & Property Partners
          </h2>
          <p className="text-xl text-charcoal max-w-4xl mx-auto mb-4 font-medium">
            KOMO-YUKI is designed as a footfall-positive retail tenant suited to high-street, town-centre, and lifestyle destinations.
          </p>
          <p className="text-lg text-charcoal max-w-4xl mx-auto mb-12">
            Our formats prioritise strong visual frontage, efficient use of space, and broad demographic appeal, making KOMO-YUKI easy to place and reliable to operate.
          </p>
          <p className="text-lg text-charcoal max-w-4xl mx-auto mb-12">
            Locations are assessed carefully to ensure long-term fit, consistent performance, and positive contribution to surrounding units.
          </p>
        </ScrollAnimation>

        {/* Why KOMO-YUKI works for landlords */}
        <ScrollAnimation delay={100}>
          <h3 className="font-outfit text-3xl font-bold text-charcoal mb-8 mt-12">
            Why KOMO-YUKI works for landlords
          </h3>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <ScrollAnimation key={index} delay={index * 100 + 200} className="h-full">
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

        {/* Store Suitability */}
        <ScrollAnimation delay={600}>
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg mb-12">
            <h3 className="font-outfit text-2xl font-bold text-charcoal mb-6">
              Store suitability
            </h3>
            <p className="text-lg text-charcoal mb-6">
              KOMO-YUKI is best suited to:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {suitability.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blush-pink flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <h4 className="font-outfit text-xl font-semibold text-charcoal mb-4 mt-8">
              Target unit sizes
            </h4>
            <p className="text-gray-700 mb-2">Compact to mid-size retail units</p>
            <p className="text-gray-700 mb-2">Typically 700–1,500 sq ft</p>
            <p className="text-gray-700">Flexible layouts depending on location and opportunity</p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
