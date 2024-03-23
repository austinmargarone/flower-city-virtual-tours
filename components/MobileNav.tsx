"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { menuLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Hamburger, Nav } from "./svg";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-6 bg-[#0D101E]">
      {menuLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient text-white rounded-lg bg-[#B49167]"
                  : "text-white"
              } gap-4 flex items-center justify-start bg-[#0D101E] p-4`}
            >
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Hamburger
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent side="right" className="bg-[#0D101E] border-[#B49167]">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/companyLogo.png"
            width={400}
            height={100}
            alt="Flower City Virtual Tours LLC"
            className="w-[250px]"
          />
        </Link>
        <div className="mt-[2.5rem]">
          <button
            className="text-[#B49167] gap-2 w-full rounded-lg flex items-center justify-start border border-[#B49167] p-4"
            onClick={toggleServicesDropdown}
          >
            Services
            <span>
              <Nav
                src={"./assets/icons/close.svg"}
                alt={"Dropdown"}
                width={15}
                height={15}
              />
            </span>
          </button>
          {isServicesDropdownOpen && (
            <ul className="mt-2">
              <li>
                <Link href="/services/web-development">
                  <button className="dropdown-item w-[50%] justify-start flex rounded-lg ml-[.5rem]">
                    Web Development
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/services/photography">
                  <button className="dropdown-item w-[50%] justify-start flex rounded-lg ml-[.5rem]">
                    Photography
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/services/virtual-tours">
                  <button className="dropdown-item w-[50%] justify-start flex rounded-lg ml-[.5rem]">
                    Virtual Tours
                  </button>
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
