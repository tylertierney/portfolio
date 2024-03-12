import { PropsWithChildren } from "react";
import { IProject } from "../../../projects";
import "./SmallerProject.css";
import { arrowIcon, githubIcon } from "../../../icons/icons";

interface SmallerProjectProps {
  project: IProject;
}

export default function SmallerProject({
  project,
}: PropsWithChildren<SmallerProjectProps>) {
  const imageWidth = 360;

  return (
    <div
      className="smallerProject"
      style={{
        // width: imageWidth + "px",
        boxShadow: `0px 0px 5px 1px color-mix(in srgb, ${project.color} 50%, var(--text))`,
      }}
    >
      <img
        className="img"
        src={project.desktop_screenshot}
        height={imageWidth * 0.75 + "px"}
        width="100%"
      />
      <div className="info">
        <span className="title">{project.title}</span>
        <p className="description">{project.description}</p>
        <div className="buttons">
          <a className="button" href={project.github} target="_blank">
            <span>Github</span>
            {githubIcon}
          </a>
          <a className="button" href={project.hostedSite} target="_blank">
            <span>Live Site</span>
            {arrowIcon}
          </a>
        </div>
      </div>
    </div>
  );
}
