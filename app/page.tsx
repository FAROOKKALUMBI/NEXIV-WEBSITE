"use client";

import React, { useState } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ContactModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Graphic Design");

  const handleOpenContact = (service?: string) => {
    if (service) setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#293541] selection:bg-[#afe714] selection:text-[#293541] overflow-x-hidden">
      {/* SECTION 1 — TOP BAR */}
      <TopBar onOpenContact={() => handleOpenContact()} />

      {/* SECTION 2 — NAVBAR */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* HERO + STATSBAR WRAPPER WITH ATMOSPHERIC GRADIENT TRANSITION */}
      <div className="relative">
        {/* SECTION 3 — HERO */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* SECTION 4 — STATS BAR */}
        <StatsBar />

        {/* Soft atmospheric gradient fade transition from dark hero to light About section */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(41,53,65,0.4) 30%, rgba(245,245,245,0.95) 100%)",
          }}
        />
      </div>

      {/* SECTION 5 — ABOUT */}
      <About onLearnMore={() => handleOpenContact("Full Creative Suite")} />

      {/* SECTION 6 — SERVICES */}
      <Services onSelectService={(service) => handleOpenContact(service)} />

      {/* SECTION 7 — CTA */}
      <CTA onOpenContact={() => handleOpenContact()} />

      {/* SECTION 8 — FOOTER */}
      <Footer />

      {/* Interactive Project Inquiry Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        defaultService={selectedService}
      />
    </main>
  );
}
