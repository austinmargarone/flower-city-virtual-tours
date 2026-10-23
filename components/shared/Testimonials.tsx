import Link from "next/link";
import { testimonials } from "@/constants/work";

type Props = {
  /** Show only the first N reviews, plus a button to the full reviews page */
  limit?: number;
  heading?: string;
};

const Testimonials = ({ limit, heading = "What Clients Say" }: Props) => {
  const items = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <section className="mx-auto w-full max-w-[77.5rem]">
      {heading && <h2 className="h2 flex justify-center py-[1rem]">{heading}</h2>}
      <ul className="grid grid-cols-1 gap-[1.25rem] ss:grid-cols-2">
        {items.map((t) => (
          <li key={t.name}>
            <figure className="h-full rounded-lg border border-tan/50 bg-indigo p-6 shadow-lg">
              <blockquote className="leading-relaxed text-white">“{t.quote}”</blockquote>
              <figcaption className="mt-3 font-bold text-tan">{t.name}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      {limit && testimonials.length > limit && (
        <div className="mt-6 flex justify-center">
          <Link
            href="/reviews"
            className="inline-flex h-12 items-center justify-center rounded border-2 border-tan px-6 font-bold uppercase tracking-[2px] text-white transition hover:bg-tan/20"
          >
            Read all {testimonials.length} reviews
          </Link>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
