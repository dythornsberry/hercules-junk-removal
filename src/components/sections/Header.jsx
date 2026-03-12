import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Dumbbell, Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { openCalendlyPopup } from '@/lib/calendlyUtils.js';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToPricing = (e) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/#pricing');
      setTimeout(() => {
        const section = document.getElementById('pricing');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const section = document.getElementById('pricing');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
      else window.location.hash = 'pricing';
    }
  };

  const handleCalendlyClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    openCalendlyPopup();
  };

  return (
    <header className="bg-[#1A1A1A] sticky top-0 z-50 border-b border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group relative z-50" onClick={() => setIsOpen(false)}>
          <Dumbbell className="h-8 w-8 text-[#FFC107] transform group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-2xl font-black text-white tracking-tight">
            Hercules Junk
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/#pricing" onClick={scrollToPricing} className="text-sm font-bold text-gray-300 hover:text-white transition-colors duration-300">Pricing</Link>
          <Link to="/about" className="text-sm font-bold text-gray-300 hover:text-white transition-colors duration-300">About</Link>
          <Link to="/services" className="text-sm font-bold text-gray-300 hover:text-white transition-colors duration-300">Services</Link>
          <Link to="/faq" className="text-sm font-bold text-gray-300 hover:text-white transition-colors duration-300">FAQ</Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:4254063445" className="text-white font-bold hover:text-[#FFC107] flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95">
            <Phone className="w-4 h-4" /> (425) 406-3445
          </a>
          <Button 
            onClick={handleCalendlyClick}
            className="bg-[#FFC107] text-black hover:bg-[#e6ae06] font-bold px-6 h-12 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl"
          >
            BOOK ONLINE
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleMenu} className="text-white p-2 transition-transform duration-300 active:scale-95">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-[#1A1A1A] z-40 flex flex-col p-6 overflow-y-auto border-t border-gray-800">
          <nav className="flex flex-col gap-6 items-center pt-8">
            <Link to="/#pricing" onClick={scrollToPricing} className="text-2xl font-bold text-white hover:text-[#FFC107] transition-colors duration-300">Pricing</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-[#FFC107] transition-colors duration-300">About</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-[#FFC107] transition-colors duration-300">Services</Link>
            <Link to="/faq" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-[#FFC107] transition-colors duration-300">FAQ</Link>
            
            <div className="w-full h-px bg-gray-800 my-6" />
            
            <a href="tel:4254063445" className="w-full">
              <Button variant="outline" className="w-full h-14 text-xl font-bold border-gray-700 text-white hover:bg-white/10 transition-all duration-300 active:scale-95">
                <Phone className="mr-2 w-5 h-5" /> Call (425) 406-3445
              </Button>
            </a>
            <Button onClick={handleCalendlyClick} className="w-full h-14 bg-[#FFC107] text-black text-xl font-bold hover:bg-[#e6ae06] transition-all duration-300 active:scale-95">
              BOOK ONLINE
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;