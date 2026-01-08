export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-white/20">
          <div>
            <h3 className="font-outfit text-2xl font-semibold mb-2">
              KOMO-YUKI
            </h3>
            <p className="text-white/80">
              Japanese-Inspired Asian Gifts & Toys Retail
            </p>
          </div>

          <div>
            <h4 className="font-outfit text-lg font-semibold mb-4">
              Registered Address
            </h4>
            <p className="text-white/80 leading-relaxed">
              128 City Road<br />
              London, EC1V 2NX
            </p>
          </div>

          <div>
            <h4 className="font-outfit text-lg font-semibold mb-4">
              Head Office Enquiries
            </h4>
            <a
              href="mailto:duncan@komoyuki.com"
              className="text-blush-pink hover:underline"
            >
              duncan@komoyuki.com
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            &copy; 2025 KOMO-YUKI. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
