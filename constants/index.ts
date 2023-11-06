import { MenuLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const menuLinks: MenuLink[] = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/results",
    label: "Our Results",
  },
  {
    route: "/pricing",
    label: "Pricing",
  },
  {
    route: "/contact",
    label: "Contact",
  },

];

