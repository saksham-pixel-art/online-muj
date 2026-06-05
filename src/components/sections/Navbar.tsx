"use client";

import React, { useState, useEffect, useCallback } from "react";

interface NavbarProps {
  onApply: () => void;
}

const NAV_ITEMS = [
  { label: "Programs", href: "#programs" },
  { label: "Admissions", href: "#rankings" },
  { label: "Campus Life", href: "#immersions" },
  { label: "Research", href: "#faculty" },
  { label: "About Us", href: "#about" },
];

export default function Navbar({ onApply }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${id}`);
            }
          });
        },
        {
          rootMargin: "-80px 0px -60% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Smooth scroll with offset
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80; // sticky header height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    },
    []
  );

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/20 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center w-full h-20 px-4 md:px-margin-desktop max-w-max-width mx-auto">
        <a className="flex items-center gap-base" href="#">
          <img
            alt="Manipal University Jaipur Logo"
            className="h-12 md:h-14 w-auto object-contain"
            src="/logo.png"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              className={`font-ibm-plex text-sm uppercase tracking-wide transition-colors duration-200 pb-1 ${
                activeSection === item.href
                  ? "text-vibrant-orange font-bold border-b-2 border-vibrant-orange"
                  : "text-on-surface-variant hover:text-deep-navy font-bold"
              }`}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={onApply}
            className="px-6 md:px-8 py-2.5 bg-deep-navy text-white font-bold rounded hover:bg-primary transition-all duration-200 active:scale-95 shadow-md shadow-deep-navy/20 cursor-pointer hidden sm:block"
          >
            Apply Now
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl text-on-surface">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-ink-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Panel */}
      <div
        className={`fixed top-20 right-0 h-[calc(100vh-5rem)] w-80 max-w-[85vw] bg-white z-50 lg:hidden shadow-2xl transition-transform duration-300 ease-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              className={`px-4 py-3.5 rounded-lg font-ibm-plex text-sm uppercase tracking-wide transition-all duration-200 ${
                activeSection === item.href
                  ? "text-vibrant-orange bg-vibrant-orange/5 font-bold"
                  : "text-on-surface-variant hover:bg-surface-container-low hover:text-deep-navy font-bold"
              }`}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}

          <div className="border-t border-outline-variant/20 mt-4 pt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onApply();
              }}
              className="w-full py-3 bg-deep-navy text-white font-bold rounded-lg hover:bg-primary transition-all cursor-pointer active:scale-95 shadow-md"
            >
              Apply Now
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
