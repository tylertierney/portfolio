import { PropsWithChildren } from "react";
import { IProject } from "../../../projects";
import "./Project.css";
import { arrowIcon, githubIcon } from "../../../icons/icons";
import TechStackIcon from "./TechStackIcon/TechStackIcon";
import LinkButton from "../../LinkButton/LinkButton";

interface ProjectProps {
  project: IProject;
}

export default function Project({
  project,
  children,
}: PropsWithChildren<ProjectProps>) {
  return (
    <div className="project">
      <div className="info">
        <h4 className="title">{project.title}</h4>
        <p className="description">{project.description}</p>
        <div className="techStackIcons">
          {project.techStack.map(({ name }, i) => (
            <TechStackIcon key={i} name={name} />
          ))}
        </div>
        <div className="buttons">
          <LinkButton color="green" href={project.github} target="_blank">
            <span>Github</span>
            {githubIcon}
          </LinkButton>
          <LinkButton color="blue" href={project.hostedSite} target="_blank">
            <span>Live Site</span>
            {arrowIcon}
          </LinkButton>
        </div>
      </div>
      {children}
      <div className="images">
        <img className="featuredImage" src={project.featuredImage} />
      </div>
    </div>
  );
}
