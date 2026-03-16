import React from 'react';
import { Helmet } from 'react-helmet';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CallbackSection from '@/components/sections/CallbackSection.jsx';
import {
  CALENDLY_BOOKING_URL,
  handleCalendlyClick,
} from '@/lib/calendlyUtils.js';

const QuotePage = () => {
  const businessPhoneNumber = '4254063445';
  const businessPhoneNumberFormatted = '(425) 406-3445';

  return (
    <>
      <Helmet>
        <title>Book Junk Removal | Hercules Junk Removal</title>
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
              asChild
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-300 text-xl font-bold py-6 px-10 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <a href={CALENDLY_BOOKING_URL} onClick={handleCalendlyClick}>
                <Calendar className="mr-3 h-6 w-6" />
                Book Online
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="!border-2 !border-white !text-white !bg-black/30 hover:!bg-white hover:!text-black text-xl font-bold py-6 px-10 rounded-xl w-full"
            >
              <a href={`tel:${businessPhoneNumber}`}>
                <Phone className="mr-3 h-6 w-6" />
                {businessPhoneNumberFormatted}
              </a>
            </Button>
          </div>
          <a
            href="#callback-form-quote"
            className="inline-flex mt-5 text-sm font-semibold text-yellow-400 hover:text-yellow-300 underline underline-offset-4"
          >
            Need help first? Jump to the callback form.
          </a>
          <p className="text-sm text-gray-500 mt-6">
            Same-day and next-day pickups available. No credit card needed to book.
          </p>
        </div>
      </div>
      <CallbackSection
        compact
        sectionId="callback-form-quote"
        sourceLabel="Quote Page"
        heading="Need help before you book?"
        description="Send your number and we will reach out to answer questions or help you choose the right pickup."
      />
    </>
  );
};

export default QuotePage;
