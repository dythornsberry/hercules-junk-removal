import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const Gallery = ({ galleryImages }) => {
  const [index, setIndex] = useState(0);

  const nextImage = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <section className="py-16 sm:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-black">Real Jobs, Real Neighbors</h2>
        </motion.div>
        
        <div {...handlers} className="relative w-full max-w-3xl mx-auto h-80 rounded-2xl shadow-lg overflow-hidden bg-black cursor-grab active:cursor-grabbing">
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  className="w-full h-full object-cover scale-[1.15] contrast-[1.25] saturate-[1.3] brightness-[1.1]"
                  alt={galleryImages[index].alt}
                  src={galleryImages[index].src}
                  loading="lazy"
                />
                {/* Vignette Overlay */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] mix-blend-multiply"></div>
              </div>
              
              {galleryImages[index].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-3 text-center z-20">
                  <p className="text-base font-bold text-yellow-400">{galleryImages[index].caption}</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors z-30">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors z-30">
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === index ? 'bg-yellow-400' : 'bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;