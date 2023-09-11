import React from "react";
import { ProjectsList } from "../helpers/ProjectsList";
import "../style/Projects.css";
import ProjectsItem from "../components/ProjectsItem";

function Menu() {
  return (
    <div className="projects">
      <h1 className="projectsTitle">DIFFERENT DESIGN IDEAS</h1>
      <div className="projectsList">
        {ProjectsList.map((ProjectItem, key) => {
          return (
            <ProjectsItem
              key={key}
              image={ProjectItem.image}
              name={ProjectItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
