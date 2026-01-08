import ScrollAnimation from './ScrollAnimation'
import { Store, Coffee, Layers, Sparkles, RefreshCw, Zap, Plug } from 'lucide-react'

export default function StoreFormat() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollAnimation>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal text-center mb-6">
            Store Format
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-16">
            KOMO-YUKI is designed to operate across two distinct store formats, allowing flexibility by location while maintaining a consistent visual and operational standard.
          </p>
        </ScrollAnimation>

        {/* Two Format Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Store Format */}
          <ScrollAnimation delay={200}>
            <div className="bg-cream p-8 rounded-lg shadow-md border-t-4 border-blush-pink h-full">
              <div className="flex items-center gap-3 mb-4">
                <Store className="w-8 h-8 text-blush-pink" />
                <h3 className="font-outfit text-2xl font-bold text-charcoal">
                  KOMO-YUKI STORE FORMAT
                </h3>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg text-charcoal mb-2">
                  Compact to Mid-Size Units
                </h4>
                <p className="text-gray-700 font-bold text-lg mb-4">
                  700 – 1,500 sq ft retail space
                </p>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Designed for high-street and town-centre locations, the KOMO-YUKI Store format focuses on fast-moving retail, strong merchandising, and high visual impact.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blush-pink mt-1">•</span>
                  <span>Modular shelving and displays</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blush-pink mt-1">•</span>
                  <span>Bright, open interiors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blush-pink mt-1">•</span>
                  <span>Fast product rotation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blush-pink mt-1">•</span>
                  <span>Efficient fit-out</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blush-pink mt-1">•</span>
                  <span>Standard retail utilities</span>
                </li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* Tea & Sando House Format */}
          <ScrollAnimation delay={300}>
            <div className="bg-cream p-8 rounded-lg shadow-md border-t-4 border-peach h-full">
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-8 h-8 text-peach" />
                <h3 className="font-outfit text-2xl font-bold text-charcoal">
                  KOMO-YUKI TEA & SANDO HOUSE FORMAT
                </h3>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg text-charcoal mb-2">
                  Mid-Size to Large Units
                </h4>
                <p className="text-gray-700 font-bold text-lg mb-4">
                  1,800 – 3,000+ sq ft total space
                </p>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                The Tea & Sando House format is planned for select locations and includes both retail and café space. This format is designed to support longer dwell times and destination-led visits.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-peach mt-1">•</span>
                  <span>Dedicated café seating area</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-peach mt-1">•</span>
                  <span>Retail and café zoning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-peach mt-1">•</span>
                  <span>Enhanced back-of-house requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-peach mt-1">•</span>
                  <span>Premium interior finishes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-peach mt-1">•</span>
                  <span>Suitable for lifestyle destinations and mixed-use developments</span>
                </li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>

        {/* Designed for Flexible Rollout */}
        <ScrollAnimation delay={400}>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="font-outfit text-2xl font-bold text-charcoal text-center mb-6">
              Designed for Flexible Rollout
            </h3>
            <p className="text-center text-gray-700 mb-6">
              Both formats are designed to be:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <Layers className="w-10 h-10 mx-auto mb-3 text-blush-pink" />
                <p className="font-semibold text-charcoal">Modular and adaptable</p>
              </div>
              <div className="text-center">
                <Sparkles className="w-10 h-10 mx-auto mb-3 text-blush-pink" />
                <p className="font-semibold text-charcoal">Visually consistent across locations</p>
              </div>
              <div className="text-center">
                <Zap className="w-10 h-10 mx-auto mb-3 text-blush-pink" />
                <p className="font-semibold text-charcoal">Efficient to fit out</p>
              </div>
              <div className="text-center">
                <RefreshCw className="w-10 h-10 mx-auto mb-3 text-blush-pink" />
                <p className="font-semibold text-charcoal">Scalable by market and footfall</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 italic">
              Store size and format are selected based on location, opportunity, and the surrounding environment.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
