import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CookiesPage() {
  return (
    <main>
      <Header />
      <div className="pt-36 pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600 mb-2">KOMO-YUKI LTD</p>
          <p className="text-sm text-gray-500 mb-12">Last updated: January 2026</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Cookie Policy explains how KOMO-YUKI LTD ("KOMO-YUKI", "we", "us", or "our") uses cookies and similar technologies when you visit our website.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cookies are small text files that are placed on your device when you visit a website. They help websites function properly, improve user experience, and provide information to website operators.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Cookies may be session cookies (deleted when you close your browser) or persistent cookies (stored on your device for a set period).
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              KOMO-YUKI uses cookies only where necessary and appropriate, in line with UK data protection laws.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Cookies are used to:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
              <li>Ensure the website functions correctly</li>
              <li>Maintain basic security and performance</li>
              <li>Understand how visitors interact with the website (where enabled)</li>
              <li>Improve content, structure, and user experience</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              We do not use cookies to sell personal data or create intrusive user profiles.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">3. Types of Cookies We Use</h2>

            <h3 className="font-outfit text-xl font-semibold text-charcoal mt-6 mb-3">a) Strictly Necessary Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              These cookies are essential for the website to operate and cannot be switched off.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              They include cookies that:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
              <li>Enable basic website functionality</li>
              <li>Support security and stability</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              These cookies do not require user consent.
            </p>

            <h3 className="font-outfit text-xl font-semibold text-charcoal mt-6 mb-3">b) Analytics & Performance Cookies (Where Enabled)</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              These cookies help us understand how visitors use the website so we can improve performance and usability.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              They may collect:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
              <li>Anonymous usage statistics</li>
              <li>Page visits and interaction patterns</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              Analytics cookies are only used with consent, where required.
            </p>

            <h3 className="font-outfit text-xl font-semibold text-charcoal mt-6 mb-3">c) Functional Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              These cookies allow the website to remember user preferences (such as language or region) where applicable.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In some cases, third-party services (such as analytics or embedded content) may place cookies on your device.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              KOMO-YUKI does not control these cookies and recommends reviewing the third party's privacy and cookie policies.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">5. Managing Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
              <li>Through the cookie banner or consent tool (where implemented)</li>
              <li>Through your browser settings</li>
              <li>By deleting stored cookies on your device</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              Please note that disabling certain cookies may affect website functionality.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">6. Cookie Consent</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Where required by law, KOMO-YUKI will request consent before placing non-essential cookies on your device.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              You may withdraw or change your consent at any time.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">7. Data Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Any personal data collected through cookies is handled in accordance with our <a href="/privacy" className="text-blush-pink hover:underline">Privacy Policy</a> and applicable UK data protection laws.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We may update this Cookie Policy from time to time to reflect legal or operational changes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              The latest version will always be available on our website.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">9. Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              For questions about cookies or data protection:
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>KOMO-YUKI LTD</strong><br />
              128 City Road<br />
              London, EC1V 2NX<br />
              United Kingdom
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Email:</strong> <a href="mailto:duncan@komoyuki.com" className="text-blush-pink hover:underline">duncan@komoyuki.com</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
