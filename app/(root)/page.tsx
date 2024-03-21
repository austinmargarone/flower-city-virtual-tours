// import { UserButton } from "@clerk/nextjs";

import Hero from "@/components/home/Hero";
import ContractDeveloper from "@/components/services/ContractDeveloper";
import Media from "@/components/services/Media";
import WebDeveloper from "@/components/services/WebDeveloper";
import ServiceCards from "@/components/services/ServiceCards";

export default function Home() {
  return (
    <div>
      {/* <UserButton afterSignOutUrl="/" /> */}
      <section>
        <Hero />
      </section>
      <section>
        <h2 className="flex justify-center pt-[1rem]">Services</h2>
        <ServiceCards />
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
