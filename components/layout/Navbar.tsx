"use client";

import React, { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "../ui/Logo";

interface NavbarProps { onOpenContact?: () => void; }

const navLinks = [
  { name: "Home", href: "/#home", section: "home" },
  { name: "Services", href: "/services", section: "services" },
  { name: "Work", href: "/work", section: "work" },
  { name: "Process", href: "/process", section: "process" },
];

const homeSections = [...navLinks.map((link) => link.section), "about"];

const aboutLinks = [
  { name: "About Us", href: "/about#overview", section: "overview" },
  { name: "Our Team", href: "/about#leadership", section: "leadership" },
  { name: "Our Partners", href: "/about#partners", section: "partners" },
  { name: "FAQs", href: "/about#faqs", section: "faqs" },
];

const normaliseAboutSection = (hash: string) => {
  const section = hash.replace("#", "");
  if (section === "our-team") return "leadership";
  if (section === "our-partners") return "partners";
  return aboutLinks.some((link) => link.section === section) ? section : "overview";
};

export function Navbar({ onOpenContact }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [aboutSection, setAboutSection] = useState("overview");

  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (pathname === "/about") setAboutSection(normaliseAboutSection(hash));
      if (pathname === "/" && navLinks.some((link) => link.section === hash)) setActiveSection(hash);
    };
    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = homeSections.map((section) => document.getElementById(section)).filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const isAboutActive = pathname === "/about" || (pathname === "/" && activeSection === "about");
  const activeNavName = useMemo(() => {
    if (isAboutActive) return "About";
    return navLinks.find((link) => pathname === `/${link.section}` || (pathname === "/" && link.section === activeSection))?.name;
  }, [activeSection, isAboutActive, pathname]);
  const linkClass = (active: boolean) => `font-inter font-medium text-[14px] transition-colors duration-200 ${active ? "rounded-md bg-[#afe714] px-3.5 py-1.5 text-[#293541]" : "px-1 py-1 text-black hover:text-[#66727b]"}`;

  return <nav className="sticky top-0 z-50 flex h-14 items-center border-b border-black/[0.06] bg-white shadow-sm">
    <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between px-5 sm:px-10">
      <Logo variant="light" />
      <div className="hidden items-center gap-5 md:flex lg:gap-7">
        <a href={navLinks[0].href} className={linkClass(activeNavName === "Home")}>Home</a>
        <div className="relative" onMouseEnter={() => setIsAboutOpen(true)} onMouseLeave={() => setIsAboutOpen(false)}>
          <div className={`flex items-center font-inter text-[14px] font-medium transition-colors duration-200 ${isAboutActive ? "rounded-md bg-[#afe714] text-[#293541]" : isAboutOpen ? "rounded-md bg-[#f3f3f3] text-black" : "text-black"}`}>
            <a href="/about#overview" className={`py-1.5 ${isAboutActive || isAboutOpen ? "pl-3.5" : "pl-1"} hover:text-[#66727b]`}>About</a>
            <button type="button" onClick={() => setIsAboutOpen((open) => !open)} aria-label="Open About menu" aria-expanded={isAboutOpen} aria-haspopup="menu" className={`py-1.5 ${isAboutActive || isAboutOpen ? "pr-3" : "pr-1"} hover:text-[#66727b]`}><ChevronDown size={15} className={`transition-transform ${isAboutOpen ? "rotate-180" : ""}`} /></button>
          </div>
          <AnimatePresence>{isAboutOpen && <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.16 }} role="menu" className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-black/[0.08] bg-white p-2.5 shadow-xl">
            <p className="px-3 py-2 font-poppins text-[13px] font-bold text-[#293541]">About NEXIV</p><div className="mx-2 mb-1 h-px bg-black/[0.08]" />
            {aboutLinks.map((link) => <a key={link.name} href={link.href} role="menuitem" onClick={() => setIsAboutOpen(false)} className={`block rounded-lg px-3 py-2.5 font-inter text-[14px] font-medium transition-colors ${pathname === "/about" && aboutSection === link.section ? "bg-[#afe714] text-[#293541]" : "text-[#293541] hover:bg-[#afe714]/20 hover:text-black"}`}>{link.name}</a>)}
          </motion.div>}</AnimatePresence>
        </div>
        {navLinks.slice(1).map((link) => <a key={link.name} href={link.href} className={linkClass(activeNavName === link.name)}>{link.name}</a>)}
      </div>
      <div className="hidden items-center md:flex"><button onClick={onOpenContact} className="group flex items-center gap-2 rounded-md border border-transparent bg-[#afe714] px-4 py-2 font-inter text-[13.5px] font-semibold text-[#293541] shadow-sm transition-all duration-200 hover:border-black/10 hover:bg-white active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#afe714]"><span>Start a Project</span><ArrowRight size={15} className="text-[#293541] transition-transform duration-200 group-hover:translate-x-1" /></button></div>
      <div className="flex items-center md:hidden"><button onClick={() => setIsOpen(!isOpen)} className="rounded-md p-1.5 text-black hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#afe714]" aria-label="Toggle Navigation">{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button></div>
    </div>
    <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="absolute left-0 top-14 w-full overflow-hidden border-b border-black/[0.08] bg-white px-6 py-5 shadow-xl md:hidden"><div className="flex flex-col space-y-3">
      <a href={navLinks[0].href} onClick={() => setIsOpen(false)} className={`rounded-md px-3 py-2 font-inter text-[14.5px] font-medium ${activeNavName === "Home" ? "bg-[#afe714] font-semibold text-[#293541]" : "text-black/80 hover:bg-[#afe714]/20 hover:text-black"}`}>Home</a>
      <div className="border-y border-slate-100 py-2"><a href="/about#overview" onClick={() => setIsOpen(false)} className={`block rounded-md px-3 py-2 font-poppins text-xs font-bold uppercase tracking-wide ${isAboutActive ? "bg-[#afe714] text-[#293541]" : "text-[#293541] hover:bg-[#afe714]/20"}`}>About NEXIV</a>{aboutLinks.map((link) => <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`mt-1 block rounded-md px-3 py-2 font-inter text-[14px] font-medium ${pathname === "/about" && aboutSection === link.section ? "bg-[#afe714] text-[#293541]" : "text-black/80 hover:bg-[#afe714]/20 hover:text-black"}`}>{link.name}</a>)}</div>
      {navLinks.slice(1).map((link) => <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`rounded-md px-3 py-2 font-inter text-[14.5px] font-medium ${activeNavName === link.name ? "bg-[#afe714] font-semibold text-[#293541]" : "text-black/80 hover:bg-[#afe714]/20 hover:text-black"}`}>{link.name}</a>)}
      <div className="pt-2"><button onClick={() => { setIsOpen(false); onOpenContact?.(); }} className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-[#afe714] px-5 py-2.5 font-inter text-[13.5px] font-semibold text-[#293541] shadow-sm transition-all hover:border-black/10 hover:bg-white active:scale-[0.98]"><span>Start a Project</span><ArrowRight size={15} /></button></div>
    </div></motion.div>}</AnimatePresence>
  </nav>;
}
