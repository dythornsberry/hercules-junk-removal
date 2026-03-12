import React from 'react';
import { motion } from 'framer-motion';

const TruckLoadVisual = ({ fillPercentage }) => {
  // SVG dimensions
  const boxWidth = 60;
  const boxHeight = 35;
  const boxX = 5;
  const boxY = 10;
  
  // Calculate fill width based on percentage
  const fillWidth = (boxWidth * fillPercentage) / 100;
  const isOverflow = fillPercentage >= 100;

  return (
    <div className="w-full max-w-[200px] mx-auto">
      <svg viewBox="0 0 100 60" className="w-full h-auto drop-shadow-xl">
        {/* Background Cargo Box */}
        <rect x={boxX} y={boxY} width={boxWidth} height={boxHeight} fill="#1F2937" stroke="#374151" strokeWidth="1" rx="2" />
        
        {/* Fill Rectangle */}
        <motion.rect 
          x={boxX} 
          y={boxY} 
          height={boxHeight} 
          fill="#FFC107" // HercJunk Yellow/Orange
          initial={{ width: 0 }}
          animate={{ width: fillWidth }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          rx="1"
        />

        {/* Overflow effect for full truck */}
        {isOverflow && (
          <motion.path
            d={`M ${boxX + boxWidth - 10} ${boxY - 2} Q ${boxX + boxWidth - 5} ${boxY - 6} ${boxX + boxWidth} ${boxY} L ${boxX + boxWidth} ${boxY + 5} Z`}
            fill="#FFC107"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
        )}
        {isOverflow && (
           <motion.path
            d={`M ${boxX + 10} ${boxY} Q ${boxX + 20} ${boxY - 8} ${boxX + 30} ${boxY} Z`}
            fill="#FFC107"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
        )}

        {/* Truck Cab */}
        <path d="M 66 20 L 80 20 C 83 20 85 22 86 25 L 95 36 C 96 38 97 40 97 42 L 97 45 L 66 45 Z" fill="#374151" />
        {/* Window */}
        <path d="M 70 24 L 79 24 C 81 24 82 25 83 26 L 89 34 L 70 34 Z" fill="#111827" />
        {/* Wheels */}
        <circle cx="20" cy="48" r="7" fill="#030712" stroke="#4B5563" strokeWidth="1.5" />
        <circle cx="80" cy="48" r="7" fill="#030712" stroke="#4B5563" strokeWidth="1.5" />
        <circle cx="20" cy="48" r="2.5" fill="#9CA3AF" />
        <circle cx="80" cy="48" r="2.5" fill="#9CA3AF" />
      </svg>
    </div>
  );
};

export default TruckLoadVisual;