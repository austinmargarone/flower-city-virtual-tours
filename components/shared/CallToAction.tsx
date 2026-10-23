import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/site";

type Props = {
  title?: string;
  text?: string;
};

const CallToAction = ({
  title = "Ready to get started?",
  text = "Tell us about your business and we'll put together a website, tour and media package that fits.",
}: Props) => {
  return (
    <section className="mx-auto my-[2.5rem] max-w-[60rem] px-[1rem]">
      <div className="rounded-lg border border-tan bg-indigo p-6 text-center shadow-lg md:p-10">
        <h2 className="h2">{title}</h2>
        <p className="mx-auto mt-3 max-w-[40rem] text-lightblue">{text}</p>
        <div className="button-container mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact">
            <button className="rounded bg-tan px-6 py-2 font-bold text-white shadow-lg">
              Get a free consultation
            </button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-paleblue">
          Or call{" "}
          <a href={PHONE_HREF} className="text-tan underline underline-offset-2">
            {PHONE}
          </a>{" "}
          and leave a voicemail
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
