import { ContactMe } from "@/components/contact";
import Footer from "@/components/Footer";
import { Header, Hero } from "@/components/home"
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Timeline } from "@/components/timeline";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <div className="h-screen flex justify-center items-center">
        <Hero />
      </div>
      <div className="flex justify-center items-center py-20">
        <Skills />
      </div>
      <div className="flex justify-center items-center py-16">
        <Timeline />
      </div>
      <div className="flex justify-center items-center py-16">
        <Projects />
      </div>
      <div className="flex justify-center items-center py-16">
        <ContactMe />
      </div>
      <div className="bg-white border-t">
        <Footer />
      </div>
      <ToastContainer
        autoClose={5000}
        position="top-right"
      />
    </main>
  );
}