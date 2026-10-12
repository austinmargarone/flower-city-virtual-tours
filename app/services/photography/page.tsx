import Link from "next/link";
import Gallery, { type GalleryImage } from "@/components/shared/Gallery";
import PageHeader from "@/components/shared/PageHeader";
import CallToAction from "@/components/shared/CallToAction";
import { formatPrice, singleServices, sizeTiers } from "@/constants/pricing";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Rochester Real Estate & Commercial Photography",
  description:
    "Professional listing, rental and commercial photography in Rochester, NY. Bright, true-to-life photos that pair with a Matterport 3D tour.",
  path: "/services/photography",
  image: "/gallery/photography/two-story-exterior.jpg",
});

const residential: GalleryImage[] = [
  { src: "/gallery/photography/two-story-exterior.jpg", alt: "Two-story colonial with a manicured lawn" },
  { src: "/gallery/photography/white-kitchen.jpg", alt: "White kitchen with a navy island" },
  { src: "/gallery/photography/great-room.jpg", alt: "Great room with a fireplace and built-ins" },
  { src: "/gallery/photography/pool-backyard.jpg", alt: "In-ground pool and backyard" },
  { src: "/gallery/photography/barn-lake-view.jpg", alt: "White barn-style home overlooking the lake" },
  { src: "/gallery/photography/cherry-kitchen.jpg", alt: "Cherry kitchen with granite island" },
  { src: "/gallery/photography/bungalow-exterior.jpg", alt: "Craftsman bungalow with a deep front porch" },
  { src: "/gallery/photography/open-kitchen.jpg", alt: "Open kitchen and dining area" },
  { src: "/gallery/photography/primary-bedroom.jpg", alt: "Primary bedroom with natural light" },
  { src: "/gallery/photography/deck-lake-view.jpg", alt: "Deck with a lake view" },
  { src: "/gallery/photography/townhouse-living-room.jpg", alt: "Townhouse living room with fireplace" },
  { src: "/gallery/photography/double-vanity.jpg", alt: "Bathroom with double vanity" },
  { src: "/gallery/photography/colonial-exterior.jpg", alt: "Gray colonial with a three-car garage" },
  { src: "/gallery/photography/kitchen-island.jpg", alt: "Kitchen with island seating" },
  { src: "/gallery/photography/new-build-exterior.jpg", alt: "New-construction home exterior" },
  { src: "/gallery/photography/back-deck.jpg", alt: "Back deck overlooking open fields" },
  { src: "/gallery/photography/lakefront-pool.jpg", alt: "Lakefront home with an in-ground pool" },
  { src: "/gallery/photography/lakefront-dock.jpg", alt: "Lawn leading down to a private dock" },
];

const rental: GalleryImage[] = [
  { src: "/gallery/photography/barn-great-room.jpg", alt: "Barn great room and kitchen under timber beams" },
  { src: "/gallery/photography/barn-living-room.jpg", alt: "Barn living room with leather sofas" },
  { src: "/gallery/photography/barn-kitchen.jpg", alt: "Barn kitchen island" },
  { src: "/gallery/photography/barn-long-table.jpg", alt: "Long dining table for large groups" },
  { src: "/gallery/photography/barn-loft.jpg", alt: "Loft with a crystal chandelier" },
  { src: "/gallery/photography/barn-dining.jpg", alt: "Dining area beside the windows" },
  { src: "/gallery/photography/barn-bedroom.jpg", alt: "Bedroom with fireplace" },
  { src: "/gallery/photography/barn-suite.jpg", alt: "Bedroom suite under a wood ceiling" },
];

const commercial: GalleryImage[] = [
  { src: "/gallery/commercial/office-lounge.jpg", alt: "High-rise office lounge" },
  { src: "/gallery/commercial/office-kitchen.jpg", alt: "Office kitchen and break area" },
  { src: "/gallery/commercial/office-workspace.jpg", alt: "Open office workspace with city views" },
  { src: "/gallery/commercial/clinic.jpg", alt: "Physical therapy clinic floor" },
];

const photography = singleServices.find((s) => s.name === "Photography")!;

const Page = () => {
  return (
    <div className="pb-[1rem]">
      <PageHeader eyebrow="Services" title="Photography">
        Bright, true-to-life photos of homes, rentals and commercial spaces. Pair them with a
        3D tour and drone shots and your listing or website has everything a buyer, guest or
        customer wants to see.
      </PageHeader>

      <div className="mx-auto mt-10 max-w-[77.5rem] space-y-14 px-[1rem]">
        <section>
          <h2 className="h2 mb-1 text-left">Homes &amp; Listings</h2>
          <p className="mb-4 text-lightblue">
            Add{" "}
            <Link href="/services/drone" className="text-tan underline">
              aerial drone shots
            </Link>{" "}
            to show the whole property and its surroundings.
          </p>
          <Gallery images={residential} />
        </section>

        <section>
          <h2 className="h2 mb-1 text-left">Short-Term Rentals</h2>
          <p className="mb-4 text-lightblue">
            See the full project in the{" "}
            <Link href="/work/vineyard-guest-barn" className="text-tan underline">
              Vineyard Guest Barn case study
            </Link>
            .
          </p>
          <Gallery images={rental} />
        </section>

        <section>
          <h2 className="h2 mb-4 text-left">Commercial Spaces</h2>
          <Gallery images={commercial} />
        </section>

        <section className="rounded-lg border border-tan/50 bg-indigo p-6">
          <h2 className="h2 text-left">Photography pricing</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {sizeTiers.map((tier, i) => (
              <li key={tier} className="rounded border border-tan/40 p-3 text-center">
                <p className="text-sm text-paleblue">{tier}</p>
                <p className="mt-1 text-2xl font-bold text-white">
                  {formatPrice(photography.prices[i])}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-lightblue">
            Save when you bundle photos with a virtual tour and drone.{" "}
            <Link href="/pricing" className="font-bold text-tan underline">
              See packages
            </Link>
          </p>
        </section>
      </div>

      <CallToAction title="Book a photo shoot" />
    </div>
  );
};

export default Page;
