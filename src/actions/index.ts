import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const CONTACT_EMAIL = "info@dilukshan.dev";
const DEFAULT_FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
      if (!import.meta.env.RESEND_API_KEY) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Email service is not configured.",
        });
      }

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
        from: import.meta.env.CONTACT_FROM_EMAIL ?? DEFAULT_FROM_EMAIL,
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
