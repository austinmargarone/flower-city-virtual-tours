import Link from "next/link";
import { listings } from "@/constants/listings";

// Three shoots picked to show range: a home with video + tour, a rental, and a commercial building.
const FEATURED = ["443-crossfield-road", "the-nest-cottage", "504-brooks-ave"];

/** Homepage section: three recent photo shoots, each linking to its full listing page. */
const RecentShoots = () => {
  const shoots = FEATURED.map((slug) => listings.find((l) => l.slug === slug)).filter(
    (l): l is NonNullable<typeof l> => Boolean(l)
  );
  return (
    <section className="mx-auto w-full max-w-[77.5rem]">
      <h2 className="h2 flex justify-center py-[1rem]">Recent Photo Shoots</h2>
      <ul className="grid grid-cols-1 gap-[1.25rem] ss:grid-cols-2 md:grid-cols-3">
        {shoots.map((l) => {
          const strip = [l.photos[1], l.photos[2], l.aerials[0] ?? l.photos[3]].filter(Boolean);
          return (
            <li key={l.slug}>
              <Link
                href={`/listings/${l.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-tan/50 bg-indigo shadow-lg transition hover:-translate-y-0.5 hover:border-tan"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={l.photos[0].thumb}
                  alt={`${l.title}, ${l.kind}`}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="grid grid-cols-3 gap-0.5 bg-midnight">
                  {strip.map((p) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={p.thumb} src={p.thumb} alt="" loading="lazy" className="aspect-[3/2] w-full object-cover" />
                  ))}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-sm font-bold uppercase tracking-wider text-tan">
                    {l.category === "commercial" ? "Commercial" : "Residential"}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white">{l.title}</h3>
                  <p className="text-sm text-paleblue">{l.kind}</p>
                  <p className="mt-2 text-sm font-bold text-tan">
                    {l.photos.length} photos
                    {l.aerials.length > 0 && ` · ${l.aerials.length} aerials`}
                    {l.tour && " · 3D tour"}
                    {l.video && " · Video"}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-6 text-center">
        <Link href="/services/photography" className="font-bold text-tan hover:underline">
          See all {listings.length} shoots →
        </Link>
      </div>
    </section>
  );
};

export default RecentShoots;
