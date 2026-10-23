// Websites built by Flower City Virtual Tours, shown on the homepage.
// Screenshots live in public/websites/. A site without a screenshot shows a branded tile.

export type WebsiteProject = {
  name: string;
  url: string;
  industry: string;
  location: string;
  summary: string;
  features: string[];
  screenshot?: string;
  /** Tailwind object-position class when the screenshot is wider than the 16:10 frame */
  screenshotPosition?: string;
  mobileScreenshot?: string;
  testimonial?: { quote: string; name: string };
};

export const websites: WebsiteProject[] = [
  {
    name: "Fullmers Grind",
    url: "https://www.fullmersgrind.com/",
    industry: "Stump grinding & tree service",
    location: "Western New York",
    summary:
      "A fast, mobile-first site for a family-owned stump grinding and tree removal business, plus a Google Business Profile to bring in local calls.",
    features: ["Custom Next.js build", "Book-now calls to action", "Photo gallery", "Google Business Profile", "SEO & Google Ads tracking"],
    screenshot: "/websites/fullmers-grind.jpg",
    mobileScreenshot: "/websites/fullmers-grind-mobile.jpg",
    testimonial: {
      quote: "Austin created a website for my business and also a google business page which has helped me get more clients.",
      name: "Jeremy F., Fullmers Grind",
    },
  },
  {
    name: "Empower Realty Group",
    url: "https://www.empowerrealtygroupllc.com/",
    industry: "Real estate brokerage & property management",
    location: "Rochester, NY",
    summary:
      "A website for a Rochester real estate brokerage, with a sold-listing portfolio, property management page, blog and contact form.",
    features: ["Listing portfolio", "Property management page", "Blog", "Contact form", "Interactive map"],
    screenshot: "/websites/empower-realty.jpg",
    screenshotPosition: "object-left-top",
  },
];
