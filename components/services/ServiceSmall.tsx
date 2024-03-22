import React from "react";
import SmallServiceCards from "./cards/SmallServiceCards";

const ServiceCards = () => {
  const serviceData = [
    {
      src: "./assets/icons/window-code.svg",
      alt: "Image Alt Text 1",
      name: "Websites",
      description: "Project Description 1",
    },
    {
      src: "./assets/icons/layers.svg",
      alt: "Image Alt Text 2",
      name: "Web Applications",
      description: "Project Description 2",
    },
    {
      src: "./assets/icons/gallery.svg",
      alt: "Image Alt Text 3",
      name: "Media",
      description: "Project Description 3",
    },
  ];

  return (
    <div className="flex flex-col gap-[1.25rem] mx-auto justify-center items-center py-[1.25rem] px-[1rem]">
      {serviceData.map((data, index) => (
        <SmallServiceCards key={index} ServiceData={data} />
      ))}
    </div>
  );
};

export default ServiceCards;
