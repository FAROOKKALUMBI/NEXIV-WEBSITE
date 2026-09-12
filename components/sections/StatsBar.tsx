"use client";

import React from "react";
import { motion } from "framer-motion";

export function StatsBar() {
  return (
    <section className="bg-[#293541] pb-16">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <motion.div
          className="bg-[#afe714] rounded-[10px] px-6 sm:px-10 lg:px-[60px] py-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Stat 1 — Projects Delivered */}
          <div className="flex items-center justify-between md:justify-start gap-6 w-full md:w-auto">
            <div>
              <div className="font-poppins font-bold text-[44px] text-[#293541] leading-none">50+</div>
              <div className="font-inter font-medium text-[15px] text-[#293541] mt-1">Projects Delivered</div>
            </div>
            <div className="w-12 h-12 bg-[#293541] rounded-lg flex items-center justify-center shrink-0 shadow-sm">
              <img src="/icons/briefcase.svg" alt="Projects Delivered" className="w-6 h-6" />
            </div>
          </div>

          <div className="hidden md:block w-px h-14 bg-[#293541]/20 shrink-0" />

          {/* Stat 2 — Years Of Craft */}
          <div className="flex items-center justify-between md:justify-start gap-6 w-full md:w-auto">
            <div>
              <div className="font-poppins font-bold text-[44px] text-[#293541] leading-none">2+</div>
              <div className="font-inter font-medium text-[15px] text-[#293541] mt-1">Years Of Craft</div>
            </div>
            <div className="w-12 h-12 bg-[#293541] rounded-lg flex items-center justify-center shrink-0 shadow-sm">
              <img src="/icons/lightbulb.svg" alt="Years Of Craft" className="w-6 h-6" />
            </div>
          </div>

          <div className="hidden md:block w-px h-14 bg-[#293541]/20 shrink-0" />

          {/* Stat 3 — Happy Client */}
          <div className="flex items-center justify-between md:justify-start gap-6 w-full md:w-auto">
            <div>
              <div className="font-poppins font-bold text-[44px] text-[#293541] leading-none">15+</div>
              <div className="font-inter font-medium text-[15px] text-[#293541] mt-1">Happy Client</div>
            </div>
            <div className="w-12 h-12 bg-[#293541] rounded-lg flex items-center justify-center shrink-0 shadow-sm">
              <img src="/icons/users.svg" alt="Happy Client" className="w-6 h-6" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const StatsBanner = StatsBar;