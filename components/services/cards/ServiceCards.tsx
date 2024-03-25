import React from "react";
import SmallServiceCards from "./SmallServiceCards";

const ServiceCards = () => {
  const serviceData = [
    {
      src: "./assets/icons/window-code.svg",
      alt: "Web Development",
      title: "Web Development",
      button: "/services/web-development",
      description: "Custom Websites for business that are mobile responsive",
    },
    {
      src: "./assets/icons/layers.svg",
      alt: "Virtual Tours",
      title: "Virtual Tours",
      button: "/services/virtual-tours",
      description: "We create digital twins of physical spaces",
    },
    {
      src: "./assets/icons/gallery.svg",
      alt: "Photography",
      title: "Photography",
      button: "/services/photography",
      description:
        "Commercial photography, floor plans, drone and videoography",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-[1.25rem] mx-auto justify-center items-center py-[1.25rem] w-full">
      {serviceData.map((data, index) => (
        <SmallServiceCards key={index} ServiceData={data} />
      ))}
    </div>
  );
};

export default ServiceCards;
