import React from "react";
import { useParams } from "react-router-dom";
import { ProjectsData } from "../components/ProjectsData";
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLink} from "@fortawesome/free-solid-svg-icons"
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectsData[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <div className="project-img">
        <img src={project.image} />
      </div>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      
      <a href={project.githubLink}>
      <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href={project.githubLink}>
      <FontAwesomeIcon icon={faLink} style={{color: "#ededed",}} />     
      </a>
    </div>
  );
}

export default ProjectDisplay;