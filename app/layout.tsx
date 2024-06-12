import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const JosefinSans = {
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-JosefinSans",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fcvt.dev"),
  title: "FCVT | Custom Websites",
  description:
    "We build custom websites that improve your SEO, empower online growth, and prioritize user experience. Get started today!",
  keywords: [
    "Web Development",
    "Web Design",
    "SEO",
    "User Experience",
    "NextJS",
    "React",
  ],
  openGraph: {
    images: [
      {
        url: `https://fcvt.dev/meta.png`,
        width: 1200,
        height: 630,
        alt: "Full Stack Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${JosefinSans.variable}`}>
        <main className="relative bg-[#101415]">
          <Navbar />
          <section>
            <div>{children}</div>
            <Footer />
          </section>
        </main>
      </body>
    </html>
  );
}
