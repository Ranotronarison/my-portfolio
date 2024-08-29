import { GithubIcon, GitlabIcon, LinkedinIcon, MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <div className="md:container mx-auto px-2 md:px-46 py-5">
      <div className="md:grid md:grid-cols-3 gap-2">
        <div className="text-sm mb-2 text-center md:text-left text-gray-500">
          <div>Copyright © 2024</div>
          <div>
            <span className="font-medium">
              <a href="/">Nomena RANOTRONARISON</a>
            </span>
          </div>
        </div>
        <div className="text-sm text-center mb-2 text-gray-500">
          This website was built with <a className="font-semibold hover:text-secondary" href="https://nextjs.org/" target="_blank">NextJS</a> and deployed on <a className="font-semibold hover:text-gray-600" href="https://vercel.com/" target="_blank">Versel</a>
        </div>
        <div className="text-sm text-center md:text-right mb-2">
          <div>
            {`Let's connect`}
          </div>
          <div className="inline-flex">
            <a className="hover:text-secondary" title="LinkedIn" href="https://linkedin.com/in/nomena-ranotronarison-dev" target="_blank">
              <LinkedinIcon />
            </a>
            <a className="hover:text-secondary" title="Github" href="https://github.com/Ranotronarison" target="_blank">
              <GithubIcon />
            </a>
            <a className="hover:text-secondary" title="Gitlab" href="https://gitlab.com/Ranotronarison" target="_blank">
              <GitlabIcon />
            </a>
            <a className="hover:text-secondary" title="Email" href="mailto:arivonyran@gmail.com" target="_blank">
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}