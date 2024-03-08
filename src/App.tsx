import "./App.css";
import Header from "./components/Header/Header";

const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
};

const sunIcon = (
  <svg className="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
    />
    <circle
      cx="256"
      cy="256"
      r="80"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
  </svg>
);

const moonIcon = (
  <svg
    className="moon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </svg>
);

// const githubIcon = (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//     <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
//   </svg>
// );

// const linkedInIcon = (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//     <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
//   </svg>
// );

// const resumeIcon = (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//     <path
//       d="M368 415.86V72a24.07 24.07 0 00-24-24H72a24.07 24.07 0 00-24 24v352a40.12 40.12 0 0040 40h328"
//       fill="none"
//       stroke="currentColor"
//       stroke-linejoin="round"
//       stroke-width="32"
//     />
//     <path
//       d="M416 464h0a48 48 0 01-48-48V128h72a24 24 0 0124 24v264a48 48 0 01-48 48z"
//       fill="none"
//       stroke="currentColor"
//       stroke-linejoin="round"
//       stroke-width="32"
//     />
//     <path
//       fill="none"
//       stroke="currentColor"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//       stroke-width="32"
//       d="M240 128h64M240 192h64M112 256h192M112 320h192M112 384h192"
//     />
//     <path d="M176 208h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16z" />
//   </svg>
// );

function App() {
  return (
    <>
      <nav>
        <button style={{ display: "flex" }} onClick={toggleTheme}>
          {moonIcon}
          {sunIcon}
        </button>
      </nav>
      <Header />
      {/* <header className="header">
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
          <div className="icons">
            {[linkedInIcon, githubIcon, resumeIcon].map((icon, i) => (
              <a key={i} style={{ width: "30px" }}>
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="headerPicContainer">
          <div className="blob accent"></div>
          <div className="blob primary"></div>
          <img
            style={{ position: "relative", width: "96%" }}
            src="/memoji-head.png"
          />
        </div>
      </header> */}
      <section id="about" className="about">
        <div className="container">
          <div
            style={{ right: "-16.5rem", top: "12.5rem" }}
            className="blurred-blob"
          ></div>
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
    </>
  );
}

export default App;
