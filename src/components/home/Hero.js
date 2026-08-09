import Link from "next/link"
import React from "react"
import { FadeInSection } from "../common"
import { DownloadIcon, MailIcon } from "lucide-react"
import { Button } from "../ui/button"
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server"

export async function Hero() {
  const t = await getTranslations('hero');
  const locale = await getLocale();
  setRequestLocale(locale);

  return <section id="home">
    <div className="flex flex-col gap-12 items-center justify-center mx-2 text-center">
      <FadeInSection delay={100}>
        <div className="flex flex-col gap-2">
          <div className="text-xl text-gray-500 text-center">{t('iAm')}</div>
          <h1 className="text-5xl sm:text-6xl font-bold text-primary">{`Nomena R.`}</h1>
        </div>
      </FadeInSection>
      <FadeInSection delay={500}>
        <div className="flex flex-col gap-2 max-w-2xl">
          <p className="text-2xl text-gray-700">{t('positioning')}</p>
          <p className="text-xl text-gray-500">{t('devopsProof')}</p>
          <p className="text-xl text-gray-500 font-semibold">{t('experience', { years: new Date().getFullYear() - 2019 })}</p>
        </div>
      </FadeInSection>
      <FadeInSection delay={500}>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="bg-secondary hover:bg-secondary-hover text-accent hover:text-accent rounded-full gap-2 text-xl h-[52px] transition ease-in-out hover:scale-110 duration-300">
            <Link
              href={locale === 'en' ? process.env.RESUME_DL_LINK_EN : process.env.RESUME_DL_LINK_FR}
              target="_blank" rel="noopener noreferrer">
              <DownloadIcon />
              {t('downloadResume')}
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full gap-2 text-xl h-[52px] transition ease-in-out hover:scale-110 duration-300">
            <Link href="#contact-me">
              <MailIcon />
              {t('contactCta')}
            </Link>
          </Button>
        </div>
      </FadeInSection>
    </div>
  </section>
}