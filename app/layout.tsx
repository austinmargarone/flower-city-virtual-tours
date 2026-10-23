import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

const JosefinSans = {
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-JosefinSans",
};

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
      <body className={`${JosefinSans.variable}`}>
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
