import React from 'react';
import { Helmet } from 'react-helmet';
import QuoteForm from '@/components/sections/QuoteForm';
import { Toaster } from '@/components/ui/toaster';


const QuotePage = () => {
  return (
    <>
      <Helmet>
        <title>Get a Free Junk Removal Quote | Hercules Junk</title>
        <meta name="description" content="Request a free, no-obligation quote for junk removal services from Hercules Junk. Fast, friendly, and transparent pricing." />
      </Helmet>
      <div className="flex-grow">
        <QuoteForm />
      </div>
      <Toaster />
    </>
  );
};

export default QuotePage;