import type { Metadata } from "next";
import { Hanken_Grotesk, Source_Sans_3, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Online Degree Programs - Manipal University Jaipur (MUJ) | UGC Recognised",
  description: "Accelerate your career with UGC-approved online degree programs from Manipal University Jaipur. Earn a NAAC A+ accredited degree in MBA, MCA, BBA, BCA, M.Com, B.Com, and more with 100% placement assistance.",
  keywords: ["Manipal University Jaipur Online", "MUJ Online MBA", "Online MCA MUJ", "Online Degrees India", "UGC Approved Online Degrees"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${sourceSans3.variable} ${ibmPlexSans.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-off-white text-on-surface font-source-sans antialiased">
        {children}
      </body>
    </html>
  );
}
