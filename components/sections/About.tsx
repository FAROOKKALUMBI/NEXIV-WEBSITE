"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface AboutProps {
  onLearnMore?: () => void;
}

export function About({ onLearnMore }: AboutProps) {
  return (
    <section id="about" className="w-full bg-[#F5F5F5] py-[100px] lg:py-[120px] text-[#111111]">
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Image Card with about-hand.png & Overlapping Badge */}
          <div className="relative w-full max-w-[500px] mx-auto lg:mx-0">
            {/* Hand graphic container */}
            <div className="relative rounded-[20px] overflow-hidden bg-[#0F1419] shadow-2xl border border-black/10">
              <img
                src="/images/about-hand.png"
                alt="Nexiv Creative Hand"
                className="w-full h-auto object-cover block"
              />
            </div>

            {/* Overlapping card (10+ Certified Creatives) */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-[#0F1419] rounded-[12px] p-5 sm:p-6 shadow-2xl border border-white/10 z-20 max-w-[340px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  <div className="h-9 w-9 rounded-full bg-[#333333] border-2 border-[#0F1419] flex items-center justify-center text-[10px] font-bold text-white font-inter">
                    NX
                  </div>
                  <div className="h-9 w-9 rounded-full bg-[#444444] border-2 border-[#0F1419] flex items-center justify-center text-[10px] font-bold text-white font-inter">
                    CR
                  </div>
                  <div className="h-9 w-9 rounded-full bg-[#555555] border-2 border-[#0F1419] flex items-center justify-center text-[10px] font-bold text-white font-inter">
                    UX
                  </div>
                </div>
                <div className="flex items-baseline gap-1.5 ml-1">
                  <span className="font-poppins font-bold text-[22px] text-white leading-none">
                    10+
                  </span>
                  <span className="font-inter font-medium text-[13px] text-[#8A8A8A]">
                    Certified Creatives
                  </span>
                </div>
              </div>
              <p className="font-inter text-[13px] text-white/75 leading-[1.5]">
                A dedicated team of creatives, designers and strategists ready to support and grow your brand, 24/7.
              </p>
            </div>
          </div>

          {/* RIGHT: About Details */}
          <div className="flex flex-col items-start pt-8 lg:pt-0">
            {/* Cyan badge: "About Nexiv" */}
            <span className="inline-block px-3.5 py-1.5 rounded-md bg-[#4DD9D9] text-[#111111] font-inter font-semibold text-[13px]">
              About Nexiv
            </span>

            {/* H2: Poppins 700, 40px, line-height 1.15, uppercase */}
            <h2 className="font-poppins font-bold text-[32px] sm:text-[40px] text-[#111111] leading-[1.15] uppercase tracking-tight mt-5">
              MALAWI&apos;S BEST<br />CREATIVE STUDIO
            </h2>

            {/* Paragraph: Inter 400, 16px, line-height 1.6, color #4A4A4A */}
            <p className="font-inter font-normal text-[16px] text-[#4A4A4A] leading-[1.6] max-w-[500px] mt-5">
              We bring creativity, design and technology together to build standout brands, identities and digital experiences that look great and perform.
            </p>

            {/* Button */}
            <button
              onClick={onLearnMore}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#0F1419] hover:bg-[#1a232c] text-white font-inter font-semibold text-[15px] transition-all group cursor-pointer shadow-sm"
            >
              <span>Learn More About Us</span>
              <ArrowRight size={16} className="text-white transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export const AboutSection = About;
