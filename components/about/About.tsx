import Link from "next/link";

const points = [
  { title: "Local", text: "Based in Rochester since 2020, working with businesses across upstate New York." },
  { title: "One team", text: "Website, 3D tour, photos and drone from one person who knows your project." },
  { title: "Certified", text: "Matterport 3D capture and an FAA Part 107 licensed, fully insured drone pilot." },
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
