"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Rankings from "@/components/sections/Rankings";
import Courses from "@/components/sections/Courses";
import Leaders from "@/components/sections/Leaders";
import StatBar from "@/components/sections/StatBar";
import Faculty from "@/components/sections/Faculty";
import Alumni from "@/components/sections/Alumni";
import Demographics from "@/components/sections/Demographics";
import CampusImmersions from "@/components/sections/CampusImmersions";
import Footer from "@/components/sections/Footer";
import LeadCaptureModal from "@/components/sections/LeadCaptureModal";
import FloatingActions from "@/components/sections/FloatingActions";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    sessionStorage.setItem("muj_modal_shown", "true");
  };

  // Auto-open modal after 3 seconds (once per session)
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("muj_modal_shown");
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onApply={openModal} />
      <main className="flex-1">
        <Hero onApply={openModal} />
        <Rankings onApply={openModal} />
        <Courses onApply={openModal} />
        <Leaders onApply={openModal} />
        <StatBar />
        <Faculty onApply={openModal} />
        <Alumni onApply={openModal} />
        <Demographics />
        <CampusImmersions />
      </main>
      <Footer />
      <FloatingActions onApply={openModal} />
      <LeadCaptureModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
