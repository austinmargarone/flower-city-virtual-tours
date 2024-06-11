import SmallServiceCards from "./SmallServiceCards";

const ServiceCards = () => {
  const serviceData = [
    {
      src: "./assets/icons/cube-skeletonTan.svg",
      alt: "Web Design",
      title: "Web Design",
      button: "/services/web-design",
      description:
        "We walk you through the design process to create a website that fits your brand.",
    },
    {
      src: "./assets/icons/window-codeTan.svg",
      alt: "Web Development",
      title: "Web Development",
      button: "/services/web-development",
      description:
        "We develop websites that are fast, secure, and optimized for all screen sizes.",
    },
    {
      src: "./assets/icons/galleryTan.svg",
      alt: "SEO Optimization",
      title: "SEO Optimization",
      button: "/services/seo",
      description:
        "We elevate your online presence by boosting search engine rankings and enhancing visibility.",
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
