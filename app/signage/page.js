import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function SignagePage() {
  return (
    <main>
      <Header />
      <div className="pt-36 pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollAnimation>
            <h1 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Signage Requirements
            </h1>
            <h2 className="font-outfit text-2xl md:text-3xl font-semibold text-charcoal mb-12">
              KOMO-YUKI Signage Guidelines
            </h2>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                KOMO-YUKI is a visually led retail brand designed to perform in high-footfall town-centre and destination locations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Clear, high-quality storefront signage is a core operational requirement for all KOMO-YUKI locations.
              </p>

              <h2 className="font-outfit text-2xl font-bold text-charcoal mt-12 mb-6">
                Primary Signage Requirement
              </h2>
              <div className="bg-blush-pink/10 border-l-4 border-blush-pink p-6 mb-8">
                <p className="text-lg font-semibold text-charcoal mb-4">
                  Illuminated fascia signage is required for all KOMO-YUKI stores.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Our storefront design relies on illuminated branding to ensure:
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>Strong street presence</li>
                  <li>Clear brand visibility during evening trading hours</li>
                  <li>Consistent presentation across locations</li>
                  <li>Maximum contribution to footfall and surrounding retail activity</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-12">
                Signage illumination is considered an integral part of the KOMO-YUKI brand identity and retail performance model.
              </p>

              <h2 className="font-outfit text-2xl font-bold text-charcoal mt-12 mb-6">
                Signage Style & Execution
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                KOMO-YUKI signage is designed to be:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
                <li>Clean and contemporary</li>
                <li>High-quality and professionally fabricated</li>
                <li>Aligned with modern Japanese-inspired design principles</li>
                <li>Subtle, warm, and premium rather than overly bright or intrusive</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                Typical formats include:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
                <li>Back-lit or halo-lit fascia lettering</li>
                <li>Internally illuminated signage panels</li>
                <li>Discreet integrated lighting within the shopfront</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-12">
                Exact specifications are adapted to each location and approved in coordination with landlords and local planning requirements.
              </p>

              <h2 className="font-outfit text-2xl font-bold text-charcoal mt-12 mb-6">
                Planning & Compliance
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                KOMO-YUKI works collaboratively with landlords, managing agents, and local authorities to ensure:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
                <li>Compliance with local planning and conservation requirements</li>
                <li>Appropriate lighting levels for the surrounding environment</li>
                <li>Respect for neighbouring occupiers and public realm standards</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-12">
                Where illuminated signage is subject to planning consent, KOMO-YUKI will engage early in the approval process.
              </p>

              <h2 className="font-outfit text-2xl font-bold text-charcoal mt-12 mb-6">
                Window & Visual Display
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In addition to fascia signage, KOMO-YUKI storefronts typically include:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-12">
                <li>Strong internal lighting visible from the street</li>
                <li>Curated window displays supporting brand visibility</li>
                <li>Seasonal and rotating visual elements</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-12">
                These features are designed to enhance the overall street scene and support footfall for the wider area.
              </p>

              <h2 className="font-outfit text-2xl font-bold text-charcoal mt-12 mb-6">
                Summary for Landlords & Agents
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blush-pink text-xl">•</span>
                    <span>Illuminated signage is a non-negotiable operational requirement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blush-pink text-xl">•</span>
                    <span>Signage is professionally designed, premium, and planning-conscious</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blush-pink text-xl">•</span>
                    <span>KOMO-YUKI signage contributes positively to street presence and retail performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blush-pink text-xl">•</span>
                    <span>Final execution is tailored per location in collaboration with stakeholders</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <Footer />
    </main>
  )
}
