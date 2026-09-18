"use client";

import { motion } from "framer-motion";
import { Search, Compass, Palette, Code2, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { PageProjectCta } from "@/components/PageProjectCta";

const steps: [string, string, string, LucideIcon][] = [
  ["01", "Discovery", "We learn about your business, people and goals so every decision starts with the right context.", Search],
  ["02", "Strategy", "We turn the insight into a clear creative direction, scope and practical plan for the work ahead.", Compass],
  ["03", "Design", "We shape distinctive visual ideas and refine them with your feedback until the system feels exactly right.", Palette],
  ["04", "Development", "We make the approved work real, building polished digital touchpoints that work beautifully in practice.", Code2],
  ["05", "Launch", "We prepare, test and release your new work with the care it deserves and the details covered.", Rocket],
];

export default function ProcessPage() {
  return <main className="min-h-screen overflow-x-hidden bg-[#f5f5f5] text-[#293541]">
    <section className="bg-[#293541] py-16 text-white sm:py-20 lg:py-24"><div className="mx-auto max-w-[1240px] px-5 sm:px-10"><p className="font-inter text-sm font-bold tracking-wide text-[#53ede3]">HOME / PROCESS</p><h1 className="mt-4 max-w-3xl font-poppins text-4xl font-bold leading-tight sm:text-5xl">How We Bring Ideas to Life.</h1><p className="mt-5 max-w-2xl font-inter text-base leading-relaxed text-white/75 sm:text-lg">A collaborative process that gives creative ideas structure, momentum and a clear route to launch.</p></div></section>
    <section className="px-5 py-16 sm:px-10 sm:py-20 lg:py-24"><div className="mx-auto max-w-[1120px]"><p className="text-center font-inter text-sm font-bold tracking-wide text-[#53ede3]">OUR WORKFLOW</p><h2 className="mt-3 text-center font-poppins text-3xl font-bold sm:text-4xl">From first conversation to lasting impact.</h2><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-2.5">{steps.map(([number, title, description, Icon], index) => <div key={number} className="relative min-w-0"><motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.06 }} className="flex min-h-[248px] flex-col rounded-2xl border border-[#293541]/10 bg-[#202e3a] p-[19px] text-white shadow-lg shadow-[#293541]/10"><p className="font-poppins text-[41px] font-bold leading-none tracking-tight text-[#afe714]">{number}</p><div className="mt-4 flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-[#afe714] text-[#293541]"><Icon size={17} strokeWidth={2.5} /></div><h3 className="mt-4 font-poppins text-[17px] font-bold">{title}</h3><p className="mt-2 font-inter text-[11px] leading-[1.55] text-white/70">{description}</p></motion.article>{index < steps.length - 1 && <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.35, delay: index * 0.06 }} className="absolute left-full top-1/2 z-10 hidden h-4 w-2.5 -translate-y-1/2 origin-left items-center xl:flex" aria-hidden="true"><span className="h-px w-full bg-[#afe714] shadow-[0_0_8px_#afe714]" /><span className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#afe714] shadow-[0_0_0_2px_#202e3a,0_0_10px_#afe714]" /></motion.div>}</div>)}</div></div></section>
    <PageProjectCta /><Footer />
  </main>;
}
