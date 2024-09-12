import { GithubIcon, GitlabIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

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
  )
}