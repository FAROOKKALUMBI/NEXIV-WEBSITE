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
    <main className="min-h-screen flex flex-col bg-[#293541] selection:bg-[#afe714] selection:text-[#293541]">
      {/* SECTION 1 — TOP BAR */}
      <TopBar onOpenContact={() => handleOpenContact()} />

      {/* SECTION 2 — NAVBAR */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* SECTION 3 — HERO */}
      <Hero onOpenContact={() => handleOpenContact()} />

      {/* SECTION 4 — STATS BAR */}
      <StatsBar />

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
