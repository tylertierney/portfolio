import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import SmallerProjects from "./components/SmallerProjects/SmallerProjects";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <SmallerProjects />
    </>
  );
}

export default App;
