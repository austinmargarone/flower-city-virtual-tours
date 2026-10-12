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
    route: "/build",
    label: "Request a Quote",
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
  {
    route: "/calendly",
    label: "Consultation",
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
  {
    route: "/build",
    label: "Request a Quote",
  },
  {
    route: "/calendly",
    label: "Consultation",
  },
];

export const serviceMenu: { route: string; label: string }[] = [
  { route: "/services/web-design", label: "Web Design" },
  { route: "/services/web-development", label: "Web Development" },
  { route: "/services/seo", label: "SEO Optimization" },
  { route: "/services/virtual-tours", label: "3D Virtual Tours" },
  { route: "/services/photography", label: "Photography" },
  { route: "/listings", label: "Listing Portfolio" },
  { route: "/services/drone", label: "Aerial Drone" },
  { route: "/industries", label: "Industries We Serve" },
];
