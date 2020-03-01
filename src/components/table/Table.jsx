import React, { useState } from "react";
import Header from "./Header";
import Row from "./row/Row";
import LastRow from "./LastRow";

function Table() {
  const [rows, setRows] = useState([]);

  const addRow = () => {
    setRows(prevRow => {
      return [...prevRow, Math.random() * 10];
    });
  };

  const deleteItem = id => {
    setRows(prevRow => {
      return prevRow.filter((rowItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="table-responsive">
      <h2>Input Daily Data</h2>
      <button
        onClick={addRow}
        id="addBtn"
        type="button"
        className="btn btn-sm btn-outline-secondary"
      >
        Add Project
      </button>
      <table className="table table-striped table-sm">
        <Header />
        <tbody>
          {rows.map((rowItem, index) => {
            return (
              <Row
                key={index}
                id={index}
                randomNumber={rowItem}
                onDelete={deleteItem}
              />
            );
          })}
          <LastRow />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
