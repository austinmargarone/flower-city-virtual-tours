// Generated from the old flowercityvirtualtours.com photo galleries, one entry per listing.
// Photos live in public/listings/<slug>/ (full size) and public/listings/<slug>/thumb/ (grid size).

export type ListingPhoto = { src: string; thumb: string };

export type Listing = {
  slug: string;
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
    "title": "443 Crossfield Road",
    "kind": "Cape Cod",
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
    "slug": "257-stonefield-lane",
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
    "aerials": []
  },
  {
    "slug": "145-georgian-court-road",
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
    "title": "27 Devonwood Lane",
    "kind": "Two-story colonial",
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
    "slug": "vineyard-guest-barn",
    "title": "Vineyard Guest Barn",
    "kind": "Short-term rental",
    "tour": "YN4DWeXcQ2p",
    "caseStudy": "/work/vineyard-guest-barn",
    "photos": [
      {
        "src": "/listings/vineyard-guest-barn/01.jpg",
        "thumb": "/listings/vineyard-guest-barn/thumb/01.jpg"
      },
      {
        "src": "/listings/vineyard-guest-barn/02.jpg",
        "thumb": "/listings/vineyard-guest-barn/thumb/02.jpg"
      },
      {
        "src": "/listings/vineyard-guest-barn/03.jpg",
        "thumb": "/listings/vineyard-guest-barn/thumb/03.jpg"
      },
      {
        "src": "/listings/vineyard-guest-barn/04.jpg",
        "thumb": "/listings/vineyard-guest-barn/thumb/04.jpg"
      },
      {
        "src": "/listings/vineyard-guest-barn/05.jpg",
        "thumb": "/listings/vineyard-guest-barn/thumb/05.jpg"
      },
      {
        "src": "/listings/vineyard-guest-barn/06.jpg",
        "thumb": "/listings/vineyard-guest-barn/thumb/06.jpg"
      },
      {
        "src": "/listings/vineyard-guest-barn/07.jpg",
        "thumb": "/listings/vineyard-guest-barn/thumb/07.jpg"
      },
      {
        "src": "/listings/vineyard-guest-barn/08.jpg",
        "thumb": "/listings/vineyard-guest-barn/thumb/08.jpg"
      },
      {
        "src": "/listings/vineyard-guest-barn/09.jpg",
        "thumb": "/listings/vineyard-guest-barn/thumb/09.jpg"
      },
      {
        "src": "/listings/vineyard-guest-barn/10.jpg",
        "thumb": "/listings/vineyard-guest-barn/thumb/10.jpg"
      },
      {
        "src": "/listings/vineyard-guest-barn/11.jpg",
        "thumb": "/listings/vineyard-guest-barn/thumb/11.jpg"
      },
      {
        "src": "/listings/vineyard-guest-barn/12.jpg",
        "thumb": "/listings/vineyard-guest-barn/thumb/12.jpg"
      },
      {
        "src": "/listings/vineyard-guest-barn/13.jpg",
        "thumb": "/listings/vineyard-guest-barn/thumb/13.jpg"
      },
      {
        "src": "/listings/vineyard-guest-barn/14.jpg",
        "thumb": "/listings/vineyard-guest-barn/thumb/14.jpg"
      },
      {
        "src": "/listings/vineyard-guest-barn/15.jpg",
        "thumb": "/listings/vineyard-guest-barn/thumb/15.jpg"
      },
      {
        "src": "/listings/vineyard-guest-barn/16.jpg",
        "thumb": "/listings/vineyard-guest-barn/thumb/16.jpg"
      },
      {
        "src": "/listings/vineyard-guest-barn/17.jpg",
        "thumb": "/listings/vineyard-guest-barn/thumb/17.jpg"
      }
    ],
    "aerials": []
  },
  {
    "slug": "city-victorian",
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

export const aerialPortfolio: ListingPhoto[] = [
  {
    "src": "/listings/aerial-portfolio/01.jpg",
    "thumb": "/listings/aerial-portfolio/thumb/01.jpg"
  },
  {
    "src": "/listings/aerial-portfolio/02.jpg",
    "thumb": "/listings/aerial-portfolio/thumb/02.jpg"
  },
  {
    "src": "/listings/aerial-portfolio/03.jpg",
    "thumb": "/listings/aerial-portfolio/thumb/03.jpg"
  },
  {
    "src": "/listings/aerial-portfolio/04.jpg",
    "thumb": "/listings/aerial-portfolio/thumb/04.jpg"
  },
  {
    "src": "/listings/aerial-portfolio/05.jpg",
    "thumb": "/listings/aerial-portfolio/thumb/05.jpg"
  },
  {
    "src": "/listings/aerial-portfolio/06.jpg",
    "thumb": "/listings/aerial-portfolio/thumb/06.jpg"
  },
  {
    "src": "/listings/aerial-portfolio/07.jpg",
    "thumb": "/listings/aerial-portfolio/thumb/07.jpg"
  }
];
