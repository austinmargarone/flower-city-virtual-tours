import Link from "next/link";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import Gallery from "@/components/shared/Gallery";
import PageHeader from "@/components/shared/PageHeader";
import VideoPlayer from "@/components/shared/VideoPlayer";
import CallToAction from "@/components/shared/CallToAction";
import { listings, type Listing } from "@/constants/listings";
import { dronePricing, formatPrice } from "@/constants/pricing";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Rochester Drone Photography & Video",
  description:
    "FAA Part 107 certified, fully insured drone photography and video in Rochester, NY for real estate, solar and industrial sites, commercial properties and events.",
  path: "/services/drone",
  image: "/listings/212-carter-road/walkthrough-poster.jpg",
});

const find = (slug: string) => listings.find((l) => l.slug === slug);

// Drone videos, in display order: the solar farm leads.
const VIDEOS: { slug: string; caption: string }[] = [
  { slug: "212-carter-road", caption: "A full flyover of a solar farm, row by row." },
  {
    slug: "443-crossfield-road",
    caption: "From above the neighborhood, down to the house and in through the front door, all in one continuous shot.",
  },
];

// Aerial sets by property, in display order. Commercial first, then homes.
const AERIAL_ORDER = [
  "212-carter-road",
  "219-lyons-road",
  "504-brooks-ave",
  "18-harvard-street",
  "39-genesee-street",
  "2161-edwards-road",
  "126-carter-road",
  "257-stonefield-lane",
  "633-autumn-breeze-lane",
  "the-nest-cottage",
  "434-thomas-ave",
  "7-sherrill-street",
];
const PREVIEW = 6;

const uses = [
  { title: "Real estate listings", text: "Show the whole property, the lot lines and what's around it." },
  { title: "Commercial properties", text: "Present a building, campus or parking area in a single shot." },
  { title: "Solar & industrial sites", text: "Capture large sites and arrays that can't be seen from the ground." },
  { title: "Construction sites", text: "Document progress from above at each stage of the build." },
  { title: "Roof & property inspections", text: "Get a close look at hard-to-reach areas without a ladder." },
  { title: "Promotional video & events", text: "Sweeping footage for your website, social media, ads and events." },
];

const AerialSet = ({ l }: { l: Listing }) => {
  const shown = l.aerials.slice(0, PREVIEW).map((p, i) => ({ ...p, alt: `${l.title}, aerial photo ${i + 1}` }));
  return (
    <section className="rounded-lg border border-tan/40 bg-indigo/60 p-5">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-tan">
            {l.category === "commercial" ? "Commercial" : "Residential"}
          </p>
          <h3 className="text-xl font-bold text-white">{l.title}</h3>
          <p className="text-sm text-paleblue">
            {l.kind}
            {l.location ? ` · ${l.location}` : ""}
          </p>
        </div>
        <Link href={`/listings/${l.slug}`} className="font-bold text-tan hover:underline">
          {l.aerials.length > PREVIEW ? `See all ${l.aerials.length} aerials →` : "View the listing →"}
        </Link>
      </div>
      <Gallery images={shown} />
    </section>
  );
};

const Page = () => {
  const videos = VIDEOS.map((v) => ({ ...v, l: find(v.slug) })).filter((v) => v.l?.video);
  const sets = AERIAL_ORDER.map(find).filter((l): l is Listing => Boolean(l && l.aerials.length));
  const totalAerials = sets.reduce((n, l) => n + l.aerials.length, 0);

  return (
    <div className="pb-[1rem]">
      <PageHeader eyebrow="Media" title="Aerial Drone Photography & Video">
        High-definition aerial photos and video of homes, businesses and job sites. A view
        from above shows off a property in a way ground-level photos can&apos;t.
      </PageHeader>

      <div className="mx-auto mt-10 max-w-[77.5rem] space-y-14 px-[1rem]">
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
          <h2 className="h2 mb-4 text-left">Drone Video</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {videos.map(({ l, caption }) => (
              <div key={l!.slug}>
                <VideoPlayer {...l!.video!} />
                <p className="mt-3 font-bold text-white">
                  <Link href={`/listings/${l!.slug}`} className="hover:underline">
                    {l!.title}
                  </Link>
                  <span className="font-normal text-paleblue">
                    {" "}
                    · {l!.kind}
                    {l!.location ? `, ${l!.location}` : ""}
                  </span>
                </p>
                <p className="text-lightblue">{caption}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="h2 mb-1 text-left">Aerial Photos by Property</h2>
          <p className="mb-6 text-lightblue">
            {totalAerials} aerial photos across {sets.length} properties. Click any photo to enlarge it,
            or open a property to see its full set.
          </p>
          <div className="space-y-6">
            {sets.map((l) => (
              <AerialSet key={l.slug} l={l} />
            ))}
          </div>
        </section>

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
