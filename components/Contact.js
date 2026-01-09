'use client'

import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'

export default function Contact() {
  const [enquiryType, setEnquiryType] = useState('landlord')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Form submission is not yet implemented. This is a placeholder.')
  }

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollAnimation>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Contact
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            For property opportunities, supplier enquiries, or general introductions, please get in touch.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              {/* Enquiry Type Selector */}
              <div className="mb-6">
                <label className="block text-charcoal font-semibold mb-3 text-lg">
                  Enquiry Type
                </label>
                <select
                  value={enquiryType}
                  onChange={(e) => setEnquiryType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink focus:border-transparent text-base"
                >
                  <option value="landlord">Landlord & Property Enquiries</option>
                  <option value="supplier">Supplier Enquiries</option>
                </select>
              </div>

              {/* Description based on enquiry type */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                {enquiryType === 'landlord' ? (
                  <>
                    <p className="text-gray-700 text-sm mb-3">
                      For landlords and agents with suitable retail units that may align with either the KOMO-YUKI Store or KOMO-YUKI Tea & Sando House formats.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-gray-700 text-sm mb-3">
                      For brands, studios, and manufacturers interested in being considered for future KOMO-YUKI locations.
                    </p>
                    <p className="text-gray-700 text-sm font-semibold mb-2">
                      We welcome introductions from:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-blush-pink mt-1">•</span>
                        <span>Independent brands and designers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blush-pink mt-1">•</span>
                        <span>Asian manufacturers and studios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blush-pink mt-1">•</span>
                        <span>Licensed brand partners</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blush-pink mt-1">•</span>
                        <span>Distribution and wholesale partners</span>
                      </li>
                    </ul>
                  </>
                )}
              </div>

              {/* Dynamic Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {enquiryType === 'landlord' ? (
                  <>
                    {/* Landlord Form Fields */}
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
                  </>
                ) : (
                  <>
                    {/* Supplier Form Fields */}
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
                  </>
                )}

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-charcoal text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
