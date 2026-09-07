import React from 'react';
import { Helmet } from 'react-helmet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "Do you charge extra for anything?",
      answer: "Mattresses, refrigerant appliances, tires, pianos, stairs, or difficult access may cost extra. We confirm the total before loading."
    },
  {
    question: "Do I need to be home?",
      answer: "Not always. If the items are accessible, pickup can usually still happen. Mention it when you book."
  },
    {
      question: "How fast can you come?",
      answer: "Same-day or next-day pickup is often available. Call or request a quote to check."
    },
    {
      question: "How can I pay?",
      answer: "Cash, credit/debit card, Venmo, or Zelle."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-10 md:py-14 bg-gray-50 border-t border-gray-200">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Common questions</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-300"
            >
              <AccordionTrigger className="text-left text-black font-semibold text-base py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
