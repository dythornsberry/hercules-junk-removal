import React from 'react';
import { CreditCard, Shield, Truck, Zap } from 'lucide-react';
import GoogleReviewBadge from '@/components/ui/GoogleReviewBadge';

const TrustBadgeStrip = () => {
  return (
    <div className="bg-black text-[#f5c400] h-auto border-y-4 border-[#FFC107] py-3 md:py-0 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-3 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wide">licensed & insured</span>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <Truck className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wide">18.6 yd box truck</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wide">fast response &lt;2 hrs</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <CreditCard className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wide">cards accepted</span>
          </div>

          <div className="flex items-center justify-center sm:col-span-2 lg:col-span-4">
            <GoogleReviewBadge className="scale-90 bg-white/10 border-white/20 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadgeStrip;
