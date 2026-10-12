import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Discover ROC Blog | Flower City Virtual Tours",
  description:
    "Guides to Rochester, NY's parks, museums, theaters and local favorites from Flower City Virtual Tours.",
  alternates: { canonical: "/blog" },
};

const Page = () => {
  const posts = getAllPosts();

  return (
    <div className="px-[1rem] py-[2rem] md:py-[3rem]">
      <div className="mx-auto max-w-[48rem] text-center">
        <p className="font-bold uppercase tracking-[0.15em] text-tan">Discover ROC</p>
        <h1 className="h1 mt-2">Exploring Rochester, NY</h1>
        <p className="mt-3 text-lightblue">
          Our guide to the parks, museums, theaters and local spots that make the Flower City.
        </p>
      </div>

      <ul className="mx-auto mt-10 grid max-w-[77.5rem] gap-6 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-tan/40 bg-indigo shadow-lg transition hover:-translate-y-0.5 hover:border-tan"
            >
              {p.coverImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.coverImage}
                  alt=""
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-5">
                <time dateTime={p.date} className="text-sm text-paleblue">
                  {formatDate(p.date)}
                </time>
                <h2 className="mt-2 text-lg font-bold leading-snug text-white">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-lightblue">{p.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
