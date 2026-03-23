export const prerender = false;

import { getAllBlogPosts, getPostUrl } from "../lib/blog";

export function GET({ url }: { url: URL }) {
  return buildSitemap(url);
}

async function buildSitemap(url: URL) {
  const siteOrigin =
    import.meta.env.SITE_URL ||
    import.meta.env.PUBLIC_SITE_URL ||
    (import.meta.env.CF_PAGES_URL
      ? `https://${import.meta.env.CF_PAGES_URL}`
      : url.origin);
  const posts = await getAllBlogPosts();
  const lastModified = posts[0]
    ? (posts[0].data.updatedDate ?? posts[0].data.publishDate).toISOString()
    : new Date().toISOString();
  const routes = [
    {
      loc: `${siteOrigin}/`,
      lastmod: lastModified,
      changefreq: "weekly",
      priority: "1.0",
    },
    {
      loc: `${siteOrigin}/blog/`,
      lastmod: lastModified,
      changefreq: "weekly",
      priority: "0.9",
    },
    ...posts.map((post) => ({
      loc: `${siteOrigin}${getPostUrl(post.id)}`,
      lastmod: (post.data.updatedDate ?? post.data.publishDate).toISOString(),
      changefreq: "monthly",
      priority: "0.8",
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
