import About from "@/components/about/About";
import Developer from "@/components/about/Developer";
import Tech from "@/components/about/Tech";

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
      className="mx-auto flex flex-col justify-center px-[1.25rem] sm:px-[2.5rem] py-[1.25rem] sm:py-[2.5rem]"
      style={{
        backgroundImage: "url('/background3.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div>
        <About />
      </div>
      <div className="my-[1.5rem]">
        <Developer />
      </div>
      <div className="mb-[1.25rem]">
        <Tech />
      </div>
    </section>
  );
}
