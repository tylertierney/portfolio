import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <div
          style={{ left: "-12.5rem", top: "calc(100% + 12.5rem)" }}
          className="blurred-blob"
        ></div>
        <div className="intro">
          <h1>
            Hi, my name is&nbsp;
            <b>
              Tyler
              <span className="dot">.</span>
            </b>
          </h1>
          <p>
            I am a <b>frontend developer</b> based in Tampa, Florida.
          </p>
        </div>
        <div className="headerPicContainer">
          <div className="blob"></div>
          <img
            style={{ position: "relative", width: "96%" }}
            src="/public/memoji-head.png"
          />
        </div>
      </header>
      <section id="about" className="about">
        <h1 className="sectionHeading">
          About me<span className="dot">.</span>
        </h1>
        <p>
          My name is Tyler Tierney and I'm a frontend developer. I graduated
          from the University of Florida in 2019.
        </p>
        <p>
          After graduation, I worked as an Account Executive in local
          advertising and then as a Revenue Operations Manager in commercial
          real estate. Nowadays, I spend my time writing code in order to create
          websites for clients in the financial industry.
        </p>
        <button>Get my résumé</button>
      </section>
    </>
  );
}

export default App;
