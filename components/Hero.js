'use client'

export default function Hero() {
  return (
    <section className="relative h-[90vh] md:h-[75vh] min-h-[500px] md:min-h-[600px] max-h-[750px] flex items-end pb-12 md:pb-16 pt-[100px] md:pt-[120px]">
      {/* Background Image - Mobile */}
      <div
        className="absolute inset-x-0 top-[100px] md:top-[120px] bottom-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: 'url(/images/mobile.png)',
        }}
      >
        {/* Overlay - darker on mobile for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"></div>
      </div>

      {/* Background Image - Desktop */}
      <div
        className="hidden md:block absolute inset-x-0 top-[100px] md:top-[120px] bottom-0 bg-cover bg-no-repeat"
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
          <h1 className="font-outfit text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight sm:whitespace-nowrap">
            A Modern Asian Gifts & Toys Store
          </h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white mb-6 md:mb-8 leading-relaxed">
            Japanese-inspired retail designed for high-footfall town centres
          </p>
          <div>
            <a
              href="#contact"
              className="inline-block px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg shadow-lg hover:shadow-xl text-center transition-all"
              style={{ backgroundColor: '#F6BCC8', color: '#2B2B2B' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#F4B6C2'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#F6BCC8'}
            >
              Property Enquiries
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
