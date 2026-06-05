"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { submitLead, type LeadData } from "@/lib/submitLead";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PROGRAMS = [
  "Master of Business Administration (MBA)",
  "Master of Computer Applications (MCA)",
  "Bachelor of Business Administration (BBA)",
  "Bachelor of Computer Applications (BCA)",
  "Master of Science in Mathematics",
  "Master of Arts in Economics",
  "Master of Arts in Journalism & Mass Comm.",
  "Master of Commerce (M.Com)",
  "Bachelor of Commerce (B.Com)",
];

const QUALIFICATIONS = [
  "10th Pass",
  "12th Pass / Intermediate",
  "Diploma",
  "Undergraduate (Pursuing)",
  "Graduate (Bachelor's Degree)",
  "Postgraduate (Master's Degree)",
  "Working Professional",
  "Other",
];

export default function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<LeadData>({
    name: "",
    email: "",
    phone: "",
    program: "",
    qualification: "",
  });

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setErrors({});
        setFormData({ name: "", email: "", phone: "", program: "", qualification: "" });
      }, 300);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const updateField = useCallback((field: keyof LeadData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-+]/g, "").slice(-10))) {
      newErrors.phone = "Enter a valid 10-digit Indian phone number";
    }
    if (!formData.program) newErrors.program = "Please select a program";
    if (!formData.qualification) newErrors.qualification = "Please select your qualification";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const result = await submitLead(formData);
    setIsSubmitting(false);
    if (result.success) {
      onClose();
      router.push("/thank-you");
    } else {
      setErrors({ submit: result.message });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Apply Now"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-deep-navy px-8 py-6 text-white relative sticky top-0 z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white rounded-lg p-1.5">
              <img src="/logo.png" alt="Manipal University Jaipur" className="h-10 w-auto object-contain" />
            </div>
          </div>
          <h2 className="font-hanken text-2xl font-bold">Start Your Application</h2>
          <p className="text-white/70 text-sm mt-1">Fill in your details and our counselor will contact you within 24 hours.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="lead-name" className="block text-sm font-bold text-on-surface mb-1.5 font-ibm-plex">
              Full Name <span className="text-vibrant-orange">*</span>
            </label>
            <input
              id="lead-name"
              type="text"
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? "border-error" : "border-outline-variant/40"
              } focus:border-deep-navy focus:ring-2 focus:ring-deep-navy/10 outline-none transition-all text-sm bg-off-white`}
            />
            {errors.name && <p className="text-error text-xs mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">error</span>{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="lead-email" className="block text-sm font-bold text-on-surface mb-1.5 font-ibm-plex">
              Email Address <span className="text-vibrant-orange">*</span>
            </label>
            <input
              id="lead-email"
              type="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="e.g. rahul@example.com"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? "border-error" : "border-outline-variant/40"
              } focus:border-deep-navy focus:ring-2 focus:ring-deep-navy/10 outline-none transition-all text-sm bg-off-white`}
            />
            {errors.email && <p className="text-error text-xs mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">error</span>{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="lead-phone" className="block text-sm font-bold text-on-surface mb-1.5 font-ibm-plex">
              Phone Number <span className="text-vibrant-orange">*</span>
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 border border-r-0 border-outline-variant/40 rounded-l-lg bg-surface-container text-sm text-on-surface-variant font-bold">+91</span>
              <input
                id="lead-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="98765 43210"
                className={`w-full px-4 py-3 rounded-r-lg border ${
                  errors.phone ? "border-error" : "border-outline-variant/40"
                } focus:border-deep-navy focus:ring-2 focus:ring-deep-navy/10 outline-none transition-all text-sm bg-off-white`}
              />
            </div>
            {errors.phone && <p className="text-error text-xs mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">error</span>{errors.phone}</p>}
          </div>

          {/* Program */}
          <div>
            <label htmlFor="lead-program" className="block text-sm font-bold text-on-surface mb-1.5 font-ibm-plex">
              Select Program <span className="text-vibrant-orange">*</span>
            </label>
            <select
              id="lead-program"
              value={formData.program}
              onChange={(e) => updateField("program", e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.program ? "border-error" : "border-outline-variant/40"
              } focus:border-deep-navy focus:ring-2 focus:ring-deep-navy/10 outline-none transition-all text-sm bg-off-white appearance-none cursor-pointer`}
            >
              <option value="">Choose a program...</option>
              {PROGRAMS.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            {errors.program && <p className="text-error text-xs mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">error</span>{errors.program}</p>}
          </div>

          {/* Qualification */}
          <div>
            <label htmlFor="lead-qualification" className="block text-sm font-bold text-on-surface mb-1.5 font-ibm-plex">
              Current Qualification <span className="text-vibrant-orange">*</span>
            </label>
            <select
              id="lead-qualification"
              value={formData.qualification}
              onChange={(e) => updateField("qualification", e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.qualification ? "border-error" : "border-outline-variant/40"
              } focus:border-deep-navy focus:ring-2 focus:ring-deep-navy/10 outline-none transition-all text-sm bg-off-white appearance-none cursor-pointer`}
            >
              <option value="">Choose your qualification...</option>
              {QUALIFICATIONS.map((q) => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
            {errors.qualification && <p className="text-error text-xs mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">error</span>{errors.qualification}</p>}
          </div>

          {/* Submit error */}
          {errors.submit && (
            <p className="text-error text-sm bg-error-container px-4 py-3 rounded-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">error</span>
              {errors.submit}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-vibrant-orange text-white font-bold rounded-lg shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-base mt-2"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                Submitting...
              </>
            ) : (
              <>
                Submit Application
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </>
            )}
          </button>

          {/* Trust badge */}
          <p className="text-[10px] text-on-surface-variant flex items-center justify-center gap-1 pt-1">
            <span className="material-symbols-outlined text-xs text-muted-lavender">lock</span>
            Your information is secure and will not be shared with third parties.
          </p>
        </form>
      </div>
    </div>
  );
}
