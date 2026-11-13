import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found | Flower City Virtual Tours",
  description: "The page you're looking for doesn't exist or has moved.",
  // Next.js adds noindex to 404 responses automatically
};

const services = [
  { href: "/services/web-development", label: "Websites" },
  { href: "/services/virtual-tours", label: "3D Virtual Tours" },
  { href: "/services/photography", label: "Photography" },
  { href: "/services/drone", label: "Drone" },
  { href: "/services/video", label: "Video" },
];

const more = [
  { href: "/work", label: "Our work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

// Matches the homepage hero buttons
const buttonBase =
  "inline-flex h-12 w-[17.5rem] max-w-full items-center justify-center whitespace-nowrap rounded px-5 text-base font-bold uppercase tracking-[1.5px] shadow-lg transition";

export default function NotFound() {
  return (
    <section
      className="flex min-h-[80vh] w-full items-center justify-center pt-[5rem]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(16,20,21,0.78), rgba(16,20,21,0.92)), url('/background1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-[48rem] px-[1rem] py-[3rem] text-center">
        <p className="font-josefin text-[5rem] font-bold leading-none text-tan md:text-[7rem]">404</p>
        <h1 className="h1 mt-4">This room isn&apos;t on the floor plan</h1>
        <p className="mx-auto mt-4 max-w-[36rem] text-lg leading-relaxed text-lightblue">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Our site
          recently got a full rebuild, so an old link may have brought you here.
        </p>

        <div className="button-container mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className={`${buttonBase} bg-tan text-white hover:brightness-110`}>
            Back to home
          </Link>
          <Link
            href="/contact"
            className={`${buttonBase} border-2 border-tan bg-midnight/40 text-white hover:bg-tan/20`}
          >
            Contact us
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="font-bold uppercase tracking-[0.15em] text-tan">Services</h2>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="inline-block rounded-full border border-fadeblue/60 px-4 py-2 font-semibold text-lightblue transition hover:border-tan hover:text-white"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-paleblue">
            {more.map((m) => (
              <li key={m.href}>
                <Link href={m.href} className="underline-offset-4 hover:text-tan hover:underline">
                  {m.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-sm text-paleblue">
          Looking for something specific? Call{" "}
          <a href={PHONE_HREF} className="text-tan underline underline-offset-2">
            {PHONE}
          </a>{" "}
          and leave a voicemail.
        </p>
      </div>
    </section>
  );
}
