/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://fcvt.dev"),
  title: "FCVT | Web Development",
  description:
    "We develop full stack web applications that are custom to your needs. Contact us today to learn more!",
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
          <p className="p text-center max-w-[48rem] mx-auto">
            Elevate your online presence with our comprehensive web development
            services. Whether you're a business seeking tailored solutions or an
            individual looking to enhance your online presence, we're here to
            help. From contract projects to serving our own clients, we deliver
            high-quality websites that exceed expectations.
          </p>
        </div>
        <div className="px-[1rem] pleft">
          <h2 className="h2 text-center mt-8">Our Approach:</h2>
          <ul className="list-disc max-w-[48rem] mx-auto text-white">
            <li>
              <strong className="pbold">Design Process:</strong> We work closely
              with clients, often starting with wireframes and prototypes
              created in Figma, to ensure the design meets their vision and
              objectives.
            </li>
            <li>
              <strong className="pbold">Project Management:</strong> We follow
              agile methodologies, breaking down projects into sprints to
              deliver iterative results and maintain flexibility throughout the
              development process.
            </li>
            <li>
              <strong className="pbold">Web3 Integration:</strong> Leveraging
              Web3 technology, including blockchain and decentralized
              applications, we empower businesses to explore new possibilities
              for trust, transparency, and innovation in their online platforms.
            </li>
            <li>
              <strong className="pbold">Communication:</strong> Clear and
              transparent communication is key. We keep clients informed at
              every stage of the project, providing regular updates and seeking
              feedback to ensure alignment with their goals.
            </li>
            <li>
              <strong className="pbold">Customer Service:</strong> Our dedicated
              team is committed to providing exceptional customer service,
              addressing any concerns or queries promptly and ensuring a smooth
              and enjoyable experience for our clients.
            </li>
            <li>
              <strong className="pbold">Timely Deadlines:</strong> We understand
              the importance of meeting deadlines. Our team works diligently to
              deliver projects on time, without compromising on quality.
            </li>
          </ul>
          <h2 className="h2 text-center mt-8">Our Tech Stacks:</h2>
          <ul className="list-disc max-w-[48rem] mx-auto text-white">
            <li>Frontend: Next.js, React.js, Vue.js</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Database: MongoDB, MySQL, PostgreSQL</li>
            <li>Web3: Web3.js, Ether.js, Foundry</li>
            <li>Additional Tools: Redux, GraphQL, Sanity, Tailwind CSS</li>
          </ul>
          <p className="p text-center mt-8 max-w-[48rem] mx-auto">
            Ready to discuss your project requirements? Contact us today to
            schedule a consultation and explore how we can collaborate to
            achieve your goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
