import { Inter } from "next/font/google";
import "./globals.css";
import "devicon";
import GoogleReCaptchaWrapper from "@/pages/app/components/GoogleReCaptchaWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nomena RANOTRONARISON | Portfolio",
  description: "Experimented Web developer from Madagascar. Symfony, React, PHP, JavaScript, TypeScript,",
  keywords: ['Portfolio', 'Developer', 'Nomena', 'Madagascar'],
  icons: {
    icon: '/images/favicon.png'
  }
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
