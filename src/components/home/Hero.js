import Link from "next/link"
import React from "react"
import { FadeInSection } from "../common"
import { DownloadIcon } from "lucide-react"
import { Button } from "../ui/button"
import { getLocale, getTranslations, unstable_setRequestLocale } from "next-intl/server"

export async function Hero() {
  const t = await getTranslations('hero');
  const locale = await getLocale();
  unstable_setRequestLocale(locale);

  return <section id="hero">
    <div className="flex flex-col gap-24 items-center justify-center mx-2 text-center">
      <FadeInSection delay={100}>
        <div className="flex flex-col gap-5">
          <div className="text-xl text-gray-500 text-center">{t('intro')} <strong className="underline">{t('webDeveloper')}</strong> {t('forYourProject')}</div>
          <div className="flex flex-col">
            <div className="text-xl text-gray-500 text-center">{t('nameIntro')}</div>
            <h1 className="text-5xl sm:text-6xl font-bold text-primary">{`Nomena R.`}</h1>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection delay={500}>
        <h2 className="text-2xl text-gray-500">
          {t('experience', { years: new Date().getFullYear() - 2019 })}<br />
          <strong>{t('backendFrontend')}</strong> {t('and')} <strong>{t('devops')}</strong> {t('tasks')}
        </h2>
      </FadeInSection>
      <FadeInSection delay={500}>
        <Button asChild className="bg-secondary hover:bg-secondary-hover text-accent hover:text-accent rounded-full gap-2 text-xl h-[52px] transition ease-in-out hover:scale-110 duration-300">
          <Link
            href={locale === 'en' ? process.env.RESUME_DL_LINK_EN : process.env.RESUME_DL_LINK_FR}
            target="_blank">
            <DownloadIcon />
            {t('downloadResume')}
          </Link>
        </Button>
      </FadeInSection>
    </div>
  </section>
}