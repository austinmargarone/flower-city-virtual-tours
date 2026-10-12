import Link from "next/link";
import { listings, type Listing } from "@/constants/listings";

type Props = { exclude?: string; limit?: number; category?: Listing["category"] };

/** Grid of listing cards (cover photo, address, photo count). */
const ListingCards = ({ exclude, limit, category }: Props) => {
  const items = listings
    .filter((l) => l.slug !== exclude && (!category || l.category === category))
    .slice(0, limit);
  return (
    <ul className="grid grid-cols-1 gap-5 ss:grid-cols-2 md:grid-cols-3">
      {items.map((l) => (
        <li key={l.slug}>
          <Link
            href={`/listings/${l.slug}`}
            className="flex h-full flex-col overflow-hidden rounded-lg border border-tan/50 bg-indigo shadow-lg transition hover:-translate-y-0.5 hover:border-tan"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={l.photos[0].thumb}
              alt={`${l.title}, ${l.kind}`}
              loading="lazy"
              className="aspect-[3/2] w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-lg font-bold text-white">{l.title}</h3>
              <p className="text-sm text-paleblue">
                {l.kind}
                {l.location ? ` · ${l.location}` : ""}
              </p>
              <p className="mt-2 text-sm font-bold text-tan">
                {l.photos.length} photos
                {l.aerials.length > 0 && ` · ${l.aerials.length} aerials`}
                {l.tour && " · 3D tour"}
                {l.video && " · Video"}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListingCards;
