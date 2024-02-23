"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
// import { SignedOut } from "@clerk/nextjs";
// import { Button } from "@/components/ui/button";
import { menuLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16 bg-[#0D101E]">
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
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors lg:hidden"
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
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
          {/* <SignedOut>
            <div className="flex flex-col gap-4 mt-[1.5rem]">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className=" bg-[#B49167] small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className="text-white">Log In</span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="bg-[#B49167] small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-white">
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
