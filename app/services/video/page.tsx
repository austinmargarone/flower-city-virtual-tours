import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import VideoPlayer from "@/components/shared/VideoPlayer";
import { listings } from "@/constants/listings";
import CallToAction from "@/components/shared/CallToAction";
import { formatPrice, singleServices, sizeTiers } from "@/constants/pricing";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Rochester Video Walkthroughs",
  description:
    "Professional video walkthroughs of homes and businesses in Rochester, NY for listings, websites and social media. Pair with drone footage and 3D tours.",
  path: "/services/video",
});

const uses = [
  {
    title: "Real estate listings",
    text: "A guided walkthrough that shows the flow of the home, ready for the MLS, YouTube and social media.",
  },
  {
    title: "Business & venue tours",
    text: "Show customers what it's like to walk through your shop, office, restaurant or event space.",
  },
  {
    title: "Rentals",
    text: "Give guests a feel for a short-term or long-term rental before they book.",
  },
  {
    title: "Social media clips",
    text: "Short vertical cuts from the same shoot for Instagram, Facebook and TikTok.",
  },
];

const sample = listings.find((l) => l.slug === "443-crossfield-road")!;

const video = singleServices.find((s) => s.name === "Videography")!;

const Page = () => {
  return (
    <div className="pb-[1rem]">
      <PageHeader eyebrow="Media" title="Video Walkthroughs">
        Smooth, guided video tours that walk viewers through a property or business room by room.
        Add aerial drone footage for the opening shot and a 3D tour for people who want to
        explore on their own.
      </PageHeader>

      <div className="mx-auto mt-10 max-w-[64rem] space-y-12 px-[1rem]">
        <section>
          <VideoPlayer {...sample.video!} />
          <p className="mt-3 text-lightblue">
            Drone fly-through and walkthrough of{" "}
            <Link href={`/listings/${sample.slug}`} className="text-tan underline">
              {sample.title}
            </Link>
            , from an aerial of the neighborhood straight through the front door.
          </p>
        </section>

        <section>
          <h2 className="h2 text-left">What it&apos;s for</h2>
          <ul className="mt-4 grid gap-4 ss:grid-cols-2">
            {uses.map((u) => (
              <li key={u.title} className="rounded-lg border border-tan/40 bg-indigo p-5">
                <p className="text-lg font-bold text-white">{u.title}</p>
                <p className="mt-1 text-lightblue">{u.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-tan/50 bg-indigo p-6">
          <h2 className="h2 text-left">Video walkthrough pricing</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {sizeTiers.map((tier, i) => (
              <li key={tier} className="rounded border border-tan/40 p-3 text-center">
                <p className="text-sm text-paleblue">{tier}</p>
                <p className="mt-1 text-2xl font-bold text-white">{formatPrice(video.prices[i])}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-lightblue">
            Add{" "}
            <Link href="/services/drone" className="font-bold text-tan underline">
              aerial video
            </Link>{" "}
            for a sweeping opening shot, or bundle with photos and a 3D tour.{" "}
            <Link href="/pricing" className="font-bold text-tan underline">
              See packages
            </Link>
          </p>
        </section>
      </div>

      <CallToAction title="Book a video walkthrough" />
    </div>
  );
};

export default Page;
