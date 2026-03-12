import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviewsData = [
  {
    name: "Ryder A",
    text: "Dylan and his crew did an amazing job and were super affordable and very communicative!",
    source: "Google",
  },
  {
    name: "Oleh V",
    text: "5 stars for these guys! They did an amazing job removing all the junk from my basement. Friendly, polite, and professional.",
    source: "Google",
  },
  {
    name: "Jayden A",
    text: "Dylan and his crew did a great job!",
    source: "Google",
  },
];

const GoogleLogo = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.9999 12.24C21.9999 11.52 21.9399 10.82 21.8199 10.14H12.1799V14.07H17.8799C17.6399 15.36 16.9099 16.48 15.8299 17.22V19.76H19.2499C20.9799 18.21 21.9999 15.65 21.9999 12.24Z" fill="#4285F4"/>
    <path d="M12.1799 22.0001C15.2399 22.0001 17.7999 20.9901 19.2499 19.7601L15.8299 17.2201C14.7899 17.9101 13.5699 18.3301 12.1799 18.3301C9.4899 18.3301 7.2199 16.4501 6.3899 13.9901H2.8599V16.6201C4.3099 19.6801 7.9599 22.0001 12.1799 22.0001Z" fill="#34A853"/>
    <path d="M6.3899 13.99C6.1899 13.39 6.0799 12.75 6.0799 12.11C6.0799 11.47 6.1899 10.83 6.3899 10.23V7.6H2.8599C2.3199 8.73 1.9999 9.98 1.9999 11.31C1.9999 12.64 2.3199 13.89 2.8599 15.01L6.3899 13.99Z" fill="#FBBC05"/>
    <path d="M12.1799 5.89C13.7199 5.89 15.0199 6.4 15.9699 7.29L19.3299 4.08C17.7899 2.65 15.2399 1.8 12.1799 1.8C7.9599 1.8 4.3099 4.12 2.8599 7.18L6.3899 9.72C7.2199 7.26 9.4899 5.89 12.1799 5.89Z" fill="#EA4335"/>
  </svg>
);

const StarRating = () => (
  <div className="flex text-yellow-400 mb-2">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-current text-[#FFD600]" />
    ))}
  </div>
);

const SocialProof = () => {
  const scrollContainerRef = useRef(null);

  return (
    <section className="bg-white py-12 sm:py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-4 -mb-4 cursor-grab active:cursor-grabbing md:grid md:grid-cols-3 md:gap-8 md:space-x-0 md:overflow-visible"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
        >
          {reviewsData.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col flex-shrink-0 w-[80vw] sm:w-[45vw] md:w-auto"
            >
              <StarRating />
              <p className="text-gray-600 italic text-sm mb-4 h-20">"{review.text}"</p>
              <div className="mt-auto flex justify-between items-center">
                <p className="font-bold text-black">- {review.name}</p>
                <div className="flex items-center space-x-1 text-gray-500">
                    <GoogleLogo />
                    <span>{review.source}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;