import React from 'react';
import { motion } from 'framer-motion';

const areas = [
  {
    name: 'Kenmore',
    description: 'Based in Kenmore, so this is usually our quickest area. Same-day pickup is often possible if the truck has room.'
  },
  {
    name: 'Bothell',
    description: 'From downtown Bothell to the surrounding neighborhoods, we haul furniture, yard waste, garage junk, and renovation debris.'
  },
  {
    name: 'Kirkland',
    description: 'Furniture, yard waste, garage junk, and cleanup jobs around Kirkland. Send a number and we will get you a quote.'
  },
  {
    name: 'Woodinville',
    description: 'In the heart of wine country, we help Woodinville residents clear out unwanted items. From old appliances to construction debris, we make it easy to reclaim your space so you can enjoy your home.'
  },
  {
    name: 'Lynnwood',
    description: 'Single items, furniture, garage cleanouts, and junk piles around Lynnwood. Call or text for a quote.'
  },
  {
    name: 'Lake Forest Park',
    description: 'Quick junk pickup in Lake Forest Park. We donate or recycle what we can and haul the rest to the right place.'
  },
  {
    name: 'Mountlake Terrace',
    description: 'Single item pickups, full garage cleanouts, and junk piles around Mountlake Terrace. Call or text for a quote.'
  },
];

const AreasWeServe = () => {
  return (
    <section id="areas-we-serve" className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">Service Areas</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Based in Kenmore and hauling across Bothell, Kirkland, Lynnwood, Woodinville, and nearby.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-bold text-black mb-3">{area.name}</h3>
              <p className="text-gray-700">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasWeServe;
