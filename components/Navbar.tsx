"use client";
// import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { Nav } from "./svg";
import { useState } from "react";

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
            <span className="ml-[2rem] hidden sm:flex">
              <p className="text-[#B49167]">Web Development Division</p>
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
                  Our Services
                  <span>
                    <Nav
                      src={"./assets/icons/close.svg"}
                      alt={"Dropdown"}
                      width={15}
                      height={15}
                    />
                  </span>
                </span>
                {isServicesDropdownOpen && (
                  <ul className="w-[12rem] absolute top-full left-0 bg-[#101415] text-black shadow-lg py-[.75rem] px-[.75rem] rounded border border-[#B49167]">
                    <li>
                      <Link href="/services/web-design">
                        <button className="dropdown-button flex justify-start">
                          Web Design
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/web-development">
                        <button className="dropdown-button flex justify-start">
                          Web Development
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/seo">
                        <button className="dropdown-button flex justify-start">
                          SEO Optimization
                        </button>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <Link href="/calendly">
                <li>Consultation</li>
              </Link>
              <Link href="https://flowercityvirtualtours.com/" target="blank">
                <button className="navbar-button items-center flex">
                  <li>Visit Parent Site</li>
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
