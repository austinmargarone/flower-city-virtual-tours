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
      <div>
        <Build />
      </div>
    </section>
  );
};

export default page;
