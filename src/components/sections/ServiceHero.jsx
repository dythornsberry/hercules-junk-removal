import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { openCalendlyPopup } from '@/lib/calendlyUtils.js';

const ServiceHero = ({ title, subtitle, imageAlt, imageSrc }) => {
  const businessPhoneNumber = '4254063445';
  const businessPhoneNumberFormatted = '(425) 406-3445';

  return (
    <section className="relative bg-yellow-400 py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-black/80 mb-8 font-medium max-w-lg">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${businessPhoneNumber}`}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-black text-yellow-400 hover:bg-gray-800 text-xl font-bold py-6 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Call {businessPhoneNumberFormatted}
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-4 border-black text-black hover:bg-black hover:text-yellow-400 text-xl font-bold py-6 px-8 rounded-xl bg-transparent transition-all"
                onClick={() => openCalendlyPopup()}
              >
                Book Online
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-black transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={imageSrc || "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} 
                  alt={imageAlt}
                  className="w-full h-[400px] object-cover"
                />
             </div>
             <div className="absolute -z-10 top-10 -right-4 w-full h-full bg-white rounded-3xl border-4 border-black" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;