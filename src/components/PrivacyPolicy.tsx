import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-yellow-50">
      <div id="privacy-policy" className="max-w-4xl mx-auto px-4 py-8 pt-20 bg-yellow-50 text-gray-800">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-semibold mb-2 text-yellow-500">Privacy Policy</h1>
          <p className="text-lg text-gray-700">
            At shoeholic.site, your privacy is of utmost importance to us.
          </p>
        </header>

        <section>
          <p className="mb-4">
            This Privacy Policy outlines how we collect, use, and protect your
            personal information when you visit our website,{" "}
            <a
              href="https://shoeholic.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 underline"
            >
              https://shoeholic.site/
            </a>
            (the "Site"). By using this Site, you agree to the terms of this Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">1. Information We Collect</h2>
          <ul className="list-inside list-disc ml-6 text-gray-800">
            <li>
              <strong>Personal Identification Information:</strong> Name, email
              address, phone number, billing and shipping address, payment
              information, etc.
            </li>
            <li>
              <strong>Non-Personal Identification Information:</strong> Browser
              type, device type, IP address, location data, pages visited, and
              browsing behavior.
            </li>
            <li>
              <strong>Payment Information:</strong> We use third-party payment
              processors (e.g., PayPal, Stripe) to handle your payment data
              securely. We do not store your full payment information.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">2. How We Use Your Information</h2>
          <ul className="list-inside list-disc ml-6 text-gray-800">
            <li>To process and fulfill your orders, including payment processing and shipping.</li>
            <li>To send you order confirmations, shipping updates, and other transactional communications.</li>
            <li>To send promotional emails, offers, and updates (with your consent).</li>
            <li>To improve customer service, the Site's functionality, and your shopping experience.</li>
            <li>To respond to inquiries and provide customer support.</li>
            <li>To comply with legal obligations or enforce our terms and conditions.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">3. Cookies and Tracking Technologies</h2>
          <p className="mb-4 text-gray-800">
            We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device to collect and store information like your preferences, shopping cart, and usage patterns on the Site. You can manage or disable cookies through your browser settings. However, disabling cookies may affect some Site functionality.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">4. Third-Party Services</h2>
          <p className="mb-4 text-gray-800">
            We may use third-party services for various functions, including payment processing, analytics, and advertising. These third parties may collect and use information in accordance with their own privacy policies.
          </p>
          <ul className="list-inside list-disc ml-6 text-gray-800">
            <li>Payment Processors: Stripe, PayPal, etc.</li>
            <li>Analytics: Google Analytics, etc.</li>
            <li>Advertising: Google Ads, Facebook Ads, etc.</li>
          </ul>
          <p className="mt-4 text-gray-800">
            Please refer to the privacy policies of these third parties for more details on how your information is used.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">5. Data Security</h2>
          <p className="mb-4 text-gray-800">
            We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal data, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">6. Your Data Rights</h2>
          <p className="mb-4 text-gray-800">
            Depending on your jurisdiction, you may have certain rights regarding your personal data, including:
          </p>
          <ul className="list-inside list-disc ml-6 text-gray-800">
            <li>The right to access and obtain a copy of your personal data.</li>
            <li>The right to request corrections to any inaccurate or incomplete information.</li>
            <li>The right to request the deletion of your personal data.</li>
            <li>The right to object to or restrict the processing of your personal data.</li>
          </ul>
          <p className="mt-4 text-gray-800">
            To exercise these rights, please contact us at [insert email address]. We will respond to your request within a reasonable timeframe.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">7. Children's Privacy</h2>
          <p className="mb-4 text-gray-800">
            shoeholic.site is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have collected personal information from a child under 13, please contact us immediately, and we will take steps to remove such information from our records.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">8. Changes to This Privacy Policy</h2>
          <p className="mb-4 text-gray-800">
            We may update this Privacy Policy from time to time. When we do, we will post the updated policy on this page and update the "Effective Date" at the top of the policy. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">9. Contact Us</h2>
          <p className="mb-4 text-gray-800">
            If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:
          </p>
          <p>
            <a
              href="https://shoeholic.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 underline"
            >
              https://shoeholic.site/
            </a>
          </p>
        </section>
      </div>
    </div>

  );
};

export default PrivacyPolicy;
