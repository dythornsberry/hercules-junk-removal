import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';

const StickyContactBar = () => {
  const businessPhoneNumber = '4254063445';

  const handleCallClick = () => {
    window.dispatchEvent(new CustomEvent('call_clicked'));
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] flex shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <a
        href={`tel:${businessPhoneNumber}`}
        onClick={handleCallClick}
        className="flex-1 bg-black text-white flex flex-col items-center justify-center py-3 active:bg-gray-900 transition-colors border-t-4 border-[#FFC107]"
      >
        <Phone className="h-6 w-6 mb-0.5 text-[#FFC107]" />
        <span className="text-xs font-black uppercase tracking-wide">Call (425) 406-3445</span>
      </a>
      <Link
        to="/quote"
        className="flex-[1.5] bg-[#FFC107] text-black flex flex-col items-center justify-center py-3 active:bg-[#e6ae06] transition-colors border-t-4 border-black"
      >
        <MessageCircle className="h-6 w-6 mb-0.5" />
        <span className="text-xs font-black uppercase tracking-wide">Get a Quote</span>
      </Link>
    </div>
  );
};

export default StickyContactBar;
