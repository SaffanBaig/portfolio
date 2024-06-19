import Contact from "./components/Contact/contact";
import Experience from "./components/Experience/experience";
import Landing from "./components/Landing/landing";
import Nav from "./components/Nav";
import Projects from "./components/Projects/projects";
import Techstack from "./components/Techstack/techstack";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="px-8 py-8 md:px-32 md:py-32">
        <Landing />
        <Techstack />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
