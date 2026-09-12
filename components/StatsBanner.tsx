"use client";

import React from "react";
import { motion } from "framer-motion";

export function StatsBar() {
  return (
    <section className="bg-[#293541] pt-6 pb-12 sm:pb-16">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <motion.div
          className="bg-[#afe714] rounded-[10px] px-6 sm:px-10 lg:px-12 py-5 lg:py-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Stat 1 — Projects Delivered */}
          <div className="flex items-center justify-between md:justify-start gap-4 lg:gap-5 w-full md:w-auto">
            <div>
              <div className="font-poppins font-bold text-[32px] lg:text-[36px] text-[#293541] leading-none">50+</div>
              <div className="font-inter font-medium text-[13px] text-[#293541] mt-1">Projects Delivered</div>
            </div>
            <div className="w-9 h-9 bg-[#293541] rounded-md flex items-center justify-center shrink-0 shadow-sm">
              <img src="/icons/briefcase.svg" alt="Projects Delivered" className="w-5 h-5" />
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-[#293541]/20 shrink-0" />

          {/* Stat 2 — Years Of Craft */}
          <div className="flex items-center justify-between md:justify-start gap-4 lg:gap-5 w-full md:w-auto">
            <div>
              <div className="font-poppins font-bold text-[32px] lg:text-[36px] text-[#293541] leading-none">2+</div>
              <div className="font-inter font-medium text-[13px] text-[#293541] mt-1">Years Of Craft</div>
            </div>
            <div className="w-9 h-9 bg-[#293541] rounded-md flex items-center justify-center shrink-0 shadow-sm">
              <img src="/icons/lightbulb.svg" alt="Years Of Craft" className="w-5 h-5" />
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-[#293541]/20 shrink-0" />

          {/* Stat 3 — Happy Client */}
          <div className="flex items-center justify-between md:justify-start gap-4 lg:gap-5 w-full md:w-auto">
            <div>
              <div className="font-poppins font-bold text-[32px] lg:text-[36px] text-[#293541] leading-none">15+</div>
              <div className="font-inter font-medium text-[13px] text-[#293541] mt-1">Happy Client</div>
            </div>
            <div className="w-9 h-9 bg-[#293541] rounded-md flex items-center justify-center shrink-0 shadow-sm">
              <img src="/icons/users.svg" alt="Happy Client" className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const StatsBanner = StatsBar;