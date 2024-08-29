import "./globals.css";
import "devicon";
import GoogleReCaptchaWrapper from "@/components/GoogleReCaptchaWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from 'next/font/local'

const myFont = localFont({ src: '../../public/fonts/RobotoSlab-VariableFont_wght.ttf' })

export const metadata = {
  title: "Nomena R. | Web Developer",
  description: "Experimented Web developer from Madagascar. Symfony, React, PHP, JavaScript, TypeScript and more ...",
  keywords: ['Web Developer', 'Fullstack', 'Symfony', 'NodeJs', 'React', 'Madagascar', 'Nomena'],
  icons: {
    icon: '/images/favicon.png'
  },
  alternates: {
    canonical: process.env.WEBSITE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <GoogleReCaptchaWrapper>
          {children}
        </GoogleReCaptchaWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
