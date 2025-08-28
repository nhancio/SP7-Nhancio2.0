import React from 'react';

const PrivacyPolicy = () => (
  <section className="max-w-4xl mx-auto py-20 px-4">
    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
      <p className="text-gray-600 mb-8 text-lg">Effective Date: 28/08/2025</p>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-6">
          At Nhancio, we value your trust and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, use our services, or interact with us.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li><strong>Personal Information:</strong> Name, email address, phone number, or other details you share with us through forms or direct communication.</li>
          <li><strong>Usage Data:</strong> Information about how you use our website, such as IP address, browser type, and pages visited.</li>
          <li><strong>Cookies & Analytics:</strong> Basic tracking to improve user experience and understand how visitors interact with our site.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">We use the information we collect to:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Provide and improve our services.</li>
          <li>Respond to inquiries and communicate with you.</li>
          <li>Personalize your experience with our website and offerings.</li>
          <li>Share relevant updates, if you've opted in.</li>
          <li>Ensure the security and proper functioning of our site.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Sharing Your Information</h2>
        <p className="text-gray-700 mb-4">We do not sell or rent your personal data.</p>
        <p className="text-gray-700 mb-4">We may share information only in these cases:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>With trusted third-party service providers (e.g., hosting, analytics, payment processors) who assist us in running our business.</li>
          <li>If required by law or to protect our rights, property, or safety.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Your Choices & Rights</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>You can request access to, correction of, or deletion of your personal data at any time.</li>
          <li>You may opt out of receiving promotional emails by clicking the unsubscribe link in our communications.</li>
          <li>You can disable cookies through your browser settings.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Data Security</h2>
        <p className="text-gray-700 mb-6">
          We take reasonable technical and organizational measures to safeguard your personal information. While no system is 100% secure, we work hard to protect your data against unauthorized access.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Children's Privacy</h2>
        <p className="text-gray-700 mb-6">
          Our services are not directed to children under 13, and we do not knowingly collect personal data from them.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Changes to This Policy</h2>
        <p className="text-gray-700 mb-6">
          We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised "Effective Date."
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Contact Us</h2>
        <p className="text-gray-700 mb-4">If you have any questions about this Privacy Policy or how your data is handled, please contact us at:</p>
        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <p className="text-gray-700 mb-2">📧 <a href="mailto:nithindidigam@nhancio.com" className="text-purple-600 hover:text-purple-700">nithindidigam@nhancio.com</a></p>
          <p className="text-gray-700">🌐 <a href="https://www.nhancio.com" className="text-purple-600 hover:text-purple-700">www.nhancio.com</a></p>
        </div>
      </div>
    </div>
  </section>
);

export default PrivacyPolicy; 