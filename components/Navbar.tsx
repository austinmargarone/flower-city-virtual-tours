import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import MobileNav from "./MobileNav";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <header>
      <nav className="justify-between flex items-center fixed z-50 w-full gap-5 p-6 sm:px-12 bg-grey bg-light-blue dark:bg-dark-midnight">
        <Link href="/">
          <Image
            src="/companyLogo.png"
            width={400}
            height={100}
            alt="Flower City Virtual Tours LLC"
            className="w-[250px] sm:w-[250px] md:w-[325px] lg-w[400px]"
          />
        </Link>
        <div className="flex items-center gap-[1.25rem] lg:gap-[3rem]">
          <div className="hidden lg:flex">
            <ul className="flex gap-[1rem] text-white font-bold">
              <Link href="/about">
                <li>About</li>
              </Link>
              <Link href="/results">
                <li>Our Results</li>
              </Link>
              <Link href="/pricing">
                <li>Pricing</li>
              </Link>
              <Link href="/contact">
                <li>Contact</li>
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
