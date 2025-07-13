import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  return {
    title: 'Privacy Policy - Chinese Name Generator',
    description: 'Privacy Policy for Chinese Name Generator website. Learn how we collect, use, and protect your personal information.',
    robots: 'index, follow'
  }
}

export default async function PrivacyPage({ params }: PageProps) {
  const resolvedParams = await params
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <p className="text-sm text-gray-600 mb-8">
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            When you use our Chinese Name Generator service, we may collect the following information:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Information you provide when generating names (gender preferences, style preferences, etc.)</li>
            <li>Usage data and analytics about how you interact with our website</li>
            <li>Device information (browser type, operating system, IP address)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and improve our name generation services</li>
            <li>Analyze website usage and optimize user experience</li>
            <li>Serve relevant advertisements through our advertising partners</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Advertising and Third-Party Services</h2>
          <p className="mb-4">
            Our website uses Ezoic and Google AdSense to display advertisements. These services may collect and use information about your visits to this and other websites to provide relevant advertisements.
          </p>
          <h3 className="text-xl font-medium text-gray-700 mb-3">Ezoic</h3>
          <p className="mb-4">
            We use Ezoic to optimize our website and serve advertisements. Ezoic may collect information about your use of our website including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your IP address and device information</li>
            <li>Your browsing behavior on our website</li>
            <li>Cookies and similar technologies</li>
          </ul>
          <p className="mb-4">
            For more information about Ezoic's privacy practices, please visit: 
            <a href="https://www.ezoic.com/privacy-policy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Ezoic Privacy Policy
            </a>
          </p>

          <h3 className="text-xl font-medium text-gray-700 mb-3">Google AdSense</h3>
          <p className="mb-4">
            We use Google AdSense to display advertisements. Google may use cookies and other technologies to serve ads based on your visits to our site and other sites on the internet.
          </p>
          <p className="mb-4">
            You can opt out of personalized advertising by visiting: 
            <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Google Ad Settings
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and serve personalized advertisements. You can control cookies through your browser settings.
          </p>
          <p className="mb-4">Types of cookies we use:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website</li>
            <li><strong>Advertising cookies:</strong> Used to serve relevant advertisements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Sharing and Third Parties</h2>
          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Advertising partners (Ezoic, Google AdSense) for ad serving purposes</li>
            <li>Analytics providers to understand website usage</li>
            <li>Service providers who assist in website operations</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights and Choices</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access, update, or delete your personal information</li>
            <li>Opt out of personalized advertising</li>
            <li>Control cookie settings through your browser</li>
            <li>Request information about how your data is processed</li>
          </ul>
          <p className="mb-4">
            For residents of the European Union, you have additional rights under GDPR including the right to data portability and the right to be forgotten.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. International Data Transfers</h2>
          <p className="mb-4">
            Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibent text-gray-800 mb-4">9. Children's Privacy</h2>
          <p className="mb-4">
            Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page with an updated "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us through our website contact form or via email.
          </p>
        </section>

        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Consent Management</h3>
          <p className="text-sm text-gray-600">
            By using our website, you consent to the collection and use of your information as described in this Privacy Policy. 
            You can withdraw your consent at any time by adjusting your browser settings or contacting us directly.
          </p>
        </div>
      </div>
    </div>
  )
}