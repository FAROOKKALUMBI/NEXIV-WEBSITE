"use client";

import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "../ui/Logo";

interface NavbarProps {
  onOpenContact?: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white h-14 border-b border-black/[0.06] flex items-center shadow-sm">
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-10 h-full flex justify-between items-center">
        {/* LEFT — Logo */}
        <Logo variant="light" />

        {/* CENTER — Nav */}
        <div className="hidden md:flex items-center gap-7">
          <a href="#home" className="font-inter font-medium text-[14px] text-black bg-[#F3F3F3] px-3.5 py-1.5 rounded-md">Home</a>
          <a href="#about" className="font-inter font-medium text-[14px] text-black hover:text-black/70 transition">About</a>
          <a href="#services" className="font-inter font-medium text-[14px] text-black hover:text-black/70 transition">Services</a>
          <a href="#work" className="font-inter font-medium text-[14px] text-black hover:text-black/70 transition">Work</a>
          <a href="#process" className="font-inter font-medium text-[14px] text-black hover:text-black/70 transition">Process</a>
        </div>

        {/* RIGHT — CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenContact}
            className="font-inter font-semibold text-[13.5px] bg-[#afe714] text-black px-4 py-2 rounded-[5px] flex items-center gap-2 hover:bg-[#9ccf10] transition shadow-sm cursor-pointer group"
          >
            <span>Start a Project</span>
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-md text-black hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-white border-b border-black/[0.08] px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="font-inter text-[14px] font-medium text-black py-2 border-b border-slate-100">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="font-inter text-[14px] font-medium text-black py-2 border-b border-slate-100">About</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="font-inter text-[14px] font-medium text-black py-2 border-b border-slate-100">Services</a>
            <a href="#work" onClick={() => setIsOpen(false)} className="font-inter text-[14px] font-medium text-black py-2 border-b border-slate-100">Work</a>
            <a href="#process" onClick={() => setIsOpen(false)} className="font-inter text-[14px] font-medium text-black py-2 border-b border-slate-100">Process</a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  if (onOpenContact) onOpenContact();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[5px] bg-[#afe714] text-black font-inter font-semibold text-[13.5px] shadow-sm"
              >
                <span>Start a Project</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}