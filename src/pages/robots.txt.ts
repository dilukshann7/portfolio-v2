export const prerender = false;

import { SITE } from "../lib/site";

export function GET({ url }: { url: URL }) {
  const siteOrigin =
    import.meta.env.SITE_URL ||
    import.meta.env.PUBLIC_SITE_URL ||
    (import.meta.env.CF_PAGES_URL
      ? `https://${import.meta.env.CF_PAGES_URL}`
      : SITE.url || url.origin);
  const host = new URL(siteOrigin).host;

  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${siteOrigin}/sitemap.xml
Host: ${host}
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
        "X-Content-Type-Options": "nosniff",
      },
    },
  );
}
