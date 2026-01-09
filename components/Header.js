'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [showFormatsDropdown, setShowFormatsDropdown] = useState(false)
  const router = useRouter()

  const handleLogoClick = (e) => {
    e.preventDefault()
    router.push('/')
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-[100px] md:h-[120px]">
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex items-center cursor-pointer">
            <img
              src="/images/Black-logo.png"
              alt="KOMO-YUKI"
              className="h-28 md:h-36 w-auto"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8" style={{ fontFamily: '"Noto Sans JP", sans-serif' }}>
            <Link href="/about" className="text-gray-700 hover:text-blush-pink transition-colors font-medium tracking-wide">
              About KOMO-YUKI
            </Link>
            <Link href="/landlords" className="text-gray-700 hover:text-blush-pink transition-colors font-medium tracking-wide">
              For Landlords
            </Link>
            <Link href="/brands" className="text-gray-700 hover:text-blush-pink transition-colors font-medium tracking-wide">
              For Brands
            </Link>

            {/* Store Formats with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowFormatsDropdown(true)}
              onMouseLeave={() => setShowFormatsDropdown(false)}
            >
              <Link
                href="/formats"
                className="text-gray-700 hover:text-blush-pink transition-colors font-medium tracking-wide"
              >
                Store Formats
              </Link>
              {showFormatsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
                  <Link
                    href="/formats"
                    className="block px-4 py-3 text-gray-700 hover:bg-blush-pink hover:text-white transition-colors font-medium"
                  >
                    Store Formats
                  </Link>
                  <Link
                    href="/signage"
                    className="block px-4 py-3 text-gray-700 hover:bg-blush-pink hover:text-white transition-colors font-medium"
                  >
                    Store Signage
                  </Link>
                </div>
              )}
            </div>

            <Link href="/locations" className="text-gray-700 hover:text-blush-pink transition-colors font-medium tracking-wide">
              Locations
            </Link>
            <Link href="/#contact" className="px-6 py-2.5 rounded-lg font-semibold tracking-wide transition-colors" style={{ backgroundColor: '#F6BCC8', color: '#2B2B2B' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#F4B6C2'} onMouseLeave={(e) => e.target.style.backgroundColor = '#F6BCC8'}>
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-charcoal">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
