import Link from "next/link";
import ShootCarousel from "./ShootCarousel";
import { listings } from "@/constants/listings";

// Homepage photo features, in display order. Swap in any listing slug from constants/listings.ts.
const FEATURED = ["76-cobble-creek-road", "the-nest-cottage", "633-autumn-breeze-lane"];

/** Homepage section: three recent photo shoots with a browsable photo on each tile. */
const RecentShoots = () => {
  const shoots = FEATURED.map((slug) => listings.find((l) => l.slug === slug)).filter(
    (l): l is NonNullable<typeof l> => Boolean(l)
  );
  return (
    <section className="mx-auto w-full max-w-[77.5rem]">
      <h2 className="h2 flex justify-center py-[1rem]">Recent Photo Shoots</h2>
      <ul className="grid grid-cols-1 gap-[1.25rem] ss:grid-cols-2 md:grid-cols-3">
        {shoots.map((l) => (
          <li
            key={l.slug}
            className="flex flex-col overflow-hidden rounded-lg border border-tan/50 bg-indigo shadow-lg transition hover:border-tan"
          >
            <ShootCarousel href={`/listings/${l.slug}`} title={l.title} photos={[...l.photos, ...l.aerials]} />
            <Link href={`/listings/${l.slug}`} className="flex flex-1 flex-col p-4">
              <p className="text-sm font-bold uppercase tracking-wider text-tan">
                {l.category === "commercial" ? "Commercial" : "Residential"}
              </p>
              <h3 className="mt-1 text-lg font-bold text-white">{l.title}</h3>
              <p className="text-sm text-paleblue">
                {l.kind}
                {l.location ? ` · ${l.location}` : ""}
              </p>
              <p className="mt-2 text-sm font-bold text-tan">
                {[l.photos.length > 0 && `${l.photos.length} photos`, l.aerials.length > 0 && `${l.aerials.length} aerials`]
                  .filter(Boolean)
                  .join(" · ")}
                {l.tour && " · 3D tour"}
                {l.video && " · Video"}
              </p>
              <span className="mt-3 font-bold text-tan">View the full shoot →</span>
            </Link>
          </li>
        ))}
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
