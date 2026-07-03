import Link from "next/link";
import {  Disc as Discord } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-20 w-full border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Logo & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2.5 h-2.5 bg-[#7B00FF]"></div>
              <span className="text-white text-sm font-bold tracking-wider">MYGOM</span>
              <span className="text-gray-500 text-sm font-bold tracking-wider">SEO</span>
            </div>
            <p className="text-sm text-gray-500 mb-8 max-w-sm leading-relaxed">
              The complete stack for smarter AI assistants. Build, deploy, and scale with integrated workflows.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 flex-1 max-w-[240px]"
              />
              <button className="bg-white text-black px-4 py-2.5 rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Integrations</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Changelog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Docs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Status</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-bold mb-6">Social</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors">
                 Twitter
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors">
                 GitHub
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors">
                Discord
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors">
                {/* <Linkedin className="w-4 h-4" />  */}
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <div>&copy; {new Date().getFullYear()} MYGOM SEO Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-400">Privacy</Link>
            <Link href="#" className="hover:text-gray-400">Terms</Link>
            <Link href="#" className="hover:text-gray-400">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
