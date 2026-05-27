import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Cta = () => {
  const businessPhoneNumber = '4254063445';
  const businessPhoneNumberFormatted = '(425) 406-3445';

  const handleCallClick = () => {
    window.dispatchEvent(new CustomEvent('call_clicked'));
  };

  return (
    <section className="py-20 px-4 bg-[#FFC107] relative overflow-hidden border-t-8 border-black">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="inline-block rotate-[-1deg] bg-black text-[#FFC107] font-black tracking-[0.2em] uppercase text-xs px-3 py-1 border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,0.25)]">
            Same-day pickup
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-black tracking-tight">
            Want a price?
          </h2>
          <p className="text-xl font-bold text-black/85 max-w-xl mx-auto">
            Call or send the form. Fast pickup, big truck.
          </p>

          <div className="flex flex-col gap-4 justify-center items-center mt-8 max-w-md mx-auto">
            <Button
              asChild
              className="w-full h-16 bg-black text-white hover:bg-gray-900 font-black text-xl border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,0.3)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:scale-95"
            >
              <Link to="/quote">
                Get A Quote <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>

            <a
              href={`tel:${businessPhoneNumber}`}
              onClick={handleCallClick}
              className="w-full flex items-center justify-center gap-2 border-4 border-black bg-white px-6 py-4 text-lg font-black text-black shadow-[4px_4px_0_#000] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:scale-95"
            >
              <Phone className="w-5 h-5" />
              Call or text {businessPhoneNumberFormatted}
            </a>

            <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm font-black text-black">
              <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Licensed & insured</span>
              <span className="flex items-center gap-2"><Truck className="w-4 h-4" /> Big box truck</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
