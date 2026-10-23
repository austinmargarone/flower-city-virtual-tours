import type { Metadata } from "next";

// Primary domain. fcvt.dev redirects here (set in Vercel → Domains).
export const SITE_URL = "https://flowercityvirtualtours.com";
export const BUSINESS_NAME = "Flower City Virtual Tours";
export const PHONE = "(585) 501-5691";
export const PHONE_HREF = "tel:+15855015691"; // desk line: calls only, no texts
export const EMAIL = "sales@flowercityvirtualtours.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;
export const OG_IMAGE = {
  url: `${SITE_URL}/meta.png`,
  width: 1200,
  height: 630,
  alt: "Flower City Virtual Tours: websites, 3D virtual tours, photography and drone",
};

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

/** Consistent title, description, canonical URL and social preview for every page. */
export function pageMeta({ title, description, path, image }: PageMetaInput): Metadata {
  const fullTitle = `${title} | ${BUSINESS_NAME}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: BUSINESS_NAME,
      type: "website",
      images: image ? [{ url: image }] : [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BUSINESS_NAME,
  legalName: "Flower City Virtual Tours LLC",
  url: SITE_URL,
  telephone: "+1-585-501-5691",
  email: EMAIL,
  image: `${SITE_URL}/companyLogo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rochester",
    addressRegion: "NY",
    addressCountry: "US",
  },
  // Websites are delivered remotely nationwide; on-site media covers Rochester and upstate NY.
  areaServed: ["United States", "Rochester, NY", "Upstate New York"],
  sameAs: ["https://www.instagram.com/flowercityvirtualtours/"],
  knowsAbout: [
    "Web design",
    "Web development",
    "Search engine optimization",
    "Matterport 3D virtual tours",
    "Real estate photography",
    "Drone photography",
  ],
};
