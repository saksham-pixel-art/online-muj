"use client";

import React from "react";

interface AlumniProps {
  onApply: () => void;
}

export default function Alumni({ onApply }: AlumniProps) {
  const alumniList = [
    {
      name: "Karthik Reddy",
      degree: "Online MA JMC",
      img: "/alumni-karthik.png",
      progression: [
        { year: "2021", detail: "English teacher with a passion for media" },
        { year: "2024", detail: "Media Strategist at top news agency" },
      ],
    },
    {
      name: "Meera Choudhary",
      degree: "Online MA JMC",
      img: "/alumni-meera.png",
      progression: [
        { year: "2020", detail: "Blogger aspiring for journalism career" },
        { year: "2024", detail: "Broadcast Journalist for lead channel" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-ink-black text-white" id="alumni">
      <div className="px-4 md:px-margin-desktop max-w-max-width mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-hanken text-3xl md:text-4xl text-vibrant-orange mb-4 font-bold">
            Featured Alumni Success
          </h2>
          <p className="text-muted-lavender text-lg max-w-2xl font-source-sans opacity-80">
            Inspiring career transformations from our global community of graduates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {alumniList.map((alumni, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-2xl flex flex-col md:flex-row gap-8 md:gap-10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="md:w-1/3 text-center md:text-left">
                <div className="rounded-xl overflow-hidden aspect-square border-2 border-vibrant-orange/30 mb-6 w-32 h-32 md:w-full md:h-auto mx-auto md:mx-0">
                  <img
                    alt={alumni.name}
                    className="w-full h-full object-cover"
                    src={alumni.img}
                  />
                </div>
                <h4 className="font-hanken text-lg font-bold mb-1">{alumni.name}</h4>
                <p className="text-vibrant-orange font-bold text-xs uppercase tracking-widest">
                  {alumni.degree}
                </p>
              </div>
              <div className="flex-1">
                <h5 className="font-ibm-plex uppercase text-xs text-muted-lavender mb-6 border-b border-white/10 pb-3 font-bold tracking-widest text-center md:text-left">
                  Career Progression
                </h5>
                <div className="space-y-6">
                  {alumni.progression.map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="text-vibrant-orange font-bold text-sm bg-vibrant-orange/10 px-2 py-1 rounded">
                        {step.year}
                      </span>
                      <p className={`text-sm ${idx === 1 ? "font-bold text-white" : "opacity-70 text-white"}`}>
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button onClick={onApply} className="bg-vibrant-orange text-white px-12 py-4 font-bold rounded shadow-lg hover:brightness-110 transition-all uppercase tracking-wider text-sm cursor-pointer active:scale-95 border border-vibrant-orange">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
