import Image from "next/image";
import Link from "next/link";
import React from "react";

const Developer = () => {
  return (
    <section>
      <div className="min-w-[300px] max-w-[400px] mx-auto py-[1.5rem] bg-[#343A63] dark:bg-[#0D101E] rounded-md shadow-lg">
        <h2 className="sm:h2 h2mobile flex justify-center">
          Full-Stack Developer
        </h2>
        <div className="flex justify-center">
          <Image
            src="/Developer.jpeg"
            alt="Austin Margarone"
            width={200}
            height={200}
            className="rounded-full flex justify-center shadow-lg"
          />
        </div>
        <div className="flex justify-center mt-[1.25rem]">
          <Link href="https://austinmargarone.com/" target="_blank">
            <button className="hero-button shadow-lg">Austin Margarone</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Developer;
