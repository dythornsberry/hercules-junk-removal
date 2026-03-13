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
    <div className="w-full mx-auto transform hover:scale-105 transition-transform duration-500">
      <svg viewBox="-5 -5 110 70" className="w-full h-auto drop-shadow-2xl">
        {/* Background Cargo Box */}
        <rect x={boxX} y={boxY} width={boxWidth} height={boxHeight} fill="#1a1a1a" stroke="#444" strokeWidth="1.5" rx="2" />
        
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
                stroke="#d17a00" 
                strokeWidth="1.5" 
             />
           ))}
           <line x1={boxX} y1={boxY + 12} x2={boxX + fillWidth} y2={boxY + 12} stroke="#d17a00" strokeWidth="1.5" />
           <line x1={boxX} y1={boxY + 24} x2={boxX + fillWidth} y2={boxY + 24} stroke="#d17a00" strokeWidth="1.5" />
        </motion.g>

        {/* Overflow effect for full truck */}
        {isFull && (
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Boxes sticking out the top */}
            <rect x={boxX + 10} y={boxY - 6} width="12" height="8" fill="#FF9500" stroke="#d17a00" strokeWidth="1" rx="1" transform="rotate(-5 20 10)" />
            <rect x={boxX + 30} y={boxY - 8} width="14" height="10" fill="#FF9500" stroke="#d17a00" strokeWidth="1" rx="1" transform="rotate(8 40 10)" />
            <rect x={boxX + 45} y={boxY - 4} width="10" height="6" fill="#FF9500" stroke="#d17a00" strokeWidth="1" rx="1" />
          </motion.g>
        )}

        {/* Truck Cab */}
        <path d="M 66 20 L 82 20 C 86 20 89 22 90 26 L 100 38 C 101 40 102 42 102 44 L 102 48 L 66 48 Z" fill="#222" />
        {/* Window */}
        <path d="M 70 24 L 81 24 C 83 24 84 25 85 27 L 92 36 L 70 36 Z" fill="#FFC107" opacity="0.8" />
        {/* Wheels */}
        <circle cx="20" cy="51" r="8" fill="#000" stroke="#555" strokeWidth="2" />
        <circle cx="84" cy="51" r="8" fill="#000" stroke="#555" strokeWidth="2" />
        <circle cx="20" cy="51" r="3" fill="#FFC107" />
        <circle cx="84" cy="51" r="3" fill="#FFC107" />
        
        {/* Ground Line to anchor it */}
        <line x1="-2" y1="59" x2="105" y2="59" stroke="#333" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default TruckLoadVisualSVG;