import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { websites, type WebsiteProject } from "@/constants/websites";

const BrowserFrame = ({ site }: { site: WebsiteProject }) => {
  const host = new URL(site.url).hostname.replace(/^www\./, "");
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg border border-tan/60 bg-midnight shadow-lg">
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-tan/30 bg-charcoal px-3 py-2">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
          <span className="ml-2 truncate rounded bg-midnight/70 px-3 py-0.5 text-xs text-paleblue">{host}</span>
        </div>
        {site.screenshot ? (
          <Image
            src={site.screenshot}
            alt={`${site.name} website homepage`}
            width={1440}
            height={900}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`aspect-[16/10] w-full object-cover ${site.screenshotPosition ?? "object-top"}`}
          />
        ) : (
          <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-charcoal via-indigo to-midnight text-center">
            <Globe className="size-12 text-tan" strokeWidth={1.25} aria-hidden="true" />
            <p className="px-4 text-xl font-bold text-white">{site.name}</p>
            <p className="text-sm text-paleblue">{host}</p>
          </div>
        )}
      </div>
      {site.mobileScreenshot && (
        <div className="absolute -bottom-6 right-3 hidden w-[22%] overflow-hidden rounded-[1rem] border-4 border-midnight shadow-2xl ss:block">
          <Image
            src={site.mobileScreenshot}
            alt={`${site.name} website on a phone`}
            width={390}
            height={844}
            sizes="10rem"
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

/** Homepage section: websites we've built, shown in browser frames. */
const WebsiteShowcase = () => {
  return (
    <section className="mx-auto w-full max-w-[77.5rem]">
      <h2 className="h2 flex justify-center py-[1rem]">Websites We&apos;ve Built</h2>
      <ul className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {websites.map((site) => (
          <li key={site.url} className="flex flex-col">
            <a href={site.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${site.name}`}>
              <BrowserFrame site={site} />
            </a>
            <div className="mt-8 flex flex-1 flex-col">
              <p className="text-sm font-bold uppercase tracking-wider text-tan">{site.industry}</p>
              <h3 className="mt-1 text-xl font-bold text-white">{site.name}</h3>
              <p className="text-sm text-paleblue">{site.location}</p>
              <p className="mt-2 text-lightblue">{site.summary}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {site.features.map((f) => (
                  <li key={f} className="rounded-full border border-tan/50 px-3 py-0.5 text-sm text-lightblue">
                    {f}
                  </li>
                ))}
              </ul>
              {site.testimonial && (
                <blockquote className="mt-4 border-l-4 border-tan pl-4 text-white">
                  “{site.testimonial.quote}”
                  <footer className="mt-1 text-sm font-bold text-tan">{site.testimonial.name}</footer>
                </blockquote>
              )}
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 font-bold text-tan hover:underline"
              >
                Visit the site →
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <Link href="/services/web-development" className="font-bold text-tan hover:underline">
          Web design, development &amp; SEO →
        </Link>
      </div>
    </section>
  );
};

export default WebsiteShowcase;
