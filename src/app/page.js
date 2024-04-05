import ContactMe from "@/pages/app/components/ContactMe";
import Footer from "@/pages/app/components/Footer";
import Header from "@/pages/app/components/Header";
import Hero from "@/pages/app/components/Hero";
import Projects from "@/pages/app/components/Projects";
import Skills from "@/pages/app/components/Skills";
import WorkExperience from "@/pages/app/components/WorkExperience";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main >
      <Header />
      <div className="h-screen bg-gradient-to-b from-white to-gray-200 flex justify-center items-center">
        <Hero />
      </div>
      <div className="bg-gradient-to-b from-gray-200 to-white flex justify-center items-center pt-40">
        <Skills />
      </div>
      <div className="bg-gradient-to-b from-white to-gray-200 flex justify-center items-center pt-40">
        <WorkExperience />
      </div>
      <div className="bg-gradient-to-b from-gray-200 to-white flex justify-center items-center pt-40">
        <Projects />
      </div>
      <div className="bg-gradient-to-b from-white to-gray-200 flex justify-center items-center pt-40">
        <ContactMe />
      </div>
      <div>
        <Footer />
      </div>
      <ToastContainer
        autoClose={5000}
        position="top-right"
      />
    </main>
  );
}