"use client";

import React, { useState } from "react";

interface Course {
  title: string;
  rating: number;
  duration: string;
  price: string;
  type: "Master" | "Bachelor";
  img: string;
  slug: string;
}

interface CoursesProps {
  onApply: () => void;
}

export default function Courses({ onApply }: CoursesProps) {
  const [activeTab, setActiveTab] = useState<"all" | "masters" | "bachelors">("all");
  const [showAll, setShowAll] = useState(false);

  const courses: Course[] = [
    {
      title: "Master of Business Administration (MBA)",
      rating: 4.9,
      duration: "24 months",
      price: "INR 1,80,000",
      type: "Master",
      img: "/course_mba.png",
      slug: "online-mba-manipal-university-jaipur",
    },
    {
      title: "Master of Computer Applications (MCA)",
      rating: 4.8,
      duration: "24 months",
      price: "INR 1,58,000",
      type: "Master",
      img: "/course_mca.png",
      slug: "online-mca-degree-muj",
    },
    {
      title: "Bachelor of Business Administration (BBA)",
      rating: 4.7,
      duration: "36 months",
      price: "INR 1,39,500",
      type: "Bachelor",
      img: "/course_bba.png",
      slug: "online-bba-degree-muj",
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      rating: 4.8,
      duration: "36 months",
      price: "INR 1,39,500",
      type: "Bachelor",
      img: "/course_bca.png",
      slug: "online-bca-degree-muj",
    },
    {
      title: "Master of Science in Mathematics",
      rating: 4.5,
      duration: "24 months",
      price: "INR 80,000",
      type: "Master",
      img: "/course-msc-math.png",
      slug: "online-msc-mathematics-muj",
    },
    {
      title: "Master of Arts in Economics",
      rating: 4.2,
      duration: "24 months",
      price: "INR 80,000",
      type: "Master",
      img: "/course-ma-economics.png",
      slug: "online-ma-economics-degree",
    },
    {
      title: "Master of Arts in Journalism & Mass Comm.",
      rating: 4.2,
      duration: "24 months",
      price: "INR 80,000",
      type: "Master",
      img: "/course-ma-jmc.png",
      slug: "online-ma-journalism-and-mass-communication",
    },
    {
      title: "Master of Commerce (M.Com)",
      rating: 4.2,
      duration: "24 months",
      price: "INR 1,08,000",
      type: "Master",
      img: "/course-mcom.png",
      slug: "online-mcom-degree-muj",
    },
    {
      title: "Bachelor of Commerce (B.Com)",
      rating: 4.6,
      duration: "36 months",
      price: "INR 99,000",
      type: "Bachelor",
      img: "/course-bcom.png",
      slug: "online-bcom-degree-muj",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    if (activeTab === "masters") return course.type === "Master";
    if (activeTab === "bachelors") return course.type === "Bachelor";
    return true;
  });

  const visibleCourses = showAll ? filteredCourses : filteredCourses.slice(0, 4);

  return (
    <section className="py-24 bg-surface-container-low" id="programs">
      <div className="px-4 md:px-margin-desktop max-w-max-width mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-hanken text-3xl md:text-4xl text-deep-navy mb-3 font-bold">
              Top Online Courses
            </h2>
            <p className="text-on-surface-variant font-source-sans text-lg">
              Advance your career with our most popular industry-aligned programs
            </p>
          </div>
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <button onClick={onApply} className="bg-vibrant-orange text-white px-6 py-2 rounded font-bold cursor-pointer hover:shadow-md transition-shadow">
              View Scholarships
            </button>
            <button
              onClick={() => setShowAll(!showAll)}
              className="border border-deep-navy text-deep-navy px-6 py-2 rounded font-bold hover:bg-deep-navy hover:text-white transition-all cursor-pointer"
            >
              {showAll ? "View Less" : "View All"}
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex border-b border-outline-variant/30 mb-8 gap-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab("all")}
            className={`pb-4 px-2 font-ibm-plex text-sm uppercase tracking-wider font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "all"
                ? "text-vibrant-orange border-b-2 border-vibrant-orange"
                : "text-on-surface-variant hover:text-deep-navy"
            }`}
          >
            All Degrees
          </button>
          <button
            onClick={() => setActiveTab("masters")}
            className={`pb-4 px-2 font-ibm-plex text-sm uppercase tracking-wider font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "masters"
                ? "text-vibrant-orange border-b-2 border-vibrant-orange"
                : "text-on-surface-variant hover:text-deep-navy"
            }`}
          >
            Masters
          </button>
          <button
            onClick={() => setActiveTab("bachelors")}
            className={`pb-4 px-2 font-ibm-plex text-sm uppercase tracking-wider font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "bachelors"
                ? "text-vibrant-orange border-b-2 border-vibrant-orange"
                : "text-on-surface-variant hover:text-deep-navy"
            }`}
          >
            Bachelors
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleCourses.map((course, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col h-full border border-muted-lavender/10"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src={course.img}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-deep-navy flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-xs text-vibrant-orange">
                    star
                  </span>{" "}
                  {course.rating}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-lavender mb-2 block">
                  {course.type} Program
                </span>
                <h3 className="font-hanken text-lg font-bold text-deep-navy mb-4 group-hover:text-vibrant-orange transition-colors min-h-[56px] line-clamp-2">
                  {course.title}
                </h3>
                <div className="space-y-3 mb-8 text-on-surface-variant">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-vibrant-orange text-lg">
                      schedule
                    </span>{" "}
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-deep-navy">
                    <span className="material-symbols-outlined text-vibrant-orange text-lg">
                      payments
                    </span>{" "}
                    {course.price}
                  </div>
                </div>
                <button onClick={onApply} className="mt-auto w-full py-3.5 bg-off-white text-deep-navy font-bold border border-deep-navy/10 rounded group-hover:bg-deep-navy group-hover:text-white transition-all cursor-pointer active:scale-95">
                  Apply Now
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button if not showing all */}
        {filteredCourses.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-deep-navy font-bold flex items-center gap-2 hover:text-vibrant-orange transition-all cursor-pointer"
            >
              {showAll ? "Show Less" : "Show More Programs"}
              <span className="material-symbols-outlined">
                {showAll ? "keyboard_arrow_up" : "keyboard_arrow_down"}
              </span>
            </button>
          </div>
        )}

        <div className="mt-16 flex justify-center">
          <button onClick={onApply} className="bg-deep-navy text-white px-12 py-4 font-bold rounded shadow-lg hover:bg-primary transition-all duration-300 uppercase tracking-wider text-sm cursor-pointer active:scale-95">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
