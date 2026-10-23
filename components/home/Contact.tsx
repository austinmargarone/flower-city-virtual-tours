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
    alt: "Call Us",
    title: "Call Us",
    button: PHONE_HREF,
    description: `Call ${PHONE.replace("-", "\u2011")} and leave a voicemail. We'll call you back.`,
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
