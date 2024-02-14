import Contact from "@/components/contact/Contact";

// https://www.freepik.com/free-photo/hex-background-networking_66468510.htm#query=background%20hex&position=28&from_view=search&track=ais&uuid=d724eaa8-ec27-4d35-848c-53b1091d2be5 Image by pikisuperstar

export default function Page() {
  return (
    <section
      className="mx-auto flex flex-col justify-center items-center h-screen w-screen"
      style={{
        backgroundImage: "url('/background3.jpg')",
        backgroundSize: "cover",
      }}
    >
      <h1 className="h1">Contact Us</h1>
      <div className="flex justify-center py-[1.25rem] sm:py-[2.5rem]">
        <Contact />
      </div>
    </section>
  );
}
