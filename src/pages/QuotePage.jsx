import React from 'react';
import { Helmet } from 'react-helmet';
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
      <main>
        <CallbackSection
          sectionId="callback-form-quote"
          sourceLabel="Quote Page"
          headingLevel="h1"
          heading="Get a free quote"
          description="Leave your number. Dylan will call to go over the job."
        />
      </main>
    </>
  );
};

export default QuotePage;
