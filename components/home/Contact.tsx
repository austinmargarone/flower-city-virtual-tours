import React from "react";
import ContactCard from "./ContactCard";

const ContactData = [
  {
    src: "./assets/icons/window-code.svg",
    alt: "Contact Form",
    title: "Contact Form",
    button: "/contact",
    description: "Fill out our contact form to get in touch with us",
  },
  {
    src: "./assets/icons/window-code.svg",
    alt: "Schedule Consultation",
    title: "Schedule Consultation",
    button: "/calendly",
    description: "Schedule a consultation with us to discuss your project",
  },
  {
    src: "./assets/icons/window-code.svg",
    alt: "Request a Quote",
    title: "Request a Quote",
    button: "/build",
    description: "Fill out our form to get a quote for your project",
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[1.25rem] mx-auto justify-center items-center py-[1.25rem]">
      {ContactData.map((data, index) => (
        <ContactCard key={index} ContactData={data} />
      ))}
    </div>
  );
};

export default Contact;
