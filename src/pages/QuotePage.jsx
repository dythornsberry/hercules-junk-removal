import React from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle2 } from 'lucide-react';
import CallbackSection from '@/components/sections/CallbackSection.jsx';

const QuotePage = () => {
  return (
    <>
      <Helmet>
        <title>Get a Free Quote | Hercules Junk Removal</title>
        <meta name="description" content="Send your name and number for a junk removal quote from Hercules Junk Removal in Kenmore, WA." />
        <link rel="canonical" href="https://hercjunk.com/quote" />
        <meta property="og:image" content="https://hercjunk.com/images/hercules-truck.jpg" />
      </Helmet>
      <div className="flex-grow bg-black min-h-[35vh] flex items-center justify-center border-b-8 border-[#FFC107]">
        <div className="container mx-auto px-4 py-16 text-center">
          <span className="inline-block rotate-[1deg] bg-[#FFC107] text-black font-black tracking-[0.2em] uppercase text-xs px-3 py-1 border-2 border-black shadow-[3px_3px_0_#000] mb-6">
            Free Quote
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Send your <span className="text-[#FFC107]">junk removal</span> info
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-2xl mx-auto font-bold">
            Name and phone. That's it.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-black text-gray-300 mb-4">
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
        description="Name, phone, what needs to go."
      />
    </>
  );
};

export default QuotePage;
