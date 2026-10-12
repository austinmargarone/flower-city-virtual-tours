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
import { menuLinks, serviceGroups } from "@/constants";
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
            aria-label="Open menu"
            role="button"
            width={36}
            height={36}
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
            <p className="text-[#B49167]">Websites · 3D Tours · Drone</p>
          </span>
          <div className="mt-[2.5rem]">
            <button
              className="text-[#B49167] gap-2 w-full rounded-lg flex items-center justify-start border border-[#B49167] p-4"
              onClick={toggleServicesDropdown}
            >
              Services
              <span>
                <Nav aria-hidden="true" width={15} height={15} />
              </span>
            </button>
            {isServicesDropdownOpen && (
              <div className="mt-2 space-y-3">
                {serviceGroups.map((group) => (
                  <div key={group.title}>
                    <p className="ml-[.5rem] text-xs uppercase tracking-[0.15em] text-paleblue">
                      {group.title}
                    </p>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item.route}>
                          <SheetClose asChild>
                            <Link href={item.route}>
                              <button className="dropdown-item justify-start flex rounded-lg ml-[.5rem] text-left">
                                {item.label}
                              </button>
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <SheetClose asChild>
                  <Link href="/industries">
                    <button className="dropdown-item justify-start flex rounded-lg ml-[.5rem]">
                      Industries we serve
                    </button>
                  </Link>
                </SheetClose>
              </div>
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
