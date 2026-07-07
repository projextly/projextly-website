"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronUp, ChevronDown, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  return (
    <nav 
      className="w-full bg-black text-white relative z-50 border-b border-[#1a1a1a]"
      onMouseLeave={() => setIsFeaturesOpen(false)}
    >
      <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-[#7B00FF]"></div>
          <Link href="/" className="flex items-center gap-2 text-sm font-bold tracking-wider">
            <span className="text-white">MYGOM</span>
            <span className="text-gray-500">SEO</span>
          </Link>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-10 text-[10px] font-bold tracking-[0.15em] text-gray-300">
          <div 
            className="relative flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors py-8"
            onMouseEnter={() => setIsFeaturesOpen(true)}
          >
            FEATURES
            {isFeaturesOpen ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </div>
          <Link href="/pricing" className="hover:text-white transition-colors py-8">PRICING</Link>
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors py-8">
            RESOURCES
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
          <Link href="/about" className="hover:text-white transition-colors py-8">ABOUT</Link>
          <Link href="/contact" className="hover:text-white transition-colors py-8">CONTACT</Link>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-8 text-[10px] font-bold tracking-[0.15em]">
          <Link href="/login" className="text-gray-300 hover:text-white transition-colors">SIGN IN</Link>
          <Link href="/trial" className="bg-[#7B00FF] hover:bg-[#6a00de] text-white px-6 py-3 transition-colors">
            START 7-DAY TRIAL
          </Link>
        </div>
      </div>

      {/* Mega Menu */}
      <div 
        className={`absolute top-full left-0 w-full bg-black border-b border-[#1a1a1a] transition-all duration-300 origin-top overflow-hidden ${
          isFeaturesOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 h-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 py-16 flex gap-32">
          {/* Column 1 */}
          <div className="w-[300px] space-y-10">
            <h3 className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase">SEO Tools</h3>
            <div className="flex flex-col gap-8">
              <div className="group cursor-pointer">
                <div className="text-[12px] font-bold tracking-widest text-white mb-2 group-hover:text-[#7B00FF] transition-colors uppercase">
                  Website Audit
                </div>
                <div className="text-[12px] text-gray-500 font-normal">20+ technical checks</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-[12px] font-bold tracking-widest text-white mb-2 group-hover:text-[#7B00FF] transition-colors uppercase">
                  Keyword Tracking
                </div>
                <div className="text-[12px] text-gray-500 font-normal">SERP monitoring</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-[12px] font-bold tracking-widest text-white mb-2 group-hover:text-[#7B00FF] transition-colors uppercase">
                  Backlink Tracker
                </div>
                <div className="text-[12px] text-gray-500 font-normal">Link profile analysis</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-[12px] font-bold tracking-widest text-white mb-2 group-hover:text-[#7B00FF] transition-colors uppercase">
                  Content Analyzer
                </div>
                <div className="text-[12px] text-gray-500 font-normal">On-page SEO scoring</div>
              </div>
            </div>
            
            <div className="pt-2 flex items-center gap-2 text-[10px] text-gray-500 font-bold tracking-widest cursor-pointer hover:text-white transition-colors">
              ALL FEATURES <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
          
          {/* Column 2 */}
          <div className="w-[300px] space-y-10">
            <h3 className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase">Content & Social</h3>
            <div className="flex flex-col gap-8">
              <div className="group cursor-pointer">
                <div className="text-[12px] font-bold tracking-widest text-white mb-2 group-hover:text-[#7B00FF] transition-colors uppercase">
                  AI Content Writer
                </div>
                <div className="text-[12px] text-gray-500 font-normal">Generate & publish to CMS</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-[12px] font-bold tracking-widest text-white mb-2 group-hover:text-[#7B00FF] transition-colors uppercase">
                  Social Media Manager
                </div>
                <div className="text-[12px] text-gray-500 font-normal">Schedule & post everywhere</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-[12px] font-bold tracking-widest text-white mb-2 group-hover:text-[#7B00FF] transition-colors uppercase">
                  AI Marketing Agent
                </div>
                <div className="text-[12px] text-gray-500 font-normal">Your autonomous CMO</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-[12px] font-bold tracking-widest text-white mb-2 group-hover:text-[#7B00FF] transition-colors uppercase">
                  SEO MCP Server
                </div>
                <div className="text-[12px] text-gray-500 font-normal">Connect Claude, Cursor & Coder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
