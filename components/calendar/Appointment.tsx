"use client";
import React from "react";
import { InlineWidget } from "react-calendly";

const page = () => {
  return (
    <div className="w-full h-fit px-[1.25rem] sm:px-0 ">
      <InlineWidget
        url="https://calendly.com/flowercityvirtualtours"
        styles={{
          height: "1000px",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default page;
