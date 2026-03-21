export const prerender = false;

export function GET({ url }: { url: URL }) {
  const siteOrigin =
    import.meta.env.SITE_URL ||
    import.meta.env.PUBLIC_SITE_URL ||
    (import.meta.env.CF_PAGES_URL
      ? `https://${import.meta.env.CF_PAGES_URL}`
      : url.origin);

  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${siteOrigin}/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
