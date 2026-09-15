"use client";

import { useState } from "react";
import { Brush, Monitor, Award, PanelsTopLeft, Megaphone, Clapperboard } from "lucide-react";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ContactModal";
import { PageProjectCta } from "@/components/PageProjectCta";

const services = [
  { id: "graphic-design", title: "Graphic Design", description: "Campaign visuals, social content, print assets and everyday brand materials designed to communicate clearly and look unmistakably yours.", icon: Brush },
  { id: "web-design", title: "Web Design", description: "Responsive, high-performing websites that make your brand easy to discover, understand and trust on every screen.", icon: Monitor },
  { id: "branding", title: "Branding", description: "Brand strategy, visual identity, logo systems and guidelines that give your business a confident, consistent presence.", icon: Award },
  { id: "ui-ux-design", title: "UI/UX Design", description: "Useful, intuitive product experiences shaped through user journeys, interface design, prototypes and careful testing.", icon: PanelsTopLeft },
  { id: "digital-marketing", title: "Digital Marketing", description: "Digital campaigns and content that help you reach the right audience, build momentum and create measurable engagement.", icon: Megaphone },
  { id: "motion-design", title: "Motion & Design", description: "Motion graphics, animated assets and visual stories that add movement, energy and clarity to your message.", icon: Clapperboard },
];

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Graphic Design");
  const openProject = (service = "Full Creative Suite") => { setSelectedService(service); setModalOpen(true); };
  return <main className="min-h-screen overflow-x-hidden bg-[#f5f5f5] text-[#293541]">
    <TopBar onOpenContact={() => openProject()} /><Navbar onOpenContact={() => openProject()} />
    <section className="bg-[#293541] py-16 text-white sm:py-20 lg:py-24"><div className="mx-auto max-w-[1240px] px-5 sm:px-10"><p className="font-inter text-sm font-bold tracking-wide text-[#53ede3]">HOME / SERVICES</p><h1 className="mt-4 max-w-3xl font-poppins text-4xl font-bold leading-tight sm:text-5xl">Creative services built to move your brand forward.</h1><p className="mt-5 max-w-2xl font-inter text-base leading-relaxed text-white/75 sm:text-lg">From a strong identity to a polished digital experience, NEXIV brings strategy, design and technology together.</p></div></section>
    <section className="px-5 py-16 sm:px-10 sm:py-20 lg:py-24"><div className="mx-auto max-w-[1240px]"><div className="mb-10"><p className="font-inter text-sm font-bold tracking-wide text-[#53ede3]">WHAT WE DO</p><h2 className="mt-3 font-poppins text-3xl font-bold sm:text-4xl">One creative partner, six focused services.</h2></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(({ id, title, description, icon: Icon }) => <article id={id} key={id} className="scroll-mt-24 rounded-2xl border border-black/[0.07] bg-white p-7 shadow-sm transition-transform hover:-translate-y-1"><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#293541] text-[#afe714]"><Icon size={23} /></div><h3 className="mt-6 font-poppins text-xl font-bold">{title}</h3><p className="mt-3 font-inter text-sm leading-relaxed text-[#293541]/70">{description}</p><button onClick={() => openProject(title)} className="mt-6 font-inter text-sm font-bold text-[#293541] underline decoration-[#afe714] decoration-2 underline-offset-4">Start a project</button></article>)}</div></div></section>
    <PageProjectCta onOpenContact={() => openProject()} /><Footer /><ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService={selectedService} />
  </main>;
}
