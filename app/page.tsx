import Hero from "@/components/home/Hero";
import VirtualTour from "@/components/home/VirtualTour";
import HomeText from "@/components/home/HomeText";
import Contact from "@/components/home/Contact";
import FeaturedWork from "@/components/home/FeaturedWork";
import ServiceCards from "@/components/services/cards/ServiceCards";
import WebDeveloper from "@/components/services/WebDeveloper";
import Testimonials from "@/components/shared/Testimonials";
import { localBusinessJsonLd, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Rochester Web Design, 3D Virtual Tours & Drone",
  description:
    "Custom websites, Matterport 3D virtual tours, photography and FAA-certified drone services for Rochester, NY businesses. One local team for your whole online presence.",
  path: "/",
});

export default function Home() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <article className="flex flex-col gap-[2.5rem] px-[1rem] py-[2.5rem] lg:gap-[4rem] lg:py-[4rem]">
        <div className="flex flex-col justify-center">
          <HomeText />
          <ServiceCards />
        </div>
        <FeaturedWork />
        <div>
          <WebDeveloper />
        </div>
        <div>
          <VirtualTour />
        </div>
        <Testimonials limit={4} />
        <div className="flex-col justify-center">
          <h2 className="h2 flex justify-center pb-[1.25rem] text-white">Contact Us</h2>
          <Contact />
        </div>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </div>
  );
}
