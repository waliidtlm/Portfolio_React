import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({name, id, image }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="projectItem"
        onClick={() => {
          navigate("/Project/" + id);
        }}
      >
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <div className="project-title">
       <h3> {name} </h3>
      </div>
      </div>



    </>
  );
}

export default ProjectItem;