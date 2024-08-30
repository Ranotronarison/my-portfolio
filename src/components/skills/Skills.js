import { SectionTitle, FadeInSection } from "../common"
import { Badge } from "../ui/badge"

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
  ci: [
    { icon: 'devicon-gitlab-plain', label: 'Gitlab', key: 'gitlab' },
    { icon: 'devicon-kubernetes-plain', label: 'Kubernetes', key: 'kubernetes' },
    { icon: 'devicon-docker-plain', label: 'Docker', key: 'docker' }
  ],
  tools: [
    { icon: 'devicon-phpstorm-plain', label: 'PhpStorm', key: 'phpstorm' },
    { icon: 'devicon-vscode-plain', label: 'VS Code', key: 'vscode' },
    { icon: 'devicon-git-plain', label: 'git', key: 'git' },
    { icon: 'devicon-postman-plain', label: 'Postman', key: 'postman' }
  ]
}

export function Skills() {
  return <FadeInSection delay={100}>
    <section id="skills">
      <div className="md:container mx-auto px-2 md:px-46">
        <SectionTitle>My Skills</SectionTitle>
        <div className="md:grid md:grid-cols-2 md:gap-5">
          <div>
            <div className="mb-2 md:mb-16 sm:text-center md:text-left">
              <h4 className="md:text-xl h4 mb-2 text-gray-500">BACKEND</h4>
              <div className="flex flex-wrap gap-1">
                {
                  skills.backend.map(item => (
                    <Badge key={item.key} className={"gap-2 text-xl"} variant={'outline'}>
                      <i className={item.icon}></i> {item.label}
                    </Badge>
                  ))
                }
              </div>
            </div>
            <div className="mb-2 md:mb-16">
              <h4 className="md:text-xl h4 mb-2 text-gray-500">FRONTEND</h4>
              <div className="flex flex-wrap">
                {
                  skills.frontend.map(item => (
                    <Badge key={item.key} className={"gap-2 text-xl"} variant={'outline'}>
                      <i className={item.icon}></i> {item.label}
                    </Badge>
                  ))
                }
              </div>
            </div>
          </div>
          <div>
            <div className="mb-2 md:mb-16">
              <h4 className="md:text-xl h4 mb-2 text-gray-500">DATABASE</h4>
              <div className="flex flex-wrap">
                {
                  skills.databases.map(item => (
                    <Badge key={item.key} className={"gap-2 text-xl"} variant={'outline'}>
                      <i className={item.icon}></i> {item.label}
                    </Badge>
                  ))
                }
              </div>
            </div>
            <div className="mb-2 md:mb-16">
              <h4 className="md:text-xl h4 mb-2 text-gray-500">CI/CD & DEPLOYMENT TOOLS</h4>
              <div className="flex flex-wrap">
                {
                  skills.ci.map(item => (
                    <Badge key={item.key} className={"gap-2 text-xl"} variant={'outline'}>
                      <i className={item.icon}></i> {item.label}
                    </Badge>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:flex md:justify-center text-gray-500">
          <div>
            <h4 className="md:text-xl h4 mb-2">DEVELOPMENT TOOLS AND SOFTWARES</h4>
            <div className="flex flex-wrap">
              {
                skills.tools.map(item => (
                  <Badge key={item.key} className={"gap-2 text-xl"} variant={'outline'}>
                    <i className={item.icon}></i> {item.label}
                  </Badge>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  </FadeInSection>
}