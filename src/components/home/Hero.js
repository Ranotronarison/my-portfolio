import Link from "next/link"
import React from "react"
import { FadeInSection } from "../common"
import { DownloadIcon } from "lucide-react"
import { Button } from "../ui/button"

export function Hero() {
  return <section id="hero">
    <div className="flex flex-col gap-24 items-center justify-center mx-2 text-center">
      <FadeInSection delay={100}>
        <div className="flex flex-col gap-5">
          <div className="text-xl text-gray-500 text-center">Hi ! Looking for an experienced <strong className="underline">Web Developer</strong> for your project ?</div>
          <div className="flex flex-col">
            <div className="text-xl text-gray-500 text-center">My name is</div>
            <h1 className="text-5xl sm:text-6xl font-bold text-primary">{`Nomena R.`}</h1>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection delay={500}>
        <h2 className="text-2xl text-gray-500">
          I build web apps for <strong>{new Date().getFullYear() - 2019} years</strong> now.<br />
          <strong>Backend / Frontend</strong> and <strong>Devops</strong> tasks.
        </h2>
      </FadeInSection>
      <FadeInSection delay={500}>
        <Button asChild className="bg-secondary hover:bg-secondary-hover text-accent hover:text-accent rounded-full gap-2 text-xl h-[52px] transition ease-in-out hover:scale-110 duration-300">
          <Link
            href={process.env.RESUME_DL_LINK}
            target="_blank">
            <DownloadIcon />
            Download My Resume</Link>
        </Button>
      </FadeInSection>
    </div>
  </section>
}