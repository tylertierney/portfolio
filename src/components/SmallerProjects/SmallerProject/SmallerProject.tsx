import { PropsWithChildren } from "react";
import { ISmallProject } from "../../../projects";
import "./SmallerProject.css";
import { arrowIcon, githubIcon } from "../../../icons/icons";
import LinkButton from "../../LinkButton/LinkButton";

interface SmallerProjectProps {
  project: ISmallProject;
}

export default function SmallerProject({
  project,
}: PropsWithChildren<SmallerProjectProps>) {
  const imageWidth = 360;

  return (
    <div
      className="smallerProject"
      style={{
        boxShadow: `0px 0px 5px 1px color-mix(in srgb, ${project.color} 50%, var(--text))`,
      }}
    >
      <img
        className="img"
        src={project.featuredImage}
        height={imageWidth * 0.75 + "px"}
        width="100%"
      />
      <div className="info">
        <span className="title">{project.title}</span>
        <p className="description">{project.description}</p>
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
    </div>
  );
}
