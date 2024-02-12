import Image from "next/image";
import Link from "next/link";
import React from "react";
import CopyNumber from "./CopyNumber";

const Footer = () => {
  return (
    <div className="lg:items-center flex flex-col lg:flex-row py-[2.5rem] gap-[1rem] bg-light-blue dark:bg-dark-midnight px-[3rem]">
      <div className="flex flex-col gap-[.63rem] lg:w-[40%] xl:pl-[3.6rem]">
        <Link href="/">
          <div className="flex flex-col">
            <div className="text-white">
              Web Devlopment<span> by</span>
            </div>
            <Image
              src="/companyLogo.png"
              width={400}
              height={100}
              alt="Flower City Virtual Tours LLC"
              className="w-[125px] sm:w-[200px] md:w-[200px] lg-w[300px]"
            />
          </div>
        </Link>
        <div className="flex items-center gap-[1.2rem] md:mt-[.33rem]">
          <button className="text-white bg-light-tan w-[10rem] p-[.25rem] rounded-[.17rem]">
            Contact Us
          </button>
          <CopyNumber />
        </div>
      </div>
      <div className="flex flex-col lg:w-[60%]">
        <div className="">
          <ul className="flex gap-[1rem] text-white font-bold">
            <Link href="/request-appointment">
              <li>Request Appointment</li>
            </Link>
            <Link href="/privacy-policy">
              <li>Privacy Policy</li>
            </Link>
            <Link href="/terms-and-coditions">
              <li>Terms & Conditions </li>
            </Link>
            <Link href="/site-map">
              <li>Site Map</li>
            </Link>
          </ul>
        </div>
        <div className="h-0.5 border-b border-light-tan my-[.63rem]"></div>
        <div>
          <p className="text-[#D3D3D3]">
            © Copyright Flower City Virtual Tours LLC, All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
