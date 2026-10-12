import Link from "next/link";
import CaseStudyCover from "@/components/shared/CaseStudyCover";
import PageHeader from "@/components/shared/PageHeader";
import Testimonials from "@/components/shared/Testimonials";
import CallToAction from "@/components/shared/CallToAction";
import { caseStudies } from "@/constants/work";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Our Work | Rochester Virtual Tours, Photography & Websites",
  description:
    "Case studies from Rochester and upstate New York: commercial 3D virtual tours, retail Walk & Shop tours, rental photography and custom websites.",
  path: "/work",
});

const Page = () => {
  return (
    <div className="pb-[1rem]">
      <PageHeader eyebrow="Portfolio" title="Our Work">
        A few of the businesses we&apos;ve helped show off their spaces online, from a single
        Rochester shop to a company with branches across upstate New York.
      </PageHeader>

      <ul className="mx-auto mt-10 grid max-w-[77.5rem] grid-cols-1 gap-6 px-[1rem] ss:grid-cols-2 md:grid-cols-3">
        {caseStudies.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/work/${c.slug}`}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-tan/50 bg-indigo shadow-lg transition hover:-translate-y-0.5 hover:border-tan"
            >
              <CaseStudyCover study={c} sizes="(max-width: 580px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm font-bold uppercase tracking-wider text-tan">{c.category}</p>
                <h2 className="mt-1 text-xl font-bold text-white">{c.client}</h2>
                <p className="text-sm text-paleblue">{c.location}</p>
                <p className="mt-3 flex-1 text-lightblue">{c.summary}</p>
                <span className="mt-4 font-bold text-tan">Read the case study →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-14 px-[1rem]">
        <Testimonials />
      </div>

      <CallToAction title="Want results like these?" />
    </div>
  );
};

export default Page;
