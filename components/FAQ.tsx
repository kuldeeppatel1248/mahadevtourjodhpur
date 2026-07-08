import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#0F0F0F]">
      {/* Decorative Gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-semibold text-xs tracking-[0.3em] uppercase mb-3 block">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Frequently Asked <span className="text-gold font-bold">Questions</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Everything you need to know about booking, transparent rates, custom route itineraries, and tourist guidelines in Rajasthan.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-[#141414]/90 border border-white/5 overflow-hidden transition-all duration-300"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <span className="text-[#D4AF37] shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {/* Answer panel */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 border-t border-white/5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <p className="p-6 text-xs sm:text-sm text-gray-300 leading-relaxed bg-[#0D0D0D]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
