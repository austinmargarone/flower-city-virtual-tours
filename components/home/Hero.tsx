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
      className="mx-auto flex min-h-[85vh] w-full items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(16,20,21,0.55), rgba(16,20,21,0.55)), url('/background1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[60rem] px-[1rem] py-[2.5rem] text-center sm:px-[2rem]">
        <p className="font-bold uppercase tracking-[0.2em] text-tan">Rochester, NY</p>
        <h1 className="hero-heading mt-2">
          Websites, 3D Tours &amp; Drone for Rochester Businesses
        </h1>
        <p className="mx-auto mt-4 max-w-[44rem] text-lg text-lightblue md:text-xl">
          One local team for your website, Matterport virtual tour, photography and aerial
          footage, so your business looks as good online as it does in person.
        </p>
        <p className="hero-paragraph mt-4" aria-live="polite">
          {quotes[quoteIndex]}
        </p>
        <div className="button-container mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/calendly">
            <button className="hero-button shadow-lg">Free consultation</button>
          </Link>
          <Link href="/work">
            <button className="rounded border-2 border-tan px-5 py-2 text-lg font-bold uppercase tracking-[2px] text-white">
              See our work
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
