import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectsData } from "../components/ProjectsData";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal <span>Projects</span> </h1>
      <div className="ProjectData">
        {ProjectsData.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name}  image={project.image}  />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;