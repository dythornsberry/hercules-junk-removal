import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/sections/Header.jsx';
import Hero from '@/components/sections/Hero.jsx';
import TrustBadgeStrip from '@/components/sections/TrustBadgeStrip.jsx';
import HowItWorks from '@/components/sections/HowItWorks.jsx';
import HercJunkPricingSection from '@/components/sections/HercJunkPricingSection.jsx';
import GoogleReviewsWidget from '@/components/sections/GoogleReviewsWidget.jsx';
import ServiceAreaMap from '@/components/sections/ServiceAreaMap.jsx';
import FAQ from '@/components/sections/FAQ.jsx';
import Cta from '@/components/sections/Cta.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>HercJunk | Professional Junk Removal Services</title>
        <meta name="description" content="Fast, affordable, and easy junk removal services. Book online in 60 seconds." />
      </Helmet>
      
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Immediate Trust & Social Proof before scrolling further */}
      <TrustBadgeStrip />
      
      {/* 3. Value Proposition / How it Works */}
      <HowItWorks />
      
      {/* 4. Transparent Pricing */}
      <HercJunkPricingSection />

      {/* 5. Deeper Social Proof (Moved down after value & pricing are established) */}
      <GoogleReviewsWidget />

      {/* 6. Service Area Qualification */}
      <ServiceAreaMap />
      
      {/* 7. Objection Handling */}
      <FAQ />
      
      {/* 8. Final Conversion */}
      <Cta />
    </>
  );
};

export default HomePage;