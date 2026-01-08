export default function Hero() {
  return (
    <section className="relative h-[75vh] min-h-[600px] max-h-[750px] flex items-end pb-16 pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-storefront.png)' }}
      >
        {/* Overlay - lighter to show the storefront better */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-6 max-w-6xl">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-blush-pink/90 backdrop-blur-sm rounded-full mb-6">
            <p className="text-sm font-semibold text-charcoal uppercase tracking-wide">
              Professional B2B Retail Concept
            </p>
          </div>
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            A Modern Asian Gifts & Toys Store
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
            Japanese-inspired retail designed for high-footfall town centres
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-charcoal rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Property Enquiries
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-charcoal/80 backdrop-blur-sm text-white rounded-lg hover:bg-charcoal transition-all font-semibold text-lg border-2 border-white/20"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
