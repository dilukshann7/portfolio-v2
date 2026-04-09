import { ActionError, defineAction } from "astro:actions";
import { env } from "cloudflare:workers";
import { Resend } from "resend";

const CONTACT_EMAIL = "info@dilukshan.dev";
const DEFAULT_FROM_EMAIL = "onboarding@resend.dev";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_DOMAIN = CONTACT_EMAIL.split("@")[1] ?? "dilukshan.dev";

const extractEmailAddress = (value: string) => {
  const match = value.match(/<([^>]+)>/);
  return (match?.[1] ?? value).trim();
};

const getResendApiKey = () =>
  env.RESEND_API_KEY ?? import.meta.env.RESEND_API_KEY;

const getFromEmail = () =>
  (() => {
    const configured = extractEmailAddress(
      env.CONTACT_FROM_EMAIL ??
        import.meta.env.CONTACT_FROM_EMAIL ??
        DEFAULT_FROM_EMAIL,
    );

    if (configured.toLowerCase() === CONTACT_EMAIL.toLowerCase()) {
      return `contact@${CONTACT_DOMAIN}`;
    }

    return configured;
  })();

const getFromLabel = (name: string) => {
  const cleanedName = name.replace(/[<>"]/g, "").trim() || "Portfolio Contact";
  return `${cleanedName} via dilukshan.dev <${getFromEmail()}>`;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export const server = {
  send: defineAction({
    accept: "form",
    handler: async (formData) => {
      const resendApiKey = getResendApiKey();

      if (!resendApiKey) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Email service is not configured.",
        });
      }

      const resend = new Resend(resendApiKey);

      const name = String(formData.get("name") ?? "").trim();
      const email = String(formData.get("email") ?? "").trim();
      const message = String(formData.get("message") ?? "").trim();

      if (!name || !email || !message) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Name, email, and message are required.",
        });
      }

      if (!EMAIL_REGEX.test(email)) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Enter a valid email address.",
        });
      }

      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

      const { data, error } = await resend.emails.send({
        from: getFromLabel(name),
        to: [CONTACT_EMAIL],
        replyTo: email,
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
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),
};
