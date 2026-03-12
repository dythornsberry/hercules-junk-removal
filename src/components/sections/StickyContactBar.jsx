import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { openCalendlyPopup } from '@/lib/calendlyUtils.js';

const StickyContactBar = () => {
  const businessPhoneNumber = '4254063445';

  const handleCallClick = () => {
    window.dispatchEvent(new CustomEvent('call_clicked'));
  };

  const handleBookClick = (e) => {
    e.preventDefault();
    openCalendlyPopup();
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] flex shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <a
        href={`tel:${businessPhoneNumber}`}
        onClick={handleCallClick}
        className="flex-1 bg-white text-black flex flex-col items-center justify-center py-3 active:bg-gray-100 transition-colors border-t border-gray-200"
      >
        <Phone className="h-6 w-6 mb-0.5" />
        <span className="text-xs font-bold uppercase tracking-wide">Call (425) 406-3445</span>
      </a>
      <button
        onClick={handleBookClick}
        className="flex-[1.5] bg-yellow-400 text-black flex flex-col items-center justify-center py-3 active:bg-yellow-500 transition-colors border-t border-yellow-500"
      >
        <Calendar className="h-6 w-6 mb-0.5" />
        <span className="text-xs font-black uppercase tracking-wide">Book Online</span>
      </button>
    </div>
  );
};

export default StickyContactBar;