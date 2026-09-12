"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedNumber({ value }: { value: string }) {
  const numericValue = parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && !isNaN(numericValue)) {
      const end = numericValue;
      const duration = 1400; // 1.4s
      const startTime = performance.now();

      const updateCount = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // smooth easeOutExpo
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.floor(ease * end);
        setDisplayValue(current);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setDisplayValue(end);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  const stats = [
    {
      number: "50+",
      label: "Projects Delivered",
      icon: "/icons/briefcase.svg",
    },
    {
      number: "2+",
      label: "Years Of Craft",
      icon: "/icons/lightbulb.svg",
    },
    {
      number: "15+",
      label: "Happy Client",
      icon: "/icons/users.svg",
    },
  ];

  return (
    <section className="bg-[#293541] pt-4 pb-14 sm:pb-16 relative z-10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        <motion.div
          className="bg-[#afe714] rounded-[10px] px-6 sm:px-10 lg:px-12 py-5 lg:py-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {stats.map((stat, idx) => (
            <React.Fragment key={stat.label}>
              <motion.div
                className="flex items-center justify-between md:justify-start gap-4 lg:gap-5 w-full md:w-auto"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
              >
                <div>
                  <div className="font-poppins font-bold text-[32px] lg:text-[36px] text-[#293541] leading-none">
                    <AnimatedNumber value={stat.number} />
                  </div>
                  <div className="font-inter font-medium text-[13px] text-[#293541] mt-1">
                    {stat.label}
                  </div>
                </div>
                <div className="w-9 h-9 bg-[#293541] rounded-md flex items-center justify-center shrink-0 shadow-sm">
                  <img src={stat.icon} alt={stat.label} className="w-5 h-5" />
                </div>
              </motion.div>

              {/* Divider between items */}
              {idx < stats.length - 1 && (
                <>
                  <div className="hidden md:block w-px h-10 bg-[#293541]/20 shrink-0 mx-4 lg:mx-8" />
                  <div className="md:hidden w-full h-px bg-[#293541]/20" />
                </>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export const StatsBanner = StatsBar;