import ScrollAnimation from './ScrollAnimation'

export default function SupplierSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <ScrollAnimation>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Interested in Partnering?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Komo-Yuki works with suppliers across toys, collectibles, and lifestyle products. We prioritize reliable supply, clear MOQs, and long-term partnerships.
          </p>
          <a
            href="#contact"
            className="inline-block px-12 py-4 bg-blush-pink text-charcoal font-semibold rounded-lg hover:bg-pink-400 transition-colors duration-300 text-lg"
          >
            Supplier Contact →
          </a>
        </ScrollAnimation>
      </div>
    </section>
  )
}
