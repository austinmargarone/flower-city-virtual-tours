import Link from "next/link";
import { Box, Camera, Code2, Palette, Plane, Search, type LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  href: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Palette,
    title: "Web Design",
    href: "/services/web-design",
    description: "We walk you through the design process to create a website that fits your brand.",
  },
  {
    icon: Code2,
    title: "Web Development",
    href: "/services/web-development",
    description: "Fast, secure websites built to work on every screen size.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    href: "/services/seo",
    description: "Get found on Google by the Rochester customers already searching for you.",
  },
  {
    icon: Box,
    title: "3D Virtual Tours",
    href: "/services/virtual-tours",
    description: "Matterport tours that let customers walk through your space from anywhere.",
  },
  {
    icon: Camera,
    title: "Photography",
    href: "/services/photography",
    description: "Professional photos of your property, storefront or listing.",
  },
  {
    icon: Plane,
    title: "Aerial Drone",
    href: "/services/drone",
    description: "FAA Part 107 certified drone photos and video, fully insured.",
  },
];

const ServiceCards = () => {
  return (
    <ul className="mx-auto grid w-full max-w-[77.5rem] grid-cols-1 gap-[1.25rem] py-[1.25rem] ss:grid-cols-2 md:grid-cols-3">
      {services.map(({ icon: Icon, title, href, description }) => (
        <li key={href}>
          <Link
            href={href}
            className="flex h-full flex-col items-center rounded-lg border border-tan bg-midnight p-6 text-center text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo"
          >
            <Icon className="size-16 text-tan" strokeWidth={1.25} aria-hidden="true" />
            <h3 className="h3 mt-4">{title}</h3>
            <p className="mt-2 flex-1 text-lightblue">{description}</p>
            <span className="mt-4 font-bold text-tan">Learn more →</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ServiceCards;
