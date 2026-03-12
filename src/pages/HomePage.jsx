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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://herculesjunkremoval.com",
  "name": "Hercules Junk Removal",
  "description": "Fast, affordable junk removal in Kenmore, Bothell, Kirkland & Greater Seattle. Single items from $99. Same-day service available.",
  "url": "https://herculesjunkremoval.com",
  "telephone": "+14254063445",
  "priceRange": "$99-$729",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "08:00",
    "closes": "20:00"
  },
  "areaServed": [
    { "@type": "City", "name": "Kenmore", "sameAs": "https://en.wikipedia.org/wiki/Kenmore,_Washington" },
    { "@type": "City", "name": "Bothell", "sameAs": "https://en.wikipedia.org/wiki/Bothell,_Washington" },
    { "@type": "City", "name": "Kirkland", "sameAs": "https://en.wikipedia.org/wiki/Kirkland,_Washington" },
    { "@type": "City", "name": "Lynnwood", "sameAs": "https://en.wikipedia.org/wiki/Lynnwood,_Washington" },
    { "@type": "City", "name": "Woodinville", "sameAs": "https://en.wikipedia.org/wiki/Woodinville,_Washington" },
    { "@type": "City", "name": "Lake Forest Park", "sameAs": "https://en.wikipedia.org/wiki/Lake_Forest_Park,_Washington" },
    { "@type": "City", "name": "Mountlake Terrace", "sameAs": "https://en.wikipedia.org/wiki/Mountlake_Terrace,_Washington" },
    { "@type": "City", "name": "Shoreline", "sameAs": "https://en.wikipedia.org/wiki/Shoreline,_Washington" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Junk Removal Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Household Junk Removal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Furniture Removal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Garage Cleanouts" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction Debris Removal" } }
    ]
  }
};

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Junk Removal in Kenmore & Greater Seattle from $99 | Hercules Junk Removal</title>
        <meta name="description" content="Fast, affordable junk removal in Kenmore, Bothell, Kirkland & Greater Seattle. Single items from $99. Book online in 60 seconds. Same-day service available. Licensed & insured." />
        <link rel="canonical" href="https://herculesjunkremoval.com/" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
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