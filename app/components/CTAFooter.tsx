import Link from 'next/link';
import { SOCIAL_LINKS, FOOTER_SERVICES, FOOTER_COMPANY } from '@/lib/constants';

export function CTA() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-[#060B12]">
      {/* Glowing Arc */}
      <div className="absolute -top-[50px] w-[120%] -left-[10%] h-[100px] border-b border-[#00e5ff]/20 rounded-b-[50%] shadow-[0_20px_50px_-10px_rgba(0,229,255,0.2)] pointer-events-none glowing-arc" />
      
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
          Let us turn your vision into a stunning digital reality. Get in touch
          for a free consultation and project estimate.
        </p>
        <a
          href="mailto:hello@projextly.com"
          className="btn-brainhub inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold shadow-sm hover:shadow-md transition-all text-sm"
        >
          GET STARTED TODAY →
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#060B12] pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-2">
            <span className="block text-2xl font-bold text-white mb-1">
              Projextly<span className="text-[#00e5ff]">.</span>
            </span>
            <p className="text-[#00e5ff] text-sm font-medium mb-4">
              Web Development Agency
            </p>
            <p className="text-gray-400 text-sm">
              Bengaluru, Karnataka, India
            </p>
            <div className="flex gap-3 mt-5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  className="w-9 h-9 bg-white/5 hover:bg-[#00e5ff]/10 rounded-full flex items-center justify-center text-gray-400 hover:text-[#00e5ff] transition-colors border border-white/10 text-xs font-semibold"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-gray-400 text-sm hover:text-[#00e5ff] transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#00e5ff] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            © 2026 Projextly. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="#"
              className="text-gray-400 text-xs hover:text-[#00e5ff] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 text-xs hover:text-[#00e5ff] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
