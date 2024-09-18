import "../globals.css";
import "devicon";
import GoogleReCaptchaWrapper from "@/providers/GoogleReCaptchaWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from 'next/font/local'
import { NextIntlClientProvider } from "next-intl";
import { localeConfig } from "@/config/locale.config";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";

const myFont = localFont({ src: '../../../public/fonts/RobotoSlab-VariableFont_wght.ttf' })

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('title'),
    description: t('description'),
    keywords: ["Web Developer",
      "Fullstack",
      "Symfony",
      "NodeJs",
      "React",
      "Madagascar",
      "Nomena"],
    alternates: {
      canonical: process.env.WEBSITE_URL,
    },
  }
}

const { locales } = localeConfig


export const generateStaticParams = () => {
  return locales.map(locale => ({ locale }))
}

export default async function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body className={myFont.className}>
        <link rel="icon" href="images/favicon.ico" />
        <link rel="icon" href="images/favicon-32x32.png" />
        <link rel="icon" href="images/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
        <link rel="icon" href="images/android-chrome-192x192.png" />
        <link rel="icon" href="images/android-chrome-512x512.png" />
        <NextIntlClientProvider messages={messages}>
          <GoogleReCaptchaWrapper>
            {children}
          </GoogleReCaptchaWrapper>
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
