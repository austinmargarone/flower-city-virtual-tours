import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/shared/Gallery";
import TourEmbed from "@/components/shared/TourEmbed";
import TourSwitcher from "@/components/shared/TourSwitcher";
import CaseStudyCover from "@/components/shared/CaseStudyCover";
import CallToAction from "@/components/shared/CallToAction";
import { caseStudies } from "@/constants/work";
import { pageMeta } from "@/lib/site";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props) {
  const c = caseStudies.find((x) => x.slug === params.slug);
  if (!c) return {};
  return pageMeta({
    title: `${c.client} Case Study`,
    description: c.summary,
    path: `/work/${c.slug}`,
    image: c.cover,
  });
}

const Page = ({ params }: Props) => {
  const c = caseStudies.find((x) => x.slug === params.slug);
  if (!c) notFound();

  return (
    <div className="px-[1rem] pt-[2rem] md:pt-[3rem]">
      <article className="mx-auto max-w-[60rem]">
        <Link href="/work" className="text-sm font-bold text-tan hover:underline">
          ← All work
        </Link>
        <p className="mt-6 font-bold uppercase tracking-[0.15em] text-tan">{c.category}</p>
        <h1 className="mt-2 text-[2rem] font-bold leading-tight text-white md:text-[2.75rem]">
          {c.client}
        </h1>
        <p className="mt-1 text-paleblue">{c.location}</p>
        <p className="mt-4 text-xl leading-relaxed text-lightblue">{c.summary}</p>

        <CaseStudyCover study={c} sizes="(max-width: 1024px) 100vw, 60rem" priority className="mt-8 rounded-lg border border-tan shadow-lg" />

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_16rem]">
          <div className="blog-prose">
            {c.story.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <aside className="h-fit rounded-lg border border-tan/50 bg-indigo p-5">
            <h2 className="font-bold uppercase tracking-wider text-tan">Services</h2>
            <ul className="mt-2 space-y-1 text-white">
              {c.services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            {c.results && (
              <>
                <h2 className="mt-5 font-bold uppercase tracking-wider text-tan">Results</h2>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-white">
                  {c.results.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </>
            )}
          </aside>
        </div>

        {c.testimonial && (
          <figure className="mt-10 rounded-lg border-l-4 border-tan bg-indigo p-6">
            <blockquote className="text-xl leading-relaxed text-white">
              “{c.testimonial.quote}”
            </blockquote>
            <figcaption className="mt-3 font-bold text-tan">{c.testimonial.name}</figcaption>
          </figure>
        )}

        {c.tours && c.tours.length > 0 && (
          <section className="mt-12">
            <h2 className="h2 text-left">{c.tours.length > 1 ? "Take the tours" : "Take the tour"}</h2>
            <p className="mb-4 mt-2 text-lightblue">
              Click and drag to look around, or use the dollhouse button to see the whole space.
            </p>
            {c.tours.length > 1 ? (
              <TourSwitcher
                pickerLabel={`${c.tours.length} tours`}
                tours={c.tours.map((t) => ({ id: t.id, label: t.label ?? t.title, title: t.title }))}
              />
            ) : (
              <TourEmbed id={c.tours[0].id} title={c.tours[0].title} />
            )}
          </section>
        )}

        {c.gallery && c.gallery.length > 0 && (
          <section className="mt-12">
            <h2 className="h2 mb-4 text-left">Gallery</h2>
            <Gallery images={c.gallery} />
          </section>
        )}
      </article>

      <CallToAction />
    </div>
  );
};

export default Page;
