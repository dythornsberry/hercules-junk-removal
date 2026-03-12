import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const GoogleReviewCard = ({ review }) => {
  const { author, rating, text, date, verified } = review;
  
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col h-full border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FF9500] text-white flex items-center justify-center font-bold text-lg">
            {author.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{author}</h4>
            <div className="flex items-center text-sm text-gray-500 gap-1">
              <span>{formattedDate}</span>
              {verified && (
                <>
                  <span className="mx-1">•</span>
                  <span className="flex items-center text-green-600 gap-1">
                    <CheckCircle className="w-3 h-3" /> Verified
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Google 'G' icon placeholder */}
        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
          <span className="text-blue-500 font-bold text-sm">G</span>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'fill-[#FF9500] text-[#FF9500]' : 'fill-gray-200 text-gray-200'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-600 flex-grow italic">"{text}"</p>
    </div>
  );
};

export default GoogleReviewCard;