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
        "We support businesses with websites that are fast, secure, and mobile-friendly",
    },
    {
      src: "./assets/icons/galleryTan.svg",
      alt: "SEO Optimization",
      title: "SEO Optimization",
      button: "/services/seo",
      description:
        "We help businesses rank higher on search engines and increase their online visibility",
    },
    {
      src: "./assets/icons/cube-skeletonTan.svg",
      alt: "Virtual Tours",
      title: "Virtual Tours",
      button: "/services/virtual-tours",
      description:
        "Our virtual tours are perfect to showcase your property online and in 3D",
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
