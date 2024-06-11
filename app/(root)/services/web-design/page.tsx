/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://fcvt.dev"),
  title: "FCVT | Web Development",
  description:
    "We develop full stack web appliations that are custom to your needs. Contact us today to learn more!",
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
    "Web Applications",
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
    <div className="py-[1.25rem] md:py-[2.5rem] px-[1rem]">
      <h1 className="h1 flex justify-center">Web Design</h1>
      <div>
        <div className="flex justify-center mt-[1rem]">
          <p className="p text-center flex max-w-[48rem]">
            Our web design services are crafted to create visually stunning and
            user-friendly websites that align with your brand identity and
            engage your audience effectively. We offer a range of design
            services to help you establish a strong online presence and achieve
            your business goals. From custom web design to UI/UX design, we are
            here to help you create a website that stands out and delivers a
            seamless user experience.
          </p>
        </div>
        <div className="px-[1rem] pleft">
          <h2 className="h2 text-center mt-8">
            Our Web Design Services Include:
          </h2>
          <ul className="list-disc max-w-[48rem] mx-auto text-white">
            <li>
              <strong className="pbold">Custom Web Design:</strong> Crafting
              unique and tailored website designs that reflect your brand
              identity and meet your specific requirements.
            </li>
            <li>
              <strong className="pbold">Responsive Web Design:</strong> Ensuring
              that websites are optimized for viewing on various devices,
              including desktops, laptops, tablets, and smartphones, providing a
              seamless user experience across different screen sizes.
            </li>
            <li>
              <strong className="pbold">UI/UX Design:</strong> Designing
              intuitive and visually appealing user interfaces to enhance user
              experience and engagement on websites and applications, focusing
              on usability and accessibility principles.
            </li>
            <li>
              <strong className="pbold">Website Redesign:</strong> Revamping
              existing websites to improve their look, feel, and functionality,
              ensuring they stay current with modern design trends and
              technologies.
            </li>
            <li>
              <strong className="pbold">Brand Identity Design:</strong>{" "}
              Developing cohesive brand identities that include logos, color
              schemes, typography, and other visual elements to ensure your
              website aligns with your overall branding.
            </li>
            <li>
              <strong className="pbold">Landing Page Design:</strong> Creating
              high-converting landing pages tailored to specific campaigns,
              products, or services to maximize engagement and conversions.
            </li>
            <li>
              <strong className="pbold">E-commerce Design:</strong> Designing
              user-friendly and visually appealing online stores with features
              like product listings, shopping carts, and secure payment gateways
              to enhance the shopping experience.
            </li>
            <li>
              <strong className="pbold">Graphic Design:</strong> Providing
              high-quality graphic design services for various web elements,
              including banners, icons, and images to enhance the visual appeal
              of your website.
            </li>
            <li>
              <strong className="pbold">Content Layout Design:</strong>{" "}
              Structuring and styling content to ensure it is visually
              appealing, easy to read, and engaging for users.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
