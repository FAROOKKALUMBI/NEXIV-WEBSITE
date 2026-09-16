"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16 lg:pb-4"
      style={{
        background: `
          linear-gradient(to bottom, transparent 0%, transparent 72%, rgba(41, 53, 65, 0.56) 88%, #293541 100%),
          radial-gradient(ellipse 30% 72% at -7% 14%, rgba(112, 149, 54, 0.40) 0%, rgba(87, 119, 53, 0.25) 48%, transparent 86%),
          radial-gradient(ellipse 22% 43% at 29% 2%, rgba(103, 139, 56, 0.24) 0%, rgba(67, 87, 57, 0.13) 54%, transparent 88%),
          radial-gradient(ellipse 34% 70% at -5% 105%, rgba(112, 149, 54, 0.43) 0%, rgba(82, 112, 51, 0.25) 50%, transparent 88%),
          #293541
        `,
      }}
    >

      {/* Hero grid */}
      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-5 sm:px-10 lg:grid-cols-[1fr_1.22fr] lg:gap-12">
        
        {/* LEFT COLUMN */}
        <motion.div
          className="flex flex-col items-start z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* H1: Exact 2 lines */}
          <h1 className="font-poppins font-bold text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.12] tracking-[-0.5px] text-white max-w-[500px] mb-6 lg:mb-12">
            The Nexus Of Creativity<br />And Innovation.
          </h1>

          {/* Paragraph: Exact 2 lines only as requested */}
          <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[1.55] text-white/85 max-w-[480px] mb-8 lg:mb-16">
            Every Great Brand starts as an idea. We turn yours into<br className="hidden sm:inline" />
            powerful visuals, Brands &amp; Digital Experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a
              href="/work"
              className="font-inter font-medium text-[13.5px] text-white border border-white/50 px-5 py-2.5 rounded-md hover:bg-white/10 hover:border-white/90 active:scale-[0.98] transition-all duration-200 cursor-pointer text-center focus-visible:ring-2 focus-visible:ring-[#afe714]"
            >
              View Our Work
            </a>
            <Link
              href="/start-a-project"
              className="font-inter font-semibold text-[13.5px] text-[#293541] bg-[#afe714] px-5 py-2.5 rounded-md flex items-center justify-center gap-2 hover:bg-white hover:text-[#293541] active:bg-white/90 active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer group focus-visible:ring-2 focus-visible:ring-[#afe714]"
            >
              <span>Start a Project</span>
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1 text-[#293541]" />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — Original illustration image */}
        <motion.div
          className="relative mx-auto flex w-full max-w-[500px] items-center justify-center lg:ml-auto lg:max-w-[640px] lg:translate-y-8 lg:justify-end"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full relative"
          >
            <img
              src="/images/hero-illustration.png"
              alt="NEXIV design workspace illustration"
              className="block h-auto w-full object-contain [image-rendering:-webkit-optimize-contrast]"
              loading="eager"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export const HeroSection = Hero;
