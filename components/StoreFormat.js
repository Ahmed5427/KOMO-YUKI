import ScrollAnimation from './ScrollAnimation'
import { Store, Coffee, Layers, Sparkles, RefreshCw, Zap } from 'lucide-react'

export default function StoreFormat() {
  return (
    <section id="formats" className="pt-36 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollAnimation>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal mb-6 text-center">
            Store Formats
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-4">
            KOMO-YUKI operates across flexible store formats designed to adapt by location while maintaining a consistent visual and operational standard.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12">
            Each format is selected based on footfall, the surrounding environment, and long-term opportunity.
          </p>
        </ScrollAnimation>

        {/* Hero Image - Tea & Sando House */}
        <ScrollAnimation delay={150}>
          <div className="relative w-full mb-16 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/tea-sando-house.png"
              alt="KOMO-YUKI Tea & Sando House - Japanese-inspired café with outdoor seating"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6 md:p-8">
              <p className="text-white text-lg md:text-xl font-outfit font-semibold drop-shadow-lg">
                KOMO-YUKI Tea & Sando House
              </p>
              <p className="text-white/90 text-sm md:text-base drop-shadow-lg">
                Japanese-inspired café experience
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Two Format Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Store Format */}
          <ScrollAnimation delay={200}>
            <div className="bg-cream p-8 rounded-lg shadow-md border-t-4 border-blush-pink h-full">
              <div className="flex items-center gap-3 mb-4">
                <Store className="w-8 h-8 text-blush-pink" />
                <h3 className="font-outfit text-2xl font-bold text-charcoal">
                  KOMO-YUKI STORE
                </h3>
              </div>

              <p className="text-gray-700 font-bold text-lg mb-4">
                Modern Asian collectibles & lifestyle
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                A retail-focused format centred on collectibles, gifts, and lifestyle products sourced from Japan, Korea, and across Asia.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This format prioritises visual impact, fast product rotation, and broad demographic appeal.
              </p>

              <div className="mb-6 mt-6">
                <h4 className="font-semibold text-lg text-charcoal mb-2">
                  Typical size
                </h4>
                <p className="text-gray-700 font-bold text-lg">
                  700–1,500 sq ft
                </p>
              </div>

              <h4 className="font-semibold text-lg text-charcoal mb-3">
                Key features
              </h4>
              <ul className="space-y-2 text-gray-700 mb-6">
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
                  <span>Fast-moving product categories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blush-pink mt-1">•</span>
                  <span>Efficient, low-impact fit-out</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blush-pink mt-1">•</span>
                  <span>Standard retail utilities</span>
                </li>
              </ul>

              <p className="text-charcoal font-semibold">
                Designed for high-street and town-centre locations.
              </p>
            </div>
          </ScrollAnimation>

          {/* Tea & Sando House Format */}
          <ScrollAnimation delay={300}>
            <div className="bg-cream p-8 rounded-lg shadow-md border-t-4 border-peach h-full">
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-8 h-8 text-peach" />
                <h3 className="font-outfit text-2xl font-bold text-charcoal">
                  KOMO-YUKI TEA & SANDO HOUSE
                </h3>
              </div>

              <p className="text-gray-700 font-bold text-lg mb-4">
                Japanese-inspired café experience
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                A café-led format planned for select locations, designed as an experience-first extension of the KOMO-YUKI brand.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Inspired by Japanese tea culture, milk-bread sandos, and modern Japanese flavours, this format is intended to support longer dwell times and destination-led visits.
              </p>

              <div className="mb-6 mt-6">
                <h4 className="font-semibold text-lg text-charcoal mb-2">
                  Typical size
                </h4>
                <p className="text-gray-700 font-bold text-lg">
                  1,800–3,000+ sq ft
                </p>
              </div>

              <h4 className="font-semibold text-lg text-charcoal mb-3">
                Key features
              </h4>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-peach mt-1">•</span>
                  <span>Combined retail and café zoning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-peach mt-1">•</span>
                  <span>Dedicated seating areas</span>
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

              <p className="text-charcoal font-semibold">
                Available only in locations where the format complements the surrounding environment.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        {/* Designed for Flexible Rollout */}
        <ScrollAnimation delay={400}>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="font-outfit text-2xl font-bold text-charcoal mb-6">
              Designed for flexible rollout
            </h3>
            <p className="text-gray-700 mb-6">
              Both KOMO-YUKI formats are designed to be:
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
            <p className="text-gray-600 mt-6 italic">
              Store size and format are selected based on location quality, opportunity, and the surrounding environment.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
