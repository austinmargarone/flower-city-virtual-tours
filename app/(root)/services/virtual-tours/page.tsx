import VirtualTours from "@/components/services/virtual tours/VirtualTours";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="h1 flex justify-center pt-[1.25rem] md:pt-[2.5rem]">
        Virtual Tours
      </h1>
      <div className="flex justify-center mt-[1rem]">
        <p className="p text-center flex max-w-[48rem]">
          Virtual tours are a great way to showcase a property or business. We
          offer high-quality virtual tours that are sure to impress your clients
          and customers. Contact us today to learn more about our virtual tour
          services.
        </p>
      </div>
      <VirtualTours />
    </div>
  );
};

export default page;
