'use client'
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FadeInSection, SectionTitle } from "../common";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sendMessage from "@/actions/sendMessage";
import { LoaderCircle, SendHorizonalIcon } from "lucide-react";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your full name" }).max(100),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z.string().min(2, { message: "Please enter a message" }).max(500)
})


export function ContactMe() {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      message: ''
    }
  })

  const { isSubmitting } = form.formState

  const onSubmit = async (data) => {
    const send = await sendMessage(data)
    if (send.success) {
      form.reset()
      toast.success('Message sent successfully')
    } else {
      toast.error('Something went wrong')
    }
  }

  return <FadeInSection delay={100}>
    <section id="contact-me">
      <div className="md:container w-screen md:w-[450px] mx-auto px-2">
        <SectionTitle>Contact Me</SectionTitle>
        <Form {...form}>
          <form action={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto w-full">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input disabled={isSubmitting} className="rounded-full bg-white focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300"
                      placeholder="Your name"
                      autoComplete="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input disabled={isSubmitting} className="rounded-full bg-white focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300" placeholder="amazingemail@example.com" autoComplete="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea disabled={isSubmitting} className="rounded-xl bg-white focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300" placeholder="Your message" autoComplete="off" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isSubmitting} type="submit" className="flex justify-between items-center gap-2 rounded-full bg-secondary py-2 px-5 text-white hover:bg-secondary-hover text-base text-center">
              Send
              {isSubmitting ? <LoaderCircle className="w-5 h-5 animate-spin" /> : <SendHorizonalIcon className="w-5 h-5" />}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  </FadeInSection>
}