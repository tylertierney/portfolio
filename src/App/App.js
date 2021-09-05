import "./app.css";
import Navbar from "../Navbar/Navbar";
import ThemeContext, { themes } from "../ThemeContext/ThemeContext";
import { useState, useRef } from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Home ref={homeRef} />
      <Navbar />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Experience ref={experienceRef} />
    </ThemeContext.Provider>
  );
}

export default App;
