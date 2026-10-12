import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import CallToAction from "@/components/shared/CallToAction";
import {
  dronePricing,
  formatPrice,
  packages,
  singleServices,
  sizeTiers,
  tourHosting,
  webIncludes,
  webPricing,
  type TieredPrice,
} from "@/constants/pricing";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Pricing | Websites, Virtual Tours, Photography & Drone",
  description:
    "Transparent pricing for websites, Matterport 3D tours, photography, floor plans and drone in Rochester, NY. Bundle and save.",
  path: "/pricing",
});

const TierTable = ({ rows }: { rows: TieredPrice[] }) => (
  <div className="overflow-x-auto rounded-lg border border-tan/50">
    <table className="w-full min-w-[40rem] text-left text-white">
      <thead className="bg-indigo">
        <tr className="text-sm text-paleblue">
          <th className="p-3 font-normal" scope="col">
            Service
          </th>
          {sizeTiers.map((t) => (
            <th key={t} className="p-3 font-normal" scope="col">
              {t}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name} className="border-t border-tan/20">
            <th className="p-3 font-bold" scope="row">
              {row.name}
              {row.note && <span className="block text-sm font-normal text-tan">{row.note}</span>}
            </th>
            {row.prices.map((p, i) => (
              <td key={i} className="p-3 text-lg">
                {formatPrice(p)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Page = () => {
  return (
    <div className="pb-[1rem]">
      <PageHeader eyebrow="Pricing" title="Simple, Upfront Pricing">
        No surprises. Prices for photos and tours are based on the size of the space. Bundle
        services together and save.
      </PageHeader>

      <div className="mx-auto mt-10 max-w-[64rem] space-y-14 px-[1rem]">
        <section>
          <h2 className="h2 text-left">Websites</h2>
          <div className="mt-4 grid gap-4 ss:grid-cols-2">
            {webPricing.map((w) => (
              <div key={w.name} className="rounded-lg border border-tan bg-indigo p-6">
                <p className="text-lg font-bold text-white">{w.name}</p>
                <p className="mt-2 text-sm text-paleblue">Starting at</p>
                <p className="text-4xl font-bold text-tan">{formatPrice(w.from)}</p>
                <p className="mt-3 text-lightblue">{w.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-lightblue">
            <span className="font-bold text-white">Every website includes:</span>{" "}
            {webIncludes.join(", ")}. Hosting is set up case by case depending on what your
            site needs.
          </p>
        </section>

        <section>
          <h2 className="h2 mb-1 text-left">Photo + Tour Packages</h2>
          <p className="mb-4 text-lightblue">The best value for listings, rentals and commercial spaces.</p>
          <TierTable rows={packages} />
        </section>

        <section>
          <h2 className="h2 mb-4 text-left">Individual Services</h2>
          <TierTable rows={singleServices} />
        </section>

        <section>
          <h2 className="h2 mb-4 text-left">Aerial Drone</h2>
          <ul className="grid gap-3 ss:grid-cols-3">
            {dronePricing.map((d) => (
              <li key={d.name} className="rounded-lg border border-tan/50 bg-indigo p-4 text-center">
                <p className="text-paleblue">{d.name}</p>
                <p className="mt-1 text-2xl font-bold text-white">{formatPrice(d.price)}</p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-lightblue">Custom drone projects are quoted individually.</p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-tan/50 p-5">
            <h2 className="text-xl font-bold text-white">Virtual tour hosting</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-lightblue">
              <li>{tourHosting.included}.</li>
              <li>
                After that, ${tourHosting.monthly}/month or ${tourHosting.yearly}/year to keep the
                link active.
              </li>
              {tourHosting.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-tan/50 p-5">
            <h2 className="text-xl font-bold text-white">Service area</h2>
            <p className="mt-3 text-lightblue">
              We&apos;re based in Rochester and work throughout upstate New York. A travel fee
              applies outside Monroe County. Spaces over 4,000 sq ft are quoted individually.
            </p>
            <p className="mt-3">
              <Link href="/faq" className="font-bold text-tan underline">
                Read the FAQ
              </Link>
            </p>
          </div>
        </section>
      </div>

      <CallToAction title="Get an exact quote" text="Tell us about your space or project and we'll send you a price, usually the same day." />
    </div>
  );
};

export default Page;
