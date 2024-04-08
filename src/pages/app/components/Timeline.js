import Badge from "@/components/Badge";
import FadeInSection from "./FadeInSection";

const experiences = [
  {
    date: "July 2018",
    title: "Master's Degree in Telecommunications at Polytechnic School of Antananarivo",
    description: "Data Processing and Systems"
  },
  {
    date: "November 2019",
    title: "CS50's Mobile App Development with React Native at EDX.org",
    description: `Funded by African App Launchpad and the Malagasy Ministry of Digital Transformation, Posts and Télécommunciations. 
    <br/>Certificate : <a className='hover:text-gray-500' href='https://courses.edx.org/certificates/ee0edfbbae4f476a94de08fe7911ef53' target='_blank'>https://courses.edx.org/certificates/ee0edfbbae4f476a94de08fe7911ef53</a>`,
  },
  {
    date: "Oktober 2018 - March 2020",
    title: "Web Developer at GECKO SARL",
    description: "As part of the development team, I've been in charges of development and deployments.",
    skills: ['Symfony', 'NodeJS', 'React', 'Express.js', 'PostgreSQL']
  },
  {
    date: "March 2020 - February 2021",
    title: "Symfony/React developer at DIRIS",
    description: "In close collaboration with the project manager, my role was focused on the development of APIs on Symfony and frontend applications on React.",
    skills: ['Symfony', 'React', 'MySQL']
  },
  {
    date: "February 2021 - Mars 2024",
    title: "Web Developer at EAZYLANG TECHNOLOGIES",
    description: "I was responsible for developing new features and maintaining existing apps. I also contributed to the migration of certain apps to Amazon EKS and the implementation of Continuous Integration and Delivery.",
    skills: ['Symfony', 'React', 'NodeJS', 'MySQL', 'MongoDB', 'AWS', 'Kubernetes']
  }
]

export default function Timeline() {
  return (
    <FadeInSection>
      <section id="timeline">
        <div className="md:container mx-auto px-2 md:px-46">
          <h3 className="section-title">{'{ Timeline }'}</h3>
          <ol className="relative border-s border-gray-300 dark:border-gray-700">
            {
              experiences.map(xp => (
                <li className="mb-10 ms-4" key={xp.date}>
                  <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{xp.date}</time>
                  <h4 className="md:text-xl h4 mb-2">{xp.title}</h4>
                  <p className="text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: xp.description }}></p>
                  <div className="flex flex-wrap text-sm mt-2">
                    {
                      xp.skills?.map(skill => <Badge label={skill} key={skill} />)
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