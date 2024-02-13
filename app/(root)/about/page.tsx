// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Web Development",
  description:
    "Our websites are built with modern tech stacks and designed to be fast, secure, and SEO-friendly. We specialize in Next.js, React, and Tailwind CSS.",
  keywords: [
    "Web Development",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "GraphQL",
  ],
};

export default function Page() {
  return (
    <div className="mx-auto px-[1.25rem]">
      <h1>About</h1>
      <p>
        We use modern tech stacks to deliver industry leading producsts to our
        customers.
      </p>
    </div>
  );
}
