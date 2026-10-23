"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const quotes = [
  "Engage your audience",
  "Boost your brand",
  "Drive conversions",
  "Get more traffic",
  "Generate leads",
  "Improve your SEO",
  "Show off your space",
  "Grow your business",
];

const services = ["Websites", "3D Virtual Tours", "Photography", "Drone"];

// Both buttons share one size so they line up; only the fill differs.
const buttonBase =
  "inline-flex h-12 w-[17.5rem] max-w-full items-center justify-center whitespace-nowrap rounded px-5 text-base font-bold uppercase tracking-[1.5px] shadow-lg transition";

const Hero = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((i) => (i + 1) % quotes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="mx-auto flex min-h-screen w-full items-center justify-center supports-[height:100svh]:min-h-[100svh]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(16,20,21,0.55), rgba(16,20,21,0.55)), url('/background1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[60rem] px-[1rem] py-[2.5rem] text-center sm:px-[2rem]">
        <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-bold uppercase tracking-[0.18em] text-tan">
          {services.map((s, i) => (
            <li key={s} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden="true">·</span>}
              {s}
            </li>
          ))}
        </ul>
        <h1 className="hero-heading mt-3">Bringing Your Business &amp; Property Online</h1>
        <p className="mx-auto mt-4 max-w-[44rem] text-lg text-lightblue md:text-xl">
          Custom websites and immersive media built to work together, so customers can find you,
          explore your space and reach out before they ever walk through the door.
        </p>
        <p className="hero-paragraph mt-4" aria-live="polite">
          {quotes[quoteIndex]}
        </p>
        <div className="button-container mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/calendly" className={`${buttonBase} bg-tan text-white hover:brightness-110`}>
            Free consultation
          </Link>
          <Link
            href="/work"
            className={`${buttonBase} border-2 border-tan bg-midnight/40 text-white hover:bg-tan/20`}
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
