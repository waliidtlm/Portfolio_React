import React from "react";
import { useParams } from "react-router-dom";
import { ProjectsData } from "../components/ProjectsData";
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectsData[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <FontAwesomeIcon icon={faGithub} />    
      </div>
  );
}

export default ProjectDisplay;