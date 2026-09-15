"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ContactModal";
import { PageProjectCta } from "@/components/PageProjectCta";

const projects = [
  { title: "Future-ready Brand Identity", category: "Branding", image: "/images/about-creative.jpg" },
  { title: "Digital Product Experience", category: "UI/UX", image: "/images/hero-reference.png" },
  { title: "Growth-focused Website", category: "Web Design", image: "/images/hero-illustration.png" },
  { title: "Campaign Visual System", category: "Graphic Design", image: "/images/about-hand.png" },
  { title: "Brand Story in Motion", category: "Motion & Design", image: "/images/hero-full-bg.png" },
  { title: "Digital Launch Campaign", category: "Digital Marketing", image: "/images/hero-reference.png" },
];
const filters = ["All", "Branding", "Web Design", "UI/UX"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All"); const [modalOpen, setModalOpen] = useState(false);
  const visibleProjects = activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);
  return <main className="min-h-screen overflow-x-hidden bg-[#f5f5f5] text-[#293541]">
    <TopBar onOpenContact={() => setModalOpen(true)} /><Navbar onOpenContact={() => setModalOpen(true)} />
    <section className="bg-[#293541] py-16 text-white sm:py-20 lg:py-24"><div className="mx-auto max-w-[1240px] px-5 sm:px-10"><p className="font-inter text-sm font-bold tracking-wide text-[#53ede3]">HOME / WORK</p><h1 className="mt-4 max-w-3xl font-poppins text-4xl font-bold leading-tight sm:text-5xl">Work made to be remembered.</h1><p className="mt-5 max-w-2xl font-inter text-base leading-relaxed text-white/75 sm:text-lg">A selection of placeholder project cards ready to be replaced with NEXIV&apos;s published case studies.</p></div></section>
    <section className="px-5 py-16 sm:px-10 sm:py-20 lg:py-24"><div className="mx-auto max-w-[1240px]"><div className="mb-10 flex flex-wrap gap-2">{filters.map((filter) => <button key={filter} onClick={() => setActiveFilter(filter)} className={`rounded-full px-4 py-2 font-inter text-sm font-semibold transition-colors ${activeFilter === filter ? "bg-[#afe714] text-[#293541]" : "border border-[#293541]/15 bg-white text-[#293541] hover:border-[#293541]/40"}`}>{filter}</button>)}</div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{visibleProjects.map((project) => <article key={project.title} className="group overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-sm"><div className="relative aspect-[16/10] overflow-hidden bg-[#293541]"><img src={project.image} alt={`${project.title} placeholder`} className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105" /><div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#293541] text-white"><ArrowUpRight size={16} /></div></div><div className="p-6"><p className="font-inter text-xs font-bold uppercase tracking-wider text-[#293541]/55">Placeholder · {project.category}</p><h2 className="mt-2 font-poppins text-xl font-bold">{project.title}</h2></div></article>)}</div></div></section>
    <PageProjectCta onOpenContact={() => setModalOpen(true)} /><Footer /><ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService="Full Creative Suite" />
  </main>;
}
