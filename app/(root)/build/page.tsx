import Build from "@/components/build/Build";
import React from "react";

const page = () => {
  return (
    <section
      className="mx-auto flex flex-col justify-center items-center h-screen w-screen"
      style={{
        backgroundImage: "url('/background4.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="dark:bg-[#0D101E] bg-[#343A63] p-[1rem] xs:p-[2rem] ss:p-[2.5rem] md:px-[3rem] border-black dark:border-[#B49167] shadow-lg border-[1.5px] rounded-lg">
        <h1 className="h1">Build Your Website</h1>
        <div>
          <Build />
        </div>
      </div>
    </section>
  );
};

export default page;
