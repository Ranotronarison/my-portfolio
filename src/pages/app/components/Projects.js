import Image from "next/image"

const projects = [
  {
    name: "Eazylang App",
    alt: "eazylang logo",
    image: "/images/eazylang-app.PNG",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    builtWith: [
      "Symfony", "JavaScript", , "Kubernetes", "AWS"
    ]
  },
  {
    name: "Eazylang Workplace",
    alt: "workplace logo",
    image: "/images/eazylang-app.PNG",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    builtWith: [
      "Symfony", "React", "TypeScript", "Gitlab-ci"
    ]
  },
  {
    name: "Another One",
    alt: "another logo",
    image: "/images/eazylang-app.PNG",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    builtWith: [
      "NextJS", "Tailwindcss", "Versel"
    ]
  }
]

export default function Projects() {
  return <div className="md:container mx-auto px-2 md:px-16">
    <h3 className="section-title">{'{ Latest Projects }'}</h3>
    <div className="grid md:grid-cols-2 grid-cols-1 gap-2 place-items-center">
      {
        projects.map((project) => (
          <div className="border rounded-sm relative group place-self-center" key={project.name.toLowerCase().trim()}>
            <Image src={project.image} width={0} height={0} alt={project.alt} className="w-full h-auto rounded-sm" sizes="100vh" />
            <div className="rounded-sm rounded-s-none text-lg md:text-2xl font-medium absolute w-full opacity-50 top-0 flex justify-center bg-slate-500 group-hover:opacity-90 group-hover:h-full group-hover:transition-all">
              <div className="text-center">
                <div className="text-white">{project.name}</div>
                <div className="group-hover:block hidden">
                  <div className="flex flex-wrap text-sm mt-10">
                    {project.builtWith.map(item => (
                      <div className="rounded-sm px-1 bg-slate-400 me-1 text-white" key={item}>{item}</div>
                    ))}
                  </div>
                  <a href="/" className="text-white text-sm">Go to site {"->"}</a>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  </div>
}