import { pageMeta } from "@/lib/site";
import React from "react";
import Appointment from "@/components/calendar/Appointment";


export const metadata = pageMeta({
  title: "Book a Free Consultation",
  description:
    "Pick a time that works for you to talk through your website, virtual tour or media project with our Rochester team.",
  path: "/calendly",
});

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
