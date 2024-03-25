import React from "react";
import SmallServiceCards from "./SmallServiceCards";

const ServiceCards = () => {
  const serviceData = [
    {
      src: "./assets/icons/window-code.svg",
      alt: "Web Development",
      name: "Web Development",
      description: "Custom Websites for business that are mobile responsive",
    },
    {
      src: "./assets/icons/layers.svg",
      alt: "Virtual Tours",
      name: "Virtual Tours",
      description: "We create digital twins of your business for online tours",
    },
    {
      src: "./assets/icons/gallery.svg",
      alt: "Photography",
      name: "Media Solutions",
      description:
        "Commercial photography, floor plans, drone and videoography",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-[1.25rem] mx-auto justify-center items-center py-[1.25rem]">
      {serviceData.map((data, index) => (
        <SmallServiceCards key={index} ServiceData={data} />
      ))}
    </div>
  );
};

export default ServiceCards;
