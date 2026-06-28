'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What technologies do you use?',
    a: 'We specialize in React, Next.js, TypeScript, Node.js, and Tailwind CSS. We also work with databases like PostgreSQL and MongoDB, and deploy on platforms like Vercel and AWS.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'A standard website takes 2-4 weeks, while complex web applications can take 6-12 weeks depending on scope. We provide detailed timelines during our initial consultation.',
  },
  {
    q: 'Do you offer ongoing support and maintenance?',
    a: 'Yes! All our packages include post-launch support. We also offer monthly maintenance plans for updates, security patches, performance monitoring, and feature additions.',
  },
  {
    q: 'Can you work with clients outside Bengaluru?',
    a: 'Absolutely. While we are based in Bengaluru, we work with clients across India and internationally. We use modern collaboration tools to ensure seamless communication regardless of location.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer both fixed-price packages and custom quotes based on project scope. Contact us for a free consultation and we will provide a detailed proposal tailored to your needs and budget.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3 text-center">
          Got Questions?
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className="font-medium text-white text-sm group-hover:text-cyan-300 transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
