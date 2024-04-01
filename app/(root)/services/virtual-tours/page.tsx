import VirtualTours from "@/components/services/virtual tours/VirtualTours";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="h1 flex justify-center pt-[1.25rem] md:pt-[2.5rem]">
        Virtual Tours
      </h1>
      <VirtualTours />
    </div>
  );
};

export default page;
