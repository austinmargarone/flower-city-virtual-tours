import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked, type Tokens } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

// Used as the cover for any post that doesn't set its own coverImage
export const DEFAULT_COVER = "/blog-images/2022/01/001-1-1024x683.jpg";

export type PostMeta = {
  title: string;
  slug: string;
  date: string;
  description: string;
  seoTitle?: string;
  coverImage?: string;
  categories?: string[];
  legacyUrl?: string;
  draft?: boolean;
};

export type Post = PostMeta & { content: string };

// Lazy-load images and open outside links in a new tab
marked.use({
  renderer: {
    image({ href, title, text }: Tokens.Image) {
      const t = title ? ` title="${title}"` : "";
      return `<img src="${href}" alt="${text || ""}"${t} loading="lazy" decoding="async" />`;
    },
    link(this: { parser: { parseInline: (t: Tokens.Link["tokens"]) => string } }, { href, title, tokens }: Tokens.Link) {
      const label = this.parser.parseInline(tokens);
      const external = /^https?:\/\//.test(href);
      const t = title ? ` title="${title}"` : "";
      const ext = external ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a href="${href}"${t}${ext}>${label}</a>`;
    },
  },
});

function readPost(file: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const meta = data as PostMeta;
  return {
    ...meta,
    date: String(meta.date),
    slug: meta.slug || file.replace(/\.md$/, ""),
    coverImage: meta.coverImage || DEFAULT_COVER,
    content,
  };
}

export function getAllPosts(): Post[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(readPost)
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): (Post & { html: string }) | null {
  const file = `${slug}.md`;
  if (!fs.existsSync(path.join(BLOG_DIR, file))) return null;
  const post = readPost(file);
  return { ...post, html: marked.parse(post.content, { async: false }) as string };
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
