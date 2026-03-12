import React from 'react';
import { Helmet } from 'react-helmet';
import Cta from '@/components/sections/Cta';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: "What do you take?",
    answer: "Pretty much anything non-hazardous that two people can lift. Furniture, appliances, yard waste, construction debris, hot tubs, and general household junk.",
  },
  {
    question: "What don't you take?",
    answer: "We can't take hazardous stuff. No paint, chemicals, asbestos, batteries, fuel, or propane tanks.",
  },
  {
    question: "How does pricing work?",
    answer: "It's based on how much space your stuff takes up in the truck. Our prices cover everything: labor, travel, and disposal. No hidden fees. We'll give you a firm price before we start.",
  },
  {
    question: "Can you come today?",
    answer: "Often, yes. Call or text us early in the day for the best chance.",
  },
  {
    question: "Do I need to be there?",
    answer: "Ideally, yes, so we can agree on the price. But if the stuff is outside (curb or driveway), we can quote you over the phone, send photos when we're done, and take payment remotely.",
  },
  {
    question: "Do you clean up after?",
    answer: "Always. We sweep up the area before we leave so your space looks good.",
  },
  {
    question: "How can I pay?",
    answer: "We accept cash, cards, and Venmo. You only pay once the job is done and you're happy.",
  }
];

const FaqPage = () => {
    const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
       <Helmet>
        <title>Junk Removal FAQ | Hercules Junk Removal | Kenmore & Greater Seattle</title>
        <meta name="description" content="Get answers to your junk removal questions. Learn what we take, pricing, scheduling & payment options. Serving Kenmore, Bothell, Kirkland & Greater Seattle." />
        <link rel="canonical" href="https://herculesjunkremoval.com/faq" />
         <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="flex-grow bg-gray-50">
        <main>
          <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6">Common Questions</h1>
                <p className="text-lg md:text-xl text-gray-300">
                  Got questions? We've got answers. Here's what you need to know about clearing out your clutter.
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 px-4">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-100">
                {faqData.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-b-0 py-2">
                    <AccordionTrigger className="text-lg sm:text-xl font-bold text-left text-gray-900 hover:text-yellow-600 hover:no-underline py-5 transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-gray-600 leading-relaxed pr-4 pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
          
          <Cta />
        </main>
      </div>
    </>
  );
};

export default FaqPage;