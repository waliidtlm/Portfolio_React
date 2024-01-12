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
      <div  className="project-img">
        <img src={project.image} />
      </div>
      <p>
        <b>Skills:</b> {project.skills}
      </p>

      <div className="icons">
      <a href={project.githubLink} target="_blank">
      <FontAwesomeIcon icon={faGithub} style={{color: "#ededed",}}  className="github"/>
      </a>

      <a href={project.link} target="_blank">
      <FontAwesomeIcon icon={faLink} style={{color: "#ededed",}} className="link" />     
      </a>
      </div>

    </div>
  );
}

export default ProjectDisplay;