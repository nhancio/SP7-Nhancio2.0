import React from 'react';

const TermsAndConditions = () => (
  <section className="max-w-4xl mx-auto py-20 px-4">
    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Terms and Conditions</h1>
      <p className="text-gray-600 mb-8 text-lg">Effective Date: 28/08/2025</p>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-6">
          Welcome to Nhancio. By accessing or using our website and services, you agree to the following Terms and Conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-700 mb-6">
          By visiting our website or engaging with our services, you confirm that you have read, understood, and agree to these Terms & Conditions. If you do not agree, please do not use our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Services</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Nhancio provides consultancy and solutions in AI, automation, data science, software development, marketing, and product design.</li>
          <li>Services are customized to each client's needs.</li>
          <li>All proposals, timelines, and deliverables will be agreed upon in writing before work begins.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Client Responsibilities</h2>
        <p className="text-gray-700 mb-4">To ensure successful project delivery, clients agree to:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Provide accurate and timely information.</li>
          <li>Respond promptly to communication and feedback requests.</li>
          <li>Respect agreed payment schedules.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Payments</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Fees, billing terms, and payment schedules will be outlined in a proposal or contract before services begin.</li>
          <li>Unless otherwise stated, all fees are non-refundable.</li>
          <li>Late payments may result in delays or suspension of services.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Intellectual Property</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Any pre-existing intellectual property of Nhancio (such as tools, frameworks, or code libraries) remains our property.</li>
          <li>Final deliverables created specifically for a client will be transferred to them upon full payment, unless otherwise agreed.</li>
          <li>Clients must not resell or reuse Nhancio's proprietary assets without written permission.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Confidentiality</h2>
        <p className="text-gray-700 mb-6">
          Both Nhancio and the client agree to protect confidential information shared during the course of the project. Neither party may disclose such information to third parties without prior written consent.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Limitation of Liability</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Nhancio will make every effort to deliver high-quality services, but we cannot guarantee that results will meet all business expectations or eliminate all risks.</li>
          <li>We are not liable for indirect, incidental, or consequential damages arising from the use of our services.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Termination</h2>
        <p className="text-gray-700 mb-6">
          Either party may terminate the agreement with written notice if the other party breaches the terms and fails to resolve the issue within a reasonable timeframe. Upon termination, clients must pay for all completed work up to that date.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">9. Governing Law</h2>
        <p className="text-gray-700 mb-6">
          These Terms & Conditions will be governed by and construed in accordance with the laws of India.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">10. Changes to Terms</h2>
        <p className="text-gray-700 mb-6">
          Nhancio reserves the right to update or modify these Terms & Conditions at any time. Changes will be effective immediately upon posting on this website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">11. Contact Us</h2>
        <p className="text-gray-700 mb-4">If you have any questions about these Terms & Conditions, please contact us:</p>
        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <p className="text-gray-700 mb-2">📧 <a href="mailto:nithindidigam@nhancio.com" className="text-purple-600 hover:text-purple-700">nithindidigam@nhancio.com</a></p>
          <p className="text-gray-700">🌐 <a href="https://www.nhancio.com" className="text-purple-600 hover:text-purple-700">www.nhancio.com</a></p>
        </div>
      </div>
    </div>
  </section>
);

export default TermsAndConditions; 