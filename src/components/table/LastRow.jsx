import React from "react";

function LastRow(props) {
  return (
    <tr id="lastRow">
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th>Total</th>
      <th>
        <input type="time" className="Total" name="Total" readOnly />
      </th>
      <th></th>
      <th></th>
    </tr>
  );
}

export default LastRow;
