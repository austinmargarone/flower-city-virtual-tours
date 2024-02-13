import Image from "next/image";
import Link from "next/link";
import React from "react";

const Developer = () => {
  return (
    <section>
      <h2 className="flex justify-center">Lead Full-Stack Devloper</h2>
      <Link href="https://github.com/austinmargarone" target="_blank"></Link>
      <p className="flex justify-center">Austin Margarone</p>
      <Image
        src="/images/austin-margarone.jpg"
        alt="Austin Margarone"
        width={200}
        height={200}
        className="rounded-full"
      />
      <div className="flex gap-[2.25rem] pl-[2.5rem] pt-[.88rem]">
        {/* <Link
          href="https://www.linkedin.com/in/austin-margarone/"
          target="_blank"
        > */}
        <Image src={"/Social.svg"} width={24} height={24} alt="Github Link" />
        {/* </Link> */}
      </div>
    </section>
  );
};

export default Developer;
