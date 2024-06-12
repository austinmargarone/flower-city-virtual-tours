import Hero from "@/components/home/Hero";
import VirtualTour from "@/components/home/VirtualTour";
import HomeText from "../components/home/HomeText";
import Contact from "../components/home/Contact";
import ServiceCards from "@/components/services/cards/ServiceCards";
import Projects from "@/components/supabase/Projects";
import WebDeveloper from "@/components/services/WebDeveloper";

export default function Home() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <article className="px-[1rem] flex flex-col gap-[1.25rem] lg:gap-[2.5rem]">
        <div className="flex flex-col justify-center pt-[1.25rem] lg:pt-[2.5rem]">
          <HomeText />
          <ServiceCards />
        </div>
        <div>
          <WebDeveloper />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <VirtualTour />
        </div>
        <div className="flex-col justify-center pb-[1.25rem] lg:pb-[2.5rem]">
          <h2 className="h2 pb-[1.25rem] justify-center flex  text-white">
            Contact Us
          </h2>
          <Contact />
        </div>
      </article>
    </div>
  );
}
