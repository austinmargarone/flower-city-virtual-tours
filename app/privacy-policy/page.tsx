import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import PageHeader from "@/components/shared/PageHeader";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Flower City Virtual Tours collects, uses and protects your personal information.",
  path: "/privacy-policy",
});

const Page = () => {
  const source = fs.readFileSync(path.join(process.cwd(), "content", "pages", "privacy-policy.md"), "utf8");
  const html = marked.parse(source, { async: false }) as string;

  return (
    <div className="px-[1rem] pb-[3rem]">
      <PageHeader title="Privacy Policy" />
      <div className="blog-prose mx-auto mt-8 max-w-[45rem]" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Page;
