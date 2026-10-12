import type { GalleryImage } from "@/components/shared/Gallery";

export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  location: string;
  summary: string;
  cover: string;
  coverAlt: string;
  services: string[];
  /** Paragraphs of the write-up */
  story: string[];
  results?: string[];
  tours?: { id: string; title: string }[];
  gallery?: GalleryImage[];
  testimonial?: { quote: string; name: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "decarolis-truck-rental",
    client: "DeCarolis Truck Rental",
    category: "3D Virtual Tours · Commercial",
    location: "Upstate New York",
    summary:
      "Nine locations captured in 3D so buyers could tour the entire company without leaving their desk.",
    cover: "/work/decarolis/syracuse.jpg",
    coverAlt: "3D dollhouse view of a DeCarolis truck and trailer shop",
    services: ["Matterport 3D tours", "Dollhouse views", "Multi-site capture"],
    story: [
      "DeCarolis Truck Rental was preparing to sell the company, and its assets were spread across branches throughout upstate New York. Asking every potential buyer to drive to each site would have slowed the sale down.",
      "We captured nine separate large spaces in 3D: an office building, a warehouse and seven truck and trailer shops. Each one became a Matterport tour buyers could walk through on their own schedule.",
      "With every branch online, DeCarolis could market its locations to more potential buyers and let them see the full operation remotely before ever scheduling a visit.",
    ],
    results: [
      "9 large commercial spaces captured",
      "Branches across upstate NY viewable from one link each",
      "Buyers could evaluate facilities remotely",
    ],
    tours: [{ id: "dTursFxbP1u", title: "DeCarolis Truck Rental, Buffalo branch" }],
    gallery: [
      { src: "/work/decarolis/office.jpg", alt: "DeCarolis office building, dollhouse view" },
      { src: "/work/decarolis/buffalo.jpg", alt: "DeCarolis Buffalo shop, dollhouse view" },
      { src: "/work/decarolis/syracuse.jpg", alt: "DeCarolis Syracuse shop, dollhouse view" },
      { src: "/work/decarolis/elmira.jpg", alt: "DeCarolis Elmira shop, dollhouse view" },
      { src: "/work/decarolis/geneva.jpg", alt: "DeCarolis Geneva shop, dollhouse view" },
      { src: "/work/decarolis/henrietta.jpg", alt: "DeCarolis Henrietta branch, dollhouse view" },
      { src: "/work/decarolis/power-shop.jpg", alt: "DeCarolis power shop, dollhouse view" },
      { src: "/work/decarolis/garden.jpg", alt: "DeCarolis shop location, dollhouse view" },
    ],
  },
  {
    slug: "aarons-alley",
    client: "Aaron's Alley",
    category: "3D Virtual Tours · Retail",
    location: "Rochester, NY",
    summary:
      "A virtual \"Walk & Shop\" that lets customers browse Rochester's hippie shop from home.",
    cover: "/work/aarons-alley/shop.jpg",
    coverAlt: "Inside Aaron's Alley, shelves of tie-dye shirts and merchandise",
    services: ["Matterport 3D tour", "Mattertags", "Virtual shopping"],
    story: [
      "Aaron's Alley is Rochester's local hippie shop, known as much for its welcoming staff as for what's on the shelves. Elyssa came to us with an idea: a \"Walk & Shop\" that would let people browse the store virtually.",
      "We captured the shop as a Matterport 3D tour so customers can walk the aisles, look around every display and explore the store on their own time.",
      "The result took a brick-and-mortar shop online in a way photos can't. Customers get a real feel for the store before they visit in person.",
    ],
    tours: [{ id: "Yug3Wm4ZsKC", title: "Aaron's Alley Walk & Shop" }],
    testimonial: {
      quote: "Incredibly patient, professional and helpful, to say the least.",
      name: "Elyssa R., Aaron's Alley",
    },
  },
  {
    slug: "vineyard-guest-barn",
    client: "Vineyard Guest Barn",
    category: "Photography + 3D Tour · Short-Term Rental",
    location: "Upstate New York",
    summary:
      "Listing photos and a Matterport tour that show off a renovated guest barn to rental guests.",
    cover: "/gallery/photography/barn-great-room.jpg",
    coverAlt: "Great room of a renovated barn with exposed beams and a long kitchen island",
    services: ["Listing photography", "Matterport 3D tour"],
    story: [
      "Short-term rental guests book with their eyes. This renovated barn has exposed timber beams, a big open kitchen and several bedrooms, and the listing needed to show all of it.",
      "We photographed the space room by room with bright, true-to-life images and captured the full space as a Matterport tour so guests can walk through before they book.",
    ],
    tours: [{ id: "YN4DWeXcQ2p", title: "Vineyard Guest Barn 3D tour" }],
    gallery: [
      { src: "/gallery/photography/barn-great-room.jpg", alt: "Barn great room and kitchen" },
      { src: "/gallery/photography/barn-living-room.jpg", alt: "Barn living room with leather sofas" },
      { src: "/gallery/photography/barn-kitchen.jpg", alt: "Barn kitchen island" },
      { src: "/gallery/photography/barn-long-table.jpg", alt: "Long dining table under barn beams" },
      { src: "/gallery/photography/barn-loft.jpg", alt: "Barn loft with chandelier" },
      { src: "/gallery/photography/barn-bedroom.jpg", alt: "Barn bedroom with fireplace" },
    ],
  },
];

export const testimonials = [
  {
    quote: "Austin, at Flower City Virtual Tours did an exceptional job showcasing our properties!",
    name: "Lisa N., Vacation FLX",
  },
  {
    quote: "The virtual tour is the next best thing to seeing a building in person.",
    name: "Mark W.",
  },
  {
    quote: "Incredibly patient, professional and helpful, to say the least.",
    name: "Elyssa R., Aaron's Alley",
  },
  {
    quote: "…captured our large office perfectly.",
    name: "Ellen M., Keller Williams",
  },
];
