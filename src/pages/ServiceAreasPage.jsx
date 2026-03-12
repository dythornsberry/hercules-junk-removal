import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceAreasPage = () => {
  const primaryAreas = [
    "Kenmore", "Bothell", "Kirkland", "Shoreline", "Lynnwood", "Lake Forest Park"
  ];

  const allAreas = [
    "Seattle", "Bellevue", "Redmond", "Woodinville", "Mill Creek", "Edmonds", "Mountlake Terrace", "Everett", "Renton", "Sammamish", "Issaquah", "Mercer Island"
  ];

  return (
    <>
      <Helmet>
        <title>Service Areas - Hercules Junk Removal | Greater Seattle</title>
        <meta name="description" content="We provide junk removal services across the Greater Seattle Area, including Kenmore, Bothell, Kirkland, Shoreline, Lynnwood, and many more cities." />
      </Helmet>
      <div className="flex-grow bg-yellow-400 text-black">
        <main className="container mx-auto px-4 py-16">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-black text-black mb-4">Our Service Areas</h1>
              <p className="text-lg sm:text-xl text-black/80 font-semibold">We proudly serve communities across the Greater Seattle Area.</p>
            </div>

            <div className="bg-black text-white p-8 rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">Full List of Cities We Serve</h2>
              <div className="columns-2 sm:columns-3 md:columns-4 gap-x-8">
                {[...primaryAreas, ...allAreas].sort().map((area, index) => (
                  <li key={index} className="flex items-center text-lg mb-2 break-inside-avoid">
                    <MapPin className="h-5 w-5 mr-3 text-yellow-400 flex-shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-6 text-center">Don't see your city? Give us a call or text!</p>
            </div>
            
            <div className="text-center mt-12">
                <img 
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                    alt="Map of the Greater Seattle Area highlighting service zones."
                 src="https://images.unsplash.com/photo-1649656946028-f34826284134" 
                 loading="lazy" />
            </div>
          </motion.div>
        </main>
        <Toaster />
      </div>
    </>
  );
};

export default ServiceAreasPage;