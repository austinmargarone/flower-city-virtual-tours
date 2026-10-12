// Media prices carried over from the old flowercityvirtualtours.com pricing page.
// Website prices raised Oct 2026 to sit below typical agency rates but above bargain freelancers.
// Edit here and every page that shows a price updates.

export const sizeTiers = ["Under 2,000 sq ft", "2,000–3,000 sq ft", "3,000–4,000 sq ft", "Over 4,000 sq ft"];

export type TieredPrice = { name: string; note?: string; prices: (number | null)[] };

/** null = "Contact for quote" */
export const packages: TieredPrice[] = [
  { name: "Photos + Virtual Tour + Floor Plan + Drone", note: "Everything", prices: [600, 750, 870, null] },
  { name: "Photos + Virtual Tour + Drone", prices: [550, 700, 820, null] },
  { name: "Photos + Virtual Tour", prices: [450, 600, 720, null] },
];

export const singleServices: TieredPrice[] = [
  { name: "Photography", prices: [200, 280, 350, null] },
  { name: "3D Virtual Tour", prices: [300, 380, 450, null] },
  { name: "Videography", prices: [300, 380, 450, null] },
  { name: "Schematic Floor Plan", note: "Add-on to a virtual tour", prices: [80, 100, 120, null] },
];

export const dronePricing = [
  { name: "3 aerial photos", price: 150 },
  { name: "Aerial video", price: 250 },
  { name: "Aerial photos + video", price: 350 },
];

export const webPricing = [
  { name: "Landing page", from: 1500, description: "A single, focused page for a service, event or small business." },
  { name: "Multi-page website", from: 3000, description: "A full site with the pages your business needs." },
];

export const webIncludes = [
  "Consultation",
  "Domain registration",
  "Custom design",
  "Development",
  "SEO optimization",
  "SSL certificate",
];

export const tourHosting = {
  included: "3 months of Matterport hosting included",
  monthly: 9.99,
  yearly: 99.99,
  notes: [
    "Inactive tours are saved and can be reactivated anytime.",
    "Discounted rates for hosting multiple tours.",
  ],
};

export const formatPrice = (p: number | null) =>
  p === null ? "Quote" : `$${p.toLocaleString("en-US")}`;
