import React from 'react';
import { motion } from 'framer-motion';

const areas = [
  {
    name: 'Kenmore',
    description: 'As a Kenmore-based business, we are your neighbors! We offer the fastest response times for junk removal right here at home, whether you are near Saint Edward State Park or closer to the Burke-Gilman Trail.'
  },
  {
    name: 'Bothell',
    description: 'From downtown Bothell to the sprawling neighborhoods, we provide quick and reliable junk hauling. We help families and businesses keep their properties clean, whether you are renovating or just decluttering your space.'
  },
  {
    name: 'Kirkland',
    description: 'Serving the beautiful city of Kirkland, we handle everything from old furniture removal in Moss Bay to yard waste cleanup in Juanita. We respect your property and ensure a spotless cleanup every time.'
  },
  {
    name: 'Woodinville',
    description: 'In the heart of wine country, we help Woodinville residents clear out unwanted items. From old appliances to construction debris, we make it easy to reclaim your space so you can enjoy your home.'
  },
  {
    name: 'Lynnwood',
    description: 'For Lynnwood residents, we offer reliable junk removal with same-day pickup. Our team handles everything from single items to full cleanouts—just call or text for a free quote.'
  },
  {
    name: 'Lake Forest Park',
    description: 'We love serving the community of Lake Forest Park. We help our neighbors with responsible junk disposal, recycling everything we can to help preserve the natural beauty of the area around Lake Washington.'
  },
  {
    name: 'Mountlake Terrace',
    description: 'For residents of Mountlake Terrace, we offer dependable junk removal services. Whether it is a single item pickup or a full garage cleanout, we are just a quick call away for a free, no-obligation quote.'
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
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">Proudly Serving Your Neighborhood</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Based in Kenmore, we proudly serve our neighbors in Woodinville, Bothell, Kirkland, Lynnwood, and surrounding communities.
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