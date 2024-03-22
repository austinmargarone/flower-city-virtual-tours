import React from "react";
import VirtualTourCards from "./VirtualTourCards";

const VirtualTours = () => {
  const VirtualTours = [
    {
      // Keller Williams
      embed: "https://my.matterport.com/show/?m=Vu8vAVvcebN",
    },
    {
      // Aarons Alley
      embed: "https://my.matterport.com/show/?m=Yug3Wm4ZsKC",
    },
    {
      // Guest Barn
      embed: "https://my.matterport.com/show/?m=YN4DWeXcQ2p",
    },
    {
      // HDP
      embed: "https://my.matterport.com/show/?m=MnvsFYd5SXE",
    },
    {
      // DeCarolis Buffalo
      embed: "https://my.matterport.com/show/?m=dTursFxbP1u",
    },
    {
      // Serendipity Labs
      embed: "https://my.matterport.com/show/?m=WvpyR9oxStU",
    },
    {
      // MCH
      embed: "https://my.matterport.com/show/?m=MRKsLeTQbbN",
    },
    {
      // The Nest Cottage
      embed: "https://my.matterport.com/show/?m=zN2vzBPQ6kP",
    },
    {
      // 650 Wild Mallard
      embed: "https://my.matterport.com/show/?m=1A8zFLesAh3",
    },
    {
      // 609 Wild Mallard
      embed: "https://my.matterport.com/show/?m=Xjuo4yMEVqQ",
    },
    {
      // 28 Great Oaks Lane
      embed: "https://my.matterport.com/show/?m=qzjkH94yzsP",
    },
    {
      // Strawberry Castle
      embed: "https://my.matterport.com/show/?m=f7ZjbwNGHrp",
    },
    {
      // Strawberry Castle Garage
      embed: "https://my.matterport.com/show/?m=KPP8WwjcLc4",
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
