import { PropsWithChildren } from "react";
import { IProject } from "../../../projects";
import "./Project.css";
import {
  amazonS3Icon,
  angularIcon,
  arrowIcon,
  auth0Icon,
  chakraIcon,
  emailIcon,
  firebaseIcon,
  githubIcon,
  herokuIcon,
  mongoDbIcon,
  netlifyIcon,
  nextJsIcon,
  nodeIcon,
  reactIcon,
  socketIoIcon,
} from "../../../icons/icons";
import TechStackIcon from "./TechStackIcon/TechStackIcon";

// const techStackIcons = new Map<string, JSX.Element>([
//   ["React", reactIcon],
//   ["Node JS", nodeIcon],
//   ["Heroku", herokuIcon],
//   ["Socket.IO", socketIoIcon],
//   ["Netlify", netlifyIcon],
//   ["Chakra UI", chakraIcon],
//   ["Firebase", firebaseIcon],
//   ["Next.js", nextJsIcon],
//   ["MongoDB", mongoDbIcon],
//   ["Auth0", auth0Icon],
//   ["Angular", angularIcon],
//   ["Netlify Identity", netlifyIcon],
//   ["Amazon S3", amazonS3Icon],
//   ["SendGrid", emailIcon],
// ]);

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
            // <div key={i} className="container">
            //   <div className="icon">{techStackIcons.get(name)}</div>
            //   <span className="name">{name}</span>
            // </div>
            <TechStackIcon key={i} name={name} />
          ))}
        </div>
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
      {children}
      <div className="images">
        <img className="featuredImage" src={project.featuredImage} />
      </div>
    </div>
  );
}
