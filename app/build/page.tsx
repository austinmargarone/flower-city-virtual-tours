import { pageMeta } from "@/lib/site";
import Build from "@/components/build/Build";
import React from "react";

export const metadata = pageMeta({
  title: "Request a Quote",
  description:
    "Tell us about your website, Matterport tour or photography project and get a quote from a Rochester, NY team.",
  path: "/build",
});

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
      <div className="bg-[#101415] p-[1rem] xs:p-[2rem] ss:p-[2.5rem] md:px-[3rem] border-[#B49167] shadow-lg border-[1.5px] rounded-lg">
        <h1 className="h1">Request A Quote</h1>
        <div>
          <Build />
        </div>
      </div>
    </section>
  );
};

export default page;
