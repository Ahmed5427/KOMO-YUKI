'use client'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-[100px] md:h-[120px]">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/Black-logo.png"
              alt="KOMO-YUKI"
              className="h-28 md:h-36 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8" style={{ fontFamily: '"Noto Sans JP", sans-serif' }}>
            <a href="#about" className="text-gray-700 hover:text-blush-pink transition-colors font-medium tracking-wide">
              About KOMO-YUKI
            </a>
            <a href="#landlords" className="text-gray-700 hover:text-blush-pink transition-colors font-medium tracking-wide">
              For Landlords
            </a>
            <a href="#brands" className="text-gray-700 hover:text-blush-pink transition-colors font-medium tracking-wide">
              For Brands
            </a>
            <a href="#formats" className="text-gray-700 hover:text-blush-pink transition-colors font-medium tracking-wide">
              Store Formats
            </a>
            <a href="#locations" className="text-gray-700 hover:text-blush-pink transition-colors font-medium tracking-wide">
              Locations
            </a>
            <a href="#contact" className="px-6 py-2.5 rounded-lg font-semibold tracking-wide transition-colors" style={{ backgroundColor: '#F6BCC8', color: '#2B2B2B' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#F4B6C2'} onMouseLeave={(e) => e.target.style.backgroundColor = '#F6BCC8'}>
              Contact Us
            </a>
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
