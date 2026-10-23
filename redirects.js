// Redirects from the old WordPress site (flowercityvirtualtours.com) to the Next.js site.
// Usage in next.config.js:
//   const legacyRedirects = require('./redirects');
//   module.exports = { async redirects() { return legacyRedirects; } };
//
// Every destination below is a real page on this site.
// Blog posts keep their exact /blog/<slug> paths, so they need no redirects.

const industryPages = [
  'apartment-complexes',
  'industrial-complexes',
  'insurance-purposes',
  'outdoor-spaces',
  'small-businesses',
  'condominiums',
  'retail-showrooms',
  'real-estate-agents',
  'residential-homes',
  'commercial-buildings',
  'event-venues',
  'restaurants-bars',
  'cars-dealerships',
  'construction-sites',
  'country-clubs',
  'educational-facilities',
  'theaters',
  'everything-else',
  'hotels-short-term-rentals',
  'vacationflx',
];

module.exports = [
  // Services
  { source: '/web-development', destination: '/services/web-development', permanent: true },
  { source: '/virtual-tours', destination: '/services/virtual-tours', permanent: true },
  { source: '/floor-plans', destination: '/services/virtual-tours', permanent: true },
  { source: '/our-technology', destination: '/services/virtual-tours', permanent: true },
  { source: '/aerial-drone', destination: '/services/drone', permanent: true },
  { source: '/photography', destination: '/services/photography', permanent: true },

  // Old separate design + SEO pages are now sections of Web Development
  { source: '/services/web-design', destination: '/services/web-development#design', permanent: true },
  { source: '/services/seo', destination: '/services/web-development#seo', permanent: true },

  // Company
  { source: '/about-us', destination: '/about', permanent: true },
  { source: '/our-process', destination: '/about', permanent: true },
  { source: '/contact-us', destination: '/contact', permanent: true },
  { source: '/request-a-3d-matterport-appointment', destination: '/calendly', permanent: true },
  { source: '/our-results', destination: '/work', permanent: true },
  // /pricing keeps the same path — build the page, no redirect needed (a self-redirect would loop)
  { source: '/faqs', destination: '/faq', permanent: true },
  { source: '/news', destination: '/blog', permanent: true },

  // Industries (19 thin pages consolidated into one)
  { source: '/industries-served', destination: '/industries', permanent: true },
  ...industryPages.map((slug) => ({
    source: `/${slug}`,
    destination: '/industries',
    permanent: true,
  })),

  // Dead WooCommerce pages
  { source: '/shop', destination: '/build', permanent: true },
  { source: '/cart', destination: '/build', permanent: true },
  { source: '/checkout', destination: '/build', permanent: true },
  { source: '/my-account', destination: '/contact', permanent: true },

  // Blog posts that were also live with the category in the URL
  { source: '/blog/discover-roc-series/:slug', destination: '/blog/:slug', permanent: true },
  { source: '/blog/discover-roc-series', destination: '/blog', permanent: true },

  // Old portfolio / service "posts"
  { source: '/services/matterport-virtual-tours/decarolis-truck-rental', destination: '/work/decarolis-truck-rental', permanent: true },
  { source: '/services/matterport-virtual-tours/aarons-alley', destination: '/work/aarons-alley', permanent: true },
  { source: '/services/matterport-virtual-tours/:path*', destination: '/services/virtual-tours', permanent: true },
  { source: '/services/listing-photography/:path*', destination: '/services/photography', permanent: true },
  { source: '/services/web-development/web-development-services', destination: '/services/web-development', permanent: true },
  { source: '/portfolio/257-stonefield-lane', destination: '/listings/257-stonefield-lane', permanent: true },
  { source: '/portfolio/:path*', destination: '/services/photography', permanent: true },
  { source: '/our-results-2', destination: '/work', permanent: true },

  // The listings grid lives on the Photography page
  { source: '/listings', destination: '/services/photography', permanent: true },

  // Waterloo drone shots were merged into their property's listing
  { source: '/listings/waterloo-drone', destination: '/listings/2161-edwards-road', permanent: true },

  // WordPress system URLs
  { source: '/wp-sitemap.xml', destination: '/sitemap.xml', permanent: true },
  { source: '/feed', destination: '/blog', permanent: true },
  { source: '/category/:slug*', destination: '/blog', permanent: true },
];
