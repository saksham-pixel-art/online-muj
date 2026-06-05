import React from "react";

export default function Demographics() {
  const ugAgeProfile = [
    { label: "18-20", value: 19 },
    { label: "21-24", value: 35, featured: true },
    { label: "25-29", value: 23 },
    { label: "30-34", value: 11 },
    { label: "35+", value: 7 },
  ];

  const pgAgeProfile = [
    { label: "21-24", value: 37, featured: true },
    { label: "25-29", value: 35 },
    { label: "30-34", value: 14 },
    { label: "35-39", value: 8 },
    { label: "40+", value: 5 },
  ];

  return (
    <section className="py-24 bg-white" id="demographics">
      <div className="px-4 md:px-margin-desktop max-w-max-width mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-hanken text-3xl md:text-4xl text-deep-navy mb-4 font-bold">
            Learner Demographics (2026)
          </h2>
          <div className="w-20 h-1 bg-vibrant-orange mx-auto"></div>
        </div>

        <div className="bento-grid">
          {/* Geographical Map block */}
          <div className="col-span-12 lg:col-span-7 bg-off-white p-6 md:p-10 rounded-2xl flex flex-col justify-between border border-muted-lavender/10">
            <h3 className="font-hanken text-xl text-deep-navy mb-8 border-l-4 border-vibrant-orange pl-4 font-bold">
              Geographical Distribution
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full max-w-xs relative aspect-square bg-surface-container rounded-full flex items-center justify-center overflow-hidden border border-muted-lavender/20 mx-auto">
                <img
                  alt="India Map visualization"
                  className="w-full h-full object-cover opacity-10 filter brightness-90"
                  src="/demographics-map.png"
                />
                <span className="absolute text-center text-xs font-bold text-deep-navy max-w-[120px] font-ibm-plex">
                  Presence across all Indian states
                </span>
              </div>
              <div className="flex-1 space-y-4 w-full">
                <div className="p-5 bg-white rounded-xl shadow-sm border-l-4 border-deep-navy">
                  <p className="font-bold text-deep-navy text-lg">13% Highest State</p>
                  <p className="text-sm text-on-surface-variant">
                    Strong growth in tier 2 and tier 3 cities.
                  </p>
                </div>
                <div className="p-5 bg-white rounded-xl shadow-sm border-l-4 border-vibrant-orange">
                  <p className="font-bold text-vibrant-orange text-lg">9% Emerging Market</p>
                  <p className="text-sm text-on-surface-variant">
                    Rapid adoption in North East India region.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Age Demographics block */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            {/* UG Profile */}
            <div className="bg-off-white p-8 rounded-2xl border border-muted-lavender/10">
              <h3 className="font-hanken text-lg text-deep-navy mb-6 font-bold">
                Age Profile - Undergraduate
              </h3>
              <div className="flex items-end justify-between h-32 gap-3">
                {ugAgeProfile.map((age, idx) => (
                  <div key={idx} className="flex flex-col items-center flex-1 gap-2 h-full justify-end">
                    <div
                      style={{ height: `${age.value}%` }}
                      className={`w-full rounded-t transition-all duration-500 hover:opacity-90 ${
                        age.featured ? "bg-vibrant-orange" : "bg-deep-navy/50"
                      }`}
                    ></div>
                    <span
                      className={`text-[10px] whitespace-nowrap ${
                        age.featured ? "font-bold text-vibrant-orange" : "text-on-surface-variant"
                      }`}
                    >
                      {age.label} ({age.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* PG Profile */}
            <div className="bg-off-white p-8 rounded-2xl border border-muted-lavender/10">
              <h3 className="font-hanken text-lg text-deep-navy mb-6 font-bold">
                Age Profile - Postgraduate
              </h3>
              <div className="flex items-end justify-between h-32 gap-3">
                {pgAgeProfile.map((age, idx) => (
                  <div key={idx} className="flex flex-col items-center flex-1 gap-2 h-full justify-end">
                    <div
                      style={{ height: `${age.value}%` }}
                      className={`w-full rounded-t transition-all duration-500 hover:opacity-90 ${
                        age.featured ? "bg-vibrant-orange" : "bg-deep-navy/50"
                      }`}
                    ></div>
                    <span
                      className={`text-[10px] whitespace-nowrap ${
                        age.featured ? "font-bold text-vibrant-orange" : "text-on-surface-variant"
                      }`}
                    >
                      {age.label} ({age.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
