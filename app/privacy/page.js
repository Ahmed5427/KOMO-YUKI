import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <main>
      <Header />
      <div className="pt-36 pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-outfit text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mb-2">KOMO-YUKI LTD</p>
          <p className="text-sm text-gray-500 mb-12">Last updated: January 2026</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              KOMO-YUKI LTD ("KOMO-YUKI", "we", "us", or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, store, and protect personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              This policy applies to visitors to our website, landlords and agents, suppliers and brand partners, and any individuals who contact us or engage with KOMO-YUKI.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">1. Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-2"><strong>Legal Entity:</strong> KOMO-YUKI LTD</p>
            <p className="text-gray-700 leading-relaxed mb-2"><strong>Registered Address:</strong></p>
            <p className="text-gray-700 leading-relaxed mb-2 ml-4">
              128 City Road<br />
              London, EC1V 2NX<br />
              United Kingdom
            </p>
            <p className="text-gray-700 leading-relaxed mb-6"><strong>Contact Email:</strong> duncan@komoyuki.com</p>
            <p className="text-gray-700 leading-relaxed mb-8">
              KOMO-YUKI LTD is the data controller responsible for your personal data.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect and process the following categories of personal data:
            </p>

            <h3 className="font-outfit text-xl font-semibold text-charcoal mt-6 mb-3">a) Information You Provide Directly</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Job title</li>
              <li>Property details (for landlord or agent enquiries)</li>
              <li>Product or brand information (for supplier enquiries)</li>
              <li>Any information you submit via contact forms or email correspondence</li>
            </ul>

            <h3 className="font-outfit text-xl font-semibold text-charcoal mt-6 mb-3">b) Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referral source</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              This data is collected via cookies and similar technologies (see Section 8).
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use your personal data for the following purposes:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
              <li>To respond to enquiries from landlords, agents, suppliers, and partners</li>
              <li>To assess retail locations or partnership opportunities</li>
              <li>To manage business communications and relationships</li>
              <li>To improve our website and user experience</li>
              <li>To comply with legal or regulatory obligations</li>
              <li>To protect our business against fraud, misuse, or security risks</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              We do not sell or rent your personal data to third parties.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">4. Legal Basis for Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Under UK GDPR, we rely on the following lawful bases:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
              <li><strong>Legitimate Interests:</strong> For operating and growing our retail business, responding to enquiries, and managing relationships.</li>
              <li><strong>Consent:</strong> Where you have explicitly provided consent (e.g., submitting a contact form).</li>
              <li><strong>Legal Obligation:</strong> Where processing is required by law or regulation.</li>
            </ul>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">5. Data Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may share personal data only where necessary and appropriate, including with:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
              <li>Professional advisers (legal, accounting, or property consultants)</li>
              <li>Technology and hosting providers supporting our website and systems</li>
              <li>Regulatory or law enforcement authorities, where legally required</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              All third parties are required to respect the security and confidentiality of your data.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We retain personal data only for as long as necessary:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
              <li>Enquiry and correspondence data is retained for a reasonable business period</li>
              <li>Supplier and partner data may be retained for ongoing or potential relationships</li>
              <li>Data required for legal or regulatory reasons is retained as required by law</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              When data is no longer required, it is securely deleted or anonymised.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">7. Your Data Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Under UK data protection law, you have the right to:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request the deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time (where consent applies)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              To exercise your rights, contact: <a href="mailto:duncan@komoyuki.com" className="text-blush-pink hover:underline">duncan@komoyuki.com</a>
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO):<br />
              <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blush-pink hover:underline">https://www.ico.org.uk</a>
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">8. Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our website may use cookies to improve functionality and analyse traffic. Cookies do not typically identify you personally.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              You can control or disable cookies via your browser settings. Further details may be provided in a separate <a href="/cookies" className="text-blush-pink hover:underline">Cookie Policy</a> if required.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">9. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We implement appropriate technical and organisational measures to protect personal data against unauthorised access, loss, misuse, or disclosure.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              While no system is completely secure, we take data protection seriously and continuously review our safeguards.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">10. International Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              If personal data is transferred outside the UK, we ensure appropriate safeguards are in place in accordance with UK GDPR requirements.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We may update this Privacy Policy from time to time to reflect legal, operational, or business changes. The latest version will always be available on our website.
            </p>

            <h2 className="font-outfit text-2xl font-bold text-charcoal mt-8 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              For any privacy-related questions or requests:
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Email:</strong> <a href="mailto:duncan@komoyuki.com" className="text-blush-pink hover:underline">duncan@komoyuki.com</a><br />
              <strong>Company:</strong> KOMO-YUKI LTD
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
