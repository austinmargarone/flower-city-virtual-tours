// Generated from the old flowercityvirtualtours.com photo galleries, one entry per listing.
// Photos live in public/listings/<slug>/ (full size) and public/listings/<slug>/thumb/ (grid size).

export type ListingPhoto = { src: string; thumb: string };

/** Cover photo: first ground photo, or the first aerial for drone-only shoots. */
export const coverOf = (l: { photos: ListingPhoto[]; aerials: ListingPhoto[] }) => l.photos[0] ?? l.aerials[0];

export type Listing = {
  slug: string;
  category: "residential" | "commercial";
  title: string;
  kind: string;
  location?: string;
  /** Matterport model id */
  tour?: string;
  caseStudy?: string;
  /** Video walkthrough: mp4 + cover frame */
  video?: { src: string; poster: string; title: string };
  photos: ListingPhoto[];
  aerials: ListingPhoto[];
};

export const listings: Listing[] = [
  {
    "slug": "443-crossfield-road",
    "category": "residential",
    "title": "443 Crossfield Road",
    "kind": "Cape Cod",
    "tour": "S7v82M2yiE1",
    "video": {
      "src": "/listings/443-crossfield-road/walkthrough.mp4",
      "poster": "/listings/443-crossfield-road/walkthrough-poster.jpg",
      "title": "443 Crossfield Road drone fly-through video walkthrough"
    },
    "photos": [
      {
        "src": "/listings/443-crossfield-road/01.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/01.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/02.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/02.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/03.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/03.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/04.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/04.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/05.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/05.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/06.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/06.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/07.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/07.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/08.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/08.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/09.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/09.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/10.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/10.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/11.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/11.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/12.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/12.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/13.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/13.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/14.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/14.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/15.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/15.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/16.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/16.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/17.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/17.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/18.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/18.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/19.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/19.jpg"
      },
      {
        "src": "/listings/443-crossfield-road/20.jpg",
        "thumb": "/listings/443-crossfield-road/thumb/20.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "the-nest-cottage",
    "category": "residential",
    "title": "The Nest Cottage",
    "kind": "Lakeside cottage rental",
    "tour": "UFpAPNqqYGc",
    "photos": [
      {
        "src": "/listings/the-nest-cottage/01.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/01.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/02.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/02.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/03.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/03.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/04.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/04.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/05.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/05.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/06.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/06.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/07.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/07.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/08.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/08.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/09.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/09.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/10.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/10.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/11.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/11.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/12.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/12.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/13.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/13.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/14.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/14.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/15.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/15.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/16.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/16.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/17.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/17.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/18.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/18.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/19.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/19.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/20.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/20.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/21.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/21.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/22.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/22.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/23.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/23.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/24.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/24.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/25.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/25.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/26.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/26.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/27.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/27.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/28.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/28.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/29.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/29.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/30.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/30.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/31.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/31.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/32.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/32.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/33.jpg",
        "thumb": "/listings/the-nest-cottage/thumb/33.jpg"
      }
    ],
    "aerials": [
      {
        "src": "/listings/the-nest-cottage/aerial-01.jpg",
        "thumb": "/listings/the-nest-cottage/aerial-thumb/01.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/aerial-02.jpg",
        "thumb": "/listings/the-nest-cottage/aerial-thumb/02.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/aerial-03.jpg",
        "thumb": "/listings/the-nest-cottage/aerial-thumb/03.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/aerial-04.jpg",
        "thumb": "/listings/the-nest-cottage/aerial-thumb/04.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/aerial-05.jpg",
        "thumb": "/listings/the-nest-cottage/aerial-thumb/05.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/aerial-06.jpg",
        "thumb": "/listings/the-nest-cottage/aerial-thumb/06.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/aerial-07.jpg",
        "thumb": "/listings/the-nest-cottage/aerial-thumb/07.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/aerial-08.jpg",
        "thumb": "/listings/the-nest-cottage/aerial-thumb/08.jpg"
      },
      {
        "src": "/listings/the-nest-cottage/aerial-09.jpg",
        "thumb": "/listings/the-nest-cottage/aerial-thumb/09.jpg"
      }
    ]
  },
  {
    "slug": "76-cobble-creek-road",
    "category": "residential",
    "title": "76 Cobble Creek Road",
    "kind": "Colonial",
    "location": "Victor, NY",
    "photos": [
      {
        "src": "/listings/76-cobble-creek-road/01.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/01.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/02.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/02.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/03.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/03.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/04.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/04.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/05.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/05.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/06.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/06.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/07.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/07.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/08.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/08.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/09.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/09.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/10.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/10.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/11.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/11.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/12.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/12.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/13.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/13.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/14.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/14.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/15.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/15.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/16.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/16.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/17.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/17.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/18.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/18.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/19.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/19.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/20.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/20.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/21.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/21.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/22.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/22.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/23.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/23.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/24.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/24.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/25.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/25.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/26.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/26.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/27.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/27.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/28.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/28.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/29.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/29.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/30.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/30.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/31.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/31.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/32.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/32.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/33.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/33.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/34.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/34.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/35.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/35.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/36.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/36.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/37.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/37.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/38.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/38.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/39.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/39.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/40.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/40.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/41.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/41.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/42.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/42.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/43.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/43.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/44.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/44.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/45.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/45.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/46.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/46.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/47.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/47.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/48.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/48.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/49.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/49.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/50.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/50.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/51.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/51.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/52.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/52.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/53.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/53.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/54.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/54.jpg"
      },
      {
        "src": "/listings/76-cobble-creek-road/55.jpg",
        "thumb": "/listings/76-cobble-creek-road/thumb/55.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "434-thomas-ave",
    "category": "residential",
    "title": "434 Thomas Ave",
    "kind": "Two-story home",
    "location": "Rochester, NY",
    "photos": [
      {
        "src": "/listings/434-thomas-ave/01.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/01.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/02.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/02.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/03.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/03.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/04.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/04.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/05.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/05.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/06.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/06.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/07.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/07.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/08.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/08.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/09.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/09.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/10.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/10.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/11.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/11.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/12.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/12.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/13.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/13.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/14.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/14.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/15.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/15.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/16.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/16.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/17.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/17.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/18.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/18.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/19.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/19.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/20.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/20.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/21.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/21.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/22.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/22.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/23.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/23.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/24.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/24.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/25.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/25.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/26.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/26.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/27.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/27.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/28.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/28.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/29.jpg",
        "thumb": "/listings/434-thomas-ave/thumb/29.jpg"
      }
    ],
    "aerials": [
      {
        "src": "/listings/434-thomas-ave/aerial-01.jpg",
        "thumb": "/listings/434-thomas-ave/aerial-thumb/01.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/aerial-02.jpg",
        "thumb": "/listings/434-thomas-ave/aerial-thumb/02.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/aerial-03.jpg",
        "thumb": "/listings/434-thomas-ave/aerial-thumb/03.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/aerial-04.jpg",
        "thumb": "/listings/434-thomas-ave/aerial-thumb/04.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/aerial-05.jpg",
        "thumb": "/listings/434-thomas-ave/aerial-thumb/05.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/aerial-06.jpg",
        "thumb": "/listings/434-thomas-ave/aerial-thumb/06.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/aerial-07.jpg",
        "thumb": "/listings/434-thomas-ave/aerial-thumb/07.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/aerial-08.jpg",
        "thumb": "/listings/434-thomas-ave/aerial-thumb/08.jpg"
      },
      {
        "src": "/listings/434-thomas-ave/aerial-09.jpg",
        "thumb": "/listings/434-thomas-ave/aerial-thumb/09.jpg"
      }
    ]
  },
  {
    "slug": "1655-monroe-avenue",
    "category": "residential",
    "title": "1655 Monroe Avenue",
    "kind": "Country property with barn",
    "location": "Rochester, NY",
    "photos": [
      {
        "src": "/listings/1655-monroe-avenue/01.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/01.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/02.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/02.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/03.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/03.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/04.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/04.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/05.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/05.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/06.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/06.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/07.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/07.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/08.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/08.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/09.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/09.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/10.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/10.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/11.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/11.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/12.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/12.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/13.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/13.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/14.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/14.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/15.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/15.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/16.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/16.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/17.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/17.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/18.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/18.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/19.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/19.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/20.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/20.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/21.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/21.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/22.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/22.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/23.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/23.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/24.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/24.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/25.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/25.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/26.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/26.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/27.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/27.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/28.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/28.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/29.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/29.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/30.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/30.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/31.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/31.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/32.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/32.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/33.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/33.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/34.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/34.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/35.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/35.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/36.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/36.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/37.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/37.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/38.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/38.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/39.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/39.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/40.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/40.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/41.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/41.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/42.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/42.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/43.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/43.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/44.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/44.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/45.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/45.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/46.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/46.jpg"
      },
      {
        "src": "/listings/1655-monroe-avenue/47.jpg",
        "thumb": "/listings/1655-monroe-avenue/thumb/47.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "126-carter-road",
    "category": "residential",
    "title": "126 Carter Road",
    "kind": "Home on acreage",
    "location": "Geneva, NY",
    "photos": [
      {
        "src": "/listings/126-carter-road/01.jpg",
        "thumb": "/listings/126-carter-road/thumb/01.jpg"
      },
      {
        "src": "/listings/126-carter-road/02.jpg",
        "thumb": "/listings/126-carter-road/thumb/02.jpg"
      },
      {
        "src": "/listings/126-carter-road/03.jpg",
        "thumb": "/listings/126-carter-road/thumb/03.jpg"
      },
      {
        "src": "/listings/126-carter-road/04.jpg",
        "thumb": "/listings/126-carter-road/thumb/04.jpg"
      },
      {
        "src": "/listings/126-carter-road/05.jpg",
        "thumb": "/listings/126-carter-road/thumb/05.jpg"
      },
      {
        "src": "/listings/126-carter-road/06.jpg",
        "thumb": "/listings/126-carter-road/thumb/06.jpg"
      },
      {
        "src": "/listings/126-carter-road/07.jpg",
        "thumb": "/listings/126-carter-road/thumb/07.jpg"
      },
      {
        "src": "/listings/126-carter-road/08.jpg",
        "thumb": "/listings/126-carter-road/thumb/08.jpg"
      },
      {
        "src": "/listings/126-carter-road/09.jpg",
        "thumb": "/listings/126-carter-road/thumb/09.jpg"
      },
      {
        "src": "/listings/126-carter-road/10.jpg",
        "thumb": "/listings/126-carter-road/thumb/10.jpg"
      },
      {
        "src": "/listings/126-carter-road/11.jpg",
        "thumb": "/listings/126-carter-road/thumb/11.jpg"
      },
      {
        "src": "/listings/126-carter-road/12.jpg",
        "thumb": "/listings/126-carter-road/thumb/12.jpg"
      },
      {
        "src": "/listings/126-carter-road/13.jpg",
        "thumb": "/listings/126-carter-road/thumb/13.jpg"
      },
      {
        "src": "/listings/126-carter-road/14.jpg",
        "thumb": "/listings/126-carter-road/thumb/14.jpg"
      },
      {
        "src": "/listings/126-carter-road/15.jpg",
        "thumb": "/listings/126-carter-road/thumb/15.jpg"
      },
      {
        "src": "/listings/126-carter-road/16.jpg",
        "thumb": "/listings/126-carter-road/thumb/16.jpg"
      },
      {
        "src": "/listings/126-carter-road/17.jpg",
        "thumb": "/listings/126-carter-road/thumb/17.jpg"
      },
      {
        "src": "/listings/126-carter-road/18.jpg",
        "thumb": "/listings/126-carter-road/thumb/18.jpg"
      },
      {
        "src": "/listings/126-carter-road/19.jpg",
        "thumb": "/listings/126-carter-road/thumb/19.jpg"
      },
      {
        "src": "/listings/126-carter-road/20.jpg",
        "thumb": "/listings/126-carter-road/thumb/20.jpg"
      },
      {
        "src": "/listings/126-carter-road/21.jpg",
        "thumb": "/listings/126-carter-road/thumb/21.jpg"
      },
      {
        "src": "/listings/126-carter-road/22.jpg",
        "thumb": "/listings/126-carter-road/thumb/22.jpg"
      },
      {
        "src": "/listings/126-carter-road/23.jpg",
        "thumb": "/listings/126-carter-road/thumb/23.jpg"
      },
      {
        "src": "/listings/126-carter-road/24.jpg",
        "thumb": "/listings/126-carter-road/thumb/24.jpg"
      },
      {
        "src": "/listings/126-carter-road/25.jpg",
        "thumb": "/listings/126-carter-road/thumb/25.jpg"
      }
    ],
    "aerials": [
      {
        "src": "/listings/126-carter-road/aerial-01.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/01.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-02.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/02.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-03.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/03.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-04.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/04.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-05.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/05.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-06.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/06.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-07.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/07.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-08.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/08.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-09.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/09.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-10.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/10.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-11.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/11.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-12.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/12.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-13.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/13.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-14.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/14.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-15.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/15.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-16.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/16.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-17.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/17.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-18.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/18.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-19.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/19.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-20.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/20.jpg"
      },
      {
        "src": "/listings/126-carter-road/aerial-21.jpg",
        "thumb": "/listings/126-carter-road/aerial-thumb/21.jpg"
      }
    ]
  },
  {
    "slug": "109-brush-creek-drive",
    "category": "residential",
    "title": "109 Brush Creek Drive",
    "kind": "Two-story home",
    "location": "Rochester, NY",
    "photos": [
      {
        "src": "/listings/109-brush-creek-drive/01.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/01.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/02.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/02.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/03.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/03.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/04.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/04.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/05.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/05.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/06.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/06.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/07.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/07.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/08.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/08.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/09.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/09.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/10.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/10.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/11.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/11.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/12.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/12.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/13.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/13.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/14.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/14.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/15.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/15.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/16.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/16.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/17.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/17.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/18.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/18.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/19.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/19.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/20.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/20.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/21.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/21.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/22.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/22.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/23.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/23.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/24.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/24.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/25.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/25.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/26.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/26.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/27.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/27.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/28.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/28.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/29.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/29.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/30.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/30.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/31.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/31.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/32.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/32.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/33.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/33.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/34.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/34.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/35.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/35.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/36.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/36.jpg"
      },
      {
        "src": "/listings/109-brush-creek-drive/37.jpg",
        "thumb": "/listings/109-brush-creek-drive/thumb/37.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "6427-claremont-way",
    "category": "residential",
    "title": "6427 Claremont Way",
    "kind": "New construction",
    "location": "Victor, NY",
    "photos": [
      {
        "src": "/listings/6427-claremont-way/01.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/01.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/02.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/02.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/03.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/03.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/04.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/04.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/05.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/05.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/06.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/06.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/07.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/07.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/08.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/08.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/09.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/09.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/10.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/10.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/11.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/11.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/12.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/12.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/13.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/13.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/14.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/14.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/15.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/15.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/16.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/16.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/17.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/17.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/18.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/18.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/19.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/19.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/20.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/20.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/21.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/21.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/22.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/22.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/23.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/23.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/24.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/24.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/25.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/25.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/26.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/26.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/27.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/27.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/28.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/28.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/29.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/29.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/30.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/30.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/31.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/31.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/32.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/32.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/33.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/33.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/34.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/34.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/35.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/35.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/36.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/36.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/37.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/37.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/38.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/38.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/39.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/39.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/40.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/40.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/41.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/41.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/42.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/42.jpg"
      },
      {
        "src": "/listings/6427-claremont-way/43.jpg",
        "thumb": "/listings/6427-claremont-way/thumb/43.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "76-doncaster-trail",
    "category": "residential",
    "title": "76 Doncaster Trail",
    "kind": "Colonial",
    "location": "West Henrietta, NY",
    "photos": [
      {
        "src": "/listings/76-doncaster-trail/01.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/01.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/02.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/02.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/03.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/03.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/04.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/04.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/05.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/05.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/06.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/06.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/07.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/07.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/08.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/08.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/09.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/09.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/10.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/10.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/11.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/11.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/12.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/12.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/13.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/13.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/14.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/14.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/15.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/15.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/16.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/16.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/17.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/17.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/18.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/18.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/19.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/19.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/20.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/20.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/21.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/21.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/22.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/22.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/23.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/23.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/24.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/24.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/25.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/25.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/26.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/26.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/27.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/27.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/28.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/28.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/29.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/29.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/30.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/30.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/31.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/31.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/32.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/32.jpg"
      },
      {
        "src": "/listings/76-doncaster-trail/33.jpg",
        "thumb": "/listings/76-doncaster-trail/thumb/33.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "907-goodman-street",
    "category": "residential",
    "title": "907 Goodman Street",
    "kind": "Two-story home",
    "location": "Rochester, NY",
    "photos": [
      {
        "src": "/listings/907-goodman-street/01.jpg",
        "thumb": "/listings/907-goodman-street/thumb/01.jpg"
      },
      {
        "src": "/listings/907-goodman-street/02.jpg",
        "thumb": "/listings/907-goodman-street/thumb/02.jpg"
      },
      {
        "src": "/listings/907-goodman-street/03.jpg",
        "thumb": "/listings/907-goodman-street/thumb/03.jpg"
      },
      {
        "src": "/listings/907-goodman-street/04.jpg",
        "thumb": "/listings/907-goodman-street/thumb/04.jpg"
      },
      {
        "src": "/listings/907-goodman-street/05.jpg",
        "thumb": "/listings/907-goodman-street/thumb/05.jpg"
      },
      {
        "src": "/listings/907-goodman-street/06.jpg",
        "thumb": "/listings/907-goodman-street/thumb/06.jpg"
      },
      {
        "src": "/listings/907-goodman-street/07.jpg",
        "thumb": "/listings/907-goodman-street/thumb/07.jpg"
      },
      {
        "src": "/listings/907-goodman-street/08.jpg",
        "thumb": "/listings/907-goodman-street/thumb/08.jpg"
      },
      {
        "src": "/listings/907-goodman-street/09.jpg",
        "thumb": "/listings/907-goodman-street/thumb/09.jpg"
      },
      {
        "src": "/listings/907-goodman-street/10.jpg",
        "thumb": "/listings/907-goodman-street/thumb/10.jpg"
      },
      {
        "src": "/listings/907-goodman-street/11.jpg",
        "thumb": "/listings/907-goodman-street/thumb/11.jpg"
      },
      {
        "src": "/listings/907-goodman-street/12.jpg",
        "thumb": "/listings/907-goodman-street/thumb/12.jpg"
      },
      {
        "src": "/listings/907-goodman-street/13.jpg",
        "thumb": "/listings/907-goodman-street/thumb/13.jpg"
      },
      {
        "src": "/listings/907-goodman-street/14.jpg",
        "thumb": "/listings/907-goodman-street/thumb/14.jpg"
      },
      {
        "src": "/listings/907-goodman-street/15.jpg",
        "thumb": "/listings/907-goodman-street/thumb/15.jpg"
      },
      {
        "src": "/listings/907-goodman-street/16.jpg",
        "thumb": "/listings/907-goodman-street/thumb/16.jpg"
      },
      {
        "src": "/listings/907-goodman-street/17.jpg",
        "thumb": "/listings/907-goodman-street/thumb/17.jpg"
      },
      {
        "src": "/listings/907-goodman-street/18.jpg",
        "thumb": "/listings/907-goodman-street/thumb/18.jpg"
      },
      {
        "src": "/listings/907-goodman-street/19.jpg",
        "thumb": "/listings/907-goodman-street/thumb/19.jpg"
      },
      {
        "src": "/listings/907-goodman-street/20.jpg",
        "thumb": "/listings/907-goodman-street/thumb/20.jpg"
      },
      {
        "src": "/listings/907-goodman-street/21.jpg",
        "thumb": "/listings/907-goodman-street/thumb/21.jpg"
      },
      {
        "src": "/listings/907-goodman-street/22.jpg",
        "thumb": "/listings/907-goodman-street/thumb/22.jpg"
      },
      {
        "src": "/listings/907-goodman-street/23.jpg",
        "thumb": "/listings/907-goodman-street/thumb/23.jpg"
      },
      {
        "src": "/listings/907-goodman-street/24.jpg",
        "thumb": "/listings/907-goodman-street/thumb/24.jpg"
      },
      {
        "src": "/listings/907-goodman-street/25.jpg",
        "thumb": "/listings/907-goodman-street/thumb/25.jpg"
      },
      {
        "src": "/listings/907-goodman-street/26.jpg",
        "thumb": "/listings/907-goodman-street/thumb/26.jpg"
      },
      {
        "src": "/listings/907-goodman-street/27.jpg",
        "thumb": "/listings/907-goodman-street/thumb/27.jpg"
      },
      {
        "src": "/listings/907-goodman-street/28.jpg",
        "thumb": "/listings/907-goodman-street/thumb/28.jpg"
      },
      {
        "src": "/listings/907-goodman-street/29.jpg",
        "thumb": "/listings/907-goodman-street/thumb/29.jpg"
      },
      {
        "src": "/listings/907-goodman-street/30.jpg",
        "thumb": "/listings/907-goodman-street/thumb/30.jpg"
      },
      {
        "src": "/listings/907-goodman-street/31.jpg",
        "thumb": "/listings/907-goodman-street/thumb/31.jpg"
      },
      {
        "src": "/listings/907-goodman-street/32.jpg",
        "thumb": "/listings/907-goodman-street/thumb/32.jpg"
      },
      {
        "src": "/listings/907-goodman-street/33.jpg",
        "thumb": "/listings/907-goodman-street/thumb/33.jpg"
      }
    ],
    "aerials": [
      {
        "src": "/listings/907-goodman-street/aerial-01.jpg",
        "thumb": "/listings/907-goodman-street/aerial-thumb/01.jpg"
      }
    ]
  },
  {
    "slug": "233-round-pond-lane",
    "category": "residential",
    "title": "233 Round Pond Lane",
    "kind": "Colonial",
    "location": "Rochester, NY",
    "photos": [
      {
        "src": "/listings/233-round-pond-lane/01.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/01.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/02.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/02.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/03.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/03.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/04.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/04.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/05.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/05.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/06.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/06.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/07.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/07.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/08.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/08.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/09.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/09.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/10.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/10.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/11.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/11.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/12.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/12.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/13.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/13.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/14.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/14.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/15.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/15.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/16.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/16.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/17.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/17.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/18.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/18.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/19.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/19.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/20.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/20.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/21.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/21.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/22.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/22.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/23.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/23.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/24.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/24.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/25.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/25.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/26.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/26.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/27.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/27.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/28.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/28.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/29.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/29.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/30.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/30.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/31.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/31.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/32.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/32.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/33.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/33.jpg"
      },
      {
        "src": "/listings/233-round-pond-lane/34.jpg",
        "thumb": "/listings/233-round-pond-lane/thumb/34.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "19-sandpiper-hill",
    "category": "residential",
    "title": "19 Sandpiper Hl",
    "kind": "Two-story home",
    "location": "Fairport, NY",
    "photos": [
      {
        "src": "/listings/19-sandpiper-hill/01.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/01.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/02.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/02.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/03.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/03.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/04.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/04.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/05.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/05.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/06.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/06.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/07.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/07.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/08.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/08.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/09.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/09.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/10.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/10.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/11.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/11.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/12.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/12.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/13.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/13.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/14.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/14.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/15.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/15.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/16.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/16.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/17.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/17.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/18.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/18.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/19.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/19.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/20.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/20.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/21.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/21.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/22.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/22.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/23.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/23.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/24.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/24.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/25.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/25.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/26.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/26.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/27.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/27.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/28.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/28.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/29.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/29.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/30.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/30.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/31.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/31.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/32.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/32.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/33.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/33.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/34.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/34.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/35.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/35.jpg"
      },
      {
        "src": "/listings/19-sandpiper-hill/36.jpg",
        "thumb": "/listings/19-sandpiper-hill/thumb/36.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "81-castle-grove-drive",
    "category": "residential",
    "title": "81 Castle Grove Drive",
    "kind": "Split-level with pool",
    "location": "Rochester, NY",
    "photos": [
      {
        "src": "/listings/81-castle-grove-drive/01.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/01.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/02.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/02.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/03.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/03.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/04.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/04.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/05.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/05.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/06.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/06.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/07.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/07.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/08.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/08.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/09.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/09.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/10.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/10.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/11.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/11.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/12.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/12.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/13.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/13.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/14.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/14.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/15.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/15.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/16.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/16.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/17.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/17.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/18.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/18.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/19.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/19.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/20.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/20.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/21.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/21.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/22.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/22.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/23.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/23.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/24.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/24.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/25.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/25.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/26.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/26.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/27.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/27.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/28.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/28.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/29.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/29.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/30.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/30.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/31.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/31.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/32.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/32.jpg"
      },
      {
        "src": "/listings/81-castle-grove-drive/33.jpg",
        "thumb": "/listings/81-castle-grove-drive/thumb/33.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "7639-west-ridge-road",
    "category": "residential",
    "title": "7639 W Ridge Road",
    "kind": "Single-family home",
    "location": "Brockport, NY",
    "photos": [
      {
        "src": "/listings/7639-west-ridge-road/01.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/01.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/02.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/02.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/03.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/03.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/04.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/04.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/05.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/05.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/06.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/06.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/07.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/07.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/08.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/08.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/09.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/09.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/10.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/10.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/11.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/11.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/12.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/12.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/13.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/13.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/14.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/14.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/15.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/15.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/16.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/16.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/17.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/17.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/18.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/18.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/19.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/19.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/20.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/20.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/21.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/21.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/22.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/22.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/23.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/23.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/24.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/24.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/25.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/25.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/26.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/26.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/27.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/27.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/28.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/28.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/29.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/29.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/30.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/30.jpg"
      },
      {
        "src": "/listings/7639-west-ridge-road/31.jpg",
        "thumb": "/listings/7639-west-ridge-road/thumb/31.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "1362-robin-hood-lane",
    "category": "residential",
    "title": "1362 Robin Hood Lane",
    "kind": "Home with pool",
    "location": "Webster, NY",
    "photos": [
      {
        "src": "/listings/1362-robin-hood-lane/01.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/01.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/02.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/02.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/03.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/03.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/04.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/04.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/05.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/05.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/06.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/06.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/07.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/07.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/08.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/08.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/09.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/09.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/10.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/10.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/11.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/11.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/12.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/12.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/13.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/13.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/14.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/14.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/15.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/15.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/16.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/16.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/17.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/17.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/18.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/18.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/19.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/19.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/20.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/20.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/21.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/21.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/22.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/22.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/23.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/23.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/24.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/24.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/25.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/25.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/26.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/26.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/27.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/27.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/28.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/28.jpg"
      },
      {
        "src": "/listings/1362-robin-hood-lane/29.jpg",
        "thumb": "/listings/1362-robin-hood-lane/thumb/29.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "836-n-aurora-street",
    "category": "residential",
    "title": "836 N Aurora Street",
    "kind": "Single-family home",
    "location": "Ithaca, NY",
    "photos": [
      {
        "src": "/listings/836-n-aurora-street/01.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/01.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/02.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/02.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/03.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/03.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/04.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/04.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/05.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/05.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/06.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/06.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/07.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/07.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/08.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/08.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/09.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/09.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/10.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/10.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/11.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/11.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/12.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/12.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/13.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/13.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/14.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/14.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/15.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/15.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/16.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/16.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/17.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/17.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/18.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/18.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/19.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/19.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/20.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/20.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/21.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/21.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/22.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/22.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/23.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/23.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/24.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/24.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/25.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/25.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/26.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/26.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/27.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/27.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/28.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/28.jpg"
      },
      {
        "src": "/listings/836-n-aurora-street/29.jpg",
        "thumb": "/listings/836-n-aurora-street/thumb/29.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "108-aldine-street",
    "category": "residential",
    "title": "108 Aldine Street",
    "kind": "Two-story home",
    "location": "Rochester, NY",
    "photos": [
      {
        "src": "/listings/108-aldine-street/01.jpg",
        "thumb": "/listings/108-aldine-street/thumb/01.jpg"
      },
      {
        "src": "/listings/108-aldine-street/02.jpg",
        "thumb": "/listings/108-aldine-street/thumb/02.jpg"
      },
      {
        "src": "/listings/108-aldine-street/03.jpg",
        "thumb": "/listings/108-aldine-street/thumb/03.jpg"
      },
      {
        "src": "/listings/108-aldine-street/04.jpg",
        "thumb": "/listings/108-aldine-street/thumb/04.jpg"
      },
      {
        "src": "/listings/108-aldine-street/05.jpg",
        "thumb": "/listings/108-aldine-street/thumb/05.jpg"
      },
      {
        "src": "/listings/108-aldine-street/06.jpg",
        "thumb": "/listings/108-aldine-street/thumb/06.jpg"
      },
      {
        "src": "/listings/108-aldine-street/07.jpg",
        "thumb": "/listings/108-aldine-street/thumb/07.jpg"
      },
      {
        "src": "/listings/108-aldine-street/08.jpg",
        "thumb": "/listings/108-aldine-street/thumb/08.jpg"
      },
      {
        "src": "/listings/108-aldine-street/09.jpg",
        "thumb": "/listings/108-aldine-street/thumb/09.jpg"
      },
      {
        "src": "/listings/108-aldine-street/10.jpg",
        "thumb": "/listings/108-aldine-street/thumb/10.jpg"
      },
      {
        "src": "/listings/108-aldine-street/11.jpg",
        "thumb": "/listings/108-aldine-street/thumb/11.jpg"
      },
      {
        "src": "/listings/108-aldine-street/12.jpg",
        "thumb": "/listings/108-aldine-street/thumb/12.jpg"
      },
      {
        "src": "/listings/108-aldine-street/13.jpg",
        "thumb": "/listings/108-aldine-street/thumb/13.jpg"
      },
      {
        "src": "/listings/108-aldine-street/14.jpg",
        "thumb": "/listings/108-aldine-street/thumb/14.jpg"
      },
      {
        "src": "/listings/108-aldine-street/15.jpg",
        "thumb": "/listings/108-aldine-street/thumb/15.jpg"
      },
      {
        "src": "/listings/108-aldine-street/16.jpg",
        "thumb": "/listings/108-aldine-street/thumb/16.jpg"
      },
      {
        "src": "/listings/108-aldine-street/17.jpg",
        "thumb": "/listings/108-aldine-street/thumb/17.jpg"
      },
      {
        "src": "/listings/108-aldine-street/18.jpg",
        "thumb": "/listings/108-aldine-street/thumb/18.jpg"
      },
      {
        "src": "/listings/108-aldine-street/19.jpg",
        "thumb": "/listings/108-aldine-street/thumb/19.jpg"
      },
      {
        "src": "/listings/108-aldine-street/20.jpg",
        "thumb": "/listings/108-aldine-street/thumb/20.jpg"
      },
      {
        "src": "/listings/108-aldine-street/21.jpg",
        "thumb": "/listings/108-aldine-street/thumb/21.jpg"
      },
      {
        "src": "/listings/108-aldine-street/22.jpg",
        "thumb": "/listings/108-aldine-street/thumb/22.jpg"
      },
      {
        "src": "/listings/108-aldine-street/23.jpg",
        "thumb": "/listings/108-aldine-street/thumb/23.jpg"
      },
      {
        "src": "/listings/108-aldine-street/24.jpg",
        "thumb": "/listings/108-aldine-street/thumb/24.jpg"
      },
      {
        "src": "/listings/108-aldine-street/25.jpg",
        "thumb": "/listings/108-aldine-street/thumb/25.jpg"
      },
      {
        "src": "/listings/108-aldine-street/26.jpg",
        "thumb": "/listings/108-aldine-street/thumb/26.jpg"
      },
      {
        "src": "/listings/108-aldine-street/27.jpg",
        "thumb": "/listings/108-aldine-street/thumb/27.jpg"
      },
      {
        "src": "/listings/108-aldine-street/28.jpg",
        "thumb": "/listings/108-aldine-street/thumb/28.jpg"
      },
      {
        "src": "/listings/108-aldine-street/29.jpg",
        "thumb": "/listings/108-aldine-street/thumb/29.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "2161-edwards-road",
    "category": "residential",
    "title": "2161 Edwards Road",
    "kind": "Farmhouse on acreage",
    "location": "Waterloo, NY",
    "photos": [
      {
        "src": "/listings/2161-edwards-road/01.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/01.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/02.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/02.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/03.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/03.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/04.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/04.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/05.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/05.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/06.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/06.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/07.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/07.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/08.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/08.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/09.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/09.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/10.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/10.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/11.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/11.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/12.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/12.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/13.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/13.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/14.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/14.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/15.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/15.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/16.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/16.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/17.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/17.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/18.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/18.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/19.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/19.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/20.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/20.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/21.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/21.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/22.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/22.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/23.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/23.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/24.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/24.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/25.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/25.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/26.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/26.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/27.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/27.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/28.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/28.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/29.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/29.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/30.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/30.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/31.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/31.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/32.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/32.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/33.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/33.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/34.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/34.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/35.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/35.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/36.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/36.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/37.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/37.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/38.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/38.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/39.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/39.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/40.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/40.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/41.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/41.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/42.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/42.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/43.jpg",
        "thumb": "/listings/2161-edwards-road/thumb/43.jpg"
      }
    ],
    "aerials": [
      {
        "src": "/listings/2161-edwards-road/aerial-01.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/01.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-02.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/02.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-03.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/03.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-04.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/04.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-05.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/05.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-06.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/06.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-07.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/07.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-08.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/08.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-09.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/09.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-10.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/10.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-11.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/11.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-12.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/12.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-13.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/13.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-14.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/14.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-15.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/15.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-16.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/16.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-17.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/17.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-18.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/18.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-19.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/19.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-20.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/20.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-21.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/21.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-22.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/22.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-23.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/23.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-24.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/24.jpg"
      },
      {
        "src": "/listings/2161-edwards-road/aerial-25.jpg",
        "thumb": "/listings/2161-edwards-road/aerial-thumb/25.jpg"
      }
    ]
  },
  {
    "slug": "7-sherrill-street",
    "category": "residential",
    "title": "7 Sherrill Street",
    "kind": "Victorian home",
    "location": "Geneva, NY",
    "photos": [
      {
        "src": "/listings/7-sherrill-street/01.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/01.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/02.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/02.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/03.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/03.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/04.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/04.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/05.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/05.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/06.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/06.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/07.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/07.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/08.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/08.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/09.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/09.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/10.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/10.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/11.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/11.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/12.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/12.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/13.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/13.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/14.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/14.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/15.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/15.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/16.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/16.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/17.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/17.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/18.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/18.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/19.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/19.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/20.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/20.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/21.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/21.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/22.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/22.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/23.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/23.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/24.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/24.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/25.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/25.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/26.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/26.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/27.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/27.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/28.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/28.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/29.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/29.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/30.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/30.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/31.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/31.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/32.jpg",
        "thumb": "/listings/7-sherrill-street/thumb/32.jpg"
      }
    ],
    "aerials": [
      {
        "src": "/listings/7-sherrill-street/aerial-01.jpg",
        "thumb": "/listings/7-sherrill-street/aerial-thumb/01.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/aerial-02.jpg",
        "thumb": "/listings/7-sherrill-street/aerial-thumb/02.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/aerial-03.jpg",
        "thumb": "/listings/7-sherrill-street/aerial-thumb/03.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/aerial-04.jpg",
        "thumb": "/listings/7-sherrill-street/aerial-thumb/04.jpg"
      },
      {
        "src": "/listings/7-sherrill-street/aerial-05.jpg",
        "thumb": "/listings/7-sherrill-street/aerial-thumb/05.jpg"
      }
    ]
  },
  {
    "slug": "10-sweet-acres-drive",
    "category": "residential",
    "title": "10 Sweet Acres Drive",
    "kind": "Colonial",
    "location": "Rochester, NY",
    "photos": [
      {
        "src": "/listings/10-sweet-acres-drive/01.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/01.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/02.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/02.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/03.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/03.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/04.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/04.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/05.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/05.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/06.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/06.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/07.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/07.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/08.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/08.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/09.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/09.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/10.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/10.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/11.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/11.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/12.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/12.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/13.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/13.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/14.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/14.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/15.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/15.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/16.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/16.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/17.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/17.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/18.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/18.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/19.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/19.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/20.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/20.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/21.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/21.jpg"
      },
      {
        "src": "/listings/10-sweet-acres-drive/22.jpg",
        "thumb": "/listings/10-sweet-acres-drive/thumb/22.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "14-sweet-acres-drive",
    "category": "residential",
    "title": "14 Sweet Acres Drive",
    "kind": "Colonial with pool",
    "location": "Rochester, NY",
    "photos": [
      {
        "src": "/listings/14-sweet-acres-drive/01.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/01.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/02.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/02.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/03.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/03.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/04.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/04.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/05.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/05.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/06.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/06.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/07.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/07.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/08.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/08.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/09.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/09.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/10.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/10.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/11.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/11.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/12.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/12.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/13.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/13.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/14.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/14.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/15.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/15.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/16.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/16.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/17.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/17.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/18.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/18.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/19.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/19.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/20.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/20.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/21.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/21.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/22.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/22.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/23.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/23.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/24.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/24.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/25.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/25.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/26.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/26.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/27.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/27.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/28.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/28.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/29.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/29.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/30.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/30.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/31.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/31.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/32.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/32.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/33.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/33.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/34.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/34.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/35.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/35.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/36.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/36.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/37.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/37.jpg"
      },
      {
        "src": "/listings/14-sweet-acres-drive/38.jpg",
        "thumb": "/listings/14-sweet-acres-drive/thumb/38.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "23-staglen-drive",
    "category": "residential",
    "title": "23 Staglen Drive",
    "kind": "Raised ranch",
    "location": "Henrietta, NY",
    "photos": [
      {
        "src": "/listings/23-staglen-drive/01.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/01.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/02.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/02.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/03.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/03.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/04.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/04.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/05.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/05.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/06.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/06.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/07.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/07.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/08.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/08.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/09.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/09.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/10.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/10.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/11.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/11.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/12.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/12.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/13.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/13.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/14.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/14.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/15.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/15.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/16.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/16.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/17.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/17.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/18.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/18.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/19.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/19.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/20.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/20.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/21.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/21.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/22.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/22.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/23.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/23.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/24.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/24.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/25.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/25.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/26.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/26.jpg"
      },
      {
        "src": "/listings/23-staglen-drive/27.jpg",
        "thumb": "/listings/23-staglen-drive/thumb/27.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "12-goldenhill-lane",
    "category": "residential",
    "title": "12 Goldenhill Lane",
    "kind": "Single-family home",
    "location": "Brockport, NY",
    "photos": [
      {
        "src": "/listings/12-goldenhill-lane/01.jpg",
        "thumb": "/listings/12-goldenhill-lane/thumb/01.jpg"
      },
      {
        "src": "/listings/12-goldenhill-lane/02.jpg",
        "thumb": "/listings/12-goldenhill-lane/thumb/02.jpg"
      },
      {
        "src": "/listings/12-goldenhill-lane/03.jpg",
        "thumb": "/listings/12-goldenhill-lane/thumb/03.jpg"
      },
      {
        "src": "/listings/12-goldenhill-lane/04.jpg",
        "thumb": "/listings/12-goldenhill-lane/thumb/04.jpg"
      },
      {
        "src": "/listings/12-goldenhill-lane/05.jpg",
        "thumb": "/listings/12-goldenhill-lane/thumb/05.jpg"
      },
      {
        "src": "/listings/12-goldenhill-lane/06.jpg",
        "thumb": "/listings/12-goldenhill-lane/thumb/06.jpg"
      },
      {
        "src": "/listings/12-goldenhill-lane/07.jpg",
        "thumb": "/listings/12-goldenhill-lane/thumb/07.jpg"
      },
      {
        "src": "/listings/12-goldenhill-lane/08.jpg",
        "thumb": "/listings/12-goldenhill-lane/thumb/08.jpg"
      },
      {
        "src": "/listings/12-goldenhill-lane/09.jpg",
        "thumb": "/listings/12-goldenhill-lane/thumb/09.jpg"
      },
      {
        "src": "/listings/12-goldenhill-lane/10.jpg",
        "thumb": "/listings/12-goldenhill-lane/thumb/10.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "18-harvard-street",
    "category": "commercial",
    "title": "18 Harvard Street",
    "kind": "Office building",
    "photos": [
      {
        "src": "/listings/18-harvard-street/01.jpg",
        "thumb": "/listings/18-harvard-street/thumb/01.jpg"
      },
      {
        "src": "/listings/18-harvard-street/02.jpg",
        "thumb": "/listings/18-harvard-street/thumb/02.jpg"
      },
      {
        "src": "/listings/18-harvard-street/03.jpg",
        "thumb": "/listings/18-harvard-street/thumb/03.jpg"
      },
      {
        "src": "/listings/18-harvard-street/04.jpg",
        "thumb": "/listings/18-harvard-street/thumb/04.jpg"
      },
      {
        "src": "/listings/18-harvard-street/05.jpg",
        "thumb": "/listings/18-harvard-street/thumb/05.jpg"
      },
      {
        "src": "/listings/18-harvard-street/06.jpg",
        "thumb": "/listings/18-harvard-street/thumb/06.jpg"
      },
      {
        "src": "/listings/18-harvard-street/07.jpg",
        "thumb": "/listings/18-harvard-street/thumb/07.jpg"
      },
      {
        "src": "/listings/18-harvard-street/08.jpg",
        "thumb": "/listings/18-harvard-street/thumb/08.jpg"
      },
      {
        "src": "/listings/18-harvard-street/09.jpg",
        "thumb": "/listings/18-harvard-street/thumb/09.jpg"
      },
      {
        "src": "/listings/18-harvard-street/10.jpg",
        "thumb": "/listings/18-harvard-street/thumb/10.jpg"
      },
      {
        "src": "/listings/18-harvard-street/11.jpg",
        "thumb": "/listings/18-harvard-street/thumb/11.jpg"
      },
      {
        "src": "/listings/18-harvard-street/12.jpg",
        "thumb": "/listings/18-harvard-street/thumb/12.jpg"
      },
      {
        "src": "/listings/18-harvard-street/13.jpg",
        "thumb": "/listings/18-harvard-street/thumb/13.jpg"
      },
      {
        "src": "/listings/18-harvard-street/14.jpg",
        "thumb": "/listings/18-harvard-street/thumb/14.jpg"
      },
      {
        "src": "/listings/18-harvard-street/15.jpg",
        "thumb": "/listings/18-harvard-street/thumb/15.jpg"
      },
      {
        "src": "/listings/18-harvard-street/16.jpg",
        "thumb": "/listings/18-harvard-street/thumb/16.jpg"
      },
      {
        "src": "/listings/18-harvard-street/17.jpg",
        "thumb": "/listings/18-harvard-street/thumb/17.jpg"
      },
      {
        "src": "/listings/18-harvard-street/18.jpg",
        "thumb": "/listings/18-harvard-street/thumb/18.jpg"
      },
      {
        "src": "/listings/18-harvard-street/19.jpg",
        "thumb": "/listings/18-harvard-street/thumb/19.jpg"
      }
    ],
    "aerials": [
      {
        "src": "/listings/18-harvard-street/aerial-01.jpg",
        "thumb": "/listings/18-harvard-street/aerial-thumb/01.jpg"
      },
      {
        "src": "/listings/18-harvard-street/aerial-02.jpg",
        "thumb": "/listings/18-harvard-street/aerial-thumb/02.jpg"
      },
      {
        "src": "/listings/18-harvard-street/aerial-03.jpg",
        "thumb": "/listings/18-harvard-street/aerial-thumb/03.jpg"
      },
      {
        "src": "/listings/18-harvard-street/aerial-04.jpg",
        "thumb": "/listings/18-harvard-street/aerial-thumb/04.jpg"
      },
      {
        "src": "/listings/18-harvard-street/aerial-05.jpg",
        "thumb": "/listings/18-harvard-street/aerial-thumb/05.jpg"
      },
      {
        "src": "/listings/18-harvard-street/aerial-06.jpg",
        "thumb": "/listings/18-harvard-street/aerial-thumb/06.jpg"
      },
      {
        "src": "/listings/18-harvard-street/aerial-07.jpg",
        "thumb": "/listings/18-harvard-street/aerial-thumb/07.jpg"
      },
      {
        "src": "/listings/18-harvard-street/aerial-08.jpg",
        "thumb": "/listings/18-harvard-street/aerial-thumb/08.jpg"
      },
      {
        "src": "/listings/18-harvard-street/aerial-09.jpg",
        "thumb": "/listings/18-harvard-street/aerial-thumb/09.jpg"
      },
      {
        "src": "/listings/18-harvard-street/aerial-10.jpg",
        "thumb": "/listings/18-harvard-street/aerial-thumb/10.jpg"
      }
    ]
  },
  {
    "slug": "504-brooks-ave",
    "category": "commercial",
    "title": "504 Brooks Ave",
    "kind": "Apartment building",
    "photos": [
      {
        "src": "/listings/504-brooks-ave/01.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/01.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/02.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/02.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/03.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/03.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/04.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/04.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/05.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/05.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/06.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/06.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/07.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/07.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/08.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/08.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/09.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/09.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/10.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/10.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/11.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/11.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/12.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/12.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/13.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/13.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/14.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/14.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/15.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/15.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/16.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/16.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/17.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/17.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/18.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/18.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/19.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/19.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/20.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/20.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/21.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/21.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/22.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/22.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/23.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/23.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/24.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/24.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/25.jpg",
        "thumb": "/listings/504-brooks-ave/thumb/25.jpg"
      }
    ],
    "aerials": [
      {
        "src": "/listings/504-brooks-ave/aerial-01.jpg",
        "thumb": "/listings/504-brooks-ave/aerial-thumb/01.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/aerial-02.jpg",
        "thumb": "/listings/504-brooks-ave/aerial-thumb/02.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/aerial-03.jpg",
        "thumb": "/listings/504-brooks-ave/aerial-thumb/03.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/aerial-04.jpg",
        "thumb": "/listings/504-brooks-ave/aerial-thumb/04.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/aerial-05.jpg",
        "thumb": "/listings/504-brooks-ave/aerial-thumb/05.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/aerial-06.jpg",
        "thumb": "/listings/504-brooks-ave/aerial-thumb/06.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/aerial-07.jpg",
        "thumb": "/listings/504-brooks-ave/aerial-thumb/07.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/aerial-08.jpg",
        "thumb": "/listings/504-brooks-ave/aerial-thumb/08.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/aerial-09.jpg",
        "thumb": "/listings/504-brooks-ave/aerial-thumb/09.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/aerial-10.jpg",
        "thumb": "/listings/504-brooks-ave/aerial-thumb/10.jpg"
      },
      {
        "src": "/listings/504-brooks-ave/aerial-11.jpg",
        "thumb": "/listings/504-brooks-ave/aerial-thumb/11.jpg"
      }
    ]
  },
  {
    "slug": "212-carter-road",
    "category": "commercial",
    "title": "212 Carter Road",
    "kind": "Solar farm",
    "location": "Geneva, NY",
    "video": {
      "src": "/listings/212-carter-road/walkthrough.mp4",
      "poster": "/listings/212-carter-road/walkthrough-poster.jpg",
      "title": "212 Carter Road solar farm drone video"
    },
    "photos": [],
    "aerials": [
      {
        "src": "/listings/212-carter-road/aerial-01.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/01.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-02.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/02.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-03.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/03.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-04.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/04.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-05.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/05.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-06.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/06.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-07.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/07.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-08.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/08.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-09.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/09.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-10.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/10.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-11.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/11.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-12.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/12.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-13.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/13.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-14.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/14.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-15.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/15.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-16.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/16.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-17.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/17.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-18.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/18.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-19.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/19.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-20.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/20.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-21.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/21.jpg"
      },
      {
        "src": "/listings/212-carter-road/aerial-22.jpg",
        "thumb": "/listings/212-carter-road/aerial-thumb/22.jpg"
      }
    ]
  },
  {
    "slug": "219-lyons-road",
    "category": "commercial",
    "title": "219 Lyons Road",
    "kind": "Commercial & industrial property",
    "location": "Geneva, NY",
    "photos": [],
    "aerials": [
      {
        "src": "/listings/219-lyons-road/aerial-01.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/01.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-02.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/02.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-03.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/03.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-04.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/04.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-05.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/05.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-06.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/06.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-07.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/07.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-08.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/08.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-09.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/09.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-10.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/10.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-11.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/11.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-12.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/12.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-13.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/13.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-14.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/14.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-15.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/15.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-16.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/16.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-17.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/17.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-18.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/18.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-19.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/19.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-20.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/20.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-21.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/21.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-22.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/22.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-23.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/23.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-24.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/24.jpg"
      },
      {
        "src": "/listings/219-lyons-road/aerial-25.jpg",
        "thumb": "/listings/219-lyons-road/aerial-thumb/25.jpg"
      }
    ]
  },
  {
    "slug": "39-genesee-street",
    "category": "commercial",
    "title": "39 Genesee Street",
    "kind": "Commercial building",
    "location": "Geneva, NY",
    "photos": [
      {
        "src": "/listings/39-genesee-street/01.jpg",
        "thumb": "/listings/39-genesee-street/thumb/01.jpg"
      },
      {
        "src": "/listings/39-genesee-street/02.jpg",
        "thumb": "/listings/39-genesee-street/thumb/02.jpg"
      },
      {
        "src": "/listings/39-genesee-street/03.jpg",
        "thumb": "/listings/39-genesee-street/thumb/03.jpg"
      },
      {
        "src": "/listings/39-genesee-street/04.jpg",
        "thumb": "/listings/39-genesee-street/thumb/04.jpg"
      },
      {
        "src": "/listings/39-genesee-street/05.jpg",
        "thumb": "/listings/39-genesee-street/thumb/05.jpg"
      },
      {
        "src": "/listings/39-genesee-street/06.jpg",
        "thumb": "/listings/39-genesee-street/thumb/06.jpg"
      },
      {
        "src": "/listings/39-genesee-street/07.jpg",
        "thumb": "/listings/39-genesee-street/thumb/07.jpg"
      },
      {
        "src": "/listings/39-genesee-street/08.jpg",
        "thumb": "/listings/39-genesee-street/thumb/08.jpg"
      },
      {
        "src": "/listings/39-genesee-street/09.jpg",
        "thumb": "/listings/39-genesee-street/thumb/09.jpg"
      }
    ],
    "aerials": [
      {
        "src": "/listings/39-genesee-street/aerial-01.jpg",
        "thumb": "/listings/39-genesee-street/aerial-thumb/01.jpg"
      },
      {
        "src": "/listings/39-genesee-street/aerial-02.jpg",
        "thumb": "/listings/39-genesee-street/aerial-thumb/02.jpg"
      },
      {
        "src": "/listings/39-genesee-street/aerial-03.jpg",
        "thumb": "/listings/39-genesee-street/aerial-thumb/03.jpg"
      }
    ]
  },
  {
    "slug": "257-stonefield-lane",
    "category": "residential",
    "title": "257 Stonefield Lane",
    "kind": "Colonial with in-ground pool",
    "location": "Farmington, NY",
    "tour": "BHXMrHxz9id",
    "photos": [
      {
        "src": "/listings/257-stonefield-lane/01.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/01.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/02.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/02.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/03.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/03.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/04.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/04.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/05.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/05.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/06.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/06.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/07.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/07.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/08.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/08.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/09.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/09.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/10.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/10.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/11.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/11.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/12.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/12.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/13.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/13.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/14.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/14.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/15.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/15.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/16.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/16.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/17.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/17.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/18.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/18.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/19.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/19.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/20.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/20.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/21.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/21.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/22.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/22.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/23.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/23.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/24.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/24.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/25.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/25.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/26.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/26.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/27.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/27.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/28.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/28.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/29.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/29.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/30.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/30.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/31.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/31.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/32.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/32.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/33.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/33.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/34.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/34.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/35.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/35.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/36.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/36.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/37.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/37.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/38.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/38.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/39.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/39.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/40.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/40.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/41.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/41.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/42.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/42.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/43.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/43.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/44.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/44.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/45.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/45.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/46.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/46.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/47.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/47.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/48.jpg",
        "thumb": "/listings/257-stonefield-lane/thumb/48.jpg"
      }
    ],
    "aerials": [
      {
        "src": "/listings/257-stonefield-lane/aerial-01.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/01.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-02.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/02.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-03.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/03.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-04.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/04.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-05.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/05.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-06.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/06.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-07.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/07.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-08.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/08.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-09.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/09.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-10.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/10.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-11.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/11.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-12.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/12.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-13.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/13.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-14.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/14.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-15.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/15.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-16.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/16.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-17.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/17.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-18.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/18.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-19.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/19.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-20.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/20.jpg"
      },
      {
        "src": "/listings/257-stonefield-lane/aerial-21.jpg",
        "thumb": "/listings/257-stonefield-lane/aerial-thumb/21.jpg"
      }
    ]
  },
  {
    "slug": "633-autumn-breeze-lane",
    "category": "residential",
    "title": "633 Autumn Breeze Lane",
    "kind": "New-construction colonial",
    "photos": [
      {
        "src": "/listings/633-autumn-breeze-lane/01.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/01.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/02.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/02.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/03.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/03.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/04.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/04.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/05.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/05.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/06.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/06.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/07.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/07.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/08.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/08.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/09.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/09.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/10.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/10.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/11.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/11.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/12.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/12.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/13.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/13.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/14.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/14.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/15.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/15.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/16.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/16.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/17.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/17.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/18.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/18.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/19.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/19.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/20.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/20.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/21.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/21.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/22.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/22.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/23.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/23.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/24.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/24.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/25.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/25.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/26.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/26.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/27.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/27.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/28.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/thumb/28.jpg"
      }
    ],
    "aerials": [
      {
        "src": "/listings/633-autumn-breeze-lane/aerial-01.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/aerial-thumb/01.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/aerial-02.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/aerial-thumb/02.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/aerial-03.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/aerial-thumb/03.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/aerial-04.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/aerial-thumb/04.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/aerial-05.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/aerial-thumb/05.jpg"
      },
      {
        "src": "/listings/633-autumn-breeze-lane/aerial-06.jpg",
        "thumb": "/listings/633-autumn-breeze-lane/aerial-thumb/06.jpg"
      }
    ],
    "location": "Ontario, NY"
  },
  {
    "slug": "145-georgian-court-road",
    "category": "residential",
    "title": "145 Georgian Court Road",
    "kind": "Split-level",
    "photos": [
      {
        "src": "/listings/145-georgian-court-road/01.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/01.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/02.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/02.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/03.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/03.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/04.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/04.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/05.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/05.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/06.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/06.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/07.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/07.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/08.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/08.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/09.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/09.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/10.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/10.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/11.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/11.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/12.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/12.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/13.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/13.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/14.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/14.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/15.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/15.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/16.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/16.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/17.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/17.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/18.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/18.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/19.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/19.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/20.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/20.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/21.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/21.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/22.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/22.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/23.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/23.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/24.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/24.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/25.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/25.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/26.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/26.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/27.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/27.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/28.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/28.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/29.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/29.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/30.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/30.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/31.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/31.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/32.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/32.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/33.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/33.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/34.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/34.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/35.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/35.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/36.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/36.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/37.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/37.jpg"
      },
      {
        "src": "/listings/145-georgian-court-road/38.jpg",
        "thumb": "/listings/145-georgian-court-road/thumb/38.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "27-devonwood-lane",
    "category": "residential",
    "title": "27 Devonwood Lane",
    "kind": "Two-story colonial",
    "location": "Pittsford, NY",
    "photos": [
      {
        "src": "/listings/27-devonwood-lane/01.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/01.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/02.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/02.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/03.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/03.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/04.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/04.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/05.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/05.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/06.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/06.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/07.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/07.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/08.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/08.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/09.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/09.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/10.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/10.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/11.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/11.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/12.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/12.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/13.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/13.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/14.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/14.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/15.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/15.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/16.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/16.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/17.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/17.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/18.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/18.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/19.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/19.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/20.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/20.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/21.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/21.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/22.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/22.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/23.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/23.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/24.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/24.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/25.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/25.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/26.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/26.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/27.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/27.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/28.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/28.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/29.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/29.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/30.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/30.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/31.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/31.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/32.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/32.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/33.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/33.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/34.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/34.jpg"
      },
      {
        "src": "/listings/27-devonwood-lane/35.jpg",
        "thumb": "/listings/27-devonwood-lane/thumb/35.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "388-castle-street",
    "category": "residential",
    "title": "388 Castle Street",
    "kind": "Craftsman bungalow",
    "photos": [
      {
        "src": "/listings/388-castle-street/01.jpg",
        "thumb": "/listings/388-castle-street/thumb/01.jpg"
      },
      {
        "src": "/listings/388-castle-street/02.jpg",
        "thumb": "/listings/388-castle-street/thumb/02.jpg"
      },
      {
        "src": "/listings/388-castle-street/03.jpg",
        "thumb": "/listings/388-castle-street/thumb/03.jpg"
      },
      {
        "src": "/listings/388-castle-street/04.jpg",
        "thumb": "/listings/388-castle-street/thumb/04.jpg"
      },
      {
        "src": "/listings/388-castle-street/05.jpg",
        "thumb": "/listings/388-castle-street/thumb/05.jpg"
      },
      {
        "src": "/listings/388-castle-street/06.jpg",
        "thumb": "/listings/388-castle-street/thumb/06.jpg"
      },
      {
        "src": "/listings/388-castle-street/07.jpg",
        "thumb": "/listings/388-castle-street/thumb/07.jpg"
      },
      {
        "src": "/listings/388-castle-street/08.jpg",
        "thumb": "/listings/388-castle-street/thumb/08.jpg"
      },
      {
        "src": "/listings/388-castle-street/09.jpg",
        "thumb": "/listings/388-castle-street/thumb/09.jpg"
      },
      {
        "src": "/listings/388-castle-street/10.jpg",
        "thumb": "/listings/388-castle-street/thumb/10.jpg"
      },
      {
        "src": "/listings/388-castle-street/11.jpg",
        "thumb": "/listings/388-castle-street/thumb/11.jpg"
      },
      {
        "src": "/listings/388-castle-street/12.jpg",
        "thumb": "/listings/388-castle-street/thumb/12.jpg"
      },
      {
        "src": "/listings/388-castle-street/13.jpg",
        "thumb": "/listings/388-castle-street/thumb/13.jpg"
      },
      {
        "src": "/listings/388-castle-street/14.jpg",
        "thumb": "/listings/388-castle-street/thumb/14.jpg"
      },
      {
        "src": "/listings/388-castle-street/15.jpg",
        "thumb": "/listings/388-castle-street/thumb/15.jpg"
      },
      {
        "src": "/listings/388-castle-street/16.jpg",
        "thumb": "/listings/388-castle-street/thumb/16.jpg"
      },
      {
        "src": "/listings/388-castle-street/17.jpg",
        "thumb": "/listings/388-castle-street/thumb/17.jpg"
      },
      {
        "src": "/listings/388-castle-street/18.jpg",
        "thumb": "/listings/388-castle-street/thumb/18.jpg"
      },
      {
        "src": "/listings/388-castle-street/19.jpg",
        "thumb": "/listings/388-castle-street/thumb/19.jpg"
      },
      {
        "src": "/listings/388-castle-street/20.jpg",
        "thumb": "/listings/388-castle-street/thumb/20.jpg"
      },
      {
        "src": "/listings/388-castle-street/21.jpg",
        "thumb": "/listings/388-castle-street/thumb/21.jpg"
      },
      {
        "src": "/listings/388-castle-street/22.jpg",
        "thumb": "/listings/388-castle-street/thumb/22.jpg"
      },
      {
        "src": "/listings/388-castle-street/23.jpg",
        "thumb": "/listings/388-castle-street/thumb/23.jpg"
      },
      {
        "src": "/listings/388-castle-street/24.jpg",
        "thumb": "/listings/388-castle-street/thumb/24.jpg"
      },
      {
        "src": "/listings/388-castle-street/25.jpg",
        "thumb": "/listings/388-castle-street/thumb/25.jpg"
      },
      {
        "src": "/listings/388-castle-street/26.jpg",
        "thumb": "/listings/388-castle-street/thumb/26.jpg"
      },
      {
        "src": "/listings/388-castle-street/27.jpg",
        "thumb": "/listings/388-castle-street/thumb/27.jpg"
      },
      {
        "src": "/listings/388-castle-street/28.jpg",
        "thumb": "/listings/388-castle-street/thumb/28.jpg"
      },
      {
        "src": "/listings/388-castle-street/29.jpg",
        "thumb": "/listings/388-castle-street/thumb/29.jpg"
      },
      {
        "src": "/listings/388-castle-street/30.jpg",
        "thumb": "/listings/388-castle-street/thumb/30.jpg"
      },
      {
        "src": "/listings/388-castle-street/31.jpg",
        "thumb": "/listings/388-castle-street/thumb/31.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "71-cornhill-place",
    "category": "residential",
    "title": "71 Cornhill Place #71",
    "kind": "Townhouse",
    "location": "Rochester, NY",
    "photos": [
      {
        "src": "/listings/71-cornhill-place/01.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/01.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/02.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/02.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/03.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/03.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/04.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/04.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/05.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/05.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/06.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/06.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/07.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/07.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/08.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/08.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/09.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/09.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/10.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/10.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/11.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/11.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/12.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/12.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/13.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/13.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/14.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/14.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/15.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/15.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/16.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/16.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/17.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/17.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/18.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/18.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/19.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/19.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/20.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/20.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/21.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/21.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/22.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/22.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/23.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/23.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/24.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/24.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/25.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/25.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/26.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/26.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/27.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/27.jpg"
      },
      {
        "src": "/listings/71-cornhill-place/28.jpg",
        "thumb": "/listings/71-cornhill-place/thumb/28.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "6782-colyer-crossing",
    "category": "residential",
    "title": "6782 Colyer Crossing",
    "kind": "Craftsman-style colonial",
    "photos": [
      {
        "src": "/listings/6782-colyer-crossing/01.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/01.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/02.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/02.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/03.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/03.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/04.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/04.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/05.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/05.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/06.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/06.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/07.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/07.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/08.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/08.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/09.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/09.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/10.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/10.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/11.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/11.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/12.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/12.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/13.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/13.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/14.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/14.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/15.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/15.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/16.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/16.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/17.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/17.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/18.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/18.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/19.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/19.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/20.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/20.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/21.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/21.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/22.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/22.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/23.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/23.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/24.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/24.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/25.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/25.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/26.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/26.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/27.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/27.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/28.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/28.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/29.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/29.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/30.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/30.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/31.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/31.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/32.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/32.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/33.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/33.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/34.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/34.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/35.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/35.jpg"
      },
      {
        "src": "/listings/6782-colyer-crossing/36.jpg",
        "thumb": "/listings/6782-colyer-crossing/thumb/36.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "3300-state-route",
    "category": "residential",
    "title": "3300 State Route",
    "kind": "Townhouse",
    "photos": [
      {
        "src": "/listings/3300-state-route/01.jpg",
        "thumb": "/listings/3300-state-route/thumb/01.jpg"
      },
      {
        "src": "/listings/3300-state-route/02.jpg",
        "thumb": "/listings/3300-state-route/thumb/02.jpg"
      },
      {
        "src": "/listings/3300-state-route/03.jpg",
        "thumb": "/listings/3300-state-route/thumb/03.jpg"
      },
      {
        "src": "/listings/3300-state-route/04.jpg",
        "thumb": "/listings/3300-state-route/thumb/04.jpg"
      },
      {
        "src": "/listings/3300-state-route/05.jpg",
        "thumb": "/listings/3300-state-route/thumb/05.jpg"
      },
      {
        "src": "/listings/3300-state-route/06.jpg",
        "thumb": "/listings/3300-state-route/thumb/06.jpg"
      },
      {
        "src": "/listings/3300-state-route/07.jpg",
        "thumb": "/listings/3300-state-route/thumb/07.jpg"
      },
      {
        "src": "/listings/3300-state-route/08.jpg",
        "thumb": "/listings/3300-state-route/thumb/08.jpg"
      },
      {
        "src": "/listings/3300-state-route/09.jpg",
        "thumb": "/listings/3300-state-route/thumb/09.jpg"
      },
      {
        "src": "/listings/3300-state-route/10.jpg",
        "thumb": "/listings/3300-state-route/thumb/10.jpg"
      },
      {
        "src": "/listings/3300-state-route/11.jpg",
        "thumb": "/listings/3300-state-route/thumb/11.jpg"
      },
      {
        "src": "/listings/3300-state-route/12.jpg",
        "thumb": "/listings/3300-state-route/thumb/12.jpg"
      },
      {
        "src": "/listings/3300-state-route/13.jpg",
        "thumb": "/listings/3300-state-route/thumb/13.jpg"
      },
      {
        "src": "/listings/3300-state-route/14.jpg",
        "thumb": "/listings/3300-state-route/thumb/14.jpg"
      },
      {
        "src": "/listings/3300-state-route/15.jpg",
        "thumb": "/listings/3300-state-route/thumb/15.jpg"
      },
      {
        "src": "/listings/3300-state-route/16.jpg",
        "thumb": "/listings/3300-state-route/thumb/16.jpg"
      },
      {
        "src": "/listings/3300-state-route/17.jpg",
        "thumb": "/listings/3300-state-route/thumb/17.jpg"
      },
      {
        "src": "/listings/3300-state-route/18.jpg",
        "thumb": "/listings/3300-state-route/thumb/18.jpg"
      },
      {
        "src": "/listings/3300-state-route/19.jpg",
        "thumb": "/listings/3300-state-route/thumb/19.jpg"
      },
      {
        "src": "/listings/3300-state-route/20.jpg",
        "thumb": "/listings/3300-state-route/thumb/20.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "2548-lower-lake-road",
    "category": "residential",
    "title": "2548 Lower Lake Road",
    "kind": "Lakefront home with pool",
    "photos": [
      {
        "src": "/listings/2548-lower-lake-road/01.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/01.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/02.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/02.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/03.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/03.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/04.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/04.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/05.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/05.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/06.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/06.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/07.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/07.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/08.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/08.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/09.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/09.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/10.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/10.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/11.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/11.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/12.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/12.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/13.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/13.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/14.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/14.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/15.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/15.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/16.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/16.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/17.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/17.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/18.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/18.jpg"
      },
      {
        "src": "/listings/2548-lower-lake-road/19.jpg",
        "thumb": "/listings/2548-lower-lake-road/thumb/19.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "city-victorian",
    "category": "residential",
    "title": "City Victorian",
    "kind": "Two-story Victorian",
    "photos": [
      {
        "src": "/listings/city-victorian/01.jpg",
        "thumb": "/listings/city-victorian/thumb/01.jpg"
      },
      {
        "src": "/listings/city-victorian/02.jpg",
        "thumb": "/listings/city-victorian/thumb/02.jpg"
      },
      {
        "src": "/listings/city-victorian/03.jpg",
        "thumb": "/listings/city-victorian/thumb/03.jpg"
      },
      {
        "src": "/listings/city-victorian/04.jpg",
        "thumb": "/listings/city-victorian/thumb/04.jpg"
      },
      {
        "src": "/listings/city-victorian/05.jpg",
        "thumb": "/listings/city-victorian/thumb/05.jpg"
      },
      {
        "src": "/listings/city-victorian/06.jpg",
        "thumb": "/listings/city-victorian/thumb/06.jpg"
      },
      {
        "src": "/listings/city-victorian/07.jpg",
        "thumb": "/listings/city-victorian/thumb/07.jpg"
      },
      {
        "src": "/listings/city-victorian/08.jpg",
        "thumb": "/listings/city-victorian/thumb/08.jpg"
      },
      {
        "src": "/listings/city-victorian/09.jpg",
        "thumb": "/listings/city-victorian/thumb/09.jpg"
      },
      {
        "src": "/listings/city-victorian/10.jpg",
        "thumb": "/listings/city-victorian/thumb/10.jpg"
      },
      {
        "src": "/listings/city-victorian/11.jpg",
        "thumb": "/listings/city-victorian/thumb/11.jpg"
      },
      {
        "src": "/listings/city-victorian/12.jpg",
        "thumb": "/listings/city-victorian/thumb/12.jpg"
      },
      {
        "src": "/listings/city-victorian/13.jpg",
        "thumb": "/listings/city-victorian/thumb/13.jpg"
      },
      {
        "src": "/listings/city-victorian/14.jpg",
        "thumb": "/listings/city-victorian/thumb/14.jpg"
      },
      {
        "src": "/listings/city-victorian/15.jpg",
        "thumb": "/listings/city-victorian/thumb/15.jpg"
      },
      {
        "src": "/listings/city-victorian/16.jpg",
        "thumb": "/listings/city-victorian/thumb/16.jpg"
      },
      {
        "src": "/listings/city-victorian/17.jpg",
        "thumb": "/listings/city-victorian/thumb/17.jpg"
      },
      {
        "src": "/listings/city-victorian/18.jpg",
        "thumb": "/listings/city-victorian/thumb/18.jpg"
      },
      {
        "src": "/listings/city-victorian/19.jpg",
        "thumb": "/listings/city-victorian/thumb/19.jpg"
      },
      {
        "src": "/listings/city-victorian/20.jpg",
        "thumb": "/listings/city-victorian/thumb/20.jpg"
      },
      {
        "src": "/listings/city-victorian/21.jpg",
        "thumb": "/listings/city-victorian/thumb/21.jpg"
      },
      {
        "src": "/listings/city-victorian/22.jpg",
        "thumb": "/listings/city-victorian/thumb/22.jpg"
      },
      {
        "src": "/listings/city-victorian/23.jpg",
        "thumb": "/listings/city-victorian/thumb/23.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "609-wild-mallard-trail",
    "category": "residential",
    "title": "609 Wild Mallard Trail",
    "kind": "Cape-style home",
    "location": "Webster, NY",
    "tour": "Xjuo4yMEVqQ",
    "photos": [
      {
        "src": "/listings/609-wild-mallard-trail/01.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/01.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/02.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/02.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/03.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/03.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/04.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/04.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/05.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/05.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/06.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/06.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/07.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/07.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/08.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/08.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/09.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/09.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/10.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/10.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/11.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/11.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/12.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/12.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/13.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/13.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/14.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/14.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/15.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/15.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/16.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/16.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/17.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/17.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/18.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/18.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/19.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/19.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/20.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/20.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/21.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/21.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/22.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/22.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/23.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/23.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/24.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/24.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/25.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/25.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/26.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/26.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/27.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/27.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/28.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/28.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/29.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/29.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/30.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/30.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/31.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/31.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/32.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/32.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/33.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/33.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/34.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/34.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/35.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/35.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/36.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/36.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/37.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/37.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/38.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/38.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/39.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/39.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/40.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/40.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/41.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/41.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/42.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/42.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/43.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/43.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/44.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/44.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/45.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/45.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/46.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/46.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/47.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/47.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/48.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/48.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/49.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/49.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/50.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/50.jpg"
      },
      {
        "src": "/listings/609-wild-mallard-trail/51.jpg",
        "thumb": "/listings/609-wild-mallard-trail/thumb/51.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "605-wild-mallard-trail",
    "category": "residential",
    "title": "605 Wild Mallard Trail",
    "kind": "Cape Cod with wraparound porch",
    "location": "Webster, NY",
    "tour": "1A8zFLesAh3",
    "photos": [
      {
        "src": "/listings/605-wild-mallard-trail/01.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/01.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/02.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/02.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/03.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/03.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/04.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/04.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/05.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/05.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/06.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/06.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/07.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/07.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/08.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/08.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/09.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/09.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/10.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/10.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/11.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/11.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/12.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/12.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/13.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/13.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/14.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/14.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/15.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/15.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/16.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/16.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/17.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/17.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/18.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/18.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/19.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/19.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/20.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/20.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/21.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/21.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/22.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/22.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/23.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/23.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/24.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/24.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/25.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/25.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/26.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/26.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/27.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/27.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/28.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/28.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/29.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/29.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/30.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/30.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/31.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/31.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/32.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/32.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/33.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/33.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/34.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/34.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/35.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/35.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/36.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/36.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/37.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/37.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/38.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/38.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/39.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/39.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/40.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/40.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/41.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/41.jpg"
      },
      {
        "src": "/listings/605-wild-mallard-trail/42.jpg",
        "thumb": "/listings/605-wild-mallard-trail/thumb/42.jpg"
      }
    ],
    "aerials": []
  }
];
