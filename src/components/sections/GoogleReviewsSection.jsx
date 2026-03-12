import React from 'react';
import { motion } from 'framer-motion';
import { googleReviews } from '@/lib/GoogleReviewsData.js';
import GoogleReviewCard from '@/components/ui/GoogleReviewCard.jsx';

const GoogleReviewsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {googleReviews.map((review) => (
          <motion.div key={review.id} variants={itemVariants}>
            <GoogleReviewCard review={review} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GoogleReviewsSection;