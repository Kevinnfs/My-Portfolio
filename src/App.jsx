import Home from "./Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";

export default function App() {
  return (
    <div className="mx-auto mb-12 pt-20">
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
