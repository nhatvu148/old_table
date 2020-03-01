import React from "react";
import projects from "./ProjectObjects";

const valueList = Object.values(projects).map((value, index) => {
  return (
    <option key={index} id={index} value={`${value}`}>{`${value}`}</option>
  );
});

const ProjectName = props => {
  const onSelectChange = e => {
    props.onNameChange(e.target.value);
  };

  return (
    <td>
      <select
        value={props.nameState}
        onChange={onSelectChange}
        id="project-name1"
      >
        {valueList}
      </select>
    </td>
  );
};

export default ProjectName;
