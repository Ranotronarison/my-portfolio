'use client'
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FadeInSection, SectionTitle } from "../common";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sendMessage from "@/actions/sendMessage";
import { LoaderCircle, SendHorizonalIcon } from "lucide-react";
import { Button } from "../ui/button";

export function ContactMe() {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const { formState: { errors, isLoading } } = useForm()

  return <FadeInSection delay={100}>
    <section id="contact-me">
      <div className="md:container mx-auto px-2 md:w-[450px] w-full">
        <SectionTitle>Contact Me</SectionTitle>
        <form action={formAction} className="space-y-8 mx-auto w-full">
          <div className="w-full">
            <input
              className="w-full rounded-sm p-2"
              type="text"
              name="name"
              placeholder="Name *"
            />
            {
              errors?.name && <span className={`text-destructive text-sm`}>{errors.name[0]}</span>
            }

          </div>
          <div className="w-full">
            <input
              className="w-full rounded-sm p-2"
              type="text"
              name="email"
              placeholder="Email *"
            />
            {
              errors?.email && <span className={`text-destructive text-sm`}>{errors.email[0]}</span>
            }
          </div>
          <div className="w-full">
            <textarea
              className="w-full rounded-sm p-2"
              name="message"
              placeholder="Your message *"
            />
            {
              errors?.message && <span className={`text-destructive text-sm`}>{errors.message[0]}</span>
            }
          </div>
          <Button type="submit" className="flex justify-between items-center gap-2 rounded-full bg-secondary py-2 px-5 text-white hover:bg-secondary-hover text-base text-center focus:ring-2 focus:ring-neutral-400">
            Submit
            {isLoading ? <div className="animate-spin"><LoaderCircle className="w-5 h-5" /></div> : <SendHorizonalIcon className="w-5 h-5" />}
          </Button>
        </form>
      </div>
    </section>
  </FadeInSection>
}