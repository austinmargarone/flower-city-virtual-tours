"use client";
import React, { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const quotes = [
    "Engage your audience",
    "Boost your brand",
    "Drive conversions",
    "are tailored to your needs",
    "Optimize your digital presence",
    "Get more traffic",
    "Deliver experiences",
    "Grow your business",
    "Increase revenue",
    "Generate leads",
    "Convert more customers",
    "Improve your SEO",
    "empower online growth",
    "prioritize user experience",
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);

  const scrollToRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setText(quotes[quoteIndex]);

    const displayDuration = 2500; // Adjust display duration here
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, displayDuration);

    return () => clearInterval(interval);
  }, [quoteIndex]);

  const handleScroll = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        className="mx-auto flex justify-center items-center h-screen w-full"
        style={{
          backgroundImage: "url('/background1.jpg')",
          backgroundSize: "cover",
          overflow: "hidden",
        }}
      >
        <div className="py-[2.5rem] px-[1rem] sm:px-[2rem] text-center md:text-left flex-wrap">
          <h1 className="hero-heading">We build custom websites that</h1>
          <p className="hero-paragraph">{text}</p>
          <button className="hero-button shadow-lg" onClick={handleScroll}>
            Get started
          </button>
        </div>
      </section>
      <section ref={scrollToRef} className="target-section">
        {/* The content you want to scroll to */}
      </section>
    </>
  );
};

export default Hero;
