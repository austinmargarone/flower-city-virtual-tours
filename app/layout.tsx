import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Flower City Virtual Tours | Websites, 3D Virtual Tours, Photography & Drone",
  description:
    "Bringing your business and property online with custom websites, Matterport 3D virtual tours, photography and drone.",
  openGraph: {
    siteName: "Flower City Virtual Tours",
    locale: "en_US",
    type: "website",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Josefin Sans for headings; loaded at runtime so builds don't depend on Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Root layout wraps every page, so this loads site-wide (the rule targets the old pages/ router) */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap"
        />
      </head>
      <body>
        <main className="relative bg-[#101415] text-white">
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
