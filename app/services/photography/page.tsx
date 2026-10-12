import Link from "next/link";
import Gallery, { type GalleryImage } from "@/components/shared/Gallery";
import ListingCards from "@/components/shared/ListingCards";
import PageHeader from "@/components/shared/PageHeader";
import CallToAction from "@/components/shared/CallToAction";
import { formatPrice, singleServices, sizeTiers } from "@/constants/pricing";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Rochester Real Estate Photography | Residential & Commercial",
  description:
    "Professional listing, rental and commercial photography in Rochester, NY. Bright, true-to-life photos that pair with a Matterport 3D tour.",
  path: "/services/photography",
  image: "/listings/257-stonefield-lane/01.jpg",
});



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
      <PageHeader eyebrow="Media" title="Real Estate Photography">
        Bright, true-to-life photos of homes, rentals and commercial spaces. Pair them with a
        3D tour and drone shots and your listing or website has everything a buyer, guest or
        customer wants to see.
      </PageHeader>

      <div className="mx-auto mt-10 max-w-[77.5rem] space-y-14 px-[1rem]">
        <section id="listings">
          <h2 className="h2 mb-1 text-left">Residential Listings</h2>
          <p className="mb-4 text-lightblue">
            Every shoot below is shown as a complete listing. Click a property to see all of its
            photos, plus{" "}
            <Link href="/services/drone" className="text-tan underline">
              drone aerials
            </Link>{" "}
            and 3D tours where we captured them.
          </p>
          <ListingCards category="residential" />
        </section>

        <section id="commercial">
          <h2 className="h2 mb-1 text-left">Commercial Listings</h2>
          <p className="mb-4 text-lightblue">
            Office buildings, apartment buildings and investment properties, with aerials that show
            the whole lot, parking and neighborhood.
          </p>
          <ListingCards category="commercial" />
        </section>

        <section>
          <h2 className="h2 mb-4 text-left">More Commercial Interiors</h2>
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
