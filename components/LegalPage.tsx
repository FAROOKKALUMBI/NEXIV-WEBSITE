"use client";

import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

type LegalSection = { heading: string; paragraphs: string[] };

export function LegalPage({ title, sections }: { title: string; sections: LegalSection[] }) {
  return <main className="min-h-screen bg-[#f5f5f5] text-[#293541]"><TopBar /><Navbar /><section className="bg-[#293541] py-16 text-white sm:py-20"><div className="mx-auto max-w-[900px] px-5 sm:px-10"><p className="font-inter text-sm font-bold tracking-wide text-[#53ede3]">HOME / {title.toUpperCase()}</p><h1 className="mt-4 font-poppins text-4xl font-bold leading-tight sm:text-5xl">{title}</h1></div></section><article className="mx-auto max-w-[900px] px-5 py-16 sm:px-10 sm:py-20"><div className="space-y-12">{sections.map((section) => <section key={section.heading}><h2 className="font-poppins text-2xl font-bold sm:text-3xl">{section.heading}</h2><div className="mt-4 space-y-4 font-inter text-base leading-relaxed text-[#293541]/75">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}</div></article><Footer /></main>;
}
