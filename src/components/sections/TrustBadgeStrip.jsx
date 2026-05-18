import React from 'react';
import { CreditCard, Shield, Truck, Zap } from 'lucide-react';

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
            <span className="text-sm font-semibold text-white uppercase tracking-wide">big box truck</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wide">fast response &lt;2 hrs</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <CreditCard className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wide">Venmo / Zelle / Card</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadgeStrip;
