"use client";

import React from "react";

interface LeadersProps {
  onApply: () => void;
}

export default function Leaders({ onApply }: LeadersProps) {
  const leaders = [
    {
      name: "Dr. N N Sharma",
      role: "President, Manipal University Jaipur",
      img: "/Dr-N-N-Sharma.png.webp",
      quote:
        "Building on seven decades of excellence, MUJ online programs break barriers to empower learners with future-ready skills.",
    },
    {
      name: "Dr. Gadapa Mallikarjuna",
      role: "Director - CDOE, MUJ",
      img: "/dr-mallik.png",
      quote:
        "Our programs transform minds into competent professionals, offering quality education anytime, anywhere at your own pace.",
    },
  ];

  return (
    <section className="py-24 bg-white" id="about">
      <div className="px-4 md:px-margin-desktop max-w-max-width mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-hanken text-3xl md:text-4xl text-deep-navy mb-4 font-bold">
            Message From Our Leaders
          </h2>
          <div className="w-20 h-1 bg-vibrant-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="glass-card p-8 md:p-10 rounded-2xl flex flex-col md:flex-row gap-8 items-start relative overflow-hidden shadow-sm"
            >
              <div className="absolute top-4 right-4 opacity-5 pointer-events-none">
                <span className="material-symbols-outlined text-8xl text-deep-navy">
                  format_quote
                </span>
              </div>
              <div className="w-36 h-36 md:w-44 md:h-44 flex-shrink-0 bg-off-white rounded-xl overflow-hidden border-2 border-deep-navy/10 mx-auto md:mx-0">
                <img
                  alt={leader.name}
                  className="w-full h-full object-cover"
                  src={leader.img}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="font-source-sans text-on-surface-variant italic mb-6 leading-relaxed text-base md:text-lg">
                  &ldquo;{leader.quote}&rdquo;
                </p>
                <h4 className="font-hanken text-xl text-deep-navy mb-1 font-bold">
                  {leader.name}
                </h4>
                <p className="text-vibrant-orange font-bold text-sm uppercase tracking-wide">
                  {leader.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button onClick={onApply} className="bg-deep-navy text-white px-12 py-4 font-bold rounded shadow-lg hover:bg-primary transition-all duration-300 uppercase tracking-wider text-sm cursor-pointer active:scale-95">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
