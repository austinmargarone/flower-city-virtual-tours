import PageHeader from "@/components/shared/PageHeader";
import ServiceCards from "@/components/services/cards/ServiceCards";
import CallToAction from "@/components/shared/CallToAction";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Services | Web Development & Media",
  description:
    "Web design, development and SEO, plus real estate photography, Matterport 3D tours, drone and video walkthroughs for businesses and real estate.",
  path: "/services",
});

const Page = () => {
  return (
    <div className="pb-[1rem]">
      <PageHeader eyebrow="Services" title="What We Do">
        Two things, done well and done together: websites that bring in customers, and the media
        that makes your space look its best on them.
      </PageHeader>
      <div className="mt-6 px-[1rem]">
        <ServiceCards />
      </div>
      <CallToAction />
    </div>
  );
};

export default Page;
