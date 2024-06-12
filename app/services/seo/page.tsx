/* eslint-disable react/no-unescaped-entities */

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://fcvt.dev"),
  title: "FCVT | SEO Optimization Services",
  description:
    "Improve your website's visibility and search engine rankings with our comprehensive SEO optimization services. Contact us today!",
  keywords: [
    "Web Development",
    "Web Design",
    "Web Development Company",
    "SEO",
    "Search Engine Optimization",
    "SEO Services",
    "SEO Optimization",
    "SEO agency",
    "SEO company",
    "Website optimization",
    "Improve website ranking",
    "Organic search traffic",
    "Keyword research",
    "On-page optimization",
    "Technical SEO",
    "Content optimization",
    "Link building services",
    "Local SEO",
    "SEO audit",
    "Competitor analysis",
    "Website performance monitoring",
    "SEO consulting",
    "Algorithm updates",
    "Social media integration",
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

const Page = () => {
  return (
    <div className="py-[1.25rem] md:py-[2.5rem] px-[1rem]">
      <h1 className="h1 flex justify-center">SEO Optimization Services</h1>
      <div>
        <div className="flex justify-center mt-[1rem]">
          <p className="p text-center max-w-[48rem] mx-auto">
            Elevate your online visibility and drive organic traffic to your
            website with our comprehensive SEO optimization services. Search
            engine optimization (SEO) is a crucial aspect of digital marketing,
            focusing on improving your website's ranking and visibility on
            search engine results pages (SERPs). By optimizing various elements
            of your website and implementing strategic tactics, we can help you
            attract more visitors, increase conversions, and grow your online
            presence.
          </p>
        </div>
        <div className="px-[1rem] pleft">
          <h2 className="h2 text-center mt-8">Our SEO Services Cover:</h2>
          <ul className="list-disc max-w-[48rem] mx-auto text-white">
            <li>
              <strong className="pbold">Keyword Research:</strong> Identify
              relevant keywords and search terms to target for maximum
              visibility and relevance.
            </li>
            <li>
              <strong className="pbold">On-Page Optimization:</strong> Optimize
              meta titles, descriptions, headings, and content to enhance search
              engine visibility and user engagement.
            </li>
            <li>
              <strong className="pbold">Technical SEO:</strong> Address
              technical aspects such as site speed, mobile-friendliness, URL
              structure, and schema markup to improve overall website
              performance.
            </li>
            <li>
              <strong className="pbold">Content Optimization:</strong> Optimize
              website content, including blog posts, articles, and landing
              pages, to align with target keywords and provide value to users.
            </li>
            <li>
              <strong className="pbold">Link Building:</strong> Implement
              strategies to acquire high-quality backlinks from authoritative
              websites, boosting website authority and rankings.
            </li>
            <li>
              <strong className="pbold">Local SEO:</strong> Optimize online
              presence for local searches, including Google My Business
              optimization, local citations, and reviews management.
            </li>
            <li>
              <strong className="pbold">SEO Audits:</strong> Conduct
              comprehensive website audits to identify strengths, weaknesses,
              and opportunities for improvement, and develop actionable
              strategies accordingly.
            </li>
            <li>
              <strong className="pbold">Competitor Analysis:</strong> Analyze
              competitors' websites and SEO strategies to identify areas for
              improvement and develop effective strategies to gain a competitive
              edge.
            </li>
            <li>
              <strong className="pbold">Monitoring and Reporting:</strong>{" "}
              Monitor website performance using tools like Google Analytics and
              Search Console, and provide regular reports on key SEO metrics,
              including traffic, rankings, and conversions.
            </li>
            <li>
              <strong className="pbold">Consulting and Strategy:</strong>{" "}
              Provide strategic guidance and consulting services to define SEO
              objectives, select appropriate keywords, and develop customized
              strategies aligned with business goals.
            </li>
            <li>
              <strong className="pbold">Algorithm Updates:</strong> Stay updated
              on search engine algorithm changes and industry best practices to
              ensure websites remain optimized and compliant with current SEO
              standards.
            </li>
            <li>
              <strong className="pbold">Social Media Integration:</strong>{" "}
              Integrate social media platforms into SEO strategies to facilitate
              sharing, engagement, and user interaction, indirectly impacting
              search engine rankings.
            </li>
          </ul>
          <p className="p text-center mt-8 max-w-[48rem] mx-auto">
            Ready to boost your online presence and outrank the competition?
            Contact us today to schedule a consultation and discover how our
            tailored SEO solutions can help you achieve your business goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
