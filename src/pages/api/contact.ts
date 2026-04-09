import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const prerender = false;

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const CONTACT_EMAIL = "info@dilukshan.dev";
const DEFAULT_FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const getResendApiKey = () => env.RESEND_API_KEY ?? import.meta.env.RESEND_API_KEY;

const getFromEmail = () =>
  env.CONTACT_FROM_EMAIL ?? import.meta.env.CONTACT_FROM_EMAIL ?? DEFAULT_FROM_EMAIL;

export const POST: APIRoute = async ({ request }) => {
  const resendApiKey = getResendApiKey();

  if (!resendApiKey) {
    return json(
      {
        ok: false,
        message: "Email service is not configured.",
      },
      500,
    );
  }

  let payload: { name?: string; email?: string; message?: string };

  try {
    payload = await request.json();
  } catch {
    return json(
      {
        ok: false,
        message: "Invalid request body.",
      },
      400,
    );
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !message) {
    return json(
      {
        ok: false,
        message: "Name, email, and message are required.",
      },
      400,
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return json(
      {
        ok: false,
        message: "Enter a valid email address.",
      },
      400,
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  const resendResponse = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: getFromEmail(),
      to: [CONTACT_EMAIL],
      reply_to: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin-bottom: 16px;">New portfolio inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    }),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    console.error("[contact] resend error", errorText);

    return json(
      {
        ok: false,
        message: "Could not send the message right now.",
      },
      502,
    );
  }

  return json({
    ok: true,
    message: "Message sent successfully.",
  });
};
