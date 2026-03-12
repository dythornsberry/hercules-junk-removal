import React from 'react';
import { Calendar, Phone } from 'lucide-react';

const MobileStickyBar = () => {
  const handleCalendlyClick = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/hercjunk/junk-removal-pickup?hide_event_type_details=1'});
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A1A] border-t border-gray-800 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] pb-safe">
      <div className="p-3">
        <div className="flex gap-3 mb-2">
          <button 
            onClick={handleCalendlyClick}
            className="flex-1 bg-[#FFC107] text-black font-bold py-3.5 px-2 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <Calendar className="w-5 h-5" />
            BOOK ONLINE
          </button>
          <a 
            href="tel:4254063445"
            className="flex-1 bg-white/10 text-white font-bold py-3.5 px-2 rounded-xl flex items-center justify-center gap-2 border border-gray-700 active:bg-white/20 transition-colors"
          >
            <Phone className="w-5 h-5 text-[#FFC107]" />
            Call (425) 406-3445
          </a>
        </div>
        <p className="text-center text-[10px] text-gray-400 font-medium tracking-wide">
          Pay after pickup • Price confirmed before we start
        </p>
      </div>
    </div>
  );
};

export default MobileStickyBar;