import { pageMeta } from "@/lib/site";
import About from "@/components/about/About";


export const metadata = pageMeta({
  title: "About Us",
  description:
    "Flower City Virtual Tours is a Rochester, NY studio building websites, Matterport 3D tours, photography and drone media for local businesses.",
  path: "/about",
});

export default function Page() {
  return (
    <section
      className="mx-auto flex min-h-screen flex-col justify-center p-[1rem] xs:p-[2rem] ss:p-[2.5rem] md:px-[3rem]"
      style={{
        backgroundImage: "url('/background3.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-[#101415] p-[1rem] xs:p-[2rem] ss:p-[2.5rem] md:px-[3rem] border-[#B49167] shadow-lg border-[1.5px] rounded-lg max-w-[900px] flex mx-auto my-[2rem]">
        <About />
      </div>
    </section>
  );
}
