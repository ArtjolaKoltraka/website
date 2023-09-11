import React from "react";

function ProjectsItem(props) {
  const { name, image } = props;
  return (
    <div className="menuItem">
      <h1>{name}</h1>
      <img src={image} alt="" />
    </div>
  );
}

export default ProjectsItem;
