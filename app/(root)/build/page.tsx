import Build from "@/components/build/Build";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://fcvt.dev"),
  title: "FCVT | Request A Quote",
  description:
    "Already have a web project in mind? Request a quote today and let's get started!",
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
    "Request A Quote",
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
      className="mx-auto flex flex-col justify-center items-center w-full py-[2rem]"
      style={{
        backgroundImage: "url('/background4.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        overflow: "hidden",
      }}
    >
      <div className="bg-[#0D101E] p-[1rem] xs:p-[2rem] ss:p-[2.5rem] md:px-[3rem] border-[#B49167] shadow-lg border-[1.5px] rounded-lg">
        <h1 className="h1">Request A Quote</h1>
        <div>
          <Build />
        </div>
      </div>
    </section>
  );
};

export default page;
