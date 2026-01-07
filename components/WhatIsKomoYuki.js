import ScrollAnimation from './ScrollAnimation'

export default function WhatIsKomoYuki() {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollAnimation>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal text-center mb-12">
            What is Komo-Yuki
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <ScrollAnimation className="md:col-span-2">
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Komo-Yuki is a modern retail concept inspired by Japanese and wider Asian gift, toy, and lifestyle stores. We curate high-turnover, visually engaging products sourced across Asia, designed to convert footfall and encourage repeat visits.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The range appeals to children, teens, families, and gift buyers, with accessible price points and fast product rotation. Our stores are clean, bright, and highly merchandised, built to perform in busy town centres and shopping destinations.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200} className="space-y-6">
            <div className="p-6 bg-white border-l-4 border-blush-pink rounded-lg">
              <h3 className="font-outfit text-xl font-semibold text-charcoal mb-2">
                Established retail model
              </h3>
              <p className="text-gray-600">
                Proven format with consistent performance
              </p>
            </div>

            <div className="p-6 bg-white border-l-4 border-blush-pink rounded-lg">
              <h3 className="font-outfit text-xl font-semibold text-charcoal mb-2">
                Low-impact fit-out
              </h3>
              <p className="text-gray-600">
                Minimal structural requirements
              </p>
            </div>

            <div className="p-6 bg-white border-l-4 border-blush-pink rounded-lg">
              <h3 className="font-outfit text-xl font-semibold text-charcoal mb-2">
                High visual standard
              </h3>
              <p className="text-gray-600">
                Clean, professional presentation
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
