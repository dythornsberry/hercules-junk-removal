import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    name: 'Rhonda M.',
    location: 'Kenmore, WA',
    text: 'Great communication, fast, and on time. Highly recommend!',
  },
  {
    name: 'Ryder A.',
    location: 'Bothell, WA',
    text: 'Dylan and the team did an amazing job. Super affordable and easy to talk to.',
  },
  {
    name: 'Owen A.',
    location: 'Kenmore, WA',
    text: 'Took care of it fast and did a great job. Thanks Dylan!',
  }
];

const StarRating = () => (
  <div className="flex text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-current" />
    ))}
  </div>
);

const Reviews = () => {
  const googleReviewsUrl = "https://www.google.com/search?q=hercules+junk+removal+reviews";

  return (
    <section id="reviews-section" className="py-20 sm:py-24 px-4 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">What Our Neighbors Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-2xl shadow-md border border-gray-700 flex flex-col"
            >
              <StarRating />
              <p className="text-base text-gray-300 flex-grow my-4">"{review.text}"</p>
              <div className="text-right mt-auto">
                <p className="font-bold text-white">- {review.name}</p>
                <p className="text-sm text-gray-400">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-gray-600 text-white bg-black hover:bg-gray-800 font-semibold"
            >
              Read More on Google
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;