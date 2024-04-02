import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import type { Metadata } from "next";
import "./globals.css";

const JosefinSans = {
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-JosefinSans",
};

export const metadata: Metadata = {
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
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
