"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CopyNumber = () => {
  function copyText(entryText: string) {
    navigator.clipboard.writeText(entryText);
  }

  const notify = () =>
    toast("Number copied to clipboard!", {
      position: "top-center",
      autoClose: 4200,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "#0D101E",
        color: "#B49167",
        borderRadius: "10px",
        border: "2px solid #B49167",
      },
    });

  return (
    <>
      <button
        onClick={() => {
          copyText("5855015691");
          notify();
        }}
        className="w-full bg-[#B49167] shadow-lg p-[.25rem] rounded-[.17rem] text-dark-midnight"
      >
        <ToastContainer />
        <p className="text-white">(585) 501-5691</p>
      </button>
    </>
  );
};

export default CopyNumber;
