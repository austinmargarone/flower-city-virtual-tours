"use client";
import React from "react";

const CopyNumber = () => {
  function copyText(entryText: string) {
    navigator.clipboard.writeText(entryText);
    alert("Number copied to clipboard!");
  }

  return (
    <>
      <button
        onClick={() => copyText("5855015690")}
        className="w-full bg-[#B49167] shadow-lg p-[.25rem] rounded-[.17rem] text-dark-midnight"
      >
        <p className="text-white">(585) 501-5690</p>
      </button>
    </>
  );
};

export default CopyNumber;
