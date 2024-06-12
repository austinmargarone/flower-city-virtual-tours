import Link from "next/link";
import React from "react";

const VirtualTour = () => {
  return (
    <div className="w-full">
      <h2 className="h2 justify-center flex py-[1rem] text-white hover:animate-pulse">
        Virtual Tours
      </h2>
      <div className="flex justify-center mb-[1rem]">
        <p className="p text-center flex max-w-[48rem]">
          We leverage advanced Matterport cameras to meticulously capture and
          craft immersive virtual tours, allowing your audience to explore
          spaces with unparalleled detail and realism.
        </p>
      </div>
      <Link href={"services/virtual-tours"}>
        <button className="text-white shadow-lg bg-tan w-[10rem] p-[.25rem] rounded-[.17rem] mx-auto flex mb-[1rem]">
          <p className="mx-auto flex">Learn More</p>
        </button>
      </Link>
      <iframe
        className="w-full h-[33rem] sm:h-[35rem] md:h-[41rem] lg:h-[45rem] max-w-[77.5rem] mx-auto flex border-tan border-rounded border shadow-lg rounded-lg"
        src="https://my.matterport.com/show/?m=WvpyR9oxStU"
        allow="xr-spatial-tracking"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VirtualTour;
