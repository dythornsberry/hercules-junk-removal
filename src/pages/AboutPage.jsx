import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const businessPhoneNumber = '4254063445';
  const businessPhoneNumberFormatted = '425-406-3445';

  return (
    <>
      <Helmet>
        <title>About Hercules Junk Removal | Kenmore, WA Junk Hauling</title>
        <meta name="description" content="Kenmore-based junk removal with fast response, a large box truck, fair pricing, and credit card payments. Serving Bothell, Kirkland, Lynnwood, and nearby." />
        <link rel="canonical" href="https://hercjunk.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Hercules Junk Removal | Kenmore, WA Junk Hauling" />
        <meta property="og:description" content="Kenmore-based junk removal with fast response, a large box truck, fair pricing, and credit card payments." />
        <meta property="og:url" content="https://hercjunk.com/about" />
        <meta property="og:image" content="https://hercjunk.com/images/hercules-truck.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dylan Thornsberry",
          "jobTitle": "Owner & Operator",
          "worksFor": { "@id": "https://hercjunk.com" },
          "address": { "@type": "PostalAddress", "addressLocality": "Kenmore", "addressRegion": "WA" }
        })}</script>
      </Helmet>
      <main className="bg-[#FFC107] text-black">
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-5">Hi, I'm Dylan.</h1>
                <p className="text-lg leading-relaxed mb-5">I own and operate Hercules Junk Removal in Kenmore. When you call, you speak with me.</p>
                <p className="text-lg leading-relaxed mb-5">I haul furniture, appliances, yard waste, and cleanouts across Kenmore, Bothell, and nearby. You get the total before I start loading.</p>
                <p className="text-base mb-6">Licensed and insured. Cash, card, Venmo, or Zelle.</p>
                <div className="flex flex-wrap items-center gap-5">
                  <Button asChild className="bg-black text-white hover:bg-gray-800 font-bold h-12 px-6">
                    <Link to="/quote">Get a quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                  <a href={`tel:${businessPhoneNumber}`} className="inline-flex items-center gap-2 py-3 text-base font-bold hover:underline">
                    <Phone className="h-5 w-5" /> {businessPhoneNumberFormatted}
                  </a>
                </div>
              </div>
              <img
                className="w-full max-h-[440px] object-cover"
                alt="Dylan, owner of Hercules Junk Removal, in his truck"
                src="/images/dylan-in-truck.jpg"
                width="440"
                height="440"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
