import { Instagram, Twitter, Facebook, Music, Image } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pb-12 border-b border-white/20">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img
              src="/images/White-logo.png"
              alt="KOMO-YUKI"
              className="h-8 md:h-10 w-auto mb-4"
            />
            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Japanese-Inspired Asian Gifts, Figures & Collectibles
            </p>
            <p className="text-white/70 leading-relaxed text-sm mb-4">
              KOMO-YUKI is a modern Asian lifestyle retail brand curating design-led gifts, Japanese figures, blind box collectibles, stationery, home objects, and culture-driven impulse items.
            </p>
            <p className="text-white/70 leading-relaxed text-sm">
              Inspired by Japan, Korea, and contemporary Asian pop culture — designed for high-street retail and global expansion.
            </p>
          </div>

          {/* Registered Address */}
          <div>
            <h4 className="font-outfit text-base font-semibold mb-4 uppercase tracking-wide">
              Registered Address
            </h4>
            <p className="text-white/70 leading-relaxed text-sm mb-2">
              128 City Road<br />
              London, EC1V 2NX<br />
              United Kingdom
            </p>
            <p className="text-white/70 leading-relaxed text-sm">
              <span className="font-semibold text-white">KOMO-YUKI LTD</span><br />
              Registered in England & Wales<br />
              Company Number: PENDING
            </p>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-outfit text-base font-semibold mb-4 uppercase tracking-wide">
              General & Head Office Enquiries
            </h4>
            <a
              href="mailto:duncan@komoyuki.com"
              className="text-blush-pink hover:underline text-sm block mb-6"
            >
              duncan@komoyuki.com
            </a>

            <h4 className="font-outfit text-base font-semibold mb-4 uppercase tracking-wide">
              Follow KOMO-YUKI
            </h4>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blush-pink hover:scale-110 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blush-pink hover:scale-110 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blush-pink hover:scale-110 transition-all duration-300 group"
                aria-label="TikTok"
              >
                <Music className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blush-pink hover:scale-110 transition-all duration-300 group"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blush-pink hover:scale-110 transition-all duration-300 group"
                aria-label="Pinterest"
              >
                <Image className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="mb-8 pb-8 border-b border-white/20">
          <p className="text-white/60 text-xs leading-relaxed max-w-5xl">
            KOMO-YUKI is a privately held multi-format retail brand with international operations and in-house technology, sourcing, and design. Select locations may introduce additional experience-led concepts as the brand evolves.
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs uppercase tracking-wide">
            © 2026 KOMO-YUKI. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/60 uppercase tracking-wide">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span>|</span>
            <a href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
