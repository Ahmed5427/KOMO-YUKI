export default function Hero() {
  return (
    <section className="relative h-[90vh] md:h-[75vh] min-h-[500px] md:min-h-[600px] max-h-[750px] flex items-end pb-12 md:pb-16 pt-20">
      {/* Background Image - Mobile */}
      <div
        className="absolute inset-x-0 top-20 bottom-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: 'url(/images/mobile.png)',
        }}
      >
        {/* Overlay - darker on mobile for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"></div>
      </div>

      {/* Background Image - Desktop */}
      <div
        className="hidden md:block absolute inset-x-0 top-20 bottom-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-storefront.png)',
          backgroundPosition: 'center top'
        }}
      >
        {/* Overlay - lighter on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-blush-pink/95 backdrop-blur-sm rounded-full mb-4 md:mb-6">
            <p className="text-xs md:text-sm font-semibold text-charcoal uppercase tracking-wide">
              Professional B2B Retail Concept
            </p>
          </div>
          <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            A Modern Asian Gifts & Toys Store
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 leading-relaxed">
            Japanese-inspired retail designed for high-footfall town centres
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="#contact"
              className="px-6 py-3 md:px-8 md:py-4 bg-white text-charcoal rounded-lg hover:bg-gray-100 transition-all font-semibold text-base md:text-lg shadow-lg hover:shadow-xl text-center"
            >
              Property Enquiries
            </a>
            <a
              href="#about"
              className="px-6 py-3 md:px-8 md:py-4 bg-charcoal/90 backdrop-blur-sm text-white rounded-lg hover:bg-charcoal transition-all font-semibold text-base md:text-lg border-2 border-white/30 text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
