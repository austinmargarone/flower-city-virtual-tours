import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/shared/Gallery";
import TourEmbed from "@/components/shared/TourEmbed";
import VideoPlayer from "@/components/shared/VideoPlayer";
import ListingCards from "@/components/shared/ListingCards";
import CallToAction from "@/components/shared/CallToAction";
import { coverOf, listings } from "@/constants/listings";
import { pageMeta } from "@/lib/site";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: Props) {
  const l = listings.find((x) => x.slug === params.slug);
  if (!l) return {};
  return pageMeta({
    title: `${l.title} | Listing Photography`,
    description: `${[l.photos.length && `${l.photos.length} professional photos`, l.aerials.length && `${l.aerials.length} drone aerials`, l.tour && "a Matterport 3D tour", l.video && "a video"].filter(Boolean).join(", ")} of ${l.title}, a ${l.kind.toLowerCase()}${l.location ? ` in ${l.location}` : ""}.`,
    path: `/listings/${l.slug}`,
    image: coverOf(l).src,
  });
}

const Page = ({ params }: Props) => {
  const l = listings.find((x) => x.slug === params.slug);
  if (!l) notFound();

  const photos = l.photos.map((p, i) => ({ ...p, alt: `${l.title}, photo ${i + 1}` }));
  const aerials = l.aerials.map((p, i) => ({ ...p, alt: `${l.title}, aerial photo ${i + 1}` }));

  return (
    <div className="px-[1rem] pt-[2rem] md:pt-[3rem]">
      <div className="mx-auto max-w-[77.5rem]">
        <Link href="/services/photography" className="text-sm font-bold text-tan hover:underline">
          ← All listings
        </Link>
        <h1 className="mt-4 text-[2rem] font-bold leading-tight text-white md:text-[2.75rem]">
          {l.title}
        </h1>
        <p className="mt-1 text-lg text-paleblue">
          {l.kind}
          {l.location ? ` · ${l.location}` : ""}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {l.photos.length > 0 && (
            <li className="rounded-full border border-tan/50 px-3 py-0.5 text-sm text-lightblue">
              {l.photos.length} listing photos
            </li>
          )}
          {l.aerials.length > 0 && (
            <li className="rounded-full border border-tan/50 px-3 py-0.5 text-sm text-lightblue">
              {l.aerials.length} drone aerials
            </li>
          )}
          {l.tour && (
            <li className="rounded-full border border-tan/50 px-3 py-0.5 text-sm text-lightblue">
              Matterport 3D tour
            </li>
          )}
          {l.video && (
            <li className="rounded-full border border-tan/50 px-3 py-0.5 text-sm text-lightblue">
              Video walkthrough
            </li>
          )}
        </ul>
        {l.caseStudy && (
          <p className="mt-4">
            <Link href={l.caseStudy} className="font-bold text-tan underline">
              Read the case study
            </Link>
          </p>
        )}

        {l.video && (
          <section className="mt-10">
            <h2 className="h2 mb-4 text-left">{l.photos.length ? "Video Walkthrough" : "Drone Video"}</h2>
            <VideoPlayer {...l.video} />
          </section>
        )}

        {l.tour && (
          <section className="mt-10">
            <h2 className="h2 mb-4 text-left">3D Tour</h2>
            <TourEmbed id={l.tour} title={`${l.title} 3D tour`} />
          </section>
        )}

        {photos.length > 0 && (
          <section className="mt-10">
            <h2 className="h2 mb-4 text-left">Photos</h2>
            <Gallery images={photos} />
          </section>
        )}

        {aerials.length > 0 && (
          <section className="mt-12">
            <h2 className="h2 mb-4 text-left">Aerial Drone</h2>
            <Gallery images={aerials} />
          </section>
        )}

        <section className="mt-16">
          <h2 className="h2 mb-4 text-left">More listings</h2>
          <ListingCards exclude={l.slug} limit={3} category={l.category} />
        </section>
      </div>
      <CallToAction title="Want your listing to look like this?" />
    </div>
  );
};

export default Page;
