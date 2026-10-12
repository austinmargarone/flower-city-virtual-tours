import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import ListingCards from "@/components/shared/ListingCards";
import CallToAction from "@/components/shared/CallToAction";
import { listings } from "@/constants/listings";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Listing Photography Portfolio",
  description:
    "Real estate listing photography, drone and 3D tours by Flower City Virtual Tours, organized by property. Rochester, NY and upstate New York.",
  path: "/listings",
  image: listings[0].photos[0].src,
});

const Page = () => {
  const total = listings.reduce((n, l) => n + l.photos.length + l.aerials.length, 0);
  return (
    <div className="pb-[1rem]">
      <PageHeader eyebrow="Portfolio" title="Listing Photography">
        {total} photos from {listings.length} properties, each shown as a complete listing so you
        can see exactly what you&apos;d get. Click any property to see every shot.
      </PageHeader>
      <div className="mx-auto mt-10 max-w-[77.5rem] px-[1rem]">
        <ListingCards />
        <p className="mt-8 text-center text-lightblue">
          Looking for commercial work?{" "}
          <Link href="/work" className="font-bold text-tan underline">
            See our case studies
          </Link>
        </p>
      </div>
      <CallToAction title="Book a listing shoot" />
    </div>
  );
};

export default Page;
