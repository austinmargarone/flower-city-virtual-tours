import PageHeader from "@/components/shared/PageHeader";
import CallToAction from "@/components/shared/CallToAction";
import { webIncludes, webPricing, formatPrice } from "@/constants/pricing";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "FAQ | Websites & Matterport Virtual Tours",
  description:
    "Answers to common questions about our websites, Matterport 3D virtual tours, photography and drone services in Rochester, NY.",
  path: "/faq",
});

type QA = { q: string; a: string };

const websites: QA[] = [
  {
    q: "How much does a website cost?",
    a: `Landing pages start at ${formatPrice(webPricing[0].from)} and multi-page websites start at ${formatPrice(webPricing[1].from)}. Every project is quoted after a free consultation so you know the price before we start.`,
  },
  {
    q: "What's included with a website?",
    a: `${webIncludes.join(", ")}. Hosting is set up case by case depending on what your site needs.`,
  },
  {
    q: "Can you add my virtual tour, photos and drone video to my website?",
    a: "Yes. That's what makes us different. We can build your website and capture the tour, photos and aerial footage that go on it, so everything is designed to work together.",
  },
  {
    q: "Do you work with businesses outside Rochester?",
    a: "Yes. Websites are built and managed remotely for businesses anywhere in the U.S. On-site work like 3D tours, photography and drone covers Rochester and upstate New York, with a travel fee outside Monroe County.",
  },
];

const tours: QA[] = [
  {
    q: "How long does it take to create a virtual tour?",
    a: "It depends on the square footage and layout. Most spaces under 2,000 square feet take about an hour to scan.",
  },
  {
    q: "How does the camera work?",
    a: "We move the Matterport camera through the space. At each spot it rotates and scans, and the scans are stitched together into one 3D tour.",
  },
  {
    q: "Do I need to do anything before the tour?",
    a: "Yes. Set the space up exactly how you want it to look, since the tour captures everything as it is.",
  },
  {
    q: "Can the camera work outdoors?",
    a: "Yes. Tours can include outdoor spaces, and 360° views captured outside work much like panoramic photos.",
  },
  {
    q: "How long until my tour is ready?",
    a: "Tours are usually processed within 24 to 48 hours.",
  },
  {
    q: "What are Mattertags?",
    a: "Mattertags highlight specific features inside your tour. They can hold text, images, audio, video and links.",
  },
  {
    q: "How do I share my tour?",
    a: "You'll get a link you can send by text or email, embed on your website, post on social media or publish to Google Street View.",
  },
  {
    q: "Can my tour stay private?",
    a: "Yes. Links can be public or password-protected so only the people you choose can view the tour.",
  },
  {
    q: "Can tours be viewed in virtual reality?",
    a: "Yes. Matterport tours work in a web browser, on a phone and with VR headsets.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "Cash, credit and debit cards, PayPal and Venmo.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...websites, ...tours].map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const Section = ({ title, items }: { title: string; items: QA[] }) => (
  <section>
    <h2 className="h2 mb-4 text-left">{title}</h2>
    <div className="space-y-3">
      {items.map(({ q, a }) => (
        <details key={q} className="group rounded-lg border border-tan/50 bg-indigo p-5 open:border-tan">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-white">
            {q}
            <span className="text-2xl text-tan transition group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="mt-3 leading-relaxed text-lightblue">{a}</p>
        </details>
      ))}
    </div>
  </section>
);

const Page = () => {
  return (
    <div className="pb-[1rem]">
      <PageHeader eyebrow="FAQ" title="Frequently Asked Questions">
        Don&apos;t see your question? Give us a call, email sales@flowercityvirtualtours.com or send a message.
      </PageHeader>
      <div className="mx-auto mt-10 max-w-[48rem] space-y-12 px-[1rem]">
        <Section title="Websites" items={websites} />
        <Section title="Virtual Tours" items={tours} />
      </div>
      <CallToAction title="Still have questions?" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  );
};

export default Page;
