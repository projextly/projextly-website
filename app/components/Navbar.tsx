"use client";

import { useState } from "react";
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

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-5 z-40 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-7xl mx-auto ">
      <nav className="flex items-center justify-between px-6 py-3 bg-black/50 backdrop-blur-[20px] border-[1.5px] border-white/10 rounded-full shadow-sm p-[1.5px]">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold text-white tracking-tight">
         <Image 
          src="/projextly-logo.png"
          alt="Projextly Logo"
          width={120}
          height={40}
          priority
         />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link href="/contact" className="hidden md:block">
          <Button className="bg-white rounded-full text-black gap-2 group">
            <span className="text-sm">Start Project</span>
            <div className="icon-circle">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Button>
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <Menu className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#060B12]/95 backdrop-blur-xl border-white/10 w-70"
            >
              <SheetHeader>
                <SheetTitle className="text-white text-lg font-bold tracking-tight">
                  Projextly<span className="text-[#34D399]">.</span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2 mt-8 px-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-gray-300 hover:text-white hover:bg-white/5 rounded-xl px-4 py-3 transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 flex"
                >
                  <Button className="btn-primary group w-full flex justify-between items-center gap-2 bg-amber-50">
                    <span className="text-sm">Start Project</span>
                    <div className="icon-circle">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
