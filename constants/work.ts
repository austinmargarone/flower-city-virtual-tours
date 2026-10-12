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
      quote:
        "Not only were they incredible at helping me understand my idea, they helped me formulate it into something I couldn't even imagine. Incredibly patient, professional and helpful, to say the least.",
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

// Full reviews from the old "Our Results" page.
export const testimonials = [
  {
    quote:
      "At Vacation FLX we were looking for a way to showcase our vacation rentals. Austin, at Flower City Virtual Tours did an exceptional job showcasing our properties! He was always prompt to respond, polite & courteous. We would highly recommend Flower City Virtual Tours!",
    name: "Lisa N., Vacation FLX",
  },
  {
    quote:
      "Flower City Virtual Tours helped to showcase our facilities to potential customers. The virtual tour is the next best thing to seeing a building in person, but in some ways it's better because you can see more detail. Prospective clients can view your business' capabilities through the Matterport technology. I confidently recommend Flower City Virtual Tours.",
    name: "Mark W.",
  },
  {
    quote:
      "Austin, of Flower City Virtual Tours recently did a Matterport tour of our Keller Williams office in Brighton and we were extremely pleased with how it came out! He was professional and thorough and captured our large office perfectly. Thank you!",
    name: "Ellen M., Keller Williams",
  },
  {
    quote:
      "I reached out to Flower City Virtual Tours with a wild idea, and no concept of where to start. Not only were they incredible at helping me understand my idea, they helped me formulate it into something I couldn't even imagine. Not only that, but they had the best rates out of any company I looked at. Incredibly patient, professional and helpful, to say the least. We look forward to using them again for many future projects!",
    name: "Elyssa R., Aaron's Alley",
  },
  {
    quote:
      "Austin, of Flower City Virtual Tours, was extremely professional, prompt, and detail oriented when I hired him to create multiple 3-D Matterport tours for the properties I was going to be listing for sale. He was very knowledgeable about what he was doing and provided a high level of service. I couldn't have asked for more. I will definitely be using him in the future, and would highly recommend him to anyone considering his services!",
    name: "Anthony S.",
  },
  {
    quote:
      "I have used Flower City for both a matterport tour and listing photos, in both cases the results have exceeded mine and my clients expectations! I will be using them again!",
    name: "John M.",
  },
  {
    quote:
      "Austin @Flower City Virtual Tours did a wonderful job on the photos and matterport of our home. We will definitely use FCVT again in the future. I highly recommend the services they offer. Austin was both professional and courteous.",
    name: "Trisha M.",
  },
];
