import React from "react";
import subObjects from "./SubObjects";

const keyList = Object.keys(subObjects).map((key, index) => {
  return <option key={index} id={index} value={`${key}`}>{`${key}`}</option>;
});

const SubID = props => {
  const onSelectChange = e => {
    props.onSubIdChange(e.target.value);
  };

  return (
    <td>
      <select value={props.subIdState} onChange={onSelectChange} id="sub-id1">
        {keyList}
      </select>
    </td>
  );
};

export default SubID;
