import Image from "next/image";
import Link from "next/link";
import React from "react";

const Developer = () => {
  return (
    <section>
      <h2 className="flex justify-center">Lead Full-Stack Devloper</h2>
      <div className="flex justify-center">
        <Image
          src="/Developer.jpeg"
          alt="Austin Margarone"
          width={200}
          height={200}
          className="rounded-full flex justify-center"
        />
      </div>
      <div className="flex justify-center mt-[1.25rem]">
        <Link href="https://austinmargarone.com/" target="_blank">
          <button className="hero-button shadow-lg">Austin Margarone</button>
        </Link>
      </div>
    </section>
  );
};

export default Developer;
