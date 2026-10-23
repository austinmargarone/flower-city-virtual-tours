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
  /** The client's own website, when it isn't one we built */
  website?: { label: string; url: string; note?: string };
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
    slug: "serendipity-labs",
    client: "Serendipity Labs",
    category: "3D Virtual Tours · Coworking",
    location: "Rochester, NY",
    summary:
      "A 3D tour of a downtown Rochester coworking space, so prospective members can see the offices, meeting rooms and lounges before they book a visit.",
    cover: "/work/serendipity-labs/cover.jpg",
    coverAlt: "Private office at Serendipity Labs with floor-to-ceiling windows over downtown Rochester",
    services: ["Matterport 3D tour", "Dollhouse view", "Floor plan"],
    story: [
      "Serendipity Labs runs flexible coworking spaces with private offices, meeting rooms and shared lounges. For a coworking space, the space itself is the product, so members want to see it before they commit.",
      "We captured the full workspace in 3D. Prospective members can walk from the lobby to the private offices and conference rooms, and use the dollhouse view to understand the layout of the whole floor.",
    ],
    tours: [{ id: "WvpyR9oxStU", title: "Serendipity Labs coworking office" }],
  },
  {
    slug: "keller-williams",
    client: "Keller Williams",
    category: "3D Virtual Tours · Real Estate Office",
    location: "Brighton, NY",
    summary: "A 3D tour of Keller Williams' large Brighton office, captured from end to end.",
    cover: "/work/keller-williams/cover.jpg",
    coverAlt: "Reception desk and lobby at the Keller Williams Greater Rochester office",
    services: ["Matterport 3D tour", "Dollhouse view", "Large-space capture"],
    story: [
      "Keller Williams' Brighton office is a large space with agent workspaces, conference rooms and common areas. They wanted a tour that captured all of it accurately.",
      "We scanned the entire office in 3D, so agents they're recruiting and clients can walk through the space from anywhere and get a real sense of its size and layout.",
    ],
    tours: [{ id: "Vu8vAVvcebN", title: "Keller Williams, Brighton office" }],
    testimonial: {
      quote:
        "We were extremely pleased with how it came out! He was professional and thorough and captured our large office perfectly.",
      name: "Ellen M., Keller Williams",
    },
  },
  {
    slug: "howard-hanna",
    client: "Howard Hanna",
    category: "3D Virtual Tours · Real Estate Office",
    location: "Greece, NY",
    summary: "A 3D tour of Howard Hanna's Greece office for recruiting and client-facing marketing.",
    cover: "/work/howard-hanna/cover.jpg",
    coverAlt: "Front desk and open office at Howard Hanna in Greece, NY",
    services: ["Matterport 3D tour", "Dollhouse view"],
    story: [
      "A brokerage office is where agents work and clients sit down to make big decisions. Howard Hanna wanted a way to show off their Greece office online.",
      "We captured the office in 3D, so prospective agents and clients can walk through it from anywhere and know what to expect before they come in.",
    ],
    tours: [{ id: "Evhwmxboxo4", title: "Howard Hanna, Greece office" }],
  },
  {
    slug: "i-square",
    client: "I-Square",
    category: "3D Virtual Tours · Mixed-Use",
    location: "Irondequoit, NY",
    summary:
      "A 3D tour of I-Square's mixed-use building, from the skylit atrium and its living plant wall to the offices upstairs.",
    cover: "/work/i-square/cover.jpg",
    coverAlt: "Skylit atrium at I-Square with a multi-level living plant wall and open staircase",
    services: ["Matterport 3D tour", "Dollhouse view", "Multi-level capture"],
    story: [
      "I-Square is a mixed-use building in Irondequoit with shops, restaurants, event space and offices. Its open atrium, skylights and living plant wall are hard to appreciate in a flat photo.",
      "We captured the building in 3D across multiple levels, so future tenants and event planners can move through the atrium, up the stairs and into the spaces they're considering, all from their computer or phone.",
    ],
    tours: [{ id: "SAC2K8kV8BR", title: "I-Square" }],
  },
  {
    slug: "vacationflx",
    client: "VacationFLX",
    category: "3D Tours + Photography · Short-Term Rentals",
    location: "Upstate New York",
    summary:
      "3D tours and photography for a short-term rental company's properties, including the Vineyard Guest Barn and four Flat Iron units.",
    cover: "/listings/vineyard-guest-barn/01.jpg",
    coverAlt: "The Vineyard Guest Barn, a VacationFLX short-term rental",
    services: ["Matterport 3D tours", "Listing photography", "Dollhouse views", "Multi-property capture"],
    website: { label: "vacationflx.com", url: "https://vacationflx.com/", note: "Website by VacationFLX; much of the media is ours." },
    story: [
      "VacationFLX owns and manages short-term rentals and was looking for a way to showcase its properties online. Guests book with their eyes, so every rental needed to look its best before anyone arrived.",
      "We created much of the media for their properties. At the Vineyard Guest Barn, a renovated barn with exposed timber beams and a big open kitchen, we photographed every room and captured the whole space as a Matterport tour. We also captured four Flat Iron units as separate tours, so guests can explore the exact space they're booking.",
    ],
    results: ["5 rental tours captured in 3D", "Full listing photo set for the Vineyard Guest Barn", "A shareable tour link for every unit"],
    tours: [
      { id: "YN4DWeXcQ2p", label: "Vineyard Guest Barn", title: "VacationFLX: Vineyard Guest Barn" },
      { id: "xnkukuhrtaL", label: "Flat Iron One", title: "VacationFLX: Flat Iron One" },
      { id: "csDCFB2Tqo2", label: "Flat Iron Two", title: "VacationFLX: Flat Iron Two" },
      { id: "tdrEuWSvZuL", label: "Flat Iron Three", title: "VacationFLX: Flat Iron Three" },
      { id: "4h3KMw1GDh1", label: "Flat Iron Four", title: "VacationFLX: Flat Iron Four" },
    ],
    gallery: [
      { src: "/listings/vineyard-guest-barn/01.jpg", thumb: "/listings/vineyard-guest-barn/thumb/01.jpg", alt: "Vineyard Guest Barn (VacationFLX), photo 1" },
      { src: "/listings/vineyard-guest-barn/02.jpg", thumb: "/listings/vineyard-guest-barn/thumb/02.jpg", alt: "Vineyard Guest Barn (VacationFLX), photo 2" },
      { src: "/listings/vineyard-guest-barn/03.jpg", thumb: "/listings/vineyard-guest-barn/thumb/03.jpg", alt: "Vineyard Guest Barn (VacationFLX), photo 3" },
      { src: "/listings/vineyard-guest-barn/04.jpg", thumb: "/listings/vineyard-guest-barn/thumb/04.jpg", alt: "Vineyard Guest Barn (VacationFLX), photo 4" },
      { src: "/listings/vineyard-guest-barn/05.jpg", thumb: "/listings/vineyard-guest-barn/thumb/05.jpg", alt: "Vineyard Guest Barn (VacationFLX), photo 5" },
      { src: "/listings/vineyard-guest-barn/06.jpg", thumb: "/listings/vineyard-guest-barn/thumb/06.jpg", alt: "Vineyard Guest Barn (VacationFLX), photo 6" },
      { src: "/listings/vineyard-guest-barn/07.jpg", thumb: "/listings/vineyard-guest-barn/thumb/07.jpg", alt: "Vineyard Guest Barn (VacationFLX), photo 7" },
      { src: "/listings/vineyard-guest-barn/08.jpg", thumb: "/listings/vineyard-guest-barn/thumb/08.jpg", alt: "Vineyard Guest Barn (VacationFLX), photo 8" },
      { src: "/listings/vineyard-guest-barn/09.jpg", thumb: "/listings/vineyard-guest-barn/thumb/09.jpg", alt: "Vineyard Guest Barn (VacationFLX), photo 9" },
      { src: "/listings/vineyard-guest-barn/10.jpg", thumb: "/listings/vineyard-guest-barn/thumb/10.jpg", alt: "Vineyard Guest Barn (VacationFLX), photo 10" },
      { src: "/listings/vineyard-guest-barn/11.jpg", thumb: "/listings/vineyard-guest-barn/thumb/11.jpg", alt: "Vineyard Guest Barn (VacationFLX), photo 11" },
      { src: "/listings/vineyard-guest-barn/12.jpg", thumb: "/listings/vineyard-guest-barn/thumb/12.jpg", alt: "Vineyard Guest Barn (VacationFLX), photo 12" },
      { src: "/listings/vineyard-guest-barn/13.jpg", thumb: "/listings/vineyard-guest-barn/thumb/13.jpg", alt: "Vineyard Guest Barn (VacationFLX), photo 13" },
      { src: "/listings/vineyard-guest-barn/14.jpg", thumb: "/listings/vineyard-guest-barn/thumb/14.jpg", alt: "Vineyard Guest Barn (VacationFLX), photo 14" },
      { src: "/listings/vineyard-guest-barn/15.jpg", thumb: "/listings/vineyard-guest-barn/thumb/15.jpg", alt: "Vineyard Guest Barn (VacationFLX), photo 15" },
      { src: "/listings/vineyard-guest-barn/16.jpg", thumb: "/listings/vineyard-guest-barn/thumb/16.jpg", alt: "Vineyard Guest Barn (VacationFLX), photo 16" },
      { src: "/listings/vineyard-guest-barn/17.jpg", thumb: "/listings/vineyard-guest-barn/thumb/17.jpg", alt: "Vineyard Guest Barn (VacationFLX), photo 17" },
    ],
    testimonial: {
      quote:
        "At Vacation FLX we were looking for a way to showcase our vacation rentals. Austin, at Flower City Virtual Tours did an exceptional job showcasing our properties!",
      name: "Lisa N., VacationFLX",
    },
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
    name: "Lisa N., VacationFLX",
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
