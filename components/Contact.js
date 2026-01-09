'use client'

import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'

export default function Contact() {
  const [enquiryType, setEnquiryType] = useState('landlord')
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Define fields for each enquiry type
  const landlordFields = [
    { name: 'name', placeholder: 'Name', type: 'text', required: true },
    { name: 'email', placeholder: 'Email', type: 'email', required: true },
    { name: 'propertyLocation', placeholder: 'Property Location', type: 'text', required: false },
    { name: 'unitSize', placeholder: 'Unit Size (if known)', type: 'text', required: false },
    { name: 'message', placeholder: 'Message', type: 'textarea', required: false },
  ]

  const supplierFields = [
    { name: 'companyName', placeholder: 'Company Name', type: 'text', required: true },
    { name: 'contactName', placeholder: 'Contact Name', type: 'text', required: true },
    { name: 'email', placeholder: 'Email', type: 'email', required: true },
    { name: 'productCategory', placeholder: 'Product Category', type: 'text', required: false },
    { name: 'message', placeholder: 'Message', type: 'textarea', required: false },
  ]

  const fields = enquiryType === 'landlord' ? landlordFields : supplierFields
  const currentField = fields[currentStep]

  const handleNext = (e) => {
    e.preventDefault()
    const input = e.target.elements[currentField.name]
    if (currentField.required && !input.value.trim()) {
      return
    }
    setFormData({ ...formData, [currentField.name]: input.value })
    if (currentStep < fields.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleEnquiryTypeChange = (newType) => {
    setEnquiryType(newType)
    setCurrentStep(0)
    setFormData({})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const input = e.target.elements[currentField.name]
    const finalData = {
      ...formData,
      [currentField.name]: input.value,
      enquiryType: enquiryType === 'landlord' ? 'Landlord & Property Enquiries' : 'Supplier Enquiries',
    }

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL || 'https://afxv17.app.n8n.cloud/webhook/b81d43aa-baca-4047-8608-d1241068c5b2'
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({})
        setCurrentStep(0)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#F6BCC8' }}>
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollAnimation>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal mb-6 text-center">
            Contact
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 text-center">
            For property opportunities, supplier enquiries, or general introductions, please get in touch.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <div className="max-w-xl mx-auto">
            {submitStatus === 'success' ? (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="mb-4">
                  <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-charcoal mb-2">Thank you for your enquiry!</p>
                <p className="text-gray-700 mb-6">We'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="px-6 py-2 bg-charcoal text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm">
                {/* Enquiry Type Selector - Only show at step 0 */}
                {currentStep === 0 && (
                  <div className="mb-6">
                    <label className="block text-charcoal font-semibold mb-3 text-lg text-center">
                      Select Enquiry Type
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => handleEnquiryTypeChange('landlord')}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          enquiryType === 'landlord'
                            ? 'border-blush-pink bg-pink-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold text-charcoal">Landlord</div>
                        <div className="text-sm text-gray-600 mt-1">Property Enquiries</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleEnquiryTypeChange('supplier')}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          enquiryType === 'supplier'
                            ? 'border-blush-pink bg-pink-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold text-charcoal">Supplier</div>
                        <div className="text-sm text-gray-600 mt-1">Brand Enquiries</div>
                      </button>
                    </div>
                  </div>
                )}

                {/* Description based on enquiry type - Only show at step 0 */}
                {currentStep === 0 && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    {enquiryType === 'landlord' ? (
                      <p className="text-gray-700 text-sm">
                        For landlords and agents with suitable retail units that may align with either the KOMO-YUKI Store or KOMO-YUKI Tea & Sando House formats.
                      </p>
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
                )}

                {/* Progress indicator */}
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2">
                    {fields.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 rounded-full transition-all ${
                          index === currentStep
                            ? 'w-8 bg-blush-pink'
                            : index < currentStep
                            ? 'w-2 bg-blush-pink'
                            : 'w-2 bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Step {currentStep + 1} of {fields.length}
                  </p>
                </div>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-semibold">Oops! Something went wrong.</p>
                    <p className="text-red-700 text-sm mt-1">Please try again or contact us directly at duncan@komoyuki.com</p>
                  </div>
                )}

                {/* Progressive Form */}
                <form onSubmit={currentStep === fields.length - 1 ? handleSubmit : handleNext}>
                  <div className="mb-6">
                    {currentField.type === 'textarea' ? (
                      <textarea
                        key={currentField.name}
                        name={currentField.name}
                        placeholder={currentField.placeholder}
                        required={currentField.required}
                        defaultValue={formData[currentField.name] || ''}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink focus:border-transparent resize-none text-lg"
                        autoFocus
                      />
                    ) : (
                      <input
                        key={currentField.name}
                        type={currentField.type}
                        name={currentField.name}
                        placeholder={currentField.placeholder}
                        required={currentField.required}
                        defaultValue={formData[currentField.name] || ''}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-pink focus:border-transparent text-lg"
                        autoFocus
                      />
                    )}
                  </div>

                  <div className="flex gap-3">
                    {currentStep > 0 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex-1 px-6 py-3 bg-gray-200 text-charcoal font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        Back
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 bg-charcoal text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : currentStep === fields.length - 1 ? 'Submit Enquiry' : 'Next'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
