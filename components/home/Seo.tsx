import Image from "next/image";
import React from "react";

const Seo = () => {
  return (
    <div className="w-full">
      <h2 className="h2 justify-center flex py-[1rem] text-white">
        SEO Optimization
      </h2>
      <div className="w-full lg:h-[45rem] max-w-[77.5rem] mx-auto flex border-tan border-rounded border shadow-lg rounded-lg">
        <Image
          src={"/seo.jpg"}
          alt={"SEO"}
          width={1248}
          height={500}
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Seo;
