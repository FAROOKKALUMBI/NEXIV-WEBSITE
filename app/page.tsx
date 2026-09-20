"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { About } from "@/components/sections/About";
import { LatestWorkMarquee } from "@/components/sections/LatestWorkMarquee";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen flex flex-col bg-[#293541] selection:bg-[#afe714] selection:text-[#293541] overflow-x-hidden">
      {/* SECTION 1 — TOP BAR */}

      {/* SECTION 2 — NAVBAR */}

      {/* HERO + STATSBAR */}
      <div className="relative">
        {/* SECTION 3 — HERO */}
        <Hero />

        {/* SECTION 4 — STATS BAR */}
        <StatsBar />

      </div>

      {/* SECTION 5 — ABOUT */}
      <About onLearnMore={() => router.push("/about#overview")} />

      {/* SECTION 6 — RECENT DROPS / LATEST WORK AUTO-SCROLL MARQUEE */}
      <LatestWorkMarquee />

      {/* SECTION 7 — SERVICES */}
      <Services />

      {/* SECTION 8 — CTA */}
      <CTA />

      {/* SECTION 9 — FOOTER */}
      <Footer />

    </main>
  );
}
