import VirtualTours from "@/components/services/virtual tours/VirtualTours";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://fcvt.dev"),
  title: "FCVT | Virtual Tours",
  description:
    "Virtual tours are a great way to showcase a property or business. We offer high-quality virtual tours that are sure to impress your clients and customers. Contact us today to learn more about our virtual tour services.",
  keywords: [
    "Web Development",
    "Web Design",
    "Virtual Tours",
    "Virtual Tour Services",
    "Virtual Tour Company",
    "Matterport",
    "3D Tours",
    "Virtual Reality",
    "VR Tours",
    "3D Virtual Tours",
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
    <div>
      <h1 className="h1 flex justify-center pt-[1.25rem] md:pt-[2.5rem]">
        Virtual Tours
      </h1>
      <div className="flex justify-center mt-[1rem]">
        <p className="p text-center flex max-w-[48rem]">
          Virtual tours are a great way to showcase a property or business. We
          offer high-quality virtual tours that are sure to impress your clients
          and customers. Contact us today to learn more about our virtual tour
          services.
        </p>
      </div>
      <VirtualTours />
    </div>
  );
};

export default page;
