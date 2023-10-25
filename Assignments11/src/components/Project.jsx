import React from "react";

const Project = () => {
  const projects = ["Bangladesh", "India", "Pakistan"];
  return (
    <div className="project">
      <h2>
        This is the Project component
      </h2>

      <ul style={{ listStyle: "none" }}>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
