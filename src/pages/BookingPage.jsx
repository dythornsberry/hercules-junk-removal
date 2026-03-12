import React from 'react';
import { Helmet } from 'react-helmet';
import BookingSection from '@/components/sections/BookingSection';
import { Toaster } from '@/components/ui/toaster';
import { motion } from 'framer-motion';

const BookingPage = () => {
  return (
    <>
      <Helmet>
        <title>Book Junk Removal | Hercules Junk Removal</title>
        <meta name="description" content="Book your junk removal service online. Choose your load size and schedule a pickup time that works for you." />
      </Helmet>
      
      <div className="min-h-screen bg-black pt-12 pb-24">
        <div className="container mx-auto px-4 mb-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="inline-block py-1.5 px-4 rounded-full bg-[#FFC107]/10 text-[#FFC107] border border-[#FFC107]/20 text-xs font-bold tracking-wide uppercase mb-6">
                  Simple Online Booking
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                    Book Your Junk Removal
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
                    Select the size that best matches your junk to lock in your appointment time.
                </p>
            </motion.div>
        </div>

        <BookingSection />
      </div>
      
      <Toaster />
    </>
  );
};

export default BookingPage;