import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openCalendlyPopup } from '@/lib/calendlyUtils.js';

const QuotePage = () => {
  const businessPhoneNumber = '4254063445';
  const businessPhoneNumberFormatted = '(425) 406-3445';

  useEffect(() => {
    openCalendlyPopup();
  }, []);

  return (
    <>
      <Helmet>
        <title>Book Junk Removal | Hercules Junk Removal | Kenmore & Greater Seattle</title>
        <meta name="description" content="Book your junk removal pickup online in 60 seconds. Same-day and next-day service available in Kenmore, Bothell, Kirkland & Greater Seattle." />
        <link rel="canonical" href="https://hercjunk.com/quote" />
      </Helmet>
      <div className="flex-grow bg-black min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Book Your <span className="text-yellow-400">Junk Removal</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Pick a time that works for you. We'll show up, give you a price, and haul it away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-300 text-xl font-bold py-6 px-10 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => openCalendlyPopup()}
            >
              <Calendar className="mr-3 h-6 w-6" />
              Book Online
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <a href={`tel:${businessPhoneNumber}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black text-xl font-bold py-6 px-10 rounded-xl w-full"
              >
                <Phone className="mr-3 h-6 w-6" />
                {businessPhoneNumberFormatted}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuotePage;
