import ScrollAnimation from './ScrollAnimation'
import { MapPin, Eye, Building2 } from 'lucide-react'

const locations = [
  {
    icon: MapPin,
    title: 'Pedestrian High Streets',
    description: 'Town centres with significant footfall',
  },
  {
    icon: Eye,
    title: 'Visibility & Footfall',
    description: 'Primary secondary locations with strong sightlines',
  },
  {
    icon: Building2,
    title: 'Ground-Floor Retail',
    description: 'Direct street or mall-level frontage',
  },
]

export default function TargetLocations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollAnimation>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal text-center mb-6">
            Target Locations
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We are actively reviewing town-centre retail opportunities and welcome introductions from landlords and agents.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => {
            const Icon = location.icon
            return (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="p-10 bg-cream rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
                  <Icon className="w-14 h-14 mx-auto mb-6 text-charcoal" />
                  <h3 className="font-outfit text-xl font-semibold text-charcoal mb-3">
                    {location.title}
                  </h3>
                  <p className="text-gray-600">
                    {location.description}
                  </p>
                </div>
              </ScrollAnimation>
            )
          })}
        </div>

        <ScrollAnimation delay={300}>
          <div className="text-center">
            <a
              href="#contact"
              className="inline-block px-12 py-4 bg-charcoal text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 text-lg"
            >
              Submit Available Units
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
