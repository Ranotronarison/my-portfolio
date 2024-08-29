'use client'
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import FadeInSection from "./FadeInSection";
import { useState } from "react";
import { useFormState } from "react-dom"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sendMessage from "@/actions/sendMessage";

export default function ContactMe() {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [formState, formAction] = useFormState(sendMessage, { errors: {}, message: '' })
  const errors = formState?.errors

  return <FadeInSection delay={100}>
    <section id="contact-me">
      <div className="md:container mx-auto px-2 md:px-46 w-full mb-48">
        <h3 className="section-title">{'{ Contact me }'}</h3>
        <form action={formAction} className="space-y-8 mx-auto w-full md:w-1/2">
          <div className="w-full">
            <input
              className="w-full rounded-sm p-2"
              type="text"
              name="name"
              placeholder="Name *"
            />
            {
              errors?.name && <span className={`text-red-500 text-sm`}>{errors.name[0]}</span>
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
              errors?.email && <span className={`text-red-500 text-sm`}>{errors.email[0]}</span>
            }
          </div>
          <div className="w-full">
            <textarea
              className="w-full rounded-sm p-2"
              name="message"
              placeholder="Your message *"
            />
            {
              errors?.message && <span className={`text-red-500 text-sm`}>{errors.message[0]}</span>
            }
          </div>
          <button type="submit" className="rounded-full bg-neutral-950 py-2 px-5 text-white hover:bg-neutral-800 text-base text-center focus:ring-2 focus:ring-neutral-400">Submit</button>
        </form>
      </div>
    </section>
  </FadeInSection>
}