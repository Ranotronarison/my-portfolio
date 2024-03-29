import { Inter } from "next/font/google";
import "./globals.css";
import "devicon";
import GoogleReCaptchaWrapper from "@/pages/app/components/GoogleReCaptchaWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nomena RANOTRONARISON | Portfolio",
  description: "Web developer | Devops",
  keywords: ['Portfolio', 'Developer', 'Nomena'],
  icons: {
    icon: '/images/favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleReCaptchaWrapper>
        <body className={inter.className}>{children}</body>
        <SpeedInsights />
      </GoogleReCaptchaWrapper>
    </html>
  );
}
