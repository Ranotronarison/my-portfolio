const skills = {
  backend: [
    { icon: 'devicon-symfony-original', label: 'Symfony', key: 'symfony' },
    { icon: 'devicon-nodejs-plain', label: 'NodeJS', key: 'nodejs' },
    { icon: 'devicon-express-original', label: 'Express', key: 'express' }
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

export default function Skills() {
  return <div className="md:container mx-auto px-2 md:px-16">
    <h3 className="section-title">{'{ My Skills }'}</h3>
    <div className="md:grid md:grid-cols-2 md:gap-5">
      <div>
        <div className="mb-2 md:mb-16 sm:text-center md:text-left">
          <h4 className="skill-title">BACKEND</h4>
          <div className="flex flex-wrap">
            {
              skills.backend.map(item => (
                <div className="skill-badge" key={item.key}>
                  <i className={item.icon}></i> {item.label}
                </div>
              ))
            }
          </div>
        </div>
        <div className="mb-2 md:mb-16">
          <h4 className="skill-title">FRONTEND</h4>
          <div className="flex flex-wrap">
            {
              skills.frontend.map(item => (
                <div className="skill-badge" key={item.key}>
                  <i className={item.icon}></i> {item.label}
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div>
        <div className="mb-2 md:mb-16">
          <h4 className="skill-title">DATABASE</h4>
          <div className="flex flex-wrap">
            {
              skills.databases.map(item => (
                <div className="skill-badge" key={item.key}>
                  <i className={item.icon}></i> {item.label}
                </div>
              ))
            }
          </div>
        </div>
        <div className="mb-2 md:mb-16">
          <h4 className="skill-title">CI/CD & DEPLOYMENT TOOLS</h4>
          <div className="flex flex-wrap">
            {
              skills.ci.map(item => (
                <div className="skill-badge" key={item.key}>
                  <i className={item.icon}></i> {item.label}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:flex md:justify-center">
      <div>
        <h4 className="skill-title">DEVELOPMENT TOOLS AND SOFTWARES</h4>
        <div className="flex flex-wrap">
          {
            skills.tools.map(item => (
              <div className="skill-badge" key={item.key}>
                <i className={item.icon}></i> {item.label}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </div >
}