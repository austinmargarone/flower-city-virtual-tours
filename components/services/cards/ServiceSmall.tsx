import React from "react";
import SmallServiceCards from "./SmallServiceCards";

const ServiceCards = () => {
  const serviceData = [
    {
      src: "./assets/icons/window-code.svg",
      alt: "Websites",
      name: "Websites",
      description: "Custom Websites for business that are mobile responsive",
    },
    {
      src: "./assets/icons/layers.svg",
      alt: "Web Applications",
      name: "Web Applications",
      description: "Web Applications with databases, APIs, CMS and more",
    },
    {
      src: "./assets/icons/gallery.svg",
      alt: "Medias",
      name: "Media Solutions",
      description: "Commercial photography, virtual tours, and videoography",
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
