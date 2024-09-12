import { SectionTitle, FadeInSection } from "../common";
import { Badge } from "../ui/badge";
import { getLocale, getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function Timeline() {
  const locale = await getLocale();
  unstable_setRequestLocale(locale);
  const t = await getTranslations('timeline');
  const experiences = [
    {
      date: t("masterDegree"),
      title: t("masterDegreeTitle"),
      description: t("masterDegreeDesc")
    },
    {
      date: t("cs50Date"),
      title: t("cs50Title"),
      description: t("cs50Desc"),
      links: [
        { text: t("cs50LinkText"), href: "https://courses.edx.org/certificates/ee0edfbbae4f476a94de08fe7911ef53" }
      ]
    },
    {
      date: t("geckoDate"),
      title: t("geckoTitle"),
      description: t("geckoDesc"),
      skills: ['Symfony', 'NodeJS', 'React', 'Express.js', 'PostgreSQL']
    },
    {
      date: t("dirisDate"),
      title: t("dirisTitle"),
      description: t("dirisDesc"),
      skills: ['Symfony', 'React', 'MySQL']
    },
    {
      date: t("eazylangDate"),
      title: t("eazylangTitle"),
      description: t("eazylangDesc"),
      skills: ['Symfony', 'React', 'NodeJS', 'MySQL', 'MongoDB', 'AWS', 'Kubernetes']
    }
  ]

  return (
    <FadeInSection delay={100}>
      <section id="timeline">
        <div className="md:container mx-auto px-2 md:px-46">
          <SectionTitle>{t("timeline")}</SectionTitle>
          <ol className="relative border-s border-gray-300 dark:border-gray-700">
            {
              experiences.map(xp => (
                <li className="mb-10 ms-4" key={xp.date}>
                  <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{xp.date}</time>
                  <h4 className="md:text-xl h4 mb-2">{xp.title}</h4>
                  <p className="text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: xp.description }}></p>
                  {
                    xp.links?.map(link => (<a key={link.text} className="text-sm font-semibold text-secondary hover:text-secondary-hover mr-2" href={link.href} target="_blank">{link.text}</a>))
                  }
                  <div className="flex flex-wrap text-sm mt-2 gap-1">
                    {
                      xp.skills?.map(skill => <Badge key={skill}>{skill}</Badge>)
                    }
                  </div>

                </li>
              ))
            }
          </ol>
        </div>
      </section>
    </FadeInSection>
  )
}