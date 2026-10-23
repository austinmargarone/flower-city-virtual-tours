import Link from "next/link";
import { Building2, Factory, GraduationCap, HeartPulse, Home, UtensilsCrossed, type LucideIcon } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import CallToAction from "@/components/shared/CallToAction";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Industries We Serve",
  description:
    "Websites, 3D virtual tours, photography and drone for Rochester businesses: retail, offices, hospitality, rentals, industrial, construction, real estate and more.",
  path: "/industries",
});

type Industry = {
  icon: LucideIcon;
  title: string;
  types: string[];
  text: string;
  examples?: { label: string; href: string }[];
};

const industries: Industry[] = [
  {
    icon: HeartPulse,
    title: "Healthcare & Senior Living",
    types: ["Senior living communities", "Hospitals", "Rehab & therapy", "Long-term care"],
    text: "Families and patients want to see a place before they commit to it. 3D tours let them walk through a community or department from home, and each space can be shared on its own link.",
    examples: [
      { label: "Elderwood, 6 communities", href: "/work/elderwood" },
      { label: "Monroe Community Hospital, 10 departments", href: "/work/monroe-community-hospital" },
    ],
  },
  {
    icon: Building2,
    title: "Retail & Commercial",
    types: ["Retail showrooms", "Small businesses", "Office buildings", "Car dealerships", "Apartment buildings"],
    text: "Give customers a reason to visit before they walk in. A virtual tour lets them browse your store or showroom online, and a fast website turns that interest into calls and visits.",
    examples: [{ label: "Aaron's Alley Walk & Shop", href: "/work/aarons-alley" }],
  },
  {
    icon: Factory,
    title: "Industrial & Construction",
    types: ["Warehouses", "Industrial complexes", "Construction sites", "Outdoor spaces"],
    text: "Large facilities are hard to show in photos. 3D tours and dollhouse views let buyers, tenants and partners understand the whole layout, and drone footage documents sites from above.",
    examples: [
      { label: "DeCarolis Truck Rental", href: "/work/decarolis-truck-rental" },
      { label: "504 Brooks Ave apartments", href: "/listings/504-brooks-ave" },
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality & Events",
    types: ["Hotels & short-term rentals", "Event venues", "Restaurants & bars", "Country clubs", "Theaters"],
    text: "Guests book with their eyes. Photos and a walk-through tour show off your space, and a tour on your website or Google listing helps people picture their stay or event.",
    examples: [
      { label: "Vineyard Guest Barn", href: "/work/vineyard-guest-barn" },
      { label: "The Nest Cottage", href: "/listings/the-nest-cottage" },
    ],
  },
  {
    icon: Home,
    title: "Real Estate & Residential",
    types: ["Homes for sale", "Apartment complexes", "Condominiums", "Property managers"],
    text: "Listing photos, floor plans, drone and 3D tours that help properties stand out, and let out-of-town buyers and renters tour from anywhere.",
  },
  {
    icon: GraduationCap,
    title: "Institutions & Insurance",
    types: ["Schools & educational facilities", "Insurance documentation", "Everything else"],
    text: "A 3D scan is a complete visual record of a space. Use it for campus tours, facility planning, or documenting a property's condition for insurance.",
  },
];

const Page = () => {
  return (
    <div className="pb-[1rem]">
      <PageHeader eyebrow="Industries" title="Who We Work With">
        If you have a space worth seeing or a business worth finding, we can help you put it
        online. Here are some of the industries we serve around Rochester and upstate New York.
      </PageHeader>

      <ul className="mx-auto mt-10 max-w-[64rem] space-y-6 px-[1rem]">
        {industries.map(({ icon: Icon, title, types, text, examples }) => (
          <li key={title} className="rounded-lg border border-tan/50 bg-indigo p-6 md:flex md:gap-6">
            <Icon className="size-12 shrink-0 text-tan" strokeWidth={1.25} aria-hidden="true" />
            <div className="mt-3 md:mt-0">
              <h2 className="text-2xl font-bold text-white">{title}</h2>
              <ul className="mt-2 flex flex-wrap gap-2">
                {types.map((t) => (
                  <li key={t} className="rounded-full border border-tan/50 px-3 py-0.5 text-sm text-lightblue">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-3 leading-relaxed text-lightblue">{text}</p>
              {examples && (
                <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  <span className="text-paleblue">See:</span>
                  {examples.map((e) => (
                    <Link key={e.href} href={e.href} className="font-bold text-tan underline">
                      {e.label}
                    </Link>
                  ))}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <CallToAction />
    </div>
  );
};

export default Page;
