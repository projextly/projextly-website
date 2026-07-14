"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SOCIAL_LINKS,
  FOOTER_COMPANY,
  FOOTER_QUICK_LINKS,
} from "@/lib/landing-constants";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/projextly-logo.png"
              alt="Projextly Logo"
              width={130}
              height={45}
              className="mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Premium web design company in Bangalore crafting high-converting
              websites for businesses across India.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.ariaLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 hover:bg-[#E5333B]/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#E5333B] transition-all duration-300 border border-white/[0.06] hover:border-[#E5333B]/30 hover:-translate-y-0.5"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 — Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5333B]" />
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#E5333B] hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5333B]" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#E5333B] hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5333B]" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+918618045456"
                  className="text-gray-400 text-sm hover:text-[#E5333B] transition-colors flex items-center gap-3"
                >
                  <Phone className="w-4 h-4 text-[#E5333B]" />
                  +91 86180 45456
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@projextly.com"
                  className="text-gray-400 text-sm hover:text-[#E5333B] transition-colors flex items-center gap-3"
                >
                  <Mail className="w-4 h-4 text-[#E5333B]" />
                  hello@projextly.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E5333B] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Bangalore, Karnataka
                  <br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Projextly. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-gray-500 text-sm hover:text-[#E5333B] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 text-sm hover:text-[#E5333B] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
