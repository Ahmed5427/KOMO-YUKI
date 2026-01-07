'use client'

import ScrollAnimation from './ScrollAnimation'
import { User, Mail, MapPin, Package } from 'lucide-react'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Form submission is not yet implemented. This is a placeholder.')
  }

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollAnimation>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal text-center mb-12">
            Contact
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Landlord Form */}
          <ScrollAnimation>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="font-outfit text-2xl font-semibold text-charcoal mb-6">
                Landlord & Property Enquiries
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Property Location"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Unit Size (if known)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink focus:border-transparent resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-charcoal text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </ScrollAnimation>

          {/* Supplier Form */}
          <ScrollAnimation delay={200}>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="font-outfit text-2xl font-semibold text-charcoal mb-6">
                Supplier Enquiries
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Contact Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Product Category"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink focus:border-transparent resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-charcoal text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={400}>
          <div className="text-center pt-8 border-t border-gray-300">
            <p className="text-lg text-gray-600">
              General enquiries:{' '}
              <a
                href="mailto:enquiries@komo-yuki.com"
                className="text-charcoal font-semibold underline hover:text-gray-700"
              >
                enquiries@komo-yuki.com
              </a>
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
