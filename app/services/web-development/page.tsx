import Link from "next/link";
import { Code2, Palette, Search, type LucideIcon } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import CallToAction from "@/components/shared/CallToAction";
import WebDeveloper from "@/components/services/WebDeveloper";
import { formatPrice, webIncludes, webPricing } from "@/constants/pricing";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Rochester Web Design, Development & SEO",
  description:
    "Custom website design, development and local SEO for Rochester, NY businesses. Fast, mobile-friendly sites built to bring in customers.",
  path: "/services/web-development",
});

type Pillar = {
  id: string;
  icon: LucideIcon;
  title: string;
  intro: string;
  items: { name: string; text: string }[];
};

const pillars: Pillar[] = [
  {
    id: "design",
    icon: Palette,
    title: "Design",
    intro:
      "We walk you through the design process, often starting with wireframes and prototypes in Figma, so you see your site before it's built.",
    items: [
      { name: "Custom web design", text: "A unique site that reflects your brand, not a recycled template." },
      { name: "Responsive design", text: "Looks and works great on phones, tablets and desktops." },
      { name: "UI/UX design", text: "Clear, easy navigation that guides visitors to call, book or buy." },
      { name: "Website redesign", text: "Modernize an outdated site's look, speed and usability." },
      { name: "Brand identity", text: "Logos, colors and typography that tie your site and brand together." },
      { name: "Landing pages", text: "Focused pages built to convert for a campaign, product or service." },
    ],
  },
  {
    id: "development",
    icon: Code2,
    title: "Development",
    intro:
      "We build with the same modern tools large companies use, so your site is fast, secure and easy to grow.",
    items: [
      { name: "Fast & secure", text: "Modern frameworks, SSL included, and pages that load quickly." },
      { name: "E-commerce", text: "Online stores with product listings, carts and secure checkout." },
      { name: "Content you can edit", text: "Optional content management so you can update pages yourself." },
      { name: "Your media built in", text: "Your 3D tours, photos and drone video embedded right in the site." },
      { name: "Agile process", text: "Work delivered in stages with regular updates and your feedback." },
      { name: "On-time delivery", text: "Clear timelines, and we hit them without cutting corners." },
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO",
    intro:
      "A great site only works if people find it. We optimize for the Rochester customers already searching for what you do.",
    items: [
      { name: "Local SEO", text: "Google Business Profile optimization, local citations and reviews." },
      { name: "Keyword research", text: "Target the searches that actually bring in customers." },
      { name: "On-page SEO", text: "Titles, descriptions, headings and content tuned for search." },
      { name: "Technical SEO", text: "Site speed, mobile-friendliness, URL structure and schema markup." },
      { name: "SEO audits", text: "Find what's holding an existing site back and fix it." },
      { name: "Reporting", text: "Track traffic, rankings and leads with Google Analytics and Search Console." },
    ],
  },
];

const stack = [
  { label: "Frontend", value: "Next.js, React, Vue.js, Tailwind CSS" },
  { label: "Backend", value: "Node.js, Express.js" },
  { label: "Databases", value: "MongoDB, MySQL, PostgreSQL" },
  { label: "Content", value: "Sanity, Markdown, GraphQL" },
];

const Page = () => {
  return (
    <div className="pb-[1rem]">
      <PageHeader eyebrow="Web Development" title="Web Design, Development & SEO">
        Everything your business needs online, from one Rochester team: a custom design, a fast
        and secure build, and the SEO to get it found.
      </PageHeader>

      <nav aria-label="On this page" className="mt-6 flex justify-center gap-3 px-[1rem]">
        {pillars.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="rounded-full border border-tan px-4 py-1 font-bold text-tan transition hover:bg-tan hover:text-white"
          >
            {p.title}
          </a>
        ))}
      </nav>

      <div className="mx-auto mt-10 max-w-[77.5rem] space-y-16 px-[1rem]">
        <WebDeveloper />

        {pillars.map(({ id, icon: Icon, title, intro, items }) => (
          <section key={id} id={id} className="scroll-mt-24">
            <div className="flex items-center gap-3">
              <Icon className="size-10 text-tan" strokeWidth={1.25} aria-hidden="true" />
              <h2 className="h2 text-left">{title}</h2>
            </div>
            <p className="mt-2 max-w-[48rem] text-lg text-lightblue">{intro}</p>
            <ul className="mt-6 grid gap-4 ss:grid-cols-2 md:grid-cols-3">
              {items.map((it) => (
                <li key={it.name} className="rounded-lg border border-tan/40 bg-indigo p-5">
                  <p className="font-bold text-white">{it.name}</p>
                  <p className="mt-1 text-lightblue">{it.text}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-tan/50 bg-indigo p-6">
            <h2 className="h2 text-left">Pricing</h2>
            <ul className="mt-4 space-y-3">
              {webPricing.map((w) => (
                <li key={w.name} className="flex items-baseline justify-between gap-4 border-b border-tan/20 pb-3">
                  <span className="text-white">{w.name}</span>
                  <span className="text-lg font-bold text-tan">from {formatPrice(w.from)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-lightblue">
              <span className="font-bold text-white">Includes:</span> {webIncludes.join(", ")}.{" "}
              <Link href="/pricing" className="font-bold text-tan underline">
                See all pricing
              </Link>
            </p>
          </div>
          <div className="rounded-lg border border-tan/50 p-6">
            <h2 className="h2 text-left">Our tech stack</h2>
            <dl className="mt-4 space-y-2">
              {stack.map((s) => (
                <div key={s.label}>
                  <dt className="text-sm font-bold uppercase tracking-wider text-tan">{s.label}</dt>
                  <dd className="text-white">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>

      <CallToAction title="Let's build your website" />
    </div>
  );
};

export default Page;
