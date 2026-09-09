// Brand and company data — used in JSON-LD structured data (pages/+Head.tsx),
// canonical URLs (src/seo.ts), and anywhere else the business's real-world
// details are needed.
export const BRAND_NAME = "Moszat Autósiskola";
// TODO: replace with the real production domain once it's decided.
export const SITE_URL = "https://example.com";

export const COMPANY_ADDRESS = "9407 Sopron (Tómalom), Nefelejcs utca 26.";
export const COMPANY_EMAIL = "moszatjogsi@gmail.com";
export const COMPANY_PHONE = "+36 30 348 2131";

export const PHONE_HREF = `tel:${COMPANY_PHONE.replace(/\s/g, "")}`;
export const EMAIL_HREF = `mailto:${COMPANY_EMAIL}`;

// Placeholder Open Graph image — replace public/og-image.png with real artwork per project.
export const OG_IMAGE_PATH = "/og-image.png";

export const NAV_LINKS = [
  { href: "#rolam", label: "Rólam" },
  { href: "#jarmuvek", label: "Járművek" },
  { href: "#arak", label: "Árak" },
  { href: "#vizsga", label: "Vizsga" },
] as const;
