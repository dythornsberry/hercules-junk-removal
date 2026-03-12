import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Recycle } from 'lucide-react';

const Community = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-yellow-400">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-black text-white p-8 sm:p-10 rounded-3xl shadow-2xl text-center"
        >
          <div className="flex justify-center gap-4 mb-6">
            <Heart className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-400" />
            <Recycle className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-yellow-400">Committed to Responsible Disposal</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            We are dedicated to responsible junk removal. Whenever possible, we actively seek to donate usable items like furniture, appliances, and housewares directly to local charities such as Goodwill and St. Vincent's. Our primary commitment is to minimize waste through careful sorting, recycling, and proper disposal, ensuring we protect our environment and give back to our community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;