import React from 'react';
import { motion } from 'framer-motion';

const suburbs = [
  'Kenmore',
  'Bothell',
  'Kirkland',
  'Woodinville',
  'Lake Forest Park',
  'Mountlake Terrace',
  'Everett'
];

const SuburbPillBar = () => {
  const scrollToAreas = () => {
    const section = document.getElementById('areas-we-serve');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-black py-4 px-4">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <motion.div
          className="flex items-center"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <div className="flex flex-shrink-0 items-center space-x-8">
            {suburbs.concat(suburbs).map((suburb, index) => (
              <React.Fragment key={index}>
                <a
                  href="#areas-we-serve"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToAreas();
                  }}
                  className="text-yellow-400 font-semibold whitespace-nowrap hover:text-white transition-colors"
                >
                  {suburb}
                </a>
                <span className="text-yellow-400/50">•</span>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuburbPillBar;