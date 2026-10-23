import { EMAIL_HREF, PHONE, PHONE_HREF } from "@/lib/site";
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
    description: `Rather talk it through? Give us a call at ${PHONE.replace("-", "\u2011")}.`,
  },
  {
    src: "/assets/icons/QuoteTan.svg",
    alt: "Email Us",
    title: "Email Us",
    button: EMAIL_HREF,
    description: "Send details, photos or plans to sales@flowercityvirtualtours.com.",
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
