"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare } from "lucide-react";

interface CtaProps {
  onOpenContact?: () => void;
}

export function CTA({ onOpenContact }: CtaProps) {
  return (
    <section id="contact" className="w-full bg-[#FFFFFF] py-16 sm:py-20 px-5 sm:px-10">
      <div className="w-full max-w-[1040px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative bg-[#293541] rounded-[16px] px-6 sm:px-12 py-14 sm:py-16 text-center shadow-2xl overflow-hidden"
        >
          {/* Subtle inner top glow */}
          <div
            aria-hidden="true"
            className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#afe714]/8 blur-[100px] pointer-events-none select-none z-0"
          />

          <div className="relative z-10">
            {/* Envelope icon in lime green square */}
            <div className="w-12 h-12 bg-[#afe714] rounded-[8px] flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Mail className="w-5 h-5 text-[#293541]" />
            </div>

            {/* H2 */}
            <h2 className="font-poppins font-bold text-[28px] sm:text-[34px] lg:text-[38px] text-white leading-[1.18] max-w-[680px] mx-auto tracking-tight mb-3">
              Ready To Grow Your Business Through <br className="hidden sm:inline" />
              Great Design?
            </h2>

            {/* Paragraph */}
            <p className="font-inter font-normal text-[14.5px] sm:text-[15px] text-white/80 max-w-[560px] mx-auto mb-8 leading-[1.5]">
              Partner With NEXIV For Creative, Strategic And Scalable Digital Experiences.
            </p>

            {/* Buttons row */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[5px] border border-white/30 bg-[#293541] hover:border-white/60 text-white font-inter font-medium text-[13.5px] transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Start a Project</span>
              </button>

              <a
                href="tel:+265884288849"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[5px] bg-[#afe714] hover:bg-[#9ccf10] text-[#293541] font-inter font-bold text-[13.5px] transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#293541]" />
                <span>Call Us Now</span>
              </a>
            </div>

            {/* Contact row */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-white/80 font-inter text-[13px]">
              <a
                href="tel:+265884288849"
                className="inline-flex items-center gap-2 hover:text-[#afe714] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-white/70" />
                <span>(+265) 884 288 849</span>
              </a>
              <a
                href="mailto:nexiv25@gmail.com"
                className="inline-flex items-center gap-2 hover:text-[#afe714] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-white/70" />
                <span>nexiv25@gmail.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const CtaSection = CTA;