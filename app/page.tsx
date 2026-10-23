import Hero from "@/components/home/Hero";
import VirtualTour from "@/components/home/VirtualTour";
import HomeText from "@/components/home/HomeText";
import Contact from "@/components/home/Contact";
import FeaturedWork from "@/components/home/FeaturedWork";
import RecentShoots from "@/components/home/RecentShoots";
import WebsiteShowcase from "@/components/home/WebsiteShowcase";
import ServiceCards from "@/components/services/cards/ServiceCards";
import Testimonials from "@/components/shared/Testimonials";
import { localBusinessJsonLd, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Websites, 3D Virtual Tours, Photography & Drone",
  description:
    "Bringing your business and property online with custom websites, Matterport 3D virtual tours, photography and FAA-certified drone, built to work together.",
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
        <WebsiteShowcase />
        <RecentShoots />
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
