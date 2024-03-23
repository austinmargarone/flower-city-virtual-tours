"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <header>
      <nav className="justify-between flex items-center z-50 w-full gap-5 p-6 sm:px-12 bg-dark-midnight border-b-[#B49167] border-b shadow-lg">
        <Link href="/">
          <div className="flex flex-col">
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
              className="w-[200px] md:w-[250px] lg:w-[300px]"
            />
          </div>
        </Link>
        <div className="flex items-center gap-[1.25rem] lg:gap-[3rem]">
          <div className="hidden lg:flex items-center">
            <ul className="flex gap-[1rem] text-white font-bold items-center">
              <li
                className="relative"
                onMouseEnter={toggleServicesDropdown}
                onMouseLeave={toggleServicesDropdown}
              >
                <span>Our Services</span>
                {isServicesDropdownOpen && (
                  <ul className="w-[12rem] absolute top-full left-0 bg-[#0D101E] text-black shadow-lg py-[.75rem] px-[.75rem] rounded border border-[#B49167]">
                    <li>
                      <Link href="/services/web-development">
                        <button className="dropdown-button flex justify-start">
                          Web Development
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/virtual-tours">
                        <button className="dropdown-button flex justify-start">
                          Virtual Tours
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/photography">
                        <button className="dropdown-button flex justify-start">
                          Photography
                        </button>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <Link href="/pricing">
                <li>Pricing</li>
              </Link>
              <Link href="/about">
                <li>About</li>
              </Link>
              <Link href="/blog">
                <li>Blog</li>
              </Link>
              <Link href="/calendly">
                <button className="navbar-button items-center flex">
                  <li>Consultation</li>
                </button>
              </Link>
            </ul>
          </div>
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10",
                },
                variables: {
                  colorPrimary: "#ff7000",
                },
              }}
            />
          </SignedIn>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
