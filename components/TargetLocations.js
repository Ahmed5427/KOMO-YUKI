import ScrollAnimation from './ScrollAnimation'
import { MapPin, Eye, Building2 } from 'lucide-react'

const locations = [
  {
    icon: MapPin,
    title: 'Pedestrian high streets',
    description: 'Town-centre locations with strong, consistent footfall.',
  },
  {
    icon: Eye,
    title: 'Visibility & frontage',
    description: 'Primary or strong secondary positions with clear sightlines and window presence.',
  },
  {
    icon: Building2,
    title: 'Ground-floor retail',
    description: 'Street-level or shopping-centre units with direct customer access.',
  },
]

const criteria = [
  'High footfall and strong surrounding retail mix',
  'Ground-floor frontage',
  'Suitable for compact to mid-size retail formats',
  'Long-term fit with the KOMO-YUKI brand',
]

export default function TargetLocations() {
  return (
    <section id="locations" className="pt-36 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollAnimation>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal mb-6 text-center">
            Target Locations
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4 text-center">
            KOMO-YUKI is actively reviewing retail opportunities in town-centre and high-footfall locations.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4 text-center">
            The brand's initial growth objective is to open up to 10 locations over the next three years, with a long-term plan to continue expanding into additional markets.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            We welcome introductions from landlords, agents, and property partners with suitable units that align with the KOMO-YUKI retail model.
          </p>
        </ScrollAnimation>

        {/* Ideal Locations */}
        <ScrollAnimation delay={100}>
          <h3 className="font-outfit text-3xl font-bold text-charcoal mb-8 mt-12">
            Ideal locations
          </h3>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => {
            const Icon = location.icon
            return (
              <ScrollAnimation key={index} delay={index * 100 + 200} className="h-full">
                <div className="p-10 bg-cream rounded-lg hover:shadow-lg transition-shadow duration-300 h-full flex flex-col items-start justify-start">
                  <Icon className="w-14 h-14 mb-6 text-charcoal" />
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

        {/* Location Criteria */}
        <ScrollAnimation delay={500}>
          <div className="bg-gray-50 p-8 rounded-lg mb-12 max-w-4xl mx-auto">
            <h3 className="font-outfit text-2xl font-bold text-charcoal mb-6">
              Location criteria
            </h3>
            <div className="space-y-3">
              {criteria.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blush-pink flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6 italic">
              All opportunities are assessed based on location quality, visibility, and alignment with the KOMO-YUKI concept.
            </p>
          </div>
        </ScrollAnimation>

        {/* Enquiries Section */}
        <ScrollAnimation delay={600}>
          <div className="bg-cream p-8 rounded-lg max-w-3xl mx-auto text-center">
            <h3 className="font-outfit text-2xl font-bold text-charcoal mb-4">
              Enquiries
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              For property, partnership, or general enquiries, please get in touch with the KOMO-YUKI team.
            </p>
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-semibold text-charcoal mb-2">Property & landlord enquiries</h4>
                <a href="mailto:duncan@komoyuki.com" className="text-blush-pink hover:underline text-lg">
                  duncan@komoyuki.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal mb-2">Brand & supplier enquiries</h4>
                <a href="mailto:duncan@komoyuki.com" className="text-blush-pink hover:underline text-lg">
                  duncan@komoyuki.com
                </a>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-block px-12 py-4 bg-charcoal text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 text-lg"
            >
              Contact Us
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
