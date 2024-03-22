// import { UserButton } from "@clerk/nextjs";

import Hero from "@/components/home/Hero";
import ContractDeveloper from "@/components/services/ContractDeveloper";
import Media from "@/components/services/Media";
import WebDeveloper from "@/components/services/WebDeveloper";
import ServiceSmall from "@/components/services/cards/ServiceSmall";
import VirtualTour from "@/components/home/VirtualTour";

export default function Home() {
  return (
    <div>
      {/* <UserButton afterSignOutUrl="/" /> */}
      <section>
        <Hero />
      </section>
      <section>
        <h2 className="flex justify-center pt-[1rem]">Services</h2>
        <ServiceSmall />
      </section>
      <section className="px-[1rem]">
        <VirtualTour />
      </section>
      <section>
        <ContractDeveloper />
      </section>
      <section>
        <WebDeveloper />
      </section>
      <section>
        <Media />
      </section>
    </div>
  );
}
