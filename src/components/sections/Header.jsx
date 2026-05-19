import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Dumbbell, Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToPricing = (e) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/pricing');
    } else {
      const section = document.getElementById('pricing');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
      else window.location.hash = 'pricing';
    }
  };

  return (
    <header className="bg-[#1A1A1A] sticky top-0 z-50 border-b-4 border-[#FFC107] shadow-sm">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group relative z-50" onClick={() => setIsOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center bg-[#FFC107] text-black border-2 border-black shadow-[3px_3px_0_#000]">
            <Dumbbell className="h-7 w-7 transform group-hover:rotate-12 transition-transform duration-300" />
          </span>
          <span className="leading-none">
            <span className="block text-2xl font-black text-white tracking-tight">Hercules Junk</span>
            <span className="hidden sm:block text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFC107]">Kenmore, WA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/pricing" onClick={scrollToPricing} className="text-sm font-bold text-gray-300 hover:text-white transition-colors duration-300">Pricing</Link>
          <Link to="/about" className="text-sm font-bold text-gray-300 hover:text-white transition-colors duration-300">About</Link>
          <Link to="/services" className="text-sm font-bold text-gray-300 hover:text-white transition-colors duration-300">Services</Link>
          <Link to="/faq" className="text-sm font-bold text-gray-300 hover:text-white transition-colors duration-300">FAQ</Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:4254063445" className="text-white font-black hover:text-[#FFC107] flex items-center gap-2 transition-colors">
            <Phone className="w-4 h-4" /> (425) 406-3445
          </a>
          <Button
            asChild
            className="bg-[#FFC107] text-black hover:bg-[#e6ae06] font-black px-6 h-11 border-2 border-black shadow-[3px_3px_0_#000] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:scale-95"
          >
            <Link to="/quote" onClick={() => setIsOpen(false)}>
              GET A QUOTE
            </Link>
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
        <div className="md:hidden fixed inset-0 top-20 bg-[#1A1A1A] z-40 flex flex-col p-6 overflow-y-auto border-t-4 border-[#FFC107]">
          <nav className="flex flex-col gap-6 items-center pt-8">
            <Link to="/pricing" onClick={scrollToPricing} className="text-2xl font-bold text-white hover:text-[#FFC107] transition-colors duration-300">Pricing</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-[#FFC107] transition-colors duration-300">About</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-[#FFC107] transition-colors duration-300">Services</Link>
            <Link to="/faq" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white hover:text-[#FFC107] transition-colors duration-300">FAQ</Link>
            
            <div className="w-full h-px bg-gray-800 my-6" />
            
            <a href="tel:4254063445" className="w-full h-14 text-xl font-black border-4 border-gray-700 text-white flex items-center justify-center gap-2 active:scale-95 transition-transform">
              <Phone className="w-5 h-5 text-[#FFC107]" /> Call (425) 406-3445
            </a>
            <Link to="/quote" onClick={() => setIsOpen(false)} className="w-full h-14 bg-[#FFC107] text-black text-xl font-black border-4 border-black shadow-[4px_4px_0_rgba(255,255,255,0.1)] flex items-center justify-center active:scale-95 transition-transform">
              GET A QUOTE
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
