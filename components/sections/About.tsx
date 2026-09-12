"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface AboutProps {
  onLearnMore?: () => void;
}

export function About({ onLearnMore }: AboutProps) {
  return (
    <section id="about" className="w-full bg-[#F5F5F5] py-[80px] lg:py-[110px] text-[#293541] overflow-hidden relative z-10">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          
          {/* LEFT: Image Card with about-hand.png & Overlapping Badge */}
          <div className="lg:col-span-6 relative w-full max-w-[480px] mx-auto lg:mx-0">
            {/* Hand graphic container */}
            <div className="relative rounded-[22px] overflow-hidden bg-[#1a222a] shadow-2xl border border-black/10">
              <img
                src="/images/about-hand.png"
                alt="Nexiv Creative Hand"
                className="w-full h-auto object-cover block"
              />
            </div>

            {/* Overlapping card (10+ Certified Creatives) positioned at bottom-right */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-6 lg:-right-8 bg-[#293541] rounded-[10px] p-4 sm:p-5 lg:p-6 shadow-2xl border border-white/10 z-20 w-[270px] sm:w-[310px]">
              <div className="flex items-center gap-3.5 mb-2.5">
                {/* 3 clean overlapping circle avatars */}
                <div className="flex -space-x-3 shrink-0">
                  <div className="h-8 w-8 rounded-full bg-[#f1f5f9] border-2 border-[#293541]" />
                  <div className="h-8 w-8 rounded-full bg-[#cbd5e1] border-2 border-[#293541]" />
                  <div className="h-8 w-8 rounded-full bg-[#94a3b8] border-2 border-[#293541]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-poppins font-bold text-[22px] text-white leading-none">
                    10+
                  </span>
                  <span className="font-inter font-semibold text-[11.5px] sm:text-[12px] text-white/90 leading-tight mt-0.5">
                    Certified Creatives
                  </span>
                </div>
              </div>
              <p className="font-inter text-[11.5px] sm:text-[12px] text-white/80 leading-[1.5]">
                A dedicated team of creatives, designers and strategists ready to support and grow your brand, 24/7.
              </p>
            </div>
          </div>

          {/* RIGHT: About Details */}
          <div className="lg:col-span-6 flex flex-col items-start lg:pl-6">
            {/* Cyan badge: "About Nexiv" */}
            <span className="inline-block px-4 py-1.5 rounded-md bg-[#53ede3] text-[#293541] font-inter font-bold text-[13.5px] shadow-sm">
              About Nexiv
            </span>

            {/* H2: Poppins Bold, uppercase */}
            <h2 className="font-poppins font-bold text-[32px] sm:text-[40px] lg:text-[44px] text-[#293541] leading-[1.1] uppercase tracking-[-0.01em] mt-5 mb-4">
              MALAWI’S BEST<br />CREATIVE STUDIO
            </h2>

            {/* Paragraph: Inter 400 */}
            <p className="font-inter font-normal text-[15px] sm:text-[16px] text-[#293541]/80 leading-[1.65] max-w-[480px] mb-8">
              We bring creativity, design and technology together to build standout brands, identities and digital experiences that look great and perform.
            </p>

            {/* Button */}
            <button
              onClick={onLearnMore}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-md bg-[#293541] hover:bg-[#1f2832] hover:scale-[1.02] text-white font-inter font-medium text-[13.5px] transition-all duration-200 group cursor-pointer shadow-md focus-visible:ring-2 focus-visible:ring-[#afe714]"
            >
              <span>Learn More About Us</span>
              <ArrowRight size={15} className="text-white transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export const AboutSection = About;
