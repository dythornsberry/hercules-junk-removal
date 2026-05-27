import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/sections/Header.jsx';
import Hero from '@/components/sections/Hero.jsx';
import TrustBadgeStrip from '@/components/sections/TrustBadgeStrip.jsx';
import HowItWorks from '@/components/sections/HowItWorks.jsx';
import BeforeAfter from '@/components/sections/BeforeAfter.jsx';
import WhatWeTake from '@/components/sections/WhatWeTake.jsx';
import VideoSection from '@/components/sections/VideoSection.jsx';
import HercJunkPricingSection from '@/components/sections/HercJunkPricingSection.jsx';
import GoogleReviewsWidget from '@/components/sections/GoogleReviewsWidget.jsx';
import LocalSeoBlock from '@/components/sections/LocalSeoBlock.jsx';
import ServiceAreaMap from '@/components/sections/ServiceAreaMap.jsx';
import DylanSection from '@/components/sections/DylanSection.jsx';
import FAQ from '@/components/sections/FAQ.jsx';
import CallbackSection from '@/components/sections/CallbackSection.jsx';
import Cta from '@/components/sections/Cta.jsx';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": "https://hercjunk.com/#localbusiness",
  "name": "Hercules Junk Removal",
  "description": "Kenmore-based junk removal serving Kenmore, Bothell, Kirkland, Lynnwood, and nearby. Fast pickup, affordable prices, and a big box truck.",
  "url": "https://hercjunk.com",
  "telephone": "+14254063445",
  "email": "dythornsberry@gmail.com",
  "priceRange": "$99-$649",
  "paymentAccepted": "Cash, Credit Card, Venmo, Zelle",
  "currenciesAccepted": "USD",
  "image": "https://hercjunk.com/images/hercules-truck.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kenmore",
    "addressRegion": "WA",
    "postalCode": "98028",
    "addressCountry": "US"
  },
  "founder": {
    "@type": "Person",
    "name": "Dylan Thornsberry",
    "jobTitle": "Owner & Operator"
  },
  "sameAs": [
    "https://www.youtube.com/@hercjunk"
  ],
  "openingHours": "Mo-Su 00:00-23:59",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Kenmore", "sameAs": "https://en.wikipedia.org/wiki/Kenmore,_Washington" },
    { "@type": "City", "name": "Bothell", "sameAs": "https://en.wikipedia.org/wiki/Bothell,_Washington" },
    { "@type": "City", "name": "Kirkland", "sameAs": "https://en.wikipedia.org/wiki/Kirkland,_Washington" },
    { "@type": "City", "name": "Lynnwood", "sameAs": "https://en.wikipedia.org/wiki/Lynnwood,_Washington" },
    { "@type": "City", "name": "Woodinville", "sameAs": "https://en.wikipedia.org/wiki/Woodinville,_Washington" },
    { "@type": "City", "name": "Lake Forest Park", "sameAs": "https://en.wikipedia.org/wiki/Lake_Forest_Park,_Washington" },
    { "@type": "City", "name": "Mountlake Terrace", "sameAs": "https://en.wikipedia.org/wiki/Mountlake_Terrace,_Washington" },
    { "@type": "City", "name": "Shoreline", "sameAs": "https://en.wikipedia.org/wiki/Shoreline,_Washington" },
    { "@type": "City", "name": "Seattle", "sameAs": "https://en.wikipedia.org/wiki/Seattle" },
    { "@type": "City", "name": "Bellevue", "sameAs": "https://en.wikipedia.org/wiki/Bellevue,_Washington" },
    { "@type": "City", "name": "Redmond", "sameAs": "https://en.wikipedia.org/wiki/Redmond,_Washington" },
    { "@type": "City", "name": "Sammamish", "sameAs": "https://en.wikipedia.org/wiki/Sammamish,_Washington" },
    { "@type": "City", "name": "Edmonds", "sameAs": "https://en.wikipedia.org/wiki/Edmonds,_Washington" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Junk Removal Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Household Junk Removal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Furniture Removal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Garage Cleanouts" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction Debris Removal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Yard Waste Removal" } }
    ]
  }
};

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Junk Removal Kenmore WA & Bothell | Same-Day Pickup | Hercules Junk Removal</title>
        <meta name="description" content="Kenmore-based junk removal serving Kenmore, Bothell, Kirkland, and nearby. Fast pickup, affordable prices, big box truck, and quotes from $99." />
        <link rel="canonical" href="https://hercjunk.com/" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Immediate Trust & Social Proof before scrolling further */}
      <TrustBadgeStrip />
      
      {/* 3. Value Proposition / How it Works */}
      <HowItWorks />
      
      {/* 4. Visual Proof of Work */}
      <BeforeAfter />

      {/* 4.25 What We Take — pre-qualifier, biggest objection killer */}
      <WhatWeTake />

      {/* 4.5 Video Proof */}
      <VideoSection />

      {/* 5. Transparent Pricing */}
      <HercJunkPricingSection />

      {/* 6. Deeper Social Proof */}
      <GoogleReviewsWidget />

      {/* 7. Local SEO / Service Area Qualification */}
      <LocalSeoBlock />

      {/* 8. Service Area Qualification & Local Connection */}
      <ServiceAreaMap />
      <DylanSection />
      
      {/* 8. Objection Handling */}
      <FAQ />

      {/* 8.5 Secondary Lead Capture */}
      <CallbackSection
        compact
        sectionId="callback-form-homepage"
        sourceLabel="Homepage"
        heading="Want a quick quote?"
        description="Name, phone, what needs to go."
      />
      
      {/* 9. Final Conversion */}
      <Cta />
    </>
  );
};

export default HomePage;
