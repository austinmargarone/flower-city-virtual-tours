import React from "react";
import SmallServiceCards from "./SmallServiceCards";

const ServiceCards = () => {
  const serviceData = [
    {
      src: "./assets/icons/window-codeTan.svg",
      alt: "Web Development",
      title: "Web Development",
      button: "/services/web-development",
      description:
        "We support small businesses with custom websites that are fast, secure, and mobile-friendly",
    },
    {
      src: "./assets/icons/cube-skeletonTan.svg",
      alt: "Virtual Tours",
      title: "Virtual Tours",
      button: "/services/virtual-tours",
      description:
        "Our virtual tours are perfect to showcase your property online and in 3D",
    },
    {
      src: "./assets/icons/galleryTan.svg",
      alt: "Photography",
      title: "Photography",
      button: "/services/photography",
      description:
        "We offer professional photography services to help your property stand out online",
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
