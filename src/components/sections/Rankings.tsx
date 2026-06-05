"use client";

import React from "react";

interface RankingsProps {
  onApply: () => void;
}

export default function Rankings({ onApply }: RankingsProps) {
  const rankingItems = [
    {
      img: "/nirf.png",
      alt: "NIRF India Rankings Logo",
      text: "Ranked 58 amongst India's top universities (2025)",
    },
    {
      img: "/nba.png",
      alt: "NBA Accreditation Logo",
      text: "MBA program accredited by NBA",
    },
    {
      img: "/naac.jpg",
      alt: "Official NAAC A+ Accreditation Logo",
      text: "Rajasthan's 1st NAAC A+ Accredited University",
    },
    {
      img: "/ugc.jpg",
      alt: "UGC Logo",
      text: "UGC-entitled Online Degrees",
    },
    {
      img: "/wes.png",
      alt: "WES evaluated badge",
      text: "WES Evaluated Degrees for Global Careers",
    },
  ];

  return (
    <section className="py-20 bg-white" id="rankings">
      <div className="px-4 md:px-margin-desktop max-w-max-width mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-hanken text-3xl md:text-4xl text-deep-navy mb-4 font-bold">
            Rankings &amp; Accreditations
          </h2>
          <div className="w-20 h-1 bg-vibrant-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {rankingItems.map((item, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 border border-muted-lavender/10 bg-off-white/30 flex flex-col items-center text-center rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <img
                  alt={item.alt}
                  className="w-full h-full object-contain filter group-hover:scale-110 transition-transform"
                  src={item.img}
                />
              </div>
              <p className="font-ibm-plex text-sm text-on-surface-variant group-hover:text-deep-navy transition-colors">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button onClick={onApply} className="bg-deep-navy text-white px-10 md:px-12 py-4 font-bold rounded shadow-lg hover:bg-primary transition-all duration-300 uppercase tracking-wider text-sm cursor-pointer active:scale-95">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
