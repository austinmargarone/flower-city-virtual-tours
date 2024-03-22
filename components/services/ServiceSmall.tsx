import React from "react";
import SmallServiceCards from "./cards/SmallServiceCards";

const ServiceCards = () => {
  return (
    <div className="flex flex-col gap-[1.25rem] mx-auto justify-center items-center py-[1.25rem]">
      <div className="w-full h-[20rem] px-[1rem]">
        <SmallServiceCards />
      </div>
    </div>
  );
};

export default ServiceCards;
