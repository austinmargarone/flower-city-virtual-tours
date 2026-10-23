import PageHeader from "@/components/shared/PageHeader";
import Testimonials from "@/components/shared/Testimonials";
import CallToAction from "@/components/shared/CallToAction";
import { testimonials } from "@/constants/work";
import { BUSINESS_NAME, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Client Reviews",
  description: `Read what ${testimonials.length} clients say about working with ${BUSINESS_NAME} on websites, Matterport 3D tours, photography and drone.`,
  path: "/reviews",
});


const Page = () => {
  return (
    <div className="pb-[1rem]">
      <PageHeader eyebrow="Reviews" title="What Our Clients Say">
        Real feedback from the businesses, property owners and agents we&apos;ve worked with.
      </PageHeader>
      <div className="mt-10 px-[1rem]">
        <Testimonials heading="" />
      </div>
      <CallToAction title="Ready to be our next success story?" />
    </div>
  );
};

export default Page;
