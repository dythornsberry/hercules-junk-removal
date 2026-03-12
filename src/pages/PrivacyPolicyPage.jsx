import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Hercules Junk Removal</title>
        <meta name="description" content="Our privacy policy explains how Hercules Junk Removal collects and uses your data for quotes and services." />
      </Helmet>
      <div className="flex-grow bg-gray-50 text-black">
        <main className="container mx-auto px-4 py-16 sm:py-20 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 text-center">Privacy Policy</h1>
          <p className="text-lg text-gray-700 mb-8 text-center">Last Updated: December 28, 2025</p>

          <section className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">1. What we collect</h2>
            <p className="text-base text-gray-700">
              When you ask for a quote, we ask for your name and phone number.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">2. How we use it</h2>
            <p className="text-base text-gray-700">
              We only use your info to contact you about your junk removal job. That's it. We might call or text you to set up a time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">3. Sharing info</h2>
            <p className="text-base text-gray-700">
              We don't sell your info. We keep it to ourselves to get the job done.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">4. Security</h2>
            <p className="text-base text-gray-700">
              We keep your data safe and secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">5. Your Consent</h2>
            <p className="text-base text-gray-700">
              By using our site, you agree to this policy.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;