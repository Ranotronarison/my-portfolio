import ContactMe from "@/pages/app/components/ContactMe";
import Footer from "@/pages/app/components/Footer";
import Header from "@/pages/app/components/Header";
import Hero from "@/pages/app/components/Hero";
import Projects from "@/pages/app/components/Projects";
import Skills from "@/pages/app/components/Skills";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main >
      <Header />
      <div className="bg-gradient-to-b from-white to-gray-200 flex justify-center items-center pt-32">
        <Hero />
      </div>
      <div className="bg-gradient-to-b from-gray-200 to-white flex justify-center items-center py-20">
        <Skills />
      </div>
      <div className="bg-gradient-to-b from-white to-gray-200 flex justify-center items-center py-20">
        <Projects />
      </div>
      <div className="bg-gradient-to-b from-gray-200 to-white flex justify-center items-center py-20">
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