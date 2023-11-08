"use client";
import React from "react";

const CopyNumber = () => {
  function copyText(entryText: string) {
    navigator.clipboard.writeText(entryText);
  }
  return (
    <>
      <button onClick={() => copyText("5855451757")}>
        <p className="text-white">C: (585) 545-1757</p>
      </button>
    </>
  );
};

export default CopyNumber;
