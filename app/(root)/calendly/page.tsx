import React from "react";
import Appointment from "@/components/calendar/Appointment";
const page = () => {
  return (
    <section
      className="mx-auto flex items-center h-screen w-full bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/background3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <div className="flex h-full w-full pt-[1.25rem]">
        <Appointment />
      </div>
    </section>
  );
};

export default page;
