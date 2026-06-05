"use client";

import React from "react";

interface HeroProps {
  onApply: () => void;
}

export default function Hero({ onApply }: HeroProps) {
  return (
    <section className="relative h-[600px] md:h-[650px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-ink-black">
        <img
          alt="Main campus building of Manipal University Jaipur"
          className="w-full h-full object-cover opacity-60"
          src="/hero-bg.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-black/95 via-ink-black/50 to-transparent"></div>
      </div>
      <div className="relative z-10 px-4 md:px-margin-desktop max-w-max-width mx-auto w-full text-white">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-vibrant-orange rounded-full mb-8 shadow-lg">
          <span className="material-symbols-outlined text-sm">stars</span>
          <span className="font-ibm-plex text-[10px] md:text-xs font-bold tracking-widest uppercase">
            NAAC A+ ACCREDITED UNIVERSITY
          </span>
        </div>
        <h1 className="font-hanken text-4xl md:text-5xl lg:text-6xl mb-6 max-w-3xl leading-[1.1] font-bold">
          Manipal University Jaipur Online Degrees
        </h1>
        <p className="font-source-sans text-lg md:text-xl max-w-xl mb-10 opacity-90 leading-relaxed">
          Empowering learners worldwide with UGC-approved degrees, innovative curriculum, and expert mentorship from the legendary Manipal Group.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={onApply}
            className="bg-vibrant-orange text-white px-8 md:px-10 py-4 font-bold rounded shadow-xl hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
          >
            Download Brochure
            <span className="material-symbols-outlined">download</span>
          </button>
          <button
            onClick={onApply}
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 md:px-10 py-4 font-bold rounded hover:bg-white/20 transition-all cursor-pointer active:scale-95"
          >
            View Scholarship Details
          </button>
        </div>
      </div>
    </section>
  );
}
