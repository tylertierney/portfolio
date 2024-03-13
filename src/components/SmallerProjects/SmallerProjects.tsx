import "./SmallerProjects.css";
import { smallerProjects } from "../../projects";
import SmallerProject from "./SmallerProject/SmallerProject";

export default function SmallerProjects() {
  return (
    <section id="smallerProjects">
      <h1 className="sectionHeading">
        Smaller Projects<span className="dot">.</span>
      </h1>
      <div className="smallerProjects">
        {smallerProjects.map((project, i) => (
          <SmallerProject key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
