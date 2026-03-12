import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { Phone } from 'lucide-react';

const AboutPage = () => {
  const businessPhoneNumber = '4254063445';
  const businessPhoneNumberFormatted = '425-406-3445';

  return (
    <>
      <Helmet>
        <title>Meet Dylan, Owner of Hercules Junk Removal</title>
        <meta name="description" content="Meet Dylan, owner of Hercules Junk Removal. A local, Kenmore-based business providing friendly, reliable junk hauling in the Seattle area." />
      </Helmet>
      <div className="flex-grow bg-yellow-400 text-black">
        <main>
          <section className="py-16 sm:py-20 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                  <h1 className="text-4xl sm:text-5xl font-black text-black mb-4">Meet Dylan, Owner of Hercules Junk Removal</h1>
                  <p className="text-lg text-black/80 mb-6">
                    Hi, I’m Dylan. I started Hercules Junk Removal here in Kenmore for a simple reason: to offer a friendly, reliable service that helps my neighbors.
                  </p>
                  <p className="text-lg text-black/80 mb-6 font-bold">
                    Our goal is simple: help you clear out the clutter without the stress. No hidden fees, just honest work.
                  </p>
                  <p className="text-lg text-black/80 mb-8">
                    We are fully licensed and insured. We also donate or recycle whatever we can. We've done about 50 jobs so far and are growing thanks to happy customers spreading the word.
                  </p>
                  <p className="text-lg text-black/80 mb-8 font-bold">
                    Thanks for looking us up. I’d love to earn your business.
                  </p>
                  <a href={`tel:${businessPhoneNumber}`}>
                    <Button
                      size="lg"
                      className="bg-black text-yellow-400 hover:bg-gray-800 text-xl font-bold py-5 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                    >
                      <Phone className="mr-3 h-6 w-6" />
                      Call or Text Me: {businessPhoneNumberFormatted}
                    </Button>
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <img  
                    className="rounded-2xl shadow-2xl max-w-full h-auto" 
                    alt="Dylan, owner of Hercules Junk Removal, taking a selfie in a garage at a job site, wearing a Hercules hat."
                    src="https://horizons-cdn.hostinger.com/043d3248-867c-48dc-bfa5-01141b7ae321/e21a9b995140fd6b8cd0fc1ea3a96669.jpg" 
                    loading="lazy"
                    style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Toaster />
      </div>
    </>
  );
};

export default AboutPage;