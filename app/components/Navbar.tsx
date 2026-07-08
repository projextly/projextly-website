"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[85%] lg:w-[75%] lg:max-w-6xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border ${
          scrolled
            ? "bg-[#030712]/80 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Brand */}
        <Link href="/" className="relative z-10 flex items-center">
          <Image
            src="/projextly-logo.png"
            alt="Projextly Logo"
            width={120}
            height={40}
            priority
            className="w-28 h-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-2 relative">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="group relative px-5 py-2 inline-block">
                <span className="relative z-10 text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                  {link.label}
                </span>
                <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 ease-out" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link href="/contact" className="hidden md:block">
          <button className="btn-primary group relative overflow-hidden bg-white text-black pl-5 pr-1.5 py-1.5 rounded-full flex items-center gap-3">
            <span className="relative z-10 text-sm font-bold tracking-tight">Start Project</span>
            <div className="relative z-10 w-8 h-8 bg-[#030712] rounded-full flex items-center justify-center text-white group-hover:bg-[#10B981] group-hover:text-black transition-colors duration-300">
              <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </button>
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="text-slate-300 hover:text-white transition-colors cursor-pointer p-2 bg-white/5 rounded-full"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#030712]/95 backdrop-blur-2xl border-white/10 w-80 sm:w-96"
            >
              <SheetHeader>
                <SheetTitle className="text-white text-2xl font-display font-bold tracking-tight text-left">
                  Projextly<span className="text-[#10B981]">.</span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-4 mt-12 px-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-slate-300 hover:text-white hover:pl-4 text-2xl font-display font-medium block transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex"
                  >
                    <button className="w-full btn-primary group relative overflow-hidden bg-white text-black px-6 py-4 rounded-2xl flex items-center justify-between">
                      <span className="relative z-10 text-lg font-bold tracking-tight">Start Project</span>
                      <div className="relative z-10 w-10 h-10 bg-[#030712] rounded-full flex items-center justify-center text-white group-hover:bg-[#10B981] group-hover:text-black transition-colors duration-300">
                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </button>
                  </Link>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
