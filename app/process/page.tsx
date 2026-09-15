"use client";

import { useState } from "react";
import { Search, Compass, Palette, Code2, Rocket, HeartHandshake } from "lucide-react";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ContactModal";
import { PageProjectCta } from "@/components/PageProjectCta";

const steps = [
  ["01", "Discovery", "We learn about your business, people and goals so every decision starts with the right context.", Search],
  ["02", "Strategy", "We turn the insight into a clear creative direction, scope and practical plan for the work ahead.", Compass],
  ["03", "Design", "We shape distinctive visual ideas and refine them with your feedback until the system feels exactly right.", Palette],
  ["04", "Development", "We make the approved work real, building polished digital touchpoints that work beautifully in practice.", Code2],
  ["05", "Launch", "We prepare, test and release your new work with the care it deserves and the details covered.", Rocket],
  ["06", "Support", "We stay available to help your brand evolve, optimise and keep creating after the initial launch.", HeartHandshake],
] as const;

export default function ProcessPage() {
  const [modalOpen, setModalOpen] = useState(false);
  return <main className="min-h-screen overflow-x-hidden bg-[#f5f5f5] text-[#293541]">
    <TopBar onOpenContact={() => setModalOpen(true)} /><Navbar onOpenContact={() => setModalOpen(true)} />
    <section className="bg-[#293541] py-16 text-white sm:py-20 lg:py-24"><div className="mx-auto max-w-[1240px] px-5 sm:px-10"><p className="font-inter text-sm font-bold tracking-wide text-[#53ede3]">HOME / PROCESS</p><h1 className="mt-4 max-w-3xl font-poppins text-4xl font-bold leading-tight sm:text-5xl">How We Bring Ideas to Life.</h1><p className="mt-5 max-w-2xl font-inter text-base leading-relaxed text-white/75 sm:text-lg">A collaborative process that gives creative ideas structure, momentum and a clear route to launch.</p></div></section>
    <section className="px-5 py-16 sm:px-10 sm:py-20 lg:py-24"><div className="mx-auto max-w-[1000px]"><p className="text-center font-inter text-sm font-bold tracking-wide text-[#53ede3]">OUR WORKFLOW</p><h2 className="mt-3 text-center font-poppins text-3xl font-bold sm:text-4xl">From first conversation to lasting impact.</h2><div className="relative mt-14 space-y-5 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-px before:bg-[#afe714]/70 sm:before:left-8">{steps.map(([number, title, description, Icon]) => <article key={number} className="relative grid gap-5 rounded-2xl border border-black/[0.07] bg-white p-6 shadow-sm sm:grid-cols-[64px_1fr] sm:p-8"><div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-lg bg-[#293541] text-[#afe714] sm:h-16 sm:w-16"><Icon size={24} /></div><div><p className="font-poppins text-sm font-bold text-[#53a89f]">{number}</p><h3 className="mt-1 font-poppins text-2xl font-bold">{title}</h3><p className="mt-3 max-w-2xl font-inter text-sm leading-relaxed text-[#293541]/70 sm:text-base">{description}</p></div></article>)}</div></div></section>
    <PageProjectCta onOpenContact={() => setModalOpen(true)} /><Footer /><ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService="Full Creative Suite" />
  </main>;
}
