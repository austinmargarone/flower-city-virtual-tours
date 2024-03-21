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
