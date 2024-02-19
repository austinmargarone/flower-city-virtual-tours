import About from "@/components/about/About";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Web Development",
  description:
    "Our websites are built with modern tech stacks and designed to be fast, secure, and SEO-friendly. We specialize in Next.js, React, and Tailwind CSS.",
  keywords: [
    "Web Development",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "GraphQL",
  ],
};

export default function Page() {
  return (
    <section
      className="mx-auto flex h-screen flex-col justify-center p-[1rem] xs:p-[2rem] ss:p-[2.5rem] md:px-[3rem]"
      style={{
        backgroundImage: "url('/background3.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-[#0D101E] p-[1rem] xs:p-[2rem] ss:p-[2.5rem] md:px-[3rem] border-[#B49167] shadow-lg border-[1.5px] rounded-lg max-w-[800px] flex mx-auto">
        <About />
      </div>
    </section>
  );
}
