"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenContact?: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative bg-[#293541] pt-10 sm:pt-12 lg:pt-14 pb-0 overflow-hidden">
      {/* Soft diffused ambient glow in background matching Figma target */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-28 w-[680px] h-[680px] rounded-full bg-[#afe714]/14 blur-[130px] pointer-events-none select-none z-0"
      />
      <div
        aria-hidden="true"
        className="absolute top-10 left-1/4 w-[480px] h-[480px] rounded-full bg-[#53ede3]/10 blur-[140px] pointer-events-none select-none z-0"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-28 right-0 w-[780px] h-[780px] rounded-full bg-[#afe714]/12 blur-[150px] pointer-events-none select-none z-0"
      />

      {/* Hero grid */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-10 grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-8 lg:gap-10 items-center">
        
        {/* LEFT COLUMN */}
        <motion.div
          className="flex flex-col items-start z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* H1: Exact 2 lines as in target */}
          <h1 className="font-inter font-semibold text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.12] tracking-[-0.02em] text-white max-w-[480px] mb-4">
            The Nexus Of Creativity<br />And Innovation.
          </h1>

          {/* Paragraph: 3 lines matching target */}
          <p className="font-inter font-normal text-[14px] sm:text-[15px] leading-[1.5] text-white/80 max-w-[420px] mb-6">
            Every Great Brand starts as an idea.<br className="hidden sm:inline" />
            We turn yours into powerful visuals,<br className="hidden sm:inline" />
            Brands &amp; Digital Experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => {
                const el = document.getElementById("work") || document.getElementById("services");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-inter font-medium text-[13.5px] text-white border border-white/50 px-5 py-2.5 rounded-[5px] hover:bg-white/5 transition cursor-pointer"
            >
              View Our Work
            </button>
            <button
              onClick={onOpenContact}
              className="font-inter font-semibold text-[13.5px] text-black bg-[#afe714] px-5 py-2.5 rounded-[5px] flex items-center gap-2 hover:bg-[#9ccf10] transition shadow-sm cursor-pointer group"
            >
              <span>Start a Project</span>
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — illustration */}
        <motion.div
          className="w-full max-w-[480px] lg:max-w-[520px] ml-auto flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <img
            src="/images/hero-illustration.png"
            alt="NEXIV hero illustration"
            className="w-full h-auto block object-contain drop-shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

export const HeroSection = Hero;