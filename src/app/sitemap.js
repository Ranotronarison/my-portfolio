import { localeConfig } from "@/config/locale.config";

const WEBSITE_URL = process.env.WEBSITE_URL || 'https://nomena.vercel.app';

// Bump this when the page content actually changes, not on every deploy.
const LAST_CONTENT_UPDATE = '2026-09-02';

export default function sitemap() {
  const { locales, defaultLocale } = localeConfig;

  const languages = Object.fromEntries(locales.map((locale) => [locale, `${WEBSITE_URL}/${locale}`]));
  languages['x-default'] = `${WEBSITE_URL}/${defaultLocale}`;

  return locales.map((locale) => ({
    url: `${WEBSITE_URL}/${locale}`,
    lastModified: LAST_CONTENT_UPDATE,
    alternates: {
      languages,
    },
  }));
}
