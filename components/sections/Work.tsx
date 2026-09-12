"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Work() {
  const projects = [
    {
      title: "Fintech Mobile Banking App",
      category: "UI/UX & Mobile App",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "EcoTech Brand Identity",
      category: "Branding & Strategy",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Luxury E-Commerce Experience",
      category: "Web Design & Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="work" className="w-full bg-[#FFFFFF] py-[80px] lg:py-[100px] text-[#293541]">
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-3.5 py-1.5 rounded-md bg-[#53ede3] text-[#293541] font-inter font-bold text-[13px] shadow-sm mb-3">
              Featured Work
            </span>
            <h2 className="font-poppins font-bold text-[32px] sm:text-[40px] text-[#293541] tracking-tight">
              Selected Projects
            </h2>
          </div>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group rounded-2xl overflow-hidden bg-[#F6F8FA] border border-black/5 flex flex-col cursor-pointer transition-transform duration-500 hover:scale-[1.03] shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#293541] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#293541]/60 font-inter">
                    {project.category}
                  </span>
                  <h3 className="text-[18px] font-bold text-[#293541] font-poppins mt-1 group-hover:text-[#293541] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
