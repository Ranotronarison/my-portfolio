/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const secretKey = process?.env?.G_RECAPTCHA_SECRET_KEY;
    const { token } = req.body

    if (!token) {
      return res.status(400).json({ success: false, message: 'Please provide a valid token !' })
    }

    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`, {
      method: 'POST',
      body: '',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })

    const responseJson = await response.json()

    return res.status(200).json(responseJson)
  }

  return res.status(405).json({ sucess: false, message: "Method not allowed" })
}