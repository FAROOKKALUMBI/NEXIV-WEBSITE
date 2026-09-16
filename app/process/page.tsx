"use client";

import { motion } from "framer-motion";
import { Search, Compass, Palette, Code2, Rocket, ChevronDown, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
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
    <TopBar /><Navbar />
    <section className="bg-[#293541] py-16 text-white sm:py-20 lg:py-24"><div className="mx-auto max-w-[1240px] px-5 sm:px-10"><p className="font-inter text-sm font-bold tracking-wide text-[#53ede3]">HOME / PROCESS</p><h1 className="mt-4 max-w-3xl font-poppins text-4xl font-bold leading-tight sm:text-5xl">How We Bring Ideas to Life.</h1><p className="mt-5 max-w-2xl font-inter text-base leading-relaxed text-white/75 sm:text-lg">A collaborative process that gives creative ideas structure, momentum and a clear route to launch.</p></div></section>
    <section className="px-5 py-16 sm:px-10 sm:py-20 lg:py-24"><div className="mx-auto max-w-[1240px]"><p className="text-center font-inter text-sm font-bold tracking-wide text-[#53ede3]">OUR WORKFLOW</p><h2 className="mt-3 text-center font-poppins text-3xl font-bold sm:text-4xl">From first conversation to lasting impact.</h2><div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{steps.map(([number, title, description, Icon], index) => <div key={number} className={`relative ${index === 4 ? "md:col-start-2 xl:col-start-4" : ""}`}><motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.06 }} className="flex min-h-[330px] flex-col rounded-2xl border border-[#293541]/10 bg-[#202e3a] p-7 text-white shadow-lg shadow-[#293541]/10"><p className="font-poppins text-6xl font-bold leading-none tracking-tight text-[#afe714]">{number}</p><div className="mt-7 flex h-12 w-12 items-center justify-center rounded-lg bg-[#afe714] text-[#293541]"><Icon size={23} strokeWidth={2.5} /></div><h3 className="mt-6 font-poppins text-2xl font-bold">{title}</h3><p className="mt-3 font-inter text-sm leading-relaxed text-white/70">{description}</p></motion.article>{index < steps.length - 1 && <><motion.div initial={{ opacity: 0, y: -8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.3 }} className="flex h-12 flex-col items-center justify-center md:hidden" aria-hidden="true"><span className="h-4 border-l-2 border-dashed border-[#afe714]" /><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#afe714] text-[#293541] shadow-md"><ChevronDown size={18} strokeWidth={3} /></span></motion.div>{(index === 0 || index === 2) && <motion.div initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.3 }} className="absolute left-full top-[calc(50%-14px)] z-10 hidden h-8 w-5 items-center md:flex" aria-hidden="true"><span className="w-2 border-t-2 border-dashed border-[#afe714]" /><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#afe714] text-[#293541] shadow-md"><ChevronRight size={18} strokeWidth={3} /></span></motion.div>}{(index === 1 || index === 3) && <motion.div initial={{ opacity: 0, y: -8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.3 }} className={`absolute left-1/2 top-full z-10 hidden h-10 w-8 -translate-x-1/2 flex-col items-center ${index === 1 ? "md:flex xl:hidden" : "md:flex"}`} aria-hidden="true"><span className="h-3 border-l-2 border-dashed border-[#afe714]" /><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#afe714] text-[#293541] shadow-md"><ChevronDown size={18} strokeWidth={3} /></span></motion.div>}</>}</div>)}</div></div></section>
    <PageProjectCta /><Footer />
  </main>;
}
