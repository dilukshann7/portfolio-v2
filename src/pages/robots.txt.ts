export const prerender = false;

import { SITE } from "../lib/site";

export function GET({ url }: { url: URL }) {
  const siteOrigin =
    import.meta.env.SITE_URL ||
    import.meta.env.PUBLIC_SITE_URL ||
    (import.meta.env.CF_PAGES_URL
      ? `https://${import.meta.env.CF_PAGES_URL}`
      : SITE.url || url.origin);

  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${siteOrigin}/sitemap.xml
Host: ${siteOrigin}
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
