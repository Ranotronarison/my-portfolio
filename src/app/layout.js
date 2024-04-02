import { Inter } from "next/font/google";
import "./globals.css";
import "devicon";
import GoogleReCaptchaWrapper from "@/pages/app/components/GoogleReCaptchaWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <GoogleReCaptchaWrapper>
          {children}
        </GoogleReCaptchaWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
