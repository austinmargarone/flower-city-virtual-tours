import Link from "next/link";
import React from "react";

const WebDeveloper = () => {
  return (
    <div className="w-full">
      <Link href={"/services/web-development"}>
        <h2 className="h2 justify-center flex py-[1rem] text-white hover:animate-pulse">
          Web Development
        </h2>
      </Link>
      <div className="w-full h-fit max-w-[77.5rem] mx-auto flex border-tan border-rounded border shadow-lg rounded-lg bg-[#040219]">
        <div className="m-auto xs:flex hidden w-full h-full">
          <video
            width={500}
            height={1240}
            loop
            muted
            autoPlay
            className="w-full h-full rounded-lg"
          >
            <source src="./WebDevIntro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="m-auto flex xs:hidden w-full h-full">
          <video
            width={300}
            height={900}
            muted
            autoPlay
            className="w-fit h-full mx-auto flex rounded-lg"
          >
            <source src="./WebDevIntroMobile.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default WebDeveloper;
