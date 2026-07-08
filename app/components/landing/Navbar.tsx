"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/landing-constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-5 z-50 w-[90%] md:w-[75%] lg:max-w-7xl mx-auto">
      <nav
        className={`flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-black/80 backdrop-blur-xl"
            : "border-white/[0.06] bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/projextly-logo.png"
            width={120}
            height={40}
            priority
            alt="Projextly Logo"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/70 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a href="#contact">
            <button className="bg-[#E5333B] text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-[#C42A31] transition-all duration-300 hover:scale-105 cursor-pointer">
              Get Free Quote
            </button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/95 backdrop-blur-xl border-white/10 w-[300px]"
            >
              <SheetHeader>
                <SheetTitle className="text-white text-left">
                  <Image
                    src="/projextly-logo.png"
                    width={100}
                    height={32}
                    alt="Projextly Logo"
                  />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-white/70 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-all duration-200 text-base"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="btn-primary-red flex items-center justify-center gap-2 w-full"
                  >
                    Get Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
