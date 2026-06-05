import type { Metadata } from "next";
import ThankYouContent from "./ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You — Manipal University Jaipur | Application Received",
  description:
    "Thank you for your interest in MUJ Online Degree Programs. Our admissions counselor will contact you shortly.",
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
