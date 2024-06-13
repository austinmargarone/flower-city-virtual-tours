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
    <section className="flex h-full flex-col gap-6 pt-6 bg-[#101415]">
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
              } gap-4 flex items-center justify-start bg-[#101415] p-4`}
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
    <div className="lg:hidden">
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
        <SheetContent
          side="right"
          className="bg-[#101415] border-[#B49167] max-h-screen overflow-y-auto"
        >
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/companyLogo.png"
              width={400}
              height={100}
              alt="Flower City Virtual Tours LLC"
              className="w-[250px]"
            />
          </Link>
          <span className="ml-[3rem] flex flex-col">
            <p className="text-[#B49167]">Web Solutions Division</p>
          </span>
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
                  <Link href="/services/web-design">
                    <SheetClose asChild>
                      <button className="dropdown-item justify-start flex rounded-lg ml-[.5rem]">
                        Web Design
                      </button>
                    </SheetClose>
                  </Link>
                </li>
                <li>
                  <Link href="/services/web-development">
                    <SheetClose asChild>
                      <button className="dropdown-item justify-start flex rounded-lg ml-[.5rem]">
                        Web Development
                      </button>
                    </SheetClose>
                  </Link>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link href="/services/seo">
                      <button className="dropdown-item justify-start flex rounded-lg ml-[.5rem]">
                        SEO Optimization
                      </button>
                    </Link>
                  </SheetClose>
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
    </div>
  );
};

export default MobileNav;
