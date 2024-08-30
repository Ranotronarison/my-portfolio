'use server'
'use strict'
import { z } from "zod"

import { Resend } from 'resend';
import { ContactMailTemplate } from '@/components/contact';
import { revalidatePath } from "next/cache";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  message: z.string({
    required_error: 'This field cannot be empty'
  }).min(1, 'This field cannot be empty'),
  fullName: z.string({
    required_error: 'This field cannot be empty'
  }).min(1, 'This field cannot be empty'),
  email: z.string().min(1, 'This field cannot be empty').email()
})

export default async function sendMessage({ email, message, fullName }: z.infer<typeof schema>) {
  const validatedFields = schema.safeParse({ message, fullName, email })


  if (validatedFields.error) {
    throw new Error(validatedFields.error.message)
  }

  const { data, error } = await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to: 'arivonyran@gmail.com',
    subject: `New message from ${email}`,
    react: ContactMailTemplate({ email, fullName, message })
  })

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath('/')

  return {
    success: true
  }
}