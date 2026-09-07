import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { SectionTitle, FadeInSection } from "../common"
import { Badge } from "../ui/badge"
import Image from "next/image"

const skills = {
  backend: [
    { icon: 'devicon-symfony-original', label: 'Symfony', key: 'symfony' },
    { icon: 'devicon-nodejs-plain', label: 'NodeJS', key: 'nodejs' },
    { icon: 'devicon-express-original', label: 'Express.js', key: 'express' }
  ],
  frontend: [
    { icon: 'devicon-react-original', label: 'React', key: 'react' },
    { icon: 'devicon-typescript-plain', label: 'TypeScript', key: 'typescript' },
    { icon: 'devicon-javascript-plain', label: 'JavaScript', key: 'javascript' },
    { icon: 'devicon-bootstrap-plain', label: 'Bootstrap', key: 'bootstrap' },
    { icon: 'devicon-tailwindcss-original', label: 'Tailwindcss', key: 'tailwindcss' }
  ],
  databases: [
    { icon: 'devicon-mongodb-plain', label: 'MongoDB', key: 'mongodb' },
    { icon: 'devicon-mysql-original', label: 'MySQL', key: 'mysql' },
    { icon: 'devicon-postgresql-plain', label: 'PostgreSQL', key: 'postgresql' }
  ],
  infrastructure: [
    { icon: 'devicon-docker-plain', label: 'Docker', key: 'docker' },
    { icon: 'devicon-kubernetes-plain', label: 'Kubernetes', key: 'kubernetes' },
    { icon: 'devicon-amazonwebservices-plain', label: 'AWS', key: 'aws' },
    { svg: '/icons/aws-cloudformation.svg', label: 'CloudFormation', key: 'cloudformation' },
    { icon: 'devicon-helm-plain', label: 'Helm', key: 'helm' },
    { icon: 'devicon-ansible-plain', label: 'Ansible', key: 'ansible' },
    { icon: 'devicon-terraform-plain', label: 'Terraform', key: 'terraform' },
    { svg: '/icons/ovh.svg', label: 'OVH', key: 'ovh' }
  ],
  ci: [
    { icon: 'devicon-gitlab-plain', label: 'Gitlab', key: 'gitlab' },
    { icon: 'devicon-githubactions-plain', label: 'GitHub Actions', key: 'githubactions' }
  ],
  monitoring: [
    { icon: 'devicon-grafana-plain', label: 'Grafana', key: 'grafana' },
    { icon: 'devicon-prometheus-plain', label: 'Prometheus', key: 'prometheus' },
    { icon: 'devicon-opentelemetry-plain', label: 'OpenTelemetry', key: 'opentelemetry' }
  ],
  tools: [
    { icon: 'devicon-phpstorm-plain', label: 'PhpStorm', key: 'phpstorm' },
    { icon: 'devicon-vscode-plain', label: 'VS Code', key: 'vscode' },
    { svg: '/icons/cursor.svg', label: 'Cursor', key: 'cursor' },
    { svg: '/icons/claude.svg', label: 'Claude Code', key: 'claudecode' },
    { icon: 'devicon-git-plain', label: 'git', key: 'git' },
    { icon: 'devicon-postman-plain', label: 'Postman', key: 'postman' }
  ]
}

function SkillBadge({ item }) {
  return (
    <Badge key={item.key} className={"gap-2 text-xl"} variant={'outline'}>
      {item.svg
        ? <Image src={item.svg} alt="" width={16} height={16} className="w-[1em] h-[1em]" aria-hidden="true" unoptimized />
        : <i className={item.icon}></i>}
      {' '}{item.label}
    </Badge>
  )
}

function SkillGroup({ title, items }) {
  return (
    <div className="mb-6 md:mb-16">
      <h3 className="md:text-xl h4 mb-2 text-gray-500">{title}</h3>
      <div className="flex flex-wrap gap-1">
        {items.map(item => <SkillBadge key={item.key} item={item} />)}
      </div>
    </div>
  )
}

export async function Skills() {
  const locale = await getLocale();
  setRequestLocale(locale);
  const t = await getTranslations('skills');

  const pillars = [
    { title: t('pillar1Title'), desc: t('pillar1Desc'), key: 'pillar1' },
    { title: t('pillar2Title'), desc: t('pillar2Desc'), key: 'pillar2' },
    { title: t('pillar3Title'), desc: t('pillar3Desc'), key: 'pillar3' }
  ]

  return <FadeInSection delay={100}>
    <section id="skills">
      <div className="md:container mx-auto px-2 md:px-46">
        <SectionTitle>{t('mySkills')}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 md:mb-16">
          {pillars.map(pillar => (
            <div key={pillar.key} className="p-6 rounded-xl border border-gray-200 bg-white">
              <h3 className="text-xl font-bold text-primary mb-2">{pillar.title}</h3>
              <p className="text-gray-500">{pillar.desc}</p>
            </div>
          ))}
        </div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-6">{t('fullStack')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-5">
          <SkillGroup title={t('backend')} items={skills.backend} />
          <SkillGroup title={t('infrastructure')} items={skills.infrastructure} />
          <SkillGroup title={t('database')} items={skills.databases} />
          <SkillGroup title={t('ciCdTools')} items={skills.ci} />
          <SkillGroup title={t('frontend')} items={skills.frontend} />
          <SkillGroup title={t('monitoring')} items={skills.monitoring} />
        </div>
        <div className="w-full md:flex md:justify-center text-gray-500">
          <div>
            <h3 className="md:text-xl h4 mb-2">{t('devTools')}</h3>
            <div className="flex flex-wrap">
              {
                skills.tools.map(item => <SkillBadge key={item.key} item={item} />)
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  </FadeInSection>
}
