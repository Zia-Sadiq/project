import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "What types of security services do you offer?",
      answer: "We provide comprehensive security services including concierge security, event security, corporate security, general security, site security, and fire watch security. Each service is tailored to meet specific client needs and industry requirements."
    },
    {
      question: "Are your security personnel licensed and trained?",
      answer: "Yes, all our security personnel are SIA licensed and undergo rigorous training programs. We ensure continuous professional development and regular certification updates to maintain the highest standards of service."
    },
    {
      question: "Do you provide 24/7 security services?",
      answer: "Absolutely. We offer round-the-clock security services with 24/7 monitoring, rapid response capabilities, and continuous communication channels to ensure uninterrupted protection for your property and assets."
    },
    {
      question: "How quickly can you deploy security personnel?",
      answer: "We pride ourselves on rapid deployment capabilities. For emergency situations, we can deploy security personnel within hours. For planned services, we typically arrange deployment within 24-48 hours depending on specific requirements."
    },
    {
      question: "What areas do you service?",
      answer: "Our services extend across major metropolitan areas including downtown business districts, residential communities, industrial complexes, and educational institutions. Contact us to confirm coverage in your specific area."
    },
    {
      question: "Do you offer customized security solutions?",
      answer: "Yes, we specialize in creating customized security solutions based on comprehensive risk assessments. We work closely with clients to understand their unique needs and develop tailored security strategies."
    },
    {
      question: "What is your response time for emergencies?",
      answer: "Our average emergency response time is under 15 minutes in urban areas. We maintain strategic positioning of our mobile units and have established protocols for immediate dispatch and rapid response."
    },
    {
      question: "Do you provide security for special events?",
      answer: "Yes, we offer comprehensive event security services for events of all sizes, from corporate meetings to large-scale concerts. Our services include crowd control, VIP protection, venue security, and emergency response planning."
    }
  ];

  return (
    <section id="faq" className="py-8 md:py-10 bg-white w-full">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our security services</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                <button onClick={() => toggleItem(index)} className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-100 transition-colors">
                  <span className="text-base font-semibold text-gray-800 pr-2">{item.question}</span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-[#2D3E1F] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#2D3E1F] flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-4 pb-3">
                    <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;