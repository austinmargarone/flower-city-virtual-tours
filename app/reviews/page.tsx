import PageHeader from "@/components/shared/PageHeader";
import Testimonials from "@/components/shared/Testimonials";
import CallToAction from "@/components/shared/CallToAction";
import { GOOGLE_REVIEWS_URL, testimonials } from "@/constants/work";
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
        Real feedback from the businesses, property owners and agents we&apos;ve worked with,
        as posted on Google.
      </PageHeader>
      <div className="mt-6 flex justify-center px-[1rem]">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center rounded border-2 border-tan px-6 font-bold uppercase tracking-[2px] text-white transition hover:bg-tan/20"
        >
          See our reviews on Google
        </a>
      </div>
      <div className="mt-10 px-[1rem]">
        <Testimonials heading="" />
      </div>
      <CallToAction title="Ready to be our next success story?" />
    </div>
  );
};

export default Page;
