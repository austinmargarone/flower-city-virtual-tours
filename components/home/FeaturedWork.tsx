import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/constants/work";

const FeaturedWork = () => {
  const featured = caseStudies.slice(0, 3);
  return (
    <section className="mx-auto w-full max-w-[77.5rem]">
      <h2 className="h2 flex justify-center py-[1rem]">Recent Work</h2>
      <ul className="grid grid-cols-1 gap-[1.25rem] ss:grid-cols-2 md:grid-cols-3">
        {featured.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/work/${c.slug}`}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-tan/50 bg-indigo shadow-lg transition hover:-translate-y-0.5 hover:border-tan"
            >
              <Image
                src={c.cover}
                alt={c.coverAlt}
                width={800}
                height={500}
                sizes="(max-width: 580px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="aspect-[16/10] w-full bg-black object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm font-bold uppercase tracking-wider text-tan">{c.category}</p>
                <h3 className="mt-1 text-xl font-bold text-white">{c.client}</h3>
                <p className="mt-2 flex-1 text-lightblue">{c.summary}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-center">
        <Link href="/work" className="font-bold text-tan hover:underline">
          See all of our work →
        </Link>
      </div>
    </section>
  );
};

export default FeaturedWork;
