import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Garage Cleanout in Kenmore WA — Hercules Junk Removal",
  "description": "Watch a garage cleanout from start to finish — done in under 2 hours by Hercules Junk Removal in Kenmore, WA.",
  "thumbnailUrl": "https://img.youtube.com/vi/_XXk67bDZOU/maxresdefault.jpg",
  "uploadDate": "2025-03-01",
  "embedUrl": "https://www.youtube.com/embed/_XXk67bDZOU",
  "url": "https://www.youtube.com/watch?v=_XXk67bDZOU",
  "publisher": { "@id": "https://hercjunk.com" }
};

const VideoSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-black">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            See Us in Action
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Garage cleanout from start to finish. Done in under 2 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full max-w-sm rounded-2xl overflow-hidden border-2 border-zinc-800 shadow-2xl hover:border-[#FFC107] transition-colors duration-300">
            <div className="relative" style={{ paddingBottom: '177.78%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/_XXk67bDZOU"
                title="Garage Cleanout in Kenmore WA — Hercules Junk Removal"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-6 text-sm text-gray-500"
        >
          Follow us on{' '}
          <a
            href="https://www.youtube.com/@hercjunk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFC107] hover:underline"
          >
            YouTube
          </a>{' '}
          for more junk removal content.
        </motion.p>
      </div>
    </section>
  );
};

export default VideoSection;
