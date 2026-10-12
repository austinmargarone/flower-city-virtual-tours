import Image from "next/image";
import { Box } from "lucide-react";
import type { CaseStudy } from "@/constants/work";

type Props = { study: CaseStudy; sizes?: string; priority?: boolean; className?: string };

/** Case study cover photo, or a branded tile when the project has tours but no photos. */
const CaseStudyCover = ({ study, sizes, priority, className = "" }: Props) => {
  if (study.cover) {
    return (
      <Image
        src={study.cover}
        alt={study.coverAlt ?? study.client}
        width={1600}
        height={1000}
        sizes={sizes}
        priority={priority}
        className={`aspect-[16/10] w-full bg-black object-cover ${className}`}
      />
    );
  }
  return (
    <div
      className={`flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-charcoal via-indigo to-midnight text-center ${className}`}
    >
      <Box className="size-14 text-tan" strokeWidth={1.25} aria-hidden="true" />
      <p className="px-4 text-lg font-bold text-white">{study.client}</p>
      {study.tours && (
        <p className="text-sm font-bold uppercase tracking-wider text-tan">
          {study.tours.length} 3D tours
        </p>
      )}
    </div>
  );
};

export default CaseStudyCover;
