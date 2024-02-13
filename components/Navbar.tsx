import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import MobileNav from "./MobileNav";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <header>
      <nav className="justify-between flex items-center z-50 w-full gap-5 p-6 sm:px-12 bg-grey bg-light-blue dark:bg-dark-midnight">
        <Link href="/">
          <div className="flex flex-col">
            <div className="text-white">
              Web Development<span> by</span>
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
        <div className="flex items-center gap-[1.25rem] lg:gap-[3rem]">
          <div className="hidden lg:flex items-center">
            <ul className="flex gap-[1rem] text-white font-bold items-center">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/about">
                <li>About</li>
              </Link>
              <Link href="/contact">
                <li>Contact</li>
              </Link>
              <Link href="/build">
                <button className="navbar-button items-center flex">
                  <li>Build</li>
                </button>
              </Link>
            </ul>
          </div>
          <Theme />
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
