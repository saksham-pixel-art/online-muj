"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const STEPS = [
  {
    icon: "call",
    title: "Counselor Contact",
    description: "Our admissions counselor will reach out within 24 hours to discuss your goals and answer questions.",
  },
  {
    icon: "description",
    title: "Program Details",
    description: "You'll receive detailed program information, curriculum, fee structure, and scholarship options via email.",
  },
  {
    icon: "how_to_reg",
    title: "Enrollment Support",
    description: "We'll guide you through the complete enrollment process with 100% placement assistance.",
  },
];

export default function ThankYouContent() {
  const [showCheck, setShowCheck] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowCheck(true), 300);
    const t2 = setTimeout(() => setShowContent(true), 800);
    
    // Fire Google Ads conversion event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18231041361/Vo0GCPvb08AcENG6nvVD'
      });
    }
    
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-outline-variant/20">
        <div className="flex justify-between items-center w-full h-20 px-4 md:px-margin-desktop max-w-max-width mx-auto">
          <Link href="/" className="flex items-center gap-base">
            <img
              alt="Manipal University Jaipur Logo"
              className="h-12 md:h-14 w-auto object-contain"
              src="/logo.png"
            />
          </Link>
          <Link
            href="/"
            className="px-6 py-2.5 bg-deep-navy text-white font-bold rounded hover:bg-primary transition-all duration-200 active:scale-95 shadow-md shadow-deep-navy/20 text-sm"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16 md:py-24">
        <div className="max-w-2xl w-full text-center">
          {/* Animated Checkmark */}
          <div className="mb-10">
            <div
              className={`w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto flex items-center justify-center transition-all duration-700 ${
                showCheck
                  ? "bg-deep-navy scale-100 opacity-100"
                  : "bg-deep-navy/20 scale-50 opacity-0"
              }`}
            >
              <span
                className={`material-symbols-outlined text-5xl md:text-6xl text-white transition-all duration-500 delay-300 ${
                  showCheck ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h1 className="font-hanken text-3xl md:text-5xl text-deep-navy mb-4 font-bold">
              Thank You for Applying!
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-lg mx-auto mb-16 leading-relaxed">
              Your application has been received successfully. Here&apos;s what happens next:
            </p>

            {/* Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-left mb-16">
              {STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="relative bg-white rounded-2xl p-8 border border-muted-lavender/10 shadow-sm hover:shadow-lg transition-all duration-300 group"
                  style={{
                    transitionDelay: `${idx * 150}ms`,
                  }}
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-2 w-8 h-8 rounded-full bg-vibrant-orange text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {idx + 1}
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-deep-navy/5 flex items-center justify-center mb-5 group-hover:bg-deep-navy/10 transition-colors">
                    <span className="material-symbols-outlined text-2xl text-deep-navy">
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="font-hanken text-lg font-bold text-deep-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-10 py-4 bg-deep-navy text-white font-bold rounded shadow-lg hover:bg-primary transition-all duration-300 uppercase tracking-wider text-sm active:scale-95 inline-flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">home</span>
                Explore More Programs
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || "919999999999"}?text=Hi%2C%20I%20just%20applied%20for%20MUJ%20Online%20Degree.%20Please%20share%20more%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border-2 border-deep-navy text-deep-navy font-bold rounded hover:bg-deep-navy hover:text-white transition-all duration-300 uppercase tracking-wider text-sm active:scale-95 inline-flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="bg-ink-black text-white/50 py-6 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Manipal University Jaipur. All rights reserved.</p>
      </footer>
    </div>
  );
}
