"use client";

import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, ChevronDown, Eye, Globe2, ShieldCheck, Target, UsersRound } from "lucide-react";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ContactModal";
import { CTA } from "@/components/sections/CTA";

const tabs = [
  { id: "overview", label: "About Us" },
  { id: "leadership", label: "Our Team" },
  { id: "partners", label: "Our Partners" },
  { id: "faqs", label: "FAQs" },
];

const faqs = [
  { question: "How much do your services cost?", answer: "Every project is tailored to your goals and scope. Get in touch and we will prepare a clear, custom quote." },
  { question: "How long does it take to complete a design or website project?", answer: "Timelines depend on the scope and feedback cycles. We will agree on a practical delivery plan before work begins." },
  { question: "Can you help with revisions or changes to the designs?", answer: "Yes. Collaboration and refinement are part of our process, so we include review points to make sure the work feels right." },
  { question: "Do you offer website maintenance services after the project is completed?", answer: "Yes. We can provide ongoing maintenance and support to keep your website secure, current and performing well." },
  { question: "Can you help with website hosting and domain registration?", answer: "Absolutely! We can assist you with website hosting and domain registration to ensure a seamless setup process. We will recommend reliable hosting providers and guide you through the domain registration process." },
];

function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState(4);
  const accordionId = useId();

  return <div className="mx-auto max-w-4xl"><div className="text-center"><span className="inline-flex rounded-full bg-[#afe714] px-4 py-2 font-inter text-sm font-bold text-[#293541]">FAQS</span><h2 className="mt-5 font-poppins text-3xl font-bold leading-tight sm:text-4xl">Frequently Asked Questions</h2><p className="mx-auto mt-3 max-w-2xl font-inter text-base leading-relaxed text-[#293541]/70 sm:text-lg">If you have other questions you&apos;d like answered, feel free to email us.</p></div><div className="mt-8 overflow-hidden rounded-2xl border border-[#293541]/15 bg-white shadow-sm sm:mt-10">{faqs.map((faq, index) => { const isOpen = openFaq === index; const panelId = `${accordionId}-${index}`; return <div key={faq.question} className="border-b border-[#293541]/15 last:border-b-0"><button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen} aria-controls={panelId} className={`group flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-inter text-base font-medium transition-all duration-200 sm:px-7 sm:py-6 sm:text-lg ${isOpen ? "bg-[#afe714]/45 text-[#293541]" : "text-[#293541] hover:bg-[#afe714]/15"}`}><span>{faq.question}</span><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? "bg-[#293541] text-white" : "bg-[#293541]/8 text-[#293541] group-hover:bg-[#afe714]"}`}><ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} /></span></button><AnimatePresence initial={false}>{isOpen && <motion.div id={panelId} role="region" aria-label={faq.question} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.24, ease: "easeOut" }} className="overflow-hidden"><p className="bg-white px-5 pb-6 pt-1 font-inter text-sm leading-relaxed text-[#293541]/75 sm:px-7 sm:pb-7 sm:text-base">{faq.answer}</p></motion.div>}</AnimatePresence></div>; })}</div></div>;
}

function ComingSoon({ label }: { label: string }) {
  return <div className="py-12 text-center sm:py-16"><span className="inline-flex rounded-full bg-[#afe714] px-4 py-2 font-inter text-sm font-bold text-[#293541]">{label}</span><h2 className="mt-5 font-poppins text-3xl font-bold sm:text-4xl">Coming soon.</h2><p className="mx-auto mt-3 max-w-md font-inter text-base text-[#293541]/70">This section will be updated soon.</p></div>;
}

const values = [
  { title: "Creative Integrity & Trust", description: "We make purposeful creative decisions and communicate honestly throughout every project. Our clients can count on work that is considered, original and delivered with care.", icon: ShieldCheck, colour: "bg-[#afe714] text-[#293541]" },
  { title: "Excellence, Precision & Innovation", description: "We bring sharp thinking and close attention to every detail, from first concept to final file. We keep exploring better ways to make brands and digital experiences perform.", icon: BadgeCheck, colour: "bg-[#53ede3] text-[#293541]" },
  { title: "Human-Centered Client Partnership", description: "We listen first, then create alongside the people behind the brand. Clear collaboration helps us build work that feels right for your audience and your ambitions.", icon: UsersRound, colour: "bg-[#afe714] text-[#293541]" },
  { title: "Local Creativity & African Impact", description: "We are proud to create from Malawi for businesses with local roots and African ambition. Our work celebrates context while helping brands compete with confidence anywhere.", icon: Globe2, colour: "bg-[#53ede3] text-[#293541]" },
];

function MissionVisionValues() {
  return <section className="relative left-1/2 mt-16 w-screen -translate-x-1/2 border-t border-white/10 bg-[#202e3a] px-5 py-16 pb-10 text-white sm:mt-20 sm:px-10 sm:py-20 sm:pb-12"><div className="mx-auto max-w-[1240px]"><div className="grid gap-6 lg:grid-cols-2"><article className="rounded-[26px] border border-white/10 bg-[#2a3b4a] p-8 shadow-xl shadow-black/15 sm:p-10"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#afe714] text-[#293541]"><Target size={27} /></div><h3 className="mt-6 font-poppins text-2xl font-bold text-white">Our Mission</h3><p className="mt-4 font-inter text-base leading-relaxed text-[#c5ccd3]">To empower brands and businesses across Malawi and Africa through creative design, strategic branding and modern digital experiences that help them be seen, understood and chosen.</p></article><article className="rounded-[26px] border border-white/10 bg-[#2a3b4a] p-8 shadow-xl shadow-black/15 sm:p-10"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#53ede3] text-[#293541]"><Eye size={27} /></div><h3 className="mt-6 font-poppins text-2xl font-bold text-white">Our Vision</h3><p className="mt-4 font-inter text-base leading-relaxed text-[#c5ccd3]">To be a leading creative studio in Malawi and across Africa, recognised for creating impactful brands, design systems and digital experiences that move businesses forward.</p></article></div><h2 className="mt-16 text-center font-poppins text-3xl font-bold text-white sm:mt-20 sm:text-4xl">Our Core Values</h2><div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{values.map(({ title, description, icon: Icon, colour }) => <article key={title} className="rounded-[22px] border border-white/10 bg-[#2a3b4a] p-7 shadow-xl shadow-black/15"><div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colour}`}><Icon size={23} /></div><h3 className="mt-5 font-poppins text-xl font-bold leading-snug text-white">{title}</h3><p className="mt-4 font-inter text-sm leading-relaxed text-[#c5ccd3]">&ldquo;{description}&rdquo;</p></article>)}</div></div></section>;
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const setFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (tabs.some((tab) => tab.id === hash)) {
        setActiveTab(hash);
        window.setTimeout(() => document.getElementById("about-content")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
      }
    };
    setFromHash(); window.addEventListener("hashchange", setFromHash); return () => window.removeEventListener("hashchange", setFromHash);
  }, []);
  const selectTab = (id: string) => { setActiveTab(id); window.history.replaceState(null, "", `#${id}`); window.dispatchEvent(new HashChangeEvent("hashchange")); document.getElementById("about-content")?.scrollIntoView({ behavior: "smooth", block: "start" }); };

  return <main className="min-h-screen overflow-x-hidden bg-[#f5f5f5] text-[#293541]">
    <TopBar onOpenContact={() => setIsModalOpen(true)} /><Navbar onOpenContact={() => setIsModalOpen(true)} />
    <section className="bg-[#293541] py-16 text-white sm:py-20 lg:py-24"><div className="mx-auto max-w-[1240px] px-5 sm:px-10"><p className="font-inter text-sm font-bold tracking-wide text-[#53ede3]">HOME / ABOUT US</p><div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><h1 className="max-w-2xl font-poppins text-3xl font-bold leading-tight tracking-tight sm:text-4xl">We Create Brands That Stand Out.</h1><div className="flex max-w-xl flex-wrap gap-2 lg:justify-end">{tabs.map((tab) => <button key={tab.id} onClick={() => selectTab(tab.id)} className={`rounded-full border px-4 py-2 font-inter text-sm font-semibold transition-all ${activeTab === tab.id ? "border-[#afe714] bg-[#afe714] text-[#293541]" : "border-white/20 bg-white/10 text-white hover:border-white/50 hover:bg-white/20"}`}>{tab.label}</button>)}</div></div></div></section>
    <section id="about-content" className={`scroll-mt-20 pt-16 sm:pt-20 lg:pt-24 ${activeTab === "overview" ? "pb-0" : "pb-16 sm:pb-20 lg:pb-24"}`}><div className="mx-auto max-w-[1240px] px-5 sm:px-10">
      {activeTab === "overview" && <><div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:gap-16"><div><span className="inline-flex rounded-full bg-[#afe714] px-4 py-2 font-inter text-sm font-bold text-[#293541]">COMPANY OVERVIEW</span><h2 className="mt-5 font-poppins text-3xl font-bold leading-tight sm:text-4xl">Where Creativity Meets Technology</h2><div className="mt-6 space-y-5 text-base leading-relaxed text-[#293541]/80 sm:text-lg"><p>At Nexiv, we bring creativity, design, and technology together to create brands and digital experiences that make an impact. We combine strategic thinking, visual design, and modern technology to help businesses turn ideas into meaningful digital solutions.</p><p>From brand identity and graphic design to UI/UX, websites, motion design, and digital experiences, we create solutions that are visually engaging, purposeful, and built to perform.</p><p>We work with startups, businesses, organizations, and individuals to develop strong visual identities and digital products that connect with their audiences and stand out in a competitive digital world.</p><p>Through a multidisciplinary approach, we blend strategy, creativity, and technology to deliver work that is not only beautiful, but functional, memorable, and built for growth.</p></div></div><div className="mx-auto w-full max-w-[520px] overflow-visible lg:max-w-none"><img src="/images/company-overview-creative.jpg" alt="Hand using a design mouse surrounded by creative-tool icons" className="-ml-[9%] h-auto w-[118%] max-w-none mix-blend-multiply brightness-[1.3] contrast-[1.08]" style={{ maskImage: "radial-gradient(ellipse 80% 80% at center, black 48%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at center, black 48%, transparent 100%)" }} /></div></div><MissionVisionValues /></>}
      {activeTab === "leadership" && <ComingSoon label="OUR TEAM" />}
      {activeTab === "partners" && <ComingSoon label="OUR PARTNERS" />}
      {activeTab === "faqs" && <FaqAccordion />}
    </div></section>
    {(activeTab === "overview" || activeTab === "faqs") && <CTA onOpenContact={() => setIsModalOpen(true)} />}
    <Footer /><ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultService="Full Creative Suite" />
  </main>;
}
