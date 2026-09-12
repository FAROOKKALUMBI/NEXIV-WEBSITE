"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const services = [
    {
      title: "Graphic Design",
      icon: (
        <svg className="w-6 h-6 text-[#afe714]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="m2 2 7.586 7.586" />
          <circle cx="11" cy="11" r="1.5" fill="#afe714" />
        </svg>
      ),
    },
    {
      title: "Web Design",
      icon: (
        <svg className="w-6 h-6 text-[#afe714]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
          <path d="M6 13l2-2 3 3 5-5" />
        </svg>
      ),
    },
    {
      title: "Branding",
      icon: (
        <svg className="w-6 h-6 text-[#afe714]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
          <circle cx="12" cy="8" r="2.5" fill="#afe714" />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      icon: (
        <svg className="w-6 h-6 text-[#afe714]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
          <rect x="12" y="12" width="6" height="6" rx="1" fill="#afe714" />
        </svg>
      ),
    },
    {
      title: "Digital Marketing",
      icon: (
        <svg className="w-6 h-6 text-[#afe714]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="12" height="18" x="6" y="3" rx="2" />
          <path d="M10 17h4" />
          <path d="M3 9l3 2" />
          <path d="M21 9l-3 2" />
          <path d="M3 15l3-2" />
          <path d="M21 15l-3-2" />
          <circle cx="12" cy="9" r="1.5" fill="#afe714" />
        </svg>
      ),
    },
    {
      title: "Motion & Design",
      icon: (
        <svg className="w-6 h-6 text-[#afe714]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="6 4 18 12 6 20 6 4" fill="#afe714" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="19" cy="19" r="2" />
          <line x1="17" y1="5" x2="13" y2="8" />
          <line x1="17" y1="19" x2="13" y2="16" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative bg-[#293541] py-20 lg:py-24 text-white overflow-hidden">
      {/* Top-right soft glow */}
      <div
        aria-hidden="true"
        className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[#afe714]/8 blur-[120px] pointer-events-none select-none z-0"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-10">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            {/* Cyan badge "What We Do" */}
            <span className="inline-block px-3.5 py-1.5 rounded-md bg-[#53ede3] text-[#293541] font-inter font-bold text-[13px] shadow-sm">
              What We Do
            </span>
            {/* H2 "Our Services" in lime green */}
            <h2 className="font-poppins font-bold text-[32px] sm:text-[38px] text-[#afe714] leading-tight mt-3 tracking-tight">
              Our Services
            </h2>
          </div>

          <div>
            {/* "View All Services →" button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[5px] border border-white/30 bg-transparent hover:border-[#afe714] text-white font-inter font-medium text-[13px] transition-all group cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Grid of 6 service cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => onSelectService && onSelectService(service.title)}
              className="bg-[#afe714] rounded-[8px] p-5 sm:p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all shadow-md group aspect-[1/1.08]"
            >
              {/* Dark container box with lime green custom icon */}
              <div className="w-12 h-12 bg-[#293541] rounded-[8px] flex items-center justify-center mb-3.5 shadow-sm">
                {service.icon}
              </div>

              {/* Label */}
              <div className="font-inter font-bold text-[13.5px] text-[#293541] leading-tight">
                {service.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const ServicesSection = Services;