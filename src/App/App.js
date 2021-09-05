import "./app.css";
import Navbar from "../Navbar/Navbar";
import ThemeContext, { themes } from "../ThemeContext/ThemeContext";
import { useState, useRef } from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  const homeRef = useRef();
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    switch (ref) {
      case "home":
        homeRef.current.scrollIntoView();
        break;
      case "about":
        aboutRef.current.scrollIntoView();
        break;
      case "projects":
        projectsRef.current.scrollIntoView();
        break;
      case "experience":
        experienceRef.current.scrollIntoView();
        break;
      case "contact":
        contactRef.current.scrollIntoView();
        break;
      default:
        break;
    }
  };

  // handleScroll("about");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div ref={homeRef}>
        <Home
        // ref={homeRef}
        />
      </div>

      <Navbar handleScroll={handleScroll} />
      <div ref={aboutRef}>
        <About
        // ref={aboutRef}
        />
      </div>
      <div ref={projectsRef}>
        <Projects
        // ref={projectsRef}
        />
      </div>
      <div ref={experienceRef}>
        <Experience
        // ref={experienceRef}
        />
      </div>
      <div ref={contactRef}>
        <Contact
        // ref={contactRef}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
