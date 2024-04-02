import About from "@/components/about/About";

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://fcvt.dev"),
  title: "FCVT | About",
  description:
    "We thrive on the forefront of technology by using state of the art tech stacks that propel your business forward. Learn more about us!",
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
