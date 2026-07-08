"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#030712] py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#10B981] font-semibold text-xs uppercase tracking-[0.3em] mb-4">
            Intelligence
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-4"
        >
          {FAQ_ITEMS.map((faq, index) => (
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              key={index}
              className={`glass-panel border transition-all duration-300 rounded-2xl overflow-hidden ${
                openIndex === index 
                  ? "bg-white/[0.04] border-[#10B981]/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]" 
                  : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full flex items-center justify-between px-6 py-6 sm:px-8 text-left group"
              >
                <span className={`font-display font-bold text-base sm:text-lg transition-colors duration-300 ${openIndex === index ? "text-[#10B981]" : "text-white group-hover:text-[#10B981]"}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? "bg-[#10B981] border-[#10B981]" : "border-white/20 group-hover:border-[#10B981]"}`}>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180 text-black' : 'text-slate-400 group-hover:text-[#10B981]'
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    id={`faq-answer-${index}`}
                    role="region"
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-8 sm:px-8 text-slate-400 text-base leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
