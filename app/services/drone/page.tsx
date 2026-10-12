import Link from "next/link";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import CallToAction from "@/components/shared/CallToAction";
import { dronePricing, formatPrice } from "@/constants/pricing";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Rochester Drone Photography & Video",
  description:
    "FAA Part 107 certified, fully insured drone photography and video in Rochester, NY for real estate, construction, commercial properties and events.",
  path: "/services/drone",
});

const uses = [
  { title: "Real estate listings", text: "Show the whole property, the lot lines and what's around it." },
  { title: "Commercial properties", text: "Present a building, campus or parking area in a single shot." },
  { title: "Construction sites", text: "Document progress from above at each stage of the build." },
  { title: "Roof & property inspections", text: "Get a close look at hard-to-reach areas without a ladder." },
  { title: "Promotional video", text: "Sweeping footage for your website, social media and ads." },
  { title: "Events", text: "Capture the crowd, the venue and the scale of the day." },
];

const Page = () => {
  return (
    <div className="pb-[1rem]">
      <PageHeader eyebrow="Services" title="Aerial Drone Photography & Video">
        High-definition aerial photos and video of homes, businesses and job sites. A view
        from above shows off a property in a way ground-level photos can&apos;t.
      </PageHeader>

      <div className="mx-auto mt-10 max-w-[60rem] space-y-12 px-[1rem]">
        <ul className="grid gap-4 ss:grid-cols-2">
          <li className="flex items-start gap-3 rounded-lg border border-tan bg-indigo p-5">
            <BadgeCheck className="size-8 shrink-0 text-tan" aria-hidden="true" />
            <div>
              <p className="text-lg font-bold text-white">FAA Part 107 certified</p>
              <p className="text-lightblue">Licensed commercial drone pilot.</p>
            </div>
          </li>
          <li className="flex items-start gap-3 rounded-lg border border-tan bg-indigo p-5">
            <ShieldCheck className="size-8 shrink-0 text-tan" aria-hidden="true" />
            <div>
              <p className="text-lg font-bold text-white">Fully insured</p>
              <p className="text-lightblue">Every flight is covered.</p>
            </div>
          </li>
        </ul>

        <section>
          <h2 className="h2 text-left">What we fly for</h2>
          <ul className="mt-4 grid gap-4 ss:grid-cols-2 md:grid-cols-3">
            {uses.map((u) => (
              <li key={u.title} className="rounded-lg border border-tan/40 p-4">
                <p className="font-bold text-white">{u.title}</p>
                <p className="mt-1 text-lightblue">{u.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-tan/50 bg-indigo p-6">
          <h2 className="h2 text-left">Drone pricing</h2>
          <ul className="mt-4 grid gap-3 ss:grid-cols-3">
            {dronePricing.map((d) => (
              <li key={d.name} className="rounded border border-tan/40 p-4 text-center">
                <p className="text-paleblue">{d.name}</p>
                <p className="mt-1 text-2xl font-bold text-white">{formatPrice(d.price)}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-lightblue">
            Custom projects are quoted individually. Drone is also included in our{" "}
            <Link href="/pricing" className="font-bold text-tan underline">
              photo + tour packages
            </Link>
            .
          </p>
        </section>
      </div>

      <CallToAction title="Schedule a drone shoot" />
    </div>
  );
};

export default Page;
