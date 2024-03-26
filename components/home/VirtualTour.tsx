import React from "react";

const VirtualTour = () => {
  return (
    <div className="w-full">
      <h2 className="h2 justify-center flex py-[1rem] text-white">
        Virtual Tours
      </h2>

      <iframe
        className="w-full h-[33rem] lg:h-[45rem] max-w-[77.5rem] mx-auto flex border-tan border-rounded border shadow-lg rounded-lg"
        src="https://my.matterport.com/show/?m=Vu8vAVvcebN"
        allow="xr-spatial-tracking"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VirtualTour;
