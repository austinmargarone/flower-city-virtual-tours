import Link from "next/link";
import TourEmbed from "@/components/shared/TourEmbed";

/** Homepage 3D tour example: Serendipity Labs, a commercial coworking space. */
const VirtualTour = () => {
  return (
    <section className="mx-auto w-full max-w-[77.5rem]">
      <h2 className="h2 flex justify-center py-[1rem] text-white">Step Inside a 3D Tour</h2>
      <p className="mx-auto mb-6 max-w-[48rem] text-center text-lg leading-relaxed text-lightblue">
        Click and drag to look around, or use the dollhouse button to see the whole floor. This
        is how your customers can explore your space before they ever visit.
      </p>
      <TourEmbed id="WvpyR9oxStU" title="Serendipity Labs coworking office, 3D tour" />
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-white">
          <Link href="/work/serendipity-labs" className="font-bold hover:underline">
            Serendipity Labs
          </Link>
          <span className="text-paleblue"> · Coworking office · Commercial</span>
        </p>
        <Link href="/services/virtual-tours" className="font-bold text-tan hover:underline">
          See more 3D tours →
        </Link>
      </div>
    </section>
  );
};

export default VirtualTour;
