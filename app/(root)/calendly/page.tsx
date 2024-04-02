import React from "react";
import Appointment from "@/components/calendar/Appointment";

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://fcvt.dev"),
  title: "FCVT | Book A Consultation",
  description:
    "Book a consultation with us today and let's get started on your website project!",
  keywords: [
    "Web Development",
    "Web Design",
    "SEO",
    "User Experience",
    "NextJS",
    "React",
    "Web Development Services",
    "Web Developer",
    "Web Designer",
    "Web Development Company",
    "Book A Consultation",
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

const page = () => {
  return (
    <section
      className="mx-auto flex items-center h-full w-full bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/background3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <div className="flex h-full w-full py-[1.25rem] md:py-0">
        <Appointment />
      </div>
    </section>
  );
};

export default page;
