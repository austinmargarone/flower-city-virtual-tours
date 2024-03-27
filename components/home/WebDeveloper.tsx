import React from "react";

const WebDeveloper = () => {
  return (
    <div className="w-full">
      <h2 className="h2 justify-center flex py-[1rem] text-white">
        Web Development
      </h2>
      <div className="w-full h-[33rem] lg:h-[45rem] max-w-[77.5rem] mx-auto flex border-tan border-rounded border shadow-lg rounded-lg bg-[#040219]">
        <div className="m-auto sm:flex hidden w-full h-full">
          <video
            width={500}
            height={1240}
            controls
            loop
            muted
            autoPlay
            className="w-full h-full"
          >
            <source src="./WebDevIntro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="m-auto flex sm:hidden w-full h-full">
          <video
            width={300}
            height={900}
            controls
            loop
            muted
            autoPlay
            className="w-fit h-full mx-auto flex"
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
