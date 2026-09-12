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
      icon: "/icons/graphic-design.svg",
    },
    {
      title: "Web Design",
      icon: "/icons/web-design.svg",
    },
    {
      title: "Branding",
      icon: "/icons/branding.svg",
    },
    {
      title: "UI/UX Design",
      icon: "/icons/uiux-design.svg",
    },
    {
      title: "Digital Marketing",
      icon: "/icons/digital-marketing.svg",
    },
    {
      title: "Motion & Design",
      icon: "/icons/motion-design.svg",
    },
  ];

  return (
    <section id="services" className="relative bg-[#293541] py-[100px] text-white overflow-hidden">
      {/* Top-right soft glow */}
      <div
        aria-hidden="true"
        className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[#afe714]/8 blur-[120px] pointer-events-none select-none z-0"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-10">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-[48px]">
          <div>
            {/* Cyan badge "What We Do" */}
            <span className="inline-block px-[14px] py-[6px] rounded-[6px] bg-[#53ede3] text-[#293541] font-inter font-semibold text-[13px]">
              What We Do
            </span>
            {/* H2 "Our Services" */}
            <h2 className="font-poppins font-bold text-[32px] sm:text-[40px] text-white leading-tight mt-[12px] tracking-tight">
              Our Services
            </h2>
          </div>

          <div>
            {/* "View All Services →" button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-[20px] py-[12px] rounded-[6px] border border-white/30 bg-transparent hover:border-white text-white font-inter font-medium text-[14px] transition-all group cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Grid of 6 service cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[20px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => onSelectService && onSelectService(service.title)}
              className="bg-[#afe714] rounded-[10px] p-[32px_20px] flex flex-col items-center justify-center text-center cursor-pointer transition-all shadow-md group min-h-[180px] aspect-[1/1.1]"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center mb-5">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Label */}
              <div className="font-poppins font-semibold text-[15px] text-[#293541] leading-tight">
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