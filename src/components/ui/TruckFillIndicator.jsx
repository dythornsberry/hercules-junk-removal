import React from 'react';
import { motion } from 'framer-motion';

const TruckFillIndicator = ({ fillPercentage }) => {
  const safePercentage = Math.max(0, Math.min(100, fillPercentage || 0));
  
  // Cargo box inner dimensions for the columns
  const numCols = 8;
  const colWidth = 6;
  const colGap = 2;
  const startX = 4;
  const colY = 7;
  const colHeight = 31;
  const percentagePerCol = 100 / numCols; // 12.5%

  return (
    <div className="w-full max-w-[120px] mb-4" aria-label={`Truck filled to ${safePercentage}%`}>
      <svg viewBox="0 0 100 55" className="w-full h-auto drop-shadow-sm">
        {/* Cargo Box Background/Border */}
        <rect 
          x="2" 
          y="5" 
          width="66" 
          height="35" 
          fill="#374151" 
          stroke="#4B5563"
          strokeWidth="2"
          rx="2"
        />

        {/* 8 Vertical Columns */}
        {Array.from({ length: numCols }).map((_, i) => {
          const xPos = startX + i * (colWidth + colGap);
          
          // Calculate how much of this specific column should be filled (0 to 1)
          const colFillRatio = Math.max(0, Math.min(1, (safePercentage - i * percentagePerCol) / percentagePerCol));
          const fillW = colWidth * colFillRatio;

          return (
            <g key={i}>
              {/* Empty Column Background */}
              <rect 
                x={xPos} 
                y={colY} 
                width={colWidth} 
                height={colHeight} 
                fill="#4B5563" 
                rx="1" 
              />
              
              {/* Animated Filled Column (Left-to-Right) */}
              <motion.rect 
                x={xPos}
                y={colY}
                height={colHeight}
                fill="#FFC107"
                initial={{ width: 0 }}
                animate={{ width: fillW }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut", 
                  delay: 0.1 + (i * 0.05) // Slight stagger for visual effect
                }}
                rx="1"
              />
            </g>
          );
        })}

        {/* Truck Cab */}
        <path 
          d="M 68 18 L 82 18 C 84 18 86 19 87 21 L 96 32 C 97 34 98 36 98 38 L 98 40 C 98 42 96 44 94 44 L 68 44 Z" 
          fill="#4B5563" 
        />
        
        {/* Window */}
        <path 
          d="M 72 22 L 80 22 C 81 22 83 23 84 24 L 90 31 L 72 31 Z" 
          fill="#1F2937" 
        />

        {/* Wheels */}
        <circle cx="20" cy="45" r="6" fill="#111827" stroke="#4B5563" strokeWidth="2" />
        <circle cx="80" cy="45" r="6" fill="#111827" stroke="#4B5563" strokeWidth="2" />
        
        {/* Wheel Hubs */}
        <circle cx="20" cy="45" r="2" fill="#9CA3AF" />
        <circle cx="80" cy="45" r="2" fill="#9CA3AF" />
      </svg>
    </div>
  );
};

export default TruckFillIndicator;