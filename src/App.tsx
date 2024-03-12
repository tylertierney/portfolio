import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <section id="about" className="about">
        <div
          style={{
            right: "-16.5rem",
            top: "12.5rem",
          }}
          className="blurred-blob accent"
        ></div>
        <div className="container">
          <h1 className="sectionHeading">
            About me<span className="dot">.</span>
          </h1>
          <p className="body-paragraph">
            My name is Tyler Tierney and I'm a frontend developer. I graduated
            from the University of Florida in 2019.
          </p>
          <p style={{ marginBottom: "20px" }}>
            After graduation, I worked as an Account Executive in local
            advertising and then as a Revenue Operations Manager in commercial
            real estate. Nowadays, I spend my time writing code in order to
            create websites for clients in the financial industry.
          </p>
          <a
            className="button"
            href="/public/TylerTierney_Resume.pdf"
            target="_blank"
          >
            Get my résumé
          </a>
        </div>
      </section>
      <Projects />
    </>
  );
}

export default App;
