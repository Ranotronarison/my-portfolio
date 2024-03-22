import ContactMe from "@/pages/app/components/ContactMe";
import Footer from "@/pages/app/components/Footer";
import Header from "@/pages/app/components/Header";
import Hero from "@/pages/app/components/Hero";
import Projects from "@/pages/app/components/Projects";
import Skills from "@/pages/app/components/Skills";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex justify-center items-center">
        {/* <>Header</> */}
        <Hero />
      </div>
      <div className="h-screen bg-[#E8E8E8] flex justify-center items-center py-20">
        <Skills />
      </div>
      <div className="h-screen flex justify-center items-center py-20">
        <Projects />
      </div>
      <div className="h-screen bg-[#E8E8E8] flex justify-center items-center py-20">
        <ContactMe />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}