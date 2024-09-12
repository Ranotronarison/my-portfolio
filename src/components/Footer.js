import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { GithubIcon, GitlabIcon, GlobeIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations('footer');
  const locale = await getLocale()
  console.log(locale)
  return (
    <div className="md:container mx-auto px-2 md:px-46 py-5">
      <div className="md:grid md:grid-cols-3 gap-2">
        <div className="text-sm mb-2 text-center md:text-left text-gray-500">
          <div>{t('copyright')}</div>
          <div>
            <span className="font-medium">
              <a href="/">{t('name')}</a>
            </span>
          </div>
        </div>
        <div className="text-sm text-center mb-2 text-gray-500">
          {t('builtWith')} <a className="font-semibold hover:text-secondary" href="https://nextjs.org/" target="_blank">{t('nextjs')}</a> {t('deployedOn')} <a className="font-semibold hover:text-gray-600" href="https://vercel.com/" target="_blank">{t('vercel')}</a>
        </div>
        <div>
          <div className="flex items-center justify-center gap-2 m-2 text-sm text-gray-500 md:hidden">
            <GlobeIcon className="w-4 h-4" /> <Link href={'/'} locale={'en'} className={cn("hover:text-secondary", locale === 'en' && "underline")}>{t('english')}</Link> / <Link href={'/'} locale={'fr'} className={cn("hover:text-secondary", locale === 'fr' && "underline")}  >{t('french')}</Link>
          </div>
          <div className="text-sm text-center md:text-right mb-2">
            <div className="text-gray-500">
              {t('connect')}
            </div>
            <div className="inline-flex gap-2">
              <a className="hover:text-secondary" title="LinkedIn" href="https://linkedin.com/in/nomena-ranotronarison-dev" target="_blank">
                <LinkedinIcon className="w-8 h-8" />
              </a>
              <a className="hover:text-secondary" title="Github" href="https://github.com/Ranotronarison" target="_blank">
                <GithubIcon className="w-8 h-8" />
              </a>
              <a className="hover:text-secondary" title="Gitlab" href="https://gitlab.com/Ranotronarison" target="_blank">
                <GitlabIcon className="w-8 h-8" />
              </a>
              <a className="hover:text-secondary" title="Email" href="mailto:arivonyran@gmail.com" target="_blank">
                <MailIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}