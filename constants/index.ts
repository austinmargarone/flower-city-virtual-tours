import { MenuLink, ServiceLink } from "@/types";

export const menuLinks: MenuLink[] = [
  {
    route: "",
    label: "Home",
  },
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/contact",
    label: "Contact",
  },
  {
    route: "/work",
    label: "Our Work",
  },
  {
    route: "/pricing",
    label: "Pricing",
  },
  {
    route: "/faq",
    label: "FAQ",
  },
  {
    route: "/blog",
    label: "Blog",
  },
];

export const serviceLinks: ServiceLink[] = [
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

export type ServiceLinkItem = { route: string; label: string; description: string };

/** The two service groups. Used by the nav menus, homepage cards and /services page. */
export const serviceGroups: { title: string; items: ServiceLinkItem[] }[] = [
  {
    title: "Web Development",
    items: [
      {
        route: "/services/web-development",
        label: "Web Design, Development & SEO",
        description: "Custom websites designed for your brand, built to be fast, and set up to rank on Google.",
      },
    ],
  },
  {
    title: "Media",
    items: [
      {
        route: "/services/photography",
        label: "Real Estate Photography",
        description: "Residential and commercial photos that make every listing and storefront look its best.",
      },
      {
        route: "/services/virtual-tours",
        label: "3D Matterport Virtual Tours",
        description: "Interactive 3D tours customers can walk through from anywhere, 24/7.",
      },
      {
        route: "/services/drone",
        label: "Drone Photography & Video",
        description: "FAA Part 107 certified, fully insured aerial photos and video.",
      },
      {
        route: "/services/video",
        label: "Video Walkthroughs",
        description: "Guided video tours of a property or business for listings, websites and social media.",
      },
    ],
  },
];
