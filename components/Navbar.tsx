"use client";
// import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { Nav } from "./svg";
import { useState } from "react";
import { serviceGroups } from "@/constants";

const Navbar = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <header>
      <nav className="justify-between flex items-center z-50 w-full gap-5 p-6 sm:px-12 bg-[#101415] border-b-[#B49167] border-b shadow-lg">
        <Link href="/">
          <div className="flex items-center">
            <div
              className="
              font-bold
              text-white
              text-md
              md:text-xl
              italic
            "
            ></div>
            <Image
              src="/companyLogo.png"
              width={400}
              height={100}
              alt="Flower City Virtual Tours LLC"
              className="w-[250px] lg:w-[300px]"
            />
            <span className="ml-[2rem] hidden xl:flex">
              <p className="text-[#B49167]">Websites · 3D Tours · Photography · Drone</p>
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-[1.25rem] lg:gap-[3rem]">
          <div className="hidden lg:flex items-center">
            <ul className="flex gap-[1rem] text-white font-bold items-center">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/about">
                <li>About</li>
              </Link>
              <li
                className="relative"
                onMouseEnter={toggleServicesDropdown}
                onMouseLeave={toggleServicesDropdown}
              >
                <span className="flex items-center gap-1">
                  <Link href="/services">Our Services</Link>
                  <span>
                    <Nav aria-hidden="true" width={15} height={15} />
                  </span>
                </span>
                {isServicesDropdownOpen && (
                  <div className="w-[17rem] absolute top-full left-0 bg-[#101415] shadow-lg py-[.75rem] px-[.75rem] rounded border border-[#B49167]">
                    {serviceGroups.map((group) => (
                      <div key={group.title} className="mb-2 last:mb-0">
                        <p className="px-1 pb-1 text-xs uppercase tracking-[0.15em] text-paleblue">
                          {group.title}
                        </p>
                        <ul>
                          {group.items.map((item) => (
                            <li key={item.route}>
                              <Link href={item.route}>
                                <button className="dropdown-button flex justify-start w-full text-left">
                                  {item.label}
                                </button>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="mt-2 border-t border-tan/30 pt-2">
                      <Link href="/services">
                        <button className="dropdown-button flex justify-start w-full">All services</button>
                      </Link>
                      <Link href="/industries">
                        <button className="dropdown-button flex justify-start w-full">Industries we serve</button>
                      </Link>
                    </div>
                  </div>
                )}
              </li>
              <Link href="/work">
                <li>Our Work</li>
              </Link>
              <Link href="/pricing">
                <li>Pricing</li>
              </Link>
              <Link href="/blog">
                <li>Blog</li>
              </Link>
              <Link href="/contact">
                <button className="navbar-button items-center flex">
                  <li>Free Consultation</li>
                </button>
              </Link>
            </ul>
          </div>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
