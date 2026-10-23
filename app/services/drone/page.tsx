import Link from "next/link";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import Gallery, { type GalleryImage } from "@/components/shared/Gallery";
import PageHeader from "@/components/shared/PageHeader";
import VideoPlayer from "@/components/shared/VideoPlayer";
import { listings } from "@/constants/listings";
import CallToAction from "@/components/shared/CallToAction";
import { dronePricing, formatPrice } from "@/constants/pricing";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Rochester Drone Photography & Video",
  description:
    "FAA Part 107 certified, fully insured drone photography and video in Rochester, NY for real estate, construction, commercial properties and events.",
  path: "/services/drone",
  image: "/gallery/drone/lake-shoreline.jpg",
});

const aerials: GalleryImage[] = [
  { src: "/gallery/drone/estate-front.jpg", alt: "Aerial view of a two-story home on a large wooded lot" },
  { src: "/gallery/drone/lake-shoreline.jpg", alt: "Aerial view of a lakeside neighborhood and shoreline" },
  { src: "/gallery/drone/backyard-pool.jpg", alt: "Aerial view of a backyard with in-ground pool and patio" },
  { src: "/gallery/drone/neighborhood-overview.jpg", alt: "Wide aerial of a wooded residential neighborhood" },
  { src: "/gallery/drone/lakeside-community.jpg", alt: "Aerial of a residential community near the lake" },
  { src: "/gallery/drone/estate-angle.jpg", alt: "Aerial of a home and long driveway" },
  { src: "/gallery/drone/pool-patio.jpg", alt: "Overhead view of a pool and patio" },
  { src: "/gallery/drone/countryside.jpg", alt: "Aerial of homes along a country road" },
  { src: "/gallery/drone/development-wide.jpg", alt: "Wide aerial of a growing housing development" },
  { src: "/gallery/drone/new-construction.jpg", alt: "Aerial of new-construction homes" },
  { src: "/gallery/drone/building-lots.jpg", alt: "Aerial of open building lots behind new homes" },
  { src: "/gallery/drone/subdivision.jpg", alt: "Aerial of a subdivision with cul-de-sacs" },
  { src: "/gallery/drone/property-pool-lot.jpg", alt: "Aerial of a home and pool surrounded by trees" },
  { src: "/gallery/drone/city-neighborhood.jpg", alt: "Aerial of a tree-lined city neighborhood" },
];

const flyThrough = listings.find((l) => l.slug === "443-crossfield-road")!;

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
      <PageHeader eyebrow="Media" title="Aerial Drone Photography & Video">
        High-definition aerial photos and video of homes, businesses and job sites. A view
        from above shows off a property in a way ground-level photos can&apos;t.
      </PageHeader>

      <div className="mx-auto mt-10 max-w-[77.5rem] space-y-12 px-[1rem]">
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
          <h2 className="h2 mb-1 text-left">Drone fly-through</h2>
          <p className="mb-4 text-lightblue">
            From above the neighborhood, down to the house and in through the front door, all
            in one continuous shot.
          </p>
          <VideoPlayer {...flyThrough.video!} />
        </section>

        <section>
          <h2 className="h2 mb-1 text-left">Recent aerial work</h2>
          <p className="mb-4 text-lightblue">
            See full aerial sets for a home at{" "}
            <Link href="/listings/257-stonefield-lane" className="text-tan underline">
              257 Stonefield Lane
            </Link>
            , a{" "}
            <Link href="/listings/212-carter-road" className="text-tan underline">
              solar farm
            </Link>{" "}
            and an{" "}
            <Link href="/listings/219-lyons-road" className="text-tan underline">
              industrial property
            </Link>
            .
          </p>
          <Gallery images={aerials} />
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
