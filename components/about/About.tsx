import Link from "next/link";

const points = [
  { title: "Anywhere", text: "Websites built remotely for clients nationwide; on-site shoots across upstate New York." },
  { title: "One team", text: "Website, 3D tour, photos and drone, all from one studio." },
  { title: "Certified", text: "Matterport 3D capture and an FAA Part 107 licensed, fully insured drone pilot." },
];

// From the old "Our Process" page
const process = [
  { step: "Book", text: "Schedule an appointment by phone, email or online." },
  {
    step: "Prep & Scan",
    text: "We arrive, make sure the space looks the way you want it seen, then move quickly through it, setting up the camera at viewpoints across the floor plan as it builds a 3D model.",
  },
  { step: "Review", text: "We check the finished tour and make any final touches." },
  { step: "Share", text: "You get a link to publish and share your 3D tour anywhere." },
];

// Same size and style as the homepage hero buttons.
const buttonBase =
  "inline-flex h-12 w-[17.5rem] max-w-full items-center justify-center whitespace-nowrap rounded px-5 text-base font-bold uppercase tracking-[1.5px] shadow-lg transition";

const stats = [
  { value: "2020", label: "In business since" },
  { value: "40+", label: "3D tours" },
  { value: "40+", label: "Photo shoots" },
  { value: "Part 107", label: "Licensed drone pilot" },
];

const clients = ["Elderwood", "Monroe Community Hospital", "DeCarolis Truck Rental", "Keller Williams", "Howard Hanna"];

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
          Our clients range from senior living and healthcare campuses to truck rental branches,
          retailers, short-term rentals and real estate agents.
        </p>
      </div>
      <dl className="mx-auto mt-8 grid w-full max-w-[46rem] grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg bg-indigo/60 p-4 text-center">
            <dd className="text-2xl font-bold text-white">{s.value}</dd>
            <dt className="mt-1 text-sm text-paleblue">{s.label}</dt>
          </div>
        ))}
      </dl>
      <div className="mx-auto mt-6 max-w-[46rem] text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-tan">Trusted by</p>
        <ul className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-white">
          {clients.map((c) => (
            <li key={c} className="whitespace-nowrap">
              {c}
            </li>
          ))}
        </ul>
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
        <h2 className="h2">How a Tour Shoot Works</h2>
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
        <Link href="/calendly" className={`${buttonBase} bg-tan text-white hover:brightness-110`}>
          Free Consultation
        </Link>
        <Link
          href="/work"
          className={`${buttonBase} border-2 border-tan bg-midnight/40 text-white hover:bg-tan/20`}
        >
          See Our Work
        </Link>
      </div>
    </article>
  );
};

export default About;
