import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";
import useTheme from "./hooks/useTheme";
import { profile } from "./data/portfolio";

export default function App() {
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-accent", profile.accent);
  }, []);

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  );
}
