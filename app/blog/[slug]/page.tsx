import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    // Longest version that fits in Google's ~60-character title space
    title:
      [`${post.title} | Rochester, NY | Flower City Virtual Tours`, `${post.title} | Rochester, NY`].find(
        (t) => t.length <= 62
      ) ?? post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

const Page = ({ params }: Props) => {
  const post = getPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    description: post.description,
    image: post.coverImage,
    author: { "@type": "Organization", name: "Flower City Virtual Tours" },
  };

  return (
    <div className="px-[1rem] py-[2rem] md:py-[3rem]">
      <article className="mx-auto max-w-[45rem]">
        <Link href="/blog" className="text-sm font-bold text-tan hover:underline">
          ← All Discover ROC posts
        </Link>
        <h1 className="mt-4 text-[2rem] font-bold leading-tight text-white md:text-[2.5rem]">
          {post.title}
        </h1>
        <time dateTime={post.date} className="mt-2 block text-paleblue">
          {formatDate(post.date)}
        </time>

        <div className="blog-prose mt-8" dangerouslySetInnerHTML={{ __html: post.html }} />

        <aside className="mt-14 rounded-lg border border-tan bg-indigo p-6 text-center shadow-lg">
          <h2 className="text-xl font-bold text-white">
            Need a website, 3D tour or drone footage for your Rochester business?
          </h2>
          <div className="button-container mt-4">
            <Link href="/contact">
              <button className="rounded bg-tan px-6 py-2 font-bold text-white shadow-lg">
                Get a free consultation
              </button>
            </Link>
          </div>
        </aside>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default Page;
