export const prerender = false;

import { getAllBlogPosts, getPostUrl } from "../lib/blog";
import { SITE } from "../lib/site";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET({ url }: { url: URL }) {
  return buildFeed(url);
}

async function buildFeed(url: URL) {
  const siteOrigin =
    import.meta.env.SITE_URL ||
    import.meta.env.PUBLIC_SITE_URL ||
    (import.meta.env.CF_PAGES_URL
      ? `https://${import.meta.env.CF_PAGES_URL}`
      : url.origin);
  const posts = await getAllBlogPosts();
  const lastBuildDate = posts[0]
    ? (posts[0].data.updatedDate ?? posts[0].data.publishDate).toUTCString()
    : new Date().toUTCString();
  const items = posts
    .map((post) => {
      const postUrl = `${siteOrigin}${getPostUrl(post.id)}`;

      return `<item>
  <title>${escapeXml(post.data.title)}</title>
  <link>${postUrl}</link>
  <guid isPermaLink="true">${postUrl}</guid>
  <description>${escapeXml(post.data.description)}</description>
  <pubDate>${post.data.publishDate.toUTCString()}</pubDate>
  ${post.data.tags
    .map((tag) => `<category>${escapeXml(tag)}</category>`)
    .join("")}
</item>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(SITE.blogTitle)}</title>
  <description>${escapeXml(SITE.blogDescription)}</description>
  <link>${siteOrigin}/blog/</link>
  <language>en-us</language>
  <lastBuildDate>${lastBuildDate}</lastBuildDate>
  <atom:link href="${siteOrigin}/rss.xml" rel="self" type="application/rss+xml" />
${items}
</channel>
</rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=1800, stale-while-revalidate=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
