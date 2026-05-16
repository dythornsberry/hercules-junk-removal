import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Zap, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Cta = () => {
  const businessPhoneNumber = '4254063445';
  const businessPhoneNumberFormatted = '(425) 406-3445';

  const handleCallClick = () => {
    window.dispatchEvent(new CustomEvent('call_clicked'));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-yellow-300 to-yellow-500 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full mix-blend-overlay animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full mix-blend-overlay animate-pulse delay-700"></div>
        </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-black/10 px-4 py-1 rounded-full border border-black/10">
             <Zap className="h-4 w-4 text-black fill-current" />
             <span className="text-sm font-bold text-black uppercase">Same-day is often possible</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-black tracking-tight drop-shadow-sm">
             Want a price?
          </h2>
          <p className="text-2xl font-medium text-black/90 max-w-2xl mx-auto">
             Send the form or call. We will give you a straight answer and let you know what is possible.
          </p>
          
          <div className="flex flex-col gap-6 justify-center items-center mt-8">
              <Button
                asChild
                variant="cta"
                size="xl"
                className="w-full max-w-md h-auto py-8 bg-black text-white hover:bg-gray-800 shadow-2xl transition-all hover:scale-105"
              >
                <Link to="/quote">
                  <div className="flex flex-col items-center">
                      <div className="flex items-center">
                        <span className="text-2xl font-bold">Send My Info</span>
                      </div>
                      <span className="text-sm font-normal text-white/80 mt-1">Name, phone, done. We will follow up.</span>
                  </div>
                </Link>
              </Button>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-xl font-bold py-6 px-10 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto min-w-[260px] border-2 border-black"
              >
                <Link to="/quote">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Use the Form
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-black/10 text-black hover:bg-black/20 text-xl font-bold py-6 px-10 rounded-xl shadow-none transform hover:scale-105 transition-all duration-300 w-full sm:w-auto min-w-[260px]"
              >
                <a href={`tel:${businessPhoneNumber}`} onClick={handleCallClick}>
                  <Phone className="mr-3 h-6 w-6" />
                  {businessPhoneNumberFormatted}
                </a>
              </Button>
            </div>
            
            {/* Trust Badges under CTAs */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm font-bold text-black/80">
              <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-black" /> 100% Satisfaction Guarantee</div>
              <div className="flex items-center gap-2"><Star className="w-5 h-5 text-black fill-current" /> 5-Star Rated on Google</div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
