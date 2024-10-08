import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"
import { localeConfig } from "./config/locale.config"

const { locales } = localeConfig

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) {
    notFound()
  }

  return {
    messages: (await import(`./translations/${locale}.json`)).default
  }
})