"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How secure is my data?",
      answer: "We employ enterprise-grade security measures including end-to-end encryption, SOC2 compliance, and zero-retention policies for all sensitive queries. Your data is never used to train our models without explicit consent."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 7-day free trial on our Pro plan. You can test all features with no commitment. No credit card required to start."
    },
    {
      question: "Can I connect my internal database?",
      answer: "Absolutely. We provide secure connectors for Postgres, MySQL, MongoDB, Snowflake, and many other database systems. You can also connect via custom API."
    },
    {
      question: "Do you offer enterprise support?",
      answer: "Yes, our Custom tier includes 24/7 dedicated phone support, a dedicated account manager, and a guaranteed 99.99% uptime SLA."
    },
    {
      question: "What models do you use?",
      answer: "We support a range of state-of-the-art models including GPT-4, Claude 3.5 Sonnet, and open-source models like Llama 3. You can choose the right model for each specific task."
    },
    {
      question: "How do I invite team members?",
      answer: "You can invite team members from your dashboard settings. Pro plans support unlimited team members with granular role-based access controls."
    }
  ];

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-24 w-full border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Questions answered,<br />
              <span className="text-gray-400">clarity delivered.</span>
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              Have a different question?
            </p>
            <a href="mailto:support@example.com" className="text-sm font-bold text-white hover:text-gray-300 transition-colors underline underline-offset-4 decoration-white/30">
              Email us
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-white/10">
              {faqs.map((faq, i) => (
                <div key={i} className="py-6 first:pt-0 last:pb-0">
                  <button 
                    onClick={() => toggleOpen(i)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className={`text-lg font-medium transition-colors ${openIndex === i ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                      {faq.question}
                    </span>
                    <span className="ml-6 flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white transition-colors group-hover:bg-white/10">
                      {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-400 text-sm leading-relaxed pr-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
