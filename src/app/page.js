import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <div className="h-screen bg-gradient-to-b from-white to-gray-200 flex justify-center items-center">
        <Hero />
      </div>
      <div className="bg-gradient-to-b from-gray-200 to-white flex justify-center items-center pt-20">
        <Skills />
      </div>
      <div className="bg-gradient-to-b from-white to-gray-200 flex justify-center items-center pt-40">
        <Timeline />
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