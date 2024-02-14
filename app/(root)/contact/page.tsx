import Contact from "@/components/contact/Contact";

export default function Page() {
  return (
    <article>
      <h1 className="h1">Contact Us</h1>
      <div className="flex justify-center py-[1.25rem] sm:py-[2.5rem]">
        <Contact />
      </div>
    </article>
  );
}
