import Link from "next/link";

const points = [
  { title: "Anywhere", text: "Websites built remotely for clients nationwide; on-site shoots across upstate New York." },
  { title: "One team", text: "Website, 3D tour, photos and drone from one person who knows your project." },
  { title: "Certified", text: "Matterport 3D capture and an FAA Part 107 licensed, fully insured drone pilot." },
];

// From the old "Our Process" page
const process = [
  { step: "Book", text: "Schedule an appointment by phone, email or online." },
  {
    step: "Prep & scan",
    text: "We arrive, make sure the space looks the way you want it seen, then move quickly through it, setting up the camera at viewpoints across the floor plan as it builds a 3D model.",
  },
  { step: "Review", text: "We check the finished tour and make any final touches." },
  { step: "Share", text: "You get a link to publish and share your 3D tour anywhere." },
];

const About = () => {
  return (
    <article className="flex flex-col justify-center">
      <h1 className="h1mobile flex justify-center sm:h1">About Us</h1>
      <div className="mx-auto mt-4 max-w-[46rem] space-y-4 text-lg leading-relaxed text-lightblue">
        <p>
          Flower City Virtual Tours started in Rochester in 2020 with a Matterport camera and a
          simple goal: help local businesses show off their spaces online. Since then
          we&apos;ve captured shops, offices, warehouses, rentals and homes across upstate New
          York.
        </p>
        <p>
          In 2024 we added full-stack web development. Today we build fast, custom websites and
          fill them with the 3D tours, photography and aerial footage that make them worth
          visiting.
        </p>
        <p>
          Flower City Virtual Tours is run by Austin Margarone. When you work with us, you work
          directly with the person building your site and running the camera.
        </p>
      </div>
      <ul className="mx-auto mt-8 grid max-w-[46rem] gap-4 sm:grid-cols-3">
        {points.map((p) => (
          <li key={p.title} className="rounded-lg border border-tan/50 p-4">
            <p className="font-bold uppercase tracking-wider text-tan">{p.title}</p>
            <p className="mt-1 text-white">{p.text}</p>
          </li>
        ))}
      </ul>
      <section className="mx-auto mt-10 max-w-[46rem]">
        <h2 className="h2">How a tour shoot works</h2>
        <ol className="mt-4 space-y-3">
          {process.map((p, i) => (
            <li key={p.step} className="flex gap-4 rounded-lg border border-tan/40 p-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-tan font-bold text-white">
                {i + 1}
              </span>
              <div>
                <p className="font-bold text-white">{p.step}</p>
                <p className="text-lightblue">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <div className="button-container mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link href="/calendly">
          <button className="hero-button shadow-lg">Free consultation</button>
        </Link>
        <Link href="/work" className="font-bold text-tan hover:underline">
          See our work →
        </Link>
      </div>
    </article>
  );
};

export default About;
