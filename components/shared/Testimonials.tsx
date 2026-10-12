import { testimonials } from "@/constants/work";

type Props = { limit?: number };

const Testimonials = ({ limit }: Props) => {
  const items = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <section className="mx-auto w-full max-w-[77.5rem]">
      <h2 className="h2 flex justify-center py-[1rem]">What Clients Say</h2>
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
    </section>
  );
};

export default Testimonials;
