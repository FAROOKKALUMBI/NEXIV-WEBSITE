"use client";

import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./ui/Logo";

interface NavbarProps {
  onOpenContact?: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", active: true },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white h-14 border-b border-black/[0.06] flex items-center shadow-sm">
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-10 h-full flex justify-between items-center">
        {/* LEFT — Logo */}
        <Logo variant="light" />

        {/* CENTER — Nav (Desktop & Tablet) */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-inter font-medium text-[14px] transition-colors duration-200 ${
                link.active
                  ? "text-black bg-[#F3F3F3] px-3.5 py-1.5 rounded-md"
                  : "text-black hover:text-black/60 px-1 py-1"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* RIGHT — CTA (Desktop) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenContact}
            className="font-inter font-semibold text-[13.5px] bg-[#afe714] text-black px-4 py-2 rounded-[5px] flex items-center gap-2 hover:bg-[#9ccf10] hover:scale-[1.02] transition-all duration-200 shadow-sm cursor-pointer group focus-visible:ring-2 focus-visible:ring-[#afe714]"
          >
            <span>Start a Project</span>
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-md text-black hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#afe714]"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden absolute top-14 left-0 w-full bg-white border-b border-black/[0.08] px-6 py-5 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-inter text-[14.5px] font-medium py-2 border-b border-slate-100 ${
                    link.active ? "text-black font-semibold" : "text-black/80 hover:text-black"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    if (onOpenContact) onOpenContact();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[5px] bg-[#afe714] text-black font-inter font-semibold text-[13.5px] shadow-sm hover:bg-[#9ccf10] transition-colors"
                >
                  <span>Start a Project</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}