"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PageProjectCta() {
  return (
    <section className="bg-[#f5f5f5] px-5 py-16 sm:px-10 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1040px] rounded-2xl bg-[#293541] px-6 py-12 text-center shadow-2xl sm:px-12 sm:py-16">
        <p className="font-inter text-sm font-bold tracking-wide text-[#53ede3]">LET'S CREATE TOGETHER</p>
        <h2 className="mx-auto mt-3 max-w-2xl font-poppins text-3xl font-bold leading-tight text-white sm:text-4xl">Ready to start a project?</h2>
        <p className="mx-auto mt-4 max-w-xl font-inter text-base leading-relaxed text-white/75">Tell us what you want to build, and we&apos;ll help turn the idea into a thoughtful creative solution.</p>
        <Link href="/start-a-project" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#afe714] px-5 py-3 font-inter text-sm font-bold text-[#293541] transition-all hover:bg-white hover:scale-[1.02]">
          Start a Project <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
