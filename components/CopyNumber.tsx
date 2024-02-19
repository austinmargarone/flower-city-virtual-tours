"use client";
import React from "react";

const CopyNumber = () => {
  function copyText(entryText: string) {
    navigator.clipboard.writeText(entryText);
  }
  return (
    <>
      <button onClick={() => copyText("5855015690")} className="w-full">
        <p className="text-white">C: (585) 501-5690</p>
      </button>
    </>
  );
};

export default CopyNumber;
