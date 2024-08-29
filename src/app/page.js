import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import Timeline from "@/components/Timeline";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <div className="h-screen blu flex justify-center items-center">
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