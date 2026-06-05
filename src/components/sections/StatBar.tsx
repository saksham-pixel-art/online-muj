import React from "react";

export default function StatBar() {
  const stats = [
    { value: "15+", label: "Years of Excellence" },
    { value: "650+", label: "Expert Faculty" },
    { value: "40+", label: "Student Nationalities" },
    { value: "2,000+", label: "Cities Reached" },
  ];

  return (
    <section className="py-16 bg-deep-navy text-white relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-vibrant-orange/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="px-4 md:px-margin-desktop max-w-max-width mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-vibrant-orange mb-3 group-hover:scale-110 transition-transform duration-300">
              {stat.value}
            </div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-white/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
