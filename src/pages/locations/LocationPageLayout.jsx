import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import HercJunkPricingSection from '@/components/sections/HercJunkPricingSection';
import Cta from '@/components/sections/Cta';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, CheckCircle2, MapPin, ArrowRight } from 'lucide-react';
import { openCalendlyPopup } from '@/lib/calendlyUtils.js';

const LocationPageLayout = ({
  city,
  h1,
  blurb,
  metaDescription,
  imageUrl,
  slug,
  zipCodes = [],
  neighborhoods = [],
  localContent = [],
  popularServices = [],
}) => {
  const businessPhoneNumber = '4254063445';
  const businessPhoneNumberFormatted = '(425) 406-3445';
  const canonicalUrl = `https://hercjunk.com/${slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Junk Removal in ${city}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Hercules Junk Removal",
      "telephone": "+14254063445"
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "addressRegion": "WA",
      "addressCountry": "US"
    },
    "description": metaDescription,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "99",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "99",
        "maxPrice": "729",
        "priceCurrency": "USD"
      }
    }
  };

  const handleBookClick = (e) => {
    e.preventDefault();
    openCalendlyPopup();
  };

  return (
    <>
      <Helmet>
        <title>{h1}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <div className="flex-grow bg-white text-black">
        <main>
          {/* Hero */}
          <section className="bg-[#FFC107] py-16 sm:py-20 px-4">
            <div className="container mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-black" />
                  <span className="text-sm font-bold uppercase tracking-wide text-black/70">Serving {city}, WA</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-black text-black mb-4 max-w-3xl mx-auto">{h1}</h1>
                <p className="text-lg sm:text-xl text-black/80 max-w-2xl mx-auto mb-8">{blurb}</p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                  <Button
                    onClick={handleBookClick}
                    className="bg-black text-white hover:bg-gray-800 font-black text-xl px-10 py-8 rounded-xl shadow-xl"
                  >
                    Book Now <ArrowRight className="w-6 h-6 ml-2" />
                  </Button>
                  <a href={`tel:${businessPhoneNumber}`} className="flex items-center gap-2 text-black font-bold px-8 py-6 rounded-xl border-2 border-black hover:bg-black/10 transition-all">
                    <Phone className="w-6 h-6" />
                    {businessPhoneNumberFormatted}
                  </a>
                </div>

                {imageUrl && (
                  <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-black">
                    <img
                      alt={`Hercules Junk Removal truck and crew in ${city}, WA`}
                      className="w-full h-auto"
                      src={imageUrl}
                      loading="lazy"
                    />
                  </div>
                )}
              </motion.div>
            </div>
          </section>

          {/* Local Content Sections */}
          {localContent.length > 0 && (
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4 max-w-4xl">
                {localContent.map((section, idx) => (
                  <div key={idx} className={idx > 0 ? 'mt-12' : ''}>
                    <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">{section.title}</h2>
                    <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Popular Services in This Area */}
          {popularServices.length > 0 && (
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8 text-center">Popular Services in {city}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {popularServices.map((svc, idx) => (
                    <Link key={idx} to={svc.link} className="flex items-center gap-3 p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#FFC107] transition-all group">
                      <CheckCircle2 className="w-6 h-6 text-[#FFC107] shrink-0" />
                      <div>
                        <span className="font-bold text-gray-900 group-hover:text-[#FF9500] transition-colors">{svc.name}</span>
                        <p className="text-sm text-gray-500">{svc.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Neighborhoods */}
          {neighborhoods.length > 0 && (
            <section className="py-12 bg-white">
              <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl font-black text-gray-900 mb-4 text-center">Neighborhoods We Serve in {city}</h2>
                <div className="flex flex-wrap justify-center gap-2">
                  {neighborhoods.map((n, idx) => (
                    <span key={idx} className="bg-gray-100 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                      {n}
                    </span>
                  ))}
                </div>
                {zipCodes.length > 0 && (
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Serving ZIP codes: {zipCodes.join(', ')}
                  </p>
                )}
              </div>
            </section>
          )}

          <HercJunkPricingSection />

          <Cta />

        </main>
      </div>
    </>
  );
};

export default LocationPageLayout;
