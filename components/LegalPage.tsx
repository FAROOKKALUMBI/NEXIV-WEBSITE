"use client";

import { Download } from "lucide-react";
import { Footer } from "@/components/layout/Footer";

type LegalSection = { heading: string; paragraphs: string[] };

export function LegalPage({ title, sections }: { title: string; sections: LegalSection[] }) {
  const isTermsPage = title === "Terms and Conditions";
  const downloadButton = <a href="/terms-and-conditions.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/50 px-5 py-2.5 font-inter text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#afe714]"><Download size={16} />Download PDF</a>;

  return <main className="min-h-screen bg-[#f5f5f5] text-[#293541]"><section className="bg-[#293541] py-16 text-white sm:py-20"><div className="mx-auto max-w-[900px] px-5 sm:px-10"><p className="font-inter text-sm font-bold tracking-wide text-[#53ede3]">HOME / {title.toUpperCase()}</p><div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><h1 className="font-poppins text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>{isTermsPage && downloadButton}</div></div></section><article className="mx-auto max-w-[900px] px-5 py-16 sm:px-10 sm:py-20"><div className="space-y-12">{sections.map((section) => <section key={section.heading}><h2 className="font-poppins text-2xl font-bold sm:text-3xl">{section.heading}</h2><div className="mt-4 space-y-4 font-inter text-base leading-relaxed text-[#293541]/75">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}</div>{isTermsPage && <div className="mt-12 border-t border-[#293541]/15 pt-8"><label className="flex cursor-pointer items-start gap-3 font-inter text-sm leading-relaxed text-[#293541]"><input type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 accent-[#afe714]" /><span>I have read and agree to the Terms and Conditions.</span></label><div className="mt-6"><a href="/terms-and-conditions.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#293541]/50 px-5 py-2.5 font-inter text-sm font-medium text-[#293541] transition-colors hover:border-[#293541] hover:bg-[#293541] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#afe714]"><Download size={16} />Download PDF</a></div></div>}</article><Footer /></main>;
}
