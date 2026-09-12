"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Monitor } from "lucide-react";

interface CtaProps {
  onOpenContact?: () => void;
}

export function CTA({ onOpenContact }: CtaProps) {
  return (
    <section id="contact" className="w-full bg-[#FFFFFF] py-[100px]">
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative bg-[#293541] rounded-2xl px-6 sm:px-[60px] py-20 text-center shadow-2xl overflow-hidden"
        >
          {/* Subtle inner top glow */}
          <div
            aria-hidden="true"
            className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#afe714]/8 blur-[100px] pointer-events-none select-none z-0"
          />

          <div className="relative z-10">
            {/* Envelope icon block */}
            <div className="w-[56px] h-[56px] bg-[#afe714] rounded-[8px] flex items-center justify-center mx-auto mb-[32px] shadow-sm">
              <Mail className="w-[26px] h-[26px] text-[#293541] stroke-[2.4]" />
            </div>

            {/* H2 */}
            <h2 className="font-poppins font-bold text-[28px] sm:text-[36px] text-white leading-[1.2] max-w-[700px] mx-auto tracking-tight">
              Ready To Grow Your Business Through <br className="hidden sm:inline" />
              Great Design?
            </h2>

            {/* Paragraph */}
            <p className="font-inter font-normal text-[16px] text-white/80 mt-[16px] max-w-xl mx-auto">
              Partner With NEXIV For Creative, Strategic And Scalable Digital Experiences.
            </p>

            {/* Buttons row */}
            <div className="flex flex-wrap items-center justify-center gap-[16px] mt-[32px]">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-[24px] py-[14px] rounded-[6px] border border-white/50 bg-transparent hover:bg-white/10 text-white font-inter font-medium text-[15px] transition-all cursor-pointer"
              >
                <Monitor className="w-4 h-4 text-white" />
                <span>Start a Project</span>
              </button>

              <a
                href="tel:+265884288849"
                className="inline-flex items-center gap-2 px-[24px] py-[14px] rounded-[6px] bg-[#afe714] hover:bg-[#9ccf10] text-black font-inter font-semibold text-[15px] transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-black" />
                <span>Call Us Now</span>
              </a>
            </div>

            {/* Contact row */}
            <div className="flex flex-wrap items-center justify-center gap-[32px] mt-[40px] text-white/75 font-inter text-[14px]">
              <a
                href="tel:+265884288849"
                className="inline-flex items-center gap-2 hover:text-[#afe714] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#afe714]" />
                <span className="font-inter">(+265) 884 288 849</span>
              </a>
              <a
                href="mailto:nexiv25@gmail.com"
                className="inline-flex items-center gap-2 hover:text-[#afe714] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#afe714]" />
                <span className="font-inter">nexiv25@gmail.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const CtaSection = CTA;