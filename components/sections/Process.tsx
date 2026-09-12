"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Palette, Rocket } from "lucide-react";

export function Process() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Insights",
      description: "We dive deep into your brand, audience, and goals to build a razor-sharp strategy.",
      icon: Search,
    },
    {
      step: "02",
      title: "Creative Strategy",
      description: "Defining the core concept, architecture, and aesthetic direction before design begins.",
      icon: Compass,
    },
    {
      step: "03",
      title: "Design & Execution",
      description: "Crafting pixel-perfect visuals, dynamic interfaces, and bespoke brand assets.",
      icon: Palette,
    },
    {
      step: "04",
      title: "Launch & Scale",
      description: "Deploying production-ready solutions and optimizing for measurable real-world growth.",
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="relative bg-[#293541] py-[100px] text-white overflow-hidden border-t border-white/[0.05]">
      {/* Bottom-left soft glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-[#afe714]/8 blur-[120px] pointer-events-none select-none z-0"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-[14px] py-[6px] rounded-[6px] bg-[#53ede3] text-[#293541] font-inter font-semibold text-[13px] mb-3">
            Our Workflow
          </span>
          <h2 className="font-poppins font-bold text-[32px] sm:text-[40px] text-white tracking-tight">
            How We Bring Ideas To Life
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-8 flex flex-col items-start hover:border-[#afe714]/50 transition-colors"
              >
                <div className="w-full flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#afe714]/10 border border-[#afe714]/30 flex items-center justify-center text-[#afe714]">
                    <Icon size={22} />
                  </div>
                  <span className="font-poppins font-bold text-2xl text-white/30">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}