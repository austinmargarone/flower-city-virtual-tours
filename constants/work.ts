import type { GalleryImage } from "@/components/shared/Gallery";

export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  location: string;
  summary: string;
  /** Optional: without a cover, cards show a branded tile instead */
  cover?: string;
  coverAlt?: string;
  services: string[];
  /** Paragraphs of the write-up */
  story: string[];
  results?: string[];
  /** label is the short name shown on the tour picker when there's more than one */
  tours?: { id: string; title: string; label?: string }[];
  gallery?: GalleryImage[];
  testimonial?: { quote: string; name: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "elderwood",
    client: "Elderwood",
    category: "3D Virtual Tours · Senior Living",
    location: "Upstate New York",
    summary:
      "Matterport tours of six senior living communities, so families can walk through each facility before they ever visit.",
    cover: "/work/elderwood/greece.jpg",
    coverAlt: "Front entrance of the Elderwood community in Greece, NY",
    services: ["Matterport 3D tours", "Exterior photography", "Multi-site capture"],
    story: [
      "Choosing a senior living community is a big decision, and families often have to compare options from a distance. Elderwood operates senior living communities across upstate New York.",
      "We captured six Elderwood communities in 3D: Greece, Fairport, Vestal, Bassett Park, St. Gregory Court and Colonie, along with a front exterior photo of each. Families can now walk the halls, see the common areas and get a feel for each community from anywhere.",
    ],
    results: [
      "6 senior living communities captured",
      "A 3D tour and front photo for every location",
      "Families can compare communities from anywhere",
    ],
    testimonial: {
      quote:
        "From start to finish, their team was professional, highly communicative, and committed to delivering an outstanding product on a very tight timeline. The final product exceeded our expectations.",
      name: "Lynn B., Elderwood",
    },
    tours: [
      { id: "bYjEEyzdEQZ", label: "Greece", title: "Elderwood at Greece" },
      { id: "52czBbvKy8F", label: "Fairport", title: "Elderwood at Fairport" },
      { id: "u42ZEV7EF4D", label: "Vestal", title: "Elderwood at Vestal" },
      { id: "XmrdR93jD91", label: "Bassett Park", title: "Elderwood at Bassett Park" },
      { id: "HwyfVWWpxmE", label: "St. Gregory Court", title: "Elderwood at St. Gregory Court" },
      { id: "eKbSJHFnUeM", label: "Colonie", title: "Elderwood at Colonie" },
    ],
    gallery: [
      { src: "/work/elderwood/greece.jpg", alt: "Elderwood at Greece, front entrance" },
      { src: "/work/elderwood/fairport.jpg", alt: "Elderwood at Fairport, front entrance" },
      { src: "/work/elderwood/vestal.jpg", alt: "Elderwood at Vestal, front entrance" },
      { src: "/work/elderwood/bassett-park.jpg", alt: "Elderwood at Bassett Park, front entrance" },
      { src: "/work/elderwood/st-gregory-court.jpg", alt: "Elderwood at St. Gregory Court, front entrance" },
      { src: "/work/elderwood/colonie.jpg", alt: "Elderwood at Colonie, front entrance" },
    ],
  },
  {
    slug: "monroe-community-hospital",
    client: "Monroe Community Hospital",
    category: "3D Virtual Tours · Healthcare",
    location: "Rochester, NY",
    summary:
      "Ten departments captured in 3D, from therapy gyms and pediatrics to resident rooms, the salon and the gift shop.",
    cover: "/work/monroe-community-hospital/gift-shop-dollhouse.jpg",
    coverAlt: "3D dollhouse view of the Monroe Community Hospital gift shop",
    services: ["Matterport 3D tours", "Department-by-department capture"],
    story: [
      "A hospital is hard to picture from a brochure, and every department looks different.",
      "We captured ten areas as individual Matterport tours: the gift shop, occupational therapy, physical therapy, the vent unit, pediatrics, a dining room, the new laundry room, the hair salon, the game room and a resident room.",
      "Because each area is its own tour, the hospital can share exactly the space someone needs to see, whether that's a therapy gym for a new patient or a resident room for a family.",
    ],
    results: [
      "10 departments and spaces captured",
      "Each area shareable on its own link",
      "Families and new patients can preview spaces remotely",
    ],
    tours: [
      { id: "MRKsLeTQbbN", label: "Physical Therapy", title: "Monroe Community Hospital: Physical Therapy" },
      { id: "V3kjsMcw58s", label: "Occupational Therapy", title: "Monroe Community Hospital: Occupational Therapy" },
      { id: "8WUas8EyJsd", label: "Pediatrics", title: "Monroe Community Hospital: Pediatrics" },
      { id: "dBf4c5HPVEs", label: "Vent Unit", title: "Monroe Community Hospital: Vent Unit" },
      { id: "cG27YBG2oow", label: "Resident Room", title: "Monroe Community Hospital: Resident Room" },
      { id: "1nTrv5NKJq5", label: "Dining Room", title: "Monroe Community Hospital: FA5E Dining Room" },
      { id: "wiBH9Lxk98h", label: "Game Room", title: "Monroe Community Hospital: Game Room" },
      { id: "cJ9ogoYpZRn", label: "Hair Salon", title: "Monroe Community Hospital: FR1C Hair Salon" },
      { id: "o44R4QyrzXx", label: "Laundry Room", title: "Monroe Community Hospital: New Laundry Room" },
      { id: "FKrBNbz9X9b", label: "Gift Shop", title: "Monroe Community Hospital: Gift Shop" },
    ],
  },
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
    tours: [
      { id: "dTursFxbP1u", label: "Buffalo Branch", title: "DeCarolis Truck Rental: Buffalo Branch" },
      { id: "3FZKNeR6cU9", label: "Power Shop", title: "DeCarolis Truck Rental: Power Shop" },
      { id: "i8szzXfq4U2", label: "Trailer Shop", title: "DeCarolis Truck Rental: Trailer Shop" },
      { id: "MnvsFYd5SXE", label: "Heavy Duty Parts", title: "DeCarolis Truck Rental: Heavy Duty Parts" },
    ],
    gallery: [
      { src: "/work/decarolis/office.jpg", alt: "DeCarolis office building, dollhouse view" },
      { src: "/work/decarolis/buffalo.jpg", alt: "DeCarolis Buffalo shop, dollhouse view" },
      { src: "/work/decarolis/syracuse.jpg", alt: "DeCarolis Syracuse shop, dollhouse view" },
      { src: "/work/decarolis/elmira.jpg", alt: "DeCarolis Elmira shop, dollhouse view" },
      { src: "/work/decarolis/geneva.jpg", alt: "DeCarolis Geneva shop, dollhouse view" },
      { src: "/work/decarolis/henrietta.jpg", alt: "DeCarolis Henrietta branch, dollhouse view" },
      { src: "/work/decarolis/power-shop.jpg", alt: "DeCarolis power shop, dollhouse view" },
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

// Client reviews, as posted on Google. Newest and most relevant first.
export const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=flower+city+virtual+tours";

export const testimonials = [
  {
    quote:
      "We had an excellent experience working with Flower City Virtual Tours on a project involving six of our assisted living facilities throughout New York State. From start to finish, their team was professional, highly communicative, and committed to delivering an outstanding product on a very tight timeline. We especially appreciated the consistent communication throughout the project. It kept me informed, provided reassurance at every stage, and gave me confidence that we had chosen the right partner for our virtual tour initiative. The final product exceeded our expectations, and we were very pleased with the quality and professionalism of their work. I would highly recommend Flower City Virtual Tours to any organization looking to showcase its facilities through high-quality virtual tours. We would absolutely work with them again!",
    name: "Lynn B., Elderwood",
  },
  {
    quote:
      "Austin created a website for my business and also a google business page which has helped me get more clients, would highly recommend and will definitely use in the future.",
    name: "Jeremy F., Fullmers Grind",
  },
  {
    quote:
      "Flower City Virtual Tours helped to showcase our facilities to potential customers. The virtual tour is the next best thing to seeing a building in person, but in some ways it's better because you can see more detail. Prospective clients can view your business' capabilities through the Matterport technology. I confidently recommend Flower City Virtual Tours.",
    name: "Mark W.",
  },
  {
    quote:
      "I had a fantastic experience with Austin at Flower City Virtual Tours! He is highly professional, has an incredible eye for detail, and really knows how to make listings shine. If you want to impress potential buyers with your online presence, I highly recommend choosing Flower City!",
    name: "Elena C.",
  },
  {
    quote:
      "At Vacation FLX we were looking for a way to showcase our vacation rentals. Austin, at Flower City Virtual Tours did an exceptional job showcasing our properties! He was always prompt to respond, polite & courteous. We would highly recommend Flower City Virtual Tours!",
    name: "Lisa N., Vacation FLX",
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
      "Very professional and able to answer all of my questions regarding the Matterport process. Austin, of Flower City Virtual Tours, captured my space perfectly and was very meticulous making sure it was exactly what I wanted. I would highly recommend this company!",
    name: "Jackie B.",
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
];
