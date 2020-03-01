import React from "react";
import projects from "./ProjectObjects";

const keyList = Object.keys(projects).map((key, index) => {
  return <option key={index} id={index} value={`${key}`}>{`${key}`}</option>;
});

const ProjectID = props => {
  const onSelectChange = e => {
    props.onIdChange(e.target.value);
  };

  return (
    <td>
      <select value={props.idState} onChange={onSelectChange} id="project-id1">
        {keyList}
      </select>
    </td>
  );
};

export default ProjectID;
