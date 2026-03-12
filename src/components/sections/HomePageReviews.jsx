import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    text: 'Great communication, efficient, and professional and punctual. Highly recommend!',
    author: 'Rhonda M., Kenmore',
  },
  {
    text: 'Dylan and his crew did an amazing job and were super affordable and very communicative!',
    author: 'Ryder A., Bothell',
  },
  {
    text: 'They took care of it fast and did a great job. Thanks Dylan!',
    author: 'Owen A., Kenmore',
  },
];

const HomePageReviews = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center text-black mb-8"
        >
          50+ happy neighbors served (5-star on google)
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f5c400] p-6 rounded-[10px] shadow-md flex flex-col"
            >
              <p className="text-black text-lg italic mb-4 flex-grow">"{review.text}"</p>
              <p className="text-black font-bold text-right">— {review.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageReviews;