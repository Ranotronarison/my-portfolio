import Link from "next/link"
import FadeInSection from "./FadeInSection"

export default function Hero() {
  return <FadeInSection>
    <section id="hero">
      <div className="text-center px-2 md:px-46 fade-in-anim">
        <div className="mb-16 text-xl">Hi ! Looking for an experienced <strong className="underline">Web Developer</strong> for your project ?</div>
        <div className="mb-3 text-xl">My name is</div>
        <div className="mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white px-0"><span className="bg-gray-500 rounded-sm">{`{ Nomena R. }`}</span></h1>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl">
            I build web apps for <strong>{new Date().getFullYear() - 2019} years</strong> now.<br />
            <strong>Backend / Frontend</strong> and <strong>Devops</strong> tasks.
          </h2>
        </div>
        <div className="mb-16">
          <Link href={"https://drive.google.com/file/d/1XTB_4-hmGIUUAB6RlrXmCL9zX4zhW6bd/view?usp=drive_link"} target="_blank" className="rounded-full bg-neutral-950 py-2 px-5 text-white hover:bg-neutral-800 text-base text-center focus:ring-2 focus:ring-neutral-400">
            <svg className="w-6 h-6 me-2 text-white inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clipRule="evenodd" />
            </svg>
            Download My Resume</Link>
        </div>
      </div>
    </section>
  </FadeInSection>
}