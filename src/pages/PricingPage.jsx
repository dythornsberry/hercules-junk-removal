import React from 'react';
import { Helmet } from 'react-helmet';
import HercJunkPricingSection from '@/components/sections/HercJunkPricingSection.jsx';

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Junk Removal Pricing | Hercules Junk Removal</title>
        <meta name="description" content="Junk removal prices by how much of the truck your load fills. Single items from $99. Kenmore, Bothell, Kirkland and nearby." />
        <link rel="canonical" href="https://hercjunk.com/pricing" />
      </Helmet>
      <div className="pt-20">
        <HercJunkPricingSection headingAs="h1" />
      </div>
    </>
  );
};

export default PricingPage;
