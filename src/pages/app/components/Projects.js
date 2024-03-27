import Image from "next/image"
import FadeInSection from "./FadeInSection"

const projects = [
  {
    name: "Eazylang Marketplace",
    alt: "eazylang marketplace",
    image: "/images/eazylang-app.PNG",
    description: "Contributor and website maintainer for Eazylang Marketplace.",
    builtWith: [
      "Symfony", "JavaScript", "Kubernetes", "AWS", "Gitlab"
    ],
    link: "https://app.eazylang.com"
  },
  {
    name: "Eazylang Workplace",
    alt: "eazylang workplace",
    image: "/images/workplace.PNG",
    description: "Contribution to the development and deployment of web services which constitute the Eazylang Workplace platform.",
    builtWith: [
      "Symfony", "React", "TypeScript", "Gitlab", "Kubernetes"
    ],
    link: "https://workplace.eazylang.com"
  },
  {
    name: "E-Visa Madagascar",
    alt: "evisa Madagascar",
    image: "/images/evisamada.jpg",
    description: "Contributor and maintainer of the official electronic visa issuer website for Madagascar",
    builtWith: [
      "symfony", "React", "NodeJs", "Express.js", "Gitlab"
    ],
    link: "https://evisamada-mg.com/fr/home"
  }
]

export default function Projects() {
  return <FadeInSection>
    <section id="projects">
      <div className="md:container mx-auto px-2 md:px-46">
        <h3 className="section-title">{'{ Projects }'}</h3>
        {
          projects.map((project) => (
            <div className="flex overflow-hidden mb-2 md:mb-4" key={project.name.toLowerCase().trim()}>
              <div className="w-3/4">
                <h4 className="md:text-xl h4 mb-2 hover:text-gray-500 hover:underline"><a href={project.link}>{project.name}</a></h4>
                <p className="text-sm text-gray-500">{project.description}</p>
                <div className="flex flex-wrap text-sm mt-2">
                  {project.builtWith.map(item => (
                    <div className="rounded-sm px-1 bg-gray-500 me-1 text-white" key={item}>{item}</div>
                  ))}
                </div>
              </div>
              <div className="w-1/4 my-auto relative">
                <Image className="h-auto w-full" width={0} height={0} src={project.image} alt={project.alt} sizes="100vh" />
                <a href={project.link} target="_blank">
                  <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.5)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 flex items-center justify-center text-black">
                    Go to site {'->'}
                  </div>
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  </FadeInSection>
}