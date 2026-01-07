export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-storefront.jpg)' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blush-pink/30 to-peach/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-8 bg-white/90 rounded-lg backdrop-blur-sm">
        <h1 className="font-outfit text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6">
          A Modern Asian Gifts & Toys Store
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">
          Japanese-inspired retail designed for high-footfall town centres
        </p>
      </div>
    </section>
  )
}
