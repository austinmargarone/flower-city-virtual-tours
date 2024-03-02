import React from "react";
import Appointment from "@/components/calendar/Appointment";
const page = () => {
  return (
    <section
      className="mx-auto flex items-center h-full w-full bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/background3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <div className="flex h-full w-full py-[1.25rem] md:py-0">
        <Appointment />
      </div>
    </section>
  );
};

export default page;
