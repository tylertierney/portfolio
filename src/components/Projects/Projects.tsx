import "./Projects.css";
import projects from "./projects";
import Project from "./Project/Project";

export default function Projects() {
  console.log(projects);

  return (
    <section id="projects" className="projects">
      <h1 className="sectionHeading">
        Projects<span className="dot">.</span>
      </h1>
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </section>
  );
}
