import Image from "next/image";
import Link from "next/link";
import React from "react";
import CopyNumber from "./CopyNumber";

const Footer = () => {
  return (
    <div className="lg:items-center flex flex-col lg:flex-row py-[1.5rem] lg:py-[2.5rem] gap-[1rem] border-t-[1.5px] border-t-[#B49167] bg-[#101415] lg:px-[3rem] shadow-lg">
      <div className="flex flex-col gap-[.63rem] xl:pl-[3.6rem] mx-auto">
        <Link href="https://flowercityvirtualtours.com" target="_blank">
          <Image
            src="/companyLogo.png"
            width={400}
            height={100}
            alt="Flower City Virtual Tours LLC"
            className="w-[250px] md:w-[275px] lg:w-[300px] mx-auto"
          />
        </Link>
        <div className="flex items-center gap-[1.2rem] md:mt-[.33rem] w-full">
          <div className="w-[45%] button-container">
            <Link href={"/contact"}>
              <button className="text-white shadow-lg bg-tan w-full p-[.25rem] rounded-[.17rem]">
                Contact
              </button>
            </Link>
          </div>
          <div className="w-[55%] button-container">
            <CopyNumber />
          </div>
        </div>
      </div>
      <div className="lg:flex flex-col lg:w-[60%] hidden">
        <div className="">
          <ul className="flex gap-[1rem] text-white font-bold">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/calendly">
              <li>Consultation</li>
            </Link>
            <Link href="/build">
              <li>Request A Quote</li>
            </Link>
          </ul>
        </div>
        <div className="h-0.5 border-b border-tan my-[.63rem]"></div>
        <div>
          <p className="text-tan">
            © Copyright Flower City Virtual Tours LLC, All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
