import React from 'react';
import { motion } from 'framer-motion';

const TruckLoadVisualSVG = ({ fillPercentage }) => {
  const boxWidth = 60;
  const boxHeight = 35;
  const boxX = 5;
  const boxY = 10;
  
  const fillWidth = (boxWidth * fillPercentage) / 100;
  const isFull = fillPercentage >= 100;

  return (
    <div className="w-full max-w-[200px] mx-auto">
      <svg viewBox="0 0 100 60" className="w-full h-auto drop-shadow-xl">
        {/* Background Cargo Box */}
        <rect x={boxX} y={boxY} width={boxWidth} height={boxHeight} fill="#1a1a1a" stroke="#333" strokeWidth="1" rx="2" />
        
        {/* Fill Rectangle representing stacked boxes */}
        <motion.rect 
          x={boxX} 
          y={boxY} 
          height={boxHeight} 
          fill="#FF9500"
          initial={{ width: 0 }}
          animate={{ width: fillWidth }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          rx="1"
        />

        {/* Box lines to make it look like stacked boxes instead of a solid block */}
        <motion.g 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
           {Array.from({ length: Math.floor(fillPercentage / 10) }).map((_, i) => (
             <line 
                key={`v-${i}`} 
                x1={boxX + (i * 6)} 
                y1={boxY} 
                x2={boxX + (i * 6)} 
                y2={boxY + boxHeight} 
                stroke="#e68600" 
                strokeWidth="1" 
             />
           ))}
           <line x1={boxX} y1={boxY + 12} x2={boxX + fillWidth} y2={boxY + 12} stroke="#e68600" strokeWidth="1" />
           <line x1={boxX} y1={boxY + 24} x2={boxX + fillWidth} y2={boxY + 24} stroke="#e68600" strokeWidth="1" />
        </motion.g>

        {/* Overflow effect for full truck */}
        {isFull && (
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Boxes sticking out the top */}
            <rect x={boxX + 10} y={boxY - 6} width="12" height="8" fill="#FF9500" stroke="#e68600" strokeWidth="1" rx="1" transform="rotate(-5 20 10)" />
            <rect x={boxX + 30} y={boxY - 8} width="14" height="10" fill="#FF9500" stroke="#e68600" strokeWidth="1" rx="1" transform="rotate(8 40 10)" />
            <rect x={boxX + 45} y={boxY - 4} width="10" height="6" fill="#FF9500" stroke="#e68600" strokeWidth="1" rx="1" />
          </motion.g>
        )}

        {/* Truck Cab */}
        <path d="M 66 20 L 80 20 C 83 20 85 22 86 25 L 95 36 C 96 38 97 40 97 42 L 97 45 L 66 45 Z" fill="#333" />
        {/* Window */}
        <path d="M 70 24 L 79 24 C 81 24 82 25 83 26 L 89 34 L 70 34 Z" fill="#111" />
        {/* Wheels */}
        <circle cx="20" cy="48" r="7" fill="#000" stroke="#444" strokeWidth="1.5" />
        <circle cx="80" cy="48" r="7" fill="#000" stroke="#444" strokeWidth="1.5" />
        <circle cx="20" cy="48" r="2.5" fill="#888" />
        <circle cx="80" cy="48" r="2.5" fill="#888" />
      </svg>
    </div>
  );
};

export default TruckLoadVisualSVG;