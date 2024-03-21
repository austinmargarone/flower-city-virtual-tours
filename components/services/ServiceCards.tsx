import React from "react";
import WebDev from "./cards/WebDev";
import Contracts from "./cards/Contracts";
import VirtualTours from "./cards/VirtualTours";
import Photography from "./cards/Photography";

const ServiceCards = () => {
  return (
    <div className="flex flex-col gap-[1.25rem] mx-auto justify-center items-center py-[1.25rem]">
      <div className="w-full h-[20rem] px-[1rem]">
        <WebDev />
      </div>
      <div className="w-full h-[20rem] px-[1rem]">
        <Contracts />
      </div>
      <div className="w-full h-[20rem] px-[1rem]">
        <VirtualTours />
      </div>
      <div className="w-full h-[20rem] px-[1rem]">
        <Photography />
      </div>
    </div>
  );
};

export default ServiceCards;
