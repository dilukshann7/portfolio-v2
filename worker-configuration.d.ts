declare module "cloudflare:workers" {
  export const env: {
    RESEND_API_KEY?: string;
    CONTACT_FROM_EMAIL?: string;
    [key: string]: unknown;
  };
}

interface ImportMetaEnv {
  readonly RESEND_API_KEY?: string;
  readonly CONTACT_FROM_EMAIL?: string;
}
