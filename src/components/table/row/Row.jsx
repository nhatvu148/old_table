import React, { useState } from "react";
import ProjecID from "./ProjectID";
import ProjecName from "./ProjectName";
import SubID from "./SubID";
import SubName from "./SubName";
import projects from "./ProjectObjects";
import subObjects from "./SubObjects";

const Row = props => {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  const [state, setState] = useState({
    projectId: "Choose",
    projectName: "Choose",
    subId: "Choose",
    subName: "Choose"
  });

  const onIdChange = id => {
    setState(prevState => {
      return {
        ...prevState,
        projectId: `${id}`,
        projectName: `${projects[id]}`
      };
    });
  };

  const onNameChange = name => {
    setState(prevState => {
      return {
        ...prevState,
        projectId: `${Object.keys(projects).find(
          key => projects[key] === name
        )}`,
        projectName: `${name}`
      };
    });
  };

  const onSubIdChange = subId => {
    setState(prevState => {
      return {
        ...prevState,
        subId: `${subId}`,
        subName: `${subObjects[subId]}`
      };
    });
  };

  const onSubNameChange = subName => {
    setState(prevState => {
      return {
        ...prevState,
        subId: `${Object.keys(subObjects).find(
          key => subObjects[key] === subName
        )}`,
        subName: `${subName}`
      };
    });
  };

  return (
    <tr id="row1">
      <ProjecID onIdChange={onIdChange} idState={state.projectId} />
      <ProjecName onNameChange={onNameChange} nameState={state.projectName} />
      <SubID onSubIdChange={onSubIdChange} subIdState={state.subId} />
      <SubName onSubNameChange={onSubNameChange} subNameState={state.subName} />
      <td>
        <input type="time" name="startTime1" />
      </td>
      <td>
        <input type="time" name="endTime1" />
      </td>
      <td>
        <input type="time" name="workTime1" readOnly />
      </td>
      <td>
        <input type="text" name="status1" />
      </td>
      <td>
        <input
          type="text"
          name="comment1"
          value={props.randomNumber}
          readOnly
        />
      </td>
      <td>
        <button onClick={handleClick}>Delete</button>
      </td>
    </tr>
  );
};

export default Row;
