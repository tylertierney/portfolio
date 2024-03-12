import "./Projects.css";
import projects from "./projects";
import Project from "./Project/Project";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h1 className="sectionHeading">
        Projects<span className="dot">.</span>
      </h1>
      {projects.map((project, i) => (
        <>
          <Project key={i} project={project}>
            {i === 1 && (
              <div
                className="blurred-blob primary"
                style={{
                  left: "-14rem",
                  top: "0px",
                  // top: "90px",
                  opacity: 0.5,
                }}
              ></div>
            )}
            {i === 2 && (
              <div
                className="blurred-blob accent"
                style={{ right: "-14rem", top: "70%", opacity: 0.7 }}
              ></div>
            )}
          </Project>
        </>
      ))}
    </section>
  );
}
