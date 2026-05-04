import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Timeline } from "./components/Timeline";
import { Projects } from "./components/Projects";
import { Speaking } from "./components/Speaking";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Speaking />
        <Education />
        <Skills />
        <Experience />
        <Timeline />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
