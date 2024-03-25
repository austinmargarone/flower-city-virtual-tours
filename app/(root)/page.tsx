// import { UserButton } from "@clerk/nextjs";

import Hero from "@/components/home/Hero";
import ServiceSmall from "@/components/services/cards/ServiceSmall";
import VirtualTour from "@/components/home/VirtualTour";
import HomeText from "../../components/home/HomeText";
import Contact from "../../components/home/Contact";
import WebDeveloper from "@/components/home/WebDeveloper";
import Photography from "@/components/home/Photography";

export default function Home() {
  return (
    <div>
      {/* <UserButton afterSignOutUrl="/" /> */}
      <section>
        <Hero />
      </section>
      <article className="px-[1rem]">
        <section className="flex justify-center pt-[2.5rem]">
          <HomeText />
        </section>
        <section>
          <ServiceSmall />
        </section>
        <section>
          <WebDeveloper />
        </section>
        <section>
          <VirtualTour />
        </section>
        <section>
          <Photography />
        </section>
        <section>
          <Contact />
        </section>
      </article>
    </div>
  );
}
