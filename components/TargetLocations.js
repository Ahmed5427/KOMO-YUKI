import ScrollAnimation from './ScrollAnimation'
import { MapPin, Eye, Building2 } from 'lucide-react'

const locations = [
  {
    icon: MapPin,
    title: 'Pedestrian High Streets',
    description: 'Town-centre locations with consistent pedestrian footfall and strong local activity.',
  },
  {
    icon: Eye,
    title: 'Visibility & Footfall',
    description: 'Primary or strong secondary positions with clear sightlines and natural passing traffic.',
  },
  {
    icon: Building2,
    title: 'Ground-Floor Retail',
    description: 'Street-level or mall-level units with direct frontage and clear customer access.',
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
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-4">
            KOMO-YUKI is actively reviewing town-centre retail opportunities and welcomes introductions from landlords and agents.
          </p>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Locations are assessed based on footfall quality, visibility, and suitability for either of the KOMO-YUKI store formats.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {locations.map((location, index) => {
            const Icon = location.icon
            return (
              <ScrollAnimation key={index} delay={index * 100} className="h-full">
                <div className="p-10 bg-cream rounded-lg text-center hover:shadow-lg transition-shadow duration-300 h-full flex flex-col items-center justify-start">
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
          <div className="text-center mb-12">
            <p className="text-sm text-gray-600 max-w-3xl mx-auto italic">
              Unit size and layout will determine suitability for either the KOMO-YUKI Store or the KOMO-YUKI Tea & Sando House format.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={400}>
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
