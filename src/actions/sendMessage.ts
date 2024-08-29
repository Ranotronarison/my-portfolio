'use server'
'use strict'
import { z } from "zod"

import { Resend } from 'resend';
import ContactMailTemplate from '@/components/ContactMailTemplate';
import { revalidatePath } from "next/cache";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  message: z.string({
    required_error: 'This field cannot be empty'
  }).min(1, 'This field cannot be empty'),
  name: z.string({
    required_error: 'This field cannot be empty'
  }).min(1, 'This field cannot be empty'),
  email: z.string().min(1, 'This field cannot be empty').email()
})

export default async function sendMessage(prevState: { errors: {}, message: '' }, formData: FormData) {
  const validatedFields = schema.safeParse({
    message: formData.get('message'),
    name: formData.get('name'),
    email: formData.get('email')
  })

  if (!validatedFields.success) {
    return {
      ...prevState,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  } else {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'arivonyran@gmail.com',
      subject: `New message from ${validatedFields.data.email}`,
      react: ContactMailTemplate({ email: validatedFields.data.email, name: validatedFields.data.name, message: validatedFields.data.message })
    })

    if (error) {
      console.error(error.message)
      return {
        ...prevState,
        message: "Internal server error"
      }
    }
  }

  revalidatePath('/')
}