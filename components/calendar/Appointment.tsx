"use client";
import React from "react";
import { InlineWidget } from "react-calendly";

const page = () => {
  return (
    <div
      className="w-full h-fit px-[1.25rem] xs:px-0"
      style={{ overflow: "hidden" }}
    >
      <InlineWidget url="https://calendly.com/flowercityvirtualtours" />
    </div>
  );
};

export default page;
