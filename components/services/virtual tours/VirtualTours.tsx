import React from "react";
import VirtualTourCards from "./VirtualTourCards";

const VirtualTours = () => {
  const VirtualTours = [
    {
      // Keller Williams
      embed: "https://my.matterport.com/show/?m=Vu8vAVvcebN",
    },
    {
      embed: "https://my.matterport.com/show/?m=Vu8vAVvcebN",
    },
    {
      embed: "https://my.matterport.com/show/?m=Vu8vAVvcebN",
    },
  ];

  return (
    <div className="flex flex-col gap-[1.25rem] md:gap-[2.5rem] mx-auto justify-center items-center py-[1.25rem] md:py-[2.5rem] px-[1rem]">
      {VirtualTours.map((data, index) => (
        <VirtualTourCards key={index} VirtualTours={data} />
      ))}
    </div>
  );
};

export default VirtualTours;
