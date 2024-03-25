import React from "react";

const VirtualTour = () => {
  return (
    <div className="w-full">
      <iframe
        className="w-full h-[33rem] lg:h-[42rem] max-w-[75rem] mx-auto flex border-black border-rounded border-[3px] shadow-lg rounded-lg"
        src="https://my.matterport.com/show/?m=Vu8vAVvcebN"
        allow="xr-spatial-tracking"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VirtualTour;
