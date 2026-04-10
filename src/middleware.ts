import { defineMiddleware } from "astro:middleware";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  "object-src 'none'",
  "manifest-src 'self'",
  "media-src 'self'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

export const onRequest = defineMiddleware(async (_, next) => {
  const response = await next();
  const headers = new Headers(response.headers);

  headers.set("Content-Security-Policy", contentSecurityPolicy);
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  headers.set("X-DNS-Prefetch-Control", "off");
  headers.set("X-Permitted-Cross-Domain-Policies", "none");
  headers.set("Permissions-Policy", "camera=(), geolocation=(), microphone=()");
  headers.set("Origin-Agent-Cluster", "?1");
  headers.set("Cross-Origin-Opener-Policy", "same-origin");
  headers.set("Cross-Origin-Resource-Policy", "same-origin");
  headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload",
  );

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
});
