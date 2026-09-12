"use client";

import React from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";

interface TopBarProps {
  onOpenContact?: () => void;
}

export function TopBar({ onOpenContact }: TopBarProps) {
  return (
    <div className="bg-[#293541] h-11 border-b border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10 h-full flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[13px] text-white/90">
            <Phone size={14} />
            <span className="font-inter">(+265) 0 884 288 849</span>
          </div>
          <div className="flex items-center gap-2 text-[13px] text-white/90">
            <Mail size={14} />
            <span className="font-inter">nexiv25@gmail.com</span>
          </div>
        </div>
        <button
          onClick={onOpenContact}
          className="font-inter font-medium text-[13px] text-white border border-white/40 px-4 py-1.5 rounded flex items-center gap-2 hover:border-white/70 transition cursor-pointer"
        >
          <span>Contact Us</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
