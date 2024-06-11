import ContactCard from "./ContactCard";

const ContactData = [
  {
    src: "./assets/icons/ContactTan.svg",
    alt: "Contact Form",
    title: "Contact Form",
    button: "/contact",
    description:
      "Our contact form is available 24/7 for any questions you may have.",
  },
  {
    src: "./assets/icons/PhoneTan.svg",
    alt: "Schedule Consultation",
    title: "Schedule Consultation",
    button: "/calendly",
    description:
      "Schedule a consultation at your convenience to discuss your project.",
  },
  {
    src: "./assets/icons/QuoteTan.svg",
    alt: "Request a Quote",
    title: "Request a Quote",
    button: "/build",
    description:
      "Already have an idea in mind? Request a quote today to get started!",
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
