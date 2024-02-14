"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [text, setText] = useState("");
  const quotes = [
    "Engage your audience ",
    "Boost your brand ",
    "Drive conversions ",
    "are tailored to your needs ",
    "Optimize your digital presence ",
    "Get more traffic ",
    "Deliver experiences ",
    "Grow your business ",
    "Increase revenue ",
    "Generate leads ",
    "Convert more customers ",
    "Improve your SEO ",
    "empower online growth ",
    "prioritize user experience ",
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setText((prevText) => {
        if (currentIndex <= quotes[quoteIndex].length) {
          return quotes[quoteIndex].slice(0, currentIndex++);
        } else {
          clearInterval(typingInterval);
          setTimeout(() => eraseText(), 2500); // Adjust time before erasing
          return prevText;
        }
      });
    }, 100); // Adjust typing speed here

    return () => clearInterval(typingInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quoteIndex]);

  const eraseText = () => {
    let currentIndex = quotes[quoteIndex].length;
    const deletingInterval = setInterval(() => {
      setText((prevText) => {
        if (currentIndex >= 0) {
          return quotes[quoteIndex].slice(0, currentIndex--);
        } else {
          clearInterval(deletingInterval);
          setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
          return prevText;
        }
      });
    }, 50); // Adjust deleting speed here
  };

  return (
    <section
      className="mx-auto flex justify-center items-center h-screen w-screen"
      style={{
        backgroundImage: "url('/background1.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="py-[2.5rem] px-[1rem] sm:px-[2rem] text-center md:text-left flex-wrap">
        <h1 className="hero-heading">We build custom websites that</h1>
        <p className="hero-paragraph">{text}</p>
        <Link href="/build">
          <button className="hero-button shadow-lg">Get started</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
