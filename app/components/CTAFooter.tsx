"use client";

import Link from 'next/link';
import { SOCIAL_LINKS, FOOTER_SERVICES, FOOTER_COMPANY } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function CTA() {
  return (
    <section id="contact" className="section-dark relative py-24 overflow-hidden bg-black">
      <div className="grain-overlay" />
      {/* Glowing Arc */}
      <div className="absolute -top-[50px] w-[120%] -left-[10%] h-[100px] border-b border-[#34D399]/20 rounded-b-[50%] shadow-[0_20px_50px_-10px_rgba(52,211,153,0.2)] pointer-events-none glowing-arc" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
          Let us turn your vision into a stunning digital reality. Get in touch
          for a free consultation and project estimate.
        </p>
        <a href="mailto:hello@projextly.com">
          <button className="btn-primary group mx-auto mt-4">
            <span className="text-sm font-medium">GET STARTED TODAY</span>
            <div className="icon-circle">
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
          </button>
        </a>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 pb-8 pt-8 relative z-10 bg-white/99">
      <div className="max-w-7xl mx-auto bg-zinc-950 border border-white/5 rounded-[2.5rem] p-10 sm:p-16 shadow-[0_0_50px_rgba(52,211,153,0.03)] relative overflow-hidden">
        {/* Subtle glow effect inside footer */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#34D399]/5 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-2">
            <Image 
              src="/projextly-logo.png"
              alt="Projextly Logo"
              width={150}
              height={50}
              className="mb-2"
            />
            <p className="text-[#34D399] text-sm font-medium mb-5">
              Web Development Agency
            </p>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
              Bengaluru, Karnataka, India
              <br />
              Crafting premium digital experiences for the modern web.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.ariaLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 hover:bg-[#34D399]/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#34D399] transition-all duration-300 border border-white/5 hover:border-[#34D399]/30 hover:-translate-y-1"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-gray-400 text-sm hover:text-[#34D399] hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#34D399] hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <p className="text-gray-500 text-sm">
            © 2026 Projextly. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-500 text-sm hover:text-[#34D399] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 text-sm hover:text-[#34D399] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
