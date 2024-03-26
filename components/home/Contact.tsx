import React from "react";
import ContactCard from "./ContactCard";

const ContactData = [
  {
    src: "./assets/icons/ContactTan.svg",
    alt: "Contact Form",
    title: "Contact Form",
    button: "/contact",
    description: "Fill out our contact form to get in touch with us",
  },
  {
    src: "./assets/icons/PhoneTan.svg",
    alt: "Schedule Consultation",
    title: "Schedule Consultation",
    button: "/calendly",
    description: "Schedule a consultation with us to discuss your project",
  },
  {
    src: "./assets/icons/QuoteTan.svg",
    alt: "Request a Quote",
    title: "Request a Quote",
    button: "/build",
    description: "Fill out our form to get a quote for your project",
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[1.25rem] mx-auto justify-center items-center w-full">
      {ContactData.map((data, index) => (
        <ContactCard key={index} ContactData={data} />
      ))}
    </div>
  );
};

export default Contact;
