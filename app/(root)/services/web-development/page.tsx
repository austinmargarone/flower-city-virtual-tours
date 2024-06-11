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
      <h1 className="h1 flex justify-center">Web Development</h1>
      <div>
        <div className="flex justify-center mt-[1rem]">
          <p className="p text-center flex max-w-[48rem]">
            Our web development services are designed to help you create a
            website that is not only visually appealing but also functional and
            user-friendly. We offer a range of services to help you build a
            website that meets your needs and the needs of your customers. From
            custom web design to e-commerce solutions, we can help you create a
            website that will help you grow your business and reach your goals.
          </p>
        </div>
        <div className="px-[1rem] pleft">
          <h2 className="h2 text-center mt-8">
            Our Web Development Services Cover:
          </h2>
          <ul className="list-disc max-w-[48rem] mx-auto text-white">
            <li>
              <strong className="pbold">Custom Web Design:</strong> Creating
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
              <strong className="pbold">
                Custom Web Application Development:
              </strong>{" "}
              Creating web-based applications to streamline business processes,
              manage data, or provide unique functionalities tailored to
              clients' needs.
            </li>
            <li>
              <strong className="pbold">
                Content Management System (CMS) Development:
              </strong>{" "}
              Building websites using popular CMS platforms like WordPress and
              Sanity, enabling easy content management and updates for clients
              without requiring technical expertise.
            </li>
            <li>
              <strong className="pbold">
                Website Maintenance and Support:
              </strong>{" "}
              Providing ongoing maintenance services, including updates,
              backups, security checks, and troubleshooting, to ensure website
              reliability and performance optimization.
            </li>
            <li>
              <strong className="pbold">
                Hosting and Domain Registration:
              </strong>{" "}
              Offering hosting and domain registration services to help clients
              establish their online presence and ensure website accessibility
              and security.
            </li>
            <li>
              <strong className="pbold">UI/UX Design:</strong> Designing
              intuitive and visually appealing user interfaces to enhance user
              experience and engagement on websites and applications, focusing
              on usability and accessibility principles.
            </li>
            <li>
              <strong className="pbold">
                Database Design and Integration:
              </strong>{" "}
              Designing and implementing databases to store, manage, and
              retrieve data efficiently, ensuring data security, integrity, and
              scalability for web applications.
            </li>
            <li>
              <strong className="pbold"> E-commerce Solutions:</strong>{" "}
              Developing online stores with features like product listings,
              shopping carts, payment gateways, and inventory management to
              facilitate online transactions and sales.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
