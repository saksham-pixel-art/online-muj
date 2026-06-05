import React from "react";

export default function Footer() {
  return (
    <footer className="bg-ink-black text-white/70 py-16 border-t border-white/10">
      <div className="px-4 md:px-margin-desktop max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Branding Column */}
        <div className="space-y-6">
          <img
            alt="Manipal University Jaipur"
            className="h-12 w-auto object-contain brightness-0 invert"
            src="/logo.png"
          />
          <p className="text-sm leading-relaxed">
            Manipal University Jaipur (MUJ) is a NAAC A+ accredited, UGC-approved university known
            for its academic excellence and industry-focused learning as part of the legendary
            Manipal Education Group.
          </p>
        </div>

        {/* Programs Column */}
        <div>
          <h4 className="font-hanken text-white font-bold mb-6 text-sm uppercase tracking-wider">
            Online Programs
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-vibrant-orange transition-colors">
                Master of Business Admin (MBA)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-vibrant-orange transition-colors">
                Master of Computer Applications (MCA)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-vibrant-orange transition-colors">
                Bachelor of Business Admin (BBA)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-vibrant-orange transition-colors">
                Bachelor of Computer Applications (BCA)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-vibrant-orange transition-colors">
                Master of Commerce (M.Com)
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-hanken text-white font-bold mb-6 text-sm uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-vibrant-orange transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-vibrant-orange transition-colors">
                CDOE Centre
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-vibrant-orange transition-colors">
                Faculty Directory
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-vibrant-orange transition-colors">
                Placements
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-vibrant-orange transition-colors">
                Help Center &amp; FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="font-hanken text-white font-bold mb-6 text-sm uppercase tracking-wider">
            Contact Us
          </h4>
          <p className="text-sm leading-relaxed mb-4">
            Manipal University Jaipur,
            <br />
            Jaipur-Ajmer Expressway, Dahmi Kalan,
            <br />
            Near GVK Toll Plaza, Jaipur,
            <br />
            Rajasthan 303007
          </p>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:admissions@onlinemuj.com"
              className="text-vibrant-orange hover:underline"
            >
              admissions@onlinemuj.com
            </a>
          </p>
        </div>
      </div>

      <div className="px-4 md:px-margin-desktop max-w-max-width mx-auto mt-16 pt-8 border-t border-white/10">
        <p className="text-[11px] text-white/40 leading-relaxed mb-6 text-left">
          Disclaimer: This website is intended solely for providing information about Manipal University Jaipur (MUJ) Online programs. All admissions, enrollments, fee payments, academic decisions, and related processes are conducted exclusively by Manipal University Jaipur through its official channels. Information is subject to change as per the university's policies and guidelines.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Manipal University Jaipur. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              UGC Mandate
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
