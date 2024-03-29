
import { Resend } from 'resend';
import { ContactMailTemplate } from '../app/components/ContactMailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body

    if ([email, name, message].includes("") || [email, name, message].includes(undefined)) {
      return res.status(400)
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'arivonyran@gmail.com',
      subject: `New message from ${email}`,
      react: ContactMailTemplate({ email, name, message })
    })

    if (error) {
      return res.status(500)
    }

    return res.status(200).json({ success: true })
  } else {
    return res.status(405).json({ sucess: false, message: "Method not allowed" })
  }
}

