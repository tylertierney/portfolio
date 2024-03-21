import LinkButton from "../LinkButton/LinkButton";

export default function About() {
  return (
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
        <p className="body-paragraph" style={{ marginBottom: "20px" }}>
          After graduation, I worked as an Account Executive in local
          advertising and then as a Revenue Operations Manager in commercial
          real estate. Nowadays, I spend my time writing code in order to create
          websites for clients in the financial industry.
        </p>
        <LinkButton color="blue" href="TylerTierneyResume.pdf" target="_blank">
          Get my résumé
        </LinkButton>
      </div>
    </section>
  );
}
