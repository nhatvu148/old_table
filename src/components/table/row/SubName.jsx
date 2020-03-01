import React from "react";
import subObjects from "./SubObjects";

const valueList = Object.values(subObjects).map((value, index) => {
  return (
    <option key={index} id={index} value={`${value}`}>{`${value}`}</option>
  );
});

const SubName = props => {
  const onSelectChange = e => {
    props.onSubNameChange(e.target.value);
  };

  return (
    <td>
      <select
        value={props.subNameState}
        onChange={onSelectChange}
        id="sub-name1"
      >
        {valueList}
      </select>
    </td>
  );
};

export default SubName;
