import React from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle2 } from 'lucide-react';
import CallbackSection from '@/components/sections/CallbackSection.jsx';

const QuotePage = () => {
  return (
    <>
      <Helmet>
        <title>Get a Free Quote | Hercules Junk Removal</title>
        <meta name="description" content="Send your name and number for a junk removal quote. We will call or text you back with a straight price." />
        <link rel="canonical" href="https://hercjunk.com/quote" />
        <meta property="og:image" content="https://hercjunk.com/images/hercules-truck.jpg" />
      </Helmet>
      <div className="flex-grow bg-black min-h-[40vh] flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Send us your <span className="text-yellow-400">junk removal</span> info
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Name, phone, and a rough idea of what you need hauled. We will call or text you back with the next step.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-gray-300 mb-4">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFC107]" /> Free Estimates</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFC107]" /> Same-Day Available</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFC107]" /> Licensed & Insured</span>
          </div>
        </div>
      </div>
      <CallbackSection
        sectionId="callback-form-quote"
        sourceLabel="Quote Page"
        heading="Tell us what you've got"
        description="Drop your name and number. We will text or call you back."
      />
    </>
  );
};

export default QuotePage;
