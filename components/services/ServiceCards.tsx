import React from "react";
import WebDev from "./cards/WebDev";
import Contracts from "./cards/Contracts";
import VirtualTours from "./cards/VirtualTours";
import Photography from "./cards/Photography";

const ServiceCards = () => {
  return (
    <div className="flex flex-col gap-[1.25rem] mx-auto">
      <div>
        <WebDev />
      </div>
      <div>
        <Contracts />
      </div>
      <div>
        <VirtualTours />
      </div>
      <div>
        <Photography />
      </div>
    </div>
  );
};

export default ServiceCards;
