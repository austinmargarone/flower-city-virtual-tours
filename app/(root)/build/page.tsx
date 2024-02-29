import Build from "@/components/build/Build";
import React from "react";

const page = () => {
  return (
    <section
      className="mx-auto flex flex-col justify-center items-center w-screen py-[2rem]"
      style={{
        backgroundImage: "url('/background4.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // Add this line
      }}
    >
      <div className="bg-[#0D101E] p-[1rem] xs:p-[2rem] ss:p-[2.5rem] md:px-[3rem] border-[#B49167] shadow-lg border-[1.5px] rounded-lg">
        <h1 className="h1">Build Your Website</h1>
        <div>
          <Build />
        </div>
      </div>
    </section>
  );
};

export default page;
