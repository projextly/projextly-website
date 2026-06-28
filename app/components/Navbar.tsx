"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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
    <header className="sticky top-5 z-40 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-7xl mx-auto">
      <nav className="flex items-center justify-between px-6 py-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold text-white tracking-tight">
          Projextly<span className="text-cyan-400">.</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link href="#contact" className="hidden md:block">
          <Button className="bg-cyan-400 text-black font-semibold rounded-xl hover:bg-cyan-300 hover:scale-105 transition-all duration-200 cursor-pointer">
            Start Project
          </Button>
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <Menu className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/95 backdrop-blur-xl border-white/10 w-[280px]"
            >
              <SheetHeader>
                <SheetTitle className="text-white text-lg font-bold tracking-tight">
                  Projextly<span className="text-cyan-400">.</span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2 mt-8 px-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-gray-400 hover:text-white hover:bg-white/5 rounded-xl px-4 py-3 transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-4"
                >
                  <Button className="w-full bg-cyan-400 text-black font-semibold rounded-xl hover:bg-cyan-300 hover:scale-105 transition-all duration-200 cursor-pointer">
                    Start Project
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
