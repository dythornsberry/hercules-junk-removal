import React from 'react';
import { motion } from 'framer-motion';
import ElfsightReviewsWidget from '@/components/ui/ElfsightReviewsWidget.jsx';

const CustomerReviewsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4 tracking-tight"
          >
            Trusted & <span className="text-[#FF9500]">5-Star Rated</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium"
          >
            Don't just take our word for it. See what real customers in the greater Seattle area are saying about our fast, friendly, and reliable junk removal services.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <ElfsightReviewsWidget appId="493efd55-cf04-4acf-a5b8-44e73ecb9757" />
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviewsSection;