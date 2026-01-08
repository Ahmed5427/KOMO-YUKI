import ScrollAnimation from './ScrollAnimation'

export default function WhatIsKomoYuki() {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Section */}
        <ScrollAnimation>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal text-center mb-4">
            What is KOMO-YUKI
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <div className="max-w-4xl mx-auto space-y-4 text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              KOMO-YUKI is a new retail and experience concept inspired by modern Japanese culture and contemporary Asian design.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The brand is built around discovery, frequent rotation, and visually engaging environments that encourage repeat visits.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              KOMO-YUKI is designed to adapt by location while maintaining a consistent, recognizable identity.
            </p>
          </div>
        </ScrollAnimation>

        {/* Platform for Asian Indie Brands */}
        <ScrollAnimation delay={200}>
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="font-outfit text-3xl font-bold text-charcoal mb-6 text-center">
              A Platform for Asian Indie Brands
            </h3>
            <div className="space-y-4 text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                KOMO-YUKI is being built as a destination for independent, design-led brands from Asia, with a focus on Japan and Korea.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The aim is to surface emerging brands that are not yet widely available in the UK and present them in a highly curated retail environment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Long-term, KOMO-YUKI is intended to become a recognised platform where appearing in-store signals relevance and momentum for an indie brand.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Two Concepts One Brand */}
        <ScrollAnimation delay={300}>
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="font-outfit text-3xl font-bold text-charcoal mb-6 text-center">
              Two Concepts. One Brand.
            </h3>
            <div className="space-y-4 text-center mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                KOMO-YUKI operates as a dual-concept brand, allowing flexibility by location while preserving consistency in quality, design, and experience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Each concept serves a different purpose, but both reinforce the same core identity.
              </p>
            </div>

            {/* Two Concept Cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blush-pink">
                <h4 className="font-outfit text-2xl font-bold text-charcoal mb-3">
                  KOMO-YUKI STORE
                </h4>
                <p className="text-gray-700 font-bold mb-4">
                  Modern Asian Collectibles & Lifestyle
                </p>
                <div className="space-y-3 text-gray-700">
                  <p>A retail-focused format centred on collectibles, gifts, and lifestyle products sourced from Japan, Korea, and across Asia.</p>
                  <p>The concept prioritises visual impact, fast product rotation, and broad demographic appeal.</p>
                  <p className="font-semibold">Designed for high-street and town-centre locations.</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blush-pink">
                <h4 className="font-outfit text-2xl font-bold text-charcoal mb-3">
                  KOMO-YUKI TEA & SANDO HOUSE
                </h4>
                <p className="text-gray-700 font-bold mb-4">
                  Japanese-Inspired Café Experience
                </p>
                <div className="space-y-3 text-gray-700">
                  <p>A café concept planned for select locations, inspired by Japanese tea culture, milk-bread sandos, and modern Japanese flavours.</p>
                  <p>As part of the brand story, premium Wagyu is intended to be flown in from Japan on a limited basis.</p>
                  <p className="font-semibold">Designed as a destination-led, experience-first extension of the KOMO-YUKI brand.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Designed for Modern Retail */}
        <ScrollAnimation delay={400}>
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="font-outfit text-3xl font-bold text-charcoal mb-6 text-center">
              Designed for Modern Retail
            </h3>
            <div className="space-y-4 text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                KOMO-YUKI is designed with contemporary retail environments in mind.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The concept supports flexible formats, strong merchandising, high visual standards, and low structural dependency.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Layouts are intended to maximise footfall, dwell time, and repeat visits.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Final Statement */}
        <ScrollAnimation delay={500}>
          <div className="text-center">
            <h3 className="font-outfit text-3xl font-bold text-charcoal mb-4">
              One Brand. Multiple Experiences.
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Whether experienced as a retail store or a Tea & Sando House, KOMO-YUKI is unified by the same principles.
            </p>
            <p className="text-xl font-semibold text-charcoal mt-4">
              Discovery. Design. Modern Asian culture. Experience.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
