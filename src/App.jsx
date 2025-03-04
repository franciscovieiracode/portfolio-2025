import "./App.css";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import ProProjects from "./components/ProProjects/ProProjects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Hero />
      <ProProjects />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
