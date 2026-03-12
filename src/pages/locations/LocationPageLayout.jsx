import React from 'react';
import { Helmet } from 'react-helmet';
import Pricing from '@/components/sections/Pricing';
import SlimQuoteForm from '@/components/sections/SlimQuoteForm';
import { Toaster } from '@/components/ui/toaster';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const LocationPageLayout = ({ city, h1, blurb, metaDescription, imageUrl }) => {
  const businessPhoneNumber = '4254063445';
  const businessPhoneNumberFormatted = '425-406-3445';

  return (
    <>
      <Helmet>
        <title>{h1}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <div className="flex-grow bg-yellow-400 text-black">
        <main>
          <section className="bg-yellow-400 py-16 sm:py-20 px-4">
            <div className="container mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl sm:text-5xl font-black text-black mb-4 max-w-3xl mx-auto">{h1}</h1>
                <p className="text-lg sm:text-xl text-black/80 max-w-2xl mx-auto mb-8">{blurb}</p>
                <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-black">
                  <img 
                    alt={`Hercules Junk Removal crew with truck in ${city}`}
                    className="w-full h-auto"
                    src={imageUrl}
                  />
                </div>
              </motion.div>
            </div>
          </section>
          
          <Pricing />

          <section className="py-16 sm:py-20 bg-yellow-400 text-center px-4">
             <h2 className="text-3xl sm:text-4xl font-black text-black mb-4">Ready for a Clutter-Free Space?</h2>
             <p className="text-lg text-black/80 mb-8">Call or text us for the fastest response!</p>
             <a href={`tel:${businessPhoneNumber}`}>
                <Button
                  size="lg"
                  className="bg-black text-yellow-400 hover:bg-gray-800 text-xl font-bold py-6 px-10 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="mr-3 h-7 w-7" />
                  Call or Text: {businessPhoneNumberFormatted}
                </Button>
              </a>
          </section>

          <SlimQuoteForm location={city} />

        </main>
        <Toaster />
      </div>
    </>
  );
};

export default LocationPageLayout;