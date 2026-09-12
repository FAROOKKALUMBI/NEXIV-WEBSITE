"use client";

import React from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";

interface TopBarProps {
  onOpenContact?: () => void;
}

export function TopBar({ onOpenContact }: TopBarProps) {
  return (
    <div className="bg-[#293541] h-9 border-b border-white/[0.08] relative z-40">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 h-full flex justify-between items-center">
        {/* Contact info - hidden on small mobile, visible from sm up */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href="tel:+265884288849"
            className="flex items-center gap-1.5 text-[12px] text-white/90 hover:text-[#afe714] transition-colors font-inter"
          >
            <Phone size={13} />
            <span>(+265) 0 884 288 849</span>
          </a>
          <a
            href="mailto:nexiv25@gmail.com"
            className="flex items-center gap-1.5 text-[12px] text-white/90 hover:text-[#afe714] transition-colors font-inter"
          >
            <Mail size={13} />
            <span>nexiv25@gmail.com</span>
          </a>
        </div>

        {/* Mobile quick call text */}
        <div className="sm:hidden flex items-center text-[11px] text-white/80 font-inter">
          <span>(+265) 0 884 288 849</span>
        </div>

        {/* Contact Us button */}
        <button
          onClick={onOpenContact}
          className="font-inter font-medium text-[12px] text-white border border-white/40 px-3 py-1 rounded flex items-center gap-1.5 hover:border-white hover:bg-white/5 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#afe714]"
        >
          <span>Contact Us</span>
          <ArrowRight size={13} className="transition-transform duration-200 hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
