import Navbar from "@/components/portfolio/navbar";
import ScrollProgress from "@/components/portfolio/scroll-progress";
import Hero from "@/components/portfolio/hero";
import About from "@/components/portfolio/about";
import Skills from "@/components/portfolio/skills";
import Experience from "@/components/portfolio/experience";
import Projects from "@/components/portfolio/projects";
import Education from "@/components/portfolio/education";
import Contact from "@/components/portfolio/contact";
import Footer from "@/components/portfolio/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-[#050208] overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
