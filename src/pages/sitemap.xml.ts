export const prerender = false;

export function GET({ url }: { url: URL }) {
  const siteOrigin =
    import.meta.env.SITE_URL ||
    import.meta.env.PUBLIC_SITE_URL ||
    (import.meta.env.CF_PAGES_URL
      ? `https://${import.meta.env.CF_PAGES_URL}`
      : url.origin);
  const homepage = `${siteOrigin}/`;
  const lastModified = new Date().toISOString();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${homepage}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
