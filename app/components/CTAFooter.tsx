"use client";

import Link from 'next/link';
import { SOCIAL_LINKS, FOOTER_SERVICES, FOOTER_COMPANY } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-[#030712] rounded-t-[3rem] mt-[-3rem] z-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#10B981]/10 via-[#030712]/80 to-[#030712] pointer-events-none" />
      <div className="grain-overlay pointer-events-none opacity-20" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-[#10B981] font-medium tracking-widest uppercase text-sm mb-6 block">
            Got a project in mind?
          </span>
          <h2 className="text-7xl sm:text-8xl md:text-[9rem] font-display font-black text-white leading-none tracking-tighter hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-[#10B981] transition-all duration-700 cursor-default">
            LET'S TALK
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/contact" className="group">
            <button className="magnetic-btn bg-white text-black rounded-full pl-8 pr-3 py-3 flex items-center gap-6 text-xl font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)]">
              <span>Start the conversation</span>
              <div className="w-12 h-12 bg-[#030712] text-white rounded-full flex items-center justify-center group-hover:bg-[#10B981] group-hover:text-black transition-colors">
                <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-[#030712] pt-24 pb-12 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Image 
                src="/projextly-logo.png"
                alt="Projextly Logo"
                width={160}
                height={54}
                className="mb-8"
              />
              <p className="text-slate-400 text-lg leading-relaxed max-w-sm mb-8 font-medium">
                We engineer digital experiences that push boundaries. Based in Bengaluru, working globally.
              </p>
            </div>
            
            <div className="flex gap-4 mt-auto">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.ariaLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#10B981] hover:bg-[#10B981]/10 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-1 hidden lg:block" />

          {/* Links Col 1 */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-display font-semibold text-lg mb-8">Services</h4>
            <ul className="space-y-4">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-[#10B981] text-base transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#10B981] transition-all duration-300 group-hover:w-4" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-display font-semibold text-lg mb-8">Company</h4>
            <ul className="space-y-4">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#10B981] text-base transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#10B981] transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 font-medium">
            © {new Date().getFullYear()} Projextly. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-slate-500 hover:text-white transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-500 hover:text-white transition-colors font-medium">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
