"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { recentDrops, RecentDropItem } from "@/data/recentDrops";

export function RecentDrops() {
  return (
    <section className="relative w-full bg-[#1e2833] py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-y border-white/[0.08]">
      {/* Soft background ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#53ede3]/5 blur-[140px] pointer-events-none select-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#afe714]/5 blur-[140px] pointer-events-none select-none"
      />

      {/* Header Container */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-10 mb-10 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            {/* Cyan badge */}
            <span className="inline-block px-3.5 py-1.5 rounded-md bg-[#53ede3] text-[#293541] font-inter font-bold text-[13px] shadow-sm mb-3">
              Recent Drops
            </span>

            {/* Lime green heading */}
            <h2 className="font-poppins font-bold text-[32px] sm:text-[40px] text-[#afe714] leading-tight tracking-tight">
              Recent Drops
            </h2>

            {/* Brand tech tagline */}
            <p className="mt-2 font-mono text-xs sm:text-sm tracking-wider text-[#53ede3]/90 uppercase">
              Graphic Design | Web Design | Branding | UI/UX Design | Digital Marketing
            </p>
          </div>

          <div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/20 bg-white/5 hover:border-[#afe714] hover:bg-[#afe714]/10 hover:text-[#afe714] text-white font-inter font-medium text-[13px] transition-all duration-200 group cursor-pointer focus-visible:ring-2 focus-visible:ring-[#afe714]"
            >
              <span>Explore All Work</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Subtle edge fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#1e2833] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#1e2833] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-5 sm:gap-6 py-2">
          {/* First set of cards */}
          {recentDrops.map((item, index) => (
            <RecentDropCard key={`track1-${index}`} item={item} />
          ))}

          {/* Duplicated set of cards for seamless infinite loop */}
          {recentDrops.map((item, index) => (
            <RecentDropCard key={`track2-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentDropCard({ item }: { item: RecentDropItem }) {
  return (
    <Link
      href="/work"
      className="group relative flex-shrink-0 h-[320px] sm:h-[380px] lg:h-[430px] rounded-2xl overflow-hidden bg-slate-900/40 shadow-lg border border-white/[0.08] transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
    >
      {/* Full-bleed auto-width image */}
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="h-full w-auto block object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
      />

      {/* Floating Top-Left Pill Overlay */}
      <div className="absolute left-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 font-inter text-xs font-semibold text-white backdrop-blur-md shadow-md pointer-events-none select-none tracking-wide">
        {item.tag}
      </div>

      {/* Hover-only Top-Right Indicator */}
      <div className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
        <ArrowUpRight size={15} />
      </div>
    </Link>
  );
}
