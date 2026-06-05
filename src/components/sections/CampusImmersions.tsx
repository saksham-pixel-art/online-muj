import React from "react";

export default function CampusImmersions() {
  const immersions = [
    {
      title: "Convocation Day",
      description: "Grand celebration of your academic journey and achievements.",
      img: "/immersion-convocation.webp",
    },
    {
      title: "Tech Hackathons",
      description: "Collaborative coding hackathons and technical workshops on campus.",
      img: "/immersion-hackathon.png",
    },
    {
      title: "Annual Cultural Fest",
      description: "Networking and cultural performances with offline student peers.",
      img: "/immersion-fest.jpg",
    },
  ];

  return (
    <section className="py-24 bg-surface-container-low" id="immersions">
      <div className="px-4 md:px-margin-desktop max-w-max-width mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-hanken text-3xl md:text-4xl text-deep-navy mb-4 font-bold">
            Campus Immersions
          </h2>
          <p className="text-on-surface-variant font-source-sans text-lg">
            Blurring the lines between online and on-campus experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {immersions.map((item, idx) => (
            <article
              key={idx}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={item.img}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/95 via-deep-navy/40 to-transparent flex flex-col justify-end p-8">
                <h4 className="text-white font-hanken text-2xl mb-2 font-bold group-hover:text-vibrant-orange transition-colors">
                  {item.title}
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
