import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF, pageMeta } from "@/lib/site";
import Contact from "@/components/contact/Contact";

// https://www.freepik.com/free-photo/hex-background-networking_66468510.htm#query=background%20hex&position=28&from_view=search&track=ais&uuid=d724eaa8-ec27-4d35-848c-53b1091d2be5 Image by pikisuperstar


export const metadata = pageMeta({
  title: "Contact Us",
  description:
    "Questions about a website, virtual tour or drone shoot? Send Flower City Virtual Tours a message. Based in Rochester, NY.",
  path: "/contact",
});

export default function Page() {
  return (
    <section
      className="mx-auto flex flex-col justify-center items-center h-screen w-screen"
      style={{
        backgroundImage: "url('/background3.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-[#101415] p-[1rem] xs:p-[2rem] ss:p-[2.5rem] md:px-[3rem] border-[#B49167] shadow-lg border-[1.5px] rounded-lg">
        <h1 className="h1">Contact Us</h1>
        <div className="flex justify-center py-[1.25rem] sm:py-[2.5rem]">
          <Contact />
        </div>
        <p className="text-center text-lightblue">
          Or call{" "}
          <a href={PHONE_HREF} className="font-bold text-tan underline">
            {PHONE}
          </a>{" "}
          · email{" "}
          <a href={EMAIL_HREF} className="break-all font-bold text-tan underline">
            {EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
