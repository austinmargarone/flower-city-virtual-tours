import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import TourSwitcher from "@/components/shared/TourSwitcher";
import CallToAction from "@/components/shared/CallToAction";
import { formatPrice, singleServices, sizeTiers, tourHosting } from "@/constants/pricing";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Rochester Matterport 3D Virtual Tours",
  description:
    "Matterport 3D virtual tours for Rochester, NY businesses, rentals and listings. Dollhouse views, floor plans, Mattertags and Google Street View publishing.",
  path: "/services/virtual-tours",
  image: "/gallery/virtual-tours/dollhouse-office.jpg",
});

type TourExample = { id: string; label: string; title: string; href?: string };

const commercialTours: TourExample[] = [
  { id: "bYjEEyzdEQZ", label: "Elderwood", title: "Elderwood at Greece · Senior living", href: "/work/elderwood" },
  { id: "MRKsLeTQbbN", label: "Monroe Community Hospital", title: "Monroe Community Hospital, Physical Therapy · Healthcare", href: "/work/monroe-community-hospital" },
  { id: "WvpyR9oxStU", label: "Serendipity Labs", title: "Serendipity Labs · Coworking office", href: "/work/serendipity-labs" },
  { id: "Evhwmxboxo4", label: "Howard Hanna", title: "Howard Hanna, Greece office · Real estate office", href: "/work/howard-hanna" },
  { id: "Vu8vAVvcebN", label: "Keller Williams", title: "Keller Williams, Brighton office · Real estate office", href: "/work/keller-williams" },
  { id: "SAC2K8kV8BR", label: "I-Square", title: "I-Square · Mixed-use", href: "/work/i-square" },
  { id: "Yug3Wm4ZsKC", label: "Aaron's Alley", title: "Aaron's Alley · Retail", href: "/work/aarons-alley" },
  { id: "dTursFxbP1u", label: "DeCarolis", title: "DeCarolis Truck Rental, Buffalo Branch · Commercial", href: "/work/decarolis-truck-rental" },
  { id: "MnvsFYd5SXE", label: "Warehouse", title: "DeCarolis Truck Rental, Heavy Duty Parts · Warehouse", href: "/work/decarolis-truck-rental" },
];

const residentialTours: TourExample[] = [
  { id: "S7v82M2yiE1", label: "443 Crossfield Rd", title: "443 Crossfield Road", href: "/listings/443-crossfield-road" },
  { id: "jYkEMR4LA93", label: "633 Autumn Breeze Ln", title: "633 Autumn Breeze Lane · Ontario, NY", href: "/listings/633-autumn-breeze-lane" },
  { id: "uA35cjnNPw3", label: "109 Brush Creek Dr", title: "109 Brush Creek Drive · Rochester, NY", href: "/listings/109-brush-creek-drive" },
  { id: "fT6v5zy5tKE", label: "71 Cornhill Pl", title: "71 Cornhill Place · Rochester, NY", href: "/listings/71-cornhill-place" },
  { id: "BHXMrHxz9id", label: "257 Stonefield Ln", title: "257 Stonefield Lane · Farmington, NY", href: "/listings/257-stonefield-lane" },
  { id: "XMRW7cy92WV", label: "145 Georgian Court Rd", title: "145 Georgian Court Road", href: "/listings/145-georgian-court-road" },
  { id: "rv4E15UCcsv", label: "6782 Colyer Crossing", title: "6782 Colyer Crossing", href: "/listings/6782-colyer-crossing" },
  { id: "P67YGAfH8tR", label: "7700 Pine Tree Dr", title: "7700 Pine Tree Drive" },
  { id: "qzjkH94yzsP", label: "28 Great Oaks Ln", title: "28 Great Oaks Lane" },
  { id: "UFpAPNqqYGc", label: "The Nest Cottage", title: "The Nest Cottage · Short-term rental", href: "/listings/the-nest-cottage" },
  { id: "YN4DWeXcQ2p", label: "Vineyard Guest Barn", title: "Vineyard Guest Barn · VacationFLX rental", href: "/work/vacationflx" },
  { id: "csDCFB2Tqo2", label: "Flat Iron", title: "Flat Iron Two · VacationFLX rental", href: "/work/vacationflx" },
];

const toSwitcher = (list: TourExample[]) =>
  list.map((t) => ({
    id: t.id,
    label: t.label,
    title: t.title,
    note: t.href ? (
      <>
        {" · "}
        <Link href={t.href} className="text-tan underline">
          {t.href.startsWith("/work") ? "case study" : "see the listing"}
        </Link>
      </>
    ) : null,
  }));

const features = [
  { title: "Dollhouse view", text: "See the entire space at once as a 3D model, then click into any room." },
  { title: "Schematic floor plans", text: "Measured floor plans generated from the same scan." },
  { title: "Mattertags", text: "Pin text, photos, video and links to features right inside the tour." },
  { title: "Google Street View", text: "Publish your tour to Google so people can walk in from Maps." },
  { title: "Private or public", text: "Share an open link or password-protect it for select viewers." },
  { title: "Works in VR", text: "Viewable in a browser, on a phone or with a VR headset." },
];

const tourPrice = singleServices.find((s) => s.name === "3D Virtual Tour")!;
const floorPlanPrice = singleServices.find((s) => s.name === "Schematic Floor Plan")!;

const page = () => {
  return (
    <div className="pb-[1rem]">
      <PageHeader eyebrow="Media" title="Matterport 3D Virtual Tours">
        Let customers walk through your space from anywhere, 24/7. We scan your building with a
        Matterport camera and turn it into an interactive 3D tour you can put on your website,
        Google listing or social media.
      </PageHeader>

      <div className="mx-auto mt-10 max-w-[77.5rem] space-y-16 px-[1rem]">
        <section>
          <h2 className="h2 text-left">Commercial tours</h2>
          <p className="mb-6 mt-2 text-lightblue">
            Pick a tour to load it. Click and drag to look around, and use the dollhouse button in
            the corner to see the whole building.
          </p>
          <TourSwitcher pickerLabel={`${commercialTours.length} commercial tours`} tours={toSwitcher(commercialTours)} />
        </section>

        <section>
          <h2 className="h2 text-left">Homes &amp; rentals</h2>
          <p className="mb-6 mt-2 text-lightblue">
            Listings and short-term rentals, many with full photo shoots alongside the tour.
          </p>
          <TourSwitcher pickerLabel={`${residentialTours.length} residential tours`} tours={toSwitcher(residentialTours)} />
        </section>

        <section>
          <h2 className="h2 text-left">What&apos;s included</h2>
          <ul className="mt-6 grid gap-4 ss:grid-cols-2 md:grid-cols-3">
            {features.map((f) => (
              <li key={f.title} className="rounded-lg border border-tan/40 bg-indigo p-5">
                <p className="text-lg font-bold text-white">{f.title}</p>
                <p className="mt-1 text-lightblue">{f.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="h2 text-left">Dollhouse views</h2>
            <p className="mt-3 text-lg text-lightblue">
              Every tour includes a 3D dollhouse model, so visitors understand the layout before
              they ever step inside. It&apos;s especially useful for large offices, warehouses
              and multi-floor buildings.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/gallery/virtual-tours/dollhouse-office.jpg"
              alt="3D dollhouse view of an office"
              width={800}
              height={450}
              className="col-span-2 rounded-lg border border-tan/40 bg-black"
            />
            <Image
              src="/gallery/virtual-tours/dollhouse-commercial.jpg"
              alt="3D dollhouse view of a commercial building"
              width={400}
              height={225}
              className="rounded-lg border border-tan/40 bg-black"
            />
            <Image
              src="/gallery/virtual-tours/dollhouse-home.jpg"
              alt="3D dollhouse view of a home"
              width={400}
              height={225}
              className="rounded-lg border border-tan/40 bg-black"
            />
          </div>
        </section>

        <section className="grid items-center gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-3 md:order-1">
            <Image
              src="/gallery/virtual-tours/floor-plan-1.jpg"
              alt="Schematic floor plan of a single-story home"
              width={600}
              height={450}
              className="rounded-lg bg-white p-2"
            />
            <Image
              src="/gallery/virtual-tours/floor-plan-2.jpg"
              alt="Schematic floor plan of a large home"
              width={600}
              height={450}
              className="rounded-lg bg-white p-2"
            />
          </div>
          <div className="md:order-2">
            <h2 className="h2 text-left">Schematic floor plans</h2>
            <p className="mt-3 text-lg text-lightblue">
              Because the camera builds a 3D model as it scans, we can generate clean,
              measured floor plans from the same visit. They&apos;re great for listings,
              space planning and insurance records.
            </p>
          </div>
        </section>

        <section className="rounded-lg border border-tan/50 bg-indigo p-6">
          <h2 className="h2 text-left">Virtual tour pricing</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[32rem] text-left text-white">
              <thead>
                <tr className="border-b border-tan/40 text-sm text-paleblue">
                  <th className="py-2 pr-4 font-normal">Size</th>
                  {sizeTiers.map((t) => (
                    <th key={t} className="py-2 pr-4 font-normal">
                      {t}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[tourPrice, floorPlanPrice].map((row) => (
                  <tr key={row.name} className="border-b border-tan/20">
                    <td className="py-3 pr-4 font-bold">{row.name}</td>
                    {row.prices.map((p, i) => (
                      <td key={i} className="py-3 pr-4 text-lg">
                        {formatPrice(p)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-lightblue">
            {tourHosting.included}. After that, hosting is ${tourHosting.monthly}/month or $
            {tourHosting.yearly}/year. {tourHosting.notes[0]}{" "}
            <Link href="/pricing" className="font-bold text-tan underline">
              See all pricing
            </Link>
          </p>
        </section>
      </div>

      <CallToAction title="Put your space online" />
    </div>
  );
};

export default page;
