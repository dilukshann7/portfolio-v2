import { getCollection, type CollectionEntry } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;

export function getPostUrl(id: string) {
  return `/blog/${id}/`;
}

export function getWordCount(content?: string) {
  if (!content) return 0;

  return content.trim().split(/\s+/).filter(Boolean).length;
}

export function getReadingTime(content?: string) {
  return Math.max(1, Math.ceil(getWordCount(content) / 190));
}

export function formatBlogDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export async function getAllBlogPosts() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  return posts.sort((left, right) => {
    if (left.data.featured !== right.data.featured) {
      return Number(right.data.featured) - Number(left.data.featured);
    }

    return (
      right.data.publishDate.getTime() - left.data.publishDate.getTime()
    );
  });
}
