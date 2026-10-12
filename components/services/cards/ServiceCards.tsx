import Link from "next/link";
import { Box, Camera, Clapperboard, Code2, Plane, type LucideIcon } from "lucide-react";
import { serviceGroups } from "@/constants";

const icons: Record<string, LucideIcon> = {
  "/services/web-development": Code2,
  "/services/photography": Camera,
  "/services/virtual-tours": Box,
  "/services/drone": Plane,
  "/services/video": Clapperboard,
};

const [web, media] = serviceGroups;

/** Services in their two groups: Web Development and Media. */
const ServiceCards = () => {
  const webItem = web.items[0];
  const WebIcon = icons[webItem.route];
  return (
    <div className="mx-auto w-full max-w-[77.5rem] space-y-10 py-[1.25rem]">
      <section>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-tan">{web.title}</h3>
        <Link
          href={webItem.route}
          className="flex flex-col gap-6 rounded-lg border border-tan bg-midnight p-6 text-white shadow-lg transition hover:bg-indigo md:flex-row md:items-center"
        >
          <WebIcon className="size-16 shrink-0 text-tan" strokeWidth={1.25} aria-hidden="true" />
          <div className="flex-1">
            <p className="h3 text-left">{webItem.label}</p>
            <p className="mt-1 text-lightblue">{webItem.description}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {["Design", "Development", "SEO"].map((t) => (
                <li key={t} className="rounded-full border border-tan/60 px-3 py-0.5 text-sm text-lightblue">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <span className="font-bold text-tan">Learn more →</span>
        </Link>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-tan">{media.title}</h3>
        <ul className="grid grid-cols-1 gap-[1.25rem] ss:grid-cols-2 lg:grid-cols-4">
          {media.items.map(({ route, label, description }) => {
            const Icon = icons[route];
            return (
              <li key={route}>
                <Link
                  href={route}
                  className="flex h-full flex-col items-center rounded-lg border border-tan bg-midnight p-6 text-center text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo"
                >
                  <Icon className="size-14 text-tan" strokeWidth={1.25} aria-hidden="true" />
                  <p className="h3 mt-4">{label}</p>
                  <p className="mt-2 flex-1 text-lightblue">{description}</p>
                  <span className="mt-4 font-bold text-tan">Learn more →</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default ServiceCards;
