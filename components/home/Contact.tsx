import { PHONE, PHONE_HREF } from "@/lib/site";
import ContactCard from "./ContactCard";

const ContactData = [
  {
    src: "/assets/icons/ContactTan.svg",
    alt: "Contact Form",
    title: "Contact Form",
    button: "/contact",
    description: "Send us a message any time and we'll get back to you within one business day.",
  },
  {
    src: "/assets/icons/PhoneTan.svg",
    alt: "Call or Text",
    title: "Call or Text",
    button: PHONE_HREF,
    description: `Rather talk it through? Reach us at ${PHONE.replace("-", "\u2011")}.`,
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
