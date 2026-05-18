import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const businessPhoneNumber = '4254063445';
  const businessPhoneNumberFormatted = '425-406-3445';

  return (
    <>
      <Helmet>
        <title>About Hercules Junk Removal | Kenmore, WA Junk Hauling</title>
        <meta name="description" content="Kenmore-based junk removal with fast response, a large box truck, fair pricing, and credit card payments. Serving Bothell, Kirkland, Lynnwood, and nearby." />
        <link rel="canonical" href="https://hercjunk.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Hercules Junk Removal | Kenmore, WA Junk Hauling" />
        <meta property="og:description" content="Kenmore-based junk removal with fast response, a large box truck, fair pricing, and credit card payments." />
        <meta property="og:url" content="https://hercjunk.com/about" />
        <meta property="og:image" content="https://hercjunk.com/images/hercules-truck.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dylan Thornsberry",
          "jobTitle": "Owner & Operator",
          "worksFor": { "@id": "https://hercjunk.com" },
          "address": { "@type": "PostalAddress", "addressLocality": "Kenmore", "addressRegion": "WA" }
        })}</script>
      </Helmet>
      <div className="flex-grow bg-yellow-400 text-black">
        <main>
          <section className="py-16 sm:py-20 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                  <h1 className="text-4xl sm:text-5xl font-black text-black mb-4">Kenmore Junk Removal That Gets It Done</h1>
                  <p className="text-lg text-black/80 mb-6">
                    Hercules Junk Removal is owned by Dylan and based in Kenmore, WA. Call for a fast quote or fill out the form.
                  </p>
                  <p className="text-lg text-black/80 mb-6">
                    The box truck is large, so most jobs fit in one load. That keeps the job simple and helps keep the price fair.
                  </p>
                  <p className="text-lg text-black/80 mb-6 font-bold">
                    Furniture, garage junk, yard waste, appliances, cleanouts, random piles in the driveway - point at it and it gets hauled.
                  </p>
                  <p className="text-lg text-black/80 mb-6">
                    Licensed and insured. Venmo, Zelle, card, and cash are fine. Quick pickup, easy scheduling, reliable service.
                  </p>
                  <p className="text-lg text-black/80 mb-6">
                    Serving Kenmore, Bothell, Kirkland, Lynnwood, Shoreline, Lake Forest Park, Woodinville, and nearby.
                  </p>
                  <p className="text-lg text-black/80 mb-8 font-bold">
                    Fast quote. Big truck. Easy cleanup.
                  </p>
                  <div className="flex flex-col gap-4 w-full">
                    <Button
                      size="lg"
                      className="bg-black text-white hover:bg-gray-800 text-xl font-bold py-7 px-10 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full"
                      onClick={() => window.location.href = '/quote'}
                    >
                      Get a Quote <ArrowRight className="ml-2 h-6 w-6" />
                    </Button>
                    <a href={`tel:${businessPhoneNumber}`} className="w-full">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-black text-black hover:bg-black hover:text-white text-xl font-bold py-7 px-10 rounded-xl w-full"
                      >
                        <Phone className="mr-2 h-6 w-6" />
                        {businessPhoneNumberFormatted}
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img  
                    className="rounded-2xl shadow-2xl max-w-full h-auto" 
                    alt="Dylan, owner of Hercules Junk Removal, taking a selfie in a garage at a job site, wearing a Hercules hat."
                    src="https://horizons-cdn.hostinger.com/043d3248-867c-48dc-bfa5-01141b7ae321/e21a9b995140fd6b8cd0fc1ea3a96669.jpg" 
                    loading="lazy"
                    style={{ transform: 'rotate(90deg)' }}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Toaster />
      </div>
    </>
  );
};

export default AboutPage;
