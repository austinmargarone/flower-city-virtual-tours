import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header>
      <nav className="justify-between flex items-center fixed z-50 w-full gap-5 p-6 sm:px-12 bg-black">
        <Link href="/">
          <Image
            src="/companyLogo.png"
            width={400}
            height={100}
            alt="DevFlow"
          />
        </Link>
        <div className="flex items-center gap-[3rem]">
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
