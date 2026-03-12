import React from 'react';
import { Star } from 'lucide-react';

const GoogleReviewBadge = ({ className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-200 ${className}`}>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-sm font-bold text-gray-900">5.0/5 Rating</span>
        <span className="text-[10px] text-gray-500 font-medium">7 Google Reviews</span>
      </div>
    </div>
  );
};

export default GoogleReviewBadge;