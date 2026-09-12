"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenContact?: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section id="home" className="relative bg-[#293541] pt-10 sm:pt-14 lg:pt-16 pb-6 overflow-hidden">
      {/* Soft ambient glows in background */}
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
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-10 grid grid-cols-1 lg:grid-cols-[1fr_1.22fr] gap-10 lg:gap-12 items-center">
        
        {/* LEFT COLUMN */}
        <motion.div
          className="flex flex-col items-start z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* H1: Exact 2 lines */}
          <h1 className="font-poppins font-bold text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.12] tracking-[-0.5px] text-white max-w-[500px] mb-6">
            The Nexus Of Creativity<br />And Innovation.
          </h1>

          {/* Paragraph: 3 lines */}
          <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.55] text-white/85 max-w-[440px] mb-8">
            Every Great Brand starts as an idea.<br className="hidden sm:inline" />
            We turn yours into powerful visuals,<br className="hidden sm:inline" />
            Brands &amp; Digital Experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => {
                const el = document.getElementById("work") || document.getElementById("services");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-inter font-medium text-[13.5px] text-white border border-white/50 px-5 py-2.5 rounded-md hover:bg-white/5 hover:border-white/80 transition-all duration-200 cursor-pointer text-center focus-visible:ring-2 focus-visible:ring-[#afe714]"
            >
              View Our Work
            </button>
            <button
              onClick={onOpenContact}
              className="font-inter font-semibold text-[13.5px] text-black bg-[#afe714] px-5 py-2.5 rounded-md flex items-center justify-center gap-2 hover:bg-[#9ccf10] hover:scale-[1.02] transition-all duration-200 shadow-sm cursor-pointer group focus-visible:ring-2 focus-visible:ring-[#afe714]"
            >
              <span>Start a Project</span>
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — illustration */}
        <motion.div
          className="w-full max-w-[480px] lg:max-w-[540px] mx-auto lg:ml-auto flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, y: 30 }}
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