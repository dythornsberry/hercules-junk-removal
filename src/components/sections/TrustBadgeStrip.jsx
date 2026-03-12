import React from 'react';
import { Shield, Zap } from 'lucide-react';
import GoogleReviewBadge from '@/components/ui/GoogleReviewBadge';

const TrustBadgeStrip = () => {
  return (
    <div className="bg-black text-[#f5c400] h-auto py-3 md:h-[60px] md:py-0 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around items-center text-center gap-4 md:gap-0">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wide">licensed & insured</span>
          </div>
          
          <div className="flex items-center">
            <GoogleReviewBadge className="scale-90 bg-white/10 border-white/20 text-white" />
          </div>
          
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wide">fast response &lt;2 hrs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadgeStrip;