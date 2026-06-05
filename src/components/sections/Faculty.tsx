"use client";

import React from "react";

interface FacultyProps {
  onApply: () => void;
}

export default function Faculty({ onApply }: FacultyProps) {
  const facultyList = [
    {
      name: "Dr. Priyanka Mathur",
      role: "Associate Professor & Coordinator (BCA)",
      img: "/priyanka-mathur.png.webp",
      bio: "Serving as Associate Professor and Program Coordinator (BCA) with over 15 years of experience teaching computer science, artificial intelligence, and network security.",
    },
    {
      name: "Dr. Abhishika Sharma",
      role: "Associate Professor & Coordinator (MAJMC)",
      img: "/dr-ashika-sharma.png",
      bio: "Deputy Registrar and Associate Professor (MAJMC) with 17 years of combined academic and professional experience in Journalism, Advertising, and Mass Communication.",
    },
    {
      name: "Dr. Vandna Misra",
      role: "Professor & Coordinator (B.Com)",
      img: "/dr-vandana-mishra.png",
      bio: "Professor and Program Coordinator (B.Com) with over 20 years in academics, specializing in Finance, Stock Markets, and Accounting research.",
    },
  ];

  return (
    <section className="py-24 bg-off-white" id="faculty">
      <div className="px-4 md:px-margin-desktop max-w-max-width mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-hanken text-3xl md:text-4xl text-deep-navy mb-4 font-bold">
            Meet Your Expert Faculty
          </h2>
          <div className="w-20 h-1 bg-vibrant-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyList.map((faculty, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden group shadow-md border border-muted-lavender/10 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden bg-deep-navy">
                <img
                  alt={faculty.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={faculty.img}
                />
                <div className="absolute inset-0 faculty-gradient"></div>
                <button className="absolute bottom-6 right-6 w-12 h-12 bg-vibrant-orange rounded-full flex items-center justify-center text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                  <span className="material-symbols-outlined fill-[1]">
                    play_arrow
                  </span>
                </button>
              </div>
              <div className="p-8">
                <h3 className="font-hanken text-xl text-deep-navy mb-1 font-bold">
                  {faculty.name}
                </h3>
                <p className="text-vibrant-orange font-bold text-xs uppercase tracking-widest mb-4">
                  {faculty.role}
                </p>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-3 leading-relaxed">
                  {faculty.bio}
                </p>
                <a
                  className="text-deep-navy font-bold text-sm flex items-center gap-2 hover:text-vibrant-orange transition-colors"
                  href="#"
                >
                  View Profile{" "}
                  <span className="material-symbols-outlined text-xs">
                    arrow_forward
                  </span>
                </a>
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
